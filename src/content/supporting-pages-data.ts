import type { ContentFaqItem } from "@/types/content";
import { routes } from "@/config/routes";

/**
 * Original first-draft content for supporting/general-information and
 * conversion-landing pages. See src/content/services-data.ts for the
 * authoring rules this file also follows — no invented team members,
 * addresses, statistics or live vacancy/candidate-pool figures.
 */

export interface InfoPageSection {
  heading: string;
  body?: string;
  list?: string[];
}

export interface InfoPageContent {
  kicker: string;
  heading: string;
  lead: string;
  sections: InfoPageSection[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  faqs?: ContentFaqItem[];
}

export const aboutPageContent: InfoPageContent = {
  kicker: "About",
  heading: "About Apex HR",
  lead: "Apex HR is a London-headquartered HR, recruitment and people-consulting partner, supporting employers across Africa, North America, Europe and the Middle East through the full people lifecycle.",
  sections: [
    {
      heading: "What we do",
      body: "Apex HR combines outsourced HR support, recruitment and strategic workforce advisory in one partner, so employers don't have to coordinate separate suppliers for related people needs in each country. The same team that helps you hire can help you write contracts, set pay, develop managers and handle difficult employee relations issues, with consistent standards wherever your people are based. Alongside this employer-first focus, Apex HR maintains a separate, clearly signposted pathway for candidates.",
    },
    {
      heading: "How we work",
      body: "Apex HR's approach follows a consistent pattern across every engagement: understand the business and its people, diagnose the real issue, recommend a practical plan, implement it alongside your team, and measure the outcome.",
      list: ["Understand", "Diagnose", "Recommend", "Implement", "Measure"],
    },
    {
      heading: "Who we work with",
      body: "Apex HR supports employers across Africa, North America, Europe and the Middle East: startups building their first HR foundations, scale-ups hiring in a second or third country, international companies entering a new market, and established organisations running teams across several markets. We bring practical HR experience to each country and work alongside in-country legal counsel where formal legal advice is needed.",
    },
  ],
  primaryCta: { label: "Find Talent", href: routes.findTalent.path },
  secondaryCta: { label: "Contact Apex HR", href: routes.contact.path },
  faqs: [
    { id: "about-what", question: "What kind of company is Apex HR?", answer: "Apex HR is an HR, recruitment and people-consulting partner for employers. We combine outsourced HR, recruitment and strategic workforce advice, so one partner can support the whole people lifecycle." },
    { id: "about-where", question: "Which countries does Apex HR support?", answer: "We support employers in Nigeria, Kenya, South Africa, Ghana, the United States, Canada, Ireland, Germany, the Netherlands, the United Arab Emirates, Saudi Arabia and Qatar, including teams that span several of these countries." },
    { id: "about-local", question: "How do you handle different employment laws in each country?", answer: "We build consistent people processes and adapt them to each country's rules. Where a matter needs formal legal advice under local law, we work alongside qualified in-country legal counsel rather than replacing them." },
    { id: "about-size", question: "What size of organisation do you work with?", answer: "From early-stage startups to established multinationals. Support is scaled to what you need, from a single hire or project to an ongoing retained partnership." },
    { id: "about-headquarters", question: "Where is Apex HR based?", answer: "Apex HR is headquartered in London and supports employers remotely and, where useful, on-site in the countries we serve. We do not claim local offices in every country." },
  ],
};

export const contactPageContent: InfoPageContent = {
  kicker: "Contact",
  heading: "Contact Apex HR",
  lead: "Whether you are hiring, navigating a people challenge or planning for growth, start with a straightforward conversation with an Apex HR adviser, wherever you are based.",
  sections: [
    {
      heading: "How to get in touch",
      body: "Call or message Apex HR on WhatsApp, email us, or share a few details through the enquiry form so your message reaches the right adviser. Tell us which country or countries your enquiry relates to, so we can involve someone with the right market experience from the start.",
    },
    {
      heading: "What happens next",
      body: "After you get in touch, an Apex HR adviser reviews the details and follows up to discuss your needs and appropriate next steps.",
    },
  ],
  faqs: [
    {
      id: "what-to-include",
      question: "What information should I include?",
      answer: "A brief description of the role, people issue or business objective is enough to start. More detail can be discussed confidentially during the first conversation.",
    },
    {
      id: "sensitive-matter",
      question: "Can I discuss a sensitive employee matter?",
      answer: "Yes. You can keep the initial enquiry brief and ask for a confidential call with an appropriate HR adviser.",
    },
    {
      id: "projects-and-retainers",
      question: "Do you support one-off projects and ongoing retainers?",
      answer: "Yes. Support can be structured as a defined project, an interim or fractional assignment, or an ongoing retained partnership.",
    },
    {
      id: "time-zones",
      question: "Can you work with us across time zones?",
      answer: "Yes. We support employers from West Africa Time to the Gulf and North America. Tell us your location and preferred times, and we will arrange calls that suit your working week, including Sunday-to-Thursday weeks in Saudi Arabia and Qatar.",
    },
    {
      id: "multi-country-enquiry",
      question: "Our enquiry covers several countries. Who should we contact?",
      answer: "Use the same contact details. Mention every country involved and we will bring together the right advisers so you have one point of contact for the whole engagement.",
    },
    {
      id: "where-we-operate",
      question: "Where does Apex HR provide support?",
      answer: "Apex HR supports employers across Africa, North America, Europe and the Middle East. Where formal legal advice is needed under local employment law, we work alongside in-country legal counsel.",
    },
  ],
  primaryCta: { label: "Find Talent", href: routes.findTalent.path },
};

export const forEmployersPageContent: InfoPageContent = {
  kicker: "Employers",
  heading: "HR and recruitment support for employers",
  lead: "Explore outsourced HR, recruitment and strategic people support for employers worldwide, with Apex HR helping you find the right service for your needs.",
  sections: [
    {
      heading: "Where to start",
      body: "Most employers come to Apex HR with one of three needs: recruiting talent, getting day-to-day HR support in place, or working through a specific people issue or strategic decision.",
      list: [
        "Recruit talent: permanent, contract or executive hiring",
        "Outsource HR: ongoing advisory, policies and compliance",
        "Resolve a people issue: investigations, mediation, redundancy support",
        "Improve organisational performance: structure, performance and reward",
        "Transform HR technology: HRIS, analytics and digital HR",
      ],
    },
    {
      heading: "How engagements work",
      body: "Engagement scope, from a single project to ongoing retained support, is agreed upfront based on what your business actually needs. For employers in several countries, we agree one set of standards and one point of contact, then adapt the detail for each market.",
    },
  ],
  primaryCta: { label: "Find Talent", href: routes.findTalent.path },
  secondaryCta: { label: "Explore HR Services", href: routes.services.path },
  faqs: [
    { id: "size", question: "Does Apex HR work with businesses of all sizes?", answer: "Support is scaled to the size and needs of your business, from early-stage startups to larger established employers." },
    { id: "combine", question: "Can we combine recruitment and HR support?", answer: "Yes. An engagement can combine recruitment delivery with onboarding, contracts, policies, reward advice or wider workforce support." },
    { id: "retained", question: "Do you offer ongoing retained support?", answer: "Yes. Retained HR support can provide an ongoing source of advice and delivery, with scope agreed around your organisation's priorities." },
    { id: "new-market", question: "We are entering a new country. Can you help us hire our first team?", answer: "Yes. Apex HR can help you plan the roles, understand local pay and employment practice, recruit your first hires and put contracts and policies in place. Entity, tax and immigration structuring should come from qualified local advisers, and we work alongside them." },
    { id: "multi-country", question: "Can you support teams spread across several countries?", answer: "Yes. We can align recruitment, policies, pay structures and performance processes across countries while respecting local employment rules, with one point of contact for the whole engagement." },
    { id: "local-law", question: "Do you provide legal advice?", answer: "Apex HR provides practical HR guidance and builds compliant people processes. Where formal legal advice is needed under local law, we work alongside qualified in-country legal counsel." },
  ],
};

export const forCandidatesPageContent: InfoPageContent = {
  kicker: "Candidates",
  heading: "Find your next role with Apex HR",
  lead: "Learn how Apex HR helps candidates explore opportunities when available, join the talent pool and understand the recruitment process.",
  sections: [
    {
      heading: "Ways to connect",
      list: [
        "Search current vacancies",
        "Upload your CV for future opportunities",
        "Join the Apex talent pool",
        "Explore candidate resources",
      ],
    },
    {
      heading: "What to expect",
      body: "If your details match a live vacancy or future opportunity, an Apex HR recruiter will be in touch. Apex HR does not guarantee a specific outcome or timescale for any application.",
    },
  ],
  faqs: [
    {
      id: "cost",
      question: "Does it cost anything to register with Apex HR?",
      answer: "No. Apex HR does not charge candidates to register, apply for roles or receive recruitment support.",
    },
    {
      id: "after-cv",
      question: "What happens after I submit my CV?",
      answer: "Your details are reviewed against current and future opportunities. A recruiter will contact you when there is a suitable match.",
    },
    {
      id: "shared-automatically",
      question: "Will my CV be sent to employers automatically?",
      answer: "No. Your profile is only introduced to an employer after the role has been discussed with you and you have agreed to proceed.",
    },
    {
      id: "not-actively-looking",
      question: "Can I register if I am not actively job hunting?",
      answer: "Yes. You can join the talent pool and indicate that you are open to hearing about selected future opportunities.",
    },
    {
      id: "countries",
      question: "Which countries do you recruit for?",
      answer: "Apex HR supports employers across Africa, North America, Europe and the Middle East, including Nigeria, Kenya, South Africa, Ghana, the United States, Canada, Ireland, Germany, the Netherlands, the UAE, Saudi Arabia and Qatar. Available roles change over time, so check the Job Board or join the talent pool.",
    },
    {
      id: "relocation",
      question: "Can you help me find a role in another country?",
      answer: "If a suitable international vacancy is available, we will explain what the employer offers, including any relocation or visa support. Eligibility to work in a country is decided by its immigration authorities, so we cannot guarantee a visa or permit.",
    },
    {
      id: "cv-format",
      question: "Should my CV be different for different countries?",
      answer: "CV conventions vary. For example, some employers expect a short, achievement-focused CV without personal details, while others expect more background information. Tailor your CV to the country and role, and keep it clear, accurate and up to date.",
    },
  ],
  primaryCta: { label: "Job Board", href: routes.jobs.path },
};

export const findTalentPageContent: InfoPageContent = {
  kicker: "Find Talent",
  heading: "Tell us about your hiring need",
  lead: "Share a few details about the role and an Apex HR advisor will follow up to discuss how we can help.",
  sections: [
    {
      heading: "What we'll ask",
      list: [
        "The role, the country and city it is based in, and the employment type",
        "Seniority, timeline and any specific requirements",
        "Whether the role is open to international candidates or relocation",
        "Your company and the best way to reach you",
      ],
    },
    {
      heading: "Hiring in the countries we support",
      body: "Apex HR supports hiring across Africa, North America, Europe and the Middle East. Pay levels, notice periods, right-to-work checks and candidate expectations differ in each market, so we shape the search, assessment and offer around the country the role is based in.",
    },
    {
      heading: "Ways we can help you hire",
      list: [
        "Permanent recruitment for individual roles",
        "Executive search for senior and confidential appointments",
        "Contract and interim staffing for project or temporary needs",
        "Recruitment process outsourcing for sustained, high-volume hiring",
        "Graduate and early-careers programmes",
      ],
    },
    {
      heading: "What happens after you submit",
      body: "An Apex HR advisor reviews your enquiry and follows up to discuss the role and the right way to support your hiring need, whether that's recruitment, RPO or a related HR service. Together we agree the brief, the process and the timeline before any search begins.",
    },
  ],
  faqs: [
    { id: "timeline", question: "How quickly will someone respond?", answer: "An advisor follows up as soon as practical after reviewing your enquiry; specific response times are not guaranteed on this page." },
    { id: "fees", question: "How are recruitment fees structured?", answer: "Fees depend on the service and the role. Permanent recruitment is commonly charged as a percentage of first-year salary on a contingency or retained basis. Apex HR confirms the fee basis in writing before any work starts." },
    { id: "international", question: "Can you recruit candidates from another country for our role?", answer: "Yes, where the role and your organisation can support it. We will discuss relocation, visas and onboarding early, and work alongside qualified immigration advisers on permit applications." },
    { id: "confidential", question: "Can a search be kept confidential?", answer: "Yes. Confidential searches, for example to replace a senior leader, are handled discreetly, with candidates approached directly and your company name shared only when appropriate." },
  ],
};

export const jobsPageContent: InfoPageContent = {
  kicker: "Jobs",
  heading: "Apex HR Job Board",
  lead: "Explore current vacancies published by Apex HR and filter opportunities by role, location and working arrangement.",
  sections: [
    {
      heading: "Find a role that fits",
      body: "Vacancies shown here are published by Apex HR and reflect the information supplied for each role. If there is not a suitable opening today, you can join the talent pool to be considered for relevant future opportunities.",
    },
  ],
  secondaryCta: { label: "Join the Talent Pool", href: routes.talentPool.path },
};

export const talentPoolPageContent: InfoPageContent = {
  kicker: "Talent Pool",
  heading: "Join the Apex talent pool",
  lead: "Register your interest so Apex HR can contact you about relevant future opportunities.",
  sections: [
    {
      heading: "Why join",
      body: "Joining the talent pool means Apex HR can consider you for suitable roles as they arise, without needing to apply to each vacancy individually.",
    },
    {
      heading: "Roles and countries",
      body: "Apex HR recruits for employers across Africa, North America, Europe and the Middle East, from specialist and professional roles to senior leadership. Tell us the countries and cities you would consider, and whether you are open to relocating.",
    },
    {
      heading: "What we collect",
      body: "Registration will ask for your contact details, CV, skills and experience, and your location and role preferences, used only for recruitment purposes and handled in line with our privacy policy.",
    },
    {
      heading: "How your information is used",
      list: [
        "Your details are reviewed only by Apex HR recruiters",
        "Your CV is never sent to an employer without your agreement",
        "You can ask us to update or delete your information at any time",
        "Data is handled in line with applicable data protection law",
      ],
    },
  ],
  faqs: [
    { id: "size", question: "How many candidates are currently in the talent pool?", answer: "Apex HR does not publish specific talent-pool numbers on this page." },
    { id: "cost", question: "Is there a fee to join?", answer: "No. Apex HR does not charge candidates to join the talent pool or to be considered for roles." },
    { id: "abroad", question: "Can I join if I live outside the countries you recruit in?", answer: "Yes, if you are open to roles in those countries. Tell us where you would consider working and your current right-to-work position, so we contact you about realistic opportunities." },
    { id: "update", question: "How do I update or remove my details?", answer: "Contact Apex HR using the details on our contact page and we will update or delete your information, in line with our privacy policy." },
  ],
};
