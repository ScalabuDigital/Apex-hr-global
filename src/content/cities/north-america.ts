import type { CityContent } from "@/content/cities/types";

export const northAmericaCities: CityContent[] = [
  // ------------------------------------------------------------- United States
  {
    slug: "new-york",
    countrySlug: "united-states",
    name: "New York",
    area: "New York State",
    metaDescription:
      "HR, recruitment and executive search for employers in New York: financial services, media, professional services and international companies' US headquarters.",
    overview: [
      "New York is the largest financial centre in the world and the US headquarters city for many international companies. Wall Street and Midtown host banks, asset managers, insurers and law and consulting firms, while media, advertising, fashion and technology companies are spread across Manhattan and Brooklyn.",
      "For international businesses entering the US, New York is often the first office, combining access to clients and investors with a deep and diverse talent market.",
    ],
    keySectors: ["Banking and asset management", "Media and advertising", "Legal and professional services", "Technology", "Corporate headquarters"],
    talentMarket:
      "New York offers exceptional depth of talent, but also some of the highest pay expectations in the country and intense competition for senior, commercial and technical candidates. New York City requires salary ranges in job advertisements, so pay decisions need to be ready before roles are posted.",
    facts: [
      { label: "State", value: "New York" },
      { label: "Time zone", value: "Eastern Time (UTC−5, UTC−4 in summer)" },
      { label: "Business districts", value: "Midtown, Financial District, Hudson Yards, Brooklyn" },
    ],
    hiringNotes: [
      "Set pay ranges before advertising: New York City requires salary ranges in job postings.",
      "Budget for competitive benefits, especially health insurance.",
      "Check New York State and City rules on leave and background checks.",
      "Plan visa routes early for international transfers.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "salary-benchmarking-firm", "employee-benefits-consulting-firm"],
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-professional-services", "hr-company-for-it"],
    faqs: [
      { id: "nyc-transparency", question: "Do we have to publish salaries in New York job ads?", answer: "New York City and New York State require pay ranges in many job advertisements. Apex HR can help you set defensible ranges before roles go live; confirm specific obligations with US employment counsel." },
      { id: "nyc-first-office", question: "Can you help us hire our first New York team?", answer: "Yes. We can plan the roles, benchmark pay and benefits, and recruit your first hires, working alongside your US legal and payroll advisers." },
    ],
  },
  {
    slug: "atlanta",
    countrySlug: "united-states",
    name: "Atlanta",
    area: "Georgia",
    metaDescription:
      "HR and recruitment support for employers in Atlanta: logistics, payments and fintech, corporate headquarters, media and healthcare in Georgia.",
    overview: [
      "Atlanta is the economic centre of the US Southeast and home to many Fortune 500 headquarters. Hartsfield-Jackson, one of the world's busiest airports, and the region's road and rail links make it a major logistics and distribution hub.",
      "The city is known as a centre of the payments industry, sometimes called 'Transaction Alley', and has growing technology, film and television, and healthcare sectors, supported by a strong network of universities.",
    ],
    keySectors: ["Logistics and distribution", "Payments and fintech", "Corporate headquarters", "Film, TV and media", "Healthcare"],
    talentMarket:
      "Atlanta offers a large, diverse talent pool and lower costs than the coastal hubs, which attracts companies relocating or opening US operations. Competition is strongest for technology, payments and supply chain specialists, and for experienced managers in fast-growing sectors.",
    facts: [
      { label: "State", value: "Georgia" },
      { label: "Time zone", value: "Eastern Time (UTC−5, UTC−4 in summer)" },
      { label: "Business districts", value: "Midtown, Buckhead, Downtown, Perimeter Center" },
    ],
    hiringNotes: [
      "Use Atlanta's cost advantage when setting up US operations or shared services.",
      "Compete for payments and technology talent with a clear employer proposition.",
      "Plan high-volume hiring for logistics and distribution sites.",
      "Classify roles correctly as exempt or non-exempt under federal rules.",
    ],
    relatedServiceSlugs: ["recruitment-process-outsourcing-rpo-firm", "permanent-recruitment-firm", "strategic-workforce-planning-firm"],
    relatedSectorSlugs: ["hr-company-for-distribution", "hr-company-for-financial-services", "hr-company-for-it"],
    faqs: [
      { id: "atl-volume", question: "Can you support high-volume hiring for an Atlanta distribution centre?", answer: "Yes. Apex HR can run or support high-volume recruitment, including RPO, with structured screening and onboarding." },
      { id: "atl-location", question: "Why do companies choose Atlanta for US operations?", answer: "Many cite the talent pool, transport links and lower costs than coastal cities. Workforce planning can help you compare locations for your specific roles." },
    ],
  },
  {
    slug: "houston",
    countrySlug: "united-states",
    name: "Houston",
    area: "Texas",
    metaDescription:
      "HR and recruitment support for employers in Houston: energy, oilfield services, engineering, healthcare and the port economy in Texas.",
    overview: [
      "Houston is widely known as the energy capital of the world, with the headquarters and major operations of oil and gas producers, oilfield service companies and engineering firms. It is increasingly a centre for the energy transition, including hydrogen, carbon capture and renewables.",
      "The Texas Medical Center is one of the largest medical complexes in the world, and the Port of Houston and the petrochemical complex along the Ship Channel make the city a major industrial and trade hub.",
    ],
    keySectors: ["Oil, gas and energy transition", "Engineering and construction", "Healthcare and life sciences", "Petrochemicals", "Port and logistics"],
    talentMarket:
      "Houston has deep pools of engineers, project managers and energy professionals, and an international workforce with strong links to Africa, the Middle East and Latin America. Demand for technical and healthcare talent is high, and hiring in energy follows commodity cycles.",
    facts: [
      { label: "State", value: "Texas" },
      { label: "Time zone", value: "Central Time (UTC−6, UTC−5 in summer)" },
      { label: "Business districts", value: "Downtown, Energy Corridor, Galleria, Texas Medical Center" },
    ],
    hiringNotes: [
      "Plan for cyclical hiring in energy with flexible resourcing models.",
      "Verify technical licences and safety training for engineering roles.",
      "Use Houston's international talent links for global energy roles.",
      "Check Texas and federal rules; Texas has no state income tax, which affects relocation packages.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "contract-staffing-firm", "global-mobility-and-expatriate-hr-management-firm"],
    relatedSectorSlugs: ["hr-company-for-engineers", "hr-company-for-healthcare", "hr-company-for-manufacturers"],
    faqs: [
      { id: "hou-energy", question: "Can you recruit for energy and engineering roles in Houston?", answer: "Yes. Apex HR can support permanent, contract and executive hiring for energy and engineering roles, with structured technical assessment." },
      { id: "hou-mobility", question: "Can you support international moves into and out of Houston?", answer: "Yes. We coordinate the HR side of international assignments, working alongside immigration and tax specialists." },
    ],
  },
  {
    slug: "san-francisco",
    countrySlug: "united-states",
    name: "San Francisco",
    area: "California",
    metaDescription:
      "HR and recruitment support for employers in San Francisco and the Bay Area: technology, venture-backed startups, AI and life sciences in California.",
    overview: [
      "San Francisco and the wider Bay Area, including Silicon Valley, are the world's leading technology and venture capital hub. Global technology companies, AI labs and thousands of venture-backed startups are based in the region, alongside a strong life sciences and biotech cluster.",
      "Many international technology companies open their first US office in San Francisco to be close to investors, partners and talent.",
    ],
    keySectors: ["Software and AI", "Venture-backed startups", "Life sciences and biotech", "Fintech", "Professional services"],
    talentMarket:
      "The Bay Area has unmatched depth of technology talent but also very high pay expectations, equity-heavy packages and intense competition. California employment law is among the most employee-protective in the US, including pay transparency, strict overtime rules and limits on non-compete agreements.",
    facts: [
      { label: "State", value: "California" },
      { label: "Time zone", value: "Pacific Time (UTC−8, UTC−7 in summer)" },
      { label: "Business districts", value: "SoMa, Financial District, Mission Bay, Silicon Valley" },
    ],
    hiringNotes: [
      "Include pay ranges in job postings, as California law requires.",
      "Plan equity and long-term incentives as part of competitive offers.",
      "Do not rely on non-compete agreements, which are generally unenforceable in California.",
      "Apply California's overtime and meal-break rules carefully when classifying roles.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "executive-compensation-and-share-schemes-firm", "ai-workplace-policy-and-hr-integration-firm"],
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-startups-and-scale-ups", "hr-company-for-life-sciences"],
    faqs: [
      { id: "sf-equity", question: "Do we need to offer equity to hire in San Francisco?", answer: "For many technology roles, equity or long-term incentives are expected. Apex HR can help design competitive offers, working with tax and legal specialists." },
      { id: "sf-law", question: "Is California employment law different from other states?", answer: "Yes. California has stricter rules on pay transparency, overtime, breaks and restrictive covenants. Take California employment advice before finalising contracts." },
    ],
  },

  // ------------------------------------------------------------- Canada
  {
    slug: "toronto",
    countrySlug: "canada",
    name: "Toronto",
    area: "Ontario",
    metaDescription:
      "HR and recruitment support for employers in Toronto: banking, insurance, technology, professional services and corporate headquarters in Ontario.",
    overview: [
      "Toronto is Canada's largest city and its financial and business capital. Bay Street is home to the country's major banks, insurers and asset managers, and the Toronto Stock Exchange, while the city and the wider Toronto-Waterloo corridor form one of North America's largest technology hubs.",
      "Toronto is one of the world's most diverse cities, and its universities, immigration and international links make it a natural base for companies entering Canada.",
    ],
    keySectors: ["Banking, insurance and asset management", "Technology and AI", "Professional services", "Media and creative industries", "Corporate headquarters"],
    talentMarket:
      "Toronto has a deep, internationally diverse talent pool, but competition for technology, data, risk and senior finance talent is strong. Many candidates hold international qualifications, and employers who assess skills fairly widen their pool considerably.",
    facts: [
      { label: "Province", value: "Ontario" },
      { label: "Time zone", value: "Eastern Time (UTC−5, UTC−4 in summer)" },
      { label: "Business districts", value: "Financial District (Bay Street), King West, North York, Liberty Village" },
    ],
    hiringNotes: [
      "Align contracts and policies with Ontario's Employment Standards Act.",
      "Check Ontario's job-posting rules, including pay transparency requirements, before advertising.",
      "Assess international qualifications fairly to widen your talent pool.",
      "Plan work permits early when recruiting from outside Canada.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "people-analytics-and-hr-dashboards-firm", "salary-benchmarking-firm"],
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-it", "hr-company-for-professional-services"],
    faqs: [
      { id: "tor-entry", question: "Can you help us open a Toronto office?", answer: "Yes. Apex HR can plan roles, benchmark pay and benefits, recruit your first team and set up Ontario-compliant HR foundations, working alongside your Canadian legal advisers." },
      { id: "tor-international", question: "Can you recruit internationally trained professionals in Toronto?", answer: "Yes. We use skills-based assessment so international experience is recognised fairly." },
    ],
  },
  {
    slug: "vancouver",
    countrySlug: "canada",
    name: "Vancouver",
    area: "British Columbia",
    metaDescription:
      "HR and recruitment support for employers in Vancouver: technology, film and digital media, trade and logistics, and natural resources in British Columbia.",
    overview: [
      "Vancouver is Canada's Pacific gateway, with the country's largest port and strong trade links to Asia. It has a thriving technology and gaming sector, and its film and television industry is one of the largest in North America.",
      "Natural resources companies, clean technology businesses and a growing life sciences sector are also important, and many companies use Vancouver as a base for both Canadian and US west coast operations.",
    ],
    keySectors: ["Technology and gaming", "Film, TV and digital media", "Port, trade and logistics", "Natural resources and clean tech", "Life sciences"],
    talentMarket:
      "Vancouver attracts talent with its lifestyle, but high living costs affect pay expectations and relocation decisions. Competition for software, visual effects and data talent is strong, including from US employers hiring remotely.",
    facts: [
      { label: "Province", value: "British Columbia" },
      { label: "Time zone", value: "Pacific Time (UTC−8, UTC−7 in summer)" },
      { label: "Business districts", value: "Downtown, Yaletown, Mount Pleasant, Burnaby" },
    ],
    hiringNotes: [
      "Align terms with British Columbia's Employment Standards Act and pay transparency rules.",
      "Factor high living costs into pay and relocation packages.",
      "Plan project-based resourcing for film and digital media productions.",
      "Benchmark technical roles against remote US offers.",
    ],
    relatedServiceSlugs: ["contract-staffing-firm", "employer-branding-and-employee-value-proposition-evp-firm", "salary-benchmarking-firm"],
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-leisure", "hr-company-for-distribution"],
    faqs: [
      { id: "van-project", question: "Can you support project-based hiring for productions?", answer: "Yes. Apex HR can help structure contract engagements and recruit for project-based roles in film, gaming and digital media." },
      { id: "van-pay", question: "How do we set competitive pay in Vancouver?", answer: "Benchmarking against local and remote US offers, and factoring in living costs, helps set ranges that attract and keep people." },
    ],
  },
  {
    slug: "calgary",
    countrySlug: "canada",
    name: "Calgary",
    area: "Alberta",
    metaDescription:
      "HR and recruitment support for employers in Calgary: energy, engineering, agribusiness, transport and a growing technology sector in Alberta.",
    overview: [
      "Calgary is the centre of Canada's energy industry, with the head offices of many oil and gas producers, pipeline companies and engineering firms. The city is increasingly focused on energy transition, including hydrogen, carbon capture and renewables.",
      "Agribusiness, transport and logistics, financial services and a fast-growing technology sector are diversifying the economy, helped by Alberta's business-friendly tax environment.",
    ],
    keySectors: ["Oil, gas and energy transition", "Engineering", "Agribusiness", "Transport and logistics", "Technology"],
    talentMarket:
      "Calgary has a highly educated workforce with deep engineering and energy expertise. Hiring in energy follows commodity cycles, and many experienced professionals are moving into technology and clean energy roles, which creates opportunities for employers who can show long-term career paths.",
    facts: [
      { label: "Province", value: "Alberta" },
      { label: "Time zone", value: "Mountain Time (UTC−7, UTC−6 in summer)" },
      { label: "Business districts", value: "Downtown, Beltline, Quarry Park" },
    ],
    hiringNotes: [
      "Align terms with Alberta's Employment Standards Code.",
      "Plan flexible resourcing for cyclical energy projects.",
      "Recognise transferable skills of energy professionals moving into new sectors.",
      "Use Alberta's tax advantages in relocation conversations.",
    ],
    relatedServiceSlugs: ["strategic-workforce-planning-firm", "executive-search-firm", "outplacement-and-career-transition-services-firm"],
    relatedSectorSlugs: ["hr-company-for-engineers", "hr-company-for-manufacturers", "hr-company-for-it"],
    faqs: [
      { id: "cal-cycles", question: "How can we plan hiring around energy cycles?", answer: "Strategic workforce planning helps decide which roles should be permanent and which can be resourced flexibly, so you can scale up and down without losing critical skills." },
      { id: "cal-transition", question: "Can you help with restructuring and outplacement in Calgary?", answer: "Yes. Apex HR can support restructuring and provide outplacement to help affected employees move into new roles." },
    ],
  },
  {
    slug: "montreal",
    countrySlug: "canada",
    name: "Montreal",
    area: "Quebec",
    metaDescription:
      "HR and recruitment support for employers in Montreal: artificial intelligence, aerospace, gaming and life sciences, with French-language workplace requirements.",
    overview: [
      "Montreal is Quebec's largest city and a global centre for artificial intelligence research, aerospace, video games and visual effects. Its universities and research institutes have made it one of the world's leading AI hubs.",
      "Life sciences, financial services and a large creative sector are also important. As a predominantly French-speaking city, Montreal combines North American business with a distinct language and legal environment.",
    ],
    keySectors: ["Artificial intelligence and research", "Aerospace", "Video games and visual effects", "Life sciences", "Financial services"],
    talentMarket:
      "Montreal has a large bilingual talent pool and strong graduate output, with relatively lower costs than Toronto or Vancouver. Employers must plan for Quebec's French-language requirements, which affect job postings, contracts, workplace communications and HR documents.",
    facts: [
      { label: "Province", value: "Quebec" },
      { label: "Time zone", value: "Eastern Time (UTC−5, UTC−4 in summer)" },
      { label: "Business districts", value: "Downtown, Old Montreal, Mile End, Saint-Laurent" },
    ],
    hiringNotes: [
      "Plan French-language requirements for postings, contracts and workplace documents.",
      "Align terms with Quebec's labour standards and its own pension plan (QPP).",
      "Use Montreal's bilingual talent pool for North American and European roles.",
      "Benchmark AI and gaming roles against international employers.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "employee-handbooks-and-hr-policies-firm", "hr-compliance-audit-firm"],
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-life-sciences", "hr-company-for-engineers"],
    faqs: [
      { id: "mtl-french", question: "Do our HR documents need to be in French in Montreal?", answer: "Quebec's Charter of the French Language sets requirements for many workplace documents and communications. Plan for French versions and take Quebec legal advice on specific obligations." },
      { id: "mtl-ai", question: "Can you recruit AI and research talent in Montreal?", answer: "Yes. Apex HR can run structured recruitment for AI, data and research roles, competing with international employers for this talent." },
    ],
  },
];
