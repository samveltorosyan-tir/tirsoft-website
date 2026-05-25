import { SITE } from "./site";
import type { CaseStudy } from "@/data/caseStudies";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: "TIRSoft Studio",
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.description,
    foundingDate: String(SITE.founded),
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: [SITE.social.linkedin, SITE.social.instagram, SITE.social.github],
    address: SITE.addresses.map((a) => ({
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.email,
        telephone: SITE.phone,
        availableLanguage: ["English", "Armenian"],
      },
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function caseStudySchema(study: CaseStudy): JsonLd {
  const url = `${SITE.url}/case-studies/${study.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: `${study.name} — ${study.headline}`,
    description: study.summary,
    url,
    mainEntityOfPage: url,
    inLanguage: "en-US",
    datePublished: `${study.year}-01-01`,
    dateModified: `${study.year}-12-31`,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    about: study.industry,
    keywords: [...study.tags, study.industry, "AI", "software"].join(", "),
    articleSection: study.industry,
  };
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ readonly name: string; readonly url: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}
