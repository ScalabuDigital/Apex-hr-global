import { describe, expect, it } from "vitest";
import { countryRegions, locationPath, locations } from "@/config/locations";
import { locationContent } from "@/content/locations-data";
import { sectors } from "@/config/sectors";
import { sectorMarketContent } from "@/content/sector-markets-data";
import { serviceCategories, services } from "@/config/services";
import { serviceCategoryContent } from "@/content/services-data";
import { serviceFamilyGuides } from "@/content/service-family-guides";
import { extractInlineLinks } from "@/components/content/inline-link-text";
import { cityContent, cityPath, getCityByName } from "@/content/cities";
import { serviceInternationalNotes } from "@/content/service-international-data";

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;

describe("country pages carry genuine local context", () => {
  it("has a content record for every country", () => {
    expect(locationContent.map((c) => c.slug).sort()).toEqual(locations.map((l) => l.slug).sort());
  });

  it.each(locationContent.map((c) => [c.slug, c] as const))("%s has full local depth", (_slug, country) => {
    expect(words([country.localContext, ...country.marketOverview].join(" "))).toBeGreaterThanOrEqual(120);
    expect(country.cityProfiles.length).toBeGreaterThanOrEqual(3);
    expect(country.atAGlance.length).toBe(5);
    expect(country.employmentFramework.points.length).toBeGreaterThanOrEqual(5);
    expect(country.hiringConsiderations.length).toBeGreaterThanOrEqual(5);
    expect(country.faqs.length).toBeGreaterThanOrEqual(5);
    // One country-specific angle per featured service, used by every
    // service-in-country page.
    expect(Object.keys(country.serviceAngles).sort()).toEqual([...country.relatedServiceSlugs].sort());
  });

  it("never reuses the same market overview or service angle between countries", () => {
    const paragraphs = locationContent.flatMap((c) => [c.localContext, ...c.marketOverview, ...Object.values(c.serviceAngles)]);
    expect(new Set(paragraphs).size).toBe(paragraphs.length);
  });

  it("states no currency amounts or percentages (figures change; copy defers to official guidance)", () => {
    const pattern = /[₦$€£]\s?\d|\d+(\.\d+)?\s?%|\b(NGN|KES|ZAR|GHS|USD|CAD|EUR|AED|SAR|QAR)\s?\d/;
    for (const country of locationContent) {
      expect(pattern.test(JSON.stringify(country)), country.slug).toBe(false);
    }
  });
});

describe("sector pages carry international depth", () => {
  it.each(sectors.map((s) => [s.slug] as const))("%s has market content for every region", (slug) => {
    const markets = sectorMarketContent[slug];
    expect(markets, slug).toBeDefined();
    expect(markets.globalContext.length).toBeGreaterThanOrEqual(2);
    expect(markets.workforceTrends.length).toBeGreaterThanOrEqual(4);
    expect(markets.extraFaqs.length).toBeGreaterThanOrEqual(2);
    for (const region of countryRegions) expect(markets.regionalNotes[region], `${slug} ${region}`).toBeTruthy();
  });
});

describe("service pages explain international delivery", () => {
  it("has a unique international note for every service", () => {
    for (const service of services) {
      expect(words(serviceInternationalNotes[service.slug] ?? ""), service.slug).toBeGreaterThanOrEqual(30);
    }
    const notes = Object.values(serviceInternationalNotes);
    expect(new Set(notes).size).toBe(notes.length);
    expect(notes).toHaveLength(services.length);
  });
});

describe("service family pages carry an in-depth guide", () => {
  const known = new Set([
    ...services.map((s) => `/services/${s.slug}/`),
    ...serviceCategories.map((c) => `/services/${c.slug}/`),
    ...locations.map((l) => locationPath(l.slug)),
  ]);

  it.each(serviceCategories.map((c) => [c.slug] as const))("%s has a guide with working internal links", (slug) => {
    const content = serviceCategoryContent.find((c) => c.slug === slug)!;
    const guide = content.guide ?? serviceFamilyGuides[slug];
    expect(guide, slug).toBeDefined();
    expect(guide.sections.length).toBeGreaterThanOrEqual(4);
    if (content.guide) return; // the recruitment pillar is validated in talent-acquisition-seo.test.tsx
    const links = guide.sections.flatMap((section) => section.paragraphs.flatMap((p) => extractInlineLinks(p)));
    expect(links.length).toBeGreaterThan(0);
    for (const { href } of links) expect(known.has(href), `${slug} -> ${href}`).toBe(true);
  });

  it("uses a unique guide heading on every family page", () => {
    const headings = serviceCategories.map((c) => (serviceCategoryContent.find((x) => x.slug === c.slug)!.guide ?? serviceFamilyGuides[c.slug]).heading);
    expect(new Set(headings).size).toBe(headings.length);
  });
});

describe("city sub-location pages carry city-specific content", () => {
  it("has a city page for every city listed under a country's main business hubs", () => {
    for (const country of locationContent) {
      for (const profile of country.cityProfiles) {
        expect(getCityByName(country.slug, profile.city), `${country.slug} / ${profile.city}`).toBeDefined();
      }
    }
    expect(cityContent).toHaveLength(locationContent.reduce((n, c) => n + c.cityProfiles.length, 0));
  });

  it.each(cityContent.map((c) => [`${c.countrySlug}/${c.slug}`, c] as const))("%s has full local depth", (_key, city) => {
    expect(words([...city.overview, city.talentMarket].join(" "))).toBeGreaterThanOrEqual(80);
    expect(city.keySectors.length).toBeGreaterThanOrEqual(4);
    expect(city.facts).toHaveLength(3);
    expect(city.hiringNotes.length).toBeGreaterThanOrEqual(4);
    expect(city.faqs.length).toBeGreaterThanOrEqual(2);
    expect(city.metaDescription.length).toBeLessThanOrEqual(160);
    for (const slug of city.relatedServiceSlugs) expect(services.some((s) => s.slug === slug), slug).toBe(true);
    for (const slug of city.relatedSectorSlugs) expect(sectors.some((s) => s.slug === slug), slug).toBe(true);
    const country = locations.find((l) => l.slug === city.countrySlug)!;
    expect(cityPath(city)).toBe(`/${country.countryCode}/${city.slug}/`);
  });

  it("never reuses copy between cities (no doorway pages)", () => {
    const texts = cityContent.flatMap((c) => [...c.overview, c.talentMarket, c.metaDescription, ...c.hiringNotes]);
    expect(new Set(texts).size).toBe(texts.length);
  });
});
