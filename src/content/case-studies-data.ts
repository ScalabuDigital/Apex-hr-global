import type { ContentFaqItem, ContentGuide, ContentStatus, ReviewStatus } from "@/types/content";
import type { RouteStatus } from "@/types/route";
import type { CaseStudyPreview } from "@/content/home";

/**
 * Case-study records — local, typed equivalent of docs/CONTENT-MODEL.md
 * section 12.2 `caseStudy`, pending Sanity integration.
 *
 * Evidence basis (docs/URL-DECISION-REGISTER.md D-020): no verified client
 * engagements have been supplied, so every record below is an
 * ILLUSTRATIVE SCENARIO, explicitly approved by the user on 9 November 2026.
 * Illustrative records:
 * - never name a client, invent a figure, quote a testimonial or claim an
 *   outcome was achieved;
 * - describe how Apex HR would approach the situation and how success
 *   would be measured, never what "was" delivered;
 * - must render the visible illustrative label on every card, hero and
 *   meta description (enforced by tests/unit/case-studies.test.tsx).
 *
 * Industry statistics in `sources`/body copy are third-party research,
 * attributed inline, and never presented as Apex HR results.
 *
 * Individual `/case-study/[slug]/` routes remain Provisional in
 * docs/MASTER-SITEMAP.md, so they are noindex and excluded from the XML
 * sitemap until that route decision changes. Flip CASE_STUDY_ROUTE_STATUS
 * only together with the register/sitemap docs.
 */

export const CASE_STUDY_ROUTE_STATUS: RouteStatus = "provisional";

export type CaseStudyEvidenceBasis = "illustrative" | "verified";

/** Visible label shown wherever an illustrative case study appears. */
export const ILLUSTRATIVE_LABEL = "Scenario";

export interface CaseStudySource {
  label: string;
  publisher: string;
  /** Publication or last-checked date as shown publicly, e.g. "September 2026". */
  date: string;
  href: string;
}

export interface CaseStudyPhase {
  phase: string;
  detail: string;
}

export interface CaseStudyMeasure {
  heading: string;
  detail: string;
}

export interface CaseStudyContent {
  slug: string;
  evidenceBasis: CaseStudyEvidenceBasis;
  /** Short label for breadcrumbs and cards. */
  shortTitle: string;
  /** Page H1. */
  title: string;
  /** Card / listing summary. */
  summary: string;
  /** Bare SEO title — the root layout appends "| Apex HR". */
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  relatedTerms: string[];
  /** Canonical service slugs from src/config/services.ts. */
  serviceSlugs: string[];
  /** Canonical sector slugs from src/config/sectors.ts. */
  sectorSlugs: string[];
  /** Sector / service labels shown as categorisation on the page. */
  sectorLabel: string;
  executiveSummary: string;
  clientBackground: string[];
  challenge: { intro: string; points: string[] };
  objectives: string[];
  /** Apex HR's approach, staged (H2 + H3s). Paragraphs support [anchor](/path/) links. */
  approach: ContentGuide;
  /** Solutions implemented (H2 + H3s). */
  solutions: ContentGuide;
  implementation: CaseStudyPhase[];
  /** For illustrative records: how success would be measured — never claimed outcomes. */
  results: { intro: string; measures: CaseStudyMeasure[] };
  takeaways: string[];
  faqs: ContentFaqItem[];
  sources: CaseStudySource[];
  cta: { heading: string; body: string; label: string; href: string };
  contentStatus: ContentStatus;
  reviewStatus: ReviewStatus;
  legalReviewRequired: boolean;
  /** ISO date the draft was written / last reviewed. */
  datePublished: string;
  dateModified: string;
}

const CIPD_RTP_2026: CaseStudySource = {
  label: "Resourcing and talent planning report 2026",
  publisher: "CIPD",
  date: "September 2026",
  href: "https://www.cipd.org/uk/knowledge/reports/resourcing-surveys/",
};

const GOV_WRITTEN_STATEMENT: CaseStudySource = {
  label: "Employment contracts: written statement of employment particulars",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/employment-contracts-and-conditions/written-statement-of-employment-particulars",
};

const GOV_RIGHT_TO_WORK: CaseStudySource = {
  label: "Check a job applicant's right to work",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/check-job-applicant-right-to-work",
};

const GOV_EQUALITY_ACT: CaseStudySource = {
  label: "Equality Act 2010: guidance",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/guidance/equality-act-2010-guidance",
};

const GOV_ERA_2025: CaseStudySource = {
  label: "Implementing the Plan to Make Work Pay and Employment Rights Act",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/government/publications/implementing-the-plan-to-make-work-pay-and-employment-rights-act",
};

const ACAS_DISCIPLINARY_CODE: CaseStudySource = {
  label: "Acas Code of Practice on disciplinary and grievance procedures",
  publisher: "Acas",
  date: "checked November 2026",
  href: "https://www.acas.org.uk/acas-code-of-practice-on-disciplinary-and-grievance-procedures",
};

const FCA_SMCR: CaseStudySource = {
  label: "Senior Managers and Certification Regime",
  publisher: "Financial Conduct Authority",
  date: "checked November 2026",
  href: "https://www.fca.org.uk/firms/senior-managers-certification-regime",
};

const GOV_SPONSORSHIP: CaseStudySource = {
  label: "UK visa sponsorship for employers",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/uk-visa-sponsorship-employers",
};

const GOV_SKILLED_WORKER: CaseStudySource = {
  label: "Skilled Worker visa",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/skilled-worker-visa",
};

const HSE_STRESS: CaseStudySource = {
  label: "Work-related stress and how to manage it",
  publisher: "Health and Safety Executive",
  date: "checked November 2026",
  href: "https://www.hse.gov.uk/stress/",
};

const GOV_REDUNDANCY_CONSULTATION: CaseStudySource = {
  label: "Making staff redundant: redundancy consultations",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/staff-redundant/redundancy-consultations",
};

const GOV_TUPE: CaseStudySource = {
  label: "Business transfers, takeovers and TUPE",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/transfers-takeovers",
};

const ACAS_TUPE: CaseStudySource = {
  label: "TUPE: transfer of employees",
  publisher: "Acas",
  date: "checked November 2026",
  href: "https://www.acas.org.uk/tupe",
};

const ACAS_INVESTIGATIONS: CaseStudySource = {
  label: "Investigations at work: step by step",
  publisher: "Acas",
  date: "checked November 2026",
  href: "https://www.acas.org.uk/investigations-for-discipline-and-grievance-step-by-step",
};

const ACAS_MEDIATION: CaseStudySource = {
  label: "Mediation",
  publisher: "Acas",
  date: "checked November 2026",
  href: "https://www.acas.org.uk/mediation",
};

const GOV_GENDER_PAY_GAP: CaseStudySource = {
  label: "Who needs to report their gender pay gap",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/guidance/who-needs-to-report-their-gender-pay-gap",
};

const ACAS_EQUAL_PAY: CaseStudySource = {
  label: "Equal pay",
  publisher: "Acas",
  date: "checked November 2026",
  href: "https://www.acas.org.uk/equal-pay",
};

const GOV_MINIMUM_WAGE: CaseStudySource = {
  label: "National Minimum Wage and National Living Wage rates",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/national-minimum-wage-rates",
};

const CIPD_GOOD_WORK: CaseStudySource = {
  label: "CIPD Good Work Index",
  publisher: "CIPD",
  date: "checked November 2026",
  href: "https://www.cipd.org/uk/knowledge/reports/goodwork/",
};

const ACAS_FLEXIBLE_WORKING: CaseStudySource = {
  label: "Flexible working",
  publisher: "Acas",
  date: "checked November 2026",
  href: "https://www.acas.org.uk/flexible-working",
};

const GOV_DATA_PROTECTION: CaseStudySource = {
  label: "Data protection",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/data-protection",
};

const GOV_APPRENTICESHIP_CHANGES: CaseStudySource = {
  label: "Apprenticeship changes",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/government/collections/apprenticeship-changes",
};

const HSE_CONSTRUCTION: CaseStudySource = {
  label: "Construction: health and safety",
  publisher: "Health and Safety Executive",
  date: "checked November 2026",
  href: "https://www.hse.gov.uk/construction/",
};

const GOV_WORKING_ABROAD: CaseStudySource = {
  label: "Working abroad",
  publisher: "GOV.UK",
  date: "checked November 2026",
  href: "https://www.gov.uk/working-abroad",
};

const STANDARD_DRAFT = {
  evidenceBasis: "illustrative" as const,
  contentStatus: "ai-draft" as const,
  reviewStatus: "stakeholder-review-required" as const,
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
};


const ILLUSTRATIVE_RESULTS_INTRO =
  "This is a scenario, so no results are claimed. In a real engagement, Apex HR would agree measures like these with the client at the outset and report against them:";

export const caseStudyContent: CaseStudyContent[] = [
  // ---------------------------------------------------------------------
  // 1. Scale-up technology recruitment
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "scale-up-technology-recruitment",
    shortTitle: "Scale-up technology recruitment",
    title: "Scaling a technology team at pace without lowering the hiring bar",
    summary:
      "How Apex HR would help a funded software scale-up move from founder-led, ad hoc hiring to a planned, repeatable recruitment process for engineering, product and data roles.",
    seoTitle: "Scale-Up Recruitment Case Study: Building a Tech Team",
    metaDescription:
      "Scenario: how Apex HR would help a UK tech scale-up plan headcount, sharpen its EVP and run structured permanent recruitment and RPO at pace.",
    primaryKeyword: "scale-up recruitment case study",
    secondaryKeywords: [
      "tech recruitment for scale-ups",
      "recruitment process outsourcing for startups",
      "hiring plan for a scale-up",
    ],
    relatedTerms: [
      "strategic workforce planning",
      "employer value proposition",
      "structured interviews",
      "time to hire",
      "quality of hire",
      "hiring manager capability",
    ],
    serviceSlugs: [
      "permanent-recruitment-firm-in-the-uk",
      "recruitment-process-outsourcing-rpo-firm-in-the-uk",
      "employer-branding-and-employee-value-proposition-evp-firm-in-the-uk",
      "strategic-workforce-planning-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-startups-and-scale-ups-in-the-uk", "hr-company-for-it-in-the-uk"],
    sectorLabel: "Startups & scale-ups · IT",
    executiveSummary:
      "A UK software business has closed a growth funding round and committed to investors to roughly double its engineering, product and data capability within a year. Hiring so far has been led by the founders through referrals and job boards, with no agreed headcount plan, no consistent interview process and no in-house recruiter. In this scenario, Apex HR would start with a workforce plan tied to the product roadmap, give the business a clear employer value proposition, and then run structured permanent recruitment, scaling into a recruitment process outsourcing (RPO) model once hiring volumes justify it. Success would be judged on hiring against plan, quality of hire and how well new starters are retained.",
    clientBackground: [
      "The organisation in this scenario is a venture-backed UK software company with an established product, paying customers and a mainly hybrid team. It is the kind of business described on our [startups and scale-ups](/sector/hr-company-for-startups-and-scale-ups-in-the-uk/) and [IT sector](/sector/hr-company-for-it-in-the-uk/) pages: technically strong, commercially ambitious and light on HR infrastructure.",
      "Recruitment has worked while the company was small, because the founders knew every hire personally. As the hiring plan grows, that informal approach becomes a bottleneck. Founders' time is pulled away from customers and product, hiring managers interview inconsistently, and offers are sometimes lost to competitors who move faster.",
      "This mirrors a wider pattern. The CIPD's Resourcing and talent planning report 2026 found that 46% of UK employers still handle recruitment on an ad hoc basis, and 52% said competition for well-qualified talent had grown. Those figures describe the UK market, not Apex HR clients, but they explain why growing businesses often look for external recruitment support at this stage.",
    ],
    challenge: {
      intro:
        "The business has no shortage of ambition, but several connected problems make hiring at the planned pace risky:",
      points: [
        "No agreed headcount plan: roles are opened reactively when a team feels stretched, so priorities change week to week and budget is hard to forecast.",
        "An unclear employer brand: candidates know the product but not why they should join now, what progression looks like or how the company works day to day.",
        "Inconsistent selection: each hiring manager runs interviews differently, feedback is slow and decisions rely on instinct rather than agreed criteria.",
        "Founder bottleneck: final interviews and offers wait for founder availability, so strong candidates accept other offers in the meantime.",
        "Competition for scarce skills: senior engineers, data specialists and product managers are being approached by larger, better-known employers at the same time.",
        "Onboarding pressure: new starters arrive faster than managers can support them, which risks early attrition.",
      ],
    },
    objectives: [
      "Agree a prioritised hiring plan linked to the product roadmap and funding milestones.",
      "Define a credible employer value proposition that candidates can test against reality.",
      "Introduce a consistent, fair and well-documented selection process for every role.",
      "Free founders from day-to-day recruitment administration while keeping them involved in key decisions.",
      "Build a recruitment model that can scale up or down as hiring volume changes.",
      "Protect quality of hire and early retention, not just speed.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "From reactive hiring to a planned recruitment engine",
      intro:
        "Apex HR would follow its usual Understand, Diagnose, Recommend, Implement and Measure sequence, adapted for a business that needs to hire quickly without losing control of quality.",
      sections: [
        {
          heading: "Stage 1: Understand the growth plan",
          paragraphs: [
            "Interviews with founders, the CTO and team leads would establish the product roadmap, funding milestones and the capabilities each stage needs. This forms the basis of a [strategic workforce plan](/services/strategic-workforce-planning-firm-in-the-uk/): which roles are needed, in what order, at what level, and which could be filled through internal development rather than external hiring.",
          ],
        },
        {
          heading: "Stage 2: Diagnose the hiring process",
          paragraphs: [
            "Apex HR would map the current candidate journey from first contact to first day, noting where candidates drop out, where decisions stall and where interview practice varies. Recent offer declines and early leavers would be reviewed, where the business has the information, to understand why candidates said no or left.",
          ],
        },
        {
          heading: "Stage 3: Recommend a resourcing model",
          paragraphs: [
            "For the first wave of critical hires, [permanent recruitment](/services/permanent-recruitment-firm-in-the-uk/) on a role-by-role basis keeps commitment low. Once the plan shows a sustained pipeline of roles, an embedded [recruitment process outsourcing (RPO)](/services/recruitment-process-outsourcing-rpo-firm-in-the-uk/) model can take ownership of the end-to-end process, giving consistency and capacity without the fixed cost of building a full internal team too early.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the recruitment programme would include",
      sections: [
        {
          heading: "A prioritised hiring plan",
          paragraphs: [
            "A rolling twelve-month plan listing each role, its business case, target start window, level and budget, reviewed monthly with the leadership team. Roles that unlock other hires, such as engineering managers, are scheduled first.",
          ],
        },
        {
          heading: "An employer value proposition grounded in reality",
          paragraphs: [
            "Through short interviews and an anonymous pulse survey of current staff, Apex HR would identify what people genuinely value about working there, such as ownership, technical challenge or flexibility, and what candidates are likely to question. The resulting [employer value proposition](/services/employer-branding-and-employee-value-proposition-evp-firm-in-the-uk/) shapes job adverts, careers-page copy and how interviewers describe the company. It must stay honest, because overselling drives early attrition.",
          ],
        },
        {
          heading: "Role scorecards and structured interviews",
          paragraphs: [
            "Each role gets a scorecard of the outcomes expected in the first year and the competencies needed to achieve them. Interview stages, such as a technical exercise, a structured competency interview and a values conversation, are each assessed against the scorecard with agreed questions and rating guides. Structured, consistent assessment supports fairer decisions and helps the business meet its obligations under the [Equality Act 2010](https://www.gov.uk/guidance/equality-act-2010-guidance).",
          ],
        },
        {
          heading: "Targeted sourcing and candidate care",
          paragraphs: [
            "Direct sourcing for hard-to-fill technical roles alongside adverts, a clear timeline shared with candidates at the outset, and agreed feedback turnaround times for hiring managers. Founders keep a defined place in the process for senior or pivotal roles, scheduled in advance so they do not cause delay.",
          ],
        },
        {
          heading: "Compliant offers and onboarding",
          paragraphs: [
            "Offer templates and a pre-start checklist covering [right to work checks](https://www.gov.uk/check-job-applicant-right-to-work), references and the [written statement of employment particulars](https://www.gov.uk/employment-contracts-and-conditions/written-statement-of-employment-particulars), which must be given on or before the first day. A structured first-90-days plan for each new starter gives managers a simple framework for induction.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Leadership interviews, review of the product roadmap and current hiring data, and a map of the existing candidate journey." },
      { phase: "Planning", detail: "Agree the twelve-month hiring plan, budget, resourcing model, roles and responsibilities, and the measures that will be reported." },
      { phase: "Execution", detail: "Launch the EVP and adverts, begin sourcing for priority roles, train hiring managers on scorecards and structured interviewing, then move to the RPO model as volume builds." },
      { phase: "Communication", detail: "A weekly hiring update for leadership, a shared pipeline view for hiring managers, and clear, timely updates to every candidate." },
      { phase: "Monitoring", detail: "Track pipeline health, stage-by-stage conversion, offer acceptance and time to hire against the plan, and adjust sourcing where roles stall." },
      { phase: "Evaluation", detail: "Quarterly review of quality of hire with hiring managers, early-leaver feedback, and an update of the workforce plan for the next period." },
    ],
    results: {
      intro:
        "Because this is a scenario, no results are claimed. In a real engagement of this kind, Apex HR would agree measures like these with the client at the outset and report against them:",
      measures: [
        { heading: "Hiring against plan", detail: "The proportion of planned roles filled within their target start window." },
        { heading: "Time to hire", detail: "Days from role approval to accepted offer, tracked by role family to show where the process slows." },
        { heading: "Offer acceptance", detail: "The share of offers accepted, with reasons recorded for every decline." },
        { heading: "Quality of hire", detail: "Hiring-manager ratings against the role scorecard at three and six months." },
        { heading: "Early retention", detail: "The proportion of new starters still in post after their first year." },
        { heading: "Candidate experience", detail: "Short candidate surveys after interview, including from unsuccessful applicants." },
      ],
    },
    takeaways: [
      "Plan the hiring before you hire: a workforce plan linked to the roadmap prevents reactive, expensive recruitment.",
      "An honest employer value proposition attracts the right candidates and filters out the wrong ones early.",
      "Structured, scorecard-based interviews improve consistency and fairness, and make decisions faster.",
      "Choose a resourcing model that matches volume: role-by-role recruitment first, RPO when demand is sustained.",
      "Onboarding is part of recruitment. Fast hiring that leads to early attrition is not a success.",
    ],
    faqs: [
      {
        id: "cs-scaleup-rpo-when",
        question: "When does a scale-up need RPO rather than a recruitment agency?",
        answer:
          "Role-by-role permanent recruitment usually works well for a handful of critical hires. When a business has a sustained pipeline of roles across several teams, an RPO model can give more consistency, better data and a more controlled cost per hire, because one partner manages the whole process rather than each role being handled separately.",
      },
      {
        id: "cs-scaleup-workforce-plan",
        question: "What should a scale-up hiring plan include?",
        answer:
          "At minimum: each role, the business reason for it, the level, the target start window, the budget and the hiring manager. Good plans also show dependencies, such as which leadership hires need to come first, and which needs could be met by developing existing people.",
      },
      {
        id: "cs-scaleup-evp",
        question: "Does a small company really need an employer value proposition?",
        answer:
          "Yes. A clear, honest explanation of why someone should join helps candidates choose you over larger, better-known employers. It does not need to be a large branding exercise; it needs to be accurate and used consistently by everyone involved in hiring.",
      },
    ],
    sources: [CIPD_RTP_2026, GOV_EQUALITY_ACT, GOV_RIGHT_TO_WORK, GOV_WRITTEN_STATEMENT],
    cta: {
      heading: "Planning a period of rapid hiring?",
      body: "Tell us about your growth plan and the roles you need to fill. We will suggest a recruitment model that fits your stage and budget.",
      label: "Find Talent",
      href: "/find-talent/",
    },
    legalReviewRequired: false,
  },

  // ---------------------------------------------------------------------
  // 2. Executive search in financial services
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "executive-search-financial-services",
    shortTitle: "Executive search in financial services",
    title: "Appointing a senior finance leader in a regulated financial services firm",
    summary:
      "How Apex HR would run a confidential executive search for a business-critical finance role in an FCA-regulated firm, from success profile to regulatory approval and onboarding.",
    seoTitle: "Executive Search Case Study: Financial Services",
    metaDescription:
      "Scenario: how Apex HR would run a confidential executive search for a senior finance leader in a UK regulated firm, including succession and onboarding.",
    primaryKeyword: "executive search case study",
    secondaryKeywords: [
      "financial services executive search UK",
      "senior finance leadership recruitment",
      "confidential executive search",
    ],
    relatedTerms: [
      "Senior Managers and Certification Regime",
      "success profile",
      "talent mapping",
      "succession planning",
      "executive onboarding",
      "360 feedback",
    ],
    serviceSlugs: [
      "executive-search-firm-in-the-uk",
      "succession-planning-and-talent-mapping-firm-in-the-uk",
      "executive-compensation-and-share-schemes-firm-in-the-uk",
      "executive-coaching-and-360-feedback-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-financial-services-in-the-uk", "hr-company-for-professional-services-in-the-uk"],
    sectorLabel: "Financial services · Professional services",
    executiveSummary:
      "A mid-sized UK financial services firm needs to replace its finance director, who has given notice. The role is business-critical, the incumbent is well regarded, and the appointment is likely to require regulatory approval before the new leader can perform certain functions. There is no ready internal successor. In this scenario, Apex HR would run a confidential executive search built around a clear success profile, map the external market, assess finalists in depth, advise on a competitive package, and support onboarding. Alongside the search, Apex HR would help the firm start a succession plan so it is better prepared next time.",
    clientBackground: [
      "The firm in this scenario is an established, FCA-authorised business with a stable client base and a lean leadership team. It is typical of the organisations described on our [financial services sector](/sector/hr-company-for-financial-services-in-the-uk/) page, where leadership appointments carry regulatory as well as commercial weight.",
      "The departing finance director has been closely involved with the board, auditors and regulator for several years. Their departure is amicable but leaves a gap in both technical leadership and relationships, and the firm has not hired at this level for some time.",
      "Under the [Senior Managers and Certification Regime](https://www.fca.org.uk/firms/senior-managers-certification-regime), certain senior roles require regulatory approval, and firms are expected to assess that candidates are fit and proper. The timetable for the appointment therefore has to allow for notice periods and regulatory steps, not just the search itself. Whether a specific role needs approval is for the firm and its compliance advisers to confirm.",
    ],
    challenge: {
      intro: "The board faces several connected risks:",
      points: [
        "Business continuity: a long vacancy in a senior finance role risks delays to reporting, audit and regulatory obligations.",
        "Confidentiality: the departure has not been announced, so the search must be discreet with staff, clients and the market.",
        "A narrow candidate pool: suitable candidates combine technical finance expertise, sector knowledge and leadership presence, and most are not actively looking.",
        "Regulatory readiness: candidates need to be assessed with the firm's fit-and-proper obligations in mind, and the timeline must allow for any approval process.",
        "No succession pipeline: there is no internal candidate ready to step up, which exposes the firm to the same risk in future.",
      ],
    },
    objectives: [
      "Appoint a finance leader who can be effective quickly and earn the confidence of the board, auditors and regulator.",
      "Run a confidential, well-documented process that reflects the firm's regulatory responsibilities.",
      "Reach the passive candidate market, not just those actively applying.",
      "Offer a competitive, well-structured package without creating internal pay anomalies.",
      "Start a succession plan for the finance function and other critical roles.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "A structured, confidential executive search",
      intro:
        "Senior appointments carry high risk and are rarely repeated, so Apex HR would treat this as a structured project with clear governance rather than a standard recruitment assignment.",
      sections: [
        {
          heading: "Stage 1: Define the success profile",
          paragraphs: [
            "Interviews with the chair, CEO, audit committee chair and the departing finance director would define what success looks like in the first eighteen months, not just the job description. The success profile covers technical requirements, leadership qualities, stakeholder expectations and the regulatory dimension of the role.",
          ],
        },
        {
          heading: "Stage 2: Map the market",
          paragraphs: [
            "[Executive search](/services/executive-search-firm-in-the-uk/) means identifying people currently doing comparable roles across relevant financial services and [professional services](/sector/hr-company-for-professional-services-in-the-uk/) businesses and approaching them discreetly. The market map also gives the board an objective view of where talent sits and what it is likely to cost.",
          ],
        },
        {
          heading: "Stage 3: Assess in depth",
          paragraphs: [
            "Shortlisted candidates would go through structured competency interviews against the success profile, a business case exercise, conversations with key stakeholders, and thorough referencing. Background and regulatory-reference checks are planned with the firm's compliance team so nothing is left until after the offer.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the search programme would include",
      sections: [
        {
          heading: "Confidential search governance",
          paragraphs: [
            "A small steering group, a code name for the assignment, agreed communication lines and a documented process, so the board can show how the appointment decision was reached.",
          ],
        },
        {
          heading: "Market intelligence and longlist",
          paragraphs: [
            "A researched longlist of potential candidates with anonymised market insight on remit, reporting lines and package structures, so the board can make an informed choice about the profile it wants.",
          ],
        },
        {
          heading: "Package design",
          paragraphs: [
            "Advice on salary, bonus and any [executive compensation and share scheme](/services/executive-compensation-and-share-schemes-firm-in-the-uk/) elements, so the offer is competitive and consistent with the firm's remuneration policies and any regulatory remuneration requirements that apply. Formal tax or legal advice on incentive structures would come from the firm's specialist advisers.",
          ],
        },
        {
          heading: "Onboarding and early support",
          paragraphs: [
            "A structured onboarding plan covering board, auditor and regulator introductions, and optional [executive coaching with 360 feedback](/services/executive-coaching-and-360-feedback-firm-in-the-uk/) during the first six months to help the new leader settle in.",
          ],
        },
        {
          heading: "Succession planning",
          paragraphs: [
            "Using the success profile as a template, Apex HR would help the leadership team identify other critical roles and begin [succession planning and talent mapping](/services/succession-planning-and-talent-mapping-firm-in-the-uk/), with development plans for internal people who could step up in future.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Stakeholder interviews, role and team review, and an agreed success profile signed off by the board." },
      { phase: "Planning", detail: "Search strategy, target organisation list, confidentiality protocol, assessment design and a realistic timeline that allows for notice periods and any regulatory steps." },
      { phase: "Execution", detail: "Market mapping, discreet approaches, screening interviews, a shortlist report, final assessments and referencing." },
      { phase: "Communication", detail: "Regular steering-group updates, prompt candidate communication, and a planned internal and external announcement once the appointment is confirmed." },
      { phase: "Monitoring", detail: "Track search progress against the timeline, candidate engagement and any risks such as counter-offers." },
      { phase: "Evaluation", detail: "Review progress with the chair and the new leader at three and six months, and agree next steps on succession planning." },
    ],
    results: {
      intro:
        "This is a scenario, so no results are claimed. In a real executive search, Apex HR would agree measures like these with the board:",
      measures: [
        { heading: "Appointment within the agreed timeline", detail: "Measured from search launch to accepted offer, with notice periods and any approval steps tracked separately." },
        { heading: "Quality of shortlist", detail: "Board assessment of how well shortlisted candidates matched the success profile." },
        { heading: "Stakeholder confidence", detail: "Feedback from the board, audit committee and senior team on the new leader at six months." },
        { heading: "Retention and performance", detail: "Performance against the eighteen-month success profile and retention beyond the first two years." },
        { heading: "Succession coverage", detail: "The number of critical roles with an identified potential successor and a development plan." },
      ],
    },
    takeaways: [
      "Define success for the role before searching. A success profile is more useful than a job description at senior level.",
      "The best senior candidates are rarely looking, so market mapping and discreet approaches matter.",
      "In regulated firms, build compliance and any approval steps into the timeline from the start.",
      "Package advice should balance market competitiveness with internal fairness and governance.",
      "Every unplanned senior departure is a prompt to start succession planning.",
    ],
    faqs: [
      {
        id: "cs-exec-search-vs-agency",
        question: "How is executive search different from a recruitment agency?",
        answer:
          "Executive search proactively identifies and approaches people who are not actively looking, using research and market mapping. It is usually used for senior or hard-to-fill roles where confidentiality and a thorough assessment matter more than speed alone.",
      },
      {
        id: "cs-exec-search-smcr",
        question: "Does Apex HR handle FCA approval for senior managers?",
        answer:
          "No. Regulatory applications are the firm's responsibility, usually led by its compliance function. Apex HR plans the search timeline around any approval process and works with the firm's compliance team so candidates are assessed with fit-and-proper requirements in mind.",
      },
      {
        id: "cs-exec-search-confidential",
        question: "Can an executive search be run without the market knowing?",
        answer:
          "Yes. Confidential searches commonly use a code name, a limited steering group and carefully worded approaches that do not identify the client until a candidate has shown interest and agreed to confidentiality.",
      },
    ],
    sources: [FCA_SMCR, CIPD_RTP_2026, GOV_EQUALITY_ACT],
    cta: {
      heading: "Planning a senior appointment?",
      body: "Talk to Apex HR in confidence about a leadership hire, a succession risk or the shape of a senior role.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    legalReviewRequired: false,
  },

  // ---------------------------------------------------------------------
  // 3. Outsourced HR for a growing practice
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "outsourced-hr-growing-practice",
    shortTitle: "Outsourced HR for a growing practice",
    title: "Building reliable HR foundations for a growing professional practice",
    summary:
      "How Apex HR would help a growing accountancy or architecture practice with no HR function replace inconsistent, informal people management with compliant policies, clear processes and ongoing outsourced support.",
    seoTitle: "Outsourced HR Case Study: HR Foundations for a Practice",
    metaDescription:
      "Scenario: how Apex HR would audit HR compliance, update contracts and policies, and provide retained HR support for a growing UK professional practice.",
    primaryKeyword: "outsourced HR case study",
    secondaryKeywords: [
      "HR support for professional practices",
      "HR compliance audit for small businesses",
      "retained HR services UK",
    ],
    relatedTerms: [
      "employee handbook",
      "written statement of employment particulars",
      "disciplinary and grievance procedure",
      "fractional HR director",
      "payroll advisory",
      "Employment Rights Act 2025",
    ],
    serviceSlugs: [
      "retained-hr-services-firm-in-the-uk",
      "hr-support-for-small-businesses-and-startups-firm-in-the-uk",
      "hr-compliance-audit-firm-in-the-uk",
      "employee-handbooks-and-hr-policies-firm-in-the-uk",
      "fractional-hr-director-chief-people-officer-firm-in-the-uk",
      "payroll-advisory-firm-in-the-uk",
    ],
    sectorSlugs: [
      "hr-company-for-accountants-in-the-uk",
      "hr-company-for-architects-in-the-uk",
      "hr-company-for-professional-services-in-the-uk",
    ],
    sectorLabel: "Accountants · Architects · Professional services",
    executiveSummary:
      "A partner-led professional practice has grown steadily through hiring and a small acquisition, but HR is handled by a practice manager alongside other duties. Contracts differ depending on when people joined, the staff handbook is out of date, and partners handle absence and performance issues in different ways. In this scenario, Apex HR would start with an HR compliance audit, fix the highest-risk gaps first, introduce a consistent handbook and core processes, and then provide ongoing retained HR support with access to senior HR leadership when needed. Success would be measured by closing the compliance gaps, consistent people management and fewer issues escalating.",
    clientBackground: [
      "The practice in this scenario is a partner-owned firm of the type described on our [accountants](/sector/hr-company-for-accountants-in-the-uk/) and [architects](/sector/hr-company-for-architects-in-the-uk/) sector pages. It has qualified professionals, trainees and support staff, with partners acting as line managers alongside fee-earning work.",
      "The firm recently absorbed a smaller practice, bringing employees with different terms and conditions. Day-to-day HR administration sits with the practice manager, who is capable but not an HR specialist and has no time to keep up with employment law changes.",
      "Employment law is changing. The [Employment Rights Act 2025](https://www.gov.uk/government/publications/implementing-the-plan-to-make-work-pay-and-employment-rights-act) is being implemented in stages under the Government's published timetable, and small employers without HR expertise can find it difficult to know which changes affect them and when.",
    ],
    challenge: {
      intro: "The partners recognise several risks building up:",
      points: [
        "Inconsistent contracts: employees on different templates, some missing required particulars, and staff from the acquired practice on different terms.",
        "An out-of-date handbook: policies that do not reflect current law or how the firm now works, including hybrid working.",
        "Uneven people management: partners deal with absence, performance and conduct in different ways, creating fairness and legal risk.",
        "No documented disciplinary or grievance procedure aligned with the Acas Code of Practice.",
        "Limited capacity: the practice manager is stretched, and there is no one to turn to for HR advice when a difficult issue arises.",
        "Payroll questions: uncertainty about how contract terms, benefits and absence should feed through to payroll.",
      ],
    },
    objectives: [
      "Identify and prioritise HR compliance gaps across contracts, policies and processes.",
      "Bring contracts and terms onto a consistent, compliant footing, including for staff who joined through the acquisition.",
      "Introduce a clear, current employee handbook and core people processes.",
      "Give partners the confidence and tools to manage people consistently.",
      "Provide reliable ongoing HR advice without the cost of a full-time HR hire.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "Audit first, then build and support",
      intro:
        "Small firms rarely need everything at once. Apex HR would focus first on the gaps that carry the most risk, then build the foundations, then provide ongoing support so standards hold.",
      sections: [
        {
          heading: "Stage 1: HR compliance audit",
          paragraphs: [
            "An [HR compliance audit](/services/hr-compliance-audit-firm-in-the-uk/) reviews contracts, the handbook, right to work records, absence and holiday records, data-protection practice for employee records, and how disciplinary and grievance matters have been handled. The output is a prioritised list of risks, not a lengthy report.",
          ],
        },
        {
          heading: "Stage 2: Fix the foundations",
          paragraphs: [
            "Contracts are aligned with the requirements for a [written statement of employment particulars](https://www.gov.uk/employment-contracts-and-conditions/written-statement-of-employment-particulars), and any changes to existing terms are planned carefully with appropriate consultation. Where the acquisition involved a TUPE transfer, changes to transferred employees' terms carry particular legal restrictions, so the firm's employment lawyer should review the approach before anything changes.",
          ],
        },
        {
          heading: "Stage 3: Ongoing support",
          paragraphs: [
            "Once the foundations are in place, [retained HR services](/services/retained-hr-services-firm-in-the-uk/) give the firm a named adviser for day-to-day questions, with access to a [fractional HR director](/services/fractional-hr-director-chief-people-officer-firm-in-the-uk/) for strategic issues such as partner succession or a future acquisition.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the HR foundations would include",
      sections: [
        {
          heading: "A current employee handbook",
          paragraphs: [
            "A practical [employee handbook and policy set](/services/employee-handbooks-and-hr-policies-firm-in-the-uk/) covering conduct, absence, flexible and hybrid working, family leave, equality, data protection, and disciplinary and grievance procedures aligned with the [Acas Code of Practice](https://www.acas.org.uk/acas-code-of-practice-on-disciplinary-and-grievance-procedures). Policies are written in plain English and reviewed as legislation changes.",
          ],
        },
        {
          heading: "Consistent people processes",
          paragraphs: [
            "Simple templates and guidance for return-to-work conversations, probation reviews, performance conversations and investigation meetings, so every partner follows the same steps and keeps proper records.",
          ],
        },
        {
          heading: "Manager briefings for partners",
          paragraphs: [
            "Short, practical sessions for partners on handling absence, performance and conduct fairly, and on when to call for HR advice before acting.",
          ],
        },
        {
          heading: "Payroll touchpoints",
          paragraphs: [
            "[Payroll advisory](/services/payroll-advisory-firm-in-the-uk/) support so that contract terms, benefits and absence policies are reflected correctly in the information the firm sends to its payroll provider or accountant. Apex HR does not process payroll or give tax advice.",
          ],
        },
        {
          heading: "Retained HR advice",
          paragraphs: [
            "An agreed service level for HR queries, support with more complex cases, and periodic updates on employment law changes that affect the firm. This is the core of our [HR support for small businesses](/services/hr-support-for-small-businesses-and-startups-firm-in-the-uk/).",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Partner and practice manager interviews, document review and a prioritised HR compliance audit." },
      { phase: "Planning", detail: "Agree priorities, timescales and who will approve each change. Identify any changes that need legal review or employee consultation." },
      { phase: "Execution", detail: "Issue updated contracts and the new handbook, introduce core templates, and run partner briefings." },
      { phase: "Communication", detail: "Explain changes to employees clearly and in good time, with an opportunity to ask questions before any change to terms takes effect." },
      { phase: "Monitoring", detail: "Track open HR cases, absence patterns and policy acknowledgements through the retained HR service." },
      { phase: "Evaluation", detail: "An annual HR health check against the original audit, plus a review of upcoming employment law changes." },
    ],
    results: {
      intro:
        "This is a scenario, so no results are claimed. In a real engagement, Apex HR would agree measures like these with the partners:",
      measures: [
        { heading: "Compliance gaps closed", detail: "Progress against the prioritised audit findings, reviewed at agreed intervals." },
        { heading: "Contract consistency", detail: "The proportion of employees on current, compliant terms and conditions." },
        { heading: "Consistent case handling", detail: "Absence, performance and conduct matters handled using the agreed process with proper records." },
        { heading: "Issue escalation", detail: "Whether employee relations issues are resolved earlier, before they become formal grievances or claims." },
        { heading: "Partner time", detail: "Partners' view of time spent on HR administration compared with before." },
      ],
    },
    takeaways: [
      "An HR compliance audit gives small firms a prioritised, affordable starting point.",
      "After an acquisition, check transferred employees' terms carefully and take legal advice before changing them.",
      "A clear handbook only helps if partners use it consistently, so manager briefings matter.",
      "Retained HR support gives smaller firms expert advice without a full-time HR salary.",
      "Employment law is changing, so build regular reviews into the HR calendar.",
    ],
    faqs: [
      {
        id: "cs-outsourced-hr-when",
        question: "When does a growing firm need outsourced HR support?",
        answer:
          "Common triggers include a first difficult employee relations case, an acquisition, rapid hiring, inconsistent contracts or a practice manager who no longer has time to keep up with employment law. Outsourced HR gives access to expertise without creating a full-time role before the firm needs one.",
      },
      {
        id: "cs-outsourced-hr-audit",
        question: "What does an HR compliance audit cover?",
        answer:
          "Typically contracts and written statements, policies and the handbook, right to work records, working time and holiday, absence management, employee data handling, and how disciplinary and grievance matters are managed. The result is a prioritised action list.",
      },
      {
        id: "cs-outsourced-hr-legal",
        question: "Is outsourced HR the same as legal advice?",
        answer:
          "No. Apex HR provides practical HR advice and support. Where a matter needs formal legal advice, such as changing transferred employees' terms or defending a tribunal claim, the firm should involve a qualified employment lawyer.",
      },
    ],
    sources: [GOV_WRITTEN_STATEMENT, ACAS_DISCIPLINARY_CODE, GOV_ERA_2025, GOV_RIGHT_TO_WORK],
    cta: {
      heading: "Need dependable HR support for your firm?",
      body: "Tell us how your practice is set up today. We will suggest where to start and what level of support makes sense.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    // Contract changes, TUPE-adjacent terms and disciplinary procedure
    // content are employment-law-adjacent — see CLAUDE.md section 31.
    legalReviewRequired: true,
  },

  // ---------------------------------------------------------------------
  // 4. Healthcare and care staffing
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "healthcare-care-staffing",
    shortTitle: "Healthcare and care staffing",
    title: "Stabilising clinical and care staffing without over-relying on agency cover",
    summary:
      "How Apex HR would help a group of care homes reduce reliance on short-notice agency cover by combining planned contract staffing, permanent recruitment, compliant sponsorship management and better staff wellbeing support.",
    seoTitle: "Healthcare Recruitment Case Study: Care Staffing",
    metaDescription:
      "Scenario: how Apex HR would help a UK care provider plan contract and permanent staffing, manage sponsor duties and support staff wellbeing.",
    primaryKeyword: "healthcare recruitment case study",
    secondaryKeywords: ["care home staffing", "contract staffing for healthcare", "sponsor licence HR support"],
    relatedTerms: [
      "rota planning",
      "agency spend",
      "Skilled Worker sponsorship",
      "sponsor compliance duties",
      "staff wellbeing",
      "right to work checks",
    ],
    serviceSlugs: [
      "contract-staffing-firm-in-the-uk",
      "skilled-worker-sponsorship-hr-support-firm-in-the-uk",
      "workplace-wellbeing-and-mental-health-firm-in-the-uk",
      "permanent-recruitment-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-care-homes-in-the-uk", "hr-company-for-healthcare-in-the-uk"],
    sectorLabel: "Care homes · Healthcare",
    executiveSummary:
      "A regional group of residential care homes is filling rota gaps with last-minute agency staff, which is costly and makes continuity of care harder. Several existing team members are sponsored workers, and the managers are unsure how recent immigration changes affect future hiring. Staff absence linked to stress is also rising. In this scenario, Apex HR would help the group plan its workforce by home and shift pattern, set up a planned contract staffing arrangement for predictable gaps, run permanent recruitment for core roles, review sponsor compliance processes, and introduce practical wellbeing support. Success would be measured by more planned cover, steadier teams and lower stress-related absence.",
    clientBackground: [
      "The provider in this scenario operates several residential homes across one region, of the type described on our [care homes](/sector/hr-company-for-care-homes-in-the-uk/) and [healthcare](/sector/hr-company-for-healthcare-in-the-uk/) sector pages. Each home has its own manager, and staffing is planned week by week.",
      "Some care staff are sponsored under the Skilled Worker route. Immigration rules for care roles have changed significantly. New overseas recruitment of care workers through the Skilled Worker route closed in July 2025, with transitional arrangements for some people already in the UK. Sponsors also have ongoing record-keeping and reporting duties. Providers should check current [GOV.UK sponsorship guidance](https://www.gov.uk/uk-visa-sponsorship-employers) and take immigration advice before acting, because the rules continue to change.",
      "Care work is physically and emotionally demanding. The Health and Safety Executive's [guidance on work-related stress](https://www.hse.gov.uk/stress/) sets out employers' responsibility to assess and manage the risks.",
    ],
    challenge: {
      intro: "Managers describe a cycle that is hard to break:",
      points: [
        "Short-notice gaps are filled with agency staff who do not know residents or routines, affecting continuity of care.",
        "Agency costs are unpredictable and difficult to budget.",
        "Recruitment is reactive and run separately by each home, with no shared pipeline.",
        "Uncertainty about sponsorship: which roles can still be sponsored, and whether sponsor records are complete.",
        "Rising stress-related absence, which creates more gaps and more pressure on remaining staff.",
      ],
    },
    objectives: [
      "Move from last-minute cover to planned staffing for predictable gaps.",
      "Build a shared recruitment pipeline for core care and nursing roles across the group.",
      "Make sure sponsor compliance processes are complete and clearly owned.",
      "Reduce stress-related absence through practical wellbeing measures.",
      "Give home managers clear, consistent information to plan with.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "Plan the cover, then fix the pipeline",
      intro:
        "Staffing problems in care are rarely solved by recruitment alone. Apex HR would look at demand, supply and retention together.",
      sections: [
        {
          heading: "Stage 1: Understand demand by home and shift",
          paragraphs: [
            "Using rota and absence data, Apex HR would identify which gaps are predictable, such as seasonal holiday peaks or night shifts that are hard to fill, and which are genuinely unexpected. Predictable gaps can be planned for; unexpected ones need a fast, reliable fallback.",
          ],
        },
        {
          heading: "Stage 2: Design a blended staffing model",
          paragraphs: [
            "Planned [contract staffing](/services/contract-staffing-firm-in-the-uk/) covers predictable gaps with consistent people who learn the homes. Group-wide [permanent recruitment](/services/permanent-recruitment-firm-in-the-uk/) fills core roles. Agency cover becomes the exception rather than the default.",
          ],
        },
        {
          heading: "Stage 3: Review sponsorship and wellbeing",
          paragraphs: [
            "Alongside the staffing model, Apex HR would review the group's sponsor processes through its [Skilled Worker sponsorship HR support](/services/skilled-worker-sponsorship-hr-support-firm-in-the-uk/), and run a short stress risk assessment with staff to target [wellbeing support](/services/workplace-wellbeing-and-mental-health-firm-in-the-uk/) where it is most needed.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the staffing programme would include",
      sections: [
        {
          heading: "Group workforce plan",
          paragraphs: [
            "A rolling plan by home, role and shift pattern, showing expected vacancies, planned leave and where contract or bank cover is needed.",
          ],
        },
        {
          heading: "Shared recruitment pipeline",
          paragraphs: [
            "One advertising and screening process for care assistants, senior carers and nurses across the group, with consistent values-based interviews and pre-employment checks including [right to work](https://www.gov.uk/check-job-applicant-right-to-work), references and the vetting the role requires.",
          ],
        },
        {
          heading: "Sponsor compliance review",
          paragraphs: [
            "A check of sponsor records, reporting processes and who is responsible for each duty, with a simple calendar for visa expiry dates. Where questions involve immigration law, the provider would be referred to a regulated immigration adviser. Apex HR provides HR process support, not immigration advice.",
          ],
        },
        {
          heading: "Practical wellbeing measures",
          paragraphs: [
            "Return-to-work conversations, manager guidance on spotting early signs of stress, fairer rota patterns and clear signposting to support, based on the stress risk assessment findings.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Rota, absence and recruitment data review, home manager interviews and a sponsor records check." },
      { phase: "Planning", detail: "Agree the blended staffing model, recruitment priorities, wellbeing actions and who owns each sponsor duty." },
      { phase: "Execution", detail: "Launch the shared recruitment pipeline, set up planned contract cover and introduce wellbeing measures home by home." },
      { phase: "Communication", detail: "Brief home managers and staff on what is changing and why, including how rotas will be planned." },
      { phase: "Monitoring", detail: "Track planned versus unplanned cover, vacancies, absence and sponsor compliance tasks each month." },
      { phase: "Evaluation", detail: "Quarterly review with the operations lead and home managers, adjusting the model where gaps persist." },
    ],
    results: {
      intro: ILLUSTRATIVE_RESULTS_INTRO,
      measures: [
        { heading: "Planned cover", detail: "The share of rota gaps filled through planned contract or bank cover rather than last-minute agency staff." },
        { heading: "Vacancy fill", detail: "Time to fill core care and nursing roles across the group." },
        { heading: "Stress-related absence", detail: "Trends in absence recorded as stress-related, alongside staff survey feedback." },
        { heading: "Sponsor compliance", detail: "Completion of sponsor duties and records on time, checked through periodic internal audits." },
      ],
    },
    takeaways: [
      "Separate predictable gaps from genuine emergencies, and plan for the predictable ones.",
      "A consistent contract workforce supports continuity of care better than rotating agency staff.",
      "Immigration rules for care roles have changed a lot. Check current guidance and take regulated advice.",
      "Wellbeing and staffing are linked: reducing stress reduces the gaps.",
    ],
    faqs: [
      {
        id: "cs-care-contract-vs-agency",
        question: "How is planned contract staffing different from agency cover?",
        answer:
          "Planned contract staffing places the same people into known gaps over a period, so they learn the setting and the people they support. Ad hoc agency cover is usually booked shift by shift, often at short notice, with less continuity.",
      },
      {
        id: "cs-care-sponsorship",
        question: "Can Apex HR advise on immigration law?",
        answer:
          "No. Apex HR supports the HR processes around sponsorship, such as record-keeping, reporting calendars and right to work checks. Questions about eligibility or immigration law should go to a regulated immigration adviser or solicitor.",
      },
    ],
    sources: [GOV_SPONSORSHIP, GOV_SKILLED_WORKER, GOV_RIGHT_TO_WORK, HSE_STRESS],
    cta: {
      heading: "Struggling to keep rotas covered?",
      body: "Tell us about your homes, roles and current cover. We will suggest a staffing model that fits.",
      label: "Find Talent",
      href: "/find-talent/",
    },
    // Sponsorship and immigration-adjacent content — CLAUDE.md section 31.
    legalReviewRequired: true,
  },

  // ---------------------------------------------------------------------
  // 5. Manufacturing restructure
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "manufacturing-restructure",
    shortTitle: "Manufacturing site restructure",
    title: "Managing a manufacturing site restructure fairly and transparently",
    summary:
      "How Apex HR would support a manufacturer consolidating production and moving distribution to a third party, covering collective consultation, TUPE, union negotiation, outplacement and change management.",
    seoTitle: "Redundancy and Restructuring Case Study: Manufacturing",
    metaDescription:
      "Scenario: how Apex HR would support a UK manufacturer through collective redundancy consultation, TUPE, union talks and outplacement.",
    primaryKeyword: "redundancy and restructuring case study",
    secondaryKeywords: ["collective consultation support", "TUPE outsourcing HR support", "outplacement for manufacturing"],
    relatedTerms: [
      "collective redundancy consultation",
      "HR1 form",
      "selection criteria",
      "suitable alternative employment",
      "employee representatives",
      "service provision change",
    ],
    serviceSlugs: [
      "redundancy-and-restructuring-support-firm-in-the-uk",
      "tupe-advisory-firm-in-the-uk",
      "industrial-relations-and-trade-union-negotiations-firm-in-the-uk",
      "outplacement-and-career-transition-services-firm-in-the-uk",
      "change-management-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-manufacturers-in-the-uk", "hr-company-for-distribution-in-the-uk"],
    sectorLabel: "Manufacturers · Distribution",
    executiveSummary:
      "A UK manufacturer plans to consolidate two production lines into one site and outsource its in-house warehousing to a logistics provider. The proposals could affect a significant number of roles, some covered by a recognised trade union, and the warehousing change may involve a TUPE transfer. In this scenario, Apex HR would help the leadership team plan a fair, well-documented process: collective consultation, TUPE information and consultation, constructive union negotiation, support for people leaving, and clear communication for those staying. Success would be measured by a compliant process, constructive employee relations, and how well affected people and the remaining workforce are supported.",
    clientBackground: [
      "The business in this scenario is an established manufacturer of the type described on our [manufacturers](/sector/hr-company-for-manufacturers-in-the-uk/) and [distribution](/sector/hr-company-for-distribution-in-the-uk/) sector pages, with long-serving staff, shift patterns and a recognised trade union for production employees.",
      "When an employer proposes 20 or more redundancies at one establishment within 90 days, collective consultation rules apply, including minimum periods before any dismissal and notifying the Redundancy Payments Service using form HR1. The [GOV.UK guidance on redundancy consultations](https://www.gov.uk/staff-redundant/redundancy-consultations) sets out the thresholds. Outsourcing an activity can also trigger [TUPE](https://www.gov.uk/transfers-takeovers), which has its own information and consultation duties.",
      "Employment law in this area is changing under the Employment Rights Act 2025, so the employer's employment lawyer should confirm the current requirements before the process starts.",
    ],
    challenge: {
      intro: "The leadership team needs to manage several risks at once:",
      points: [
        "Legal and procedural risk: collective consultation, TUPE and individual consultation must run correctly and in the right order.",
        "Employee relations: the union and staff are likely to be anxious, and trust could be damaged if communication is poor.",
        "Fair selection: any selection for redundancy must use objective, consistently applied criteria.",
        "Business continuity: production and customer commitments must continue during the change.",
        "People leaving: long-serving employees may need real help to find new work.",
        "People staying: the remaining workforce needs to understand the new structure and feel confident about the future.",
      ],
    },
    objectives: [
      "Run a fair, compliant and well-documented consultation process.",
      "Explore genuine alternatives to redundancy, including redeployment.",
      "Maintain a constructive relationship with the union and employee representatives.",
      "Support affected employees with practical career transition help.",
      "Help the remaining workforce adapt to the new structure.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "A planned, people-first restructure",
      intro:
        "Apex HR would work alongside the employer's employment lawyer, providing the HR planning, process management and people support while the lawyer advises on legal questions.",
      sections: [
        {
          heading: "Stage 1: Plan the process",
          paragraphs: [
            "Through [redundancy and restructuring support](/services/redundancy-and-restructuring-support-firm-in-the-uk/), Apex HR would build a timeline covering the business case, pools, selection criteria, collective and individual consultation, HR1 notification and notice periods, so nothing is left to chance.",
          ],
        },
        {
          heading: "Stage 2: Handle the TUPE element",
          paragraphs: [
            "[TUPE advisory](/services/tupe-advisory-firm-in-the-uk/) support would cover employee liability information, measures letters and consultation with representatives of transferring staff, coordinated with the incoming logistics provider. The [Acas TUPE guidance](https://www.acas.org.uk/tupe) is a useful plain-English reference for managers.",
          ],
        },
        {
          heading: "Stage 3: Engage the union early",
          paragraphs: [
            "[Industrial relations support](/services/industrial-relations-and-trade-union-negotiations-firm-in-the-uk/) would help managers prepare for consultation meetings, share information openly, respond to counter-proposals and record agreements properly.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the restructuring support would include",
      sections: [
        {
          heading: "Consultation toolkit",
          paragraphs: [
            "Template letters, meeting scripts, question logs and a decision record, so every manager follows the same steps and the process can be evidenced later.",
          ],
        },
        {
          heading: "Objective selection and redeployment",
          paragraphs: [
            "Selection criteria agreed in consultation and scored by trained managers with moderation, plus a redeployment process that identifies suitable alternative roles before anyone is dismissed.",
          ],
        },
        {
          heading: "Outplacement",
          paragraphs: [
            "[Outplacement and career transition services](/services/outplacement-and-career-transition-services-firm-in-the-uk/) for affected employees, including CV support, interview preparation and help identifying transferable skills.",
          ],
        },
        {
          heading: "Change management for those staying",
          paragraphs: [
            "[Change management](/services/change-management-firm-in-the-uk/) support including team briefings on the new structure, manager guidance on handling questions, and regular check-ins during the transition.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Review the business case, affected roles, union agreements and contracts with the employer and its lawyer." },
      { phase: "Planning", detail: "Agree the timeline, pools, draft selection criteria, communication plan and TUPE coordination with the incoming provider." },
      { phase: "Execution", detail: "Notify the Redundancy Payments Service where required, run collective and individual consultation, and carry out selection and redeployment." },
      { phase: "Communication", detail: "Announce proposals to all staff at the same time, hold regular updates, and keep a published question-and-answer log." },
      { phase: "Monitoring", detail: "Track consultation actions, union feedback, redeployment outcomes and wellbeing concerns throughout." },
      { phase: "Evaluation", detail: "A post-restructure review covering process, employee sentiment and lessons for future change." },
    ],
    results: {
      intro: ILLUSTRATIVE_RESULTS_INTRO,
      measures: [
        { heading: "Process compliance", detail: "All consultation, notification and documentation steps completed on time and recorded." },
        { heading: "Redeployment", detail: "The number of at-risk employees offered suitable alternative roles." },
        { heading: "Employee relations", detail: "Formal disputes, grievances or claims arising from the process." },
        { heading: "Transition support", detail: "Take-up of outplacement support and feedback from participants." },
      ],
    },
    takeaways: [
      "Plan the whole process before announcing anything; sequencing matters.",
      "Consultation must be genuine: listen to alternatives and record how they were considered.",
      "Outsourcing can trigger TUPE, which has its own duties alongside any redundancies.",
      "Early, honest engagement with the union is usually better than late, defensive engagement.",
      "Look after the people who stay as well as those who leave.",
    ],
    faqs: [
      {
        id: "cs-restructure-collective",
        question: "When does collective redundancy consultation apply?",
        answer:
          "GOV.UK guidance says collective consultation applies when an employer proposes making 20 or more employees redundant at a single establishment within any 90-day period. Minimum periods apply before dismissals, and the employer must notify the Redundancy Payments Service using form HR1. Take legal advice on your specific situation.",
      },
      {
        id: "cs-restructure-legal",
        question: "Does Apex HR replace an employment lawyer in a restructure?",
        answer:
          "No. Apex HR manages the HR planning, process and people support. Legal questions, such as whether TUPE applies or how to manage claims risk, should be answered by a qualified employment lawyer.",
      },
    ],
    sources: [GOV_REDUNDANCY_CONSULTATION, GOV_TUPE, ACAS_TUPE, GOV_ERA_2025],
    cta: {
      heading: "Planning a restructure?",
      body: "Talk to Apex HR in confidence before you announce anything. Early planning makes a fair process much easier.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    legalReviewRequired: true,
  },

  // ---------------------------------------------------------------------
  // 6. Employee relations investigation
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "employee-relations-investigation",
    shortTitle: "Resolving a complex employee relations case",
    title: "Resolving a complex grievance with an impartial investigation and mediation",
    summary:
      "How Apex HR would help a school trust or charity handle linked grievances between colleagues through an independent investigation, mediation and well-prepared next steps.",
    seoTitle: "Workplace Investigation Case Study: Grievance Handling",
    metaDescription:
      "Scenario: how Apex HR would run an independent workplace investigation and mediation for linked grievances in a UK school trust or charity.",
    primaryKeyword: "workplace investigation case study",
    secondaryKeywords: ["independent workplace investigator", "grievance investigation support", "workplace mediation UK"],
    relatedTerms: [
      "Acas Code of Practice",
      "terms of reference",
      "investigation report",
      "case to answer",
      "mediation",
      "employment tribunal",
    ],
    serviceSlugs: [
      "workplace-investigations-firm-in-the-uk",
      "workplace-mediation-and-conflict-resolution-firm-in-the-uk",
      "employment-tribunal-hr-support-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-education-in-the-uk", "hr-company-for-charity-in-the-uk"],
    sectorLabel: "Education · Charity",
    executiveSummary:
      "A multi-academy trust receives two linked grievances from staff in one department, each alleging unfair treatment by the other, alongside a wider complaint about the department's culture. Internal managers know everyone involved, so an impartial investigation is difficult. In this scenario, Apex HR would provide an independent investigator, run a fair investigation in line with the Acas Code of Practice, recommend next steps, and offer mediation where appropriate to rebuild working relationships. If any party later brings a claim, Apex HR would help the trust prepare its HR records. Success would be measured by a fair, timely process and whether working relationships recover.",
    clientBackground: [
      "The organisation in this scenario is a multi-academy trust, though the same situation often arises in charities. Both sectors are described on our [education](/sector/hr-company-for-education-in-the-uk/) and [charity](/sector/hr-company-for-charity-in-the-uk/) pages: values-led organisations with small HR teams, close-knit staff and governance boards that expect fair process.",
      "The [Acas Code of Practice on disciplinary and grievance procedures](https://www.acas.org.uk/acas-code-of-practice-on-disciplinary-and-grievance-procedures) sets out the minimum standard for handling grievances, and employment tribunals take it into account. Acas's [guide to investigations at work](https://www.acas.org.uk/investigations-for-discipline-and-grievance-step-by-step) explains that a reasonable investigation is an important part of a fair process.",
    ],
    challenge: {
      intro: "The trust's HR lead faces a difficult combination:",
      points: [
        "Linked grievances: each party's complaint concerns the other, so the process must be visibly even-handed.",
        "Limited independence: internal managers who could investigate have working relationships with those involved.",
        "Wider cultural concerns that go beyond the two individuals.",
        "Pressure on the department, with absence and tension affecting colleagues and pupils.",
        "The risk that a poorly handled process could lead to further grievances or a claim.",
      ],
    },
    objectives: [
      "Investigate both grievances fairly, thoroughly and promptly.",
      "Give the decision-maker a clear, evidence-based report.",
      "Address wider cultural concerns without prejudging the outcome.",
      "Restore workable relationships where that is possible.",
      "Keep accurate records in case of later challenge.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "Independent, proportionate and evidence-based",
      intro:
        "The goal is a fair process that everyone involved can understand, with a clear route to resolution afterwards.",
      sections: [
        {
          heading: "Stage 1: Set clear terms of reference",
          paragraphs: [
            "With the HR lead, Apex HR would agree what the [workplace investigation](/services/workplace-investigations-firm-in-the-uk/) covers, who will be interviewed, timescales, confidentiality arrangements and who will make the final decision. The investigator gathers and assesses evidence; they do not make the decision.",
          ],
        },
        {
          heading: "Stage 2: Investigate both sides",
          paragraphs: [
            "Structured interviews with both parties and relevant witnesses, a review of documents and emails, and an opportunity for each party to respond to points raised. Companions are allowed where policy or law provides for them.",
          ],
        },
        {
          heading: "Stage 3: Report and resolve",
          paragraphs: [
            "A written report sets out findings of fact and whether there is a case to answer. Where appropriate, [workplace mediation](/services/workplace-mediation-and-conflict-resolution-firm-in-the-uk/) can then help the parties agree how they will work together. [Acas describes mediation](https://www.acas.org.uk/mediation) as voluntary and confidential.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the case support would include",
      sections: [
        {
          heading: "Independent investigation and report",
          paragraphs: [
            "Interview notes agreed with each interviewee, a clear evidence trail and a balanced report that distinguishes facts, opinions and findings.",
          ],
        },
        {
          heading: "Decision-maker briefing",
          paragraphs: [
            "Guidance for the person hearing the grievances on how to run the outcome meetings, consider the evidence and explain their decisions and the right of appeal.",
          ],
        },
        {
          heading: "Mediation and team support",
          paragraphs: [
            "Facilitated mediation between the parties if both agree, followed by a team session to address the wider cultural concerns.",
          ],
        },
        {
          heading: "Tribunal readiness",
          paragraphs: [
            "If a claim follows, [employment tribunal HR support](/services/employment-tribunal-hr-support-firm-in-the-uk/) helps the trust organise records, chronologies and witness availability for its legal advisers.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Review the grievances, relevant policies and any related history with the HR lead." },
      { phase: "Planning", detail: "Agree terms of reference, interview list, timescale and confidentiality arrangements." },
      { phase: "Execution", detail: "Conduct interviews, gather documents, analyse evidence and write the report." },
      { phase: "Communication", detail: "Keep both parties informed of progress and expected timescales, and explain each next step clearly." },
      { phase: "Monitoring", detail: "Track the process against the agreed timetable and watch for wellbeing concerns or new issues." },
      { phase: "Evaluation", detail: "After outcomes and any mediation, review what the case shows about policies, training and culture." },
    ],
    results: {
      intro: ILLUSTRATIVE_RESULTS_INTRO,
      measures: [
        { heading: "Timeliness", detail: "Investigation completed within the agreed timescale, with delays explained." },
        { heading: "Process fairness", detail: "Whether outcomes are upheld on appeal and whether the process is challenged." },
        { heading: "Relationship recovery", detail: "Whether the parties can work together after mediation, reviewed at agreed intervals." },
        { heading: "Organisational learning", detail: "Policy, training or management changes adopted as a result." },
      ],
    },
    takeaways: [
      "Independence matters most when the people involved know the investigator.",
      "Clear terms of reference keep an investigation focused and proportionate.",
      "Separate the investigator from the decision-maker.",
      "Mediation works best after the facts are established and both parties agree to it.",
      "Good records protect everyone if the matter goes further.",
    ],
    faqs: [
      {
        id: "cs-er-independent",
        question: "When should an organisation use an external investigator?",
        answer:
          "Typically when internal managers are too close to the people involved, when allegations are serious or complex, or when the organisation does not have trained investigators available.",
      },
      {
        id: "cs-er-mediation",
        question: "Can mediation replace a grievance investigation?",
        answer:
          "Sometimes, if both parties agree and the issues are suitable for informal resolution. Where there are serious allegations, a formal investigation is usually needed first. Mediation is voluntary.",
      },
    ],
    sources: [ACAS_DISCIPLINARY_CODE, ACAS_INVESTIGATIONS, ACAS_MEDIATION],
    cta: {
      heading: "Facing a difficult employee relations case?",
      body: "Talk to Apex HR about an independent investigation, mediation or support with your next steps.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    legalReviewRequired: true,
  },

  // ---------------------------------------------------------------------
  // 7. Post-merger people integration
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "post-merger-people-integration",
    shortTitle: "Post-merger people integration",
    title: "Bringing two organisations together after an acquisition",
    summary:
      "How Apex HR would support a life sciences or engineering business through people due diligence, organisation design and culture integration after acquiring a smaller competitor.",
    seoTitle: "Post-Merger Integration HR Case Study",
    metaDescription:
      "Scenario: how Apex HR would support people due diligence, organisation design and culture integration after a UK life sciences acquisition.",
    primaryKeyword: "post-merger integration HR case study",
    secondaryKeywords: ["people due diligence", "organisation design after acquisition", "culture integration"],
    relatedTerms: [
      "M&A people due diligence",
      "TUPE",
      "harmonisation of terms",
      "operating model",
      "culture assessment",
      "retention of key people",
    ],
    serviceSlugs: [
      "ma-people-due-diligence-and-post-merger-integration-firm-in-the-uk",
      "organisation-design-firm-in-the-uk",
      "culture-transformation-firm-in-the-uk",
      "people-strategy-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-life-sciences-in-the-uk", "hr-company-for-engineers-in-the-uk"],
    sectorLabel: "Life sciences · Engineering",
    executiveSummary:
      "A growing life sciences company plans to acquire a smaller specialist business to add scientific capability. Leaders know that the value of the deal depends on keeping key scientists and engineers and on the two teams working well together. In this scenario, Apex HR would carry out people due diligence before completion, then help design the combined organisation, plan any harmonisation of terms carefully, and support culture integration and a joint people strategy. Success would be measured by retention of critical people, a clear combined structure and how quickly teams work effectively together.",
    clientBackground: [
      "The acquirer in this scenario is a mid-sized UK company of the type described on our [life sciences](/sector/hr-company-for-life-sciences-in-the-uk/) and [engineering](/sector/hr-company-for-engineers-in-the-uk/) sector pages. Its value depends heavily on specialist people whose knowledge is hard to replace.",
      "The target business is smaller, founder-led and informal, with different terms, benefits and ways of working. Depending on how the deal is structured, the transaction may involve [TUPE](https://www.gov.uk/transfers-takeovers), which protects employees' terms when a business transfers. The deal's legal advisers would confirm this.",
    ],
    challenge: {
      intro: "Leaders are concerned about several people risks:",
      points: [
        "Key-person risk: a small number of scientists and engineers hold critical knowledge and could leave.",
        "Hidden liabilities: inconsistent contracts, informal commitments or unresolved employee issues in the target business.",
        "Different structures and roles that do not map neatly onto each other.",
        "Different cultures: a fast, informal start-up joining a more structured organisation.",
        "Uncertainty for staff in both businesses, which can affect focus and retention.",
      ],
    },
    objectives: [
      "Understand people risks and liabilities before completion.",
      "Keep critical people through the transition.",
      "Design a clear combined structure with defined roles and reporting lines.",
      "Approach any harmonisation of terms lawfully and fairly.",
      "Build a shared way of working that keeps the strengths of both businesses.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "From due diligence to day one and beyond",
      intro: "People integration starts before the deal completes and continues well after day one.",
      sections: [
        {
          heading: "Stage 1: People due diligence",
          paragraphs: [
            "[M&A people due diligence](/services/ma-people-due-diligence-and-post-merger-integration-firm-in-the-uk/) reviews contracts, terms, benefits, disputes, key-person dependencies and HR compliance in the target business, giving the deal team a clear picture of people risks. Legal, financial and tax due diligence remains with the relevant advisers.",
          ],
        },
        {
          heading: "Stage 2: Design the combined organisation",
          paragraphs: [
            "[Organisation design](/services/organisation-design-firm-in-the-uk/) work defines how the combined business will be structured, which roles are needed and how decisions are made, starting from the strategy rather than from existing job titles.",
          ],
        },
        {
          heading: "Stage 3: Integrate cultures",
          paragraphs: [
            "A short [culture](/services/culture-transformation-firm-in-the-uk/) assessment in both businesses identifies what each values and where friction is likely, so integration plans can protect what matters to people.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the integration programme would include",
      sections: [
        {
          heading: "Retention plan for critical people",
          paragraphs: [
            "Early one-to-one conversations with key people, clear role confirmation and, where appropriate, retention arrangements agreed with the deal team.",
          ],
        },
        {
          heading: "Harmonisation roadmap",
          paragraphs: [
            "A careful plan for whether and how to align terms and benefits over time. Changing terms after a TUPE transfer is legally restricted, so any proposals would be reviewed by the employer's lawyer first.",
          ],
        },
        {
          heading: "Integration communications",
          paragraphs: [
            "A day-one plan, regular updates, manager briefing packs and a channel for questions, so people in both businesses hear consistent messages.",
          ],
        },
        {
          heading: "Joint people strategy",
          paragraphs: [
            "A combined [people strategy](/services/people-strategy-firm-in-the-uk/) covering talent, development, reward and culture priorities for the first two years.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "People due diligence on the target business and a review of the acquirer's own people priorities." },
      { phase: "Planning", detail: "Agree the integration plan, governance, retention priorities and communications timeline." },
      { phase: "Execution", detail: "Confirm roles, implement the combined structure, run culture sessions and begin the harmonisation roadmap." },
      { phase: "Communication", detail: "Day-one announcements, regular all-staff updates and manager briefings in both businesses." },
      { phase: "Monitoring", detail: "Track retention of critical people, open integration actions and employee sentiment." },
      { phase: "Evaluation", detail: "Six- and twelve-month integration reviews against the original objectives." },
    ],
    results: {
      intro: ILLUSTRATIVE_RESULTS_INTRO,
      measures: [
        { heading: "Critical-people retention", detail: "Retention of people identified as critical during due diligence." },
        { heading: "Structure in place", detail: "Combined structure, roles and reporting lines confirmed within the planned timeline." },
        { heading: "Employee sentiment", detail: "Pulse survey results from both legacy businesses during integration." },
        { heading: "Integration actions", detail: "Completion of planned integration actions against the timetable." },
      ],
    },
    takeaways: [
      "People due diligence should start before completion, not after.",
      "Identify and talk to critical people early.",
      "Design the organisation from strategy, not by merging two charts.",
      "Harmonising terms after a transfer needs legal advice and patience.",
      "Culture integration is practical work, not a slogan.",
    ],
    faqs: [
      {
        id: "cs-ma-due-diligence",
        question: "What does people due diligence cover?",
        answer:
          "Typically employment contracts and terms, benefits and pensions information, headcount and costs, disputes and claims, HR policies and compliance, and dependencies on key individuals. It complements, but does not replace, legal and financial due diligence.",
      },
      {
        id: "cs-ma-harmonise",
        question: "Can we harmonise terms straight after an acquisition?",
        answer:
          "It depends on the deal structure. Where TUPE applies, changing transferred employees' terms because of the transfer is restricted. Take legal advice before proposing any changes.",
      },
    ],
    sources: [GOV_TUPE, ACAS_TUPE],
    cta: {
      heading: "Planning an acquisition or merger?",
      body: "Talk to Apex HR early about people due diligence, retention and integration planning.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    legalReviewRequired: true,
  },

  // ---------------------------------------------------------------------
  // 8. Pay framework and reward
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "pay-framework-and-reward",
    shortTitle: "Pay framework and reward",
    title: "Introducing a fair, transparent pay framework in a growing business",
    summary:
      "How Apex HR would help an employer replace inconsistent, negotiated salaries with benchmarked pay ranges, job evaluation, a clear reward strategy and better pay gap reporting.",
    seoTitle: "Pay Structure Case Study: Fair Pay and Reward",
    metaDescription:
      "Scenario: how Apex HR would benchmark salaries, evaluate jobs and design fair pay ranges and benefits for a growing UK employer.",
    primaryKeyword: "pay structure case study",
    secondaryKeywords: ["salary benchmarking case study", "job evaluation UK", "gender pay gap reporting support"],
    relatedTerms: [
      "pay bands",
      "job evaluation",
      "equal pay",
      "gender pay gap",
      "total reward",
      "benefits review",
    ],
    serviceSlugs: [
      "salary-benchmarking-firm-in-the-uk",
      "job-evaluation-and-pay-structures-firm-in-the-uk",
      "reward-strategy-firm-in-the-uk",
      "pay-equity-and-pay-gap-reporting-firm-in-the-uk",
      "employee-benefits-consulting-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-financial-services-in-the-uk", "hr-company-for-leisure-in-the-uk"],
    sectorLabel: "Financial services · Leisure",
    executiveSummary:
      "An employer that has grown past 250 employees has pay that was mostly set by individual negotiation. Similar roles are paid differently, managers cannot explain pay decisions, and the organisation now needs to report its gender pay gap. In this scenario, Apex HR would benchmark pay against the market, evaluate roles consistently, design pay ranges and a clear reward strategy, review benefits, and help the employer understand and explain its pay gap data. Success would be measured by consistent, explainable pay decisions and better understanding of pay gaps over time.",
    clientBackground: [
      "The organisation in this scenario could be a financial services firm or a multi-site leisure operator, both described on our [financial services](/sector/hr-company-for-financial-services-in-the-uk/) and [leisure](/sector/hr-company-for-leisure-in-the-uk/) sector pages. Each has a mix of head office, specialist and frontline roles.",
      "According to [GOV.UK](https://www.gov.uk/guidance/who-needs-to-report-their-gender-pay-gap), employers with 250 or more employees on their snapshot date must report gender pay gap information, and must publish it within a year of that date. Separately, [Acas guidance on equal pay](https://www.acas.org.uk/equal-pay) explains employers' duty to give men and women equal pay for equal work.",
      "In frontline roles, pay must also respect the [National Minimum Wage and National Living Wage](https://www.gov.uk/national-minimum-wage-rates), which change each year.",
    ],
    challenge: {
      intro: "Pay has become a source of frustration and risk:",
      points: [
        "Inconsistent pay: people in similar roles are paid differently with no clear reason.",
        "No framework: managers negotiate salaries case by case, and pay creeps upwards to win candidates.",
        "Equal pay risk: unexplained differences are harder to justify.",
        "New reporting duty: the business must now publish gender pay gap figures and wants to understand them first.",
        "Benefits that are costly but poorly understood or valued by employees.",
      ],
    },
    objectives: [
      "Benchmark pay for each role against relevant market data.",
      "Evaluate roles consistently to create a fair job hierarchy.",
      "Introduce pay ranges and clear rules for pay decisions.",
      "Understand the gender pay gap and plan actions to address it.",
      "Make sure benefits offer good value to employees and the business.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "Evidence first, then structure, then communication",
      intro: "A pay framework only works if it is based on good data and explained clearly.",
      sections: [
        {
          heading: "Stage 1: Benchmark and analyse",
          paragraphs: [
            "[Salary benchmarking](/services/salary-benchmarking-firm-in-the-uk/) against appropriate market data for each role family, and an analysis of current pay by role, level and gender to identify unexplained differences.",
          ],
        },
        {
          heading: "Stage 2: Evaluate jobs",
          paragraphs: [
            "A consistent [job evaluation](/services/job-evaluation-and-pay-structures-firm-in-the-uk/) method groups roles by their size and demands, not job titles or the person currently in post. This creates the basis for fair pay ranges.",
          ],
        },
        {
          heading: "Stage 3: Design the reward framework",
          paragraphs: [
            "A [reward strategy](/services/reward-strategy-firm-in-the-uk/) setting out where the business wants to position pay against the market, how people progress through ranges, and how pay decisions are approved.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the reward programme would include",
      sections: [
        {
          heading: "Pay ranges and rules",
          paragraphs: [
            "Pay ranges for each level, rules for starting salaries and progression, and a plan for anyone currently paid above or below their new range.",
          ],
        },
        {
          heading: "Pay gap analysis and narrative",
          paragraphs: [
            "[Pay equity and pay gap reporting](/services/pay-equity-and-pay-gap-reporting-firm-in-the-uk/) support to calculate and understand the figures, explain the main drivers, and agree realistic actions.",
          ],
        },
        {
          heading: "Benefits review",
          paragraphs: [
            "[Employee benefits consulting](/services/employee-benefits-consulting-firm-in-the-uk/) to compare benefits with what employees value, identify low-value spend and improve how benefits are communicated.",
          ],
        },
        {
          heading: "Manager guidance and communication",
          paragraphs: [
            "Guidance for managers on explaining the framework, plus clear employee communications about how pay is set.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Collect pay, role and benefits data, and interview leaders about reward priorities." },
      { phase: "Planning", detail: "Agree the market position, evaluation method, governance and timeline, including any consultation required." },
      { phase: "Execution", detail: "Benchmark, evaluate roles, design ranges, review benefits and prepare pay gap analysis." },
      { phase: "Communication", detail: "Brief managers first, then explain the framework to employees in plain language." },
      { phase: "Monitoring", detail: "Check pay decisions against the new rules and track movement within ranges." },
      { phase: "Evaluation", detail: "An annual reward review alongside each year's pay gap analysis." },
    ],
    results: {
      intro: ILLUSTRATIVE_RESULTS_INTRO,
      measures: [
        { heading: "Pay consistency", detail: "The share of employees paid within the range for their level." },
        { heading: "Explainable decisions", detail: "Pay decisions documented against the framework's rules." },
        { heading: "Pay gap understanding", detail: "Year-on-year pay gap figures with drivers explained and actions tracked." },
        { heading: "Benefits value", detail: "Employee awareness and take-up of benefits, alongside cost." },
      ],
    },
    takeaways: [
      "Benchmarking without job evaluation can simply copy market inconsistencies.",
      "Pay ranges need clear rules, or they are ignored.",
      "Understand your pay gap before you publish it.",
      "Benefits only add value if employees understand them.",
      "Pay frameworks raise legal questions; involve specialist reward and legal advice where needed.",
    ],
    faqs: [
      {
        id: "cs-pay-gpg",
        question: "Who has to report their gender pay gap?",
        answer:
          "GOV.UK guidance says employers with 250 or more employees on their snapshot date must report. For most private and voluntary sector employers the snapshot date is 5 April, and figures must be published within a year.",
      },
      {
        id: "cs-pay-job-evaluation",
        question: "Why use job evaluation as well as market benchmarking?",
        answer:
          "Benchmarking shows what the market pays. Job evaluation shows how roles compare inside your organisation. Using both gives pay ranges that are competitive and internally consistent.",
      },
    ],
    sources: [GOV_GENDER_PAY_GAP, ACAS_EQUAL_PAY, GOV_MINIMUM_WAGE],
    cta: {
      heading: "Want pay you can explain with confidence?",
      body: "Talk to Apex HR about benchmarking, pay ranges, pay gap reporting or your benefits.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    // Equal-pay-adjacent — CLAUDE.md section 31.
    legalReviewRequired: true,
  },

  // ---------------------------------------------------------------------
  // 9. Hospitality staff retention
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "hospitality-staff-retention",
    shortTitle: "Hospitality staff retention",
    title: "Reducing frontline turnover in a multi-site hospitality business",
    summary:
      "How Apex HR would help a hospitality operator understand why frontline staff leave and improve retention through engagement surveys, better management, fairer performance conversations and an inclusive employee experience.",
    seoTitle: "Staff Retention Case Study: Hospitality",
    metaDescription:
      "Scenario: how Apex HR would help a UK hospitality operator reduce frontline turnover through engagement, manager training and performance management.",
    primaryKeyword: "staff retention case study hospitality",
    secondaryKeywords: ["reduce staff turnover hospitality", "employee engagement survey action plan", "hospitality manager training"],
    relatedTerms: [
      "exit interviews",
      "employee experience",
      "shift scheduling",
      "first-line managers",
      "inclusion",
      "onboarding",
    ],
    serviceSlugs: [
      "employee-engagement-surveys-and-action-planning-firm-in-the-uk",
      "employee-experience-strategy-firm-in-the-uk",
      "leadership-and-management-training-firm-in-the-uk",
      "performance-management-firm-in-the-uk",
      "diversity-equity-and-inclusion-dei-consulting-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-hospitality-in-the-uk", "hr-company-for-leisure-in-the-uk"],
    sectorLabel: "Hospitality · Leisure",
    executiveSummary:
      "A hospitality group with restaurants and venues in several towns is constantly recruiting frontline staff. Many leave within their first few months, putting pressure on managers and service quality. In this scenario, Apex HR would find out why people leave, using exit data and an engagement survey, then focus on the factors the business can control: onboarding, scheduling, manager capability, fair performance conversations and an inclusive working environment. Success would be measured by early-leaver rates, engagement scores and how consistently managers apply the new practices.",
    clientBackground: [
      "The operator in this scenario runs a mix of sites with young, diverse and often part-time teams, typical of businesses on our [hospitality](/sector/hr-company-for-hospitality-in-the-uk/) and [leisure](/sector/hr-company-for-leisure-in-the-uk/) sector pages. General managers are promoted from within and have had little formal management training.",
      "Pay must meet [National Minimum Wage and National Living Wage](https://www.gov.uk/national-minimum-wage-rates) rates, but pay is only one reason people stay or leave. Research such as the [CIPD Good Work Index](https://www.cipd.org/uk/knowledge/reports/goodwork/) looks at wider factors, including relationships at work, work-life balance and how people are managed.",
    ],
    challenge: {
      intro: "Leaders see the symptoms but not the causes:",
      points: [
        "High early turnover, especially in the first few months.",
        "Recruitment costs and management time spent constantly hiring and training.",
        "Inconsistent management: the experience of working there depends heavily on the site.",
        "Unpredictable rotas, which make it hard for staff to plan their lives.",
        "Limited data on why people leave, with few exit conversations recorded.",
      ],
    },
    objectives: [
      "Understand the real reasons people leave and stay.",
      "Improve the first weeks of employment for new starters.",
      "Build general and assistant managers' people-management skills.",
      "Introduce simple, fair performance conversations.",
      "Create a more consistent, inclusive experience across sites.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "Listen, focus, equip managers",
      intro: "Retention improves when the causes of leaving are understood and managers are equipped to act.",
      sections: [
        {
          heading: "Stage 1: Listen",
          paragraphs: [
            "An anonymous [engagement survey with action planning](/services/employee-engagement-surveys-and-action-planning-firm-in-the-uk/), short stay interviews with longer-serving staff, and a review of leaver data by site, role and length of service.",
          ],
        },
        {
          heading: "Stage 2: Focus on what matters most",
          paragraphs: [
            "Mapping the [employee experience](/services/employee-experience-strategy-firm-in-the-uk/) from application to the first three months identifies the moments that most affect whether people stay, such as their first shift, rota notice and how problems are handled.",
          ],
        },
        {
          heading: "Stage 3: Equip managers",
          paragraphs: [
            "Practical [leadership and management training](/services/leadership-and-management-training-firm-in-the-uk/) for general and assistant managers on onboarding, scheduling, feedback and handling concerns.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the retention programme would include",
      sections: [
        {
          heading: "Structured onboarding",
          paragraphs: [
            "A simple first-two-weeks plan for every new starter, including a buddy, shadow shifts and a check-in at the end of week one.",
          ],
        },
        {
          heading: "Fair scheduling principles",
          paragraphs: [
            "Clear rota notice standards and a fair process for requesting changes, aligned with the business's [flexible working](https://www.acas.org.uk/flexible-working) policy.",
          ],
        },
        {
          heading: "Light-touch performance conversations",
          paragraphs: [
            "Short, regular check-ins rather than annual appraisals, through practical [performance management](/services/performance-management-firm-in-the-uk/) that frontline managers can actually use.",
          ],
        },
        {
          heading: "Inclusion in practice",
          paragraphs: [
            "[DEI consulting](/services/diversity-equity-and-inclusion-dei-consulting-firm-in-the-uk/) to review recruitment, scheduling and progression for fairness, and to help managers create teams where people from different backgrounds feel they belong.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Leaver data analysis, engagement survey, stay interviews and site visits." },
      { phase: "Planning", detail: "Agree priority actions, pilot sites, manager training schedule and measures." },
      { phase: "Execution", detail: "Pilot onboarding, scheduling and check-in changes at selected sites, then roll out across the group." },
      { phase: "Communication", detail: "Share survey findings and planned actions with all staff, so people can see that feedback leads to change." },
      { phase: "Monitoring", detail: "Track early leavers, engagement pulse scores and manager adoption of the new practices by site." },
      { phase: "Evaluation", detail: "Compare pilot and non-pilot sites, then refine the approach before full roll-out." },
    ],
    results: {
      intro: ILLUSTRATIVE_RESULTS_INTRO,
      measures: [
        { heading: "Early leavers", detail: "The proportion of new starters who leave within their first three months, by site." },
        { heading: "Engagement", detail: "Changes in engagement survey and pulse scores, especially for manager-related questions." },
        { heading: "Manager adoption", detail: "Use of onboarding plans, rota notice standards and regular check-ins." },
        { heading: "Recruitment demand", detail: "The number of replacement hires needed over time." },
      ],
    },
    takeaways: [
      "Find out why people leave before deciding how to keep them.",
      "The first few weeks have an outsized effect on retention.",
      "Frontline managers shape the employee experience more than any policy.",
      "Predictable rotas matter to people with lives outside work.",
      "Pilot changes, measure them, then scale what works.",
    ],
    faqs: [
      {
        id: "cs-retention-survey",
        question: "Is an engagement survey worth it for frontline teams?",
        answer:
          "Yes, if it is short, mobile-friendly, anonymous and followed by visible action. Surveys without follow-up can make engagement worse.",
      },
      {
        id: "cs-retention-pay",
        question: "Is turnover in hospitality only about pay?",
        answer:
          "Pay matters, but it is rarely the only reason. Scheduling, management, training and how people are treated in their first weeks often make a big difference too.",
      },
    ],
    sources: [CIPD_GOOD_WORK, GOV_MINIMUM_WAGE, ACAS_FLEXIBLE_WORKING],
    cta: {
      heading: "Losing too many new starters?",
      body: "Talk to Apex HR about finding the causes of turnover and practical ways to keep good people.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    legalReviewRequired: false,
  },

  // ---------------------------------------------------------------------
  // 10. HRIS implementation
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "hris-implementation",
    shortTitle: "HRIS implementation",
    title: "Replacing spreadsheets with a single HR system and useful people data",
    summary:
      "How Apex HR would help a growing business select and implement an HR information system, build practical people dashboards and set clear rules for using AI tools in HR.",
    seoTitle: "HRIS Implementation Case Study: HR Software",
    metaDescription:
      "Scenario: how Apex HR would help a UK business choose and implement an HRIS, build people dashboards and set an AI workplace policy.",
    primaryKeyword: "HRIS implementation case study",
    secondaryKeywords: ["HR software selection", "people analytics dashboard", "AI workplace policy"],
    relatedTerms: [
      "data migration",
      "employee self-service",
      "requirements specification",
      "data protection impact assessment",
      "HR metrics",
      "digital HR",
    ],
    serviceSlugs: [
      "hr-software-selection-firm-in-the-uk",
      "hris-implementation-firm-in-the-uk",
      "people-analytics-and-hr-dashboards-firm-in-the-uk",
      "digital-hr-transformation-firm-in-the-uk",
      "ai-workplace-policy-and-hr-integration-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-it-in-the-uk", "hr-company-for-distribution-in-the-uk"],
    sectorLabel: "IT · Distribution",
    executiveSummary:
      "A growing business manages employee records, holidays and absence through spreadsheets and email. Data is duplicated, reports take days to compile and managers cannot easily see their teams' information. Some staff have also started using AI tools for HR tasks without guidance. In this scenario, Apex HR would define requirements, run a fair software selection, manage implementation and data migration, build a small set of useful people dashboards, and help the business introduce a clear AI workplace policy. Success would be measured by system adoption, data quality and time saved on routine HR administration.",
    clientBackground: [
      "The business in this scenario could be a technology company or a distribution business with depots and shift workers, as described on our [IT](/sector/hr-company-for-it-in-the-uk/) and [distribution](/sector/hr-company-for-distribution-in-the-uk/) sector pages.",
      "Employee data is personal data, and some of it is special category data, such as health information. Any new system must be set up with [data protection](https://www.gov.uk/data-protection) requirements in mind, including access controls, retention rules and, where appropriate, a data protection impact assessment.",
    ],
    challenge: {
      intro: "The current set-up creates daily friction and risk:",
      points: [
        "Data scattered across spreadsheets, inboxes and shared drives, with no single accurate record.",
        "Manual holiday and absence tracking that is slow and error-prone.",
        "Basic questions, such as headcount or turnover, take days to answer.",
        "Weak access control over sensitive personal data.",
        "Unmanaged use of AI tools with employee information.",
      ],
    },
    objectives: [
      "Select an HR system that fits the business's size, budget and needs.",
      "Migrate clean, accurate data into the new system.",
      "Give employees and managers self-service for routine tasks.",
      "Provide leaders with a small set of reliable people metrics.",
      "Set clear rules for AI use in HR processes.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "Requirements first, technology second",
      intro: "Most HR technology problems come from unclear requirements and poor data, not from the software itself.",
      sections: [
        {
          heading: "Stage 1: Define requirements",
          paragraphs: [
            "Workshops with HR, managers, payroll and IT to agree what the system must do now and in the next few years, which processes it should support, and what integrations are needed.",
          ],
        },
        {
          heading: "Stage 2: Select fairly",
          paragraphs: [
            "Vendor-neutral [HR software selection](/services/hr-software-selection-firm-in-the-uk/): a shortlist, scripted demonstrations based on real scenarios, reference checks and a scoring model, so the decision is evidence-based.",
          ],
        },
        {
          heading: "Stage 3: Implement and embed",
          paragraphs: [
            "[HRIS implementation](/services/hris-implementation-firm-in-the-uk/) support covering configuration, data cleansing and migration, testing, training and go-live, as part of a wider [digital HR transformation](/services/digital-hr-transformation-firm-in-the-uk/) of processes.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the HR technology programme would include",
      sections: [
        {
          heading: "Clean data migration",
          paragraphs: [
            "A data audit, agreed data standards and validation checks before migration, so the new system starts with accurate records.",
          ],
        },
        {
          heading: "Self-service processes",
          paragraphs: [
            "Redesigned processes for holidays, absence, personal details and approvals, so employees and managers can act without emailing HR.",
          ],
        },
        {
          heading: "People dashboards",
          paragraphs: [
            "A small set of [people analytics dashboards](/services/people-analytics-and-hr-dashboards-firm-in-the-uk/) covering headcount, turnover, absence and recruitment, with clear definitions so everyone reads the numbers the same way.",
          ],
        },
        {
          heading: "AI workplace policy",
          paragraphs: [
            "An [AI workplace policy](/services/ai-workplace-policy-and-hr-integration-firm-in-the-uk/) setting out which tools may be used, what data must never be entered into them, and where human review is required, especially for decisions about people.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Map current processes, data sources and pain points, and review data protection arrangements." },
      { phase: "Planning", detail: "Agree requirements, budget, selection criteria, project team and timeline." },
      { phase: "Execution", detail: "Run selection, configure the system, migrate and test data, train users and go live." },
      { phase: "Communication", detail: "Explain to employees what is changing, why, and how to use self-service, with simple guides." },
      { phase: "Monitoring", detail: "Track log-ins, self-service use, data errors and support requests after go-live." },
      { phase: "Evaluation", detail: "A post-implementation review at three months to fix gaps and plan the next phase." },
    ],
    results: {
      intro: ILLUSTRATIVE_RESULTS_INTRO,
      measures: [
        { heading: "Adoption", detail: "The share of employees and managers actively using self-service." },
        { heading: "Data quality", detail: "Errors found in key records during regular data checks." },
        { heading: "Administrative time", detail: "Time HR spends on routine requests and reporting, compared with before." },
        { heading: "Reporting speed", detail: "Time needed to produce standard people reports for leadership." },
      ],
    },
    takeaways: [
      "Define requirements before looking at software demonstrations.",
      "Clean your data before you migrate it.",
      "A few trusted metrics are more useful than many dashboards.",
      "Build data protection into the set-up, not as an afterthought.",
      "Set clear rules for AI before it becomes embedded in HR work.",
    ],
    faqs: [
      {
        id: "cs-hris-vendor",
        question: "Does Apex HR resell HR software?",
        answer:
          "Apex HR's software selection support is designed to be vendor-neutral, so recommendations are based on the client's requirements. Any commercial relationships should be disclosed during selection.",
      },
      {
        id: "cs-hris-ai",
        question: "Why does a business need an AI workplace policy?",
        answer:
          "Staff may already be using AI tools. A policy sets out what is allowed, protects personal and confidential data, and makes sure people decisions keep meaningful human review.",
      },
    ],
    sources: [GOV_DATA_PROTECTION],
    cta: {
      heading: "Ready to move HR off spreadsheets?",
      body: "Talk to Apex HR about requirements, software selection and a practical implementation plan.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    legalReviewRequired: false,
  },

  // ---------------------------------------------------------------------
  // 11. Early careers in construction
  // ---------------------------------------------------------------------
  {
    ...STANDARD_DRAFT,
    slug: "early-careers-construction",
    shortTitle: "Early careers in construction",
    title: "Building an early-careers pipeline for a skills-short industry",
    summary:
      "How Apex HR would help a construction or engineering firm design a graduate and early-careers programme, define competencies, plan learning and support international project assignments.",
    seoTitle: "Graduate Scheme Case Study: Construction",
    metaDescription:
      "Scenario: how Apex HR would design a graduate and early-careers programme with competency frameworks and learning paths for a UK construction firm.",
    primaryKeyword: "graduate scheme case study",
    secondaryKeywords: ["early careers programme design", "construction graduate scheme", "competency framework for engineers"],
    relatedTerms: [
      "apprenticeships",
      "graduate development",
      "competency framework",
      "capability development",
      "international assignments",
      "talent pipeline",
    ],
    serviceSlugs: [
      "graduate-schemes-and-early-careers-design-firm-in-the-uk",
      "competency-frameworks-firm-in-the-uk",
      "learning-strategy-and-capability-development-firm-in-the-uk",
      "global-mobility-and-expatriate-hr-management-firm-in-the-uk",
    ],
    sectorSlugs: ["hr-company-for-construction-in-the-uk", "hr-company-for-engineers-in-the-uk"],
    sectorLabel: "Construction · Engineering",
    executiveSummary:
      "A construction and engineering contractor struggles to recruit experienced site managers, quantity surveyors and engineers, and many of its senior people are approaching retirement. It takes on graduates and apprentices informally but has no structured programme. In this scenario, Apex HR would design an early-careers programme, define the competencies each role needs at each stage, build a learning plan, and set up a fair process for international project assignments. Success would be measured by programme completion, progression into qualified roles and retention of early-careers hires.",
    clientBackground: [
      "The contractor in this scenario works on commercial and infrastructure projects, of the type described on our [construction](/sector/hr-company-for-construction-in-the-uk/) and [engineering](/sector/hr-company-for-engineers-in-the-uk/) sector pages. Projects are site-based, safety-critical and sometimes international.",
      "Early-careers routes in the UK include graduate schemes and apprenticeships, and the funding rules for apprenticeships have been changing. Employers should check current [GOV.UK apprenticeship guidance](https://www.gov.uk/government/collections/apprenticeship-changes). Health and safety competence is central on site, as set out in [HSE construction guidance](https://www.hse.gov.uk/construction/).",
    ],
    challenge: {
      intro: "The business has an ageing workforce and a thin pipeline:",
      points: [
        "Difficulty recruiting experienced professionals in key roles.",
        "Senior people nearing retirement, with knowledge that has not been passed on.",
        "Graduates and apprentices recruited informally, with uneven experiences across sites.",
        "No clear definition of what good looks like at each career stage.",
        "International projects staffed ad hoc, without consistent support for people working abroad.",
      ],
    },
    objectives: [
      "Create a structured, attractive early-careers programme.",
      "Define the competencies needed at each stage for key roles.",
      "Build a learning plan that combines site experience, formal learning and mentoring.",
      "Support people on international assignments fairly and consistently.",
      "Build a reliable pipeline into qualified and senior roles.",
    ],
    approach: {
      kicker: "Apex HR's approach",
      heading: "Grow your own talent, deliberately",
      intro: "In skills-short industries, developing early-careers talent is often more reliable than competing for experienced hires.",
      sections: [
        {
          heading: "Stage 1: Plan the pipeline",
          paragraphs: [
            "Using retirement and turnover data, Apex HR would estimate future demand for key roles and decide how many graduates and apprentices to take on each year.",
          ],
        },
        {
          heading: "Stage 2: Define competencies",
          paragraphs: [
            "[Competency frameworks](/services/competency-frameworks-firm-in-the-uk/) for site management, commercial and engineering roles, describing the technical, safety and behavioural capabilities expected at each stage.",
          ],
        },
        {
          heading: "Stage 3: Design the programme",
          paragraphs: [
            "A [graduate and early-careers programme](/services/graduate-schemes-and-early-careers-design-firm-in-the-uk/) with structured rotations, mentoring, support for professional qualifications and clear progression points.",
          ],
        },
      ],
    },
    solutions: {
      kicker: "Solutions implemented",
      heading: "What the early-careers programme would include",
      sections: [
        {
          heading: "Attraction and selection",
          paragraphs: [
            "Clear messaging about the programme, partnerships with relevant courses, and fair, consistent assessment of applicants against the entry-level competencies.",
          ],
        },
        {
          heading: "Learning plan",
          paragraphs: [
            "A [learning strategy](/services/learning-strategy-and-capability-development-firm-in-the-uk/) combining on-site experience, formal training, mentoring by senior staff and support towards professional qualifications.",
          ],
        },
        {
          heading: "Knowledge transfer",
          paragraphs: [
            "Structured mentoring that pairs early-careers staff with experienced people approaching retirement, so practical knowledge is passed on.",
          ],
        },
        {
          heading: "International assignment support",
          paragraphs: [
            "[Global mobility](/services/global-mobility-and-expatriate-hr-management-firm-in-the-uk/) processes for project assignments abroad, including selection, assignment letters, pre-departure briefings and return planning. Immigration, tax and social security questions go to specialist advisers; [GOV.UK guidance on working abroad](https://www.gov.uk/working-abroad) is a useful starting point.",
          ],
        },
      ],
    },
    implementation: [
      { phase: "Initial assessment", detail: "Workforce age and turnover analysis, interviews with project leaders and a review of current graduate and apprentice experiences." },
      { phase: "Planning", detail: "Agree intake numbers, programme structure, competency frameworks, budget and mentors." },
      { phase: "Execution", detail: "Launch attraction, run selection, start the first cohort and introduce mentoring and learning plans." },
      { phase: "Communication", detail: "Brief site managers and mentors on their role, and give each participant a clear programme guide." },
      { phase: "Monitoring", detail: "Regular progress reviews against competencies, participant feedback and mentor check-ins." },
      { phase: "Evaluation", detail: "An annual programme review covering completion, progression and retention." },
    ],
    results: {
      intro: ILLUSTRATIVE_RESULTS_INTRO,
      measures: [
        { heading: "Programme completion", detail: "The share of each cohort completing the programme." },
        { heading: "Progression", detail: "Movement of participants into qualified and supervisory roles." },
        { heading: "Retention", detail: "Retention of early-careers hires two to three years after joining." },
        { heading: "Pipeline coverage", detail: "Key roles with identified internal successors." },
      ],
    },
    takeaways: [
      "In skills-short markets, growing talent can be more reliable than buying it.",
      "Competency frameworks make development and progression fair and visible.",
      "Mentoring by experienced staff preserves knowledge before it retires.",
      "Plan intake numbers from future demand, not habit.",
      "International assignments need consistent HR processes and specialist advice.",
    ],
    faqs: [
      {
        id: "cs-early-careers-apprentice",
        question: "Should we use graduate schemes or apprenticeships?",
        answer:
          "Many construction and engineering firms use both. Apprenticeships combine paid work with training, while graduate schemes build on a degree. The right mix depends on the roles you need and current funding rules.",
      },
      {
        id: "cs-early-careers-competency",
        question: "What is a competency framework?",
        answer:
          "It describes the skills, knowledge and behaviours expected in a role at each level. It helps with recruitment, development, performance conversations and promotion decisions.",
      },
    ],
    sources: [GOV_APPRENTICESHIP_CHANGES, HSE_CONSTRUCTION, GOV_WORKING_ABROAD],
    cta: {
      heading: "Building your future workforce?",
      body: "Talk to Apex HR about graduate schemes, competency frameworks and development programmes.",
      label: "Discuss Your Needs",
      href: "/contact/",
    },
    legalReviewRequired: false,
  },
];

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return caseStudyContent.find((entry) => entry.slug === slug);
}

export function caseStudyPath(slug: string): string {
  return `/case-study/${slug}/`;
}

/** Maps a record onto the shared CaseStudyCard preview shape, always carrying the evidence label. */
export function toCaseStudyPreview(caseStudy: CaseStudyContent): CaseStudyPreview {
  return {
    id: caseStudy.slug,
    title: caseStudy.title,
    summary: caseStudy.summary,
    href: caseStudyPath(caseStudy.slug),
    label: caseStudy.evidenceBasis === "illustrative" ? ILLUSTRATIVE_LABEL : undefined,
    meta: caseStudy.sectorLabel,
  };
}

/** Whether individual case-study pages may be indexed and listed in the sitemap. */
export function isCaseStudyIndexable(caseStudy: CaseStudyContent): boolean {
  // Same rule as every other route family: only Confirmed/Corrected routes
  // are indexable (CLAUDE.md section 31). The parameter keeps the call
  // site ready for a per-record gate if one is ever approved.
  void caseStudy;
  return CASE_STUDY_ROUTE_STATUS === "confirmed" || CASE_STUDY_ROUTE_STATUS === "corrected";
}

/** Case studies that list a given service slug, in catalogue order. */
export function getCaseStudiesForService(serviceSlug: string): CaseStudyContent[] {
  return caseStudyContent.filter((entry) => entry.serviceSlugs.includes(serviceSlug));
}

/** Other case studies sharing at least one service or sector, then the rest, excluding itself. */
export function getRelatedCaseStudies(caseStudy: CaseStudyContent, limit = 3): CaseStudyContent[] {
  const others = caseStudyContent.filter((entry) => entry.slug !== caseStudy.slug);
  const overlap = (entry: CaseStudyContent) =>
    entry.serviceSlugs.filter((s) => caseStudy.serviceSlugs.includes(s)).length +
    entry.sectorSlugs.filter((s) => caseStudy.sectorSlugs.includes(s)).length;
  return [...others].sort((a, b) => overlap(b) - overlap(a)).slice(0, limit);
}
