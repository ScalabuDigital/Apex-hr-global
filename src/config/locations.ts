/**
 * Canonical country taxonomy for the global site (apexhrllc.com). The site
 * targets countries, not cities.
 *
 * Each country has:
 * - `slug`: readable name used in service-country URLs
 *   (`/services/{service}-in-{slug}/`).
 * - `countryCode`: ISO 3166-1 alpha-2, lower case. The country hub page
 *   lives at `/{countryCode}/` (e.g. `/ng/`), the standard international
 *   subfolder pattern.
 * - `hreflang`: the language-region tag declared for that hub. All copy is
 *   English, so every tag is `en-{REGION}`.
 *
 * No physical office is claimed in any country — see
 * src/content/locations-data.ts.
 *
 * To add a country: add its entry here, add its content record in
 * src/content/locations-data.ts, and add a one-line route file at
 * src/app/{countryCode}/page.tsx (copy an existing one). Nothing else
 * needs updating — hreflang, sitemaps, the locations hub and the footer
 * read from this list.
 */

export type CountryRegion = "Africa" | "North America" | "Europe" | "Middle East";

export interface LocationItem {
  slug: string;
  title: string;
  countryCode: string;
  hreflang: string;
  region: CountryRegion;
}

export const locations: LocationItem[] = [
  // Africa
  { slug: "nigeria", title: "Nigeria", countryCode: "ng", hreflang: "en-NG", region: "Africa" },
  { slug: "kenya", title: "Kenya", countryCode: "ke", hreflang: "en-KE", region: "Africa" },
  { slug: "south-africa", title: "South Africa", countryCode: "za", hreflang: "en-ZA", region: "Africa" },
  { slug: "ghana", title: "Ghana", countryCode: "gh", hreflang: "en-GH", region: "Africa" },

  // North America
  { slug: "united-states", title: "United States", countryCode: "us", hreflang: "en-US", region: "North America" },
  { slug: "canada", title: "Canada", countryCode: "ca", hreflang: "en-CA", region: "North America" },

  // Europe
  { slug: "ireland", title: "Ireland", countryCode: "ie", hreflang: "en-IE", region: "Europe" },
  { slug: "germany", title: "Germany", countryCode: "de", hreflang: "en-DE", region: "Europe" },
  { slug: "netherlands", title: "Netherlands", countryCode: "nl", hreflang: "en-NL", region: "Europe" },

  // Middle East
  { slug: "united-arab-emirates", title: "United Arab Emirates", countryCode: "ae", hreflang: "en-AE", region: "Middle East" },
  { slug: "saudi-arabia", title: "Saudi Arabia", countryCode: "sa", hreflang: "en-SA", region: "Middle East" },
  { slug: "qatar", title: "Qatar", countryCode: "qa", hreflang: "en-QA", region: "Middle East" },
];

export const countryRegions: CountryRegion[] = ["Africa", "North America", "Europe", "Middle East"];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function getLocationByCountryCode(code: string) {
  return locations.find((location) => location.countryCode === code.toLowerCase());
}

/** Country hub URL path, e.g. `/ng/`. */
export function locationPath(slug: string): string {
  const location = getLocation(slug);
  return location ? `/${location.countryCode}/` : "/locations/";
}

/** Service-in-country URL slug, e.g. `executive-search-firm-in-nigeria`. */
export function comboSlug(entitySlug: string, locationSlug: string): string {
  return `${entitySlug}-in-${locationSlug}`;
}

/** Country names that take "the" in running text. */
const DEFINITE_ARTICLE_COUNTRIES = new Set(["United States", "United Arab Emirates", "Netherlands"]);

/** Country name as used mid-sentence, e.g. "the United States", "Nigeria". */
export function withArticle(countryTitle: string): string {
  return DEFINITE_ARTICLE_COUNTRIES.has(countryTitle) ? `the ${countryTitle}` : countryTitle;
}
