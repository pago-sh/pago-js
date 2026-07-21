import { Buffer } from "node:buffer";
import { createHmac, timingSafeEqual } from "node:crypto";
//#region src/base.ts
var PagoError = class extends Error {};
var PagoNetworkError = class extends PagoError {
	constructor(message) {
		super(`Pago API network error: ${message}`);
		this.name = "PagoNetworkError";
	}
};
var PagoServerError = class extends PagoError {
	constructor(statusCode, message) {
		super(`Pago API returned a server error: ${statusCode} - ${message}`);
		this.name = "PagoServerError";
	}
};
var PagoClientError = class extends PagoError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(`Pago API returned an error: ${statusCode} - ${JSON.stringify(error)}`);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "PagoClientError";
	}
};
var PagoRateLimitError = class extends PagoClientError {
	statusCode;
	retryAfter;
	constructor(statusCode, retryAfter = null) {
		super(statusCode, "Rate limit exceeded");
		this.statusCode = statusCode;
		this.retryAfter = retryAfter;
		this.name = "PagoRateLimitError";
	}
};
const buildUrl = (url, pathParams, queryParams) => {
	let formattedUrl = url;
	if (pathParams) {
		for (const [key, value] of Object.entries(pathParams)) if (value !== null && value !== void 0) formattedUrl = formattedUrl.replace(`{${key}}`, encodeURIComponent(String(value)));
	}
	if (queryParams) {
		const searchParams = new URLSearchParams();
		for (const [key, value] of Object.entries(queryParams)) if (value !== null && value !== void 0) if (Array.isArray(value)) for (const item of value) searchParams.append(key, String(item));
		else if (typeof value === "object") {
			for (const [subKey, subValue] of Object.entries(value)) if (subValue !== null && subValue !== void 0) searchParams.append(`${key}[${subKey}]`, String(subValue));
		} else searchParams.append(key, String(value));
		const queryString = searchParams.toString();
		if (queryString) formattedUrl = `${formattedUrl}?${queryString}`;
	}
	return formattedUrl;
};
var ClientBase = class {
	options;
	constructor(options) {
		this.options = options;
	}
	buildRequest(method, url, pathParams, queryParams, body) {
		return [buildUrl(`${this.options.baseUrl}${url}`, pathParams, queryParams), {
			method,
			headers: new Headers({
				"Content-Type": "application/json",
				"Pago-Version": this.options.version,
				Authorization: `Bearer ${this.options.accessToken}`
			}),
			...body ? { body: JSON.stringify(body) } : {}
		}];
	}
	async sendRequest(request) {
		const [fullUrl, requestInit] = request;
		try {
			return await fetch(fullUrl, requestInit);
		} catch (error) {
			throw new PagoNetworkError(error instanceof Error ? error.message : String(error));
		}
	}
	async parseResponse(response, responseType, errors) {
		const statusCode = response.status;
		if (statusCode >= 500 && statusCode < 600) throw new PagoServerError(statusCode, await response.text().catch(() => "") || "Server error");
		if (statusCode >= 400 && statusCode < 500) {
			if (statusCode === 429) {
				const retryAfter = response.headers.get("Retry-After");
				throw new PagoRateLimitError(statusCode, retryAfter ? parseInt(retryAfter, 10) : null);
			}
			if (errors?.[statusCode]) {
				const ErrorClass = errors[statusCode];
				throw new ErrorClass(statusCode, await response.json());
			} else throw new PagoClientError(statusCode, await response.text().catch(() => "") || "Client error");
		}
		if (responseType === "json") return await response.json();
		if (responseType === "text") return await response.text();
	}
};
//#endregion
//#region src/webhooks.ts
const webhookToleranceSeconds = 300;
const webhookSecretPrefix = "whsec_";
const base64Alphabet = /^[A-Za-z0-9+/]*={0,2}$/;
const integerPattern = /^-?\d+$/;
var PagoWebhookError = class extends PagoError {
	constructor(message, options) {
		super(message, options);
		this.name = "PagoWebhookError";
	}
};
var PagoWebhookVerificationError = class extends PagoWebhookError {
	constructor(message, options) {
		super(message, options);
		this.name = "PagoWebhookVerificationError";
	}
};
var PagoWebhookSecretError = class extends PagoWebhookVerificationError {
	constructor(message) {
		super(`Invalid webhook secret: ${message}`);
		this.name = "PagoWebhookSecretError";
	}
};
var PagoWebhookUnknownTypeError = class extends PagoWebhookError {
	eventType;
	constructor(eventType) {
		super(`Unknown webhook event type: ${JSON.stringify(eventType)}`);
		this.eventType = eventType;
		this.name = "PagoWebhookUnknownTypeError";
	}
};
const validateWebhook = async (body, headers, secret, eventTypes) => {
	const bodyBytes = typeof body === "string" ? new TextEncoder().encode(body) : body;
	verifySignature(bodyBytes, headers, secret);
	const bodyText = new TextDecoder().decode(bodyBytes);
	let parsed;
	try {
		parsed = JSON.parse(bodyText);
	} catch (error) {
		throw new PagoWebhookError("Failed to parse webhook payload", { cause: error });
	}
	const eventType = typeof parsed === "object" && parsed !== null && "type" in parsed && typeof parsed.type === "string" ? parsed.type : null;
	if (eventType === null || !eventTypes.has(eventType)) throw new PagoWebhookUnknownTypeError(eventType);
	return parsed;
};
const verifySignature = (body, headers, secret) => {
	const signingKey = deriveSigningKey(secret);
	const normalizedHeaders = Object.fromEntries(Object.entries(headers).map(([key, value]) => [key.toLowerCase(), value]));
	const webhookId = normalizedHeaders["webhook-id"];
	const webhookTimestamp = normalizedHeaders["webhook-timestamp"];
	const webhookSignature = normalizedHeaders["webhook-signature"];
	if (!webhookId || !webhookTimestamp || !webhookSignature) throw new PagoWebhookVerificationError("Missing required headers");
	if (!integerPattern.test(webhookTimestamp)) throw new PagoWebhookVerificationError("Invalid signature headers");
	const timestamp = Number(webhookTimestamp);
	if (!Number.isSafeInteger(timestamp)) throw new PagoWebhookVerificationError("Invalid signature headers");
	const now = Date.now() / 1e3;
	if (timestamp < now - webhookToleranceSeconds) throw new PagoWebhookVerificationError("Message timestamp too old");
	if (timestamp > now + webhookToleranceSeconds) throw new PagoWebhookVerificationError("Message timestamp too new");
	const signedContent = Buffer.concat([Buffer.from(`${webhookId}.${webhookTimestamp}.`, "utf8"), Buffer.from(body)]);
	const expectedSignature = createHmac("sha256", signingKey).update(signedContent).digest();
	let matched = false;
	for (const versionedSignature of webhookSignature.split(" ")) {
		const separatorIndex = versionedSignature.indexOf(",");
		if (separatorIndex === -1) continue;
		if (versionedSignature.slice(0, separatorIndex) !== "v1") continue;
		const providedSignature = decodeBase64(versionedSignature.slice(separatorIndex + 1));
		if (providedSignature !== null && constantTimeEqual(providedSignature, expectedSignature)) matched = true;
	}
	if (!matched) throw new PagoWebhookVerificationError("No matching signature found");
};
const deriveSigningKey = (secret) => {
	if (secret.length === 0) throw new PagoWebhookSecretError("secret can't be empty");
	if (!secret.startsWith(webhookSecretPrefix)) throw new PagoWebhookSecretError(`secret must start with "${webhookSecretPrefix}"`);
	const encodedKey = secret.slice(6);
	if (encodedKey.length === 0) throw new PagoWebhookSecretError(`nothing follows the "${webhookSecretPrefix}" prefix`);
	const signingKey = decodeBase64(encodedKey);
	if (signingKey === null) throw new PagoWebhookSecretError(`the part after the "${webhookSecretPrefix}" prefix is not valid base64`);
	return signingKey;
};
const constantTimeEqual = (left, right) => left.length === right.length && timingSafeEqual(left, right);
const decodeBase64 = (value) => {
	if (value.length === 0 || !base64Alphabet.test(value)) return null;
	const unpadded = value.replace(/=+$/, "");
	const remainder = unpadded.length % 4;
	if (remainder === 1) return null;
	const padded = remainder === 0 ? unpadded : `${unpadded}${"=".repeat(4 - remainder)}`;
	const decoded = Buffer.from(padded, "base64");
	if (decoded.length === 0 || decoded.toString("base64") !== padded) return null;
	return decoded;
};
//#endregion
export { validateWebhook as a, PagoError as c, PagoServerError as d, PagoWebhookVerificationError as i, PagoNetworkError as l, PagoWebhookSecretError as n, ClientBase as o, PagoWebhookUnknownTypeError as r, PagoClientError as s, PagoWebhookError as t, PagoRateLimitError as u };

//# sourceMappingURL=webhooks-Brk6wjWp.mjs.map