import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/layout/container";
import { footerNavigation, primaryCta } from "@/config/navigation";
import { LinkButton } from "@/components/ui/link-button";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { siteConfig } from "@/config/site";
import { countryRegions, locationPath, locations } from "@/config/locations";

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { route: { id: string; path: string; label: string } }[];
}) {
  return (
    <div>
      <h2 className="text-small font-semibold uppercase tracking-[0.08em] text-gold">
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.route.id}>
            <Link
              href={item.route.path}
              className="text-body text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {item.route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Global site footer per DESIGN.md section 13. The column grid uses the
 * site-wide "Layered Rise and Reveal" on-scroll entrance system
 * (src/components/motion/stagger.tsx): each column rises in with a subtle
 * stagger as the footer scrolls into view, once, never re-triggering.
 */
export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-text-reversed">
      <Container size="wide" className="py-14 lg:py-20">
        <StaggerContainer className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <StaggerItem className="sm:col-span-2 lg:col-span-2">
            <Logo surface="dark" />
            <p className="mt-4 max-w-sm text-body text-white/80">
              A global HR, recruitment and people-consulting partner for employers.
            </p>
            <LinkButton
              href={primaryCta.route.path}
              variant="secondary"
              surface="dark"
              size="compact"
              className="mt-6"
              data-analytics-id="footer-find-talent"
            >
              {primaryCta.label}
            </LinkButton>
          </StaggerItem>

          <StaggerItem>
            <FooterColumn title="Employers" items={footerNavigation.employers} />
          </StaggerItem>
          <StaggerItem>
            <FooterColumn title="Candidates" items={footerNavigation.candidates} />
          </StaggerItem>
          <StaggerItem>
            <FooterColumn title="Company" items={footerNavigation.company} />
          </StaggerItem>
        </StaggerContainer>

        <nav aria-label="Countries" className="mt-14 border-t border-white/15 pt-8">
          <h2 className="text-small font-semibold uppercase tracking-[0.08em] text-gold">Countries we support</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {countryRegions.map((region) => (
              <div key={region}>
                <p className="text-small font-semibold text-white">{region}</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {locations
                    .filter((location) => location.region === region)
                    .map((location) => (
                      <li key={location.slug}>
                        <Link
                          href={locationPath(location.slug)}
                          hrefLang={location.hreflang}
                          className="text-small text-white/70 underline-offset-4 hover:text-white hover:underline"
                        >
                          {location.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="mt-8 border-t border-white/15 pt-8 text-small text-white/60">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
