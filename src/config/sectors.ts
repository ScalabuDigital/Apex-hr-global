/**
 * Canonical sector taxonomy. Source of truth: docs/MASTER-SITEMAP.md
 * section 8 and docs/URL-DECISION-REGISTER.md D-001/D-002. `/sector/` is
 * canonical; `/industries/` is a redirect-only alias, not implemented here.
 * Professional Services and IT are distinct sectors and must not
 * canonicalise to each other.
 */

export interface SectorItem {
  slug: string;
  title: string;
}

export const sectors: SectorItem[] = [
  { slug: "hr-company-for-startups-and-scale-ups", title: "Startups & Scale-ups" },
  { slug: "hr-company-for-professional-services", title: "Professional Services" },
  { slug: "hr-company-for-healthcare", title: "Healthcare" },
  { slug: "hr-company-for-life-sciences", title: "Life Sciences" },
  { slug: "hr-company-for-it", title: "IT" },
  { slug: "hr-company-for-financial-services", title: "Financial Services" },
  { slug: "hr-company-for-accountants", title: "Accountants" },
  { slug: "hr-company-for-architects", title: "Architects" },
  { slug: "hr-company-for-care-homes", title: "Care Homes" },
  { slug: "hr-company-for-charity", title: "Charity" },
  { slug: "hr-company-for-construction", title: "Construction" },
  { slug: "hr-company-for-distribution", title: "Distribution" },
  { slug: "hr-company-for-education", title: "Education" },
  { slug: "hr-company-for-engineers", title: "Engineers" },
  { slug: "hr-company-for-leisure", title: "Leisure" },
  { slug: "hr-company-for-manufacturers", title: "Manufacturers" },
  { slug: "hr-company-for-hospitality", title: "Hospitality" },
];

export function getSector(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}
