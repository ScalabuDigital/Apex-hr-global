import type { CityContent } from "@/content/cities/types";

export const africaCities: CityContent[] = [
  // ------------------------------------------------------------- Nigeria
  {
    slug: "lagos",
    countrySlug: "nigeria",
    name: "Lagos",
    area: "Lagos State",
    metaDescription:
      "HR and recruitment support for employers in Lagos: fintech, banking, FMCG, media and professional services across Victoria Island, Lekki, Ikeja and Yaba.",
    overview: [
      "Lagos is Nigeria's commercial capital and one of Africa's largest cities. Banks, insurers, fintechs, consumer-goods companies, media groups and professional services firms are concentrated on Victoria Island, Ikoyi and Lekki, while Ikeja and the Apapa port area anchor manufacturing, logistics and trade.",
      "Yaba and the wider mainland are home to much of Nigeria's technology startup scene, and many of West Africa's best-funded fintech and e-commerce companies are headquartered in the city. Lagos is often the first Nigerian location for international companies entering the market.",
    ],
    keySectors: ["Banking and fintech", "Consumer goods and retail", "Technology and startups", "Media and creative industries", "Ports, logistics and trade"],
    talentMarket:
      "Lagos has Nigeria's deepest pool of experienced professionals, but competition for engineers, product managers, finance specialists and senior sales leaders is intense, and many are also approached by overseas employers offering remote roles. Commuting times strongly affect where people will work, so hybrid arrangements and office location matter in hiring decisions.",
    facts: [
      { label: "State", value: "Lagos State" },
      { label: "Time zone", value: "West Africa Time (UTC+1)" },
      { label: "Business districts", value: "Victoria Island, Ikoyi, Lekki, Ikeja, Yaba" },
    ],
    hiringNotes: [
      "Factor commute and traffic into office location and working patterns; hybrid work is a strong attraction.",
      "Move quickly: strong technical and finance candidates often hold several offers at once.",
      "Review pay bands regularly, as inflation and currency movements change expectations.",
      "Build retention plans for critical roles targeted by overseas and remote employers.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "salary-benchmarking-firm", "employer-branding-and-employee-value-proposition-evp-firm"],
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-it", "hr-company-for-startups-and-scale-ups"],
    faqs: [
      { id: "lagos-tech", question: "Can you recruit engineers and product talent in Lagos?", answer: "Yes. Apex HR can run structured recruitment for technology, product and data roles in Lagos, with a fast process and a clear employer pitch to compete for in-demand candidates." },
      { id: "lagos-entry", question: "We are opening our first office in Lagos. Can you help?", answer: "Yes. We can help plan your first roles, benchmark pay, recruit the team and put contracts and policies in place. Entity, tax and immigration questions should go to qualified Nigerian advisers, and we work alongside them." },
    ],
  },
  {
    slug: "abuja",
    countrySlug: "nigeria",
    name: "Abuja",
    area: "Federal Capital Territory",
    metaDescription:
      "HR and recruitment support for employers in Abuja: government-facing businesses, telecoms, development organisations, consultancies and professional services.",
    overview: [
      "Abuja is Nigeria's federal capital and home to federal ministries, agencies, the National Assembly and most foreign embassies. Its economy is shaped by government, regulators and the organisations that work with them, including consultancies, telecoms companies, construction firms and development partners.",
      "International NGOs, multilateral organisations and donor-funded programmes have a large presence in the city, alongside a growing private sector in real estate, hospitality and professional services.",
    ],
    keySectors: ["Government and public-sector suppliers", "Development organisations and NGOs", "Telecoms", "Construction and real estate", "Consulting and professional services"],
    talentMarket:
      "Abuja employers compete for policy, programme management, finance, monitoring and evaluation, and stakeholder-relations talent. Many roles are project-based and tied to funding cycles, so fixed-term contracts, clear job descriptions and fair pay between national and international staff are common HR priorities.",
    facts: [
      { label: "Territory", value: "Federal Capital Territory (FCT)" },
      { label: "Time zone", value: "West Africa Time (UTC+1)" },
      { label: "Business districts", value: "Central Business District, Maitama, Wuse, Garki" },
    ],
    hiringNotes: [
      "Use fixed-term contracts carefully and plan renewals around project and funding timelines.",
      "Assess stakeholder and government-relations experience alongside technical skills.",
      "Keep pay structures transparent where national and international staff work together.",
      "Plan security and travel policies for staff working outside the capital.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "employee-handbooks-and-hr-policies-firm", "job-evaluation-and-pay-structures-firm"],
    relatedSectorSlugs: ["hr-company-for-charity", "hr-company-for-professional-services", "hr-company-for-construction"],
    faqs: [
      { id: "abuja-ngo", question: "Do you support NGOs and development programmes in Abuja?", answer: "Yes. Apex HR can support recruitment, contracts, policies and pay structures for donor-funded and project-based teams." },
      { id: "abuja-senior", question: "Can you recruit senior leaders with government-facing experience?", answer: "Yes. We can run confidential searches for leaders who combine sector expertise with the stakeholder experience Abuja roles often require." },
    ],
  },
  {
    slug: "port-harcourt",
    countrySlug: "nigeria",
    name: "Port Harcourt",
    area: "Rivers State",
    metaDescription:
      "HR and recruitment support for employers in Port Harcourt: oil and gas, energy services, engineering, marine and logistics across Rivers State.",
    overview: [
      "Port Harcourt is the commercial centre of the Niger Delta and the hub of Nigeria's oil and gas industry. Operators, oilfield service companies, engineering contractors and marine and logistics businesses are concentrated in and around the city and the nearby Onne port.",
      "The energy transition, gas development and local content requirements are shaping the industry, with growing demand for Nigerian engineers, technicians and managers in roles that were once filled by expatriates.",
    ],
    keySectors: ["Oil and gas", "Energy and engineering services", "Marine and offshore", "Ports and logistics", "Construction"],
    talentMarket:
      "Employers compete for experienced engineers, HSE professionals, technicians and project managers, and many skilled people work on rotation or move between operators and contractors. Safety-critical roles demand rigorous assessment, certification checks and structured onboarding.",
    facts: [
      { label: "State", value: "Rivers State" },
      { label: "Time zone", value: "West Africa Time (UTC+1)" },
      { label: "Business areas", value: "GRA, Trans-Amadi, Onne port" },
    ],
    hiringNotes: [
      "Verify technical certifications and safety training for every safety-critical role.",
      "Plan rotation patterns, allowances and welfare for field and offshore staff.",
      "Build local talent pipelines to meet Nigerian content expectations.",
      "Use clear, documented processes for discipline and performance in unionised environments.",
    ],
    relatedServiceSlugs: ["contract-staffing-firm", "strategic-workforce-planning-firm", "competency-frameworks-firm"],
    relatedSectorSlugs: ["hr-company-for-engineers", "hr-company-for-construction", "hr-company-for-manufacturers"],
    faqs: [
      { id: "phc-rotation", question: "Can you support contract and rotational staffing in Port Harcourt?", answer: "Yes. Apex HR can help structure contract engagements and recruit for project and rotational roles, with screening suited to safety-critical work." },
      { id: "phc-local", question: "Can you help us build a local talent pipeline?", answer: "Yes. We can help design graduate and technical development programmes and competency frameworks that grow Nigerian talent into senior technical roles." },
    ],
  },
  {
    slug: "ibadan",
    countrySlug: "nigeria",
    name: "Ibadan",
    area: "Oyo State",
    metaDescription:
      "HR and recruitment support for employers in Ibadan: education, agribusiness, manufacturing, healthcare and growing SMEs across Oyo State.",
    overview: [
      "Ibadan is the capital of Oyo State and one of Nigeria's largest cities. It is home to the University of Ibadan, major research institutions and a long-established trading economy, and its location on the Lagos-Ibadan corridor has attracted manufacturing, warehousing and agro-processing investment.",
      "Lower operating costs than Lagos make Ibadan attractive for back-office, manufacturing and distribution operations, and many family businesses and SMEs in the city are professionalising as they grow.",
    ],
    keySectors: ["Education and research", "Agribusiness and food processing", "Manufacturing and distribution", "Healthcare", "Trade and SMEs"],
    talentMarket:
      "Ibadan has a strong supply of graduates from its universities, but experienced managers and specialists are often drawn to Lagos. Employers who offer clear progression, training and stable employment can build loyal teams, especially in operations, finance and administration.",
    facts: [
      { label: "State", value: "Oyo State" },
      { label: "Time zone", value: "West Africa Time (UTC+1)" },
      { label: "Business areas", value: "Bodija, Ring Road, Dugbe, Lagos-Ibadan expressway corridor" },
    ],
    hiringNotes: [
      "Tap the local graduate pool with structured graduate and trainee programmes.",
      "Offer clear progression to keep experienced managers from moving to Lagos.",
      "Put written contracts and basic policies in place as family businesses grow.",
      "Consider Ibadan for operations and support roles that serve a Lagos head office.",
    ],
    relatedServiceSlugs: ["hr-support-for-small-businesses-and-startups-firm", "graduate-schemes-and-early-careers-design-firm", "retained-hr-services-firm"],
    relatedSectorSlugs: ["hr-company-for-education", "hr-company-for-manufacturers", "hr-company-for-distribution"],
    faqs: [
      { id: "ibadan-graduates", question: "Can you help us recruit graduates in Ibadan?", answer: "Yes. Apex HR can design a graduate or trainee programme and run fair, structured selection to make the most of Ibadan's graduate talent." },
      { id: "ibadan-sme", question: "We are a growing family business. Where should HR start?", answer: "Start with written contracts, a short handbook and a simple performance process. Retained HR support can then provide advice as you grow." },
    ],
  },

  // ------------------------------------------------------------- Kenya
  {
    slug: "nairobi",
    countrySlug: "kenya",
    name: "Nairobi",
    area: "Nairobi County",
    metaDescription:
      "HR and recruitment support for employers in Nairobi: regional headquarters, technology, financial services, NGOs and UN agencies in Westlands and Upper Hill.",
    overview: [
      "Nairobi is East Africa's leading business city and a regional base for multinationals, banks, technology companies and international organisations. The United Nations has major offices in Gigiri, and Westlands and Upper Hill host many corporate and regional headquarters.",
      "The city's technology ecosystem, known for mobile money and fintech innovation, has attracted venture-backed startups and global technology firms, while NGOs and development organisations run programmes across the region from Nairobi.",
    ],
    keySectors: ["Regional headquarters", "Technology and fintech", "Banking and insurance", "NGOs and international organisations", "Professional services"],
    talentMarket:
      "Nairobi has a deep pool of educated, English-speaking professionals, and many roles attract large numbers of applicants. The real competition is for experienced engineers, data and product specialists, finance leaders and regional managers who can lead teams across several East African countries.",
    facts: [
      { label: "County", value: "Nairobi County" },
      { label: "Time zone", value: "East Africa Time (UTC+3)" },
      { label: "Business districts", value: "Westlands, Upper Hill, CBD, Kilimani, Gigiri" },
    ],
    hiringNotes: [
      "Use structured screening to manage high application volumes for generalist roles.",
      "Design regional roles with clear reporting lines and policies that work across East Africa.",
      "Keep payroll deductions and levies up to date as statutory rates change.",
      "Allow time for work permits when appointing expatriate leaders.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "recruitment-process-outsourcing-rpo-firm", "leadership-and-management-training-firm"],
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-charity", "hr-company-for-financial-services"],
    faqs: [
      { id: "nairobi-regional", question: "Can you recruit regional leaders based in Nairobi?", answer: "Yes. Apex HR can run executive searches for regional roles, mapping candidates across Kenya, the wider region and the diaspora." },
      { id: "nairobi-volume", question: "How do you handle large applicant volumes in Nairobi?", answer: "We use clear criteria, structured screening and assessment so strong candidates are identified quickly and every applicant is treated fairly." },
    ],
  },
  {
    slug: "mombasa",
    countrySlug: "kenya",
    name: "Mombasa",
    area: "Mombasa County",
    metaDescription:
      "HR and recruitment support for employers in Mombasa: port operations, shipping, logistics, manufacturing and coastal tourism and hospitality.",
    overview: [
      "Mombasa is Kenya's main port city and a gateway for trade into East and Central Africa. Shipping lines, freight forwarders, clearing agents, warehousing and logistics companies cluster around the port, linked inland by road and the standard gauge railway.",
      "The Kenyan coast is also a major tourism destination, with hotels and resorts north and south of the city, and Mombasa has a manufacturing and processing base serving regional markets.",
    ],
    keySectors: ["Port operations and shipping", "Logistics and freight", "Tourism and hospitality", "Manufacturing and processing"],
    talentMarket:
      "Employers need port, logistics and operations staff, drivers, supervisors and hospitality teams, with demand that rises and falls with trade volumes and tourist seasons. Experienced logistics managers and technical specialists are harder to find than operational staff.",
    facts: [
      { label: "County", value: "Mombasa County" },
      { label: "Time zone", value: "East Africa Time (UTC+3)" },
      { label: "Business areas", value: "Port area, CBD, Nyali, Changamwe" },
    ],
    hiringNotes: [
      "Plan seasonal staffing for hospitality peaks and trade fluctuations.",
      "Prioritise safety training and supervision for port and warehouse roles.",
      "Develop internal supervisors to reduce reliance on external hires.",
      "Use fair, documented processes in unionised operational workforces.",
    ],
    relatedServiceSlugs: ["contract-staffing-firm", "performance-management-firm", "industrial-relations-and-trade-union-negotiations-firm"],
    relatedSectorSlugs: ["hr-company-for-distribution", "hr-company-for-hospitality", "hr-company-for-manufacturers"],
    faqs: [
      { id: "mombasa-seasonal", question: "Can you support seasonal hiring on the coast?", answer: "Yes. Apex HR can help plan and recruit for seasonal hospitality and logistics peaks, including contract staffing and structured onboarding." },
      { id: "mombasa-unions", question: "Can you help us engage with unions at our Mombasa operation?", answer: "Yes. We can help you prepare for consultation and negotiation and keep employee relations constructive, alongside your legal advisers." },
    ],
  },
  {
    slug: "kisumu",
    countrySlug: "kenya",
    name: "Kisumu",
    area: "Kisumu County",
    metaDescription:
      "HR and recruitment support for employers in Kisumu: agriculture, lake trade, healthcare, education and growing services businesses in western Kenya.",
    overview: [
      "Kisumu is Kenya's third-largest city and the commercial centre of western Kenya on the shores of Lake Victoria. Its economy is built on agriculture and agro-processing, fishing, trade with neighbouring countries and a growing services sector.",
      "Healthcare, education and research institutions, development programmes and regional offices of banks and retailers are important employers, and improved transport links are attracting new investment to the lake region.",
    ],
    keySectors: ["Agriculture and agro-processing", "Lake trade and fisheries", "Healthcare and research", "Education", "Retail and services"],
    talentMarket:
      "Kisumu offers a growing graduate pool and lower costs than Nairobi, but specialist and senior candidates may need to be attracted from elsewhere in Kenya. Clear progression and development help employers keep good people locally.",
    facts: [
      { label: "County", value: "Kisumu County" },
      { label: "Time zone", value: "East Africa Time (UTC+3)" },
      { label: "Business areas", value: "CBD, Milimani, Mamboleo" },
    ],
    hiringNotes: [
      "Be ready to relocate specialists and senior managers from Nairobi or elsewhere.",
      "Invest in development to retain local graduates.",
      "Align project roles in health and development programmes with funding timelines.",
      "Keep HR policies consistent with head-office standards for branch teams.",
    ],
    relatedServiceSlugs: ["permanent-recruitment-firm", "learning-strategy-and-capability-development-firm", "employee-handbooks-and-hr-policies-firm"],
    relatedSectorSlugs: ["hr-company-for-healthcare", "hr-company-for-education", "hr-company-for-charity"],
    faqs: [
      { id: "kisumu-relocation", question: "Can you help us attract specialists to Kisumu?", answer: "Yes. We can search across Kenya and help you present relocation and development opportunities that make a move attractive." },
      { id: "kisumu-branch", question: "How do we keep branch HR consistent with head office?", answer: "A shared handbook, consistent contracts and regular support from a retained HR partner help branch teams follow the same standards." },
    ],
  },

  // ------------------------------------------------------------- South Africa
  {
    slug: "johannesburg",
    countrySlug: "south-africa",
    name: "Johannesburg",
    area: "Gauteng",
    metaDescription:
      "HR, recruitment and reward support for employers in Johannesburg: financial services, mining headquarters and corporates across Sandton, Rosebank and Midrand.",
    overview: [
      "Johannesburg is South Africa's economic centre and the heart of Gauteng, the country's most productive province. Sandton is the continent's leading financial district and home to the Johannesburg Stock Exchange, banks, insurers, asset managers and the head offices of mining and industrial groups.",
      "Rosebank, Midrand and the wider metro host corporate headquarters, technology companies, telecoms and professional services firms, and many pan-African businesses run their continental operations from the city.",
    ],
    keySectors: ["Banking, insurance and investment", "Mining headquarters", "Corporate head offices", "Technology and telecoms", "Professional services"],
    talentMarket:
      "Johannesburg has South Africa's largest pool of experienced professionals and executives, but scarce skills in technology, actuarial, engineering and senior finance roles command a premium. Employment equity objectives shape how roles are advertised and filled, and senior candidates are often approached by international employers.",
    facts: [
      { label: "Province", value: "Gauteng" },
      { label: "Time zone", value: "South Africa Standard Time (UTC+2)" },
      { label: "Business districts", value: "Sandton, Rosebank, Midrand, Johannesburg CBD" },
    ],
    hiringNotes: [
      "Integrate employment equity goals into every recruitment and promotion process.",
      "Benchmark scarce-skills roles against both local and international offers.",
      "Plan executive appointments around notice periods and restraint-of-trade terms.",
      "Document performance and discipline carefully to manage CCMA risk.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "executive-compensation-and-share-schemes-firm", "diversity-equity-and-inclusion-dei-consulting-firm"],
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-professional-services", "hr-company-for-it"],
    faqs: [
      { id: "jhb-executive", question: "Can you run executive searches in Johannesburg?", answer: "Yes. Apex HR can run confidential executive searches across South Africa and the diaspora, aligned with your employment equity objectives." },
      { id: "jhb-reward", question: "Can you help design executive reward and incentives?", answer: "Yes. We can help design senior reward and long-term incentives, working with tax and legal specialists on implementation." },
    ],
  },
  {
    slug: "cape-town",
    countrySlug: "south-africa",
    name: "Cape Town",
    area: "Western Cape",
    metaDescription:
      "HR and recruitment support for employers in Cape Town: technology, financial services, customer experience centres, tourism and creative industries.",
    overview: [
      "Cape Town is South Africa's legislative capital and a major centre for technology, financial services, tourism and the creative industries. The city has a strong startup ecosystem, a growing number of international technology employers, and asset management and insurance businesses.",
      "It is also a leading location for customer experience and business process outsourcing centres serving international clients, and its tourism, hospitality and wine industries employ large numbers of people across the Western Cape.",
    ],
    keySectors: ["Technology and startups", "Asset management and insurance", "Customer experience and BPO", "Tourism and hospitality", "Film and creative industries"],
    talentMarket:
      "Cape Town attracts professionals for its lifestyle, which helps recruitment, but competition for software engineers, data specialists and experienced managers is strong, including from remote international employers. Customer experience centres need high-volume recruitment and strong team leaders.",
    facts: [
      { label: "Province", value: "Western Cape" },
      { label: "Time zone", value: "South Africa Standard Time (UTC+2)" },
      { label: "Business districts", value: "City Bowl, V&A Waterfront, Century City, Claremont" },
    ],
    hiringNotes: [
      "Use lifestyle and flexibility as part of your employer proposition.",
      "Plan high-volume hiring and team-leader development for customer experience centres.",
      "Benchmark technical roles against remote international offers.",
      "Plan seasonal staffing for tourism and hospitality peaks.",
    ],
    relatedServiceSlugs: ["recruitment-process-outsourcing-rpo-firm", "employer-branding-and-employee-value-proposition-evp-firm", "salary-benchmarking-firm"],
    relatedSectorSlugs: ["hr-company-for-it", "hr-company-for-hospitality", "hr-company-for-financial-services"],
    faqs: [
      { id: "cpt-volume", question: "Can you support high-volume hiring for a Cape Town contact centre?", answer: "Yes. Apex HR can run or support high-volume recruitment, including RPO, with consistent assessment and onboarding." },
      { id: "cpt-tech", question: "How can we compete for tech talent in Cape Town?", answer: "A clear employer proposition, competitive and transparent pay, flexibility and a fast process all help. We can benchmark pay and run structured technical recruitment." },
    ],
  },
  {
    slug: "durban",
    countrySlug: "south-africa",
    name: "Durban",
    area: "KwaZulu-Natal",
    metaDescription:
      "HR and recruitment support for employers in Durban: port operations, logistics, automotive, manufacturing and tourism across KwaZulu-Natal.",
    overview: [
      "Durban is home to one of Africa's busiest container ports and is the economic centre of KwaZulu-Natal. Shipping, freight and logistics businesses, automotive and component manufacturers, chemicals and food processing are major employers.",
      "The city's beaches and conference facilities also support a large tourism and hospitality sector, and the Dube TradePort near King Shaka International Airport has attracted logistics and manufacturing investment.",
    ],
    keySectors: ["Port, shipping and logistics", "Automotive and manufacturing", "Chemicals and food processing", "Tourism and hospitality"],
    talentMarket:
      "Durban employers need engineers, technicians, supply chain specialists and skilled operational staff, often in unionised environments. Experienced managers can be harder to attract than in Johannesburg, so internal development and clear progression are important.",
    facts: [
      { label: "Province", value: "KwaZulu-Natal" },
      { label: "Time zone", value: "South Africa Standard Time (UTC+2)" },
      { label: "Business areas", value: "Umhlanga, Durban CBD, port area, Dube TradePort" },
    ],
    hiringNotes: [
      "Check whether bargaining council agreements apply to operational roles.",
      "Develop supervisors and managers internally to reduce reliance on external hiring.",
      "Follow fair, documented procedures in unionised workplaces.",
      "Align hiring and development with your employment equity plan.",
    ],
    relatedServiceSlugs: ["industrial-relations-and-trade-union-negotiations-firm", "job-evaluation-and-pay-structures-firm", "leadership-and-management-training-firm"],
    relatedSectorSlugs: ["hr-company-for-manufacturers", "hr-company-for-distribution", "hr-company-for-engineers"],
    faqs: [
      { id: "dbn-ir", question: "Can you support industrial relations at our Durban plant?", answer: "Yes. Apex HR can help prepare for negotiations, consultation and dispute handling, alongside your legal advisers." },
      { id: "dbn-supervisors", question: "Can you develop our shift supervisors?", answer: "Yes. We can design practical training for supervisors on safety, performance, discipline and team communication." },
    ],
  },
  {
    slug: "pretoria",
    countrySlug: "south-africa",
    name: "Pretoria",
    area: "Gauteng (City of Tshwane)",
    metaDescription:
      "HR and recruitment support for employers in Pretoria: government-facing businesses, research institutions, automotive manufacturing and professional services.",
    overview: [
      "Pretoria, in the City of Tshwane, is South Africa's administrative capital and home to national government departments, diplomatic missions and major research institutions and universities.",
      "The area around Rosslyn and northern Tshwane is a centre of automotive manufacturing, and the city has a strong base of engineering, research, consulting and public-sector suppliers.",
    ],
    keySectors: ["Government and public-sector suppliers", "Research and higher education", "Automotive manufacturing", "Engineering and consulting"],
    talentMarket:
      "Pretoria has a strong supply of graduates and researchers, and many experienced professionals live in the city and commute across Gauteng. Employers compete with Johannesburg for senior talent, and public-sector experience is valued in government-facing roles.",
    facts: [
      { label: "Province", value: "Gauteng (City of Tshwane)" },
      { label: "Time zone", value: "South Africa Standard Time (UTC+2)" },
      { label: "Business areas", value: "Pretoria CBD, Menlyn, Centurion, Rosslyn" },
    ],
    hiringNotes: [
      "Assess public-sector and procurement experience for government-facing roles.",
      "Use graduate and research talent through structured early-careers programmes.",
      "Check sector agreements and union arrangements in manufacturing.",
      "Integrate employment equity goals into recruitment and promotion.",
    ],
    relatedServiceSlugs: ["graduate-schemes-and-early-careers-design-firm", "workplace-investigations-firm", "performance-management-firm"],
    relatedSectorSlugs: ["hr-company-for-manufacturers", "hr-company-for-engineers", "hr-company-for-professional-services"],
    faqs: [
      { id: "pta-graduates", question: "Can you help us build a graduate programme in Pretoria?", answer: "Yes. Apex HR can design graduate programmes and run fair selection, aligned with your employment equity and skills development goals." },
      { id: "pta-investigation", question: "Can you run an independent investigation for us?", answer: "Yes. We can provide an impartial investigator and a documented process that stands up to scrutiny." },
    ],
  },

  // ------------------------------------------------------------- Ghana
  {
    slug: "accra",
    countrySlug: "ghana",
    name: "Accra",
    area: "Greater Accra Region",
    metaDescription:
      "HR and recruitment support for employers in Accra: financial services, telecoms, technology, regional headquarters and professional services.",
    overview: [
      "Accra is Ghana's capital and commercial centre, and a popular West African base for international companies. Banks, telecoms operators, technology firms, consultancies and regional headquarters are concentrated in Airport City, Cantonments, Osu and Ridge.",
      "The nearby port city of Tema is Ghana's main industrial and shipping hub, and the wider Greater Accra Region hosts manufacturing, logistics and a growing technology and startup scene.",
    ],
    keySectors: ["Banking and fintech", "Telecoms and technology", "Regional headquarters", "Professional services", "Manufacturing and logistics (Tema)"],
    talentMarket:
      "Accra has Ghana's deepest pool of professionals, but experienced managers, finance specialists and technology talent are in demand from multinationals and fast-growing local firms. Employers that offer clear progression and competitive, regularly reviewed pay retain people better.",
    facts: [
      { label: "Region", value: "Greater Accra Region" },
      { label: "Time zone", value: "Greenwich Mean Time (UTC+0)" },
      { label: "Business districts", value: "Airport City, Cantonments, Osu, Ridge, East Legon" },
    ],
    hiringNotes: [
      "Review pay and allowances regularly to keep pace with inflation.",
      "Provide written statements of terms and register pensions from day one.",
      "Compete for experienced managers with a clear employer proposition.",
      "Consider Accra as a regional hub for West African roles.",
    ],
    relatedServiceSlugs: ["executive-search-firm", "salary-benchmarking-firm", "retained-hr-services-firm"],
    relatedSectorSlugs: ["hr-company-for-financial-services", "hr-company-for-it", "hr-company-for-professional-services"],
    faqs: [
      { id: "accra-hub", question: "Can you help us set up a regional hub in Accra?", answer: "Yes. We can help plan roles, recruit the team, benchmark pay and put HR foundations in place, working alongside your legal and tax advisers." },
      { id: "accra-pay", question: "How often should we review pay in Accra?", answer: "Many employers review pay at least annually and check allowances more often when inflation is high. Benchmarking helps set defensible ranges." },
    ],
  },
  {
    slug: "kumasi",
    countrySlug: "ghana",
    name: "Kumasi",
    area: "Ashanti Region",
    metaDescription:
      "HR and recruitment support for employers in Kumasi: trade, cocoa and agribusiness, manufacturing, education and growing family businesses in the Ashanti Region.",
    overview: [
      "Kumasi is Ghana's second city and the capital of the Ashanti Region, with a long history as a centre of trade. Its markets are among the largest in West Africa, and the surrounding region is important for cocoa, timber, mining and agribusiness.",
      "The city is also home to major universities, hospitals and a large number of family-owned businesses that are growing into more formal organisations.",
    ],
    keySectors: ["Trade and distribution", "Cocoa, timber and agribusiness", "Mining services", "Education and healthcare", "Manufacturing"],
    talentMarket:
      "Kumasi has a strong graduate pool from its universities, but specialist and senior candidates may need to be attracted from Accra. Family businesses formalising HR need clear contracts, roles and pay structures to attract and keep professional managers.",
    facts: [
      { label: "Region", value: "Ashanti Region" },
      { label: "Time zone", value: "Greenwich Mean Time (UTC+0)" },
      { label: "Business areas", value: "Adum, Kejetia, Ahodwo, Nhyiaeso" },
    ],
    hiringNotes: [
      "Formalise roles and contracts when bringing professional managers into family businesses.",
      "Use local graduate talent through structured trainee programmes.",
      "Be ready to relocate specialists from Accra.",
      "Put simple, consistent policies in place across sites and branches.",
    ],
    relatedServiceSlugs: ["hr-support-for-small-businesses-and-startups-firm", "employee-handbooks-and-hr-policies-firm", "organisation-design-firm"],
    relatedSectorSlugs: ["hr-company-for-distribution", "hr-company-for-manufacturers", "hr-company-for-education"],
    faqs: [
      { id: "kumasi-family", question: "Can you help a family business professionalise its HR?", answer: "Yes. Apex HR can help clarify roles and structure, put contracts and policies in place, and recruit professional managers." },
      { id: "kumasi-structure", question: "How should we organise a growing multi-site business?", answer: "Organisation design helps define clear roles, reporting lines and decision rights as you add sites and managers." },
    ],
  },
  {
    slug: "takoradi",
    countrySlug: "ghana",
    name: "Takoradi",
    area: "Western Region",
    metaDescription:
      "HR and recruitment support for employers in Takoradi: oil and gas, mining, port operations and engineering services in Ghana's Western Region.",
    overview: [
      "Sekondi-Takoradi is the capital of Ghana's Western Region and the base for the country's offshore oil and gas industry. Operators, service companies, engineering contractors and logistics businesses support offshore fields from the city and its port.",
      "The region is also important for gold mining, cocoa, timber and rubber, and the port of Takoradi handles bulk exports and industrial imports.",
    ],
    keySectors: ["Oil and gas", "Mining and mining services", "Port operations", "Engineering and construction", "Agribusiness"],
    talentMarket:
      "Employers compete for engineers, technicians, HSE specialists and experienced supervisors, and many technical roles are filled by people who work on rotation. Local content expectations encourage employers to develop Ghanaian talent into technical and leadership roles.",
    facts: [
      { label: "Region", value: "Western Region" },
      { label: "Time zone", value: "Greenwich Mean Time (UTC+0)" },
      { label: "Business areas", value: "Takoradi harbour area, Sekondi, Anaji" },
    ],
    hiringNotes: [
      "Verify certifications and safety training for technical roles.",
      "Plan rotations, allowances and welfare for offshore and site staff.",
      "Build local talent pipelines to meet local content expectations.",
      "Use structured competency assessment for safety-critical positions.",
    ],
    relatedServiceSlugs: ["contract-staffing-firm", "competency-frameworks-firm", "succession-planning-and-talent-mapping-firm"],
    relatedSectorSlugs: ["hr-company-for-engineers", "hr-company-for-construction", "hr-company-for-distribution"],
    faqs: [
      { id: "tak-local", question: "Can you help us develop Ghanaian technical leaders?", answer: "Yes. Apex HR can design competency frameworks and succession plans that grow local talent into senior technical roles." },
      { id: "tak-contract", question: "Can you support project and contract staffing in Takoradi?", answer: "Yes. We can help structure contract engagements and recruit for project roles with appropriate screening." },
    ],
  },
];
