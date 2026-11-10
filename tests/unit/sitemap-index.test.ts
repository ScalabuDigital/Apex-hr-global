import { describe, expect, it } from "vitest";
import { GET as sitemapIndexGET } from "@/app/sitemap.xml/route";
import { GET as pageSitemapGET } from "@/app/page-sitemap.xml/route";
import { GET as serviceSitemapGET } from "@/app/service-sitemap.xml/route";
import { GET as sectorSitemapGET } from "@/app/sector-sitemap.xml/route";
import { GET as locationSitemapGET } from "@/app/location-sitemap.xml/route";
import { GET as insightSitemapGET } from "@/app/insight-sitemap.xml/route";
import { GET as vacancySitemapGET } from "@/app/vacancy-sitemap.xml/route";
import { GET as sitemapXslGET } from "@/app/sitemap.xsl/route";
import { getSitemapGroups, flattenSitemapGroups } from "@/lib/seo/sitemap-data";
import { absoluteUrl } from "@/config/site";
import { redirectRules } from "@/config/redirects";
import { routes } from "@/config/routes";
import { services, serviceCategories } from "@/config/services";
import { sectors } from "@/config/sectors";
import { locationPath, locations } from "@/config/locations";
import { serviceLocationCombos, categoryLocationCombos } from "@/config/service-locations";

/**
 * Sitemap index + grouped child sitemaps (XML restructure). WordPress is
 * unconfigured in the test environment (no WORDPRESS_API_URL), so
 * insight-sitemap.xml and vacancy-sitemap.xml contribute no CMS records here — see
 * tests/unit/sitemap-wordpress-articles.test.ts for WordPress-specific
 * coverage with a mocked API, and tests/unit/wordpress.test.ts generally.
 * That means the local sitemap page count excludes live WordPress articles
 * and vacancies in this test environment.
 */

const CHILD_SITEMAP_PATHS = [
  "/page-sitemap.xml",
  "/service-sitemap.xml",
  "/sector-sitemap.xml",
  "/location-sitemap.xml",
  "/insight-sitemap.xml",
  "/vacancy-sitemap.xml",
] as const;

const CHILD_SITEMAP_HANDLERS = {
  "/page-sitemap.xml": pageSitemapGET,
  "/service-sitemap.xml": serviceSitemapGET,
  "/sector-sitemap.xml": sectorSitemapGET,
  "/location-sitemap.xml": locationSitemapGET,
  "/insight-sitemap.xml": insightSitemapGET,
  "/vacancy-sitemap.xml": vacancySitemapGET,
} as const;

async function xmlDocFrom(response: Response): Promise<{ text: string; doc: Document }> {
  const text = await response.text();
  const doc = new DOMParser().parseFromString(text, "application/xml");
  return { text, doc };
}

function locsOf(doc: Document, tag: "sitemap" | "url"): string[] {
  return [...doc.getElementsByTagName(tag)].map((el) => el.getElementsByTagName("loc")[0]?.textContent ?? "");
}

describe("1. /sitemap.xml is a valid sitemap index", () => {
  it("parses as well-formed XML with a <sitemapindex> root and correct namespace", async () => {
    const { doc } = await xmlDocFrom(await sitemapIndexGET());
    expect(doc.getElementsByTagName("parsererror")).toHaveLength(0);
    const root = doc.documentElement;
    expect(root.tagName).toBe("sitemapindex");
    expect(root.getAttribute("xmlns")).toBe("http://www.sitemaps.org/schemas/sitemap/0.9");
  });

  it("is served with an XML content type", async () => {
    const response = await sitemapIndexGET();
    expect(response.headers.get("Content-Type")).toContain("xml");
  });
});

describe("2. Every non-empty child sitemap URL is present exactly once", () => {
  // WordPress is unconfigured in tests, so there are no open vacancies and
  // the index leaves the empty vacancy sitemap out.
  const EMPTY_IN_TESTS: string[] = ["/vacancy-sitemap.xml"];

  it("lists exactly the five non-empty child sitemap URLs, each once", async () => {
    const { doc } = await xmlDocFrom(await sitemapIndexGET());
    const locs = locsOf(doc, "sitemap");
    const expected = CHILD_SITEMAP_PATHS.filter((p) => !EMPTY_IN_TESTS.includes(p)).map((p) => absoluteUrl(p));
    expect(expected).toHaveLength(5);
    expect(locs.slice().sort()).toEqual(expected.slice().sort());
    expect(new Set(locs).size).toBe(locs.length);
  });
});

describe("3. Every child sitemap is valid XML", () => {
  for (const path of CHILD_SITEMAP_PATHS) {
    it(`${path} parses as well-formed XML with a <urlset> root and correct namespace`, async () => {
      const { doc } = await xmlDocFrom(await CHILD_SITEMAP_HANDLERS[path]());
      expect(doc.getElementsByTagName("parsererror")).toHaveLength(0);
      const root = doc.documentElement;
      expect(root.tagName).toBe("urlset");
      expect(root.getAttribute("xmlns")).toBe("http://www.sitemaps.org/schemas/sitemap/0.9");
    });
  }
});

describe("4 & 5. Every indexable URL appears exactly once across the child sitemaps; total count", () => {
  it("the union of all child sitemap <url><loc> values exactly matches the data layer's flattened entries, with no duplicates and no omissions", async () => {
    const expected = flattenSitemapGroups(await getSitemapGroups()).map((e) => e.loc);

    const actual: string[] = [];
    for (const path of CHILD_SITEMAP_PATHS) {
      const { doc } = await xmlDocFrom(await CHILD_SITEMAP_HANDLERS[path]());
      actual.push(...locsOf(doc, "url"));
    }

    expect(actual.length).toBe(expected.length);
    expect(actual.slice().sort()).toEqual(expected.slice().sort());
    expect(new Set(actual).size).toBe(actual.length);
  });

  it("totals 187 unique URLs across the child sitemaps in this WordPress-unconfigured test environment", async () => {
    const actual: string[] = [];
    for (const path of CHILD_SITEMAP_PATHS) {
      const { doc } = await xmlDocFrom(await CHILD_SITEMAP_HANDLERS[path]());
      actual.push(...locsOf(doc, "url"));
    }
    expect(new Set(actual).size).toBe(187);
  });
});

describe("6, 7 & 8. service-sitemap.xml contains all 58 service/category, 36 service-country and both category-country pages", () => {
  it("contains every one of the 10 service-category and 48 service pages", async () => {
    const { doc } = await xmlDocFrom(await serviceSitemapGET());
    const locs = new Set(locsOf(doc, "url"));
    for (const category of serviceCategories) {
      expect(locs.has(absoluteUrl(`/services/${category.slug}/`)), category.slug).toBe(true);
    }
    for (const service of services) {
      expect(locs.has(absoluteUrl(`/services/${service.slug}/`)), service.slug).toBe(true);
    }
  });

  it("contains every one of the 36 service-country combination pages", async () => {
    expect(serviceLocationCombos.length).toBe(36);
    const { doc } = await xmlDocFrom(await serviceSitemapGET());
    const locs = new Set(locsOf(doc, "url"));
    for (const combo of serviceLocationCombos) {
      expect(locs.has(absoluteUrl(`/services/${combo.slug}/`)), combo.slug).toBe(true);
    }
  });

  it("contains both category-location combination pages", async () => {
    expect(categoryLocationCombos.length).toBe(2);
    const { doc } = await xmlDocFrom(await serviceSitemapGET());
    const locs = new Set(locsOf(doc, "url"));
    for (const combo of categoryLocationCombos) {
      expect(locs.has(absoluteUrl(`/services/${combo.slug}/`)), combo.slug).toBe(true);
    }
  });

  it("service-sitemap.xml contains exactly 96 URLs (10 + 48 + 36 + 2)", async () => {
    const { doc } = await xmlDocFrom(await serviceSitemapGET());
    expect(locsOf(doc, "url").length).toBe(96);
  });
});

describe("9. sector-sitemap.xml contains all 17 sector pages", () => {
  it("contains exactly the 17 approved sector URLs", async () => {
    expect(sectors.length).toBe(17);
    const { doc } = await xmlDocFrom(await sectorSitemapGET());
    const locs = locsOf(doc, "url");
    expect(locs.length).toBe(17);
    for (const sector of sectors) {
      expect(locs, sector.slug).toContain(absoluteUrl(`/sector/${sector.slug}/`));
    }
  });
});

describe("10. No retired service or sector slug is present in any child sitemap", () => {
  it("every /services/ URL uses the '-firm' suffix (D-017) and every /sector/ URL uses the 'hr-company-for-' prefix", async () => {
    const offenders: string[] = [];
    for (const path of CHILD_SITEMAP_PATHS) {
      const { doc } = await xmlDocFrom(await CHILD_SITEMAP_HANDLERS[path]());
      for (const loc of locsOf(doc, "url")) {
        const pathname = new URL(loc).pathname;
        if (pathname === "/services/" || pathname === "/sector/") continue;
        if (pathname.startsWith("/services/") && !pathname.includes("-firm")) offenders.push(loc);
        if (pathname.startsWith("/sector/") && !pathname.includes("hr-company-for-")) offenders.push(loc);
      }
    }
    expect(offenders).toEqual([]);
  });
});

describe("11. No redirect source or noindex URL is included", () => {
  it("no child sitemap contains any of the 69 redirect rule sources", async () => {
    const allLocs = new Set<string>();
    for (const path of CHILD_SITEMAP_PATHS) {
      const { doc } = await xmlDocFrom(await CHILD_SITEMAP_HANDLERS[path]());
      for (const loc of locsOf(doc, "url")) allLocs.add(new URL(loc).pathname);
    }
    for (const rule of redirectRules) {
      expect(allLocs.has(rule.source), rule.source).toBe(false);
    }
  });

  it("excludes known noindex routes while including the indexable Job Board", async () => {
    const noindexPaths = [
      routes.talentPool.path,
      routes.findTalent.path,
      routes.resources.path,
      routes.caseStudies.path,
      routes.experts.path,
    ];
    const allLocs = new Set<string>();
    for (const path of CHILD_SITEMAP_PATHS) {
      const { doc } = await xmlDocFrom(await CHILD_SITEMAP_HANDLERS[path]());
      for (const loc of locsOf(doc, "url")) allLocs.add(new URL(loc).pathname);
    }
    for (const p of noindexPaths) {
      expect(allLocs.has(p), p).toBe(false);
    }
    expect(allLocs.has(routes.jobs.path)).toBe(true);
  });
});

describe("12. Every production URL uses https://www.apexhrllc.com", () => {
  it("every <loc> in the index and every child sitemap starts with the production origin", async () => {
    const { doc: indexDoc } = await xmlDocFrom(await sitemapIndexGET());
    const allLocs = [...locsOf(indexDoc, "sitemap")];
    for (const path of CHILD_SITEMAP_PATHS) {
      const { doc } = await xmlDocFrom(await CHILD_SITEMAP_HANDLERS[path]());
      allLocs.push(...locsOf(doc, "url"));
    }
    expect(allLocs.length).toBeGreaterThan(0);
    for (const loc of allLocs) {
      expect(loc.startsWith("https://www.apexhrllc.com/"), loc).toBe(true);
    }
  });
});

describe("13. The XSL stylesheet is referenced by the index and every child sitemap", () => {
  it("the index document's raw XML contains the xml-stylesheet processing instruction", async () => {
    const response = await sitemapIndexGET();
    const text = await response.text();
    expect(text).toContain(`<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`);
  });

  for (const path of CHILD_SITEMAP_PATHS) {
    it(`${path}'s raw XML contains the xml-stylesheet processing instruction`, async () => {
      const response = await CHILD_SITEMAP_HANDLERS[path]();
      const text = await response.text();
      expect(text).toContain(`<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`);
    });
  }
});

describe("14. The XML remains usable when the stylesheet is unavailable", () => {
  it("every document parses successfully via a plain XML parser that never fetches the referenced stylesheet", async () => {
    // DOMParser's XML mode never fetches an <?xml-stylesheet?> href — the
    // PI is inert to XML parsing by design. Every document below still
    // parses to a valid, well-formed tree, proving the underlying data is
    // fully usable by a crawler (or any XML consumer) regardless of
    // whether /sitemap.xsl itself is reachable.
    const { doc: indexDoc } = await xmlDocFrom(await sitemapIndexGET());
    expect(indexDoc.getElementsByTagName("parsererror")).toHaveLength(0);
    expect(indexDoc.documentElement.tagName).toBe("sitemapindex");

    for (const path of CHILD_SITEMAP_PATHS) {
      const { doc } = await xmlDocFrom(await CHILD_SITEMAP_HANDLERS[path]());
      expect(doc.getElementsByTagName("parsererror"), path).toHaveLength(0);
      expect(doc.documentElement.tagName, path).toBe("urlset");
    }
  });
});

describe("Images column: only real image data, never fabricated", () => {
  it("no <image:image> element appears anywhere except insight-sitemap.xml", async () => {
    for (const path of CHILD_SITEMAP_PATHS) {
      if (path === "/insight-sitemap.xml") continue;
      const response = await CHILD_SITEMAP_HANDLERS[path]();
      const text = await response.text();
      expect(text, path).not.toContain("<image:image>");
      expect(text, path).not.toContain('xmlns:image=');
    }
  });
});

describe("XSL stylesheet endpoint", () => {
  it("/sitemap.xsl returns a valid XSLT document and never mentions Yoast", async () => {
    const response = await sitemapXslGET();
    const text = await response.text();
    expect(response.headers.get("Content-Type")).toContain("xsl");
    expect(text).toContain("<xsl:stylesheet");
    expect(text).toContain("Generated by Apex HR");
    expect(text.toLowerCase()).not.toContain("yoast");
  });
});

describe("Location and talent-acquisition child sitemaps stay complete", () => {
  it("location-sitemap.xml contains every configured location page", async () => {
    const { doc } = await xmlDocFrom(await locationSitemapGET());
    const locs = new Set(locsOf(doc, "url"));
    for (const location of locations) {
      expect(locs.has(absoluteUrl(locationPath(location.slug))), location.slug).toBe(true);
    }
  });

});
