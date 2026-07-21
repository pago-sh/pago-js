import { Buffer } from "node:buffer";
import { createHmac, randomBytes } from "node:crypto";
import { Webhook } from "standardwebhooks";
import { describe, expect, test } from "vitest";

import { PagoError } from "./base";
import {
  PagoWebhookError,
  PagoWebhookSecretError,
  PagoWebhookUnknownTypeError,
  PagoWebhookVerificationError,
  validateWebhook,
} from "./webhooks";

interface DummyPayload {
  type: "dummy.event";
  value: string;
}

const encodedKey = randomBytes(32).toString("base64");
const secret = `whsec_${encodedKey}`;
const signingKey = Buffer.from(encodedKey, "base64");

const otherEncodedKey = randomBytes(32).toString("base64");
const otherSecret = `whsec_${otherEncodedKey}`;

const eventTypes = new Set(["dummy.event"]);
const webhookId = "test-webhook";

const signWith = (key: Buffer, id: string, timestamp: number, body: string): string =>
  `v1,${createHmac("sha256", key).update(`${id}.${timestamp}.${body}`).digest("base64")}`;

const getHeaders = (body: string, timestamp: Date = new Date()): Record<string, string> => {
  const signature = new Webhook(secret).sign(webhookId, timestamp, body);
  return {
    "Webhook-Id": webhookId,
    "Webhook-Timestamp": String(Math.floor(timestamp.getTime() / 1000)),
    "Webhook-Signature": signature,
  };
};

const validateEvent = (
  body: string | Uint8Array,
  headers: Record<string, string>,
  webhookSecret: string = secret,
): Promise<DummyPayload> => {
  return validateWebhook<DummyPayload>(body, headers, webhookSecret, eventTypes);
};

describe("validateWebhook", () => {
  test.each([
    ["string", (body: string) => body],
    ["Buffer", (body: string) => Buffer.from(body)],
    ["Uint8Array", (body: string) => new TextEncoder().encode(body)],
  ])("validates a known event from a %s", async (_type, getRawBody) => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });

    await expect(validateEvent(getRawBody(body), getHeaders(body))).resolves.toEqual({
      type: "dummy.event",
      value: "payload",
    });
  });

  test("derives the signing key from the base64 body of the secret", () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const timestamp = Math.floor(Date.now() / 1000);

    const headers = getHeaders(body, new Date(timestamp * 1000));

    expect(headers["Webhook-Signature"]).toBe(signWith(signingKey, webhookId, timestamp, body));
  });

  test("rejects a signature keyed on the raw prefixed secret", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const timestamp = Math.floor(Date.now() / 1000);

    await expect(
      validateEvent(body, {
        "Webhook-Id": webhookId,
        "Webhook-Timestamp": String(timestamp),
        "Webhook-Signature": signWith(Buffer.from(secret, "utf8"), webhookId, timestamp, body),
      }),
    ).rejects.toThrow(PagoWebhookVerificationError);
  });

  test("accepts any one of several space-separated signatures", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const timestamp = Math.floor(Date.now() / 1000);
    const headers = {
      "Webhook-Id": webhookId,
      "Webhook-Timestamp": String(timestamp),
      "Webhook-Signature": [
        signWith(Buffer.from(otherEncodedKey, "base64"), webhookId, timestamp, body),
        signWith(signingKey, webhookId, timestamp, body),
      ].join(" "),
    };

    await expect(validateEvent(body, headers)).resolves.toEqual({
      type: "dummy.event",
      value: "payload",
    });
  });

  test("ignores signatures of unknown versions", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const timestamp = Math.floor(Date.now() / 1000);
    const valid = signWith(signingKey, webhookId, timestamp, body);
    const headers = {
      "Webhook-Id": webhookId,
      "Webhook-Timestamp": String(timestamp),
      "Webhook-Signature": `v2,${valid.slice(3)} ${valid}`,
    };

    await expect(validateEvent(body, headers)).resolves.toEqual({
      type: "dummy.event",
      value: "payload",
    });
  });

  test("rejects a forged signature", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const timestamp = Math.floor(Date.now() / 1000);

    await expect(
      validateEvent(body, {
        "Webhook-Id": webhookId,
        "Webhook-Timestamp": String(timestamp),
        "Webhook-Signature": signWith(
          Buffer.from(otherEncodedKey, "base64"),
          webhookId,
          timestamp,
          body,
        ),
      }),
    ).rejects.toThrow(PagoWebhookVerificationError);
  });

  test("rejects a signature made for another secret", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const headers = getHeaders(body);

    await expect(validateEvent(body, headers, otherSecret)).rejects.toThrow(
      PagoWebhookVerificationError,
    );
  });

  test("rejects a tampered body", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const tampered = JSON.stringify({ type: "dummy.event", value: "tampered" });

    await expect(validateEvent(tampered, getHeaders(body))).rejects.toThrow(
      PagoWebhookVerificationError,
    );
  });

  test("rejects a tampered webhook id", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const headers = getHeaders(body);
    headers["Webhook-Id"] = "other-webhook";

    await expect(validateEvent(body, headers)).rejects.toThrow(PagoWebhookVerificationError);
  });

  test("rejects a tampered timestamp", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const headers = getHeaders(body);
    headers["Webhook-Timestamp"] = String(Number(headers["Webhook-Timestamp"]) + 1);

    await expect(validateEvent(body, headers)).rejects.toThrow(PagoWebhookVerificationError);
  });

  test("rejects malformed signature encoding", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const headers = getHeaders(body);
    headers["Webhook-Signature"] = "v1,not-base64!";

    await expect(validateEvent(body, headers)).rejects.toThrow(PagoWebhookVerificationError);
  });

  test("rejects missing headers", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });

    await expect(validateEvent(body, {})).rejects.toThrow(PagoWebhookVerificationError);
  });

  test("rejects a non-numeric timestamp", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const headers = getHeaders(body);
    headers["Webhook-Timestamp"] = "not-a-number";

    await expect(validateEvent(body, headers)).rejects.toThrow(PagoWebhookVerificationError);
  });

  test("replays a stale message", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const timestamp = new Date(Date.now() - 6 * 60 * 1000);

    await expect(validateEvent(body, getHeaders(body, timestamp))).rejects.toThrow(
      "Message timestamp too old",
    );
  });

  test("rejects a timestamp too far in the future", async () => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const timestamp = new Date(Date.now() + 6 * 60 * 1000);

    await expect(validateEvent(body, getHeaders(body, timestamp))).rejects.toThrow(
      "Message timestamp too new",
    );
  });

  test.each([
    ["recent", 4 * 60 * 1000],
    ["slightly ahead", -4 * 60 * 1000],
  ])("accepts a %s timestamp inside the tolerance window", async (_label, offset) => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });
    const timestamp = new Date(Date.now() - offset);

    await expect(validateEvent(body, getHeaders(body, timestamp))).resolves.toEqual({
      type: "dummy.event",
      value: "payload",
    });
  });

  test.each([
    ["empty", ""],
    ["no prefix", "not-a-secret"],
    ["prefix stripped", encodedKey],
    ["nothing after the prefix", "whsec_"],
    ["non-base64 body", "whsec_not-base64!"],
    ["truncated base64 body", "whsec_A"],
  ])("rejects a malformed secret (%s)", async (_label, badSecret) => {
    const body = JSON.stringify({ type: "dummy.event", value: "payload" });

    const error = await validateEvent(body, getHeaders(body), badSecret).then(
      () => null,
      (thrown: unknown) => thrown,
    );

    expect(error).toBeInstanceOf(PagoWebhookSecretError);
    expect((error as Error).message).toContain("Invalid webhook secret");
  });

  test("reports a malformed secret before anything else", async () => {
    await expect(validateEvent("{", {}, "not-a-secret")).rejects.toThrow(PagoWebhookSecretError);
  });

  test("rejects an unknown event type", async () => {
    const body = JSON.stringify({ type: "future.event", value: "payload" });

    try {
      await validateEvent(body, getHeaders(body));
      throw new Error("Expected validateEvent to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(PagoWebhookUnknownTypeError);
      expect((error as PagoWebhookUnknownTypeError).eventType).toBe("future.event");
    }
  });

  test("wraps malformed signed payloads", async () => {
    const body = "{";

    await expect(validateEvent(body, getHeaders(body))).rejects.toThrow(PagoWebhookError);
  });

  test("uses the Pago webhook error hierarchy", () => {
    expect(new PagoWebhookError("error")).toBeInstanceOf(PagoError);
    expect(new PagoWebhookVerificationError("error")).toBeInstanceOf(PagoWebhookError);
    expect(new PagoWebhookSecretError("error")).toBeInstanceOf(PagoWebhookVerificationError);
    expect(new PagoWebhookUnknownTypeError("future.event")).toBeInstanceOf(PagoWebhookError);
  });
});
