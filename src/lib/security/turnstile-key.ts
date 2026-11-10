/**
 * Build-time guard for the Cloudflare Turnstile site key.
 *
 * `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is inlined into browser JavaScript at build
 * time, so anything placed in it is public. If the Turnstile *secret* key is
 * put there by mistake, the widget fails with "Invalid sitekey" and the secret
 * is published to every visitor. This guard stops `next dev` / `next build`
 * before that can happen.
 *
 * Turnstile site keys are 24 characters; secret keys are 35 characters
 * (compare Cloudflare's documented test keys `1x00000000000000000000AA` and
 * `1x0000000000000000000000000000000AA`). Error messages never include the
 * key value.
 */

/** Shape of a Turnstile secret key: `0x`–`3x` prefix plus 33 characters. */
const TURNSTILE_SECRET_KEY_SHAPE = /^[0-3]x[0-9A-Za-z_-]{33}$/;

export type TurnstileSiteKeyCheck = { ok: true } | { ok: false; reason: string };

export function checkTurnstileSiteKey(
  siteKey: string | undefined,
  secretKey: string | undefined,
): TurnstileSiteKeyCheck {
  const key = (siteKey ?? "").trim();
  // An empty site key is an existing, supported state: the form shows
  // "Secure application verification is not configured yet."
  if (!key) return { ok: true };

  const secret = (secretKey ?? "").trim();
  if (secret && key === secret) {
    return {
      ok: false,
      reason:
        "NEXT_PUBLIC_TURNSTILE_SITE_KEY has the same value as TURNSTILE_SECRET_KEY. Set it to the Turnstile Site Key instead; the secret must never be in a NEXT_PUBLIC_ variable.",
    };
  }

  if (TURNSTILE_SECRET_KEY_SHAPE.test(key)) {
    return {
      ok: false,
      reason:
        "NEXT_PUBLIC_TURNSTILE_SITE_KEY looks like a Turnstile secret key (35 characters). Set it to the 24-character Site Key from the Cloudflare Turnstile dashboard, and rotate the secret if it has been deployed.",
    };
  }

  return { ok: true };
}

/** Throws (without revealing the key) when the public site key is unsafe. */
export function assertTurnstileSiteKeyIsPublic(env: Record<string, string | undefined> = process.env): void {
  const result = checkTurnstileSiteKey(env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, env.TURNSTILE_SECRET_KEY);
  if (!result.ok) {
    throw new Error(`[turnstile-key] ${result.reason}`);
  }
}
