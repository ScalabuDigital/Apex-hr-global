# Case Study Audit — Phase 1

**Date:** 9 November 2026
**Branch inspected:** `seo/talent-acquisition-topical-authority` (clean apart from untracked `docs/blog-drafts/`, `docs/blog-images/`)
**Status:** Audit only. No code, route or content record has been changed.

---

## 1. What exists today

| Item | Finding | Source |
|---|---|---|
| Case-study hub `/case-study/` | Route is **Confirmed** but `readyToIndex: false`. Renders an `EmptyEditorialState` ("No verified case studies are published yet. None are fabricated to fill this page."). Live page serves `noindex, follow`. | `src/app/case-study/page.tsx`, `src/config/routes.ts` |
| Individual case-study route `/case-study/[slug]/` | **Provisional** in the master sitemap. No route file exists. Provisional routes must stay out of the sitemap and index until approved. | `docs/MASTER-SITEMAP.md` line 73, CLAUDE.md §9, §28 |
| Published case studies | **0** | `caseStudyPreviews: []` in `src/content/home.ts` |
| Reusable components | `CaseStudyCard` (title + summary card), `CaseStudiesSection` (homepage grid, links to hub only once `readyToIndex` is true), `EmptyEditorialState` | `src/components/content/`, `src/components/sections/` |
| Service-page slot | All 48 service pages render "A relevant case study will appear here once verified evidence is approved." in the "Still deciding" panel | `service-page-template.tsx:390` |
| Sector-page slot | None. Sector template has no case-study module. | `sector-page-template.tsx` |
| Content model | `caseStudy` schema defined (services, sectors, challenge, approach, solution, impact, `verifiedResults`, `proofApproval`, SEO, workflow). Not implemented in code. | `docs/CONTENT-MODEL.md` §12.2 |
| Navigation | Case Studies link deliberately hidden until the hub is indexable | `src/config/navigation.ts:39` |
| Sitemap | Generated from `src/content/manifest.ts` via `src/lib/seo/sitemap-data.ts`. `caseStudiesHub` is the only case-study page type; no group exists for individual case studies yet. | |

## 2. Pages audited

| Family | Count | Case-study coverage |
|---|---|---|
| Home + hub/landing/general pages | ~17 | 0 (homepage section shows empty state) |
| Service categories | 10 | 0 |
| Services | 48 | 0 (all show empty slot) |
| Sectors | 17 | 0 (no slot) |
| Locations | 16 | 0 (not recommended — see §5) |
| Talent-acquisition roles | 62 | 0 |
| Service-location combinations | 816 | Provisional, not published — excluded |
| **Indexable pages audited** | **~170** | **0 with a case study** |

Every indexable page lacks case-study support. The gap is total, so the recommendation groups related services rather than proposing one case study per page.

## 3. Governing constraint (needs a decision)

The project rules and the brief agree on one point and leave one open:

- **Agreed:** no invented client names, figures, testimonials or outcomes presented as real (CLAUDE.md §2.8, §15 "A case study must identify the relevant service and use verified results", §31; brief §3I).
- **Open:** the brief permits *clearly labelled illustrative/hypothetical* case studies when real data is missing. CLAUDE.md §31 says that where proof is unavailable, use "an honest empty or editorial-preview state instead of a section, never a fabricated example presented as real." A labelled scenario is not presented as real, but it is not what the existing empty-state copy promises either ("None are fabricated to fill this page").

Further points to weigh:

- Illustrative scenarios carry weaker trust and E-E-A-T value than real anonymised engagements, and reviewers and Google's guidance on helpful content reward first-hand evidence.
- UK consumer-protection rules on misleading commercial practices (now under the Digital Markets, Competition and Consumers Act 2024) make it risky for "example" content to read like a real result. Labelling must be visible on every card, page and snippet, not just a footnote.
- Individual case-study URLs are **Provisional**, so they cannot be published or added to the sitemap without a recorded route decision in `docs/URL-DECISION-REGISTER.md`.

**Decision needed before Phase 2:**
1. Evidence basis: real anonymised Apex HR engagements (you supply facts + approval), labelled illustrative scenarios, or a mix.
2. Approval to move `/case-study/[slug]/` from Provisional to Confirmed (and to flip `/case-study/` to `readyToIndex: true` once content exists).

## 4. Recommended case-study inventory (11 grouped studies covering all 48 services and 17 sectors)

| # | Working title | Services supported | Sectors supported | Primary keyword | Proposed slug |
|---|---|---|---|---|---|
| 1 | Scaling a technology team from Series A to growth stage | Permanent Recruitment, RPO, Employer Branding & EVP, Strategic Workforce Planning | Startups & Scale-ups, IT | scale-up recruitment case study | `/case-study/scale-up-technology-recruitment/` |
| 2 | Appointing a senior finance leader in a regulated firm | Executive Search, Succession Planning & Talent Mapping, Executive Compensation & Share Schemes, Executive Coaching & 360 Feedback | Financial Services, Professional Services | executive search case study | `/case-study/executive-search-financial-services/` |
| 3 | Stabilising clinical and care staffing | Contract Staffing, Permanent Recruitment, Skilled Worker Sponsorship HR Support, Workplace Wellbeing & Mental Health | Healthcare, Care Homes | healthcare recruitment case study | `/case-study/healthcare-care-staffing/` |
| 4 | Building HR foundations for a growing practice | Retained HR Services, HR Support for Small Businesses & Startups, Fractional HR Director, HR Compliance Audit, Employee Handbooks & HR Policies, Payroll Advisory | Accountants, Architects, Professional Services, Charity | outsourced HR case study | `/case-study/outsourced-hr-growing-practice/` |
| 5 | Managing a site restructure fairly | Redundancy & Restructuring Support, TUPE Advisory, Outplacement & Career Transition, Industrial Relations & Trade Union Negotiations, Change Management | Manufacturers, Distribution | redundancy and restructuring case study | `/case-study/manufacturing-restructure/` |
| 6 | Resolving a complex employee-relations matter | Workplace Investigations, Workplace Mediation & Conflict Resolution, Employment Tribunal HR Support | Education, Charity | workplace investigation case study | `/case-study/employee-relations-investigation/` |
| 7 | Integrating two organisations after an acquisition | M&A People Due Diligence & Post-Merger Integration, Organisation Design, Culture Transformation, People Strategy | Life Sciences, Engineers | post-merger integration HR case study | `/case-study/post-merger-people-integration/` |
| 8 | Introducing a fair, transparent pay framework | Salary Benchmarking, Job Evaluation & Pay Structures, Reward Strategy, Pay Equity & Pay Gap Reporting, Employee Benefits Consulting | Financial Services, Leisure | pay structure case study | `/case-study/pay-framework-and-reward/` |
| 9 | Reducing frontline turnover in a multi-site operator | Employee Engagement Surveys, Employee Experience Strategy, Performance Management, Leadership & Management Training, DEI Consulting | Hospitality, Leisure | staff retention case study hospitality | `/case-study/hospitality-staff-retention/` |
| 10 | Replacing spreadsheets with a single HR system | HR Software Selection, HRIS Implementation, People Analytics & HR Dashboards, Digital HR Transformation, AI Workplace Policy & HR Integration | IT, Distribution | HRIS implementation case study | `/case-study/hris-implementation/` |
| 11 | Building an early-careers pipeline for a skills-short trade | Graduate Schemes & Early Careers Design, Competency Frameworks, Learning Strategy & Capability Development, Global Mobility & Expatriate HR | Construction, Engineers | graduate scheme case study | `/case-study/early-careers-construction/` |

Every service appears at least once. Each sector maps to 1–2 studies. Talent-acquisition role pages link to #1, #2, #3 or #11 according to role family.

### Delivery status (9 November 2026)

- **Decision:** user chose *labelled illustrative* case studies (D-020). Individual routes stay Provisional/noindex pending a separate route decision.
- **Batch 1 built:** #1 `/case-study/scale-up-technology-recruitment/`, #2 `/case-study/executive-search-financial-services/`, #4 `/case-study/outsourced-hr-growing-practice/`.
- **Batch 2 built:** #3 `/case-study/healthcare-care-staffing/`, #5 `/case-study/manufacturing-restructure/`, #6 `/case-study/employee-relations-investigation/`, #7 `/case-study/post-merger-people-integration/`, #8 `/case-study/pay-framework-and-reward/`, #9 `/case-study/hospitality-staff-retention/`, #10 `/case-study/hris-implementation/`, #11 `/case-study/early-careers-construction/`.
- **Coverage:** all 48 services and all 17 sectors now have at least one case study (enforced by `tests/unit/case-studies.test.tsx`).
- **Legal review required (`legalReviewRequired: true`):** outsourced HR (#4), healthcare/sponsorship (#3), restructure (#5), employee relations (#6), post-merger (#7), pay framework (#8).
- **Not done:** sector-page case-study module (new pattern, needs sign-off); indexing (needs route decision).

## 5. Integration plan (Phase 3, once approved)

Smallest safe slice, reusing what exists:

1. `src/content/case-studies-data.ts`: typed records shaped on the `caseStudy` model (CONTENT-MODEL §12.2), including `evidenceBasis: "verified" | "illustrative"`, `proofApproval`, `contentStatus: "ai-draft"`, `reviewStatus`, `legalReviewRequired`.
2. `src/app/case-study/[slug]/page.tsx`: static params from the records; `notFound()` for unknown slugs; `buildMetadata` for title, description and canonical.
3. `/case-study/` hub: replace the empty state with a `CaseStudyCard` grid when records exist; flip `readyToIndex` only on approval.
4. Service template line 390: render the closest `CaseStudyCard` when a related record exists, otherwise keep the existing empty state. No layout change.
5. Sector template: add an optional related-case-study card only if approved (new module, so it needs sign-off).
6. Manifest + sitemap: add a `caseStudy` page type to `classifyPageType`, so the exhaustive switch enforces a sitemap group.
7. Structured data: `Article` + `BreadcrumbList` only. No `Review` and no rating markup.
8. Illustrative studies (if chosen): a visible "Illustrative scenario: not a client engagement" label on the card, page hero and meta description. Use `noindex` if you want them on-site for sales use but not in search.
9. Tests: extend the content-audit and sitemap tests, then run `typecheck`, `lint`, `test` and `build`.

Locations: no case study should name a city unless the engagement genuinely took place there (CLAUDE.md §9 forbids implied local presence).

## 6. Reviews required regardless of option

- Studies 3, 5, 6, 7 and 8 touch employment law (sponsorship, redundancy, TUPE, investigations, tribunal, equal pay) and need `legalReviewRequired: true` plus qualified review.
- Study 3: the UK care-worker visa route has changed materially since 2025. Any sponsorship narrative must be checked against current GOV.UK guidance at the time of writing.
- Every study: stakeholder sign-off recorded in `proofApproval`.
