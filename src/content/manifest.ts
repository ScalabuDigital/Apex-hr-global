import type { ContentManifestEntry } from "@/types/content";
import { routes } from "@/config/routes";
import { getServicesByCategory, serviceCategories, services } from "@/config/services";
import { sectors } from "@/config/sectors";
import { locations, getLocation, locationPath, withArticle } from "@/config/locations";
import { buildComboMetaDescription, categoryLocationCombos, serviceLocationCombos } from "@/config/service-locations";
import { insightCategories } from "@/config/insight-categories";
import { serviceCategoryContent, serviceContent } from "@/content/services-data";
import { sectorContent } from "@/content/sectors-data";
import { locationContent } from "@/content/locations-data";
import { cityContent, cityPath } from "@/content/cities";
import {
  aboutPageContent,
  contactPageContent,
  findTalentPageContent,
  forCandidatesPageContent,
  forEmployersPageContent,
  jobsPageContent,
  talentPoolPageContent,
} from "@/content/supporting-pages-data";
import { privacyPolicyLead } from "@/content/privacy-policy-data";
import {
  CASE_STUDY_ROUTE_STATUS,
  caseStudyContent,
  caseStudyPath,
  isCaseStudyIndexable,
} from "@/content/case-studies-data";

/**
 * Machine-readable content manifest for the whole site, per this phase's
 * brief section 6. Every entry is derived from the same content records
 * that render the pages (not hand-typed separately), so the manifest can
 * never silently drift from what's actually published. Used by
 * sitemap.ts, robots.ts and tests/unit/content-audit.test.ts.
 *
 * `contentStatus`/`reviewStatus` are internal workflow markers — never
 * rendered to public users — reflecting that all copy here is an
 * AI-authored first draft pending stakeholder review, per CLAUDE.md
 * section 32.
 */
function buildManifest(): ContentManifestEntry[] {
  const entries: ContentManifestEntry[] = [];

  entries.push({
    pageType: "home",
    title: "Home",
    slug: "",
    canonicalPath: routes.home.path,
    routeStatus: routes.home.status,
    indexable: routes.home.readyToIndex,
    contentStatus: "ai-draft",
    reviewStatus: "stakeholder-review-required",
    primaryAudience: "employer",
    primaryIntent: "Establish Apex HR as a global HR and recruitment partner for employers",
    primaryKeyword: "global HR company",
    metaTitle: "Apex HR — Global HR & Recruitment Company",
    metaDescription:
      "Apex HR is a global HR and recruitment company for employers across Africa, North America, Europe and the Middle East, combining outsourced HR, recruitment and workforce advisory.",
    h1: "A people partner built for growing employers",
    relatedPages: [
      routes.services.path,
      routes.sectors.path,
      routes.forEmployers.path,
      routes.forCandidates.path,
      routes.findTalent.path,
    ],
    legalReviewRequired: false,
  });

  entries.push({
    pageType: "serviceHub",
    title: "Services",
    slug: "",
    canonicalPath: routes.services.path,
    routeStatus: routes.services.status,
    indexable: routes.services.readyToIndex,
    contentStatus: "ai-draft",
    reviewStatus: "stakeholder-review-required",
    primaryAudience: "employer",
    primaryIntent: "Let employers browse the full HR and recruitment service catalogue",
    primaryKeyword: "global HR services",
    metaTitle: "HR & Recruitment Services | Apex HR",
    metaDescription: "Explore Apex HR's HR, recruitment and people-consulting services.",
    h1: "HR, recruitment and people-consulting services",
    legalReviewRequired: false,
  });

  for (const category of serviceCategories) {
    const content = serviceCategoryContent.find((entry) => entry.slug === category.slug);
    // URL-to-H1 alignment correction (docs/URL-DECISION-REGISTER.md D-017):
    // h1/metaTitle now match the actual rendered hero exactly —
    // `Global {title} Firm`, per ServiceCategoryTemplate's <h1> JSX —
    // rather than the bare family name this field previously (incorrectly)
    // recorded. The rendered <title> tag also carries the root layout's
    // " | Apex HR" template on top of this metaTitle value.
    // relatedPages lists the real links the page renders: every child
    // service plus each related family from content.relatedFamilySlugs.
    const childPaths = getServicesByCategory(category.slug).map((service) => `/services/${service.slug}/`);
    const relatedFamilyPaths = (content?.relatedFamilySlugs ?? []).map((slug) => `/services/${slug}/`);
    entries.push({
      pageType: "serviceCategory",
      title: category.title,
      slug: category.slug,
      canonicalPath: `/services/${category.slug}/`,
      routeStatus: "confirmed",
      indexable: routes.services.readyToIndex,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: "employer",
      primaryIntent: `Introduce the ${category.title} service family`,
      primaryKeyword: category.title.toLowerCase(),
      metaTitle: `Global ${category.title} Firm | Apex HR`,
      metaDescription: content?.metaDescription ?? content?.summary ?? "",
      h1: `Global ${category.title} Firm`,
      parent: routes.services.path,
      relatedPages: [...childPaths, ...relatedFamilyPaths],
      legalReviewRequired: false,
    });
  }

  // SEO audit Phase 3 Batches 6A/6B/6C1/6C2: explicit principal-intent
  // phrases for the nineteen optimised children, overriding the generic
  // "Convert employer interest in X" fallback — matches each batch's
  // approved intent-ownership table, so e.g. Retained HR Services and HR
  // Compliance Audit no longer share a near-identical recorded intent.
  const primaryIntentOverrides: Record<string, string> = {
    // Batch 6A — Outsourced HR Services
    "retained-hr-services-firm": "Ongoing retained HR support for employers",
    "hr-support-for-small-businesses-and-startups-firm": "HR support for small businesses and startups",
    "fractional-hr-director-chief-people-officer-firm": "Part-time senior HR leadership",
    "hr-compliance-audit-firm": "Review of an organisation's HR compliance, policies and processes",
    "employee-handbooks-and-hr-policies-firm": "Creation and review of employee handbooks and workplace policies",
    "payroll-advisory-firm": "HR-focused payroll guidance and process support",
    // Batch 6B — Recruitment & Talent Acquisition
    "permanent-recruitment-firm": "Recruitment support for permanent employees",
    "executive-search-firm": "Search and recruitment for senior, executive and leadership appointments",
    "contract-staffing-firm": "Recruitment support for temporary, interim or contract staffing needs",
    "recruitment-process-outsourcing-rpo-firm": "Outsourcing some or all recruitment-process activity",
    "graduate-schemes-and-early-careers-design-firm": "Designing structured graduate and early-career recruitment programmes",
    // Batch 6C1 — Employment Law & Employee Relations (first four)
    "redundancy-and-restructuring-support-firm": "HR process and people support during redundancy or organisational restructuring",
    "tupe-advisory-firm": "HR and people-process support for organisational transfers where TUPE may be relevant",
    "workplace-investigations-firm": "Structured workplace fact-finding and investigation support",
    "workplace-mediation-and-conflict-resolution-firm": "Facilitated workplace mediation and conflict-resolution support",
    // Batch 6C2 — Employment Law & Employee Relations (remaining four)
    "employment-tribunal-hr-support-firm": "HR documentation, process and management support connected with employment tribunal matters",
    "outplacement-and-career-transition-services-firm": "Employer-funded support for employees leaving an organisation and moving towards new employment",
    "industrial-relations-and-trade-union-negotiations-firm": "Employer-side HR support for trade-union engagement and collective workplace matters",
    "skilled-worker-sponsorship-hr-support-firm": "HR process and workforce support connected with work permit and visa sponsorship",
    // Batch 6D — Organisation Development & Change Management
    "organisation-design-firm": "Designing organisational structures, roles, responsibilities and ways of working",
    "change-management-firm": "Supporting the people side of organisational change and adoption",
    "culture-transformation-firm": "Assessing and intentionally developing workplace culture and behaviours",
    "ma-people-due-diligence-and-post-merger-integration-firm": "Identifying and managing people-related considerations before and after mergers or acquisitions",
    // Batch 6E1 — Compensation, Reward & Benefits (first three)
    "salary-benchmarking-firm": "Comparing roles and pay against relevant external market data",
    "job-evaluation-and-pay-structures-firm": "Assessing role value and developing consistent job grades, pay bands or structures",
    "reward-strategy-firm": "Developing an organisation-wide approach to pay, recognition, incentives and benefits",
    // Batch 6E2 — Compensation, Reward & Benefits (remaining three)
    "pay-equity-and-pay-gap-reporting-firm": "Reviewing pay patterns and supporting appropriate pay-gap analysis and reporting",
    "employee-benefits-consulting-firm": "Helping employers review and develop employee-benefits arrangements",
    "executive-compensation-and-share-schemes-firm": "Supporting the design and governance of executive reward and employee share arrangements",
    // Batch 6F — Learning & Leadership Development
    "leadership-and-management-training-firm": "Structured training for managers and organisational leaders",
    "executive-coaching-and-360-feedback-firm": "Individual leadership coaching and structured multi-source feedback",
    "learning-strategy-and-capability-development-firm": "Organisation-wide learning strategy and workforce capability planning",
    // Batch 6G — Performance & Talent Management
    "performance-management-firm": "Designing and improving structured employee-performance processes",
    "succession-planning-and-talent-mapping-firm": "Identifying critical roles, succession needs and internal talent considerations",
    "competency-frameworks-firm": "Defining the skills, knowledge and behaviours associated with roles or organisational levels",
    // Batch 6H — Employee Experience & Engagement
    "employee-experience-strategy-firm": "Designing a coherent employee-experience approach across relevant stages of the employee journey",
    "employee-engagement-surveys-and-action-planning-firm": "Supporting the design, delivery and interpretation of employee-engagement surveys and turning findings into practical action planning",
    "employer-branding-and-employee-value-proposition-evp-firm": "Helping an employer define and communicate what it offers employees and prospective employees",
    "workplace-wellbeing-and-mental-health-firm": "HR-led support for workplace wellbeing and organisational approaches to mental-health-related work issues",
    "diversity-equity-and-inclusion-dei-consulting-firm": "Organisational HR support for diversity, equity and inclusion strategy, policies, practices and implementation",
    // Final consolidated phase — HR Technology & People Analytics
    "hris-implementation-firm": "Planning and implementing a Human Resources Information System (HRIS)",
    "hr-software-selection-firm": "Helping employers define requirements and assess suitable HR software",
    "people-analytics-and-hr-dashboards-firm": "Defining workforce measures, analysing people data and presenting useful HR reporting",
    "digital-hr-transformation-firm": "Wider organisational change involving HR technology, processes, data and working practices",
    "ai-workplace-policy-and-hr-integration-firm": "Workplace policy, governance and HR-process considerations involving artificial intelligence",
    // Final consolidated phase — Strategic HR & Workforce Advisory
    "people-strategy-firm": "Helping employers align people priorities with organisational needs",
    "strategic-workforce-planning-firm": "Considering future workforce demand, supply, capability, skills and possible scenarios",
    "global-mobility-and-expatriate-hr-management-firm": "HR coordination for employees working across borders",
  };

  for (const service of services) {
    const content = serviceContent.find((entry) => entry.slug === service.slug);
    if (!content) continue;
    entries.push({
      pageType: "service",
      title: service.title,
      slug: service.slug,
      canonicalPath: `/services/${service.slug}/`,
      routeStatus: "confirmed",
      indexable: routes.services.readyToIndex,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: "employer",
      primaryIntent: primaryIntentOverrides[service.slug] ?? `Convert employer interest in ${service.title}`,
      primaryKeyword: content.primaryKeyword,
      metaTitle: `Global ${service.title} Firm | Apex HR`,
      metaDescription: content.metaDescription,
      h1: `Global ${service.title} Firm`,
      parent: `/services/${service.categorySlug}/`,
      relatedPages: content.relatedServiceSlugs.map((slug) => `/services/${slug}/`),
      sourceReferences: ["docs/MASTER-SITEMAP.md", "docs/Apex_HR_Master_Sitemap_and_URL_Register.xlsx"],
      legalReviewRequired: content.legalReviewRequired,
    });
  }

  entries.push({
    pageType: "sectorHub",
    title: "Sectors",
    slug: "",
    canonicalPath: routes.sectors.path,
    routeStatus: routes.sectors.status,
    indexable: routes.sectors.readyToIndex,
    contentStatus: "ai-draft",
    reviewStatus: "stakeholder-review-required",
    primaryAudience: "employer",
    primaryIntent: "Let employers find sector-specific HR context",
    primaryKeyword: "sectors we support",
    metaTitle: "Sectors We Support | Apex HR",
    metaDescription: "Explore the sectors Apex HR can support with HR and recruitment.",
    h1: "Sectors Apex HR can support",
    legalReviewRequired: false,
  });

  for (const sector of sectors) {
    const content = sectorContent.find((entry) => entry.slug === sector.slug);
    if (!content) continue;
    entries.push({
      pageType: "sector",
      title: sector.title,
      slug: sector.slug,
      canonicalPath: `/sector/${sector.slug}/`,
      routeStatus: "confirmed",
      indexable: routes.sectors.readyToIndex,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: "employer",
      primaryIntent: `Explain how Apex HR can support ${sector.title} employers`,
      primaryKeyword: `HR support for ${sector.title.toLowerCase()}`,
      metaTitle: `Global HR Company for ${sector.title} | Apex HR`,
      metaDescription: content.metaDescription,
      h1: `Global HR Company for ${sector.title}`,
      parent: routes.sectors.path,
      relatedPages: content.relatedServiceSlugs.map((slug) => `/services/${slug}/`),
      legalReviewRequired: false,
    });
  }

  entries.push({
    pageType: "locationHub",
    title: "Locations",
    slug: "",
    canonicalPath: routes.locations.path,
    routeStatus: routes.locations.status,
    indexable: routes.locations.readyToIndex,
    contentStatus: "ai-draft",
    reviewStatus: "stakeholder-review-required",
    primaryAudience: "employer",
    primaryIntent: "Let employers find location-specific HR and recruitment coverage",
    primaryKeyword: "countries we support",
    metaTitle: "Countries We Support | Apex HR",
    metaDescription: "Explore the countries Apex HR supports with HR and recruitment, across Africa, North America, Europe and the Middle East.",
    h1: "HR and recruitment support around the world",
    legalReviewRequired: false,
  });

  for (const location of locations) {
    const content = locationContent.find((entry) => entry.slug === location.slug);
    if (!content) continue;
    entries.push({
      pageType: "location",
      title: location.title,
      slug: location.slug,
      canonicalPath: locationPath(location.slug),
      routeStatus: "confirmed",
      indexable: true,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: "employer",
      primaryIntent: `Explain HR and recruitment coverage in ${withArticle(location.title)}`,
      primaryKeyword: `HR support in ${location.title.toLowerCase()}`,
      metaTitle: `HR & Recruitment Support in ${withArticle(location.title)} | Apex HR`,
      metaDescription: content.metaDescription,
      h1: `HR and recruitment support in ${withArticle(location.title)}`,
      parent: routes.locations.path,
      legalReviewRequired: false,
    });
  }

  // City sub-location pages (`/{countryCode}/{city}/`) — src/content/cities/.
  for (const city of cityContent) {
    const country = getLocation(city.countrySlug);
    if (!country) continue;
    entries.push({
      pageType: "location",
      title: city.name,
      slug: city.slug,
      canonicalPath: cityPath(city),
      routeStatus: "confirmed",
      indexable: routes.locations.readyToIndex,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: "employer",
      primaryIntent: `Explain HR and recruitment support in ${city.name}`,
      primaryKeyword: `HR support in ${city.name.toLowerCase()}`,
      metaTitle: `HR & Recruitment Support in ${city.name}, ${country.title} | Apex HR`,
      metaDescription: city.metaDescription,
      h1: `HR and recruitment support in ${city.name}`,
      parent: locationPath(country.slug),
      legalReviewRequired: true,
    });
  }

  // Curated service/category + location combination pages — see
  // docs/URL-DECISION-REGISTER.md D-014 and src/config/service-locations.ts.
  for (const combo of serviceLocationCombos) {
    const service = services.find((entry) => entry.slug === combo.serviceSlug);
    const content = serviceContent.find((entry) => entry.slug === combo.serviceSlug);
    const location = getLocation(combo.locationSlug);
    const locationInfo = locationContent.find((entry) => entry.slug === combo.locationSlug);
    if (!service || !content || !location || !locationInfo) continue;
    entries.push({
      pageType: "serviceLocation",
      title: `${service.title} in ${withArticle(location.title)}`,
      slug: combo.slug,
      canonicalPath: `/services/${combo.slug}/`,
      routeStatus: "confirmed",
      indexable: true,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: "employer",
      primaryIntent: `Explain ${service.title} coverage in ${withArticle(location.title)}`,
      primaryKeyword: `${service.title.toLowerCase()} ${location.title.toLowerCase()}`,
      metaTitle: `${service.title} in ${withArticle(location.title)} | Apex HR`,
      metaDescription: buildComboMetaDescription(content.metaDescription, withArticle(location.title), locationInfo.region),
      h1: `${service.title} in ${withArticle(location.title)}`,
      parent: `/services/${service.slug}/`,
      legalReviewRequired: content.legalReviewRequired,
    });
  }

  for (const combo of categoryLocationCombos) {
    const category = serviceCategories.find((entry) => entry.slug === combo.categorySlug);
    const content = serviceCategoryContent.find((entry) => entry.slug === combo.categorySlug);
    const location = getLocation(combo.locationSlug);
    const locationInfo = locationContent.find((entry) => entry.slug === combo.locationSlug);
    if (!category || !content || !location || !locationInfo) continue;
    entries.push({
      pageType: "serviceCategoryLocation",
      title: `${category.title} in ${withArticle(location.title)}`,
      slug: combo.slug,
      canonicalPath: `/services/${combo.slug}/`,
      routeStatus: "confirmed",
      indexable: true,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: "employer",
      primaryIntent: `Explain ${category.title} coverage in ${withArticle(location.title)}`,
      primaryKeyword: `${category.title.toLowerCase()} ${location.title.toLowerCase()}`,
      metaTitle: `${category.title} in ${withArticle(location.title)} | Apex HR`,
      metaDescription: buildComboMetaDescription(content.summary, withArticle(location.title), locationInfo.region),
      h1: `${category.title} in ${withArticle(location.title)}`,
      parent: `/services/${category.slug}/`,
      legalReviewRequired: false,
    });
  }

  const supportingPages: Array<{
    pageType: ContentManifestEntry["pageType"];
    route: (typeof routes)[keyof typeof routes];
    audience: ContentManifestEntry["primaryAudience"];
    lead: string;
    intent: string;
    /**
     * Real rendered <title>/H1 for pages rebuilt with bespoke marketing
     * copy (About/Contact/For Employers/For Candidates) — per SEO audit
     * Batch 1, synchronising this data with the live pages after it was
     * found to still record the pre-rebuild generic route.label values.
     * Falls back to the generic route.label derivation when omitted
     * (Find Talent/Jobs/Talent Pool still use their InfoPageTemplate
     * heading as both, which happens to equal route.label today).
     */
    title?: string;
    h1?: string;
    /**
     * SEO audit Phase 3 Batch 4: explicit principal-intent phrase for the
     * five core pages' keyword-to-URL map, overriding the generic
     * `route.label.toLowerCase()` fallback (which produced weak single-word
     * values like "employers"/"candidates" for these specific pages).
     */
    primaryKeyword?: string;
    /** SEO audit Phase 3 Batch 4: real internal links added/confirmed on the page. */
    relatedPages?: string[];
    /**
     * Overrides the loop's `false` default below — set `true` for genuinely
     * legal content (currently only Privacy Policy) per CLAUDE.md section 31.
     */
    legalReviewRequired?: boolean;
  }> = [
    {
      pageType: "generalInformation",
      route: routes.about,
      audience: "general",
      lead: aboutPageContent.lead,
      intent: "Explain what Apex HR is, its employer-first approach and its separate candidate pathway",
      // No `title` override: the real page now passes a bare "About" to
      // buildMetadata() (SEO audit Batch 2 item 1), so the generic
      // route.label fallback below already produces the correct
      // "About | Apex HR" — an explicit override here would just
      // reintroduce the "About Apex HR | Apex HR" duplication bug.
      h1: "A people partner that works alongside you",
      primaryKeyword: "About Apex HR and its approach",
      relatedPages: [routes.services.path, routes.contact.path],
    },
    {
      pageType: "generalInformation",
      route: routes.partnership,
      audience: "employer",
      lead: "Explore Apex HR’s monthly people partnership tiers, from strategic HR advisory to fractional Chief Human Resources Officer services.",
      intent: "Compare monthly people partnership pricing and support levels",
      title: "HR Partnership & Pricing",
      h1: "Your dedicated people partner, on retainer.",
      primaryKeyword: "monthly HR partnership pricing",
      relatedPages: [routes.services.path, routes.forEmployers.path, routes.contact.path],
    },
    {
      pageType: "generalInformation",
      route: routes.contact,
      audience: "general",
      lead: contactPageContent.lead,
      intent: "Give employers and candidates worldwide a way to get in touch with Apex HR",
      h1: "Let's talk about what your people need next.",
      primaryKeyword: "Contact Apex HR",
      relatedPages: [routes.forEmployers.path, routes.forCandidates.path, routes.findTalent.path],
    },
    {
      pageType: "employerLanding",
      route: routes.forEmployers,
      audience: "employer",
      lead: forEmployersPageContent.lead,
      intent: "Orient employers toward the right HR or recruitment support and route to Find Talent/Contact",
      title: "HR & Recruitment Support for Employers",
      h1: "The right people support, exactly when you need it",
      primaryKeyword: "HR support and recruitment support for international employers",
      relatedPages: [routes.services.path, routes.findTalent.path, routes.contact.path],
    },
    {
      pageType: "candidateLanding",
      route: routes.forCandidates,
      audience: "candidate",
      lead: forCandidatesPageContent.lead,
      intent: "Orient candidates toward current opportunities, the talent pool and the candidate journey",
      title: "Candidate Support & Opportunities",
      h1: "Make your next move count",
      primaryKeyword: "Apex HR candidate support, opportunities and candidate journey",
      relatedPages: [routes.jobs.path, routes.talentPool.path],
    },
    { pageType: "conversionLanding", route: routes.findTalent, audience: "employer", lead: findTalentPageContent.lead, intent: "Capture an employer hiring enquiry" },
    {
      pageType: "conversionLanding",
      route: routes.jobs,
      audience: "candidate",
      lead: jobsPageContent.lead,
      intent: "Let candidates find current vacancies",
      title: "Apex HR Job Board",
      h1: "Apex HR Job Board",
      primaryKeyword: "Apex HR Job Board and current vacancies",
      relatedPages: [routes.forCandidates.path, routes.talentPool.path],
    },
    { pageType: "conversionLanding", route: routes.talentPool, audience: "candidate", lead: talentPoolPageContent.lead, intent: "Capture candidate interest for future roles" },
    {
      pageType: "generalInformation",
      route: routes.privacyPolicy,
      audience: "general",
      lead: privacyPolicyLead,
      intent: "Explain how Apex HR collects, uses, stores, shares and protects personal data",
      h1: "Privacy Policy",
      primaryKeyword: "Apex HR privacy policy",
      relatedPages: [routes.contact.path],
      legalReviewRequired: true,
    },
  ];

  for (const page of supportingPages) {
    const title = page.title ?? page.route.label;
    entries.push({
      pageType: page.pageType,
      title,
      slug: page.route.id,
      canonicalPath: page.route.path,
      routeStatus: page.route.status,
      indexable: page.route.readyToIndex,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: page.audience,
      primaryIntent: page.intent,
      primaryKeyword: page.primaryKeyword ?? page.route.label.toLowerCase(),
      metaTitle: `${title} | Apex HR`,
      metaDescription: page.lead,
      h1: page.h1 ?? page.route.label,
      relatedPages: page.relatedPages,
      legalReviewRequired: page.legalReviewRequired ?? false,
    });
  }

  entries.push({
    pageType: "insightsHub",
    title: "Insights",
    slug: "",
    canonicalPath: routes.insights.path,
    routeStatus: routes.insights.status,
    indexable: routes.insights.readyToIndex,
    contentStatus: "ai-draft",
    reviewStatus: "stakeholder-review-required",
    primaryAudience: "general",
    primaryIntent: "Organise HR thought-leadership content by topic",
    primaryKeyword: "HR insights",
    metaTitle: "Insights | Apex HR",
    metaDescription: "HR and workforce insights from Apex HR.",
    h1: "HR and workforce insights",
    legalReviewRequired: false,
  });

  for (const category of insightCategories) {
    entries.push({
      pageType: "insightCategory",
      title: category.title,
      slug: category.slug,
      canonicalPath: `/insights/${category.slug}/`,
      routeStatus: "confirmed",
      indexable: routes.insights.readyToIndex,
      contentStatus: "ai-draft",
      reviewStatus: "stakeholder-review-required",
      primaryAudience: "general",
      primaryIntent: `Organise ${category.title} articles`,
      primaryKeyword: `${category.title.toLowerCase()} insights`,
      metaTitle: `${category.title} Insights | Apex HR`,
      metaDescription: category.summary,
      h1: `${category.title} Insights`,
      parent: routes.insights.path,
      legalReviewRequired: false,
    });
  }

  entries.push({
    pageType: "resourcesHub",
    title: "Resources",
    slug: "",
    canonicalPath: routes.resources.path,
    routeStatus: routes.resources.status,
    indexable: routes.resources.readyToIndex,
    contentStatus: "ai-draft",
    reviewStatus: "stakeholder-review-required",
    primaryAudience: "general",
    primaryIntent: "Host downloadable resources for employers and candidates",
    primaryKeyword: "HR resources",
    metaTitle: "Resources | Apex HR",
    metaDescription: "Guides, reports and resources from Apex HR.",
    h1: "Resources",
    legalReviewRequired: false,
  });

  entries.push({
    pageType: "caseStudiesHub",
    title: "Case Studies",
    slug: "",
    canonicalPath: routes.caseStudies.path,
    routeStatus: routes.caseStudies.status,
    indexable: routes.caseStudies.readyToIndex,
    contentStatus: "ai-draft",
    reviewStatus: "stakeholder-review-required",
    primaryAudience: "employer",
    primaryIntent: "Show how Apex HR approaches employer challenges (illustrative scenarios until verified engagements are approved — D-020)",
    primaryKeyword: "HR case studies",
    metaTitle: "Case Studies | Apex HR",
    metaDescription:
      "HR and recruitment scenarios showing how Apex HR approaches common employer challenges, from scale-up hiring to outsourced HR.",
    h1: "How Apex HR approaches employer challenges",
    legalReviewRequired: false,
  });

  // Individual case studies (docs/URL-DECISION-REGISTER.md D-020). The
  // route family is Provisional, so every entry is non-indexable and
  // excluded from the XML sitemap until that decision changes.
  for (const caseStudy of caseStudyContent) {
    entries.push({
      pageType: "caseStudy",
      title: caseStudy.shortTitle,
      slug: caseStudy.slug,
      canonicalPath: caseStudyPath(caseStudy.slug),
      routeStatus: CASE_STUDY_ROUTE_STATUS,
      indexable: isCaseStudyIndexable(caseStudy),
      contentStatus: caseStudy.contentStatus,
      reviewStatus: caseStudy.reviewStatus,
      primaryAudience: "employer",
      primaryIntent: caseStudy.summary,
      primaryKeyword: caseStudy.primaryKeyword,
      secondaryKeywords: caseStudy.secondaryKeywords,
      metaTitle: `${caseStudy.seoTitle} | Apex HR`,
      metaDescription: caseStudy.metaDescription,
      h1: caseStudy.title,
      parent: routes.caseStudies.path,
      relatedPages: [
        ...caseStudy.serviceSlugs.map((slug) => `/services/${slug}/`),
        ...caseStudy.sectorSlugs.map((slug) => `/sector/${slug}/`),
      ],
      sourceReferences: caseStudy.sources.map((source) => source.href),
      legalReviewRequired: caseStudy.legalReviewRequired,
    });
  }

  entries.push({
    pageType: "expertsHub",
    title: "Experts",
    slug: "",
    canonicalPath: routes.experts.path,
    routeStatus: routes.experts.status,
    indexable: routes.experts.readyToIndex,
    contentStatus: "ai-draft",
    reviewStatus: "stakeholder-review-required",
    primaryAudience: "general",
    primaryIntent: "Introduce Apex HR's practitioners",
    primaryKeyword: "Apex HR experts",
    metaTitle: "Experts | Apex HR",
    metaDescription: "Meet the people behind Apex HR.",
    h1: "The people behind Apex HR",
    legalReviewRequired: false,
  });

  return entries;
}

export const contentManifest: ContentManifestEntry[] = buildManifest();
