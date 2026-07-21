//#region src/base.d.ts
declare class PagoError extends Error {}
declare class PagoNetworkError extends PagoError {
  constructor(message: string);
}
declare class PagoServerError extends PagoError {
  constructor(statusCode: number, message: string);
}
declare class PagoClientError<T = unknown> extends PagoError {
  readonly statusCode: number;
  readonly error: T;
  constructor(statusCode: number, error: T);
}
declare class PagoRateLimitError extends PagoClientError {
  readonly statusCode: 429;
  readonly retryAfter: number | null;
  constructor(statusCode: 429, retryAfter?: number | null);
}
interface ClientOptions {
  baseUrl: string;
  version: string;
  accessToken: string;
}
//#endregion
//#region src/webhooks.d.ts
declare class PagoWebhookError extends PagoError {
  constructor(message: string, options?: ErrorOptions);
}
declare class PagoWebhookVerificationError extends PagoWebhookError {
  constructor(message: string, options?: ErrorOptions);
}
declare class PagoWebhookSecretError extends PagoWebhookVerificationError {
  constructor(message: string);
}
declare class PagoWebhookUnknownTypeError extends PagoWebhookError {
  readonly eventType: string | null;
  constructor(eventType: string | null);
}
declare const validateWebhook: <Payload>(body: string | Uint8Array, headers: Record<string, string>, secret: string, eventTypes: ReadonlySet<string>) => Promise<Payload>;
//#endregion
export { validateWebhook as a, PagoError as c, PagoServerError as d, PagoWebhookVerificationError as i, PagoNetworkError as l, PagoWebhookSecretError as n, ClientOptions as o, PagoWebhookUnknownTypeError as r, PagoClientError as s, PagoWebhookError as t, PagoRateLimitError as u };
//# sourceMappingURL=webhooks-BBkImqI5.d.cts.map