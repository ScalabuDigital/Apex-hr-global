import {
  BadgePoundSterling,
  ChartSpline,
  Gauge,
  HeartHandshake,
  Presentation,
  Scale,
  Telescope,
  UserRoundSearch,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/** Shared category slug → icon map, used by both the services hub navigator and the service-family (category) page. */
export const serviceCategoryIcons: Record<string, LucideIcon> = {
  "outsourced-hr-services-firm": UsersRound,
  "recruitment-and-talent-acquisition-firm": UserRoundSearch,
  "employment-law-and-employee-relations-firm": Scale,
  "organisation-development-and-change-management-firm": Workflow,
  "compensation-reward-and-benefits-firm": BadgePoundSterling,
  "learning-and-leadership-development-firm": Presentation,
  "performance-and-talent-management-firm": Gauge,
  "employee-experience-and-engagement-firm": HeartHandshake,
  "hr-technology-and-people-analytics-firm": ChartSpline,
  "strategic-hr-and-workforce-advisory-firm": Telescope,
};
