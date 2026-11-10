import { describe, expect, it } from "vitest";
import { assertTurnstileSiteKeyIsPublic, checkTurnstileSiteKey } from "@/lib/security/turnstile-key";

// Cloudflare's documented, public Turnstile test keys.
const TEST_SITE_KEY = "1x00000000000000000000AA"; // 24 chars
const TEST_SECRET_KEY = "1x0000000000000000000000000000000AA"; // 35 chars
// Fabricated values in the real-key shape (not real credentials).
const FAKE_SITE_KEY = "0x4AAAAAAAfakeSiteKey123";
const FAKE_SECRET_KEY = "0x4AAAAAAAfakeSecretKeyValue0000000";

describe("checkTurnstileSiteKey", () => {
  it("accepts a 24-character site key", () => {
    expect(TEST_SITE_KEY).toHaveLength(24);
    expect(FAKE_SITE_KEY).toHaveLength(24);
    expect(checkTurnstileSiteKey(TEST_SITE_KEY, TEST_SECRET_KEY)).toEqual({ ok: true });
    expect(checkTurnstileSiteKey(FAKE_SITE_KEY, FAKE_SECRET_KEY)).toEqual({ ok: true });
  });

  it("accepts an empty or missing site key (form shows 'not configured')", () => {
    expect(checkTurnstileSiteKey(undefined, undefined)).toEqual({ ok: true });
    expect(checkTurnstileSiteKey("", FAKE_SECRET_KEY)).toEqual({ ok: true });
    expect(checkTurnstileSiteKey("   ", undefined)).toEqual({ ok: true });
  });

  it("rejects a 35-character secret-format value in the public site key", () => {
    expect(FAKE_SECRET_KEY).toHaveLength(35);
    expect(checkTurnstileSiteKey(FAKE_SECRET_KEY, undefined).ok).toBe(false);
    expect(checkTurnstileSiteKey(TEST_SECRET_KEY, undefined).ok).toBe(false);
    expect(checkTurnstileSiteKey(` ${FAKE_SECRET_KEY}\n`, undefined).ok).toBe(false);
  });

  it("rejects a public site key that equals the configured secret, whatever its shape", () => {
    expect(checkTurnstileSiteKey("custom-secret-value", "custom-secret-value").ok).toBe(false);
  });
});

describe("assertTurnstileSiteKeyIsPublic", () => {
  it("does not throw for a correctly configured environment", () => {
    expect(() =>
      assertTurnstileSiteKeyIsPublic({
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: FAKE_SITE_KEY,
        TURNSTILE_SECRET_KEY: FAKE_SECRET_KEY,
      }),
    ).not.toThrow();
  });

  it("throws without revealing the key when the secret is in the public variable", () => {
    let message = "";
    try {
      assertTurnstileSiteKeyIsPublic({
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: FAKE_SECRET_KEY,
        TURNSTILE_SECRET_KEY: FAKE_SECRET_KEY,
      });
    } catch (error) {
      message = error instanceof Error ? error.message : String(error);
    }
    expect(message).toMatch(/NEXT_PUBLIC_TURNSTILE_SITE_KEY/);
    expect(message).not.toContain(FAKE_SECRET_KEY);
  });
});
