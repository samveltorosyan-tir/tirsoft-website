import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
  const studyRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
    url: `${SITE.url}/case-studies/${study.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...studyRoutes];
}
