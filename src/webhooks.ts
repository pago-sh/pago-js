import { Buffer } from "node:buffer";
import { createHmac, timingSafeEqual } from "node:crypto";

import { PagoError } from "./base";

const webhookToleranceSeconds = 5 * 60;
const webhookSecretPrefix = "whsec_";
const base64Alphabet = /^[A-Za-z0-9+/]*={0,2}$/;
const integerPattern = /^-?\d+$/;

export class PagoWebhookError extends PagoError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "PagoWebhookError";
  }
}

export class PagoWebhookVerificationError extends PagoWebhookError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "PagoWebhookVerificationError";
  }
}

export class PagoWebhookSecretError extends PagoWebhookVerificationError {
  constructor(message: string) {
    super(`Invalid webhook secret: ${message}`);
    this.name = "PagoWebhookSecretError";
  }
}

export class PagoWebhookUnknownTypeError extends PagoWebhookError {
  constructor(public readonly eventType: string | null) {
    super(`Unknown webhook event type: ${JSON.stringify(eventType)}`);
    this.name = "PagoWebhookUnknownTypeError";
  }
}

export const validateWebhook = async <Payload>(
  body: string | Uint8Array,
  headers: Record<string, string>,
  secret: string,
  eventTypes: ReadonlySet<string>,
): Promise<Payload> => {
  const bodyBytes = typeof body === "string" ? new TextEncoder().encode(body) : body;
  verifySignature(bodyBytes, headers, secret);

  const bodyText = new TextDecoder().decode(bodyBytes);
  let parsed: unknown;
  try {
    parsed = JSON.parse(bodyText);
  } catch (error) {
    throw new PagoWebhookError("Failed to parse webhook payload", {
      cause: error,
    });
  }

  const eventType =
    typeof parsed === "object" &&
    parsed !== null &&
    "type" in parsed &&
    typeof parsed.type === "string"
      ? parsed.type
      : null;
  if (eventType === null || !eventTypes.has(eventType)) {
    throw new PagoWebhookUnknownTypeError(eventType);
  }

  return parsed as Payload;
};

const verifySignature = (
  body: Uint8Array,
  headers: Record<string, string>,
  secret: string,
): void => {
  const signingKey = deriveSigningKey(secret);

  const normalizedHeaders = Object.fromEntries(
    Object.entries(headers).map(([key, value]) => [key.toLowerCase(), value]),
  );
  const webhookId = normalizedHeaders["webhook-id"];
  const webhookTimestamp = normalizedHeaders["webhook-timestamp"];
  const webhookSignature = normalizedHeaders["webhook-signature"];
  if (!webhookId || !webhookTimestamp || !webhookSignature) {
    throw new PagoWebhookVerificationError("Missing required headers");
  }

  if (!integerPattern.test(webhookTimestamp)) {
    throw new PagoWebhookVerificationError("Invalid signature headers");
  }
  const timestamp = Number(webhookTimestamp);
  if (!Number.isSafeInteger(timestamp)) {
    throw new PagoWebhookVerificationError("Invalid signature headers");
  }

  const now = Date.now() / 1000;
  if (timestamp < now - webhookToleranceSeconds) {
    throw new PagoWebhookVerificationError("Message timestamp too old");
  }
  if (timestamp > now + webhookToleranceSeconds) {
    throw new PagoWebhookVerificationError("Message timestamp too new");
  }

  const signedContent = Buffer.concat([
    Buffer.from(`${webhookId}.${webhookTimestamp}.`, "utf8"),
    Buffer.from(body),
  ]);
  const expectedSignature = createHmac("sha256", signingKey).update(signedContent).digest();

  let matched = false;
  for (const versionedSignature of webhookSignature.split(" ")) {
    const separatorIndex = versionedSignature.indexOf(",");
    if (separatorIndex === -1) {
      continue;
    }
    if (versionedSignature.slice(0, separatorIndex) !== "v1") {
      continue;
    }
    const providedSignature = decodeBase64(versionedSignature.slice(separatorIndex + 1));
    if (providedSignature !== null && constantTimeEqual(providedSignature, expectedSignature)) {
      matched = true;
    }
  }

  if (!matched) {
    throw new PagoWebhookVerificationError("No matching signature found");
  }
};

const deriveSigningKey = (secret: string): Buffer => {
  if (secret.length === 0) {
    throw new PagoWebhookSecretError("secret can't be empty");
  }
  if (!secret.startsWith(webhookSecretPrefix)) {
    throw new PagoWebhookSecretError(`secret must start with "${webhookSecretPrefix}"`);
  }

  const encodedKey = secret.slice(webhookSecretPrefix.length);
  if (encodedKey.length === 0) {
    throw new PagoWebhookSecretError(`nothing follows the "${webhookSecretPrefix}" prefix`);
  }

  const signingKey = decodeBase64(encodedKey);
  if (signingKey === null) {
    throw new PagoWebhookSecretError(
      `the part after the "${webhookSecretPrefix}" prefix is not valid base64`,
    );
  }

  return signingKey;
};

const constantTimeEqual = (left: Buffer, right: Buffer): boolean =>
  left.length === right.length && timingSafeEqual(left, right);

const decodeBase64 = (value: string): Buffer | null => {
  if (value.length === 0 || !base64Alphabet.test(value)) {
    return null;
  }

  const unpadded = value.replace(/=+$/, "");
  const remainder = unpadded.length % 4;
  if (remainder === 1) {
    return null;
  }
  const padded = remainder === 0 ? unpadded : `${unpadded}${"=".repeat(4 - remainder)}`;

  const decoded = Buffer.from(padded, "base64");
  if (decoded.length === 0 || decoded.toString("base64") !== padded) {
    return null;
  }

  return decoded;
};
