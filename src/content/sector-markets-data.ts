import type { ContentFaqItem } from "@/types/content";
import type { CountryRegion } from "@/config/locations";

/**
 * International depth for each sector page: how the sector's workforce
 * looks across the four regions the global site serves, the trends shaping
 * it, and extra sector FAQs. First-draft copy pending stakeholder review.
 * General, non-numeric statements only — no statistics, client claims or
 * statements of law. Keyed by sector slug (src/config/sectors.ts).
 */
export interface SectorMarketContent {
  /** Two short paragraphs on the sector's people challenges internationally. */
  globalContext: string[];
  /** How the sector's workforce picture differs in each region served. */
  regionalNotes: Record<CountryRegion, string>;
  /** Workforce trends shaping hiring and HR in the sector. */
  workforceTrends: string[];
  /** Additional sector FAQs, appended after the sector's own FAQs. */
  extraFaqs: ContentFaqItem[];
}

const crossBorderFaq = (sector: string): ContentFaqItem => ({
  id: "cross-border",
  question: `Can you support ${sector} employers with teams in several countries?`,
  answer:
    "Yes. Apex HR can help align recruitment, policies, pay structures and performance processes across countries, while respecting local employment rules. Where formal legal advice is needed, we work alongside in-country counsel.",
});

export const sectorMarketContent: Record<string, SectorMarketContent> = {
  "hr-company-for-startups-and-scale-ups": {
    globalContext: [
      "Startups and scale-ups everywhere face the same tension: they need to hire quickly to grow, but every early hire shapes the culture, and HR shortcuts taken at ten people become expensive problems at a hundred. Founders are often managing people for the first time while also raising money and building product.",
      "International growth adds another layer. Many startups hire their first people in a second or third country before they have any HR function, using a mix of employees, contractors and employer-of-record arrangements that need to be set up correctly and reviewed as the team grows.",
    ],
    regionalNotes: {
      Africa: "Fintech, e-commerce and software startups in Lagos, Nairobi, Cape Town and Accra compete with well-funded scale-ups and overseas remote employers for engineers and product talent.",
      "North America": "US and Canadian startups face intense competition for technical talent, high salary expectations and state-by-state employment rules as remote teams spread.",
      Europe: "Startups in Dublin, Berlin and Amsterdam hire internationally from day one, often running English-speaking teams within national employment frameworks and works council rules.",
      "Middle East": "Startup ecosystems in Dubai, Abu Dhabi and Riyadh are growing fast, supported by government programmes, and rely heavily on international hires and attractive relocation packages.",
    },
    workforceTrends: [
      "Remote and distributed founding teams spread across several countries",
      "Equity and long-term incentives used to compete with larger employers",
      "Fractional HR and people leadership in place of an early full-time hire",
      "Investor scrutiny of HR foundations, contracts and compliance during due diligence",
    ],
    extraFaqs: [
      { id: "first-hr", question: "When should a startup put formal HR in place?", answer: "Earlier than most expect. Contracts, a short handbook and a simple onboarding and performance process are worth having from the first hires; a fractional HR lead or retained support often makes sense from around the point where founders can no longer manage every hire personally." },
      crossBorderFaq("startup"),
    ],
  },
  "hr-company-for-professional-services": {
    globalContext: [
      "Consulting, legal, accounting, advisory and other professional services firms sell the expertise of their people, so recruitment, development and retention directly drive revenue. Utilisation pressure, long hours and the pull of competitors and clients make retention a constant concern.",
      "Many firms operate across borders, serving multinational clients and moving people between offices. That requires consistent career frameworks, performance measures and reward structures that still make sense in very different local markets.",
    ],
    regionalNotes: {
      Africa: "Professional services firms in Lagos, Nairobi, Johannesburg and Accra are growing with regional demand and often compete with international networks for qualified accountants, lawyers and consultants.",
      "North America": "Large US and Canadian firms compete hard on pay and progression, while mid-sized firms differentiate through flexibility, culture and faster paths to seniority.",
      Europe: "Dublin, Frankfurt and Amsterdam host major advisory, legal and financial services hubs, where multilingual professionals and specialist regulatory expertise are in high demand.",
      "Middle East": "Dubai, Riyadh and Doha are regional bases for global advisory firms, with strong demand driven by large infrastructure, investment and transformation programmes.",
    },
    workforceTrends: [
      "Hybrid working balanced against client presence and apprenticeship-style learning",
      "Technology and automation changing junior and mid-level roles",
      "Career frameworks redesigned beyond the traditional partner track",
      "Greater focus on wellbeing given long hours and utilisation pressure",
    ],
    extraFaqs: [
      { id: "partner-track", question: "Can you help redesign career paths beyond the partner track?", answer: "Yes. Apex HR can help design career frameworks that recognise expert, client and leadership routes, linked to clear performance criteria and reward, so strong people see a future in the firm." },
      crossBorderFaq("professional services"),
    ],
  },
  "hr-company-for-healthcare": {
    globalContext: [
      "Healthcare employers worldwide face shortages of doctors, nurses, allied health professionals and experienced managers, alongside demanding shift patterns and high levels of burnout. Professional registration, credential checks and safeguarding make recruitment slower and more regulated than in most sectors.",
      "International recruitment is now a core part of many healthcare workforce plans. Hiring across borders requires careful verification of qualifications, licensing in the destination country, ethical recruitment practice and strong support for people relocating with their families.",
    ],
    regionalNotes: {
      Africa: "Hospitals and clinics in Nigeria, Kenya, Ghana and South Africa often lose experienced clinicians to overseas employers, making retention, development and fair pay critical.",
      "North America": "US and Canadian providers face persistent nursing and physician shortages and recruit internationally, with licensing handled state by state or province by province.",
      Europe: "Healthcare and care providers in Ireland, Germany and the Netherlands recruit internationally and need clear processes for recognising foreign qualifications.",
      "Middle East": "Saudi Arabia, the UAE and Qatar are expanding healthcare capacity rapidly, relying on international clinicians while developing national healthcare talent.",
    },
    workforceTrends: [
      "International recruitment with stronger focus on ethical sourcing",
      "Retention and wellbeing programmes to reduce burnout and turnover",
      "Flexible rostering and new roles that extend clinical teams",
      "Growth of private, outpatient and digital health providers",
    ],
    extraFaqs: [
      { id: "credentials", question: "How do you handle professional registration and credential checks?", answer: "Apex HR builds licence, registration and qualification checks into the recruitment process for each country. Final registration decisions sit with the relevant professional body or regulator." },
      crossBorderFaq("healthcare"),
    ],
  },
  "hr-company-for-life-sciences": {
    globalContext: [
      "Pharmaceutical, biotechnology, medical device and research organisations need scarce scientific, regulatory, quality and manufacturing talent. Roles are highly specialised, hiring timelines are long, and the cost of a wrong hire in a regulated environment is high.",
      "Life sciences businesses also move between research, clinical and commercial phases, each needing different skills and structures. Workforce planning, competitive reward and structured development help them scale without losing critical expertise.",
    ],
    regionalNotes: {
      Africa: "Pharmaceutical manufacturing, clinical research and diagnostics are growing in South Africa, Nigeria and Kenya, with demand for quality, regulatory and production specialists.",
      "North America": "US hubs such as Boston and the San Francisco Bay Area and Canadian clusters in Toronto and Montreal compete intensely for scientists and regulatory experts.",
      Europe: "Ireland is a major pharmaceutical and medtech manufacturing base, and Germany and the Netherlands have strong research and production clusters.",
      "Middle East": "Saudi Arabia, the UAE and Qatar are investing in pharmaceutical manufacturing, research and healthcare innovation as part of economic diversification.",
    },
    workforceTrends: [
      "Shortages of quality assurance, regulatory affairs and manufacturing specialists",
      "Data science and digital skills becoming central to research and development",
      "Global teams spanning research, manufacturing and commercial functions",
      "Reward packages that include long-term incentives and development",
    ],
    extraFaqs: [
      { id: "gmp", question: "Can you recruit for regulated quality and manufacturing roles?", answer: "Yes. Apex HR can support recruitment for quality, regulatory and manufacturing roles, using structured assessment of technical knowledge and regulated-environment experience." },
      crossBorderFaq("life sciences"),
    ],
  },
  "hr-company-for-it": {
    globalContext: [
      "Technology employers compete globally for software engineers, data specialists, cloud and security professionals, and product leaders. Remote work means a strong candidate in Lagos, Nairobi or Berlin may be choosing between local offers and roles with employers on other continents.",
      "Beyond hiring, technology businesses need clear engineering career paths, fair pay structures across countries, and people practices that keep distributed teams connected and productive.",
    ],
    regionalNotes: {
      Africa: "Lagos, Nairobi, Cape Town and Accra have vibrant technology scenes, with strong local talent increasingly hired by international and remote-first employers.",
      "North America": "The US and Canada remain the largest technology talent markets, with high salary expectations and intense competition for senior and specialist skills.",
      Europe: "Dublin, Berlin, Amsterdam and Eindhoven host major technology employers, with international teams and strong demand for engineering and data talent.",
      "Middle East": "The UAE and Saudi Arabia are investing heavily in digital transformation, attracting international technology talent and building national tech skills.",
    },
    workforceTrends: [
      "Remote and hybrid teams across time zones and countries",
      "Rising demand for AI, data, cloud and cybersecurity skills",
      "Skills-based hiring alongside or instead of degree requirements",
      "Separate technical and management career tracks",
    ],
    extraFaqs: [
      { id: "remote-pay", question: "How should we set pay for remote engineers in different countries?", answer: "Options include location-based pay, regional bands or a single global rate. Each has trade-offs in cost, fairness and retention. Apex HR can benchmark pay and help you choose and document an approach." },
      crossBorderFaq("technology"),
    ],
  },
  "hr-company-for-financial-services": {
    globalContext: [
      "Banks, insurers, asset managers, fintechs and payments companies operate in highly regulated environments where conduct, competence and accountability matter as much as technical skill. Recruitment involves more extensive background screening, and many senior roles carry regulatory responsibilities.",
      "Financial services is also changing fast, as digital banking, fintech and automation reshape roles. Employers need people who combine financial expertise with technology, data and risk skills, and reward structures that meet regulatory expectations on remuneration.",
    ],
    regionalNotes: {
      Africa: "Fintech and digital banking are reshaping financial services in Nigeria, Kenya, South Africa and Ghana, creating demand for technology, risk and compliance talent.",
      "North America": "New York and Toronto are major financial centres, with strong demand for risk, compliance, technology and quantitative skills.",
      Europe: "Dublin and Frankfurt host major banking, insurance and funds operations, with high demand for regulatory, compliance and multilingual professionals.",
      "Middle East": "Financial centres such as DIFC in Dubai, ADGM in Abu Dhabi and the QFC in Doha are growing rapidly, alongside Saudi Arabia's expanding financial sector.",
    },
    workforceTrends: [
      "Fintech and digital transformation changing traditional banking roles",
      "Rising demand for risk, compliance, cybersecurity and data skills",
      "Remuneration governance shaping bonus and incentive design",
      "Competition with technology companies for engineering talent",
    ],
    extraFaqs: [
      { id: "screening", question: "Do you include enhanced screening for regulated roles?", answer: "Apex HR can build appropriate background, reference and fitness checks into recruitment for regulated roles. Regulatory approvals themselves sit with the relevant financial regulator in each country." },
      crossBorderFaq("financial services"),
    ],
  },
  "hr-company-for-accountants": {
    globalContext: [
      "Accountancy practices and finance teams face a shortage of qualified and part-qualified accountants, intense seasonal workloads and competition from larger firms and in-house roles. Technology and automation are also changing the work, reducing routine tasks and increasing demand for advisory and analytical skills.",
      "Practices that recruit well, offer structured training towards professional qualifications and provide realistic flexibility tend to retain people better, especially through busy seasons.",
    ],
    regionalNotes: {
      Africa: "Accountancy firms in Nigeria, Kenya, Ghana and South Africa train large numbers of professionals, many of whom are recruited by international firms and overseas employers.",
      "North America": "US and Canadian practices report shortages of qualified accountants and are rethinking training routes, flexibility and pay to attract new entrants.",
      Europe: "Practices in Ireland, Germany and the Netherlands compete for qualified staff with large firms, shared-service centres and multinational finance teams.",
      "Middle East": "Growing tax and regulatory requirements in the Gulf, including corporate tax and VAT, are increasing demand for accountancy and tax professionals.",
    },
    workforceTrends: [
      "Shortage of qualified accountants and new entrants to the profession",
      "Automation shifting work towards advisory and analysis",
      "Flexible and hybrid working to retain people through busy seasons",
      "Structured training and study support as a key attraction factor",
    ],
    extraFaqs: [
      { id: "trainees", question: "Can you help design a trainee or graduate programme for our practice?", answer: "Yes. Apex HR can help design graduate and trainee programmes with clear study support, rotation and progression, and recruit for them." },
      crossBorderFaq("accountancy"),
    ],
  },
  "hr-company-for-architects": {
    globalContext: [
      "Architecture practices compete for creative and technical talent while managing project-based workloads, tight fees and long hours. Recruitment needs to assess design ability, technical delivery and software skills, and studios need to retain good people between projects.",
      "Many practices work across borders on international projects, which brings opportunities to move people between studios but also requires consistent career frameworks and fair pay across locations.",
    ],
    regionalNotes: {
      Africa: "Urban growth in Lagos, Nairobi, Accra and Johannesburg is creating demand for architectural and design talent on residential, commercial and infrastructure projects.",
      "North America": "US and Canadian practices compete for licensed architects and technical designers, with licensing requirements set state by state or province by province.",
      Europe: "Practices in Ireland, Germany and the Netherlands operate within well-established professional frameworks and increasingly focus on sustainable design.",
      "Middle East": "Large-scale developments in Saudi Arabia, the UAE and Qatar create strong demand for international architectural, design and project delivery talent.",
    },
    workforceTrends: [
      "Digital design, BIM and computational skills in high demand",
      "Sustainability and low-carbon design expertise becoming essential",
      "Project-based resourcing and freelance specialists",
      "Focus on wellbeing and long-hours culture in studios",
    ],
    extraFaqs: [
      { id: "freelancers", question: "Should we use freelance architects or hire permanently?", answer: "It depends on how steady your pipeline is. Freelancers suit peaks and specialist needs; permanent hires build capability and culture. Apex HR can help plan the mix and recruit for both." },
      crossBorderFaq("architecture"),
    ],
  },
  "hr-company-for-care-homes": {
    globalContext: [
      "Care homes and residential care providers face constant pressure on staffing: high turnover, demanding shifts, modest pay and growing demand from ageing populations. Safe staffing levels, safeguarding checks and regulatory inspection make recruitment and HR processes particularly important.",
      "Many providers recruit internationally to fill care roles, which requires careful attention to ethical recruitment, visa sponsorship rules, language support and helping new arrivals settle into both the job and the community.",
    ],
    regionalNotes: {
      Africa: "Residential and home care is a growing sector in South Africa, Kenya and Nigeria, while many African care workers are recruited by employers overseas.",
      "North America": "US and Canadian long-term care providers face serious staffing shortages and rely on international recruitment and immigration pathways.",
      Europe: "Care providers in Ireland, Germany and the Netherlands recruit internationally and invest in training and retention to meet growing demand.",
      "Middle East": "Elderly and long-term care services are expanding in the Gulf, with demand for trained nurses and care staff as populations age.",
    },
    workforceTrends: [
      "Ageing populations increasing demand for care workers",
      "International recruitment with closer scrutiny of ethical practice",
      "Retention focus on pay, scheduling and career pathways",
      "Training and qualifications to professionalise care roles",
    ],
    extraFaqs: [
      { id: "turnover", question: "How can care homes reduce staff turnover?", answer: "Fair and predictable scheduling, supportive line management, clear career pathways, recognition and good induction all reduce turnover. Apex HR can review your retention drivers and help put practical improvements in place." },
      crossBorderFaq("care"),
    ],
  },
  "hr-company-for-charity": {
    globalContext: [
      "Charities, NGOs and not-for-profit organisations need skilled people but often cannot match private-sector pay. Purpose, flexibility and development become central to attracting and keeping staff, while funding cycles make headcount planning uncertain.",
      "International NGOs and development organisations manage staff in many countries, with a mix of international and national employees, fixed-term project contracts and donor requirements that shape HR policy.",
    ],
    regionalNotes: {
      Africa: "Nairobi is a major hub for international NGOs and UN agencies, and organisations across Nigeria, Ghana and South Africa run large programme and field teams.",
      "North America": "US and Canadian non-profits compete for skilled staff with limited budgets and rely heavily on mission, flexibility and benefits.",
      Europe: "International organisations in The Hague and charities in Ireland, Germany and the Netherlands manage international teams and donor-funded projects.",
      "Middle East": "Humanitarian and development organisations coordinate regional work from hubs such as Dubai and Doha, alongside a growing local charitable sector in Saudi Arabia and the UAE.",
    },
    workforceTrends: [
      "Project-based and fixed-term contracts tied to funding cycles",
      "Localisation of leadership in international development",
      "Wellbeing and duty of care for staff in challenging environments",
      "Pay equity between national and international staff",
    ],
    extraFaqs: [
      { id: "national-international", question: "Can you help us align pay for national and international staff?", answer: "Yes. Apex HR can help design fair, transparent pay structures that account for local markets while reducing unjustified gaps between national and international staff." },
      crossBorderFaq("charity and NGO"),
    ],
  },
  "hr-company-for-construction": {
    globalContext: [
      "Construction and contracting businesses depend on skilled trades, site supervisors, engineers and project managers, and the work is cyclical, project-based and safety-critical. Recruiting the right people quickly when a project starts, and keeping them through to completion, is a constant challenge.",
      "Large projects often employ international workforces through layers of contractors and subcontractors. That raises important questions about health and safety, fair treatment, worker welfare and compliance throughout the supply chain.",
    ],
    regionalNotes: {
      Africa: "Infrastructure, housing and commercial development across Nigeria, Kenya, Ghana and South Africa drive demand for engineers, project managers and skilled trades.",
      "North America": "US and Canadian contractors face shortages of skilled trades and supervisors, and invest in apprenticeships and retention.",
      Europe: "Contractors in Ireland, Germany and the Netherlands face trade shortages and growing demand for retrofit and sustainable building skills.",
      "Middle East": "Giga-projects in Saudi Arabia and major developments in the UAE and Qatar require large international workforces and experienced project leadership.",
    },
    workforceTrends: [
      "Shortages of skilled trades and site supervisors",
      "Worker welfare and fair recruitment across supply chains",
      "Digital construction, BIM and modular building skills",
      "Sustainability and low-carbon construction expertise",
    ],
    extraFaqs: [
      { id: "project-hiring", question: "Can you recruit quickly for a new project?", answer: "Apex HR can support project-based recruitment for supervisors, engineers and managers, combining speed with structured assessment and checks suited to safety-critical roles." },
      crossBorderFaq("construction"),
    ],
  },
  "hr-company-for-distribution": {
    globalContext: [
      "Distribution, logistics and warehousing employers manage large operational workforces, seasonal peaks, shift work and safety-critical roles. High-volume recruitment, onboarding and retention of drivers, warehouse operatives and supervisors are constant priorities.",
      "Automation and e-commerce are changing the work, increasing demand for technicians, planners and data-literate managers alongside traditional operational roles.",
    ],
    regionalNotes: {
      Africa: "Ports such as Mombasa, Durban, Tema and Lagos, and fast-growing e-commerce, drive demand for logistics managers, drivers and warehouse teams.",
      "North America": "US and Canadian logistics employers face driver shortages, high warehouse turnover and rapid automation.",
      Europe: "Rotterdam, Hamburg and other major ports make the Netherlands and Germany central to European logistics, with demand for technical and multilingual staff.",
      "Middle East": "Dubai's Jebel Ali, Saudi Arabia's logistics ambitions and Qatar's ports make the region a global logistics hub with large international workforces.",
    },
    workforceTrends: [
      "High-volume and seasonal hiring for warehouse and delivery roles",
      "Automation creating demand for technicians and engineers",
      "Driver shortages and retention challenges",
      "Data and planning skills becoming central to operations",
    ],
    extraFaqs: [
      { id: "peak", question: "Can you support seasonal or peak-period hiring?", answer: "Yes. Apex HR can help plan and run high-volume recruitment for peaks, including contract staffing and structured onboarding to get people productive quickly and safely." },
      crossBorderFaq("logistics and distribution"),
    ],
  },
  "hr-company-for-education": {
    globalContext: [
      "Schools, colleges, universities and training providers need qualified teachers, lecturers, support staff and leaders, and many face shortages in specific subjects. Safeguarding checks, qualification recognition and academic-year timing make education recruitment distinctive.",
      "International schools and higher education institutions recruit globally, so relocation support, competitive packages and strong induction are important for attracting and keeping staff.",
    ],
    regionalNotes: {
      Africa: "Private schools and universities in Nigeria, Kenya, Ghana and South Africa are expanding, with demand for qualified teachers, academic leaders and administrators.",
      "North America": "US and Canadian schools face teacher shortages in key subjects and regions, alongside complex certification requirements.",
      Europe: "International schools and universities in Ireland, Germany and the Netherlands recruit internationally for English-medium teaching.",
      "Middle East": "The UAE, Saudi Arabia and Qatar have large international school sectors that recruit teachers and leaders from around the world.",
    },
    workforceTrends: [
      "Teacher shortages in specific subjects and regions",
      "Growth of international and private schools",
      "Wellbeing and workload as retention priorities",
      "Digital and blended learning changing teaching roles",
    ],
    extraFaqs: [
      { id: "academic-year", question: "Can you plan recruitment around the academic year?", answer: "Yes. Apex HR can help plan recruitment timelines so offers, checks and relocation are complete before the start of term." },
      crossBorderFaq("education"),
    ],
  },
  "hr-company-for-engineers": {
    globalContext: [
      "Engineering employers, from consultancies to manufacturers and infrastructure owners, compete for scarce mechanical, electrical, civil, software and systems engineers. Demand is rising with the energy transition, infrastructure investment and automation.",
      "Engineering roles often require professional registration, specialist technical assessment and security or safety clearances, so structured recruitment and clear career paths for technical experts are essential.",
    ],
    regionalNotes: {
      Africa: "Energy, mining, infrastructure and telecoms projects across Nigeria, Ghana, Kenya and South Africa create strong demand for experienced engineers.",
      "North America": "US and Canadian employers face engineering shortages, especially in energy, infrastructure and advanced manufacturing.",
      Europe: "Germany and the Netherlands are engineering powerhouses facing shortages that drive international recruitment and investment in vocational training.",
      "Middle East": "Energy, infrastructure and giga-projects in Saudi Arabia, the UAE and Qatar create sustained demand for international engineering talent.",
    },
    workforceTrends: [
      "Energy transition creating demand for renewables and grid engineers",
      "Digital engineering, automation and data skills",
      "Professional registration and technical career paths",
      "International recruitment to fill specialist shortages",
    ],
    extraFaqs: [
      { id: "technical-assessment", question: "How do you assess engineering candidates?", answer: "Apex HR uses structured assessment designed with your technical leads, combining technical questions, problem-solving exercises and evidence of relevant project experience." },
      crossBorderFaq("engineering"),
    ],
  },
  "hr-company-for-leisure": {
    globalContext: [
      "Leisure, attractions, sport and entertainment businesses rely on large seasonal and part-time workforces, customer-facing skills and flexible scheduling. Recruitment volumes are high, and the quality of frontline staff shapes the customer experience directly.",
      "Retaining good people between seasons, developing supervisors and managers, and keeping training consistent across sites are ongoing challenges.",
    ],
    regionalNotes: {
      Africa: "Tourism and leisure are important in South Africa, Kenya and Ghana, with demand for guest-facing, guiding and management talent.",
      "North America": "US and Canadian leisure and attractions employers manage large seasonal workforces and compete for frontline staff.",
      Europe: "Leisure and hospitality employers in Ireland, Germany and the Netherlands face seasonal peaks and tight frontline labour markets.",
      "Middle East": "Saudi Arabia's tourism and entertainment programme and the UAE's attractions sector are creating large numbers of new leisure roles.",
    },
    workforceTrends: [
      "High-volume seasonal recruitment",
      "Customer experience training for frontline teams",
      "Flexible scheduling and part-time work",
      "New entertainment and tourism destinations creating demand",
    ],
    extraFaqs: [
      { id: "seasonal", question: "How can we retain good seasonal staff year to year?", answer: "Early re-hire offers, recognition, development and good scheduling all help. Apex HR can help design seasonal workforce plans and retention approaches." },
      crossBorderFaq("leisure"),
    ],
  },
  "hr-company-for-manufacturers": {
    globalContext: [
      "Manufacturers need production operatives, skilled technicians, engineers, quality specialists and capable supervisors, often working shifts in safety-critical environments. Automation and digital manufacturing are raising the skill level required on the shop floor.",
      "Workforce planning, apprenticeships and technical training, structured pay and grading, and strong employee relations are central to running productive, safe manufacturing operations.",
    ],
    regionalNotes: {
      Africa: "Manufacturing is growing in Nigeria, South Africa, Kenya and Ghana, including FMCG, automotive, pharmaceuticals and agro-processing.",
      "North America": "US and Canadian manufacturers face skills shortages as reshoring and advanced manufacturing increase demand for technicians.",
      Europe: "Germany's industrial base and the Netherlands' high-tech manufacturing rely on vocational training, works councils and collective agreements.",
      "Middle East": "Saudi Arabia, the UAE and Qatar are investing in industrial diversification, creating demand for manufacturing and technical skills.",
    },
    workforceTrends: [
      "Automation and Industry 4.0 raising technical skill requirements",
      "Apprenticeships and vocational training to build pipelines",
      "Shift work, safety and wellbeing on the shop floor",
      "Supervisor and first-line manager development",
    ],
    extraFaqs: [
      { id: "shift-supervisors", question: "Can you help develop our shift supervisors?", answer: "Yes. Apex HR can design practical leadership development for supervisors covering safety, performance conversations, absence and team communication." },
      crossBorderFaq("manufacturing"),
    ],
  },
  "hr-company-for-hospitality": {
    globalContext: [
      "Hotels, restaurants and hospitality groups rely on large frontline teams, from front-of-house and kitchen staff to housekeeping and management. High turnover, unsocial hours and seasonal demand make recruitment and retention constant priorities.",
      "Hospitality groups that operate across countries need consistent service standards, training and career paths, while respecting different local employment rules and labour markets.",
    ],
    regionalNotes: {
      Africa: "Hospitality is growing in Lagos, Nairobi, Accra, Cape Town and other tourism and business destinations, with demand for trained staff and experienced managers.",
      "North America": "US and Canadian hospitality employers face frontline labour shortages and compete on pay, scheduling and benefits.",
      Europe: "Hospitality employers in Ireland, Germany and the Netherlands face tight labour markets and recruit internationally.",
      "Middle East": "The UAE, Saudi Arabia and Qatar are among the world's fastest-growing hospitality markets, recruiting international teams at every level.",
    },
    workforceTrends: [
      "Frontline shortages and high turnover",
      "International recruitment for hotel and restaurant teams",
      "Career pathways from frontline to management",
      "Service training and consistent standards across properties",
    ],
    extraFaqs: [
      { id: "openings", question: "Can you support recruitment for a new hotel or restaurant opening?", answer: "Yes. Apex HR can help plan and run pre-opening recruitment, from leadership hires to high-volume frontline teams, with structured onboarding and training." },
      crossBorderFaq("hospitality"),
    ],
  },
};
