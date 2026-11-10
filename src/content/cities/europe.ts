import type { CityContent } from "@/content/cities/types";

export const europeCities: CityContent[] = [
  // ------------------------------------------------------------- Ireland
  {
    slug: "dublin",
    countrySlug: "ireland",
    name: "Dublin",
    area: "County Dublin",
    metaDescription:
      "HR, recruitment and reward support for employers in Dublin: EMEA headquarters for technology firms, financial services, funds and professional services.",
    overview: [
      "Dublin is the European base for many of the world's largest technology companies, concentrated in the Docklands area often called 'Silicon Docks'. The International Financial Services Centre (IFSC) hosts banks, funds administrators, aircraft leasing and insurance businesses.",
      "Professional services, pharmaceutical head offices and a growing startup scene add to a highly international business community, and many companies run EMEA operations from the city.",
    ],
    keySectors: ["Technology EMEA headquarters", "Funds, banking and aircraft leasing", "Professional services", "Pharma and life sciences head offices", "Startups"],
    talentMarket:
      "Dublin's labour market is tight and international, with many multilingual professionals from across Europe. Multinationals set high pay and benefit expectations, and housing costs make hybrid working and relocation support important for attracting candidates.",
    facts: [
      { label: "County", value: "County Dublin" },
      { label: "Time zone", value: "Irish Standard Time (UTC+0, UTC+1 in summer)" },
      { label: "Business districts", value: "Docklands, IFSC, Dublin 2, Sandyford" },
    ],
    hiringNotes: [
      "Benchmark pay against multinational employers for technology and financial services roles.",
      "Offer hybrid working and relocation support given housing pressure.",
      "Use multilingual talent for EMEA-facing roles.",
      "Prepare for gender pay gap reporting and pay transparency as you grow.",
    ],
    relatedServiceSlugs: ["salary-benchmarking-firm", "executive-search-firm", "pay-equity-and-pay-gap-reporting-firm"],
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-financial-services", "hr-company-for-professional-services"],
    faqs: [
      { id: "dub-emea", question: "Can you recruit for EMEA roles based in Dublin?", answer: "Yes. Apex HR can recruit for EMEA and multilingual roles, searching across Ireland and Europe." },
      { id: "dub-pay-gap", question: "Can you help with gender pay gap reporting in Ireland?", answer: "Yes. We can analyse your pay data and help you understand and explain your gap; confirm reporting obligations with Irish advisers." },
    ],
  },
  {
    slug: "cork",
    countrySlug: "ireland",
    name: "Cork",
    area: "County Cork",
    metaDescription:
      "HR and recruitment support for employers in Cork: pharmaceuticals, biopharma manufacturing, technology and food and drink in Ireland's second city.",
    overview: [
      "Cork is Ireland's second city and one of Europe's leading locations for pharmaceutical and biopharmaceutical manufacturing, with major sites around Ringaskiddy and Little Island. Technology companies, food and drink producers and the Port of Cork are also significant employers.",
      "University College Cork and Munster Technological University supply science, engineering and technology graduates to local employers.",
    ],
    keySectors: ["Pharmaceutical and biopharma manufacturing", "Technology", "Food and drink", "Port and logistics", "Engineering"],
    talentMarket:
      "Cork employers compete for scientists, quality and validation specialists, engineers and technicians in regulated manufacturing, as well as technology talent. Lower living costs than Dublin help attraction, but specialist roles often require recruiting nationally and internationally.",
    facts: [
      { label: "County", value: "County Cork" },
      { label: "Time zone", value: "Irish Standard Time (UTC+0, UTC+1 in summer)" },
      { label: "Business areas", value: "City centre, Ringaskiddy, Little Island, Mahon" },
    ],
    hiringNotes: [
      "Assess regulated-environment experience for quality and manufacturing roles.",
      "Use Cork's lower living costs in your employer proposition.",
      "Recruit internationally for specialist scientific roles, allowing time for permits.",
      "Plan shift work and technical training for manufacturing teams.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "competency-frameworks-firm", "succession-planning-and-talent-mapping-firm"],
    relatedSectorSlugs: ["hr-company-for-life-sciences", "hr-company-for-manufacturers", "hr-company-for-engineers"],
    faqs: [
      { id: "cork-pharma", question: "Can you recruit for pharma manufacturing roles in Cork?", answer: "Yes. Apex HR can recruit quality, validation, engineering and production roles, with structured assessment of regulated-environment experience." },
      { id: "cork-succession", question: "How can we prepare future site leaders?", answer: "Succession planning and talent mapping identify potential leaders and the development they need to be ready." },
    ],
  },
  {
    slug: "galway",
    countrySlug: "ireland",
    name: "Galway",
    area: "County Galway",
    metaDescription:
      "HR and recruitment support for employers in Galway: medical technology, life sciences, digital businesses and tourism in the west of Ireland.",
    overview: [
      "Galway is one of the world's leading medical technology clusters, with major medical device manufacturers and a strong network of medtech startups and suppliers. The University of Galway and Atlantic Technological University support research and engineering talent.",
      "The city's digital, creative and tourism sectors also make it an attractive place to live and work in the west of Ireland.",
    ],
    keySectors: ["Medical technology", "Life sciences", "Digital and software", "Tourism and hospitality"],
    talentMarket:
      "Galway employers need engineers, quality and regulatory specialists and production staff with medtech experience. The local market is smaller than Dublin's, so employers often recruit nationally and internationally, using quality of life as a strong attraction.",
    facts: [
      { label: "County", value: "County Galway" },
      { label: "Time zone", value: "Irish Standard Time (UTC+0, UTC+1 in summer)" },
      { label: "Business areas", value: "City centre, Parkmore, Ballybrit, Mervue" },
    ],
    hiringNotes: [
      "Recruit nationally and internationally for specialist medtech roles.",
      "Use quality of life as part of your employer proposition.",
      "Assess regulatory and quality experience for medical device roles.",
      "Build development paths to retain engineers in a smaller market.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "employer-branding-and-employee-value-proposition-evp-firm", "learning-strategy-and-capability-development-firm"],
    relatedSectorSlugs: ["hr-company-for-life-sciences", "hr-company-for-engineers", "hr-company-for-manufacturers"],
    faqs: [
      { id: "gal-medtech", question: "Can you recruit medtech engineers for Galway?", answer: "Yes. Apex HR can search nationally and internationally for medtech engineering, quality and regulatory roles." },
      { id: "gal-retention", question: "How can we keep engineers in a smaller market?", answer: "Clear development paths, competitive pay and an honest employer proposition help. We can help design all three." },
    ],
  },

  // ------------------------------------------------------------- Germany
  {
    slug: "berlin",
    countrySlug: "germany",
    name: "Berlin",
    area: "State of Berlin",
    metaDescription:
      "HR and recruitment support for employers in Berlin: startups and scale-ups, technology, creative industries and international teams in Germany's capital.",
    overview: [
      "Berlin is Germany's capital and its startup capital, with a large concentration of venture-backed scale-ups in e-commerce, fintech, mobility and software. Government, associations, research institutes and creative industries are also major employers.",
      "The city's international, English-speaking tech community makes it the most common German base for international startups and for companies running English-language teams.",
    ],
    keySectors: ["Startups and scale-ups", "Software and fintech", "Government and associations", "Creative industries and media", "Research"],
    talentMarket:
      "Berlin attracts international talent, and English is widely used in technology teams, but HR documents, works council matters and some workplace communications may still need to be in German. Competition for experienced engineers and product leaders is strong, and many scale-ups need to professionalise HR quickly as they grow.",
    facts: [
      { label: "State", value: "Berlin (city-state)" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Business districts", value: "Mitte, Kreuzberg, Friedrichshain, Charlottenburg" },
    ],
    hiringNotes: [
      "Plan for German-language HR documents even in English-speaking teams.",
      "Expect works council formation as headcount grows and prepare for co-determination.",
      "Use the EU Blue Card and skilled immigration routes for international hires.",
      "Document employment terms in writing in line with the Evidence Act.",
    ],
    relatedServiceSlugs: ["hr-support-for-small-businesses-and-startups-firm", "permanent-recruitment-firm", "organisation-design-firm"],
    relatedSectorSlugs: ["hr-company-for-startups-and-scale-ups", "hr-company-for-it", "hr-company-for-professional-services"],
    faqs: [
      { id: "ber-english", question: "Can we run our Berlin team in English?", answer: "Many Berlin tech teams work in English, but some HR documents and works council dealings may need German. Plan for both." },
      { id: "ber-scale", question: "Can you help a Berlin scale-up build HR foundations?", answer: "Yes. Apex HR can help put compliant contracts, policies and processes in place and recruit your next hires, alongside German legal advisers." },
    ],
  },
  {
    slug: "munich",
    countrySlug: "germany",
    name: "Munich",
    area: "Bavaria",
    metaDescription:
      "HR and recruitment support for employers in Munich: automotive, engineering, insurance, technology and life sciences in Bavaria.",
    overview: [
      "Munich is the capital of Bavaria and one of Europe's strongest industrial and technology economies. It is home to global automotive and electrical engineering groups, major insurers and reinsurers, and a large technology and semiconductor sector.",
      "Leading universities and research institutes make Munich a centre for engineering, AI and life sciences, and it consistently ranks among Germany's most competitive talent markets.",
    ],
    keySectors: ["Automotive and engineering", "Insurance and reinsurance", "Technology and semiconductors", "Life sciences", "Aerospace"],
    talentMarket:
      "Munich has very low unemployment and high living costs, so competition for engineers, software developers and specialists is intense and pay expectations are among the highest in Germany. Many employers are covered by collective agreements and have well-established works councils.",
    facts: [
      { label: "State", value: "Bavaria" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Business areas", value: "Altstadt, Schwabing, Garching research campus, Unterföhring" },
    ],
    hiringNotes: [
      "Check collective agreement coverage before setting pay and hours.",
      "Factor Munich's high living costs into pay, housing support and relocation packages.",
      "Engage works councils early on organisational changes.",
      "Recruit internationally for engineering roles, allowing time for recognition of qualifications.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "change-management-firm", "salary-benchmarking-firm"],
    relatedSectorSlugs: ["hr-company-for-engineers", "hr-company-for-manufacturers", "hr-company-for-financial-services"],
    faqs: [
      { id: "muc-engineers", question: "Can you recruit engineers in Munich?", answer: "Yes. Apex HR can search Germany and internationally for engineering talent, with structured technical assessment." },
      { id: "muc-change", question: "How do we manage change with a works council in Munich?", answer: "Engage the works council early, plan consultation into the timeline and communicate clearly. We can help plan the process alongside your legal advisers." },
    ],
  },
  {
    slug: "frankfurt",
    countrySlug: "germany",
    name: "Frankfurt",
    area: "Hesse",
    metaDescription:
      "HR and recruitment support for employers in Frankfurt: banking, the European Central Bank, financial services, aviation and logistics in Hesse.",
    overview: [
      "Frankfurt is continental Europe's leading financial centre. It is home to the European Central Bank, the Frankfurt Stock Exchange, major German and international banks, and a large community of financial regulators and advisers.",
      "Frankfurt Airport, one of Europe's busiest, makes the city a major aviation and logistics hub, and pharmaceutical and chemical companies operate in the surrounding Rhine-Main region.",
    ],
    keySectors: ["Banking and financial services", "Regulation and central banking", "Aviation and logistics", "Pharmaceuticals and chemicals", "Professional services"],
    talentMarket:
      "Frankfurt's financial sector needs risk, compliance, regulatory and technology specialists, many of whom work in English in international teams. Senior financial roles may require regulatory fit-and-proper assessments, and competition with London, Paris and Amsterdam for talent is strong.",
    facts: [
      { label: "State", value: "Hesse" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Business districts", value: "Bankenviertel, Westend, Messe, Airport City" },
    ],
    hiringNotes: [
      "Plan senior financial appointments around regulatory approval timelines.",
      "Use Frankfurt's international, English-speaking finance community.",
      "Check collective agreements in banking before setting terms.",
      "Benchmark specialist roles against other European financial centres.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "reward-strategy-firm", "hr-compliance-audit-firm"],
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-professional-services", "hr-company-for-distribution"],
    faqs: [
      { id: "fra-regulated", question: "Can you recruit for regulated finance roles in Frankfurt?", answer: "Yes. Apex HR can run searches for risk, compliance and senior finance roles, planning around any regulatory approval process." },
      { id: "fra-reward", question: "How should we structure reward for finance roles in Germany?", answer: "Reward must meet regulatory expectations on remuneration in financial services and any collective agreements. We can help design a compliant, competitive approach with your advisers." },
    ],
  },
  {
    slug: "hamburg",
    countrySlug: "germany",
    name: "Hamburg",
    area: "State of Hamburg",
    metaDescription:
      "HR and recruitment support for employers in Hamburg: port and logistics, aviation manufacturing, media, trade and renewable energy in northern Germany.",
    overview: [
      "Hamburg is Germany's second-largest city and home to one of Europe's largest ports, making it a centre for shipping, logistics and international trade. Aircraft manufacturing, media and publishing, and consumer goods are also major industries.",
      "Northern Germany's leadership in wind energy has made Hamburg a hub for renewable energy companies and the services that support them.",
    ],
    keySectors: ["Port, shipping and logistics", "Aviation manufacturing", "Media and publishing", "Renewable energy", "Trade and consumer goods"],
    talentMarket:
      "Hamburg employers need logistics specialists, engineers, technicians and commercial talent, as well as skilled trades for manufacturing and energy. The city's international trade links bring an international workforce, and many employers are covered by collective agreements.",
    facts: [
      { label: "State", value: "Hamburg (city-state)" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Business districts", value: "HafenCity, Altstadt, Finkenwerder, City Nord" },
    ],
    hiringNotes: [
      "Check collective agreements in logistics and manufacturing.",
      "Plan shift and operational workforce needs around port activity.",
      "Recruit skilled trades and engineers for renewable energy projects.",
      "Consult works councils on changes to working time and structure.",
    ],
    relatedServiceSlugs: ["contract-staffing-firm", "strategic-workforce-planning-firm", "industrial-relations-and-trade-union-negotiations-firm"],
    relatedSectorSlugs: ["hr-company-for-distribution", "hr-company-for-engineers", "hr-company-for-manufacturers"],
    faqs: [
      { id: "ham-logistics", question: "Can you recruit for logistics and port roles in Hamburg?", answer: "Yes. Apex HR can support permanent and contract hiring for logistics, operations and technical roles." },
      { id: "ham-energy", question: "Can you help us staff renewable energy projects?", answer: "Yes. Workforce planning and recruitment can help secure engineers, technicians and project managers for renewable energy projects." },
    ],
  },

  // ------------------------------------------------------------- Netherlands
  {
    slug: "amsterdam",
    countrySlug: "netherlands",
    name: "Amsterdam",
    area: "North Holland",
    metaDescription:
      "HR and recruitment support for employers in Amsterdam: international headquarters, technology, finance and creative industries in the Netherlands.",
    overview: [
      "Amsterdam is the Netherlands' capital and a leading European location for international headquarters. The Zuidas business district hosts banks, law firms and corporate offices, while technology, e-commerce and payments companies have made the city a major European tech hub.",
      "Schiphol Airport connects Amsterdam to the world, and creative, media and advertising agencies add to a highly international business community.",
    ],
    keySectors: ["International headquarters", "Technology and payments", "Banking and finance", "Creative industries", "Professional services"],
    talentMarket:
      "Amsterdam's workforce is highly international and widely English-speaking, but the market is tight and housing is expensive. Many employers recruit internationally using the highly skilled migrant scheme, and the choice of contract type deserves care under Dutch employment law.",
    facts: [
      { label: "Province", value: "North Holland" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Business districts", value: "Zuidas, Centrum, Amsterdam Noord, Sloterdijk" },
    ],
    hiringNotes: [
      "Become a recognised sponsor with the IND to hire highly skilled migrants.",
      "Offer relocation and housing support given the tight housing market.",
      "Choose fixed-term and contractor arrangements carefully under Dutch rules.",
      "Prepare English-language policies that still reflect Dutch law.",
    ],
    relatedServiceSlugs: ["global-mobility-and-expatriate-hr-management-firm", "employee-handbooks-and-hr-policies-firm", "executive-search-firm"],
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-financial-services", "hr-company-for-professional-services"],
    faqs: [
      { id: "ams-hq", question: "Can you help us set up a European headquarters in Amsterdam?", answer: "Yes. Apex HR can help plan roles, recruit internationally and put Dutch-compliant HR foundations in place, alongside your legal and tax advisers." },
      { id: "ams-relocation", question: "Can you support international relocations to Amsterdam?", answer: "Yes. We coordinate the HR side of relocations, including permits, onboarding and settling in, working with immigration specialists." },
    ],
  },
  {
    slug: "rotterdam",
    countrySlug: "netherlands",
    name: "Rotterdam",
    area: "South Holland",
    metaDescription:
      "HR and recruitment support for employers in Rotterdam: Europe's largest port, logistics, maritime, energy and chemicals in South Holland.",
    overview: [
      "Rotterdam is home to Europe's largest port and is a global centre for shipping, logistics, maritime services, energy and chemicals. The port area and surrounding industrial zones employ large numbers of people in operations, engineering and supply chain.",
      "The city is also investing heavily in the energy transition, including hydrogen and offshore wind, and has a growing technology and innovation sector.",
    ],
    keySectors: ["Port, shipping and logistics", "Maritime services", "Energy and chemicals", "Energy transition", "Engineering"],
    talentMarket:
      "Rotterdam employers need logistics planners, engineers, technicians and operational staff, often working shifts. Many sectors are covered by collective labour agreements, and temporary and agency work are common, which makes contract structure and compliance important.",
    facts: [
      { label: "Province", value: "South Holland" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Business areas", value: "Port of Rotterdam, Kop van Zuid, city centre, Maasvlakte" },
    ],
    hiringNotes: [
      "Check collective labour agreements (CAOs) for logistics and industrial roles.",
      "Structure agency and temporary work in line with Dutch rules.",
      "Plan shift patterns and safety training for operational teams.",
      "Recruit engineers for energy transition projects early.",
    ],
    relatedServiceSlugs: ["contract-staffing-firm", "strategic-workforce-planning-firm", "workplace-wellbeing-and-mental-health-firm"],
    relatedSectorSlugs: ["hr-company-for-distribution", "hr-company-for-engineers", "hr-company-for-manufacturers"],
    faqs: [
      { id: "rtm-agency", question: "Can we use agency staff at our Rotterdam operation?", answer: "Yes, within Dutch rules on agency work and any applicable collective agreement. We can help structure contract staffing that stays compliant." },
      { id: "rtm-shifts", question: "Can you help us support shift workers' wellbeing?", answer: "Yes. Apex HR can help design wellbeing approaches for shift-based operational teams." },
    ],
  },
  {
    slug: "the-hague",
    countrySlug: "netherlands",
    name: "The Hague",
    area: "South Holland",
    metaDescription:
      "HR and recruitment support for employers in The Hague: international organisations, government, legal, security and peace and justice institutions.",
    overview: [
      "The Hague is the seat of the Dutch government and parliament and an international city of peace and justice, home to the International Court of Justice, the International Criminal Court and many other international organisations.",
      "Legal services, security and cyber-security, energy companies and NGOs are significant employers, and the city has a large international community.",
    ],
    keySectors: ["International organisations", "Government", "Legal services", "Security and cyber-security", "NGOs"],
    talentMarket:
      "Employers in The Hague recruit legal, policy, security and programme specialists, many from abroad. International organisations often have their own employment frameworks, while private employers follow Dutch law, so clear contracts and policies are essential.",
    facts: [
      { label: "Province", value: "South Holland" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Business districts", value: "Centrum, Beatrixkwartier, Scheveningen" },
    ],
    hiringNotes: [
      "Clarify whether Dutch law or an organisation's own framework applies to each role.",
      "Recruit internationally for legal and policy specialists.",
      "Plan security vetting time for sensitive roles.",
      "Support relocation and onboarding for international hires.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "global-mobility-and-expatriate-hr-management-firm", "workplace-investigations-firm"],
    relatedSectorSlugs: ["hr-company-for-charity", "hr-company-for-professional-services", "hr-company-for-it"],
    faqs: [
      { id: "hag-international", question: "Do you support international organisations in The Hague?", answer: "Yes. Apex HR can support recruitment, investigations and HR processes, working within each organisation's own framework." },
      { id: "hag-legal", question: "Can you recruit legal and policy specialists?", answer: "Yes. We can search internationally for legal, policy and programme roles." },
    ],
  },
  {
    slug: "eindhoven",
    countrySlug: "netherlands",
    name: "Eindhoven",
    area: "North Brabant",
    metaDescription:
      "HR and recruitment support for employers in Eindhoven: high-tech manufacturing, semiconductor equipment, design and engineering in the Brainport region.",
    overview: [
      "Eindhoven is the centre of the Brainport region, one of Europe's leading high-tech manufacturing ecosystems. It is home to world-leading semiconductor equipment, electronics and precision engineering companies and a dense network of suppliers.",
      "Eindhoven University of Technology and the city's design tradition, including Dutch Design Week, support a strong engineering, research and design community.",
    ],
    keySectors: ["Semiconductor equipment", "High-tech manufacturing", "Precision engineering", "Design", "Research and development"],
    talentMarket:
      "Brainport companies compete fiercely for engineers, software developers and technicians, and recruit heavily from abroad. Supporting international hires and their families with relocation, housing and onboarding is a major part of hiring successfully in the region.",
    facts: [
      { label: "Province", value: "North Brabant" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Business areas", value: "High Tech Campus, Strijp-S, TU/e campus, Veldhoven" },
    ],
    hiringNotes: [
      "Recruit internationally for engineers, using the highly skilled migrant scheme.",
      "Support relocating families with housing, schooling and onboarding.",
      "Use technical assessment designed with your engineering leads.",
      "Build development paths to retain engineers in a highly competitive cluster.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "global-mobility-and-expatriate-hr-management-firm", "competency-frameworks-firm"],
    relatedSectorSlugs: ["hr-company-for-engineers", "hr-company-for-manufacturers", "hr-company-for-it"],
    faqs: [
      { id: "ein-engineers", question: "Can you recruit engineers for Brainport companies?", answer: "Yes. Apex HR can search internationally for engineering and technical talent and support relocation and onboarding." },
      { id: "ein-retention", question: "How can we keep engineers in such a competitive market?", answer: "Clear technical career paths, competency frameworks and strong onboarding help. We can design these with your engineering leaders." },
    ],
  },
];
