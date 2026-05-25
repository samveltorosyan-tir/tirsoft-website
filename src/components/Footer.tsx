import Link from "next/link";
import { SITE } from "@/lib/site";

interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

const COMPANY_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const PRACTICE_LINKS: ReadonlyArray<FooterLink> = [
  { label: "AI integration", href: "/services" },
  { label: "Web & SaaS", href: "/services" },
  { label: "iOS & Android", href: "/services" },
  { label: "Strategy", href: "/services" },
  { label: "Maintenance", href: "/services" },
];

export function Footer(): React.ReactElement {
  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap">
        <div className="footer-logotype" aria-hidden="true">
          <span className="soft">TIRS</span>oft
        </div>
        <div className="footer-tagline">
          Web/Mobile Development &amp; AI strategy  · since {SITE.founded}
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Company</h4>
            <p>
              An AI-native software company with teams in Glendale, CA and
              Yerevan, Armenia. We build calm products with confident clients.
            </p>
            <div className="footer-socials">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TIRSoft on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 7.98h4.56V23H.22V7.98zM8.06 7.98h4.37v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 6.99V23H17.7v-7.46c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V23H8.06V7.98z" />
                </svg>
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TIRSoft on Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TIRSoft on GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.28 3.41.98.1-.76.41-1.28.74-1.57-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Sitemap</h4>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Practice</h4>
            <ul>
              {PRACTICE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Reach</h4>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="muted">Glendale · Yerevan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="colophon">
          <span>
            © {SITE.founded}–{new Date().getFullYear()} {SITE.name}. All
            rights reserved.
          </span>
          <span>
            Set in <em>Fraunces</em> &amp; <em>Instrument Sans</em> · designed
            with care.
          </span>
        </div>
      </div>
    </footer>
  );
}
