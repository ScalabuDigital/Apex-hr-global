# Apex HR global site (www.apexhrllc.com)

This repository is the **global** Apex HR website, a standalone site. It
started as a copy of the UK site's codebase (same design, components and
service catalogue) but is now a separate website with its own domain,
canonicals, sitemap and hreflang. It does not link to, redirect to or
canonicalise to the UK site, and nothing here changes the UK site.

The other documents in this folder (MASTER-SITEMAP, URL-DECISION-REGISTER,
etc.) describe the original UK build; where they disagree with this file,
this file wins.

## Markets

| Region | Countries (hub URL, hreflang) |
| --- | --- |
| Africa | Nigeria `/ng/` en-NG · Kenya `/ke/` en-KE · South Africa `/za/` en-ZA · Ghana `/gh/` en-GH |
| North America | United States `/us/` en-US · Canada `/ca/` en-CA |
| Europe | Ireland `/ie/` en-IE · Germany `/de/` en-DE · Netherlands `/nl/` en-NL |
| Middle East | UAE `/ae/` en-AE · Saudi Arabia `/sa/` en-SA · Qatar `/qa/` en-QA |

Source of truth: `src/config/locations.ts` (taxonomy) and
`src/content/locations-data.ts` (copy). Each hub is a two-line route file in
`src/app/{code}/page.tsx` built by `src/lib/country-route.tsx`.

Each country record carries the local context shown on its hub and on its
service-in-country pages: market overview, city profiles, at-a-glance facts,
employment framework (laws and bodies named, no changeable figures), hiring
considerations, a local angle per featured service, and country FAQs.
Sector pages read international depth from `src/content/sector-markets-data.ts`
and service pages read their "delivering internationally" note from
`src/content/service-international-data.ts`. `tests/unit/content-depth.test.ts`
guards that every country, sector and service keeps this content.

Service family pages read their in-depth guide from
`src/content/service-family-guides.ts` (Recruitment & Talent Acquisition keeps
its own guide in `services-data.ts`). About, Employers, Contact, the Services
hub and the Sectors hub share the `MarketsBand` component
(`src/components/sections/markets-band.tsx`), which links every country hub.

City sub-location pages (42, one per city under each country's "Main
business hubs") read their content from `src/content/cities/` (one file per
region) and are built by `src/lib/city-route.tsx` through
`src/app/{code}/[city]/page.tsx`. To add a city, add it to the country's
`cityProfiles` and add a matching record in the region file; tests fail if
the two get out of step.

To add a country: add it to both files above and copy any
`src/app/{code}/page.tsx`. hreflang, sitemaps, the footer and the
`/locations/` hub pick it up automatically.

## URLs

| Page | URL |
| --- | --- |
| Service / family | `/services/{name}-firm/` |
| Sector | `/sector/hr-company-for-{name}/` |
| Country hub | `/{code}/` (e.g. `/ng/`) |
| Service in a country | `/services/{name}-firm-in-{country}/` |
| City page | `/{code}/{city}/` (e.g. `/ng/lagos/`, `/ae/dubai/`) |
| Countries hub | `/locations/` |
| Insights article | `/{slug}/` (WordPress) |
| Vacancy | `/jobs/{slug}/` (WordPress) |

There are no talent-acquisition role pages (`/talent-acquisition/…`): the
UK build's 62 role pages were UK-specific and were removed.

## hreflang

Implemented in `src/lib/seo/hreflang.ts`. Every URL in every cluster is on
www.apexhrllc.com, so the clusters are reciprocal on their own:

- **Homepage cluster** (homepage and all 12 country hubs): `x-default` and
  `en` → `/`, `en-XX` → each country hub.
- **Service clusters** (only services that have country versions):
  `x-default`/`en` → the global service page, `en-XX` → each
  `/services/{name}-firm-in-{country}/` page.

Pages without regional versions (sectors, About, Contact, etc.) carry no
hreflang, only a self-canonical.

## Copy changes from the original UK build

- Titles and H1s: "Global {Service} Firm", "Global HR Company for {Sector}".
- "UK employers" wording made international across services, sectors,
  homepage, About, Contact and Employers pages.
- UK-law passages rewritten for an international audience (hiring
  compliance, probation, contractor status, agency workers, pay gap
  reporting, redundancy, TUPE, tribunals, visa sponsorship), always deferring
  to in-country legal counsel.
- Two services retitled (slugs kept): "TUPE & Business Transfer Advisory" and
  "Work Visa & Sponsorship HR Support".
- British English spelling is kept for every market (house style).
- Contact details (phone, WhatsApp, hello@apexhrllc.com) are the same as the
  UK site, per the client.

## Review before launch

- **Blog and jobs share the UK site's WordPress backend.** `WORDPRESS_API_URL`
  still points at blog.apexhrllc.co.uk (a backend API, never shown to
  visitors). If both sites publish the same articles and vacancies, the two
  domains will carry duplicate content. Before launch, either give this site
  its own WordPress (or its own category/feed), or point
  `WORDPRESS_API_URL` elsewhere.
- **Case studies** (`src/content/case-studies-data.ts`) are illustrative
  scenarios, each now set in one of the global markets (Nigeria, UAE, Kenya,
  Ireland, South Africa, Ghana, Germany, Netherlands, United States, Canada,
  Saudi Arabia). UK-only sources were removed; the local legal references in
  each need checking by in-country counsel.
- **Partnership prices** are still shown in GBP with a note that local-currency
  quotes are available. Confirm whether to keep GBP or publish local prices.
- **Privacy policy** describes processing under UK GDPR and needs legal
  review for international data subjects (EU GDPR, POPIA, NDPA, etc.).
- **Trust stats and client logos** are the original placeholders.
- **Google Search Console token** in `src/app/layout.tsx` belongs to the UK
  property; replace it with this site's own token.
- All copy remains an AI first draft pending stakeholder review.

## Deployment

1. Create a new GitHub repository and a new Vercel project for this folder.
2. Set `NEXT_PUBLIC_SITE_URL=https://www.apexhrllc.com` plus the
   WordPress/Supabase/Turnstile variables (`.env.example`).
3. Point apexhrllc.com DNS at the new Vercel project.
4. Add a Search Console property for www.apexhrllc.com and submit
   `/sitemap.xml`.
