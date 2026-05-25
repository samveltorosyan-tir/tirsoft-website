export const SITE = {
  name: "TIRSoft Studio",
  shortName: "TIRSoft",
  tagline: "AI-native software studio",
  description:
    "TIRSoft is an AI-native software studio. AI strategy, integration, and custom builds, from Glendale and Yerevan. Since 2016.",
  url: "https://tirsoft.co",
  ogImage: "/og.png",
  email: "hello@tirsoft.co",
  phone: "+374 95 311 644",
  locale: "en_US",
  founded: 2016,
  addresses: [
    {
      label: "Glendale",
      street: "450 N Brand Blvd",
      city: "Glendale",
      region: "CA",
      postalCode: "91203",
      country: "US",
    },
    {
      label: "Yerevan",
      street: "14 Tumanyan St",
      city: "Yerevan",
      region: "",
      postalCode: "0001",
      country: "AM",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    github: "https://github.com",
  },
} as const;

export type SiteConfig = typeof SITE;
