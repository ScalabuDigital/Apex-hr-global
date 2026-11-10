import type { ContentFaqItem } from "@/types/content";

/**
 * Talent-acquisition SEO pass (docs/seo/talent-acquisition-research.md,
 * 9 November 2026): role-specific enrichment merged onto the original
 * records in talent-roles-data.ts. Replaces the near-identical content the
 * 62 role pages previously shared with genuinely role-specific copy.
 *
 * Rules followed (CLAUDE.md sections 2, 14 and 31):
 * - No salary figures, candidate availability, live vacancies, placement
 *   records or timescales are claimed.
 * - Regulators, registers and checks are named only where they are a
 *   well-established feature of the occupation, in informational,
 *   non-absolute language ("typically", "where the role requires"). This is
 *   not regulated career or legal advice.
 * - Every record is ai-draft / stakeholder-review-required via manifest.ts.
 */
export interface TalentRoleEnhancement {
  /** Title-tag text before the " | Apex HR" suffix. */
  seoTitle: string;
  /** 120–160 characters, unique per role. */
  metaDescription: string;
  /** A third, role-specific hiring challenge. */
  extraChallenge: string;
  /** Appended to the original recruitment-approach sentence. */
  approachDetail: string;
  /** Two role-specific FAQs (the availability disclaimer is added separately). */
  faqs: ContentFaqItem[];
}

export const talentRoleEnhancements: Record<string, TalentRoleEnhancement> = {
  // --- Executive & Senior Leadership ---
  "chief-executives-senior-officials": {
    seoTitle: "Chief Executive & Senior Official Recruitment UK",
    metaDescription:
      "CEO and senior official recruitment for UK organisations: confidential executive search, board-level assessment and succession-aware appointments.",
    extraChallenge: "Balancing board, investor and stakeholder expectations in a single appointment",
    approachDetail:
      "The brief is agreed with the board or appointing panel, the market is mapped beyond active candidates, and shortlisted candidates are assessed on strategic judgement, leadership style and stakeholder fit as well as track record.",
    faqs: [
      {
        id: "ceo-board-role",
        question: "Who should be involved in appointing a chief executive?",
        answer:
          "Usually the chair and a nominations or appointments committee, with input from other board members and, where relevant, investors or trustees. Agreeing the success profile and decision process at the start keeps the search focused and the final decision defensible.",
      },
      {
        id: "ceo-internal-candidates",
        question: "Can internal candidates be considered alongside an external CEO search?",
        answer:
          "Yes. Internal candidates can be assessed against the same brief and criteria as external candidates, which makes the comparison fair and helps the board explain its decision. Succession planning ahead of time makes this much easier.",
      },
    ],
  },
  "marketing-sales-advertising-directors": {
    seoTitle: "Marketing & Sales Director Recruitment UK",
    metaDescription:
      "Marketing, sales and advertising director recruitment in the UK: targeted search and assessment of commercial results, team leadership and strategic thinking.",
    extraChallenge: "Distinguishing personal results from those of a strong team or favourable market",
    approachDetail:
      "Candidates are asked to evidence growth they personally drove, how they built and led teams, and how they would approach your market, often through a short strategic case discussion with the leadership team.",
    faqs: [
      {
        id: "commercial-director-assessment",
        question: "How do you assess a marketing or sales director's track record?",
        answer:
          "By asking for specific, verifiable examples of results, the context behind them and the candidate's own role, then testing them through references and a strategic discussion relevant to your business. Claimed results without context carry less weight.",
      },
      {
        id: "commercial-director-sector",
        question: "Does a commercial director need experience in our exact sector?",
        answer:
          "Not always. Experience of a similar customer type, sales model or growth stage can matter more than the same sector. The brief should be explicit about which experience is essential and which is desirable.",
      },
    ],
  },
  "consultancy-directors": {
    seoTitle: "Consultancy Director Recruitment UK",
    metaDescription:
      "Consultancy director recruitment for UK professional services firms: confidential search for client-facing leaders with new-business and delivery skills.",
    extraChallenge: "Post-employment restrictions that may limit client contact for a period",
    approachDetail:
      "Assessment covers client relationship depth, practice-building and business development, delivery quality and how the candidate leads consultants, with any restrictive covenants identified early so expectations are realistic.",
    faqs: [
      {
        id: "consultancy-covenants",
        question: "Do restrictive covenants affect hiring a consultancy director?",
        answer:
          "They can. Many senior consultants have contractual restrictions on approaching former clients or colleagues for a period. These should be reviewed early, with legal advice where necessary, so the business case for the hire reflects them.",
      },
      {
        id: "consultancy-portable-business",
        question: "Should we expect a consultancy director to bring clients with them?",
        answer:
          "It is better not to build the hire on that assumption. Relationships, reputation and the ability to win new work are more reliable indicators than a promised client list, which may be restricted or may not transfer.",
      },
    ],
  },
  "creative-industry-managers-directors": {
    seoTitle: "Creative Director & Manager Recruitment UK",
    metaDescription:
      "Recruitment for managers and directors in the UK creative industries: portfolio-led search for leaders combining creative judgement with commercial management.",
    extraChallenge: "Assessing whether creative leadership translates to a different studio culture or client base",
    approachDetail:
      "Portfolio and work review is combined with structured discussion of how the candidate leads creative teams, manages budgets and client relationships, and maintains standards under commercial pressure.",
    faqs: [
      {
        id: "creative-portfolio-review",
        question: "How important is a portfolio when hiring a creative director?",
        answer:
          "Very important, but it shows the work, not always the candidate's contribution or how they led the team that produced it. Pair portfolio review with questions about their specific role, decisions and the commercial outcome.",
      },
      {
        id: "creative-commercial-balance",
        question: "What separates a creative manager from a senior creative practitioner?",
        answer:
          "A manager or director is accountable for people, budgets, clients and output across a team, not only their own craft. Assessment should test team leadership, resourcing and commercial judgement alongside creative standards.",
      },
    ],
  },
  "healthcare-practice-managers": {
    seoTitle: "Healthcare Practice Manager Recruitment UK",
    metaDescription:
      "Healthcare practice manager recruitment in the UK: assessing operations, finance, staff leadership and regulatory awareness for GP, dental and clinic settings.",
    extraChallenge: "Combining financial, contractual and HR responsibility in a single management role",
    approachDetail:
      "Assessment looks at experience of the relevant regulatory and inspection framework (for example the Care Quality Commission in England), contract and financial management, staffing and rotas, and working with clinical partners.",
    faqs: [
      {
        id: "practice-manager-clinical-background",
        question: "Does a practice manager need a clinical background?",
        answer:
          "Usually not. The role is primarily operational and managerial, though familiarity with healthcare settings, patient services and inspection requirements is a strong advantage.",
      },
      {
        id: "practice-manager-scope",
        question: "What does a healthcare practice manager typically cover?",
        answer:
          "Often finance and contracts, staffing and HR, compliance and inspection readiness, patient services, premises and IT. The balance varies between GP, dental, private clinic and community settings, so the brief should reflect yours.",
      },
    ],
  },
  "care-managers-proprietors": {
    seoTitle: "Care Home & Domiciliary Care Manager Recruitment",
    metaDescription:
      "Registered care manager recruitment for UK residential, day and domiciliary care services, with safeguarding, regulatory and leadership experience assessed.",
    extraChallenge: "Finding managers able and willing to become the registered manager with the regulator",
    approachDetail:
      "Shortlisting considers the candidate's suitability to register with the relevant regulator (the Care Quality Commission in England, the Care Inspectorate in Scotland or Care Inspectorate Wales), safeguarding practice, inspection experience and staff leadership, alongside enhanced DBS or equivalent checks.",
    faqs: [
      {
        id: "registered-manager",
        question: "What is a registered manager in social care?",
        answer:
          "In regulated care services, a registered manager is the person registered with the care regulator as responsible for managing the regulated activity at a location. Registration is a separate process run by the regulator, so timing should be built into the hiring plan.",
      },
      {
        id: "care-manager-checks",
        question: "What checks are needed when hiring a care manager?",
        answer:
          "Typically an enhanced criminal record check appropriate to the role, references covering previous care employment, right to work checks and evidence of relevant qualifications and experience. Requirements differ across the UK's nations, so they should be confirmed for your service.",
      },
    ],
  },
  "storage-warehousing-managers": {
    seoTitle: "Warehouse & Logistics Manager Recruitment UK",
    metaDescription:
      "Warehouse and storage manager recruitment in the UK: assessment of operational performance, health and safety, warehouse systems and leadership of shift teams.",
    extraChallenge: "Finding managers with the right warehouse management system and automation experience",
    approachDetail:
      "Candidates are assessed on operational measures they have been responsible for, health and safety leadership, experience of warehouse management systems and how they lead and retain shift-based teams through peaks.",
    faqs: [
      {
        id: "warehouse-manager-kpis",
        question: "Which performance measures should a warehouse manager be able to discuss?",
        answer:
          "Typically picking accuracy and productivity, order fulfilment and despatch performance, stock accuracy, health and safety incidents, labour cost and absence. Asking how they improved these, not just what they were, shows real operational capability.",
      },
      {
        id: "warehouse-peak-hiring",
        question: "Can you also help with seasonal warehouse staffing?",
        answer:
          "Yes. Management roles are usually permanent hires, while seasonal operative demand can be planned through contract staffing or, for sustained volumes, recruitment process outsourcing.",
      },
    ],
  },
  "office-managers": {
    seoTitle: "Office Manager Recruitment UK",
    metaDescription:
      "Office manager recruitment for UK businesses: hiring organised, adaptable managers to run administration, facilities, suppliers and day-to-day people support.",
    extraChallenge: "Defining a role that often grows informally to cover HR, finance and facilities tasks",
    approachDetail:
      "Because office manager roles vary so widely, the brief clarifies exactly which administration, facilities, supplier, finance and HR tasks are included, and practical exercises test prioritisation and organisation.",
    faqs: [
      {
        id: "office-manager-hr-tasks",
        question: "Should an office manager handle HR?",
        answer:
          "Many office managers handle HR administration such as starters, leavers and records, but employee relations, policy and legal risk need proper HR expertise. Being clear about this boundary helps both hiring and the role's success.",
      },
      {
        id: "office-manager-seniority",
        question: "How senior should our office manager be?",
        answer:
          "That depends on the size of the business and how much budget, supplier and people responsibility the role carries. Scoping the responsibilities first makes the right level, and the right candidate profile, much clearer.",
      },
    ],
  },
  "cleaning-housekeeping-managers-supervisors": {
    seoTitle: "Cleaning & Housekeeping Manager Recruitment",
    metaDescription:
      "Recruitment of cleaning and housekeeping managers and supervisors in the UK, assessing team leadership, quality standards, safety and multi-site coordination.",
    extraChallenge: "Leading teams with high turnover and varied working patterns",
    approachDetail:
      "Assessment covers supervising and retaining shift or part-time staff, quality auditing, rota planning, health and safety including the safe use of cleaning chemicals, and client or guest communication.",
    faqs: [
      {
        id: "housekeeping-safety",
        question: "What safety knowledge should a cleaning or housekeeping manager have?",
        answer:
          "Typically an understanding of risk assessment, safe handling and storage of cleaning chemicals, manual handling and any sector-specific hygiene or infection-control standards. The exact requirements depend on the setting.",
      },
      {
        id: "housekeeping-retention",
        question: "How do you assess whether a supervisor can retain a team?",
        answer:
          "By asking how they have onboarded, trained, scheduled and recognised staff, how they have handled absence and turnover, and by checking references from previous managers about team stability.",
      },
    ],
  },
  "health-safety-managers-officers": {
    seoTitle: "Health & Safety Manager Recruitment UK",
    metaDescription:
      "Health and safety manager and officer recruitment in the UK, with qualifications such as NEBOSH and IOSH membership verified alongside sector risk experience.",
    extraChallenge: "Influencing operational managers rather than simply auditing them",
    approachDetail:
      "Qualifications commonly sought for these roles, such as NEBOSH certificates or diplomas and IOSH membership grades, are verified, and candidates are assessed on how they have reduced risk and built safety culture in comparable environments.",
    faqs: [
      {
        id: "hs-qualifications",
        question: "Which qualifications are common for health and safety roles?",
        answer:
          "Employers often ask for NEBOSH qualifications at certificate or diploma level and IOSH membership appropriate to seniority, with construction roles sometimes needing additional sector-specific credentials. Requirements should match the level of risk and responsibility in the role.",
      },
      {
        id: "hs-sector-experience",
        question: "Does a health and safety manager need experience in our sector?",
        answer:
          "Sector experience helps because hazards differ widely between, for example, construction, manufacturing and offices. A strong candidate from an adjacent sector can succeed if the highest-risk activities are comparable.",
      },
    ],
  },
  "education-advisers-school-inspectors": {
    seoTitle: "Education Adviser & School Inspector Recruitment",
    metaDescription:
      "Recruitment of education advisers and school improvement professionals in the UK: search for credible practitioners with leadership and inspection experience.",
    extraChallenge: "Finding candidates with recent senior school experience and an advisory skill set",
    approachDetail:
      "Search focuses on candidates with senior leadership experience in schools or trusts and familiarity with the relevant inspection framework (such as Ofsted in England), assessed on how they support improvement as well as how they evaluate it.",
    faqs: [
      {
        id: "education-adviser-background",
        question: "What background do education advisers usually have?",
        answer:
          "Most have substantial teaching and school leadership experience, often as a headteacher or senior leader, with additional experience in school improvement, trust leadership or inspection work.",
      },
      {
        id: "education-adviser-checks",
        question: "Are safeguarding checks needed for education adviser roles?",
        answer:
          "Often, yes. Roles that involve work in schools or with children may need an enhanced criminal record check and safer-recruitment practice. Requirements depend on the duties and the UK nation concerned.",
      },
    ],
  },

  // --- Sales & Business Development ---
  "business-sales-executives": {
    seoTitle: "Sales Executive Recruitment UK",
    metaDescription:
      "Business sales executive recruitment in the UK: structured assessment of pipeline management, target performance, client relationships and sales-cycle fit.",
    extraChallenge: "Matching a candidate's sales cycle and deal size experience to your own",
    approachDetail:
      "Interviews explore targets against results over several periods, the candidate's pipeline discipline and sales process, and a role-play or scenario based on your product and buyer.",
    faqs: [
      {
        id: "sales-exec-verify",
        question: "How can we verify a sales executive's claimed results?",
        answer:
          "Ask for performance against target over several periods with context (territory, deal size, team support), test the detail in interview and confirm with referees who managed them. Consistency across those sources matters more than a single headline figure.",
      },
      {
        id: "sales-exec-contract",
        question: "When does a contract sales hire make sense?",
        answer:
          "For a defined campaign, a product launch or testing a new market before committing to permanent headcount. For ongoing territory or account ownership, a permanent hire usually builds more value.",
      },
    ],
  },
  "sales-business-development-managers": {
    seoTitle: "Business Development Manager Recruitment UK",
    metaDescription:
      "Sales and business development manager recruitment in the UK, assessing new-business generation, account growth and the ability to lead a sales team.",
    extraChallenge: "Deciding whether the role is primarily a hunter, a farmer or a team leader",
    approachDetail:
      "The brief separates new-business, account-management and team-leadership expectations, and candidates are assessed against the balance your role actually needs.",
    faqs: [
      {
        id: "bdm-hunter-farmer",
        question: "What is the difference between a business development manager and an account manager?",
        answer:
          "A business development manager is usually focused on winning new clients or markets, while an account manager grows and retains existing clients. Many roles combine both, so the brief should state the expected split.",
      },
      {
        id: "bdm-leadership",
        question: "How do you assess sales management capability?",
        answer:
          "By looking at how the candidate has hired, coached and managed a team's performance, forecast accurately and improved team results, rather than only their personal sales record.",
      },
    ],
  },
  "buyers-procurement-officers": {
    seoTitle: "Buyer & Procurement Officer Recruitment UK",
    metaDescription:
      "Buyer and procurement recruitment in the UK: assessing category knowledge, negotiation, supplier management and, where relevant, CIPS qualifications.",
    extraChallenge: "Public sector roles requiring knowledge of formal procurement rules",
    approachDetail:
      "Assessment covers category experience, negotiation examples with measurable outcomes, supplier risk and relationship management and, where the role requires it, CIPS qualification status or public procurement experience.",
    faqs: [
      {
        id: "procurement-cips",
        question: "Do procurement roles require a CIPS qualification?",
        answer:
          "Not always, but CIPS qualifications are widely recognised in UK procurement and are often requested for more senior or strategic roles. Practical category and negotiation experience remains just as important.",
      },
      {
        id: "procurement-public-sector",
        question: "Is public sector procurement experience different?",
        answer:
          "Yes. Public bodies follow formal procurement legislation and procedures, so roles in or selling to the public sector often benefit from candidates who have run compliant tender processes.",
      },
    ],
  },
  "market-research-interviewers": {
    seoTitle: "Market Research Interviewer Recruitment UK",
    metaDescription:
      "Market research interviewer recruitment in the UK for fieldwork and telephone projects: flexible, project-based resourcing with communication skills assessed.",
    extraChallenge: "Scaling interviewer numbers quickly for projects with tight fieldwork windows",
    approachDetail:
      "Screening tests clear, neutral questioning and accurate recording through a short practical exercise, and familiarity with professional standards such as the Market Research Society Code of Conduct is an advantage.",
    faqs: [
      {
        id: "mr-interviewer-skills",
        question: "What makes a good market research interviewer?",
        answer:
          "Clear communication, the ability to ask questions neutrally without leading respondents, accuracy in recording answers, resilience and reliability. A short practical exercise shows these better than a CV.",
      },
      {
        id: "mr-interviewer-flexible",
        question: "Can interviewers be recruited for a single project?",
        answer:
          "Yes. Interviewer roles often suit fixed-term, project-based or flexible engagement, with the employment model agreed at the start of each project.",
      },
    ],
  },
  brokers: {
    seoTitle: "Insurance & Financial Broker Recruitment UK",
    metaDescription:
      "Broker recruitment for UK financial services firms: assessing client relationships, market knowledge, relevant qualifications and conduct requirements.",
    extraChallenge: "Meeting the firm's regulatory fitness and propriety and conduct obligations",
    approachDetail:
      "Where the firm is regulated by the Financial Conduct Authority, the hiring process reflects its obligations for assessing fitness and propriety and taking regulatory references for relevant roles, alongside qualification checks and track record.",
    faqs: [
      {
        id: "broker-regulatory-references",
        question: "Are regulatory references needed when hiring brokers?",
        answer:
          "For many roles in FCA-regulated firms, yes. Firms typically need to obtain regulatory references and assess fitness and propriety for certain roles. The requirements depend on the firm and the role, so compliance should confirm them before an offer is made.",
      },
      {
        id: "broker-client-book",
        question: "Can a broker bring their clients with them?",
        answer:
          "Clients choose their own broker, but contractual restrictions often limit soliciting former clients for a period. Hiring decisions should rest on capability and conduct rather than an expected book of business.",
      },
    ],
  },
  "insurance-underwriters": {
    seoTitle: "Insurance Underwriter Recruitment UK",
    metaDescription:
      "Insurance underwriter recruitment in the UK: assessing risk judgement, class-of-business experience, broker relationships and CII qualification progress.",
    extraChallenge: "Balancing technical underwriting judgement with broker relationship and trading skill",
    approachDetail:
      "Assessment explores the classes and size of risk the candidate has written, their authority levels, pricing and portfolio management approach and, where relevant, Chartered Insurance Institute (CII) qualification progress.",
    faqs: [
      {
        id: "underwriter-cii",
        question: "Do underwriters need CII qualifications?",
        answer:
          "Many employers prefer or support CII qualifications, such as the Diploma or Advanced Diploma in Insurance, particularly for progression. Relevant class-of-business experience and sound judgement usually carry equal weight.",
      },
      {
        id: "underwriter-authority",
        question: "Why does underwriting authority matter in recruitment?",
        answer:
          "Authority levels show the size and complexity of risk a candidate has been trusted to write. Matching that experience to the authority your role carries is one of the most practical ways to judge seniority.",
      },
    ],
  },

  // --- IT & Data ---
  "it-business-analysts-architects-systems-designers": {
    seoTitle: "IT Business Analyst & Architect Recruitment UK",
    metaDescription:
      "Recruitment of IT business analysts, solution architects and systems designers in the UK, assessing technical depth, delivery experience and stakeholder skills.",
    extraChallenge: "Matching architectural experience to your technology stack and scale",
    approachDetail:
      "Technical discussion covers the systems, platforms and methods the candidate has worked with, while case-based questions test requirements analysis, design trade-offs and communication with non-technical stakeholders.",
    faqs: [
      {
        id: "ba-vs-architect",
        question: "What is the difference between a business analyst and a solution architect?",
        answer:
          "A business analyst defines what the business needs and why, through requirements and process analysis. A solution architect designs how technology will meet those needs. Some roles combine elements of both, so the brief should be precise.",
      },
      {
        id: "architect-contract-or-perm",
        question: "Should we hire an architect on contract or permanently?",
        answer:
          "Contract suits a defined programme, migration or design phase; permanent suits long-term ownership of your architecture and standards. Many organisations combine a permanent lead with contract specialists during major change.",
      },
    ],
  },
  "it-operations-technicians": {
    seoTitle: "IT Operations Technician Recruitment UK",
    metaDescription:
      "IT operations technician recruitment in the UK: hands-on screening of infrastructure, networking, monitoring and incident skills for business-critical systems.",
    extraChallenge: "Verifying certifications are backed by practical, recent experience",
    approachDetail:
      "Screening includes scenario-based troubleshooting relevant to your environment, and checks that relevant vendor certifications are matched by hands-on experience with incident, change and monitoring processes.",
    faqs: [
      {
        id: "it-ops-certifications",
        question: "Are certifications important for IT operations roles?",
        answer:
          "They show structured knowledge of specific platforms and are often useful for screening, but practical experience in comparable environments is usually a better predictor of performance. Scenario questions help confirm both.",
      },
      {
        id: "it-ops-on-call",
        question: "How should on-call or shift work be handled in recruitment?",
        answer:
          "State the pattern, frequency and any allowances clearly in the advert and early conversations. Being upfront avoids late withdrawals and early leavers who did not expect the commitment.",
      },
    ],
  },
  "it-user-support-technicians": {
    seoTitle: "IT Support Technician Recruitment UK",
    metaDescription:
      "IT support and service desk technician recruitment in the UK, assessing troubleshooting, communication and service skills for single hires or volume teams.",
    extraChallenge: "Building a pipeline for roles that often see people progress quickly into other IT jobs",
    approachDetail:
      "Short practical troubleshooting tasks and role-played user calls test both technical competence and the ability to explain fixes patiently, with clear progression paths discussed to support retention.",
    faqs: [
      {
        id: "it-support-entry-level",
        question: "Can IT support roles be filled by entry-level candidates?",
        answer:
          "Often, yes. First-line support is a common entry route into IT. Aptitude, communication and a structured training plan can matter more than prior experience, which can widen the candidate pool.",
      },
      {
        id: "it-support-volume",
        question: "How do you recruit a whole service desk team?",
        answer:
          "Through a consistent volume process: clear role profiles, efficient online screening, standardised practical assessment and coordinated interview days. Larger or ongoing programmes can be run through recruitment process outsourcing.",
      },
    ],
  },
  "data-analysts": {
    seoTitle: "Data Analyst Recruitment UK",
    metaDescription:
      "Data analyst recruitment in the UK: practical assessment of SQL, analytics tools, statistical reasoning and the ability to explain insight to decision-makers.",
    extraChallenge: "Defining whether the role is reporting, analytics, data engineering or data science",
    approachDetail:
      "A short, realistic exercise using anonymised or sample data is often the clearest test, followed by a discussion of the candidate's reasoning, data quality checks and how they would present findings.",
    faqs: [
      {
        id: "data-analyst-test",
        question: "Should data analyst candidates complete a technical test?",
        answer:
          "A short, relevant exercise is usually worthwhile, but keep it proportionate and never use real personal data. A discussion of how the candidate approached it often reveals more than the answer itself.",
      },
      {
        id: "data-analyst-vs-scientist",
        question: "What is the difference between a data analyst and a data scientist?",
        answer:
          "Data analysts mainly turn existing data into reporting and insight for decisions; data scientists typically build statistical or machine learning models. Titles vary between employers, so the brief should describe the actual work.",
      },
    ],
  },
  "information-technology-trainers": {
    seoTitle: "IT Trainer Recruitment UK",
    metaDescription:
      "IT trainer recruitment in the UK for software rollouts, digital skills and technical training: assessing subject expertise and engaging training delivery.",
    extraChallenge: "Finding trainers available for the exact window of a system implementation",
    approachDetail:
      "Candidates are typically asked to deliver a short training segment, which shows their ability to adapt explanations for different skill levels, alongside a review of their technical knowledge of the relevant systems.",
    faqs: [
      {
        id: "it-trainer-microteach",
        question: "How do you assess an IT trainer?",
        answer:
          "A short training session or micro-teach on a relevant topic is one of the best tests, combined with questions about how they design training, check learning and adapt for different audiences.",
      },
      {
        id: "it-trainer-rollout",
        question: "Is contract or permanent better for a software rollout?",
        answer:
          "Contract trainers often suit a defined implementation or upgrade. Ongoing digital skills programmes may justify a permanent role, which can be planned as part of your wider learning strategy.",
      },
    ],
  },

  // --- Healthcare & Care ---
  "generalist-medical-practitioners": {
    seoTitle: "GP & Generalist Doctor Recruitment UK",
    metaDescription:
      "GP and generalist medical practitioner recruitment in the UK, with GMC registration and licence to practise checked alongside experience and practice fit.",
    extraChallenge: "Balancing sessional, salaried and partnership expectations",
    approachDetail:
      "Pre-employment checks include confirming registration and a licence to practise with the General Medical Council and, for NHS GP work, inclusion on the relevant performers list, alongside references and occupational health and criminal record checks appropriate to the role.",
    faqs: [
      {
        id: "gp-checks",
        question: "What checks are required when recruiting a GP?",
        answer:
          "Typically GMC registration with a licence to practise, inclusion on the relevant performers list for NHS primary care, appropriate criminal record checks, references, right to work and occupational health clearance. Exact requirements depend on the setting and UK nation.",
      },
      {
        id: "gp-salaried-vs-sessional",
        question: "Should we recruit a salaried GP or use sessional cover?",
        answer:
          "Salaried roles provide continuity of care and team stability; sessional or locum cover provides flexibility for fluctuating demand or absence. Many practices use both, planned around list size and service needs.",
      },
    ],
  },
  "specialist-medical-practitioners": {
    seoTitle: "Specialist Doctor & Consultant Recruitment UK",
    metaDescription:
      "Specialist medical practitioner and consultant recruitment in the UK: targeted search with GMC specialist registration and clinical experience verified.",
    extraChallenge: "Very small pools of candidates with the exact sub-specialty experience",
    approachDetail:
      "Search uses specialty networks and direct approach, with General Medical Council registration (including entry on the Specialist Register where the role requires it) and relevant clinical experience verified before shortlisting.",
    faqs: [
      {
        id: "specialist-register",
        question: "What is the GMC Specialist Register?",
        answer:
          "It is the part of the General Medical Council's register that lists doctors eligible to work as substantive consultants in a specialty in the UK health service. Whether entry is required depends on the role, so check the post's requirements.",
      },
      {
        id: "specialist-private-sector",
        question: "Can you recruit specialists for private healthcare providers?",
        answer:
          "Yes. Private providers have their own credentialing and practising-privileges processes, which should be planned into the timeline alongside standard registration and background checks.",
      },
    ],
  },
  "occupational-therapists": {
    seoTitle: "Occupational Therapist Recruitment UK",
    metaDescription:
      "Occupational therapist recruitment in the UK for NHS, social care, education and private settings, with HCPC registration and setting experience verified.",
    extraChallenge: "Competition for experienced therapists in community and specialist settings",
    approachDetail:
      "Registration with the Health and Care Professions Council (HCPC) is verified, and assessment focuses on caseload experience, assessment and intervention skills, and the setting, whether hospital, community, mental health, education or housing adaptations.",
    faqs: [
      {
        id: "ot-registration",
        question: "Do occupational therapists need to be registered?",
        answer:
          "Yes. 'Occupational therapist' is a protected title in the UK, and practitioners must be registered with the Health and Care Professions Council. Registration should be checked before an offer is confirmed.",
      },
      {
        id: "ot-band",
        question: "How do we decide the right level for an OT role?",
        answer:
          "Consider caseload complexity, autonomy, supervision of others and service development responsibilities. In NHS settings this maps to a pay band; elsewhere the same factors guide seniority.",
      },
    ],
  },
  "speech-language-therapists": {
    seoTitle: "Speech & Language Therapist Recruitment UK",
    metaDescription:
      "Speech and language therapist recruitment in the UK for schools, NHS, care and private practice, with HCPC registration and client-group experience checked.",
    extraChallenge: "Matching experience with specific client groups such as children, adults or dysphagia",
    approachDetail:
      "Health and Care Professions Council (HCPC) registration is verified, and assessment explores the client groups, conditions and settings the therapist has worked with, including any specialist competencies the role requires.",
    faqs: [
      {
        id: "slt-registration",
        question: "Must speech and language therapists be HCPC registered?",
        answer:
          "Yes. 'Speech and language therapist' is a protected title, and practitioners must be registered with the HCPC. Many are also members of the Royal College of Speech and Language Therapists.",
      },
      {
        id: "slt-schools",
        question: "Can schools recruit speech and language therapists directly?",
        answer:
          "Yes, schools and trusts increasingly employ or commission therapists directly. Roles working with children also need appropriate safeguarding checks.",
      },
    ],
  },
  "clinical-psychologists": {
    seoTitle: "Clinical Psychologist Recruitment UK",
    metaDescription:
      "Clinical psychologist recruitment in the UK: search across NHS, private and specialist services, with HCPC practitioner psychologist registration verified.",
    extraChallenge: "Finding candidates with experience in specific therapeutic models or client groups",
    approachDetail:
      "Registration with the HCPC as a practitioner psychologist (clinical) is verified, and assessment explores therapeutic approaches, clinical populations, supervision experience and service development.",
    faqs: [
      {
        id: "clin-psych-registration",
        question: "What registration does a clinical psychologist need?",
        answer:
          "In the UK, 'clinical psychologist' is a protected title, and practitioners must be registered with the Health and Care Professions Council as a practitioner psychologist. This should always be checked before an offer.",
      },
      {
        id: "clin-psych-supervision",
        question: "Why does supervision experience matter in clinical psychology hiring?",
        answer:
          "Senior clinical psychologists often supervise trainees, assistant psychologists or other professionals, so experience of clinical supervision is a key indicator of readiness for senior roles.",
      },
    ],
  },
  psychologists: {
    seoTitle: "Occupational & Educational Psychologist Recruitment",
    metaDescription:
      "Recruitment of occupational, educational, forensic and other psychologists in the UK, with HCPC registration checked where the title is protected.",
    extraChallenge: "Understanding which psychologist titles are protected and which are not",
    approachDetail:
      "Where the role uses a protected title, such as occupational, educational, forensic, counselling or health psychologist, HCPC registration is verified; for other roles, relevant qualifications such as British Psychological Society membership or test-user accreditation are reviewed.",
    faqs: [
      {
        id: "psych-protected-titles",
        question: "Which psychologist titles are protected in the UK?",
        answer:
          "Several practitioner psychologist titles, including clinical, counselling, educational, forensic, health, occupational and sport and exercise psychologist, are protected and require HCPC registration. 'Psychologist' on its own is not protected, so check the exact title used.",
      },
      {
        id: "psych-occupational",
        question: "What does an occupational psychologist do for employers?",
        answer:
          "Occupational psychologists apply psychology to work, for example designing assessments, leadership development, wellbeing programmes and organisational change, and are often involved in fair selection design.",
      },
    ],
  },
  "medical-radiographers": {
    seoTitle: "Radiographer Recruitment UK",
    metaDescription:
      "Diagnostic and therapeutic radiographer recruitment in the UK, with HCPC registration and modality experience such as CT, MRI or ultrasound verified.",
    extraChallenge: "Specific modality experience, such as CT, MRI or interventional work",
    approachDetail:
      "Health and Care Professions Council registration is verified, and assessment confirms the candidate's diagnostic or therapeutic background, modality experience, on-call competence and familiarity with radiation protection requirements.",
    faqs: [
      {
        id: "radiographer-diagnostic-therapeutic",
        question: "What is the difference between diagnostic and therapeutic radiographers?",
        answer:
          "Diagnostic radiographers produce images to diagnose injury and disease; therapeutic radiographers plan and deliver radiotherapy treatment, mainly for cancer. They train separately, so roles need the right profession.",
      },
      {
        id: "radiographer-registration",
        question: "Is HCPC registration required for radiographers?",
        answer:
          "Yes. 'Radiographer' is a protected title in the UK, and radiographers must be registered with the Health and Care Professions Council.",
      },
    ],
  },
  "medical-dental-technicians": {
    seoTitle: "Medical & Dental Technician Recruitment UK",
    metaDescription:
      "Medical and dental technician recruitment in the UK, verifying technical qualifications, precision skills and GDC registration for dental technicians.",
    extraChallenge: "Verifying precision skills that are hard to judge from a CV",
    approachDetail:
      "Dental technicians are checked for registration with the General Dental Council, and practical evidence of work, such as a trade test or portfolio, is used where possible to verify precision and quality standards.",
    faqs: [
      {
        id: "dental-tech-gdc",
        question: "Do dental technicians need to be registered?",
        answer:
          "Yes. Dental technicians working in the UK must be registered with the General Dental Council as dental care professionals. Requirements for other medical technician roles vary by discipline.",
      },
      {
        id: "technician-trade-test",
        question: "Is a practical test useful when hiring technicians?",
        answer:
          "Often. A short practical task or a review of previous work shows precision and quality more reliably than an interview alone, provided the test is relevant and proportionate.",
      },
    ],
  },
  "early-education-childcare-practitioners": {
    seoTitle: "Early Years & Childcare Practitioner Recruitment",
    metaDescription:
      "Early years and childcare practitioner recruitment in the UK, with qualifications, enhanced DBS and safer-recruitment checks built into the process.",
    extraChallenge: "Meeting staff-to-child ratios that depend on staff qualification levels",
    approachDetail:
      "Qualifications are checked against the early years requirements that apply (in England, the Early Years Foundation Stage framework, inspected by Ofsted), and safer-recruitment practice includes enhanced criminal record checks and references.",
    faqs: [
      {
        id: "early-years-qualifications",
        question: "Why do early years qualifications matter for staffing?",
        answer:
          "In England, the qualifications staff hold affect which ratios a setting can operate, so the qualification level of new hires has a direct operational impact. Requirements differ in Scotland, Wales and Northern Ireland.",
      },
      {
        id: "early-years-safer-recruitment",
        question: "What does safer recruitment involve for childcare roles?",
        answer:
          "Typically checking identity and right to work, an enhanced criminal record check with a barred-list check where eligible, references, explaining gaps in employment history and confirming qualifications, all before the person starts work.",
      },
    ],
  },
  "veterinary-nurses": {
    seoTitle: "Veterinary Nurse Recruitment UK",
    metaDescription:
      "Registered veterinary nurse recruitment in the UK for practices and hospitals, with RCVS registration verified and clinical experience assessed.",
    extraChallenge: "Competition between practices for experienced registered veterinary nurses",
    approachDetail:
      "Registration with the Royal College of Veterinary Surgeons (RCVS) is verified, and assessment covers clinical skills, theatre and anaesthetic monitoring experience, client communication and the species or caseload the practice treats.",
    faqs: [
      {
        id: "rvn-registration",
        question: "What does 'registered veterinary nurse' mean?",
        answer:
          "A registered veterinary nurse (RVN) is on the RCVS register and can carry out certain procedures under veterinary direction. Registration should be checked before the person is engaged in that capacity.",
      },
      {
        id: "rvn-retention",
        question: "How can practices retain veterinary nurses?",
        answer:
          "Clear career progression, use of their full clinical skills, manageable rotas, CPD support and good team leadership are commonly cited. Discussing these openly during recruitment also improves offer acceptance.",
      },
    ],
  },
  "senior-care-workers": {
    seoTitle: "Senior Care Worker Recruitment UK",
    metaDescription:
      "Senior care worker recruitment for UK care homes and home care, with care experience, qualifications and enhanced DBS checks verified before starting.",
    extraChallenge: "Finding senior carers confident with medication administration and leading shifts",
    approachDetail:
      "Assessment covers care experience, medication competence, shift leadership and relevant qualifications, with safer-recruitment checks including enhanced criminal record checks and references from previous care employment.",
    faqs: [
      {
        id: "senior-carer-difference",
        question: "What does a senior care worker do that a care worker does not?",
        answer:
          "Senior care workers typically lead shifts, administer or oversee medication, support and mentor care staff, contribute to care planning and act as the first point of escalation. The exact scope depends on the service.",
      },
      {
        id: "senior-carer-sponsorship",
        question: "Can we sponsor overseas care workers?",
        answer:
          "Sponsorship rules for care roles have changed several times and remain subject to change, so check current Home Office guidance before planning overseas recruitment. Apex HR's Skilled Worker sponsorship HR support can help with the process.",
      },
    ],
  },
  "houseparents-residential-wardens": {
    seoTitle: "Houseparent & Residential Warden Recruitment",
    metaDescription:
      "Houseparent and residential warden recruitment in the UK for boarding schools and residential settings, with pastoral experience and safeguarding checks.",
    extraChallenge: "Live-in or out-of-hours commitments that narrow the candidate pool",
    approachDetail:
      "Safer-recruitment practice applies throughout, including enhanced criminal record checks and references, and assessment explores pastoral care, behaviour management and how candidates handle the realities of residential and out-of-hours work.",
    faqs: [
      {
        id: "houseparent-live-in",
        question: "How should live-in arrangements be handled in recruitment?",
        answer:
          "Be explicit early about accommodation, hours, time off and any family arrangements. Clarity reduces late withdrawals; tax and employment implications of accommodation should be checked with a qualified adviser.",
      },
      {
        id: "houseparent-safeguarding",
        question: "What safeguarding training should a houseparent have?",
        answer:
          "Training appropriate to the setting, such as the safeguarding requirements set out in statutory guidance for schools, plus any setting-specific training. Previous training should be confirmed and refreshed after appointment.",
      },
    ],
  },

  // --- Finance & Compliance ---
  "financial-accounting-technicians": {
    seoTitle: "Accounting Technician Recruitment UK",
    metaDescription:
      "Financial and accounting technician recruitment in the UK: assessing ledgers, reconciliations and reporting, with AAT, ACCA or CIMA progress verified.",
    extraChallenge: "Balancing study support for part-qualified staff with workload demands",
    approachDetail:
      "Qualification status with bodies such as AAT, ACCA or CIMA is confirmed, and practical questions or a short exercise test reconciliations, journals and system experience relevant to your finance function.",
    faqs: [
      {
        id: "accounting-tech-qualifications",
        question: "Which qualifications are common for accounting technicians?",
        answer:
          "AAT is widely held, and many technicians are studying towards chartered qualifications such as ACCA or CIMA. Practical experience of your systems and processes matters as much as qualification level.",
      },
      {
        id: "accounting-tech-study-support",
        question: "Should we offer study support to part-qualified candidates?",
        answer:
          "Study support is often a deciding factor for part-qualified candidates and can aid retention. If offered, agree study leave and any repayment terms clearly in writing.",
      },
    ],
  },
  "credit-controllers": {
    seoTitle: "Credit Controller Recruitment UK",
    metaDescription:
      "Credit controller recruitment in the UK: assessing collections experience, customer negotiation, ledger management and calm, professional communication.",
    extraChallenge: "Recovering debts while protecting valuable customer relationships",
    approachDetail:
      "Scenario-based questions or role-play test how candidates handle difficult collection conversations, alongside their experience of aged-debt reporting, dispute resolution and the systems you use.",
    faqs: [
      {
        id: "credit-controller-b2b-b2c",
        question: "Is business-to-business credit control different from consumer collections?",
        answer:
          "Yes. Consumer credit activity is subject to Financial Conduct Authority regulation and specific conduct rules, while business-to-business credit control focuses more on account relationships and dispute resolution. Experience in the right context matters.",
      },
      {
        id: "credit-controller-skills",
        question: "What makes a strong credit controller?",
        answer:
          "Persistence combined with tact, accurate record-keeping, the ability to prioritise an aged-debt ledger and confidence negotiating with both accounts teams and senior customers.",
      },
    ],
  },
  "bookkeepers-payroll-wages-clerks": {
    seoTitle: "Bookkeeper & Payroll Clerk Recruitment UK",
    metaDescription:
      "Bookkeeper and payroll clerk recruitment in the UK: verifying accuracy, payroll software and RTI experience, and understanding of statutory payments.",
    extraChallenge: "Payroll experience with statutory payments, pensions auto-enrolment and RTI submissions",
    approachDetail:
      "Assessment includes a short accuracy exercise and questions on the payroll and accounting software the candidate has used, Real Time Information submissions to HMRC, statutory payments and pension auto-enrolment.",
    faqs: [
      {
        id: "payroll-clerk-test",
        question: "Should payroll candidates complete an accuracy test?",
        answer:
          "A short, relevant exercise is a sensible way to check accuracy and understanding of common payroll calculations, provided it uses dummy data and reflects the actual role.",
      },
      {
        id: "payroll-in-house-or-outsourced",
        question: "Should we hire a payroll clerk or outsource payroll?",
        answer:
          "It depends on headcount, complexity and the control you want. Apex HR's payroll advisory service can help compare in-house and outsourced options before you recruit.",
      },
    ],
  },
  "taxation-experts": {
    seoTitle: "Tax Specialist Recruitment UK",
    metaDescription:
      "Tax specialist recruitment for UK practices and in-house teams: search for corporate, personal, indirect and employment tax experts with CTA or ATT status.",
    extraChallenge: "Specialist areas, such as indirect or international tax, with very small candidate pools",
    approachDetail:
      "Qualifications such as CTA (Chartered Institute of Taxation) or ATT are verified where required, and technical discussion confirms the specific tax disciplines, client types and advisory or compliance balance the role needs.",
    faqs: [
      {
        id: "tax-cta-att",
        question: "What are the CTA and ATT qualifications?",
        answer:
          "The Chartered Tax Adviser (CTA) qualification from the Chartered Institute of Taxation is widely regarded as the senior UK tax qualification; the ATT is a technician-level tax qualification. Many roles also accept chartered accountancy with tax experience.",
      },
      {
        id: "tax-practice-vs-industry",
        question: "Is hiring a tax specialist for industry different from a practice?",
        answer:
          "Yes. In-house roles focus on one business's tax risk, compliance and planning, often with more stakeholder management; practice roles serve multiple clients with billable work. Candidates often favour one or the other.",
      },
    ],
  },
  "estimators-valuers-assessors": {
    seoTitle: "Estimator, Valuer & Assessor Recruitment UK",
    metaDescription:
      "Estimator, valuer and assessor recruitment in the UK: verifying sector experience, technical accuracy and accreditation such as RICS registered valuer status.",
    extraChallenge: "Verifying that professional accreditation matches the type of work the role involves",
    approachDetail:
      "Relevant accreditation, such as RICS membership or Registered Valuer status for valuation work, is verified where required, and examples of past estimates or valuations are discussed to test method, accuracy and defensibility.",
    faqs: [
      {
        id: "valuer-rics",
        question: "Do valuers need to be RICS accredited?",
        answer:
          "Many valuation roles, particularly for lending, financial reporting or regulated purposes, require RICS membership and Registered Valuer status. Requirements depend on the purpose of the valuation and the employer's obligations.",
      },
      {
        id: "estimator-construction",
        question: "What should a construction estimator be able to demonstrate?",
        answer:
          "Experience pricing similar types and sizes of project, working from drawings and specifications, obtaining and comparing supplier and subcontractor quotes, and an understanding of how estimating feeds into tenders and margins.",
      },
    ],
  },
  "standards-regulations-inspectors": {
    seoTitle: "Inspector & Regulatory Compliance Recruitment",
    metaDescription:
      "Recruitment of standards and regulatory inspectors in the UK, assessing technical knowledge, independence, evidence gathering and clear written reporting.",
    extraChallenge: "Testing written reporting quality and evidence handling, not just technical knowledge",
    approachDetail:
      "A written exercise based on a realistic scenario is often used to test evidence gathering, objective judgement and report writing, alongside verification of qualifications or warrants relevant to the regulatory regime.",
    faqs: [
      {
        id: "inspector-independence",
        question: "How do you assess an inspector's independence?",
        answer:
          "Through scenario questions about conflicts of interest, pressure from the people being inspected and how decisions were evidenced and recorded, supported by references that comment on judgement and integrity.",
      },
      {
        id: "inspector-writing",
        question: "Why is a written exercise useful for inspector roles?",
        answer:
          "Inspection outcomes rely on clear, accurate and defensible reports. A short written task shows how a candidate structures evidence and conclusions far better than an interview alone.",
      },
    ],
  },

  // --- Engineering & Technical ---
  "engineering-technicians": {
    seoTitle: "Engineering Technician Recruitment UK",
    metaDescription:
      "Engineering technician recruitment in the UK across mechanical, electrical and manufacturing disciplines, with qualifications and hands-on skills verified.",
    extraChallenge: "Competing for technicians with relevant apprenticeship and on-the-job experience",
    approachDetail:
      "Discipline-specific technical questions and, where useful, a practical assessment confirm hands-on competence; relevant qualifications such as HNC, HND or completed apprenticeships, and any EngTech registration, are verified.",
    faqs: [
      {
        id: "eng-tech-registration",
        question: "What is EngTech registration?",
        answer:
          "Engineering Technician (EngTech) is a professional registration awarded through Engineering Council licensed institutions. It is not required for most roles but indicates assessed competence and commitment to professional standards.",
      },
      {
        id: "eng-tech-apprentice-route",
        question: "Should we consider developing our own engineering technicians?",
        answer:
          "Where demand is ongoing, apprenticeships can build a reliable pipeline alongside experienced hires. Combining both routes is often the most sustainable approach for skilled technical roles.",
      },
    ],
  },
  "quality-assurance-technicians": {
    seoTitle: "Quality Assurance Technician Recruitment UK",
    metaDescription:
      "Quality assurance technician recruitment in the UK: assessing inspection, testing, documentation and experience with standards such as ISO 9001.",
    extraChallenge: "Sector-specific standards, such as food safety, aerospace or medical device requirements",
    approachDetail:
      "Assessment covers inspection and measurement methods, non-conformance and root-cause investigation, documentation discipline and experience with the quality management standards relevant to your sector, such as ISO 9001.",
    faqs: [
      {
        id: "qa-standards",
        question: "Which quality standards should QA technicians know?",
        answer:
          "ISO 9001 is common across sectors, with others depending on the industry, for example food safety schemes, aerospace or automotive quality standards, or medical device requirements. Experience of your standard shortens onboarding.",
      },
      {
        id: "qa-vs-qc",
        question: "What is the difference between quality assurance and quality control?",
        answer:
          "Quality control checks products or outputs against specifications; quality assurance designs and maintains the processes that prevent defects. Many technician roles cover both, so define the balance in the brief.",
      },
    ],
  },
  "planning-process-production-technicians": {
    seoTitle: "Production Planning Technician Recruitment",
    metaDescription:
      "Production planning and process technician recruitment in the UK, assessing scheduling, process control, continuous improvement and ERP or MRP experience.",
    extraChallenge: "Finding candidates with experience of your planning or ERP systems",
    approachDetail:
      "Candidates discuss planning and scheduling decisions they have made, process improvements they have led and their experience with ERP or MRP systems, with a short scenario testing how they handle conflicting priorities on the line.",
    faqs: [
      {
        id: "planning-tech-ci",
        question: "Is continuous improvement experience important for production technicians?",
        answer:
          "Often. Familiarity with methods such as lean or structured problem solving helps technicians improve output and reduce waste, though the depth needed depends on the role.",
      },
      {
        id: "planning-tech-systems",
        question: "How much does ERP or MRP system experience matter?",
        answer:
          "It shortens onboarding, but planning logic and judgement transfer between systems. Prioritise system experience when the role starts with little training time.",
      },
    ],
  },
  "cad-drawing-architectural-technicians": {
    seoTitle: "CAD & Architectural Technician Recruitment UK",
    metaDescription:
      "CAD, drawing and architectural technician recruitment in the UK: portfolio review and software checks for AutoCAD, Revit and BIM-based project work.",
    extraChallenge: "Verifying BIM workflow experience as well as drawing software proficiency",
    approachDetail:
      "Portfolio or work-sample review is combined with questions on the software and standards used (for example AutoCAD, Revit and BIM workflows), the project types drawn and knowledge of construction detailing and regulations.",
    faqs: [
      {
        id: "cad-bim",
        question: "Why does BIM experience matter for technicians?",
        answer:
          "Many projects are delivered using Building Information Modelling, which involves collaborative models and information standards rather than standalone drawings. Experience of BIM workflows reduces training time on those projects.",
      },
      {
        id: "cad-ciat",
        question: "Are architectural technicians professionally registered?",
        answer:
          "Some are members of the Chartered Institute of Architectural Technologists (CIAT). Membership is not usually mandatory, but it can indicate professional standards and development.",
      },
    ],
  },
  "metalworking-production-maintenance-fitters": {
    seoTitle: "Maintenance Fitter Recruitment UK",
    metaDescription:
      "Maintenance and production fitter recruitment in the UK: verifying mechanical and electrical skills, trade qualifications and planned maintenance experience.",
    extraChallenge: "Multi-skilled mechanical and electrical fitters are particularly hard to find",
    approachDetail:
      "Trade qualifications and apprenticeships are verified, and technical questions or a practical assessment test fault-finding, planned and reactive maintenance, and safe isolation practice on the equipment you run.",
    faqs: [
      {
        id: "fitter-multiskilled",
        question: "What is a multi-skilled maintenance fitter?",
        answer:
          "A fitter competent in both mechanical and electrical maintenance, able to diagnose and repair faults across systems. Because these skills are in demand, being clear which are essential helps widen the pool.",
      },
      {
        id: "fitter-shifts",
        question: "Do shift patterns affect fitter recruitment?",
        answer:
          "Yes. Shift and on-call patterns, overtime and allowances strongly influence candidates' decisions, so they should be stated clearly in adverts and early conversations.",
      },
    ],
  },
  "precision-instrument-makers-repairers": {
    seoTitle: "Precision Instrument Maker Recruitment UK",
    metaDescription:
      "Recruitment of precision instrument makers and repairers in the UK: specialist search for fine-tolerance craft skills, calibration and repair experience.",
    extraChallenge: "Succession risk where skills sit with a few experienced specialists",
    approachDetail:
      "Search uses specialist trade and sector networks, and practical evidence, such as a trade test or examples of work, confirms precision, calibration and repair capability against your instruments and tolerances.",
    faqs: [
      {
        id: "precision-succession",
        question: "How can we protect specialist precision skills in our business?",
        answer:
          "Combine external hiring with structured knowledge transfer, apprenticeships or trainee roles alongside experienced makers. Succession planning for niche skills should start well before key people retire.",
      },
      {
        id: "precision-adjacent-skills",
        question: "Can candidates from related trades be trained into precision roles?",
        answer:
          "Sometimes. People from toolmaking, horology, engineering or calibration backgrounds may transfer well with training. Being open to adjacent skills can widen a very small pool.",
      },
    ],
  },
  "security-system-installers-repairers": {
    seoTitle: "Security System Installer Recruitment UK",
    metaDescription:
      "Security system installer and engineer recruitment in the UK: verifying intruder, CCTV, access control and fire experience, plus vetting where required.",
    extraChallenge: "Security vetting requirements for engineers working in sensitive premises",
    approachDetail:
      "Experience across intruder alarm, CCTV, access control or fire systems is verified, and where the employer is approved by a certification body such as NSI or SSAIB, the vetting and screening its standards require are built into the process.",
    faqs: [
      {
        id: "security-installer-vetting",
        question: "Why is vetting needed for security installers?",
        answer:
          "Installers have access to clients' premises and security systems, so employers certified by bodies such as NSI or SSAIB usually need to screen staff to recognised security standards. Allow time for this in the hiring plan.",
      },
      {
        id: "security-installer-customer",
        question: "How important are customer skills for installers?",
        answer:
          "Very. Engineers often work alone at customer sites, explain systems to users and represent the business, so communication and professionalism are assessed alongside technical skill.",
      },
    ],
  },
  "skilled-metal-electrical-electronic-trades-supervisors": {
    seoTitle: "Electrical & Engineering Trades Supervisor Recruitment",
    metaDescription:
      "Recruitment of skilled metal, electrical and electronic trades supervisors in the UK, assessing trade credibility, safety leadership and team supervision.",
    extraChallenge: "Moving strong tradespeople into supervision without losing productivity",
    approachDetail:
      "Trade qualifications and relevant cards or certificates are verified, and assessment focuses on how candidates plan work, lead safety, manage performance and develop apprentices within their team.",
    faqs: [
      {
        id: "trades-supervisor-promotion",
        question: "Should we promote an internal tradesperson or hire a supervisor?",
        answer:
          "Promoting internally keeps knowledge and can motivate the team, but supervision is a different skill. Assess internal and external candidates against the same supervisory criteria, and support new supervisors with training.",
      },
      {
        id: "trades-supervisor-electrical",
        question: "What should electrical supervisors be able to evidence?",
        answer:
          "Typically recognised electrical qualifications and knowledge of current wiring regulations relevant to the work, plus experience planning work safely and supervising others. Requirements depend on the sector and type of installation.",
      },
    ],
  },
  "floorers-wall-tilers": {
    seoTitle: "Floor Layer & Wall Tiler Recruitment UK",
    metaDescription:
      "Floorer and wall tiler recruitment in the UK for construction and fit-out: verifying trade experience, finish quality and site cards such as CSCS.",
    extraChallenge: "Matching experience with specific materials and finishes",
    approachDetail:
      "Trade experience is verified through references and examples of completed work, and site requirements such as the relevant CSCS card for construction sites are checked before the start date.",
    faqs: [
      {
        id: "floorer-cscs",
        question: "Do floorers and tilers need a CSCS card?",
        answer:
          "Many principal contractors require a card from the Construction Skills Certification Scheme, or an equivalent scheme, for site access. Requirements vary by site, so check them early.",
      },
      {
        id: "floorer-direct-or-subcontract",
        question: "Should we employ floorers directly or use subcontractors?",
        answer:
          "Direct employment suits steady workloads and quality control; subcontracting or contract staffing suits variable project pipelines. Employment status should reflect the real working arrangement, with advice where unclear.",
      },
    ],
  },
  "industrial-cleaning-process-occupations": {
    seoTitle: "Industrial Cleaning Operative Recruitment UK",
    metaDescription:
      "Industrial cleaning and process operative recruitment in the UK, with safety and hygiene training built into planning for single sites or volume hiring.",
    extraChallenge: "Sites where hygiene standards are critical to product safety",
    approachDetail:
      "Screening focuses on reliability, safety awareness and any hygiene or confined-space requirements of the site, and volume or shift-based needs can be planned through contract staffing or recruitment process outsourcing.",
    faqs: [
      {
        id: "industrial-cleaning-training",
        question: "What training do industrial cleaning operatives need?",
        answer:
          "It depends on the site, but often includes chemical handling, safe use of equipment, personal protective equipment and any hygiene standards, for example in food manufacturing. Site induction should cover these before work starts.",
      },
      {
        id: "industrial-cleaning-volume",
        question: "How do you handle large-scale or shift-based recruitment?",
        answer:
          "Through a planned, repeatable process with clear role profiles, efficient screening and scheduled induction days, scaled up or down with demand.",
      },
    ],
  },

  // --- HR & Training ---
  "human-resources-industrial-relations-officers": {
    seoTitle: "HR Officer & Employee Relations Recruitment UK",
    metaDescription:
      "HR officer and employee relations recruitment in the UK: assessing casework, policy, employment law awareness and CIPD qualifications where required.",
    extraChallenge: "Testing judgement on sensitive casework rather than policy knowledge alone",
    approachDetail:
      "Scenario-based questions on disciplinary, grievance or absence cases test judgement and knowledge of good practice such as the Acas Code of Practice, and CIPD qualification or membership level is verified where the role requires it.",
    faqs: [
      {
        id: "hr-officer-cipd",
        question: "Should HR officers have a CIPD qualification?",
        answer:
          "Many employers ask for CIPD qualifications at Level 5 or above for HR officer and adviser roles, but relevant experience and sound judgement can be equally valuable. State whether it is essential or desirable.",
      },
      {
        id: "hr-officer-unionised",
        question: "Is experience of unionised workplaces important?",
        answer:
          "For employee relations roles in organisations with recognised trade unions, yes. Experience of collective consultation and negotiation is a distinct skill set from individual casework.",
      },
    ],
  },
  "careers-advisers-vocational-guidance": {
    seoTitle: "Careers Adviser Recruitment UK",
    metaDescription:
      "Careers adviser recruitment in the UK for schools, colleges, universities and employability services, with guidance qualifications and safeguarding checked.",
    extraChallenge: "Keeping up to date with apprenticeship, education and labour market information",
    approachDetail:
      "Relevant guidance qualifications, typically at Level 6 or above in career guidance and development, and Career Development Institute registration are reviewed, and a short guidance role-play tests listening, impartiality and action planning.",
    faqs: [
      {
        id: "careers-adviser-qualification",
        question: "What qualifications do careers advisers usually hold?",
        answer:
          "Commonly a Level 6 qualification in career guidance and development or a postgraduate qualification in careers guidance, and many are on the Career Development Institute's UK Register of Career Development Professionals.",
      },
      {
        id: "careers-adviser-safeguarding",
        question: "Do careers advisers in schools need safeguarding checks?",
        answer:
          "Typically, yes. Advisers working with children and young people usually need an enhanced criminal record check and safer-recruitment practice appropriate to the setting.",
      },
    ],
  },
  "vocational-industrial-trainers": {
    seoTitle: "Vocational & Industrial Trainer Recruitment UK",
    metaDescription:
      "Vocational and industrial trainer recruitment in the UK: assessing occupational expertise, training delivery and assessor qualifications for skills programmes.",
    extraChallenge: "Finding occupational experts who also hold teaching or assessor qualifications",
    approachDetail:
      "Occupational expertise is assessed alongside teaching or assessor qualifications, such as a recognised assessor award or teaching qualification, and candidates usually deliver a short training session to demonstrate their approach.",
    faqs: [
      {
        id: "vocational-trainer-assessor",
        question: "Do vocational trainers need assessor qualifications?",
        answer:
          "Where they assess learners on regulated qualifications or apprenticeships, an appropriate assessor qualification is usually required. Some employers recruit strong occupational experts and support them to qualify.",
      },
      {
        id: "vocational-trainer-industry-currency",
        question: "Why does industry currency matter for trainers?",
        answer:
          "Trainers who have recently worked in the occupation teach current methods, equipment and standards. Asking how they keep their own skills up to date is a useful interview question.",
      },
    ],
  },

  // --- Transport & Logistics ---
  "aircraft-pilots-air-traffic-controllers": {
    seoTitle: "Pilot & Air Traffic Controller Recruitment UK",
    metaDescription:
      "Pilot and air traffic controller recruitment in the UK: licence, rating and medical checks under CAA requirements, plus experience and type verification.",
    extraChallenge: "Type ratings, medical certification and recency requirements that limit who can start",
    approachDetail:
      "Licences, ratings and medical certificates are checked against the requirements of the UK Civil Aviation Authority, and experience is verified, including hours, aircraft types or operational units, before any selection or simulator stages run by the operator.",
    faqs: [
      {
        id: "pilot-licence-checks",
        question: "What licence checks apply when recruiting pilots?",
        answer:
          "Typically the appropriate UK licence, valid type or class ratings, a current medical certificate and evidence of recent experience. Operators then run their own selection and training processes under their approvals.",
      },
      {
        id: "atco-licence",
        question: "Do air traffic controllers need to be licensed?",
        answer:
          "Yes. Air traffic controllers in the UK need a licence with the relevant ratings and unit endorsements, issued under the Civil Aviation Authority's requirements, plus a valid medical certificate.",
      },
    ],
  },
  "rail-travel-assistants": {
    seoTitle: "Rail & Travel Assistant Recruitment UK",
    metaDescription:
      "Rail and travel assistant recruitment in the UK: customer service, safety awareness and shift reliability assessed, with volume campaigns supported.",
    extraChallenge: "Recruiting at volume for shift patterns that include nights and weekends",
    approachDetail:
      "Customer-facing scenarios test communication and calm under pressure, while screening covers shift availability and any medical, drug and alcohol testing or safety-critical training requirements set by the operator.",
    faqs: [
      {
        id: "rail-assistant-medicals",
        question: "Are medicals or drug and alcohol tests needed for rail roles?",
        answer:
          "Some rail roles, particularly safety-critical ones, require medical assessments and drug and alcohol testing set by the operator and industry standards. Requirements depend on the duties involved.",
      },
      {
        id: "rail-assistant-volume",
        question: "How can operators recruit customer-facing rail staff at volume?",
        answer:
          "With a clear role preview, online screening, group assessment days and consistent scoring, often managed through a structured volume process or recruitment process outsourcing.",
      },
    ],
  },
  "train-tram-drivers": {
    seoTitle: "Train & Tram Driver Recruitment UK",
    metaDescription:
      "Train and tram driver recruitment in the UK: aptitude, medical and licensing requirements, safety-critical assessment and trainee or qualified driver hiring.",
    extraChallenge: "Long training periods for trainee drivers before they can work independently",
    approachDetail:
      "Mainline train drivers in Great Britain need a train driving licence and certificate under rules overseen by the Office of Rail and Road; recruitment usually includes psychometric and aptitude testing, medical assessment and route and traction knowledge checks for qualified drivers.",
    faqs: [
      {
        id: "train-driver-trainee-vs-qualified",
        question: "Should we recruit trainee or qualified train drivers?",
        answer:
          "Qualified drivers shorten time to service but are a small pool; trainee programmes widen access and build a pipeline but take longer. Many operators run both, aligned to timetable and fleet plans.",
      },
      {
        id: "train-driver-assessment",
        question: "What assessments do train driver candidates take?",
        answer:
          "Typically psychometric and aptitude tests for attention, concentration and reaction, structured interviews and medical assessments, before any training programme begins.",
      },
    ],
  },

  // --- Retail, Leisure & Customer-Facing ---
  "retail-cashiers-checkout-operators": {
    seoTitle: "Retail Cashier & Checkout Staff Recruitment",
    metaDescription:
      "Retail cashier and checkout operator recruitment in the UK: volume and seasonal hiring with customer service, reliability and accuracy assessed consistently.",
    extraChallenge: "Recruiting large numbers quickly ahead of seasonal peaks",
    approachDetail:
      "Volume campaigns use short online applications, availability screening and group or short structured interviews scored consistently, with right to work checks completed before the first shift.",
    faqs: [
      {
        id: "retail-seasonal-planning",
        question: "When should seasonal retail recruitment start?",
        answer:
          "Well ahead of the peak, so there is time for screening, checks, training and rota planning. Starting with returning seasonal staff and a talent pool from previous campaigns can reduce effort.",
      },
      {
        id: "retail-age-restricted",
        question: "Are there extra considerations for age-restricted sales?",
        answer:
          "Yes. Staff selling age-restricted products need training on checking age and refusing sales, and some restrictions apply to young workers. Build this into induction.",
      },
    ],
  },
  "leisure-theme-park-attendants": {
    seoTitle: "Leisure & Theme Park Attendant Recruitment",
    metaDescription:
      "Leisure and theme park attendant recruitment in the UK: seasonal volume hiring that assesses guest service, safety awareness and reliability.",
    extraChallenge: "Training large seasonal teams in safety procedures before opening",
    approachDetail:
      "Group assessment days test guest service and teamwork at volume, availability is matched to the season, and safety and ride-operation training is planned into onboarding before the peak.",
    faqs: [
      {
        id: "leisure-young-workers",
        question: "Can we employ under-18s in leisure roles?",
        answer:
          "Often, yes, but young workers have specific protections on hours, breaks and some tasks, and there are extra rules for those of school age. Check current GOV.UK guidance and assess risks before allocating duties.",
      },
      {
        id: "leisure-returners",
        question: "How can we encourage seasonal staff to return?",
        answer:
          "Positive experiences, fair rotas, recognition and keeping in touch between seasons make returners more likely, which reduces recruitment and training effort each year.",
      },
    ],
  },
  "photographers-audiovisual-broadcasting-operators": {
    seoTitle: "Photographer & AV Operator Recruitment UK",
    metaDescription:
      "Recruitment of photographers, audiovisual and broadcast operators in the UK: portfolio and kit-specific assessment for project, freelance or permanent roles.",
    extraChallenge: "Matching experience with specific equipment, formats and live production environments",
    approachDetail:
      "Portfolio or showreel review is combined with technical questions on the equipment, software and production environments involved, and the engagement model, whether employed, fixed-term or freelance, is agreed early.",
    faqs: [
      {
        id: "av-freelance-status",
        question: "Should we hire AV staff as freelancers or employees?",
        answer:
          "It depends on how the work is actually done. Ongoing, controlled work often points to employment, while genuinely independent project work may suit freelancers. Employment status depends on the real arrangement, so seek advice where unclear.",
      },
      {
        id: "av-showreel",
        question: "What should we look for in a showreel or portfolio?",
        answer:
          "Work relevant to your format and audience, the candidate's specific role in each piece, consistency of quality and evidence of working within real production constraints.",
      },
    ],
  },
  "library-clerks-assistants": {
    seoTitle: "Library Assistant & Clerk Recruitment UK",
    metaDescription:
      "Library clerk and assistant recruitment in the UK for public, school, university and specialist libraries, assessing service, systems and organisation skills.",
    extraChallenge: "Combining customer service with growing digital support responsibilities",
    approachDetail:
      "Assessment covers organisational accuracy, library management system experience where relevant, supporting users with digital services and, for roles with children or vulnerable adults, appropriate safeguarding checks.",
    faqs: [
      {
        id: "library-digital-skills",
        question: "What digital skills do library assistants need?",
        answer:
          "Increasingly, helping users with online services, e-resources, printing and basic device support, alongside the library's own management system. Patience in explaining technology is as important as technical knowledge.",
      },
      {
        id: "library-school-checks",
        question: "Do school library assistants need safeguarding checks?",
        answer:
          "Usually, yes. Roles working in schools or with children typically require enhanced criminal record checks and safer-recruitment practice appropriate to the setting.",
      },
    ],
  },

  // --- Agriculture & Environment ---
  "farm-workers": {
    seoTitle: "Farm Worker Recruitment UK",
    metaDescription:
      "Farm worker recruitment in the UK for seasonal and permanent agricultural roles, planned around harvest peaks, practical skills and safety requirements.",
    extraChallenge: "Planning accommodation, transport and training for seasonal workforces",
    approachDetail:
      "Seasonal campaigns are planned backwards from harvest or production peaks, practical skills and machinery experience are confirmed, and right to work and safety induction are completed before work starts.",
    faqs: [
      {
        id: "farm-seasonal-planning",
        question: "How far ahead should seasonal farm recruitment be planned?",
        answer:
          "As early as practical, often several months before the peak, to allow for attraction, checks, any accommodation and travel arrangements, and induction. Immigration routes for seasonal work change, so check current Home Office guidance.",
      },
      {
        id: "farm-machinery-certificates",
        question: "What certificates might farm workers need?",
        answer:
          "Depending on duties, certificates for operating specific machinery such as tractors, telehandlers or chainsaws, or for applying pesticides. Confirm what the role requires and verify certificates before work starts.",
      },
    ],
  },
  "environment-professionals": {
    seoTitle: "Environmental Professional Recruitment UK",
    metaDescription:
      "Environmental professional recruitment in the UK: search for sustainability, environmental compliance and assessment specialists with technical expertise.",
    extraChallenge: "Evolving reporting and sustainability requirements that change the skills needed",
    approachDetail:
      "Assessment confirms the candidate's technical specialism, such as environmental impact assessment, permitting, ecology, carbon or sustainability reporting, and relevant professional membership such as IEMA where the role requires it.",
    faqs: [
      {
        id: "environment-iema",
        question: "Which professional bodies are relevant for environmental roles?",
        answer:
          "IEMA is widely recognised for environmental management and sustainability professionals, alongside others such as CIEEM for ecologists. Membership level can indicate experience, but technical depth should be tested directly.",
      },
      {
        id: "environment-role-scope",
        question: "How do we define an environmental or sustainability role?",
        answer:
          "Be specific about whether the focus is regulatory compliance, technical assessment, carbon and reporting, or strategy and change. These require different skills and backgrounds, and a vague brief attracts the wrong candidates.",
      },
    ],
  },
};
