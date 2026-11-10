import type { ContentFaqItem } from "@/types/content";

/**
 * Country content for the global site's country hubs (`/{countryCode}/`)
 * and the service-in-country pages (`/services/{service}-in-{country}/`).
 * First-draft copy pending stakeholder review (CLAUDE.md section 31).
 *
 * Content rules:
 * - No physical office is claimed in any country, and no local address or
 *   phone number is invented.
 * - Each country uses genuinely distinct economic, labour-market and
 *   employment-framework context — never a country name swapped into
 *   identical copy.
 * - Laws, regulators and schemes are named because they are real, public
 *   and stable reference points. Figures that change often (minimum wages,
 *   contribution rates, quotas, thresholds, notice periods) are deliberately
 *   NOT stated; copy points employers to current official guidance and
 *   in-country counsel instead.
 * - Employment-framework copy is informational, not legal advice, and is
 *   flagged `legalReviewRequired` in spirit: it must be checked by
 *   qualified in-country counsel before launch.
 */

export interface CityProfile {
  city: string;
  /** What the city's economy and talent market are known for. */
  focus: string;
}

export interface FactItem {
  label: string;
  value: string;
}

export interface FrameworkPoint {
  title: string;
  detail: string;
}

export interface LocationContent {
  slug: string;
  region: string;
  metaDescription: string;
  coverageStatement: string;
  /** Lead paragraph on the country's economy and employer landscape. */
  localContext: string;
  /** Further paragraphs on the talent market and hiring dynamics. */
  marketOverview: string[];
  cityProfiles: CityProfile[];
  /** Quick reference facts shown in the "at a glance" card. */
  atAGlance: FactItem[];
  employmentFramework: {
    intro: string;
    points: FrameworkPoint[];
  };
  /** Practical points an employer hiring in the country should plan for. */
  hiringConsiderations: string[];
  relatedServiceSlugs: string[];
  /**
   * Why each related service matters in this country specifically — used
   * on the country hub's service cards and as the local section of each
   * service-in-country page. One entry per `relatedServiceSlugs` item.
   */
  serviceAngles: Record<string, string>;
  relatedSectorSlugs: string[];
  faqs: ContentFaqItem[];
}

const noOfficeFaq: ContentFaqItem = {
  id: "office",
  question: "Does Apex HR have a physical office in this country?",
  answer:
    "Apex HR supports employers in this country remotely and, where useful, on-site. This page does not represent a confirmed local office.",
};

const localLawFaq: ContentFaqItem = {
  id: "local-law",
  question: "Do you advise on local employment law?",
  answer:
    "Apex HR provides practical HR guidance and builds compliant people processes. Where a matter needs formal legal advice under local employment law, we work alongside qualified in-country legal counsel rather than replacing them.",
};

export const locationContent: LocationContent[] = [
  // ---------------------------------------------------------------- Nigeria
  {
    slug: "nigeria",
    region: "West Africa",
    metaDescription:
      "HR, recruitment and people support for employers in Nigeria: Lagos, Abuja and beyond, covering fintech, financial services, energy and fast-growing SMEs.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people across Nigeria, including Lagos and Abuja, and teams working across borders from Nigeria.",
    localContext:
      "Nigeria is Africa's most populous country and one of its largest economies, with a young, fast-growing workforce. Lagos anchors the country's commercial life and its technology and fintech ecosystem, while Abuja concentrates government, telecoms and development-sector employers, and the Niger Delta remains the centre of the oil and gas industry.",
    marketOverview: [
      "Demand for skilled people is intense in engineering, product, data, finance, sales and healthcare. Many experienced professionals are recruited by overseas employers or relocate abroad, so Nigerian businesses often compete with international salaries and remote-work offers for the same people. Retention, career progression and a credible employer brand matter as much as the hiring process itself.",
      "Many growing companies are formalising HR for the first time: moving from informal arrangements to written contracts, documented policies, structured pay bands and consistent performance reviews. Currency movements also put pressure on pay, so employers increasingly review salaries and benefits more often and look closely at allowances, health cover and pension arrangements.",
    ],
    cityProfiles: [
      { city: "Lagos", focus: "Commercial capital: banking, fintech, FMCG, media and professional services" },
      { city: "Abuja", focus: "Federal capital: government, telecoms, development organisations and consultancies" },
      { city: "Port Harcourt", focus: "Oil and gas, energy services, engineering and logistics" },
      { city: "Ibadan", focus: "Education, agribusiness, manufacturing and a growing services sector" },
    ],
    atAGlance: [
      { label: "Currency", value: "Nigerian naira (NGN)" },
      { label: "Time zone", value: "West Africa Time (UTC+1)" },
      { label: "Working week", value: "Monday to Friday" },
      { label: "Business language", value: "English" },
      { label: "Data protection", value: "Nigeria Data Protection Act 2023" },
    ],
    employmentFramework: {
      intro:
        "Employment in Nigeria is governed by a mix of statute, written contracts and case law, with disputes heard by the National Industrial Court of Nigeria. Key reference points include:",
      points: [
        { title: "Labour Act", detail: "Sets core minimum terms, including written particulars of employment, for many categories of worker; senior staff terms rely more heavily on the contract itself." },
        { title: "National Minimum Wage Act", detail: "Sets the national minimum wage, which has been revised in recent years; check the current rate before setting pay for entry-level roles." },
        { title: "Pension Reform Act 2014", detail: "Requires most employers to run the Contributory Pension Scheme through a licensed pension fund administrator." },
        { title: "Employee's Compensation Act 2010", detail: "Provides compensation for workplace injury and requires employer contributions to the Employees' Compensation scheme." },
        { title: "Nigeria Data Protection Act 2023", detail: "Governs how candidate and employee personal data is collected, used, stored and transferred, overseen by the Nigeria Data Protection Commission." },
        { title: "Expatriate employment", detail: "Hiring foreign nationals generally requires expatriate quota approval and the appropriate residence permits." },
      ],
    },
    hiringConsiderations: [
      "Benchmark pay against both local and international offers for in-demand skills, and plan for more frequent salary reviews.",
      "Put contracts, offer letters and handbooks in writing from day one, especially for senior hires whose terms rely on the contract.",
      "Budget for statutory items such as pension, employee compensation and training-fund obligations alongside salary.",
      "Use structured interviews and reference checks to manage high application volumes for generalist roles.",
      "Plan retention early: clear progression, learning budgets and flexible working are strong differentiators.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "hr-support-for-small-businesses-and-startups-firm", "salary-benchmarking-firm"],
    serviceAngles: {
      "permanent-recruitment-firm":
        "Strong candidates in Lagos and Abuja often hold several offers, including remote roles for overseas employers. Permanent hiring in Nigeria works best with a fast, well-structured process, a clear employer pitch and an offer that reflects the real market rather than last year's pay bands.",
      "hr-support-for-small-businesses-and-startups-firm":
        "Nigeria's startups and SMEs frequently grow headcount faster than their HR foundations. Getting contracts, pension registration, policies and a simple performance process in place early prevents disputes and makes later fundraising and due diligence smoother.",
      "salary-benchmarking-firm":
        "Inflation and currency movements make pay a moving target in Nigeria, and employers compete with international remote offers for the same talent. Regular benchmarking helps set defensible pay bands and decide where allowances, benefits or equity make the difference.",
    },
    relatedSectorSlugs: ["hr-company-for-startups-and-scale-ups", "hr-company-for-financial-services", "hr-company-for-it"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "ng-retention", question: "How can we retain skilled staff in Nigeria when overseas employers are recruiting them?", answer: "Pay matters, but it is rarely the only factor. Clear progression, regular pay reviews, learning opportunities, flexible working and good line management all reduce attrition. Apex HR can help you benchmark pay and design a retention plan for your critical roles." },
      { id: "ng-pension", question: "Do we need to provide a pension for staff in Nigeria?", answer: "Most employers must operate the Contributory Pension Scheme under the Pension Reform Act 2014 through a licensed pension fund administrator. Exact obligations depend on your headcount and circumstances, so confirm them with a qualified adviser." },
      { id: "ng-expat", question: "Can you help us hire foreign nationals into Nigeria?", answer: "Apex HR can support the recruitment and HR process. Expatriate quota and immigration applications should be handled by a qualified immigration adviser, and we can work alongside them." },
    ],
  },

  // ---------------------------------------------------------------- Kenya
  {
    slug: "kenya",
    region: "East Africa",
    metaDescription:
      "HR, recruitment and people support for employers in Kenya: Nairobi and beyond, covering technology, financial services, NGOs and regional headquarters.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people across Kenya, including Nairobi-based regional headquarters and distributed East African teams.",
    localContext:
      "Kenya is East Africa's commercial hub. Nairobi hosts regional headquarters for multinationals, a dense community of international organisations and NGOs, and a technology scene often described as 'Silicon Savannah', known worldwide for mobile money. Mombasa's port makes the coast a centre for logistics and trade.",
    marketOverview: [
      "Kenya has a well-educated, English-speaking workforce and strong graduate output, but competition is tight for experienced engineers, data specialists, finance leaders and senior managers. Many employers run teams across Uganda, Tanzania, Rwanda and beyond from Nairobi, which means HR policies, pay structures and reporting lines have to work across several countries.",
      "Statutory deductions and levies have changed in recent years, including new social health insurance and housing levy arrangements. Employers benefit from keeping payroll, contracts and policies under regular review so that changes are reflected quickly and communicated clearly to staff.",
    ],
    cityProfiles: [
      { city: "Nairobi", focus: "Regional headquarters, technology, financial services, NGOs and international organisations" },
      { city: "Mombasa", focus: "Port, logistics, shipping and tourism" },
      { city: "Kisumu", focus: "Agriculture, lake trade and a growing services sector" },
    ],
    atAGlance: [
      { label: "Currency", value: "Kenyan shilling (KES)" },
      { label: "Time zone", value: "East Africa Time (UTC+3)" },
      { label: "Working week", value: "Monday to Friday, sometimes with Saturday half-days" },
      { label: "Business language", value: "English and Swahili" },
      { label: "Data protection", value: "Data Protection Act 2019" },
    ],
    employmentFramework: {
      intro:
        "Kenya's employment framework is largely statutory, with disputes handled by the Employment and Labour Relations Court. Key reference points include:",
      points: [
        { title: "Employment Act 2007", detail: "Sets core terms including written contracts, leave, termination procedures and the requirement for fair reasons and fair process in dismissals." },
        { title: "Labour Relations Act 2007", detail: "Covers trade union recognition, collective bargaining and the handling of trade disputes." },
        { title: "Social security and health", detail: "Employers deduct and remit contributions to the National Social Security Fund and the Social Health Insurance Fund, along with the housing levy; rates have changed recently." },
        { title: "Work Injury Benefits Act 2007", detail: "Requires employers to insure employees against workplace injury and occupational disease." },
        { title: "Data Protection Act 2019", detail: "Governs the processing of candidate and employee data, overseen by the Office of the Data Protection Commissioner." },
        { title: "Work permits", detail: "Foreign nationals need an appropriate work permit, typically sponsored by the employer and issued by the Department of Immigration." },
      ],
    },
    hiringConsiderations: [
      "Use competency-based assessment to stand out in a market with many strong graduate applications for generalist roles.",
      "Design policies and pay structures that work across East Africa if the role manages teams in several countries.",
      "Keep payroll deductions and levies under review, as statutory rates have changed in recent years.",
      "Follow a documented, fair process for any dismissal; procedural fairness is closely scrutinised.",
      "Plan work permit timelines for any expatriate appointment well before the intended start date.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "employee-handbooks-and-hr-policies-firm", "leadership-and-management-training-firm"],
    serviceAngles: {
      "executive-search-firm":
        "Regional leadership roles based in Nairobi often cover several East African markets, and the shortlist may include Kenyan, diaspora and international candidates. A confidential, well-mapped search helps find leaders who combine local credibility with regional reach.",
      "employee-handbooks-and-hr-policies-firm":
        "Kenyan employment law puts weight on written contracts and fair procedure. Clear, current handbooks covering leave, discipline, grievances and termination reduce dispute risk, and help regional businesses keep policies consistent across East Africa.",
      "leadership-and-management-training-firm":
        "Fast-growing Kenyan businesses often promote strong technical performers into management. Practical leadership training in feedback, performance conversations and managing distributed teams helps new managers succeed and keeps good people from leaving.",
    },
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-charity", "hr-company-for-financial-services"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "ke-regional", question: "Can you support teams across East Africa from Kenya?", answer: "Yes. Apex HR can help design HR policies, pay structures and recruitment processes that work across Kenya and neighbouring markets, working with in-country advisers where local legal input is needed." },
      { id: "ke-dismissal", question: "What should we know before dismissing an employee in Kenya?", answer: "Kenyan law expects both a valid reason and a fair procedure, including giving the employee a chance to respond. Apex HR can help you run a documented process; take formal legal advice on specific cases." },
      { id: "ke-ngo", question: "Do you support NGOs and international organisations in Nairobi?", answer: "Yes. Apex HR can support not-for-profit and international employers with recruitment, policies and people processes suited to donor-funded and project-based teams." },
    ],
  },

  // ---------------------------------------------------------------- South Africa
  {
    slug: "south-africa",
    region: "Southern Africa",
    metaDescription:
      "HR, recruitment and reward support for employers in South Africa: Johannesburg, Cape Town and Durban, across financial services, mining, manufacturing and tech.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people across South Africa, including Johannesburg, Cape Town and Durban.",
    localContext:
      "South Africa has the continent's most developed corporate sector. Johannesburg is home to the JSE and the headquarters of banks, insurers and mining groups, Cape Town has a strong technology, financial services and tourism economy, and Durban's port supports manufacturing and logistics.",
    marketOverview: [
      "The labour market combines a deep pool of experienced professionals with significant skills shortages in engineering, technology, finance and specialist trades, alongside high unemployment overall. Employers have to balance skills scarcity with employment equity and transformation goals, which shapes how roles are designed, advertised and filled.",
      "Employee relations are highly structured. Trade unions are well established in many sectors, collective bargaining and sectoral agreements are common, and disputes are often referred to the Commission for Conciliation, Mediation and Arbitration (CCMA). Well-documented processes for discipline, performance and restructuring are essential.",
    ],
    cityProfiles: [
      { city: "Johannesburg", focus: "Financial services, mining headquarters, corporate head offices and the JSE" },
      { city: "Cape Town", focus: "Technology, financial services, tourism and creative industries" },
      { city: "Durban", focus: "Port, logistics, automotive and manufacturing" },
      { city: "Pretoria", focus: "Government, research institutions and automotive manufacturing" },
    ],
    atAGlance: [
      { label: "Currency", value: "South African rand (ZAR)" },
      { label: "Time zone", value: "South Africa Standard Time (UTC+2)" },
      { label: "Working week", value: "Monday to Friday" },
      { label: "Business language", value: "English (12 official languages)" },
      { label: "Data protection", value: "Protection of Personal Information Act (POPIA)" },
    ],
    employmentFramework: {
      intro:
        "South Africa has one of the most detailed employment frameworks on the continent, with the CCMA and the Labour Court central to dispute resolution. Key reference points include:",
      points: [
        { title: "Labour Relations Act 1995", detail: "Covers unfair dismissal, unfair labour practices, collective bargaining, strikes and retrenchment procedures." },
        { title: "Basic Conditions of Employment Act 1997", detail: "Sets minimum terms such as working hours, leave, notice and written particulars of employment." },
        { title: "Employment Equity Act 1998", detail: "Prohibits unfair discrimination and requires designated employers to prepare employment equity plans and reports." },
        { title: "B-BBEE and skills development", detail: "Broad-Based Black Economic Empowerment scoring and the Skills Development Levy influence recruitment, training and supplier decisions." },
        { title: "National Minimum Wage Act 2018", detail: "Sets a national minimum wage that is reviewed regularly; check the current rate." },
        { title: "POPIA", detail: "Governs the processing of candidate and employee personal information, overseen by the Information Regulator." },
      ],
    },
    hiringConsiderations: [
      "Align recruitment with your employment equity plan and B-BBEE objectives from the start, not after the shortlist.",
      "Follow fair, documented procedures for discipline, incapacity and retrenchment; the CCMA closely examines process.",
      "Check whether a sectoral determination or bargaining council agreement applies to the role.",
      "Benchmark scarce-skills roles carefully, as experienced candidates are also targeted by international employers.",
      "Allow time for critical skills or general work visas if you plan to hire foreign nationals.",
    ],
    relatedServiceSlugs: ["job-evaluation-and-pay-structures-firm", "executive-search-firm", "workplace-investigations-firm"],
    serviceAngles: {
      "job-evaluation-and-pay-structures-firm":
        "Employment equity reporting and equal pay for work of equal value make a defensible job evaluation framework especially important in South Africa. Structured grading and pay bands help explain pay differences and support transformation goals.",
      "executive-search-firm":
        "Senior South African appointments often need to balance scarce experience with employment equity and transformation objectives. A well-researched search maps the full market, including diaspora talent, so boards can make confident, defensible choices.",
      "workplace-investigations-firm":
        "Disputes in South Africa are frequently referred to the CCMA, where the quality of the investigation and the fairness of the process are scrutinised. An independent, well-documented investigation gives employers a sound basis for any disciplinary decision.",
    },
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-manufacturers", "hr-company-for-professional-services"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "za-equity", question: "Can you help with employment equity in our recruitment?", answer: "Yes. Apex HR can help build recruitment and promotion processes that support your employment equity plan. Formal reporting obligations and legal questions should be confirmed with qualified advisers." },
      { id: "za-ccma", question: "How can we reduce the risk of CCMA disputes?", answer: "Clear contracts, consistent policies, documented performance and disciplinary processes, and fair investigations all reduce risk. Apex HR can review your processes and support you through specific cases alongside your legal advisers." },
      { id: "za-retrenchment", question: "Do you support retrenchment and restructuring in South Africa?", answer: "Apex HR can support the HR side of restructuring, including planning, consultation and communication. The Labour Relations Act sets specific consultation requirements, so take legal advice on your circumstances." },
    ],
  },

  // ---------------------------------------------------------------- Ghana
  {
    slug: "ghana",
    region: "West Africa",
    metaDescription:
      "HR, recruitment and people support for employers in Ghana: Accra, Kumasi and Takoradi, covering financial services, energy, telecoms and growing SMEs.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people across Ghana, including Accra, Kumasi and the Western Region.",
    localContext:
      "Ghana is one of West Africa's most stable business environments and a popular regional base for international companies. Accra concentrates financial services, telecoms, professional services and technology, Kumasi is a major trading and cocoa centre, and the Western Region around Takoradi is the hub of the oil and gas industry.",
    marketOverview: [
      "Ghana's workforce is young and English-speaking, with strong graduate output from its universities. Experienced managers, engineers, finance specialists and technology professionals are in demand, and many growing businesses compete with multinationals and mining and energy companies for the same senior people.",
      "Many SMEs and family-owned businesses are professionalising HR as they grow: introducing written contracts, structured pay, performance reviews and clear policies. Pay and benefits also need regular attention, as inflation and currency movements affect what employees expect.",
    ],
    cityProfiles: [
      { city: "Accra", focus: "Financial services, telecoms, technology, professional services and regional headquarters" },
      { city: "Kumasi", focus: "Trade, cocoa, timber and the commercial hub of the Ashanti Region" },
      { city: "Takoradi", focus: "Oil and gas, port operations, mining and engineering services" },
    ],
    atAGlance: [
      { label: "Currency", value: "Ghanaian cedi (GHS)" },
      { label: "Time zone", value: "Greenwich Mean Time (UTC+0)" },
      { label: "Working week", value: "Monday to Friday" },
      { label: "Business language", value: "English" },
      { label: "Data protection", value: "Data Protection Act 2012 (Act 843)" },
    ],
    employmentFramework: {
      intro:
        "Ghana's employment relationships are governed mainly by the Labour Act, with the National Labour Commission handling many disputes. Key reference points include:",
      points: [
        { title: "Labour Act 2003 (Act 651)", detail: "Sets core terms including written statements of employment, working hours, leave, termination and protection against unfair termination." },
        { title: "National Pensions Act 2008 (Act 766)", detail: "Establishes the three-tier pension scheme, including mandatory SSNIT contributions and occupational schemes." },
        { title: "National Labour Commission", detail: "Mediates and adjudicates many employment and industrial disputes." },
        { title: "Minimum wage", detail: "A national daily minimum wage is set periodically through tripartite agreement; check the current rate." },
        { title: "Data Protection Act 2012 (Act 843)", detail: "Governs the processing of personal data, overseen by the Data Protection Commission, with which data controllers must register." },
        { title: "Foreign hires", detail: "Employing foreign nationals generally requires work and residence permits, and immigrant quotas may apply to some investors." },
      ],
    },
    hiringConsiderations: [
      "Provide a written statement of terms for every employee and keep contracts consistent across sites.",
      "Register for and remit pension contributions correctly from the start of employment.",
      "Use structured selection to compete for experienced managers against larger multinationals.",
      "Review pay and allowances regularly to keep pace with inflation and market movement.",
      "Allow time for permits and quota approvals when bringing in foreign specialists.",
    ],
    relatedServiceSlugs: ["retained-hr-services-firm", "employee-handbooks-and-hr-policies-firm", "permanent-recruitment-firm"],
    serviceAngles: {
      "retained-hr-services-firm":
        "Many Ghanaian businesses are too large to manage people informally but not yet ready for a full in-house HR team. Retained HR support gives owners and managers ongoing access to advice on contracts, discipline, performance and policy as the business grows.",
      "employee-handbooks-and-hr-policies-firm":
        "The Labour Act expects clear written terms, and consistent policies help businesses with several sites treat staff fairly. A practical handbook covering conduct, leave, grievances and termination reduces disputes and supports good management.",
      "permanent-recruitment-firm":
        "Experienced managers and specialists in Accra and the Western Region are often courted by multinationals and energy companies. A structured recruitment process with a clear employer proposition helps growing Ghanaian businesses compete for that talent.",
    },
    relatedSectorSlugs: ["hr-company-for-startups-and-scale-ups", "hr-company-for-financial-services", "hr-company-for-distribution"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "gh-pension", question: "What pension obligations apply in Ghana?", answer: "Ghana operates a three-tier pension scheme under the National Pensions Act, including mandatory SSNIT contributions. Confirm your exact obligations with a qualified adviser; Apex HR can help build them into your HR processes." },
      { id: "gh-formalise", question: "We are formalising HR for the first time. Where should we start?", answer: "Start with written contracts, a short handbook, a simple pay structure and a basic performance process. Apex HR can help you prioritise and put these in place in a practical order." },
      { id: "gh-energy", question: "Can you recruit for energy and mining roles in the Western Region?", answer: "Apex HR can support recruitment for technical, operational and leadership roles, using structured assessment suited to safety-critical and specialist positions." },
    ],
  },

  // ---------------------------------------------------------------- United States
  {
    slug: "united-states",
    region: "North America",
    metaDescription:
      "HR, recruitment and people strategy for employers in the United States, including international companies hiring their first US team.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people in the United States, including international companies building their first US team.",
    localContext:
      "The United States is the world's largest economy and its most competitive talent market. Major hubs specialise: New York in finance and media, the San Francisco Bay Area in technology, Houston in energy and healthcare, and Atlanta in logistics, fintech and corporate headquarters.",
    marketOverview: [
      "US employment practice differs sharply from most other markets. Most employment is 'at will', benefits such as health insurance are largely employer-provided, and many rules on pay, leave, background checks and pay transparency are set at state or city level rather than nationally. An employer with staff in several states can face several different rulebooks.",
      "Competition for senior, technical and commercial talent is intense, and candidates expect a fast process, transparent pay ranges where state law requires them, and a competitive benefits package. International companies entering the US often underestimate the cost of benefits and the importance of a clear US employer brand.",
    ],
    cityProfiles: [
      { city: "New York", focus: "Financial services, media, professional services and corporate headquarters" },
      { city: "Atlanta", focus: "Logistics, fintech, corporate headquarters and a large talent pool in the Southeast" },
      { city: "Houston", focus: "Energy, healthcare, engineering and the port economy" },
      { city: "San Francisco", focus: "Technology, venture-backed startups and life sciences" },
    ],
    atAGlance: [
      { label: "Currency", value: "US dollar (USD)" },
      { label: "Time zones", value: "Six, from Eastern (UTC−5) to Hawaii (UTC−10)" },
      { label: "Working week", value: "Monday to Friday" },
      { label: "Business language", value: "English" },
      { label: "Data protection", value: "No single federal law; state laws such as California's CCPA" },
    ],
    employmentFramework: {
      intro:
        "US employment law operates at federal, state and sometimes city level, with the stricter rule usually applying. Key reference points include:",
      points: [
        { title: "At-will employment", detail: "Most states allow either party to end employment without cause, subject to anti-discrimination, retaliation and contract protections." },
        { title: "Fair Labor Standards Act", detail: "Sets the federal minimum wage and overtime rules, including the distinction between exempt and non-exempt employees; many states set higher minimums." },
        { title: "Anti-discrimination laws", detail: "Title VII, the ADA and the ADEA prohibit discrimination, enforced by the Equal Employment Opportunity Commission (EEOC)." },
        { title: "Leave and benefits", detail: "The FMLA provides job-protected leave at larger employers, and the Affordable Care Act sets health coverage expectations for larger employers; many states add paid leave rules." },
        { title: "Employment eligibility", detail: "Employers must verify every new hire's identity and right to work using Form I-9, and some states require E-Verify." },
        { title: "Pay transparency", detail: "A growing number of states and cities require salary ranges in job postings or on request." },
      ],
    },
    hiringConsiderations: [
      "Decide early which states you will hire in; pay, leave, pay-transparency and background-check rules vary by state.",
      "Classify roles correctly as exempt or non-exempt, and employees versus independent contractors.",
      "Budget for a competitive benefits package, especially health insurance, on top of base salary.",
      "Complete Form I-9 verification for every hire within the required timeframe.",
      "Plan visa routes and timelines early if you intend to transfer or sponsor international staff.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "employee-benefits-consulting-firm", "strategic-workforce-planning-firm"],
    serviceAngles: {
      "executive-search-firm":
        "International companies entering the US often need a first senior hire who can build the team, navigate a new market and represent the business credibly. A targeted search maps candidates who combine US market knowledge with experience of working inside a global group.",
      "employee-benefits-consulting-firm":
        "In the US, benefits such as health insurance, retirement plans and paid leave are a major part of total reward and a deciding factor for candidates. Designing a competitive, affordable package is often one of the first decisions an employer makes in the US.",
      "strategic-workforce-planning-firm":
        "Location strategy matters in the US: hiring in one state rather than another changes pay levels, available talent and employment rules. Workforce planning helps decide where to hire, which roles to fill first and when to add local HR capability.",
    },
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-life-sciences", "hr-company-for-startups-and-scale-ups"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "us-first-hire", question: "We are expanding into the US. What should our first HR steps be?", answer: "Decide where you will hire, how you will employ people (your own entity or an employer of record), what benefits you will offer and how you will meet I-9 and payroll obligations. Apex HR can help you plan and recruit; legal and tax structuring should come from qualified US advisers." },
      { id: "us-states", question: "Do employment rules really differ between US states?", answer: "Yes. Minimum wages, paid leave, pay transparency, non-compete enforceability and background-check rules all vary by state and sometimes by city. Plan your policies around the states where you employ people." },
      { id: "us-benefits", question: "How important are benefits when recruiting in the US?", answer: "Very. Health insurance and retirement plans are major factors for US candidates, and a weak package can lose you strong hires. Apex HR can help you benchmark and design a competitive offer." },
    ],
  },

  // ---------------------------------------------------------------- Canada
  {
    slug: "canada",
    region: "North America",
    metaDescription:
      "HR, recruitment and people support for employers in Canada: Toronto, Vancouver, Calgary and Montreal, across technology, finance, energy and healthcare.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people across Canada, including Toronto, Vancouver and remote teams across provinces.",
    localContext:
      "Canada's economy is diverse and closely tied to international talent. Toronto is the country's financial and technology centre, Vancouver links Canada to Asia-Pacific trade and has strong technology and film industries, Calgary is the heart of the energy sector, and Montreal is known for artificial intelligence research, aerospace and gaming.",
    marketOverview: [
      "Immigration is central to Canada's labour market, and many employers recruit internationally for technology, healthcare, engineering and skilled trades. Candidates often have diverse international backgrounds, so recognising overseas experience and qualifications fairly is part of hiring well.",
      "Most employment law is set by each province, so an employer with staff in Ontario, British Columbia and Quebec manages different employment standards, holidays and termination rules. Quebec has its own legal tradition and strong French-language requirements in the workplace.",
    ],
    cityProfiles: [
      { city: "Toronto", focus: "Financial services, technology, professional services and corporate headquarters" },
      { city: "Vancouver", focus: "Technology, film and digital media, trade and natural resources" },
      { city: "Calgary", focus: "Energy, engineering, agribusiness and a growing technology sector" },
      { city: "Montreal", focus: "Artificial intelligence, aerospace, gaming and life sciences (French-speaking)" },
    ],
    atAGlance: [
      { label: "Currency", value: "Canadian dollar (CAD)" },
      { label: "Time zones", value: "Six, from Newfoundland (UTC−3:30) to Pacific (UTC−8)" },
      { label: "Working week", value: "Monday to Friday" },
      { label: "Business language", value: "English and French (French in Quebec)" },
      { label: "Data protection", value: "PIPEDA, plus provincial laws such as Quebec's Law 25" },
    ],
    employmentFramework: {
      intro:
        "Employment in Canada is mainly regulated by the provinces and territories, with federally regulated industries covered by the Canada Labour Code. Key reference points include:",
      points: [
        { title: "Provincial employment standards", detail: "Each province sets its own minimum wage, hours, overtime, leave, public holidays and termination notice rules." },
        { title: "Canada Labour Code", detail: "Applies to federally regulated sectors such as banking, telecoms, air transport and interprovincial transport." },
        { title: "Human rights legislation", detail: "Federal and provincial human rights codes prohibit discrimination in hiring and employment." },
        { title: "CPP/QPP and EI", detail: "Employers deduct and contribute to the Canada Pension Plan (or the Quebec Pension Plan) and Employment Insurance." },
        { title: "Quebec's Charter of the French Language", detail: "Sets requirements for French in workplace communications, contracts and job postings in Quebec." },
        { title: "Work permits", detail: "Hiring foreign nationals often requires a Labour Market Impact Assessment or an exemption route such as the Global Talent Stream." },
      ],
    },
    hiringConsiderations: [
      "Map which provinces you will employ people in and align contracts with each province's standards.",
      "Plan French-language requirements carefully for any role based in Quebec.",
      "Recognise international qualifications fairly to widen your talent pool.",
      "Check whether a role falls under federal or provincial jurisdiction.",
      "Allow time for LMIA or work permit processes when recruiting from abroad.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "global-mobility-and-expatriate-hr-management-firm", "hr-compliance-audit-firm"],
    serviceAngles: {
      "permanent-recruitment-firm":
        "Canadian hiring often draws on both local and internationally trained candidates. A structured process that assesses skills fairly, recognises overseas experience and moves quickly helps employers secure strong hires in a competitive market.",
      "global-mobility-and-expatriate-hr-management-firm":
        "Moving people into Canada involves work permits, relocation support and settling families in, often alongside provincial differences in employment terms. Coordinated mobility support helps assignments start on time and new arrivals stay.",
      "hr-compliance-audit-firm":
        "With employment standards set province by province, policies written for one province can fall short in another. A compliance audit checks contracts, handbooks and practices against the provinces where you actually employ people.",
    },
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-healthcare", "hr-company-for-financial-services"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "ca-provinces", question: "Do we need different policies for different provinces?", answer: "Often, yes. Minimum wages, holidays, overtime and termination rules vary by province. Apex HR can help you build a core policy set with provincial variations where needed." },
      { id: "ca-quebec", question: "What should we know about hiring in Quebec?", answer: "French-language requirements apply to many workplace documents and communications in Quebec, and the province has its own pension plan and legal framework. Plan language and documentation requirements early." },
      { id: "ca-immigration", question: "Can you help us recruit internationally for Canadian roles?", answer: "Apex HR can support international recruitment and the HR side of relocation. Work permit and immigration applications should be handled by a regulated immigration consultant or lawyer, and we can work alongside them." },
    ],
  },

  // ---------------------------------------------------------------- Ireland
  {
    slug: "ireland",
    region: "Western Europe",
    metaDescription:
      "HR, recruitment and reward support for employers in Ireland: Dublin, Cork and Galway, across technology, pharma, medtech and financial services.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people across Ireland, including Dublin, Cork and Galway.",
    localContext:
      "Ireland is the European base for many of the world's largest technology, pharmaceutical and medical technology companies, as well as a major international financial services centre. Dublin hosts the EMEA headquarters of global technology firms, Cork has a strong pharmaceutical and technology cluster, and Galway is a leading medtech centre.",
    marketOverview: [
      "Ireland's labour market is tight, with high demand for engineers, data and software specialists, scientists, compliance professionals and experienced managers. Multinationals set high expectations on pay and benefits, so domestic businesses and newer entrants have to compete on purpose, flexibility and career development as well as salary.",
      "Housing costs in Dublin and other cities affect where people can live and how willing they are to relocate, which makes hybrid and remote working arrangements important to many candidates. Employers also need to plan for the national auto-enrolment pension scheme and pay transparency requirements as they come into effect.",
    ],
    cityProfiles: [
      { city: "Dublin", focus: "EMEA headquarters for technology firms, financial services and professional services" },
      { city: "Cork", focus: "Pharmaceuticals, technology and manufacturing" },
      { city: "Galway", focus: "Medical technology, life sciences and digital businesses" },
    ],
    atAGlance: [
      { label: "Currency", value: "Euro (EUR)" },
      { label: "Time zone", value: "Irish Standard Time (UTC+0, UTC+1 in summer)" },
      { label: "Working week", value: "Monday to Friday" },
      { label: "Business language", value: "English" },
      { label: "Data protection", value: "EU GDPR and Data Protection Act 2018" },
    ],
    employmentFramework: {
      intro:
        "Irish employment law combines domestic legislation with EU directives, and most employment complaints are handled by the Workplace Relations Commission (WRC), with appeals to the Labour Court. Key reference points include:",
      points: [
        { title: "Terms of employment", detail: "Employers must give employees written statements of core terms at the start of employment, with further terms to follow within set timeframes." },
        { title: "Unfair Dismissals Acts", detail: "Protect employees from unfair dismissal and require fair procedures in discipline and dismissal." },
        { title: "Employment Equality Acts", detail: "Prohibit discrimination on nine grounds, including gender, age, disability, race and family status." },
        { title: "Organisation of Working Time Act 1997", detail: "Sets limits on working hours and rules on rest breaks, annual leave and public holidays." },
        { title: "Gender pay gap reporting", detail: "Employers above set headcount thresholds must publish gender pay gap reports each year." },
        { title: "Employment permits", detail: "Non-EEA nationals generally need an employment permit, such as the Critical Skills Employment Permit." },
      ],
    },
    hiringConsiderations: [
      "Benchmark pay against multinational employers if you recruit in technology, pharma or financial services.",
      "Issue written terms promptly and keep contracts aligned with Irish rather than UK or US templates.",
      "Offer hybrid or flexible arrangements; housing pressure makes them a strong attraction factor.",
      "Prepare for gender pay gap reporting and pay transparency obligations as you grow.",
      "Check employment permit eligibility early for any non-EEA candidate.",
    ],
    relatedServiceSlugs: ["salary-benchmarking-firm", "executive-search-firm", "hris-implementation-firm"],
    serviceAngles: {
      "salary-benchmarking-firm":
        "Irish pay is heavily influenced by multinational employers, especially in Dublin's technology and financial services sector. Accurate benchmarking helps you set competitive ranges, prepare for pay transparency and explain your reward choices to candidates.",
      "executive-search-firm":
        "Senior roles in Ireland often attract candidates from across Europe as well as returning Irish professionals. A well-mapped search identifies leaders who understand both the Irish market and the expectations of a global parent company.",
      "hris-implementation-firm":
        "Many Irish operations sit inside international groups with global HR systems, while growing domestic firms are moving off spreadsheets. A well-run HRIS implementation supports reporting such as gender pay gap analysis and keeps employee data GDPR-compliant.",
    },
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-life-sciences", "hr-company-for-professional-services"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "ie-uk-templates", question: "Can we use our UK or US employment contracts in Ireland?", answer: "Not safely without review. Irish law differs on written terms, working time, dismissal and other areas. Apex HR can help adapt your documents and processes; take Irish legal advice on contract wording." },
      { id: "ie-wrc", question: "What is the Workplace Relations Commission?", answer: "The WRC is the main body for employment complaints and adjudication in Ireland, covering issues such as unfair dismissal, pay and working time. Good records and fair processes are your best protection." },
      { id: "ie-permits", question: "Can you help us hire from outside the EU into Ireland?", answer: "Apex HR can support the recruitment and onboarding process. Employment permit applications should be handled with a qualified immigration adviser, and we can work alongside them." },
    ],
  },

  // ---------------------------------------------------------------- Germany
  {
    slug: "germany",
    region: "Central Europe",
    metaDescription:
      "HR, recruitment and organisation-design support for employers in Germany: Berlin, Munich, Frankfurt and Hamburg, including international companies.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people in Germany, including international businesses building or running English-speaking teams.",
    localContext:
      "Germany is Europe's largest economy and a global leader in engineering and manufacturing, with a strong network of medium-sized family businesses (the Mittelstand). Berlin is the country's startup capital, Munich combines automotive, engineering and insurance, Frankfurt is the financial centre and home of the European Central Bank, and Hamburg is a major port, logistics and media city.",
    marketOverview: [
      "Germany faces well-documented skills shortages in engineering, IT, healthcare and skilled trades, and has eased immigration rules to attract qualified workers from abroad. Candidates value job security, structured training and clear progression, and the vocational training system means many technical roles are filled by people with formal apprenticeships.",
      "Employee representation is a defining feature of German workplaces. Many companies have works councils with legal rights to information, consultation and co-determination on matters such as working hours, monitoring and restructuring, and many sectors are covered by collective agreements. International employers need to plan change with these structures in mind.",
    ],
    cityProfiles: [
      { city: "Berlin", focus: "Startups, technology, creative industries and government" },
      { city: "Munich", focus: "Automotive, engineering, insurance and technology" },
      { city: "Frankfurt", focus: "Banking, financial services, the European Central Bank and aviation" },
      { city: "Hamburg", focus: "Port, logistics, media and aviation manufacturing" },
    ],
    atAGlance: [
      { label: "Currency", value: "Euro (EUR)" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Working week", value: "Monday to Friday" },
      { label: "Business language", value: "German; English common in international firms" },
      { label: "Data protection", value: "EU GDPR and the Federal Data Protection Act (BDSG)" },
    ],
    employmentFramework: {
      intro:
        "German employment law is detailed and strongly protective of employees, with disputes heard in specialist labour courts. Key reference points include:",
      points: [
        { title: "Works Constitution Act (BetrVG)", detail: "Gives works councils rights of information, consultation and co-determination on many workplace matters." },
        { title: "Protection Against Dismissal Act (KSchG)", detail: "Requires dismissals in larger establishments to be socially justified, once an employee has completed the qualifying period." },
        { title: "Collective agreements", detail: "Sector or company collective agreements (Tarifverträge) often set pay, hours and other terms." },
        { title: "Minimum Wage Act and Working Hours Act", detail: "Set the statutory minimum wage and limits on working time and rest; check current rates." },
        { title: "Evidence Act (Nachweisgesetz)", detail: "Requires employers to document essential terms of employment in writing." },
        { title: "Skilled immigration", detail: "Routes such as the EU Blue Card and the Skilled Immigration Act help employers recruit qualified workers from outside the EU." },
      ],
    },
    hiringConsiderations: [
      "Check whether a works council exists and what consultation or approval a change requires.",
      "Confirm whether a collective agreement applies before setting pay and working hours.",
      "Plan for German-language needs, even in international teams, for HR documents and works council dealings.",
      "Value vocational qualifications and apprenticeships when assessing technical candidates.",
      "Use skilled immigration routes for hard-to-fill roles, allowing time for recognition of qualifications.",
    ],
    relatedServiceSlugs: ["organisation-design-firm", "change-management-firm", "permanent-recruitment-firm"],
    serviceAngles: {
      "organisation-design-firm":
        "In Germany, changes to structure, roles and reporting lines can trigger works council rights and collective agreement obligations. Organisation design that plans for these from the outset avoids delays and builds trust with employee representatives.",
      "change-management-firm":
        "Successful change in German workplaces depends on early, structured engagement with works councils and employees. A change plan that sets realistic timelines for consultation and co-determination is more likely to land smoothly.",
      "permanent-recruitment-firm":
        "Skills shortages in engineering, IT and the trades mean German employers often need to search beyond their region or the country. Structured recruitment that values vocational qualifications and supports international candidates widens the talent pool.",
    },
    relatedSectorSlugs: ["hr-company-for-manufacturers", "hr-company-for-engineers", "hr-company-for-it"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "de-works-council", question: "Do we need to involve a works council in changes?", answer: "If your German operation has a works council, many changes, such as working hours, monitoring tools and restructuring, require information, consultation or agreement. Apex HR can help plan the process; take German legal advice on specific obligations." },
      { id: "de-english", question: "Can we run our German team in English?", answer: "Many international companies use English day to day, but some HR documents, works council matters and communications may need to be in German. Plan for both." },
      { id: "de-international", question: "Can you help us recruit international talent into Germany?", answer: "Apex HR can support recruitment and onboarding for international hires. Visa and recognition procedures should be handled with qualified immigration advisers, and we can work alongside them." },
    ],
  },

  // ---------------------------------------------------------------- Netherlands
  {
    slug: "netherlands",
    region: "Western Europe",
    metaDescription:
      "HR, recruitment and people support for employers in the Netherlands: Amsterdam, Rotterdam, The Hague and Eindhoven, including international headquarters.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people across the Netherlands, including Amsterdam, Rotterdam and the Eindhoven region.",
    localContext:
      "The Netherlands is a European gateway for international business. Amsterdam hosts many international headquarters and a strong technology and financial sector, Rotterdam has Europe's largest port and a major logistics industry, The Hague is home to international organisations and government, and the Eindhoven region (Brainport) is a world-class high-tech manufacturing cluster.",
    marketOverview: [
      "The Dutch workforce is highly educated and widely English-speaking, which makes the Netherlands attractive to international employers. The labour market is tight, though, especially for IT, engineering, technical and logistics roles, and many employers recruit internationally through the highly skilled migrant scheme.",
      "Dutch employment law is protective: dismissal normally requires approval from the UWV employee insurance agency or the subdistrict court, and employees are entitled to a statutory transition payment on dismissal. The use of temporary contracts and self-employed contractors is also closely regulated, so the choice of contract type deserves careful thought.",
    ],
    cityProfiles: [
      { city: "Amsterdam", focus: "International headquarters, technology, finance and creative industries" },
      { city: "Rotterdam", focus: "Europe's largest port, logistics, energy and maritime industries" },
      { city: "The Hague", focus: "International organisations, government, legal and security sectors" },
      { city: "Eindhoven", focus: "High-tech manufacturing, semiconductors and design (Brainport region)" },
    ],
    atAGlance: [
      { label: "Currency", value: "Euro (EUR)" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Working week", value: "Monday to Friday; part-time work is very common" },
      { label: "Business language", value: "Dutch; English widely used" },
      { label: "Data protection", value: "EU GDPR, enforced by the Autoriteit Persoonsgegevens" },
    ],
    employmentFramework: {
      intro:
        "Dutch employment law is set mainly in the Civil Code and related acts, with strong protection against dismissal. Key reference points include:",
      points: [
        { title: "Dismissal rules", detail: "Dismissal generally requires a reasonable ground and approval from the UWV (for economic reasons) or the subdistrict court, unless agreed by mutual consent." },
        { title: "Transition payment", detail: "Employees dismissed at the employer's initiative are normally entitled to a statutory transition payment." },
        { title: "Contract types", detail: "Rules limit chains of fixed-term contracts, and the classification of self-employed contractors is under increased enforcement." },
        { title: "Works Councils Act (WOR)", detail: "Companies above a headcount threshold must set up a works council with advisory and consent rights." },
        { title: "Collective agreements (CAOs)", detail: "Many sectors have collective labour agreements that set pay and terms, some declared generally binding." },
        { title: "Highly skilled migrants", detail: "Recognised sponsors can hire non-EU talent through the highly skilled migrant scheme run by the IND." },
      ],
    },
    hiringConsiderations: [
      "Choose contract types carefully, as fixed-term chains and contractor arrangements are closely regulated.",
      "Check whether a collective labour agreement (CAO) applies to the role or sector.",
      "Become a recognised sponsor with the IND if you plan to hire highly skilled migrants regularly.",
      "Plan for part-time and flexible working requests, which are common and well protected.",
      "Build fair, documented performance processes, as dismissal without a strong file is difficult.",
    ],
    relatedServiceSlugs: ["global-mobility-and-expatriate-hr-management-firm", "contract-staffing-firm", "employee-handbooks-and-hr-policies-firm"],
    serviceAngles: {
      "global-mobility-and-expatriate-hr-management-firm":
        "Dutch employers rely heavily on international talent, from highly skilled migrants to intra-group transfers. Coordinated mobility support covers the HR side of permits, relocation and onboarding so that new arrivals become productive quickly.",
      "contract-staffing-firm":
        "Temporary and contract staffing is common in Dutch logistics, technology and project work, but the rules on fixed-term chains, agency work and self-employed contractors are strict. Getting the engagement model right protects both flexibility and compliance.",
      "employee-handbooks-and-hr-policies-firm":
        "International teams in the Netherlands need clear English-language policies that still reflect Dutch law and any collective agreement. A well-written handbook helps managers apply rules consistently and builds a fair record if problems arise.",
    },
    relatedSectorSlugs: ["hr-company-for-distribution", "hr-company-for-it", "hr-company-for-professional-services"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "nl-dismissal", question: "Is it difficult to dismiss an employee in the Netherlands?", answer: "Dismissal requires a valid ground and usually approval from the UWV or the subdistrict court, unless both sides agree a settlement. Good documentation of performance and conduct is essential. Take Dutch legal advice on individual cases." },
      { id: "nl-contractors", question: "Can we use freelancers instead of employees?", answer: "Sometimes, but the Dutch authorities are increasing enforcement against false self-employment. The working relationship must genuinely fit independent contracting. Apex HR can help you review engagement models with your advisers." },
      { id: "nl-sponsor", question: "How do we hire international talent into the Netherlands?", answer: "Employers can become recognised sponsors with the IND to use the highly skilled migrant scheme. Apex HR can support recruitment and onboarding alongside your immigration advisers." },
    ],
  },

  // ---------------------------------------------------------------- UAE
  {
    slug: "united-arab-emirates",
    region: "Gulf",
    metaDescription:
      "HR, recruitment and executive search for employers in the UAE: Dubai, Abu Dhabi and Sharjah, across finance, hospitality, construction and energy.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people across the United Arab Emirates, including Dubai, Abu Dhabi and the free zones.",
    localContext:
      "The UAE is the Middle East's leading business hub. Dubai is a global centre for trade, finance, real estate, hospitality and aviation, Abu Dhabi anchors energy, government and sovereign investment, and Sharjah has a strong manufacturing, education and logistics base. Free zones such as the DIFC and ADGM host thousands of international companies.",
    marketOverview: [
      "The workforce is overwhelmingly international, with employees drawn from South Asia, the Arab world, Africa, Europe and beyond. Employers recruit globally at every level, and candidates compare packages that typically include housing, transport and schooling allowances, annual flights and end-of-service benefits, as well as base salary.",
      "Emiratisation is a growing priority. Private-sector employers above set sizes have targets for hiring UAE nationals, supported by the Nafis programme, so workforce planning, graduate programmes and development pathways for Emirati talent are increasingly important parts of HR strategy.",
    ],
    cityProfiles: [
      { city: "Dubai", focus: "Trade, finance (DIFC), real estate, hospitality, aviation and regional headquarters" },
      { city: "Abu Dhabi", focus: "Energy, government, sovereign investment and financial services (ADGM)" },
      { city: "Sharjah", focus: "Manufacturing, education, logistics and creative industries" },
    ],
    atAGlance: [
      { label: "Currency", value: "UAE dirham (AED)" },
      { label: "Time zone", value: "Gulf Standard Time (UTC+4)" },
      { label: "Working week", value: "Typically Monday to Friday" },
      { label: "Business language", value: "Arabic (official) and English" },
      { label: "Data protection", value: "Federal PDPL (Decree-Law 45 of 2021); separate DIFC and ADGM regimes" },
    ],
    employmentFramework: {
      intro:
        "Mainland private-sector employment is governed by federal law and the Ministry of Human Resources and Emiratisation (MOHRE), while the DIFC and ADGM free zones have their own employment laws. Key reference points include:",
      points: [
        { title: "Federal Decree-Law No. 33 of 2021", detail: "The main labour law for the mainland private sector, covering contracts, working hours, leave, termination and end-of-service gratuity." },
        { title: "Fixed-term contracts", detail: "Employment contracts are now fixed-term and must be registered through MOHRE." },
        { title: "Wage Protection System", detail: "Salaries for most mainland employees must be paid through the electronic Wage Protection System." },
        { title: "Emiratisation", detail: "Private-sector employers above set sizes must meet targets for employing UAE nationals." },
        { title: "Unemployment insurance", detail: "Most employees must subscribe to the national involuntary loss of employment scheme." },
        { title: "DIFC and ADGM", detail: "These financial free zones have their own employment and data protection laws and courts." },
      ],
    },
    hiringConsiderations: [
      "Confirm whether the role sits on the mainland or in a free zone, as different laws may apply.",
      "Benchmark total packages, including allowances and end-of-service gratuity, not just base salary.",
      "Build Emiratisation into workforce plans, with genuine development pathways for UAE nationals.",
      "Allow time for visa, Emirates ID and work permit processing before the start date.",
      "Offer clear relocation and onboarding support for international hires and their families.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "reward-strategy-firm", "global-mobility-and-expatriate-hr-management-firm"],
    serviceAngles: {
      "executive-search-firm":
        "Senior UAE appointments often draw on candidates from the region, Europe, Asia and Africa, and many roles cover the wider Gulf. A thorough search maps the international market and assesses cultural fit and regional experience as carefully as technical skill.",
      "reward-strategy-firm":
        "Pay in the UAE is a package of base salary, allowances, end-of-service gratuity and benefits, and expectations differ by nationality, level and sector. A coherent reward strategy keeps packages competitive, consistent and affordable as the business grows.",
      "global-mobility-and-expatriate-hr-management-firm":
        "Almost every UAE employer relocates people into the country. Well-coordinated mobility support covers visas, onboarding, housing and family needs so that new joiners settle quickly and stay.",
    },
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-hospitality", "hr-company-for-construction"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "ae-freezone", question: "Does the same employment law apply in free zones?", answer: "Most free zones follow the federal labour law with their own registration processes, but the DIFC and ADGM have separate employment laws. Confirm which regime applies to your entity." },
      { id: "ae-emiratisation", question: "How can we meet Emiratisation targets meaningfully?", answer: "Treat Emiratisation as a talent strategy rather than a quota: create real roles, graduate programmes and development pathways. Apex HR can help design these programmes and recruit for them." },
      { id: "ae-packages", question: "What does a typical UAE employment package include?", answer: "Packages commonly combine basic salary with allowances (such as housing and transport), health insurance, annual leave flights and an end-of-service gratuity. Apex HR can benchmark packages for your roles." },
    ],
  },

  // ---------------------------------------------------------------- Saudi Arabia
  {
    slug: "saudi-arabia",
    region: "Gulf",
    metaDescription:
      "HR, recruitment and workforce planning for employers in Saudi Arabia: Riyadh, Jeddah and the Eastern Province, across construction, healthcare and tourism.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people in Saudi Arabia, including Riyadh, Jeddah and the Eastern Province.",
    localContext:
      "Saudi Arabia is the largest economy in the Middle East and is transforming rapidly under Vision 2030. Riyadh is the political and business capital and a growing base for regional headquarters, Jeddah is the commercial gateway on the Red Sea, and the Eastern Province around Dammam is the centre of the energy and petrochemicals industry. Giga-projects in tourism, construction and new cities are driving major hiring.",
    marketOverview: [
      "Workforce demand is growing fast in construction, engineering, healthcare, hospitality, tourism, technology and entertainment. Employers recruit internationally for specialist and senior roles while building the Saudi national workforce, including the rapidly growing number of Saudi women in work.",
      "Saudisation is central to HR strategy. The Nitaqat programme grades companies by the share of Saudi nationals they employ, which affects their access to visas and government services. Workforce plans, graduate programmes, training and leadership development for Saudi talent are therefore business-critical, not optional.",
    ],
    cityProfiles: [
      { city: "Riyadh", focus: "Government, regional headquarters, finance, technology and giga-project leadership" },
      { city: "Jeddah", focus: "Trade, Red Sea port, retail, tourism and the gateway to Makkah" },
      { city: "Dammam", focus: "Energy, petrochemicals, industrial services and the Eastern Province economy" },
    ],
    atAGlance: [
      { label: "Currency", value: "Saudi riyal (SAR)" },
      { label: "Time zone", value: "Arabia Standard Time (UTC+3)" },
      { label: "Working week", value: "Sunday to Thursday" },
      { label: "Business language", value: "Arabic (official); English widely used in business" },
      { label: "Data protection", value: "Personal Data Protection Law (PDPL)" },
    ],
    employmentFramework: {
      intro:
        "Private-sector employment is governed by the Saudi Labor Law and administered by the Ministry of Human Resources and Social Development (HRSD), largely through digital platforms. Key reference points include:",
      points: [
        { title: "Saudi Labor Law", detail: "Sets rules on contracts, working hours, leave, termination and end-of-service awards; it has been amended in recent years." },
        { title: "Saudisation (Nitaqat)", detail: "Grades employers by the proportion of Saudi nationals employed, affecting access to work visas and services." },
        { title: "Qiwa and Mudad", detail: "Digital platforms used for employment contracts, work permits and wage protection compliance." },
        { title: "GOSI", detail: "Employers register staff with the General Organization for Social Insurance and pay contributions." },
        { title: "Personal Data Protection Law", detail: "Governs the processing of personal data, including candidate and employee records." },
        { title: "Employment contracts", detail: "Contracts must be documented, and Arabic versions are typically required or prevail." },
      ],
    },
    hiringConsiderations: [
      "Build Saudisation targets into your workforce plan before scaling international hiring.",
      "Invest in graduate, training and leadership programmes for Saudi nationals.",
      "Register contracts and permits through the required government platforms on time.",
      "Benchmark total packages, including housing and transport allowances, for expatriate roles.",
      "Plan for a Sunday-to-Thursday working week when coordinating with teams in other regions.",
    ],
    relatedServiceSlugs: ["strategic-workforce-planning-firm", "leadership-and-management-training-firm", "executive-search-firm"],
    serviceAngles: {
      "strategic-workforce-planning-firm":
        "Saudi employers have to plan headcount growth, Saudisation targets and specialist international hiring at the same time, often for fast-moving projects. Workforce planning connects these so the business can grow without falling out of Nitaqat compliance.",
      "leadership-and-management-training-firm":
        "Developing Saudi managers and future leaders is central to Vision 2030 and to every serious Saudisation strategy. Practical leadership programmes help new managers lead diverse, international teams and build long-term local capability.",
      "executive-search-firm":
        "Senior roles in Saudi Arabia increasingly attract both returning Saudi leaders and international executives drawn by giga-project opportunities. A well-run search balances deep sector expertise with the cultural and local understanding the role needs.",
    },
    relatedSectorSlugs: ["hr-company-for-construction", "hr-company-for-healthcare", "hr-company-for-hospitality"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "sa-saudisation", question: "How does Saudisation affect our hiring?", answer: "Your Nitaqat category depends on the share of Saudi nationals you employ, which affects visas and access to services. Plan Saudi hiring and development alongside international recruitment. Apex HR can help build the plan and recruit for it." },
      { id: "sa-week", question: "What is the working week in Saudi Arabia?", answer: "The standard working week is Sunday to Thursday. International teams often agree overlap hours for collaboration with colleagues in other regions." },
      { id: "sa-women", question: "Can you help us attract Saudi women into our workforce?", answer: "Yes. Apex HR can help design inclusive recruitment, workplace policies and development pathways that support the growing participation of Saudi women in the workforce." },
    ],
  },

  // ---------------------------------------------------------------- Qatar
  {
    slug: "qatar",
    region: "Gulf",
    metaDescription:
      "HR, recruitment and pay-structure support for employers in Qatar: Doha and Lusail, across energy, construction, hospitality and financial services.",
    coverageStatement:
      "Apex HR supports employers hiring and managing people in Qatar, including Doha, Lusail and the Qatar Financial Centre.",
    localContext:
      "Qatar's economy is built on liquefied natural gas, with major ongoing investment in infrastructure, hospitality, education, healthcare and financial services. Doha is the commercial and government centre, Lusail is a new city and business district, and the Qatar Financial Centre and Qatar Science & Technology Park host many international companies.",
    marketOverview: [
      "Qatar's workforce is predominantly international, and employers recruit globally for technical, professional and leadership roles. Packages typically combine salary with housing, transport and other allowances, and employers compete with the region's other hubs for experienced talent.",
      "Labour reforms in recent years have changed how employment works in Qatar, including allowing workers to change jobs without their employer's permission and introducing a non-discriminatory minimum wage. Qatarization goals also shape workforce planning, especially in energy, finance and government-linked organisations.",
    ],
    cityProfiles: [
      { city: "Doha", focus: "Government, energy headquarters, financial services and hospitality" },
      { city: "Al Rayyan", focus: "Education, sport, residential growth and public services" },
      { city: "Lusail", focus: "New business district, real estate, hospitality and events" },
    ],
    atAGlance: [
      { label: "Currency", value: "Qatari riyal (QAR)" },
      { label: "Time zone", value: "Arabia Standard Time (UTC+3)" },
      { label: "Working week", value: "Sunday to Thursday" },
      { label: "Business language", value: "Arabic (official) and English" },
      { label: "Data protection", value: "Personal Data Privacy Protection Law No. 13 of 2016" },
    ],
    employmentFramework: {
      intro:
        "Private-sector employment in Qatar is governed by the Labour Law and overseen by the Ministry of Labour, with the Qatar Financial Centre operating its own employment regulations. Key reference points include:",
      points: [
        { title: "Labour Law No. 14 of 2004", detail: "Sets rules on contracts, working hours, leave, termination and end-of-service gratuity." },
        { title: "Labour mobility reforms", detail: "Workers can change employer and leave the country without needing their employer's permission, subject to notice requirements." },
        { title: "Minimum wage", detail: "A non-discriminatory minimum wage, including food and housing allowances where not provided, applies to all workers; check current levels." },
        { title: "Wage Protection System", detail: "Salaries must be paid electronically through the Wage Protection System." },
        { title: "Qatarization", detail: "National workforce goals encourage the employment and development of Qatari nationals, particularly in key sectors." },
        { title: "Data protection", detail: "Law No. 13 of 2016 governs the processing of personal data; the QFC has its own data protection regulations." },
      ],
    },
    hiringConsiderations: [
      "Confirm whether your entity is under the Labour Law or the QFC's employment regulations.",
      "Benchmark full packages, including allowances and end-of-service gratuity, against regional competitors.",
      "Plan for employees' greater freedom to change jobs by investing in retention and engagement.",
      "Allow time for residence permits and onboarding of international hires.",
      "Build Qatarization and national talent development into longer-term workforce plans.",
    ],
    relatedServiceSlugs: ["job-evaluation-and-pay-structures-firm", "executive-search-firm", "employee-handbooks-and-hr-policies-firm"],
    serviceAngles: {
      "job-evaluation-and-pay-structures-firm":
        "Qatari employers manage diverse international workforces where pay has often grown role by role. A structured job evaluation and grading framework brings consistency to salaries and allowances and makes pay decisions easier to explain.",
      "executive-search-firm":
        "Senior roles in Qatar often require experience of large-scale energy, infrastructure or public-sector programmes, and candidates are drawn from across the world. A focused search identifies leaders with the right sector track record and regional understanding.",
      "employee-handbooks-and-hr-policies-firm":
        "Labour reforms have changed how resignation, notice and job changes work in Qatar. Up-to-date handbooks and policies help employers apply the current rules consistently and communicate them clearly to a multinational workforce.",
    },
    relatedSectorSlugs: ["hr-company-for-construction", "hr-company-for-hospitality", "hr-company-for-professional-services"],
    faqs: [
      noOfficeFaq,
      localLawFaq,
      { id: "qa-reforms", question: "How have recent labour reforms affected employers in Qatar?", answer: "Workers can now change jobs and leave the country without their employer's permission, and a minimum wage applies to all workers. Employers should review contracts, notice periods and retention strategies accordingly." },
      { id: "qa-qfc", question: "Does the QFC have different employment rules?", answer: "Yes. Entities licensed in the Qatar Financial Centre follow the QFC Employment Regulations rather than the general Labour Law for many matters. Confirm which regime applies to you." },
      { id: "qa-week", question: "What is the working week in Qatar?", answer: "The standard working week is Sunday to Thursday, with Friday and Saturday as the weekend." },
    ],
  },
];
