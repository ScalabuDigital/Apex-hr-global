import type { NextConfig } from "next";
import { redirectRules } from "./src/config/redirects";
import { assertTurnstileSiteKeyIsPublic } from "./src/lib/security/turnstile-key";

// Refuse to start or build if the Turnstile secret key has been placed in the
// public NEXT_PUBLIC_TURNSTILE_SITE_KEY variable (it would be inlined into
// browser JavaScript). See src/lib/security/turnstile-key.ts.
assertTurnstileSiteKeyIsPublic();

const nextConfig: NextConfig = {
  // docs/URL-DECISION-REGISTER.md D-010: canonical URLs use a trailing
  // slash (except "/" itself). This serves those paths directly instead of
  // redirecting away from them.
  trailingSlash: true,

  // WordPress-hosted media (featured images, in-article images) for the
  // Insights/blog integration — see docs/URL-DECISION-REGISTER.md and
  // src/lib/wordpress/. Deliberately narrow to the confirmed WordPress
  // media host's uploads path only (every real image URL WordPress/Yoast
  // returns — featured media, og:image, in-content images — lives under
  // /wp-content/uploads/); never an arbitrary external host, and image
  // optimisation stays enabled (no `unoptimized: true`).
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.apexhrllc.co.uk",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  // 1. Bare domain → www: www.apexhrllc.com is the only canonical host, so
  //    every request to apexhrllc.com is sent to the same path on www
  //    (preview *.vercel.app hosts are unaffected).
  // 2. The legacy permanent redirect registry — see src/config/redirects.ts.
  //    Validated for duplicate sources/loops in tests/unit/redirects.test.ts.
  async redirects() {
    // Three bare-domain rules so each request lands on its final URL in ONE
    // hop (no chain): the homepage, file-like paths (sitemap.xml, robots.txt
    // — no trailing slash), and every page path (trailing slash restored,
    // since `:path+` captures it without the slash `trailingSlash: true` wants).
    const bareHost = [{ type: "host" as const, value: "apexhrllc.com" }];
    return [
      { source: "/", has: bareHost, destination: "https://www.apexhrllc.com/", permanent: true },
      {
        source: "/:file(.*\\.[a-zA-Z0-9]+)",
        has: bareHost,
        destination: "https://www.apexhrllc.com/:file",
        permanent: true,
      },
      { source: "/:path+", has: bareHost, destination: "https://www.apexhrllc.com/:path+/", permanent: true },
      ...redirectRules.map((rule) => ({
        source: rule.source,
        destination: rule.destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
