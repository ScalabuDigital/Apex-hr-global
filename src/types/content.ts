import type { RouteStatus } from "./route";

/**
 * Shared content-manifest types for Phase 3's CMS-ready architecture.
 * These are the local, typed equivalent of the Sanity schemas described in
 * docs/CONTENT-MODEL.md — a temporary fallback pending live Sanity
 * integration (see src/lib/sanity/). Field names deliberately mirror
 * CONTENT-MODEL.md's `routeIdentity`, `seoFields` and `editorialWorkflow`
 * objects so a future migration can map these records directly onto
 * Sanity documents.
 */

export type PageType =
  | "home"
  | "serviceHub"
  | "serviceCategory"
  | "service"
  | "sectorHub"
  | "sector"
  | "locationHub"
  | "location"
  | "serviceLocation"
  | "serviceCategoryLocation"
  | "talentAcquisitionHub"
  | "talentAcquisitionRole"
  | "employerLanding"
  | "candidateLanding"
  | "insightsHub"
  | "insightCategory"
  | "resourcesHub"
  | "caseStudiesHub"
  | "caseStudy"
  | "expertsHub"
  | "generalInformation"
  | "conversionLanding";

/**
 * Internal editorial workflow state — never rendered to public users.
 * Mirrors docs/CONTENT-MODEL.md section 4.2 `workflowStatus`, narrowed to
 * the two values relevant to this phase's AI-authored first drafts.
 */
export type ContentStatus = "ai-draft" | "stakeholder-approved";

/** Internal review-gate state — never rendered to public users. */
export type ReviewStatus = "stakeholder-review-required" | "in-review" | "approved";

export type PrimaryAudience = "employer" | "candidate" | "general";

export interface ContentManifestEntry {
  pageType: PageType;
  title: string;
  slug: string;
  canonicalPath: string;
  routeStatus: RouteStatus;
  /** Whether this route should appear in the XML sitemap and be indexable. */
  indexable: boolean;
  contentStatus: ContentStatus;
  reviewStatus: ReviewStatus;
  primaryAudience: PrimaryAudience;
  primaryIntent: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Canonical path of the parent page, if any. */
  parent?: string;
  relatedPages?: string[];
  sourceReferences?: string[];
  legalReviewRequired: boolean;
}

/** A short, generic FAQ pair reused across service/sector/role/location templates. */
export interface ContentFaqItem {
  id: string;
  question: string;
  answer: string;
}

/** A single related-content reference (service, sector, role, etc.). */
export interface RelatedLink {
  label: string;
  href: string;
}

/**
 * Talent-acquisition SEO pass (docs/seo/talent-acquisition-research.md):
 * an explanatory, canonical-page-only guide block. Paragraph strings may
 * contain inline links written as `[anchor text](/internal/path/)` or
 * `[anchor text](https://official.source/)` — rendered by
 * `InlineLinkText`. Every href is validated by
 * tests/unit/talent-acquisition-seo.test.tsx.
 */
export interface ContentGuideSection {
  heading: string;
  paragraphs: string[];
}

export interface ContentGuide {
  /** Small kicker label above the H2. */
  kicker: string;
  /** The guide's H2 — each page's is unique and intent-specific. */
  heading: string;
  intro?: string;
  /** Rendered as H3 subsections under the guide's H2. */
  sections: ContentGuideSection[];
}

/** A link to an existing, verified Apex HR insight article. */
export interface RelatedInsightLink {
  title: string;
  /** Root-level article path, e.g. `/rpo-vs-recruitment-agency/`. */
  path: string;
}
