/**
 * Canonical service taxonomy: 10 parent families and 48 child services.
 * Source of truth: docs/MASTER-SITEMAP.md section 6 and
 * docs/URL-DECISION-REGISTER.md D-005/D-006. All routes are flat
 * `/services/[slug]/` per the approved decision — do not nest service URLs
 * under their category. Do not add, remove or reslug an entry here without
 * updating the master sitemap first.
 */

export interface ServiceCategory {
  slug: string;
  title: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  categorySlug: string;
}

export const serviceCategories: ServiceCategory[] = [
  { slug: "outsourced-hr-services-firm", title: "Outsourced HR Services" },
  { slug: "recruitment-and-talent-acquisition-firm", title: "Recruitment & Talent Acquisition" },
  { slug: "employment-law-and-employee-relations-firm", title: "Employment Law & Employee Relations" },
  { slug: "organisation-development-and-change-management-firm", title: "Organisation Development & Change Management" },
  { slug: "compensation-reward-and-benefits-firm", title: "Compensation, Reward & Benefits" },
  { slug: "learning-and-leadership-development-firm", title: "Learning & Leadership Development" },
  { slug: "performance-and-talent-management-firm", title: "Performance & Talent Management" },
  { slug: "employee-experience-and-engagement-firm", title: "Employee Experience & Engagement" },
  { slug: "hr-technology-and-people-analytics-firm", title: "HR Technology & People Analytics" },
  { slug: "strategic-hr-and-workforce-advisory-firm", title: "Strategic HR & Workforce Advisory" },
];

export const services: ServiceItem[] = [
  // Outsourced HR Services
  { slug: "retained-hr-services-firm", title: "Retained HR Services", categorySlug: "outsourced-hr-services-firm" },
  { slug: "hr-support-for-small-businesses-and-startups-firm", title: "HR Support for Small Businesses & Startups", categorySlug: "outsourced-hr-services-firm" },
  { slug: "fractional-hr-director-chief-people-officer-firm", title: "Fractional HR Director / Chief People Officer", categorySlug: "outsourced-hr-services-firm" },
  { slug: "hr-compliance-audit-firm", title: "HR Compliance Audit", categorySlug: "outsourced-hr-services-firm" },
  { slug: "employee-handbooks-and-hr-policies-firm", title: "Employee Handbooks & HR Policies", categorySlug: "outsourced-hr-services-firm" },
  { slug: "payroll-advisory-firm", title: "Payroll Advisory", categorySlug: "outsourced-hr-services-firm" },

  // Recruitment & Talent Acquisition
  { slug: "permanent-recruitment-firm", title: "Permanent Recruitment", categorySlug: "recruitment-and-talent-acquisition-firm" },
  { slug: "executive-search-firm", title: "Executive Search", categorySlug: "recruitment-and-talent-acquisition-firm" },
  { slug: "contract-staffing-firm", title: "Contract Staffing", categorySlug: "recruitment-and-talent-acquisition-firm" },
  { slug: "recruitment-process-outsourcing-rpo-firm", title: "Recruitment Process Outsourcing (RPO)", categorySlug: "recruitment-and-talent-acquisition-firm" },
  { slug: "graduate-schemes-and-early-careers-design-firm", title: "Graduate Schemes & Early Careers Design", categorySlug: "recruitment-and-talent-acquisition-firm" },

  // Employment Law & Employee Relations
  { slug: "redundancy-and-restructuring-support-firm", title: "Redundancy & Restructuring Support", categorySlug: "employment-law-and-employee-relations-firm" },
  { slug: "tupe-advisory-firm", title: "TUPE & Business Transfer Advisory", categorySlug: "employment-law-and-employee-relations-firm" },
  { slug: "workplace-investigations-firm", title: "Workplace Investigations", categorySlug: "employment-law-and-employee-relations-firm" },
  { slug: "workplace-mediation-and-conflict-resolution-firm", title: "Workplace Mediation & Conflict Resolution", categorySlug: "employment-law-and-employee-relations-firm" },
  { slug: "employment-tribunal-hr-support-firm", title: "Employment Tribunal HR Support", categorySlug: "employment-law-and-employee-relations-firm" },
  { slug: "outplacement-and-career-transition-services-firm", title: "Outplacement & Career Transition Services", categorySlug: "employment-law-and-employee-relations-firm" },
  { slug: "industrial-relations-and-trade-union-negotiations-firm", title: "Industrial Relations & Trade Union Negotiations", categorySlug: "employment-law-and-employee-relations-firm" },
  { slug: "skilled-worker-sponsorship-hr-support-firm", title: "Work Visa & Sponsorship HR Support", categorySlug: "employment-law-and-employee-relations-firm" },

  // Organisation Development & Change Management
  { slug: "organisation-design-firm", title: "Organisation Design", categorySlug: "organisation-development-and-change-management-firm" },
  { slug: "change-management-firm", title: "Change Management", categorySlug: "organisation-development-and-change-management-firm" },
  { slug: "culture-transformation-firm", title: "Culture Transformation", categorySlug: "organisation-development-and-change-management-firm" },
  { slug: "ma-people-due-diligence-and-post-merger-integration-firm", title: "M&A People Due Diligence & Post-Merger Integration", categorySlug: "organisation-development-and-change-management-firm" },

  // Compensation, Reward & Benefits
  { slug: "salary-benchmarking-firm", title: "Salary Benchmarking", categorySlug: "compensation-reward-and-benefits-firm" },
  { slug: "job-evaluation-and-pay-structures-firm", title: "Job Evaluation & Pay Structures", categorySlug: "compensation-reward-and-benefits-firm" },
  { slug: "reward-strategy-firm", title: "Reward Strategy", categorySlug: "compensation-reward-and-benefits-firm" },
  { slug: "pay-equity-and-pay-gap-reporting-firm", title: "Pay Equity & Pay Gap Reporting", categorySlug: "compensation-reward-and-benefits-firm" },
  { slug: "employee-benefits-consulting-firm", title: "Employee Benefits Consulting", categorySlug: "compensation-reward-and-benefits-firm" },
  { slug: "executive-compensation-and-share-schemes-firm", title: "Executive Compensation & Share Schemes", categorySlug: "compensation-reward-and-benefits-firm" },

  // Learning & Leadership Development
  { slug: "leadership-and-management-training-firm", title: "Leadership & Management Training", categorySlug: "learning-and-leadership-development-firm" },
  { slug: "executive-coaching-and-360-feedback-firm", title: "Executive Coaching & 360 Feedback", categorySlug: "learning-and-leadership-development-firm" },
  { slug: "learning-strategy-and-capability-development-firm", title: "Learning Strategy & Capability Development", categorySlug: "learning-and-leadership-development-firm" },

  // Performance & Talent Management
  { slug: "performance-management-firm", title: "Performance Management", categorySlug: "performance-and-talent-management-firm" },
  { slug: "succession-planning-and-talent-mapping-firm", title: "Succession Planning & Talent Mapping", categorySlug: "performance-and-talent-management-firm" },
  { slug: "competency-frameworks-firm", title: "Competency Frameworks", categorySlug: "performance-and-talent-management-firm" },

  // Employee Experience & Engagement
  { slug: "employee-experience-strategy-firm", title: "Employee Experience Strategy", categorySlug: "employee-experience-and-engagement-firm" },
  { slug: "employee-engagement-surveys-and-action-planning-firm", title: "Employee Engagement Surveys & Action Planning", categorySlug: "employee-experience-and-engagement-firm" },
  { slug: "employer-branding-and-employee-value-proposition-evp-firm", title: "Employer Branding & Employee Value Proposition (EVP)", categorySlug: "employee-experience-and-engagement-firm" },
  { slug: "workplace-wellbeing-and-mental-health-firm", title: "Workplace Wellbeing & Mental Health", categorySlug: "employee-experience-and-engagement-firm" },
  { slug: "diversity-equity-and-inclusion-dei-consulting-firm", title: "Diversity, Equity & Inclusion (DEI) Consulting", categorySlug: "employee-experience-and-engagement-firm" },

  // HR Technology & People Analytics
  { slug: "hris-implementation-firm", title: "HRIS Implementation", categorySlug: "hr-technology-and-people-analytics-firm" },
  { slug: "hr-software-selection-firm", title: "HR Software Selection", categorySlug: "hr-technology-and-people-analytics-firm" },
  { slug: "people-analytics-and-hr-dashboards-firm", title: "People Analytics & HR Dashboards", categorySlug: "hr-technology-and-people-analytics-firm" },
  { slug: "digital-hr-transformation-firm", title: "Digital HR Transformation", categorySlug: "hr-technology-and-people-analytics-firm" },
  { slug: "ai-workplace-policy-and-hr-integration-firm", title: "AI Workplace Policy & HR Integration", categorySlug: "hr-technology-and-people-analytics-firm" },

  // Strategic HR & Workforce Advisory
  { slug: "people-strategy-firm", title: "People Strategy", categorySlug: "strategic-hr-and-workforce-advisory-firm" },
  { slug: "strategic-workforce-planning-firm", title: "Strategic Workforce Planning", categorySlug: "strategic-hr-and-workforce-advisory-firm" },
  { slug: "global-mobility-and-expatriate-hr-management-firm", title: "Global Mobility & Expatriate HR Management", categorySlug: "strategic-hr-and-workforce-advisory-firm" },
];

export function getServiceCategory(slug: string) {
  return serviceCategories.find((category) => category.slug === slug);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(categorySlug: string) {
  return services.filter((service) => service.categorySlug === categorySlug);
}
