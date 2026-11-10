import type { ContentGuide } from "@/types/content";

/**
 * In-depth guides for the nine service family pages that do not carry their
 * own `guide` in src/content/services-data.ts (Recruitment & Talent
 * Acquisition has its own). Written for an international audience: each
 * guide explains how the family's work changes across countries.
 * First-draft copy pending stakeholder review. Paragraphs support
 * [anchor](/path/) links to real service and country pages only.
 * Keyed by service family slug (src/config/services.ts).
 */
export const serviceFamilyGuides: Record<string, ContentGuide> = {
  "outsourced-hr-services-firm": {
    kicker: "Outsourced HR explained",
    heading: "How outsourced HR works for employers in several countries",
    intro:
      "Outsourced HR gives you access to experienced HR professionals without building a full in-house team. It suits growing businesses, organisations entering new markets, and teams whose HR lead needs extra capacity or specialist input.",
    sections: [
      {
        heading: "Choosing the right model",
        paragraphs: [
          "[Retained HR services](/services/retained-hr-services-firm/) provide ongoing advice on a monthly basis, while [fractional HR director](/services/fractional-hr-director-chief-people-officer-firm/) support adds senior leadership for a set number of days. Smaller businesses often start with [HR support for small businesses and startups](/services/hr-support-for-small-businesses-and-startups-firm/), and move to a retained or fractional model as they grow.",
        ],
      },
      {
        heading: "Foundations first: contracts, policies and compliance",
        paragraphs: [
          "Most outsourced HR relationships begin with the basics: written contracts, a practical [employee handbook](/services/employee-handbooks-and-hr-policies-firm/) and a check that current practice meets local rules. An [HR compliance audit](/services/hr-compliance-audit-firm/) is often the quickest way to see where the gaps are and what to fix first.",
        ],
      },
      {
        heading: "One partner, several countries",
        paragraphs: [
          "Employers with staff in more than one country need consistent standards and local detail. Contract terms, leave, payroll deductions and dismissal rules differ between, for example, [Nigeria](/ng/), [Ireland](/ie/) and the [United Arab Emirates](/ae/). Apex HR keeps one set of core policies and adapts the detail for each country, bringing in local legal counsel where formal advice is needed.",
        ],
      },
      {
        heading: "Payroll and HR working together",
        paragraphs: [
          "Payroll is usually run by in-country providers, but HR decisions drive what payroll pays. [Payroll advisory](/services/payroll-advisory-firm/) support helps you choose providers, set controls and keep HR and payroll data aligned, so changes such as new hires, pay reviews and leavers are processed accurately everywhere.",
        ],
      },
    ],
  },

  "employment-law-and-employee-relations-firm": {
    kicker: "Employee relations explained",
    heading: "Managing employee relations fairly across jurisdictions",
    intro:
      "Employee relations covers the moments that test an organisation: restructuring, transfers, complaints, conflict and disputes. Good process protects people and the business, and it looks different in every country.",
    sections: [
      {
        heading: "Fair process is universal; the rules are local",
        paragraphs: [
          "Almost everywhere, a fair process means a valid reason, a proper investigation, a chance to respond and a documented decision. But the detail varies: South Africa's CCMA, Kenya's Employment and Labour Relations Court, Ireland's Workplace Relations Commission and Germany's labour courts each apply their own standards. Apex HR builds a consistent internal process and adapts it for local rules, alongside your legal advisers.",
        ],
      },
      {
        heading: "Restructuring and transfers",
        paragraphs: [
          "[Redundancy and restructuring support](/services/redundancy-and-restructuring-support-firm/) plans the consultation, selection and communication a restructure needs. Where a business or contract changes hands, [TUPE and business transfer advisory](/services/tupe-advisory-firm/) helps manage the transfer of staff, which follows different rules in the UK, the EU, South Africa and elsewhere.",
        ],
      },
      {
        heading: "Investigations, mediation and disputes",
        paragraphs: [
          "[Workplace investigations](/services/workplace-investigations-firm/) establish the facts impartially, and [mediation](/services/workplace-mediation-and-conflict-resolution-firm/) helps people rebuild working relationships. If a claim is brought, [employment dispute HR support](/services/employment-tribunal-hr-support-firm/) organises the records your legal representatives need, whichever tribunal, court or commission hears it.",
        ],
      },
      {
        heading: "Unions, works councils and international hiring",
        paragraphs: [
          "Employee representation ranges from works councils in [Germany](/de/) and the [Netherlands](/nl/) to sectoral bargaining in [South Africa](/za/). [Industrial relations support](/services/industrial-relations-and-trade-union-negotiations-firm/) helps you prepare for these conversations, and [work visa and sponsorship HR support](/services/skilled-worker-sponsorship-hr-support-firm/) covers the HR side of employing people from abroad.",
        ],
      },
    ],
  },

  "organisation-development-and-change-management-firm": {
    kicker: "Organisation development explained",
    heading: "Designing and changing organisations that work across borders",
    intro:
      "Organisation development is about shaping the structure, culture and ways of working an organisation needs to deliver its strategy, and helping people through the changes that requires.",
    sections: [
      {
        heading: "Structure that follows strategy",
        paragraphs: [
          "[Organisation design](/services/organisation-design-firm/) starts with what the business needs to do, then decides which roles, teams and reporting lines will do it. For international organisations, the key question is often which decisions sit with the centre, which with regions and which with each country.",
        ],
      },
      {
        heading: "Leading people through change",
        paragraphs: [
          "[Change management](/services/change-management-firm/) plans the people side of change: who is affected, what they need to know, when and from whom. In some countries, such as [Germany](/de/) and the [Netherlands](/nl/), works councils must be informed or consulted, so timelines need to allow for that from the start.",
        ],
      },
      {
        heading: "Culture that travels",
        paragraphs: [
          "[Culture transformation](/services/culture-transformation-firm/) defines the behaviours that matter and builds them into leadership, recognition and everyday processes. In a multinational, the aim is a shared core that each country can express in its own way, rather than a head-office culture imposed everywhere.",
        ],
      },
      {
        heading: "Mergers and acquisitions",
        paragraphs: [
          "People issues decide whether many deals succeed. [M&A people due diligence and integration](/services/ma-people-due-diligence-and-post-merger-integration-firm/) identifies risks in terms, pay, key people and representation before completion, then plans integration that respects each country's rules on transfers and consultation.",
        ],
      },
    ],
  },

  "compensation-reward-and-benefits-firm": {
    kicker: "Reward explained",
    heading: "Building fair, competitive reward in different markets",
    intro:
      "Reward is one of the most visible things an employer does. Getting it right means paying competitively in each market, consistently inside the organisation, and in a way people understand.",
    sections: [
      {
        heading: "Know the market",
        paragraphs: [
          "[Salary benchmarking](/services/salary-benchmarking-firm/) compares your pay with the relevant local market. Pay levels and structures differ widely between, say, [Lagos](/ng/), [Dublin](/ie/) and [Riyadh](/sa/), so benchmarks must be local, and employers need a clear rule on when they pay locally, regionally or globally.",
        ],
      },
      {
        heading: "Consistency inside the organisation",
        paragraphs: [
          "[Job evaluation and pay structures](/services/job-evaluation-and-pay-structures-firm/) give you a consistent way to compare roles and set ranges. A global grading framework with local pay ranges is a common approach for international employers, and it supports [pay equity reviews and pay gap reporting](/services/pay-equity-and-pay-gap-reporting-firm/), which are expanding under the EU Pay Transparency Directive and in several US states.",
        ],
      },
      {
        heading: "Packages that fit local expectations",
        paragraphs: [
          "What a 'package' means varies by country: allowance-based pay in the Gulf, employer-provided health cover in the [United States](/us/), statutory pensions and social security across Africa and Europe. [Employee benefits consulting](/services/employee-benefits-consulting-firm/) helps design benefits that are competitive locally and consistent with your overall approach.",
        ],
      },
      {
        heading: "Strategy and senior reward",
        paragraphs: [
          "A [reward strategy](/services/reward-strategy-firm/) connects pay, benefits and recognition to what the business is trying to achieve. For senior leaders, [executive compensation and share schemes](/services/executive-compensation-and-share-schemes-firm/) must also work with each country's tax and securities rules, so we work alongside tax and legal specialists.",
        ],
      },
    ],
  },

  "learning-and-leadership-development-firm": {
    kicker: "Leadership development explained",
    heading: "Developing leaders and capability for international teams",
    intro:
      "Strong managers are one of the biggest drivers of performance and retention. Learning and leadership development builds the capability your organisation needs now and the leaders it will need next.",
    sections: [
      {
        heading: "Start with first-line managers",
        paragraphs: [
          "Many managers are promoted for technical skill and given little help to lead people. [Leadership and management training](/services/leadership-and-management-training-firm/) covers the practical skills that make the biggest difference: feedback, performance conversations, delegation and leading distributed teams.",
        ],
      },
      {
        heading: "Support senior leaders individually",
        paragraphs: [
          "[Executive coaching and 360 feedback](/services/executive-coaching-and-360-feedback-firm/) help senior leaders see their impact and adapt, which is particularly valuable when someone takes on a regional or international role and has to lead across cultures and time zones.",
        ],
      },
      {
        heading: "A learning strategy that scales",
        paragraphs: [
          "[Learning strategy and capability development](/services/learning-strategy-and-capability-development-firm/) connects learning to the skills the business needs, and decides what should be global, what local and what digital. Programmes must work in different languages and learning cultures to be effective across countries.",
        ],
      },
      {
        heading: "Developing local talent",
        paragraphs: [
          "In several markets, building national leadership is a strategic priority: Saudisation in [Saudi Arabia](/sa/), Emiratisation in the [UAE](/ae/) and employment equity in [South Africa](/za/). Leadership programmes designed with these goals in mind help organisations meet them meaningfully rather than by numbers alone.",
        ],
      },
    ],
  },

  "performance-and-talent-management-firm": {
    kicker: "Performance and talent explained",
    heading: "Managing performance and talent consistently across countries",
    intro:
      "Performance and talent management help organisations set clear expectations, develop people and make sure the right people are ready for key roles.",
    sections: [
      {
        heading: "Performance that people trust",
        paragraphs: [
          "[Performance management](/services/performance-management-firm/) works best when expectations are clear, conversations are regular and ratings are fair. Approaches need to respect cultural differences in how feedback is given, and some countries have specific rules on documentation before action is taken for poor performance.",
        ],
      },
      {
        heading: "A common language for capability",
        paragraphs: [
          "[Competency frameworks](/services/competency-frameworks-firm/) describe what good looks like for each role and level. A shared framework gives international employers a consistent basis for recruitment, development and promotion in every country.",
        ],
      },
      {
        heading: "Ready for the next move",
        paragraphs: [
          "[Succession planning and talent mapping](/services/succession-planning-and-talent-mapping-firm/) identify who could step into critical roles and what they need to get ready. International succession plans look across countries for future leaders and plan the moves and development that will prepare them.",
        ],
      },
      {
        heading: "Connecting the pieces",
        paragraphs: [
          "Performance, competencies and succession work best together, linked to [learning and leadership development](/services/learning-and-leadership-development-firm/) and [reward](/services/compensation-reward-and-benefits-firm/), so that development and recognition follow the same picture of performance.",
        ],
      },
    ],
  },

  "employee-experience-and-engagement-firm": {
    kicker: "Employee experience explained",
    heading: "Creating an employee experience that works in every market",
    intro:
      "Employee experience is everything people encounter at work, from the first job advert to the day they leave. When it is good, people join, stay and do their best work.",
    sections: [
      {
        heading: "Map the journey",
        paragraphs: [
          "[Employee experience strategy](/services/employee-experience-strategy-firm/) maps the moments that matter, such as onboarding, first-line management, development and recognition, and fixes the ones that let people down. In international organisations, the experience often varies more by country and manager than leaders realise.",
        ],
      },
      {
        heading: "Listen, then act",
        paragraphs: [
          "[Engagement surveys and action planning](/services/employee-engagement-surveys-and-action-planning-firm/) show what people think and where to act. Multi-country surveys need careful translation, culturally aware interpretation and local data protection compliance, and action plans owned locally.",
        ],
      },
      {
        heading: "Tell the right story",
        paragraphs: [
          "[Employer branding and EVP](/services/employer-branding-and-employee-value-proposition-evp-firm/) describes honestly why people should join and stay. The core proposition can be global, but the message has to resonate locally, as what matters to candidates in [Kenya](/ke/) may differ from [Canada](/ca/) or [Qatar](/qa/).",
        ],
      },
      {
        heading: "Wellbeing and inclusion",
        paragraphs: [
          "[Workplace wellbeing](/services/workplace-wellbeing-and-mental-health-firm/) and [diversity, equity and inclusion](/services/diversity-equity-and-inclusion-dei-consulting-firm/) are part of a good experience everywhere, but priorities and obligations differ by country. Apex HR helps set consistent standards with locally relevant support and goals.",
        ],
      },
    ],
  },

  "hr-technology-and-people-analytics-firm": {
    kicker: "HR technology explained",
    heading: "Choosing and using HR technology across countries",
    intro:
      "The right HR technology saves time, improves data and gives managers and employees better information. Getting it right in an international organisation means planning for every country on the system.",
    sections: [
      {
        heading: "Choose with your countries in mind",
        paragraphs: [
          "[HR software selection](/services/hr-software-selection-firm/) starts with clear requirements, including the countries, languages, currencies and local rules the system must support. Many systems say they are global; the selection process tests whether they work in the markets you actually operate in.",
        ],
      },
      {
        heading: "Implement carefully",
        paragraphs: [
          "[HRIS implementation](/services/hris-implementation-firm/) covers data migration, configuration, testing and training. Data protection rules apply in every country, such as the EU GDPR, South Africa's POPIA, Nigeria's Data Protection Act and Canada's PIPEDA, so access, retention and transfers of employee data need planning from the start.",
        ],
      },
      {
        heading: "Turn data into decisions",
        paragraphs: [
          "[People analytics and HR dashboards](/services/people-analytics-and-hr-dashboards-firm/) bring data together into a small set of measures leaders actually use. Consistent definitions across countries matter as much as the technology.",
        ],
      },
      {
        heading: "Transformation and AI",
        paragraphs: [
          "[Digital HR transformation](/services/digital-hr-transformation-firm/) redesigns HR processes around technology, and [AI workplace policy](/services/ai-workplace-policy-and-hr-integration-firm/) sets clear rules for how AI is used in HR, reflecting developing regulation such as the EU AI Act.",
        ],
      },
    ],
  },

  "strategic-hr-and-workforce-advisory-firm": {
    kicker: "Strategic HR explained",
    heading: "Planning your workforce and people strategy for growth",
    intro:
      "Strategic HR connects people decisions to business strategy: what capability you need, where it should be, and how you will attract, develop and keep it.",
    sections: [
      {
        heading: "A people strategy that serves the business",
        paragraphs: [
          "A [people strategy](/services/people-strategy-firm/) sets a small number of priorities, such as capability, leadership, culture or cost, and the actions that will deliver them. For international businesses, it connects a global direction with what each country needs.",
        ],
      },
      {
        heading: "Where and how to grow",
        paragraphs: [
          "[Strategic workforce planning](/services/strategic-workforce-planning-firm/) compares the capability you have with the capability you need, and decides how to close the gap: hire, develop, contract or redesign. Location choices matter: talent availability, cost and employment rules differ between countries such as [Kenya](/ke/), the [Netherlands](/nl/) and the [United States](/us/).",
        ],
      },
      {
        heading: "Moving people across borders",
        paragraphs: [
          "[Global mobility and expatriate HR management](/services/global-mobility-and-expatriate-hr-management-firm/) coordinates the HR side of international assignments and relocations, working alongside tax and immigration specialists so moves start on time and people settle well.",
        ],
      },
      {
        heading: "National workforce goals",
        paragraphs: [
          "In the Gulf, nationalisation programmes such as Saudisation, Emiratisation and Qatarization are part of strategic workforce planning. Plans that combine targets with genuine development pathways for national talent deliver better results than those that treat them as quotas.",
        ],
      },
    ],
  },
};
