import type { CityContent } from "@/content/cities/types";

export const middleEastCities: CityContent[] = [
  // ------------------------------------------------------------- UAE
  {
    slug: "dubai",
    countrySlug: "united-arab-emirates",
    name: "Dubai",
    area: "Emirate of Dubai",
    metaDescription:
      "HR, recruitment and executive search for employers in Dubai: trade, finance (DIFC), real estate, hospitality, aviation and regional headquarters.",
    overview: [
      "Dubai is the Middle East's leading business and trading hub. The Dubai International Financial Centre (DIFC) hosts banks, asset managers and law firms, while free zones such as DMCC and Jebel Ali Free Zone attract trading, commodities and logistics companies from around the world.",
      "Real estate, hospitality, retail, aviation and tourism are major employers, and many international companies run their Middle East, Africa and South Asia operations from the city.",
    ],
    keySectors: ["Trade and logistics", "Financial services (DIFC)", "Real estate and construction", "Hospitality, retail and tourism", "Aviation"],
    talentMarket:
      "Dubai's workforce is almost entirely international, and employers recruit globally at every level. Packages combine salary with allowances and benefits, Emiratisation targets apply to many mainland employers, and employment law depends on whether a company is on the mainland, in a free zone or in the DIFC.",
    facts: [
      { label: "Emirate", value: "Dubai" },
      { label: "Time zone", value: "Gulf Standard Time (UTC+4)" },
      { label: "Business districts", value: "DIFC, Downtown, Business Bay, Dubai Marina, JLT" },
    ],
    hiringNotes: [
      "Confirm whether the role sits on the mainland, in a free zone or in the DIFC.",
      "Benchmark full packages, including allowances and end-of-service gratuity.",
      "Build Emiratisation into workforce plans where it applies.",
      "Allow time for visa, Emirates ID and work permit processing.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "reward-strategy-firm", "employee-benefits-consulting-firm"],
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-hospitality", "hr-company-for-construction"],
    faqs: [
      { id: "dxb-difc", question: "Is employment law different in the DIFC?", answer: "Yes. The DIFC has its own employment law and courts, separate from the federal labour law that covers mainland Dubai. Confirm which regime applies to your entity." },
      { id: "dxb-hq", question: "Can you help us set up a regional headquarters in Dubai?", answer: "Yes. Apex HR can plan roles, benchmark packages, recruit internationally and put HR foundations in place, alongside your legal and licensing advisers." },
    ],
  },
  {
    slug: "abu-dhabi",
    countrySlug: "united-arab-emirates",
    name: "Abu Dhabi",
    area: "Emirate of Abu Dhabi",
    metaDescription:
      "HR and recruitment support for employers in Abu Dhabi: energy, government, sovereign investment, ADGM financial services and healthcare.",
    overview: [
      "Abu Dhabi is the UAE's capital and its largest emirate, with an economy anchored in energy and sovereign investment. Government entities, national energy companies and investment funds are major employers, alongside a growing financial centre in Abu Dhabi Global Market (ADGM).",
      "Healthcare, education, culture and tourism, advanced technology and renewable energy, including Masdar City, are priority sectors in the emirate's diversification plans.",
    ],
    keySectors: ["Energy and petrochemicals", "Government and sovereign investment", "Financial services (ADGM)", "Healthcare and education", "Renewables and technology"],
    talentMarket:
      "Abu Dhabi employers recruit international specialists and leaders while placing strong emphasis on developing Emirati talent. Government-related entities often have structured grading, pay and benefits frameworks, and Emiratisation is a strategic priority.",
    facts: [
      { label: "Emirate", value: "Abu Dhabi" },
      { label: "Time zone", value: "Gulf Standard Time (UTC+4)" },
      { label: "Business districts", value: "Al Maryah Island (ADGM), Corniche, Masdar City, Khalifa City" },
    ],
    hiringNotes: [
      "Design development pathways for Emirati talent alongside international hiring.",
      "Use structured grading frameworks for government-related roles.",
      "Confirm whether ADGM employment regulations apply.",
      "Plan relocation and onboarding for international specialists and families.",
    ],
    relatedServiceSlugs: ["leadership-and-management-training-firm", "job-evaluation-and-pay-structures-firm", "global-mobility-and-expatriate-hr-management-firm"],
    relatedSectorSlugs: ["hr-company-for-engineers", "hr-company-for-healthcare", "hr-company-for-financial-services"],
    faqs: [
      { id: "auh-emiratisation", question: "Can you help develop Emirati leaders?", answer: "Yes. Apex HR can design leadership and development programmes that build national talent into senior roles." },
      { id: "auh-adgm", question: "Is ADGM employment law different?", answer: "Yes. ADGM has its own employment regulations and courts, separate from the federal labour law. Confirm which regime applies to your entity." },
    ],
  },
  {
    slug: "sharjah",
    countrySlug: "united-arab-emirates",
    name: "Sharjah",
    area: "Emirate of Sharjah",
    metaDescription:
      "HR and recruitment support for employers in Sharjah: manufacturing, logistics, education, healthcare and creative industries in the UAE.",
    overview: [
      "Sharjah is the UAE's third-largest emirate and an industrial, logistics and educational centre. Its free zones, including Sharjah Airport International Free Zone and Hamriyah Free Zone, host manufacturing, trading and logistics companies.",
      "University City, a strong cultural sector and growing healthcare and creative industries make Sharjah an important employment centre, and many people who work in Dubai live in Sharjah.",
    ],
    keySectors: ["Manufacturing and industry", "Logistics and free zones", "Education", "Healthcare", "Culture and creative industries"],
    talentMarket:
      "Sharjah employers need production, logistics, engineering and education professionals, and benefit from lower costs than Dubai. Many employees commute between emirates, so location, transport and working hours are important in recruitment.",
    facts: [
      { label: "Emirate", value: "Sharjah" },
      { label: "Time zone", value: "Gulf Standard Time (UTC+4)" },
      { label: "Business areas", value: "SAIF Zone, Hamriyah, Industrial Areas, University City" },
    ],
    hiringNotes: [
      "Factor cross-emirate commuting into location and working patterns.",
      "Check free zone registration requirements for employees.",
      "Use structured pay frameworks for manufacturing and operational roles.",
      "Plan visa and permit timelines for international hires.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "job-evaluation-and-pay-structures-firm", "performance-management-firm"],
    relatedSectorSlugs: ["hr-company-for-manufacturers", "hr-company-for-distribution", "hr-company-for-education"],
    faqs: [
      { id: "shj-manufacturing", question: "Can you recruit for manufacturing roles in Sharjah?", answer: "Yes. Apex HR can recruit production, engineering and operations roles, with structured assessment and onboarding." },
      { id: "shj-pay", question: "Can you help structure pay for our Sharjah workforce?", answer: "Yes. Job evaluation and pay structures bring consistency to salaries and allowances across roles." },
    ],
  },

  // ------------------------------------------------------------- Saudi Arabia
  {
    slug: "riyadh",
    countrySlug: "saudi-arabia",
    name: "Riyadh",
    area: "Riyadh Province",
    metaDescription:
      "HR, recruitment and workforce planning for employers in Riyadh: government, regional headquarters, finance, technology and Vision 2030 giga-projects.",
    overview: [
      "Riyadh is Saudi Arabia's capital and the centre of government and business. The King Abdullah Financial District, the regional headquarters programme and major Vision 2030 projects have brought international companies, investors and talent to the city.",
      "Government ministries and agencies, financial services, technology, construction and entertainment are major employers, and the city is growing rapidly as a global business destination.",
    ],
    keySectors: ["Government and public sector", "Regional headquarters", "Banking and financial services", "Technology", "Construction and giga-projects"],
    talentMarket:
      "Riyadh employers recruit international specialists and leaders while meeting Saudisation targets and developing Saudi talent. Demand for experienced managers, project leaders, technology and finance professionals is high, and the number of Saudi women in the workforce has grown significantly.",
    facts: [
      { label: "Province", value: "Riyadh Province" },
      { label: "Time zone", value: "Arabia Standard Time (UTC+3)" },
      { label: "Business districts", value: "King Abdullah Financial District, Olaya, Diplomatic Quarter, Diriyah" },
    ],
    hiringNotes: [
      "Plan Saudisation targets alongside international hiring.",
      "Use Qiwa and other government platforms for contracts and permits.",
      "Design inclusive recruitment and policies that support Saudi women in work.",
      "Coordinate across a Sunday-to-Thursday working week with global teams.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "strategic-workforce-planning-firm", "graduate-schemes-and-early-careers-design-firm"],
    relatedSectorSlugs: ["hr-company-for-construction", "hr-company-for-financial-services", "hr-company-for-it"],
    faqs: [
      { id: "ruh-rhq", question: "Can you help us staff a regional headquarters in Riyadh?", answer: "Yes. Apex HR can plan roles, recruit Saudi and international talent and build workforce plans that meet Saudisation requirements." },
      { id: "ruh-graduates", question: "Can you design a Saudi graduate programme?", answer: "Yes. We can design early-careers programmes that develop Saudi graduates into skilled professionals and future leaders." },
    ],
  },
  {
    slug: "jeddah",
    countrySlug: "saudi-arabia",
    name: "Jeddah",
    area: "Makkah Province",
    metaDescription:
      "HR and recruitment support for employers in Jeddah: trade, the Red Sea port, retail, hospitality, tourism and family business groups.",
    overview: [
      "Jeddah is Saudi Arabia's commercial gateway on the Red Sea and the main entry point for pilgrims travelling to Makkah. Jeddah Islamic Port is one of the region's busiest, and the city has a long history as a trading centre.",
      "Many of the Kingdom's established family business groups are based in Jeddah, and retail, hospitality, healthcare and the fast-growing Red Sea tourism sector are major employers.",
    ],
    keySectors: ["Trade and logistics", "Retail and consumer goods", "Hospitality and religious tourism", "Healthcare", "Family business groups"],
    talentMarket:
      "Jeddah employers need commercial, retail, hospitality and logistics talent, and family groups increasingly need professional managers and modern HR practices. Seasonal peaks linked to Hajj and Umrah affect hospitality and transport staffing.",
    facts: [
      { label: "Province", value: "Makkah Province" },
      { label: "Time zone", value: "Arabia Standard Time (UTC+3)" },
      { label: "Business areas", value: "Al Hamra, Al Rawdah, port area, Corniche" },
    ],
    hiringNotes: [
      "Plan seasonal staffing around Hajj and Umrah peaks.",
      "Bring professional managers into family groups with clear roles and governance.",
      "Meet Saudisation targets in retail and hospitality roles.",
      "Use structured onboarding for large frontline teams.",
    ],
    relatedServiceSlugs: ["organisation-design-firm", "contract-staffing-firm", "employee-experience-strategy-firm"],
    relatedSectorSlugs: ["hr-company-for-hospitality", "hr-company-for-distribution", "hr-company-for-healthcare"],
    faqs: [
      { id: "jed-family", question: "Can you help a family business group modernise HR?", answer: "Yes. Apex HR can help design structures, roles and HR processes, and recruit professional managers, while respecting the group's culture." },
      { id: "jed-seasonal", question: "Can you support seasonal hiring in Jeddah?", answer: "Yes. We can help plan and recruit for seasonal peaks, including contract staffing and onboarding." },
    ],
  },
  {
    slug: "dammam",
    countrySlug: "saudi-arabia",
    name: "Dammam",
    area: "Eastern Province",
    metaDescription:
      "HR and recruitment support for employers in Dammam and the Eastern Province: energy, petrochemicals, industrial services and engineering.",
    overview: [
      "Dammam is the capital of the Eastern Province and, with neighbouring Dhahran and Al Khobar, the centre of Saudi Arabia's energy industry. The region hosts national energy operations, petrochemical producers and a large base of engineering, construction and industrial service companies.",
      "The industrial city of Jubail, King Fahd Industrial Port and the causeway to Bahrain make the Eastern Province a major industrial and logistics region.",
    ],
    keySectors: ["Oil, gas and energy", "Petrochemicals", "Engineering and industrial services", "Construction", "Ports and logistics"],
    talentMarket:
      "Employers need engineers, technicians, HSE professionals and project managers, and compete with major energy companies for experienced Saudi talent. Saudisation and local content requirements make developing Saudi technical talent a priority.",
    facts: [
      { label: "Province", value: "Eastern Province" },
      { label: "Time zone", value: "Arabia Standard Time (UTC+3)" },
      { label: "Business areas", value: "Dammam, Al Khobar, Dhahran, Jubail Industrial City" },
    ],
    hiringNotes: [
      "Develop Saudi engineers and technicians to meet Saudisation and local content goals.",
      "Verify certifications and safety training for industrial roles.",
      "Plan project-based resourcing for construction and shutdown work.",
      "Benchmark packages against major energy employers.",
    ],
    relatedServiceSlugs: ["competency-frameworks-firm", "contract-staffing-firm", "succession-planning-and-talent-mapping-firm"],
    relatedSectorSlugs: ["hr-company-for-engineers", "hr-company-for-construction", "hr-company-for-manufacturers"],
    faqs: [
      { id: "dmm-saudi", question: "Can you help us develop Saudi technical talent?", answer: "Yes. Apex HR can design competency frameworks, development paths and succession plans that grow Saudi technicians and engineers." },
      { id: "dmm-project", question: "Can you support project staffing in the Eastern Province?", answer: "Yes. We can help structure contract engagements and recruit for project and shutdown work." },
    ],
  },

  // ------------------------------------------------------------- Qatar
  {
    slug: "doha",
    countrySlug: "qatar",
    name: "Doha",
    area: "Municipality of Doha",
    metaDescription:
      "HR, recruitment and pay-structure support for employers in Doha: energy, government, financial services (QFC), hospitality and infrastructure.",
    overview: [
      "Doha is Qatar's capital and the centre of almost all of the country's business and government activity. West Bay hosts government ministries, energy company headquarters, banks and the Qatar Financial Centre (QFC), which attracts international financial and professional services firms.",
      "Hospitality, aviation, healthcare, education and infrastructure are major employers, and the city's investment in events and tourism continues to grow.",
    ],
    keySectors: ["Energy headquarters", "Government", "Financial services (QFC)", "Hospitality and aviation", "Infrastructure and real estate"],
    talentMarket:
      "Doha's workforce is predominantly international, and employers recruit globally for technical, professional and leadership roles. Labour reforms have made it easier for employees to change jobs, increasing the importance of retention, while Qatarization goals shape senior and graduate hiring.",
    facts: [
      { label: "Municipality", value: "Doha" },
      { label: "Time zone", value: "Arabia Standard Time (UTC+3)" },
      { label: "Business districts", value: "West Bay, Msheireb, The Pearl, Old Airport area" },
    ],
    hiringNotes: [
      "Confirm whether your entity follows the Labour Law or QFC regulations.",
      "Invest in retention now that employees can change jobs more freely.",
      "Benchmark packages against other Gulf hubs.",
      "Build Qatarization into graduate and leadership plans.",
    ],
    relatedServiceSlugs: ["job-evaluation-and-pay-structures-firm", "executive-search-firm", "employee-engagement-surveys-and-action-planning-firm"],
    relatedSectorSlugs: ["hr-company-for-construction", "hr-company-for-hospitality", "hr-company-for-financial-services"],
    faqs: [
      { id: "doh-qfc", question: "Does the QFC follow different employment rules?", answer: "Yes. QFC-licensed entities follow the QFC Employment Regulations for many matters, rather than the general Labour Law." },
      { id: "doh-retention", question: "How can we improve retention in Doha?", answer: "Engagement surveys, clear pay structures, development and good line management all help. We can help you find and address the main reasons people leave." },
    ],
  },
  {
    slug: "al-rayyan",
    countrySlug: "qatar",
    name: "Al Rayyan",
    area: "Municipality of Al Rayyan",
    metaDescription:
      "HR and recruitment support for employers in Al Rayyan: education, research, sport, healthcare and public services in Qatar.",
    overview: [
      "Al Rayyan is Qatar's largest municipality by area and borders Doha to the west. It is home to Education City, which hosts branch campuses of international universities and research institutes, and to the Aspire Zone sports complex.",
      "Education, research, sport, healthcare and public services are major employers, and the municipality is growing as a residential and community centre.",
    ],
    keySectors: ["Higher education and research", "Sport and sports science", "Healthcare", "Public services", "Community and retail services"],
    talentMarket:
      "Employers in Al Rayyan recruit academics, researchers, sports professionals and support staff from around the world. Many roles are fixed-term, and relocation, family support and schooling are important factors for international candidates.",
    facts: [
      { label: "Municipality", value: "Al Rayyan" },
      { label: "Time zone", value: "Arabia Standard Time (UTC+3)" },
      { label: "Key areas", value: "Education City, Aspire Zone, Al Rayyan city centre" },
    ],
    hiringNotes: [
      "Recruit internationally for academic, research and sports roles.",
      "Plan relocation, family and schooling support for international hires.",
      "Manage fixed-term contract renewals carefully.",
      "Use structured onboarding to help new arrivals settle.",
    ],
    relatedServiceSlugs: ["global-mobility-and-expatriate-hr-management-firm", "permanent-recruitment-firm", "workplace-wellbeing-and-mental-health-firm"],
    relatedSectorSlugs: ["hr-company-for-education", "hr-company-for-healthcare", "hr-company-for-leisure"],
    faqs: [
      { id: "ray-academic", question: "Can you recruit academics and researchers for Education City?", answer: "Yes. Apex HR can search internationally for academic, research and professional staff." },
      { id: "ray-relocation", question: "Can you support relocating staff and their families?", answer: "Yes. We coordinate the HR side of relocation and onboarding, working with immigration and relocation specialists." },
    ],
  },
  {
    slug: "lusail",
    countrySlug: "qatar",
    name: "Lusail",
    area: "Municipality of Al Daayen",
    metaDescription:
      "HR and recruitment support for employers in Lusail: real estate, hospitality, events, retail and new business district offices in Qatar.",
    overview: [
      "Lusail is a new planned city north of Doha, built around a business district, marina, residential neighbourhoods and Lusail Stadium. It has become a destination for corporate offices, hotels, retail and events.",
      "Real estate, facilities management, hospitality, events and retail are the main employers, and more companies are moving offices to the city's business district.",
    ],
    keySectors: ["Real estate and facilities management", "Hospitality", "Events and entertainment", "Retail", "Corporate offices"],
    talentMarket:
      "Lusail employers need hospitality, retail, events and facilities teams, as well as property and commercial professionals. As a new city, many employers are opening new sites and need to recruit and onboard complete teams quickly.",
    facts: [
      { label: "Municipality", value: "Al Daayen" },
      { label: "Time zone", value: "Arabia Standard Time (UTC+3)" },
      { label: "Key areas", value: "Lusail Marina, Fox Hills, Lusail Boulevard, Energy City" },
    ],
    hiringNotes: [
      "Plan pre-opening recruitment for new hotels, venues and retail sites.",
      "Structure onboarding and training for complete new teams.",
      "Plan event-driven peaks with contract staffing.",
      "Benchmark packages against Doha employers.",
    ],
    relatedServiceSlugs: ["recruitment-process-outsourcing-rpo-firm", "contract-staffing-firm", "employer-branding-and-employee-value-proposition-evp-firm"],
    relatedSectorSlugs: ["hr-company-for-hospitality", "hr-company-for-leisure", "hr-company-for-construction"],
    faqs: [
      { id: "lus-opening", question: "Can you recruit a full team for a new site in Lusail?", answer: "Yes. Apex HR can plan and run pre-opening recruitment, from managers to frontline teams, including RPO for large openings." },
      { id: "lus-events", question: "Can you support event-driven staffing peaks?", answer: "Yes. We can help structure contract staffing and onboarding for events and seasonal demand." },
    ],
  },
];
