/**
 * Permanent redirect registry for the global site. Consumed by
 * next.config.ts's `redirects()` and validated by tests/unit/redirects.test.ts.
 *
 * - The legacy taxonomy rules (misspelled and nested service/sector/insight
 *   URLs) are inherited from the original master register, with
 *   destinations updated to the global slugs.
 * - City location redirects were dropped: city location pages never
 *   existed on this domain.
 */

export interface RedirectRule {
  source: string;
  destination: string;
  reason: string;
}



export const redirectRules: RedirectRule[] = [
  { source: "/services/recruitment-talent-and-acuqisition/", destination: "/services/recruitment-and-talent-acquisition-firm/", reason: "Corrected misspelling in service URL" },
  { source: "/services/organisation-deevelopment-and-change-movement/", destination: "/services/organisation-development-and-change-management-firm/", reason: "Corrected misspelling in service URL" },
  { source: "/services/leadership-and-leadership-development/", destination: "/services/learning-and-leadership-development-firm/", reason: "Corrected misspelling in service URL" },
  { source: "/insights/organization-development/", destination: "/insights/organisation-development/", reason: "Corrected insight category spelling or path format" },
  { source: "/insights/performance/talent/", destination: "/insights/performance-talent/", reason: "Corrected insight category spelling or path format" },
  { source: "/industries/", destination: "/sector/", reason: "Sector is the approved canonical taxonomy" },
  { source: "/industries/startups-scale-ups/", destination: "/sector/hr-company-for-startups-and-scale-ups/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/professional-services/", destination: "/sector/hr-company-for-professional-services/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/health-care/", destination: "/sector/hr-company-for-healthcare/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/life-sciences/", destination: "/sector/hr-company-for-life-sciences/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/technology/", destination: "/sector/hr-company-for-it/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/financial-services/", destination: "/sector/hr-company-for-financial-services/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/accountants/", destination: "/sector/hr-company-for-accountants/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/architects/", destination: "/sector/hr-company-for-architects/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/care-homes/", destination: "/sector/hr-company-for-care-homes/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/charity/", destination: "/sector/hr-company-for-charity/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/constructions/", destination: "/sector/hr-company-for-construction/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/destributors/", destination: "/sector/hr-company-for-distribution/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/distribution/", destination: "/sector/hr-company-for-distribution/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/education/", destination: "/sector/hr-company-for-education/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/engineers/", destination: "/sector/hr-company-for-engineers/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/leisure/", destination: "/sector/hr-company-for-leisure/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/manufacturers/", destination: "/sector/hr-company-for-manufacturers/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/industries/hospitality/", destination: "/sector/hr-company-for-hospitality/", reason: "Replace retired industries taxonomy with sector" },
  { source: "/sector/constructions/", destination: "/sector/hr-company-for-construction/", reason: "Correct spelling and singular sector slug" },
  { source: "/sector/destributors/", destination: "/sector/hr-company-for-distribution/", reason: "Correct misspelled sector label and slug" },
  { source: "/contacts/", destination: "/contact/", reason: "Use the approved singular Contact route" },
  { source: "/services/talent-acquisition-recruitment/", destination: "/services/recruitment-and-talent-acquisition-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/talent-acquisition-recruitment/executive-search/", destination: "/services/executive-search-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/talent-acquisition-recruitment/permanent-recruitment/", destination: "/services/permanent-recruitment-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/talent-acquisition-recruitment/contract-staffing/", destination: "/services/contract-staffing-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/talent-acquisition-recruitment/recruitment-process-outsourcing/", destination: "/services/recruitment-process-outsourcing-rpo-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/organisation-development-change/", destination: "/services/organisation-development-and-change-management-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/organisation-development-change/organisation-design/", destination: "/services/organisation-design-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/organisation-development-change/culture-transformation/", destination: "/services/culture-transformation-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/organisation-development-change/change-management/", destination: "/services/change-management-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/learning-development/", destination: "/services/learning-and-leadership-development-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/learning-development/leadership-development/", destination: "/services/leadership-and-management-training-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/learning-development/management-training/", destination: "/services/leadership-and-management-training-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/learning-development/executive-coaching/", destination: "/services/executive-coaching-and-360-feedback-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/learning-development/learning-strategy/", destination: "/services/learning-strategy-and-capability-development-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/performance-talent-management/performance-management/", destination: "/services/performance-management-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/performance-talent-management/succession-planning/", destination: "/services/succession-planning-and-talent-mapping-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/performance-talent-management/competency-frameworks/", destination: "/services/competency-frameworks-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/compensation-benefits/", destination: "/services/compensation-reward-and-benefits-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/compensation-benefits/salary-benchmarking/", destination: "/services/salary-benchmarking-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/compensation-benefits/job-evaluation/", destination: "/services/job-evaluation-and-pay-structures-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/compensation-benefits/reward-strategy/", destination: "/services/reward-strategy-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/compensation-benefits/pay-equity/", destination: "/services/pay-equity-and-pay-gap-reporting-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/compensation-benefits/employee-benefits/", destination: "/services/employee-benefits-consulting-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/compensation-benefits/payroll-advisory/", destination: "/services/payroll-advisory-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/employee-experience-engagement/employee-engagement/", destination: "/services/employee-experience-strategy-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/employee-experience-engagement/engagement-surveys/", destination: "/services/employee-engagement-surveys-and-action-planning-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/employee-experience-engagement/employee-value-proposition/", destination: "/services/employer-branding-and-employee-value-proposition-evp-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/employee-experience-engagement/employer-brand-strategy/", destination: "/services/employer-branding-and-employee-value-proposition-evp-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/employee-experience-engagement/wellbeing/", destination: "/services/workplace-wellbeing-and-mental-health-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/employee-experience-engagement/dei-strategy/", destination: "/services/diversity-equity-and-inclusion-dei-consulting-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/hr-technology-people-analytics/", destination: "/services/hr-technology-and-people-analytics-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/hr-technology-people-analytics/hris-implementation/", destination: "/services/hris-implementation-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/hr-technology-people-analytics/hr-software-selection/", destination: "/services/hr-software-selection-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/hr-technology-people-analytics/people-analytics/", destination: "/services/people-analytics-and-hr-dashboards-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/hr-technology-people-analytics/digital-hr-transformation/", destination: "/services/digital-hr-transformation-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/talent-strategy-workforce-planning/", destination: "/services/strategic-hr-and-workforce-advisory-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/talent-strategy-workforce-planning/strategic-workforce-planning/", destination: "/services/strategic-workforce-planning-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/people-strategy-advisory/", destination: "/services/strategic-hr-and-workforce-advisory-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/people-strategy-advisory/people-strategy/", destination: "/services/people-strategy-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/people-strategy-advisory/fractional-chro/", destination: "/services/fractional-hr-director-chief-people-officer-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/people-strategy-advisory/startup-hr/", destination: "/services/hr-support-for-small-businesses-and-startups-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
  { source: "/services/people-strategy-advisory/scale-up-hr/", destination: "/services/hr-support-for-small-businesses-and-startups-firm/", reason: "Consolidate competing nested taxonomy into canonical flat service URL" },
];
