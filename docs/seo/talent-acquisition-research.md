# Talent Acquisition Cluster — Research, Audit and Content-Gap Report

- Prepared: 9 November 2026
- Branch: `seo/talent-acquisition-topical-authority`
- Scope (approved by the user on 9 November 2026): the six Recruitment & Talent Acquisition service pages, plus the 62 role pages in `talent-acquisition-sitemap.xml`, with a keyword-overlap check of the related service-location variants.
- Status of all copy produced from this report: `ai-draft` and `stakeholder-review-required`, per CLAUDE.md section 31. Legal-adjacent passages are flagged for legal review.

---

## 1. Sitemap audit

### 1.1 What the sitemap actually contains

`https://www.apexhrllc.co.uk/talent-acquisition-sitemap.xml` (served by `src/app/talent-acquisition-sitemap.xml/`) contains **62 URLs**, all under `/talent-acquisition/[role-slug]/`. It does **not** contain the six `/services/` pages named in the project brief. Those live in `service-sitemap.xml`, alongside 104 other service and service-location URLs. The sitemap index (`/sitemap.xml`) also references page, sector, location, insight and vacancy sitemaps. `robots.txt` allows everything except `/api/` (with `/api/og/` re-allowed).

All 62 role URLs return 200, are rendered from one template (`src/components/templates/talent-role-template.tsx`) and one data file (`src/content/talent-roles-data.ts`). They are grouped into 10 role families:

| Role family | Roles |
|---|---|
| Executive & Senior Leadership | chief-executives-senior-officials, marketing-sales-advertising-directors, consultancy-directors, creative-industry-managers-directors, healthcare-practice-managers, care-managers-proprietors, storage-warehousing-managers, office-managers, cleaning-housekeeping-managers-supervisors, health-safety-managers-officers, education-advisers-school-inspectors |
| Sales & Business Development | business-sales-executives, sales-business-development-managers, buyers-procurement-officers, market-research-interviewers, brokers, insurance-underwriters |
| IT & Data | it-business-analysts-architects-systems-designers, it-operations-technicians, it-user-support-technicians, data-analysts, information-technology-trainers |
| Healthcare & Care | generalist-medical-practitioners, specialist-medical-practitioners, occupational-therapists, speech-language-therapists, clinical-psychologists, psychologists, medical-radiographers, medical-dental-technicians, early-education-childcare-practitioners, veterinary-nurses, senior-care-workers, houseparents-residential-wardens |
| Finance & Compliance | financial-accounting-technicians, credit-controllers, bookkeepers-payroll-wages-clerks, taxation-experts, estimators-valuers-assessors, standards-regulations-inspectors |
| Engineering & Technical | engineering-technicians, quality-assurance-technicians, planning-process-production-technicians, cad-drawing-architectural-technicians, metalworking-production-maintenance-fitters, precision-instrument-makers-repairers, security-system-installers-repairers, skilled-metal-electrical-electronic-trades-supervisors, floorers-wall-tilers, industrial-cleaning-process-occupations |
| HR & Training | human-resources-industrial-relations-officers, careers-advisers-vocational-guidance, vocational-industrial-trainers |
| Transport & Logistics | aircraft-pilots-air-traffic-controllers, rail-travel-assistants, train-tram-drivers |
| Retail, Leisure & Customer-Facing | retail-cashiers-checkout-operators, leisure-theme-park-attendants, photographers-audiovisual-broadcasting-operators, library-clerks-assistants |
| Agriculture & Environment | farm-workers, environment-professionals |

The role labels follow ONS SOC 2020 unit-group naming (for example "Chief executives and senior officials"). This is useful semantic grounding, but SOC codes were **not** added to pages because each code would need checking against the ONS SOC 2020 coding index first (see section 8).

### 1.2 Service pages in scope

| URL | Template | Live title | Live meta description (length) |
|---|---|---|---|
| `/services/recruitment-and-talent-acquisition-firm-in-the-uk/` | Service category (pillar) | Recruitment & Talent Acquisition Firm in the UK \| Apex HR | "Permanent, contract and executive recruitment delivered alongside genuine HR expertise." (88 chars, weak) |
| `/services/permanent-recruitment-firm-in-the-uk/` | Service | Permanent Recruitment Firm in the UK \| Apex HR | 153 chars |
| `/services/executive-search-firm-in-the-uk/` | Service | Executive Search Firm in the UK \| Apex HR | 151 chars |
| `/services/contract-staffing-firm-in-the-uk/` | Service | Contract Staffing Firm in the UK \| Apex HR | 146 chars |
| `/services/recruitment-process-outsourcing-rpo-firm-in-the-uk/` | Service | Recruitment Process Outsourcing (RPO) Firm in the UK \| Apex HR | 152 chars |
| `/services/graduate-schemes-and-early-careers-design-firm-in-the-uk/` | Service | Graduate Schemes & Early Careers Design Firm in the UK \| Apex HR | 145 chars |

Every page has one H1, a self-referencing canonical, `Service` + `BreadcrumbList` JSON-LD, and an `FAQPage` block emitted by `FaqWithContactForm` from the visible FAQs.

Related service-location variants (keyword-overlap check only, content not changed):

- Permanent Recruitment × 12 locations (Manchester, Birmingham, Leeds, Bristol, Glasgow, Nottingham, Newcastle, Warwickshire, Worcester, Yorkshire, Staffordshire, Liverpool, Leicester)
- Executive Search × London, Edinburgh, Oxford
- RPO × Liverpool
- Recruitment & Talent Acquisition × Liverpool (category-location)

These reuse `heroSummary`, `whatItIncludes` and the first three `faqs` of the parent service, plus location context. **New canonical-only fields were used for all additions in this project, so no service-location page changes**, except where the parent `metaDescription` feeds `buildComboMetaDescription` (the location pages' descriptions change with it but stay unique).

---

## 2. Content audit — what works and what's missing

### 2.1 What already works (kept)

- Clear, distinct principal intents per service, enforced by `tests/unit/recruitment-talent-acquisition-children.test.tsx`.
- Honest scope boundaries (`outOfScope`) and differentiation notes, with no fabricated proof.
- One H1 per page, aligned with the URL keyphrase ("… Firm in the UK").
- Pillar → child links (crawlable static grid), child → pillar links (breadcrumb and hero), and child ↔ child related-service links.

### 2.2 Gaps found

| Gap | Pages affected | Severity |
|---|---|---|
| No explanatory content: pages list *what* is included but never explain *how* the service works, what the terminology means or how to choose | All six service pages | High |
| Pillar never explains talent acquisition itself, TA vs recruitment, workforce planning, the lifecycle or measurement | Pillar | High |
| Pillar has an 88-character meta description | Pillar | Medium |
| Few FAQs (1–3 per child page) | All five children | Medium |
| Role pages are very thin: one-sentence overview, two challenges, one-sentence approach | All 62 role pages | High |
| **The same templated FAQ appears on all 62 role pages** (only the role name changes): near-duplicate content | All 62 role pages | High |
| Role meta descriptions are 40–110 characters ("Recruitment support for data analyst hires.") | All 62 role pages | High |
| Role title tags use awkward casing ("Data analysts Recruitment") | All 62 role pages | Medium |
| Role pages link only to 1–2 services and 1–2 sectors; no link to the pillar, no links between related roles | All 62 role pages | High |
| The pillar does not link to any role page | Pillar | High |
| Published Apex insight articles on these exact topics are not linked from the service pages ("insight" slot shows an empty state) | All six service pages | High |
| No mention of UK compliance context employers search for (right to work checks, IR35, agency worker rules, data protection in recruitment) | Pillar, Permanent, Contract | Medium |

### 2.3 Keyword cannibalisation risks

| Risk | Detail | Action |
|---|---|---|
| Duplicate insight article | `/contract-staffing-vs-permanent-staffing/` and `/contract-staffing-vs-permanent-staffing-2/` both return 200 with **identical titles** and **self-referencing canonicals** | **Outside this codebase** (WordPress). Recommend a 301 from `-2` to the original, or unpublishing it. Only the original is linked from this project. |
| Insight articles vs service pages | e.g. `/rpo-vs-recruitment-agency/` vs the RPO service page; `/executive-search-vs-recruitment-agency-which-is-better-for-senior-hires/` vs Executive Search | Low risk: the articles are informational and the service pages are commercial. Service pages now link to the articles with descriptive anchors, which clarifies the relationship. |
| "Top X agencies" listicles | `/top-talent-acquisition-recruitment-agencies-uk/`, `/top-executive-search-firms-uk/`, `/top-10-permanent-recruitment-agencies-in-the-uk-to-compare/` | These target commercial-investigation intent close to the service pages. **Not linked** from the service pages. Recommend that each listicle links to its service page. |
| Pillar vs Permanent Recruitment | Both could rank for "recruitment firm UK" | The pillar now targets "talent acquisition" and the broad, lifecycle-level intent. The Permanent page keeps "permanent recruitment". |
| Role pages vs services | e.g. "data analyst recruitment" vs Permanent Recruitment | No conflict: role pages target role-plus-recruitment terms. |
| Service-location variants | 12 Permanent Recruitment location pages | Unchanged in this project. Already governed by D-015/D-017 and the doorway-page rules in CLAUDE.md section 9. |

---

## 3. Search intent and keyword map

| Page | Primary theme | Intent | Secondary semantic topics |
|---|---|---|---|
| Pillar | talent acquisition (UK) / recruitment and talent acquisition firm | Commercial + broad informational | talent acquisition vs recruitment, strategic workforce planning, skills-gap analysis, talent acquisition lifecycle, employer branding, EVP, candidate attraction, sourcing, talent pipeline, screening and assessment, selection, onboarding, retention, ATS, recruitment metrics, quality of hire, fair and compliant hiring |
| Permanent Recruitment | permanent recruitment | Commercial | permanent hiring, vacancy brief, job description, person specification, essential and desirable criteria, sourcing, shortlisting, competency-based and structured interviews, right to work checks, references, offer, counter-offer, probation, onboarding, quality of hire, permanent vs contract |
| Executive Search | executive search | Commercial | executive recruitment, C-suite, senior leadership hiring, retained search, headhunting, market mapping, longlist and shortlist, passive candidates, leadership assessment, confidential and replacement search, referencing, succession planning, leadership continuity, executive search vs recruitment agency |
| Contract Staffing | contract staffing | Commercial | contract recruitment, interim management, temporary staffing, fixed-term contracts, contingent workforce, workforce flexibility, project-based staffing, contractor screening, employment status, off-payroll working (IR35), status determination statement, Agency Workers Regulations 12-week qualifying period, contract vs permanent |
| RPO | recruitment process outsourcing | Commercial | RPO models (end-to-end, project, selective/hybrid, on-demand), outsourced recruitment team, high-volume recruitment, ATS, recruitment process management, time to hire, cost per hire, quality of hire, candidate experience, hiring-manager satisfaction, governance and SLAs, RPO for SMEs, RPO vs agency |
| Graduate Schemes | graduate scheme design / graduate recruitment | Commercial | early careers recruitment, graduate programmes, apprenticeships, university and campus attraction, employer branding, assessment centres, situational judgement and work-sample assessment, offer-to-start engagement, reneging, rotations, graduate development, graduate retention, early-career talent pipeline |
| Role pages (62) | "[role] recruitment" | Commercial | the role's regulator, registration or licence (where one exists), core skills, assessment method, relevant services and sectors |

---

## 4. Verified research findings

Only findings checked against the primary source are used on pages. Each one is cited where it appears.

| # | Finding | Source (primary) | Published / updated | Used on |
|---|---|---|---|---|
| R1 | 46% of organisations still take an ad hoc approach to recruitment, and only 19% calculate the return on investment of their recruitment processes | CIPD, *Resourcing and talent planning report 2026* (with Omni RMS; 1,014 UK employers; YouGov fieldwork 2 Apr–2 May 2026) — https://www.cipd.org/globalassets/media/knowledge/knowledge-hub/reports/2026-pdfs/9218-resource-and-talent-planning-2026-report-web.pdf | Press release 22 Sep 2026 — https://www.cipd.org/en/about/press-releases/rtp-2026/ | Pillar |
| R2 | 31% of organisations track time to hire (up from 21% in 2024); 33% collect data on candidate experience (up from 27%) | Same CIPD report, key findings | 2026 | RPO |
| R3 | 53% of organisations that tried to recruit in the last year had difficulty attracting candidates, particularly for senior and skilled roles | CIPD RTP 2026 press release | 22 Sep 2026 | Not used on pages (kept for reference) |
| R4 | 43% of employers offer graduate programmes; 52% offer apprenticeships | CIPD RTP 2026 press release | 22 Sep 2026 | Graduate Schemes |
| R5 | Graduate roles attracted an average of 140 applications per vacancy in each of the last two recruitment cycles (38 in 2002/3); graduate vacancies fell 8% in 2024-25 | Institute of Student Employers, *Student Recruitment Survey 2025* (155 employers, 31,000+ hires, 1.8m+ applications) — https://ise.org.uk/knowledge/insights/492/apprenticeships_rise_as_graduate_vacancies_drop_8 | 15 Oct 2025 | Graduate Schemes |
| R6 | There is no recruitment process set by law, but employers must follow discrimination and data protection law throughout | Acas, Recruitment — https://www.acas.org.uk/recruitment | Updated 30 Jun 2026 | Pillar, Permanent |
| R7 | Employers must check a job applicant's right to work in the UK before employing them (share code, original documents, or an IDVT provider for British and Irish citizens) | GOV.UK, Check a job applicant's right to work — https://www.gov.uk/check-job-applicant-right-to-work | Current | Permanent, Contract |
| R8 | Under the off-payroll working rules, in most cases the client decides the worker's employment status and should give a status determination statement (SDS) with reasons; for small clients outside the public sector, the worker's intermediary decides | GOV.UK, Understanding off-payroll working (IR35) — https://www.gov.uk/guidance/understanding-off-payroll-working-ir35 | Updated 26 Feb 2026 | Contract |
| R9 | Agency workers become entitled to equal treatment on pay, holiday and working patterns after a 12-week qualifying period in the same role with the same hirer; some rights apply from the start | Acas, Agency workers: rights after 12 weeks — https://www.acas.org.uk/agency-workers/understanding-your-employment-rights-after-12-weeks | Updated 7 Apr 2026 | Contract |
| R10 | The unfair dismissal qualifying period reduces from two years to six months for dismissals on or after 1 January 2027 (Employment Rights Act 2025) | GOV.UK, Plan to Make Work Pay and Employment Rights Act: timeline update — https://www.gov.uk/government/publications/implementing-the-plan-to-make-work-pay-and-employment-rights-act/plan-to-make-work-pay-and-employment-rights-act-timeline-update ; GOV.UK unfair dismissal factsheet | 2026 | Permanent |
| R11 | ICO guidance on recruitment and selection covers the whole process from advertising to deleting candidate information, and is under review following the Data (Use and Access) Act 2025 | ICO — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/recruitment-and-selection/ (direct fetch returned 403; content confirmed through the ICO's indexed page text) | Under review | Pillar |

### Findings considered and deliberately not used

- **ONS vacancy totals** and **REC/KPMG Report on Jobs** indices change every month. Hard-coding them would make pages go stale. Recommend citing them in dated insight articles instead.
- **IR35 small-company thresholds** (raised from 6 April 2025, with further changes reported from April 2026). These are time-sensitive and have transitional rules, so pages link to GOV.UK instead of quoting figures (CLAUDE.md section 31).
- **Unfair dismissal compensation cap figures.** Time-sensitive, and not needed for the employer decision the page supports.
- **Vendor and blog statistics on RPO savings or time-to-hire reductions.** Not primary, often promotional, so not used.

---

## 5. Competitor and SERP analysis

Reviewed: UK recruitment agencies and RPO and executive-search providers ranking for the cluster's terms, plus industry explainers (AESC on the executive search process; RPO provider explainers from AMS, Airswift and others). Takeaways, not copy:

| Topic | What ranking pages typically cover | Gap in Apex content (before) |
|---|---|---|
| Executive search | Mandate → market mapping → longlist → direct approach → assessment → shortlist (often 3–5) → referencing → offer and counter-offer → onboarding; retained vs contingent | Apex listed four bullets with no process explanation, and no retained vs contingent distinction |
| RPO | Named models (end-to-end/enterprise, project, selective/modular, on-demand, hybrid); pricing logic (management fee, per-hire); SLAs and metrics; technology | Apex named two engagement options only; no metrics or model explanation |
| Contract staffing | Contract vs temp vs interim vs fixed-term; IR35/status; AWR 12-week rule; speed to engage | No terminology, only a single IR35 FAQ |
| Permanent recruitment | Stage-by-stage process; fee structures (contingency vs retained, rebate periods); counter-offers; probation | No stage explanation; fees only touched on via "guarantee" FAQ |
| Graduate | Attraction calendar, assessment centres, diversity in early careers, reneging, apprenticeships vs graduates | No assessment or attraction detail |
| Talent acquisition hub | TA vs recruitment, workforce planning, EVP, metrics, technology, lifecycle diagrams | None of these on the pillar |

**Where competitors are weak (Apex's opportunity):** most agency pages are sales copy with little UK-specific compliance context and no measurement guidance. Few link recruitment to HR disciplines (workforce planning, onboarding, retention), which is Apex's genuine positioning as an HR firm that also recruits.

---

## 6. Semantic entity list

Talent acquisition · recruitment · strategic workforce planning · skills-gap analysis · workforce plan · headcount plan · employer brand · employee value proposition (EVP) · candidate attraction · job advert · job description · person specification · essential and desirable criteria · sourcing · passive candidates · talent pool · talent pipeline · screening · shortlisting · competency-based interview · structured interview · work-sample test · assessment centre · psychometric assessment · references · right to work check · DBS check · offer · counter-offer · onboarding · induction · probation · retention · quality of hire · time to hire · cost per hire · candidate experience · hiring-manager satisfaction · applicant tracking system (ATS) · recruitment ROI · executive search · retained search · contingent recruitment · headhunting · market mapping · longlist · shortlist · leadership assessment · succession planning · interim management · contract staffing · fixed-term contract · contingent workforce · off-payroll working / IR35 · status determination statement · Agency Workers Regulations · RPO (end-to-end, project, selective, hybrid) · service-level agreement · graduate scheme · early careers · apprenticeship · rotation programme · reneging · Acas · GOV.UK · ICO · CIPD · ISE · HMRC · Employment Rights Act 2025 · UK GDPR.

Role-specific regulators and bodies referenced on role pages (all well-established, informational mentions only): GMC (doctors), HCPC (occupational therapists, speech and language therapists, practitioner psychologists, radiographers), GDC (dental technicians), RCVS (veterinary nurses), CQC / Care Inspectorate / Care Inspectorate Wales (registered care managers), Ofsted (early years, school inspection), DBS (regulated activity), CAA (pilot and air traffic controller licensing), ORR (train driving licences), FCA (regulated broking firms), CII (insurance qualifications), AAT, ACCA, CIMA (accounting technicians), CIOT / ATT (tax), RICS (valuers and surveyors), CIPS (procurement), CIPD (HR), CDI (careers guidance), MRS (market research), NEBOSH / IOSH (health and safety), CSCS (construction site cards), NSI / SSAIB (security system installers).

---

## 7. Recommended improvements and implementation plan

### 7.1 Pillar (`recruitment-and-talent-acquisition-firm-in-the-uk`)

1. New meta description targeting "talent acquisition" with UK employer intent.
2. New section: **"How does the talent acquisition process work?"**, an eight-stage lifecycle (workforce planning → vacancy definition → employer brand and attraction → sourcing → screening and assessment → selection and offer → onboarding → retention and measurement), each linked to the relevant specialist service.
3. New guide section: "Talent acquisition explained", with H3s on TA vs recruitment, workforce planning and skills gaps, employer brand, technology and ATS, measuring performance, and fair and compliant hiring. Cites R1, R6 and R11.
4. New "Roles we recruit for" directory linking all 62 role pages, grouped by role family (hub → spokes).
5. Related insight links to existing Apex articles.
6. FAQs expanded from 4 to 9 (pillar-only questions; no duplicates of the child pages' FAQs).

### 7.2 Child services

Each page gets a canonical-only guide section (an H2 with H3 subsections) with contextual in-paragraph links, two to three related insight links (replacing the empty "insight" placeholder), and four to five more page-specific FAQs. The meta description is refreshed while keeping the tested "Apex HR is a … firm … UK" pattern.

### 7.3 Role pages

Each of the 62 roles gets: a unique SEO title, a 120–160 character meta description, a third hiring challenge, an expanded recruitment approach naming the relevant regulator, registration or check where one exists, and two role-specific FAQs. The repeated disclaimer FAQ stays, because a test requires an availability disclaimer, but it is now shorter. Template additions: a link to the pillar from the approach section, and a "Related roles" list of up to five roles from the same family.

### 7.4 Schema

No new schema types. Existing `Service` + `BreadcrumbList` stay. `FAQPage` continues to come only from the visible FAQs through `FaqWithContactForm`. FAQ rich results are restricted to authoritative government and health sites, so no FAQ schema was added for that purpose; the existing block is kept only because it accurately describes visible content. No duplicate schema blocks were introduced.

---

## 8. Internal linking map (after implementation)

```
Pillar ──► Permanent, Executive Search, Contract Staffing, RPO, Graduate (static grid + lifecycle stage links + guide text)
Pillar ──► Strategic Workforce Planning, Employer Branding & EVP, People Analytics, HRIS Implementation, Succession Planning (guide text)
Pillar ──► 62 role pages (role directory)
Pillar ──► insights: talent-acquisition-vs-recruitment-vs-talent-management, what-is-talent-acquisition-and-retention-in-hrm

Permanent ──► Pillar (breadcrumb, hero, guide text), Executive Search, Contract Staffing, Graduate (guide text), RPO
Permanent ──► insights: permanent-recruitment-solutions-how-the-hiring-process-works-in-the-uk, contract-staffing-vs-permanent-staffing

Executive Search ──► Pillar, Permanent, Succession Planning & Talent Mapping, Strategic Workforce Planning, Executive Coaching & 360 Feedback, Fractional HR Director
Executive Search ──► insights: executive-search-vs-recruitment-agency-which-is-better-for-senior-hires, what-does-an-executive-search-consultant-do

Contract Staffing ──► Pillar, Permanent, RPO, Strategic Workforce Planning, Employment status adviser note
Contract Staffing ──► insights: when-to-use-contract-staffing, contract-staffing-vs-permanent-staffing

RPO ──► Pillar, Permanent, Contract Staffing, Graduate, HR Software Selection, People Analytics & HR Dashboards
RPO ──► insights: recruitment-process-outsourcing-rpo, rpo-vs-recruitment-agency

Graduate ──► Pillar, Permanent, RPO, Employer Branding & EVP, Learning Strategy & Capability Development
Graduate ──► insights: design-graduate-scheme-attracts-retains-uk-talent, graduate-schemes-vs-apprenticeships

Each role page ──► Pillar, 1–2 child services, 1–2 sectors, up to 5 related roles in the same family
Sector pages ──► role pages (existing)
```

All destinations were checked: service slugs against `src/config/services.ts` (enforced by a unit test), insight URLs with a live HTTP 200 check and self-referencing canonical on 9 November 2026, and role slugs against `talent-roles-data.ts`.

---

## 9. Outstanding recommendations (outside this change)

1. **WordPress:** 301 `/contract-staffing-vs-permanent-staffing-2/` to `/contract-staffing-vs-permanent-staffing/`.
2. **WordPress:** add a contextual link from each "top X firms" listicle and each "cost of …" article to its matching service page, so supporting content passes relevance to the commercial page.
3. Consider a `/talent-acquisition/` hub page. It is not in the approved register (see `src/config/routes.ts`), so it needs a URL decision first. The pillar's role directory meets the need for now.
4. Add the ONS SOC 2020 code to each role record once checked against the ONS coding index, and consider a short, dated sponsorship note per role (Skilled Worker eligibility changes often; needs legal review).
5. Replace the empty case study and expert states once verified proof exists. These remain the biggest E-E-A-T gap.
6. Publish dated insight articles that use the monthly ONS and REC labour-market data, and link them from the pillar.
7. Legal review of the passages flagged in section 4 (R7–R10) before publishing.
