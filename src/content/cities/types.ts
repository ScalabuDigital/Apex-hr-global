import type { ContentFaqItem } from "@/types/content";
import type { FactItem } from "@/content/locations-data";

/**
 * City sub-location pages (`/{countryCode}/{city}/`), one per city listed
 * under "Main business hubs" on each country page.
 *
 * Content rules (CLAUDE.md section 9, doorway-page guard):
 * - Every city has its own economic, business-district and talent-market
 *   context, never a city name swapped into shared copy.
 * - No office is claimed in any city.
 * - No statistics, salaries or changeable legal figures; local rules are
 *   named only where they are well established and stable.
 * First-draft copy pending stakeholder review.
 */
export interface CityContent {
  slug: string;
  /** Slug of the parent country in src/config/locations.ts. */
  countrySlug: string;
  name: string;
  /** State, province, region or emirate. */
  area: string;
  metaDescription: string;
  /** Two paragraphs on the city's economy and employer landscape. */
  overview: string[];
  /** The city's main employing sectors. */
  keySectors: string[];
  /** The city's talent market and hiring dynamics. */
  talentMarket: string;
  /** Quick facts: area, time zone, main business districts. */
  facts: FactItem[];
  /** City-specific points to plan for when hiring. */
  hiringNotes: string[];
  relatedServiceSlugs: string[];
  relatedSectorSlugs: string[];
  faqs: ContentFaqItem[];
}
