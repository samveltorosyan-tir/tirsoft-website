import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — tell us about the project",
  description:
    "Get in touch with TIRSoft. We respond within one business day. Bring the brief, the back-of-napkin, or just a question.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TIRSoft",
    description:
      "We respond within one business day. Email, call, or send the brief.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage(): React.ReactElement {
  return (
    <div className="page">
      <section style={{ paddingTop: 56 }} aria-labelledby="contact-h1">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: 24 }}>
            Contact
          </Reveal>
          <Reveal as="h1" className="h-sub">
            <span id="contact-h1">
              Tell us about <em>the project.</em>
            </span>
          </Reveal>
          <Reveal as="p" className="lead" style={{ marginTop: 28 }}>
            We respond within one business day. Bring the brief, the
            back-of-napkin, or just a question — all three get the same care.
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 32 }} aria-label="Contact form and details">
        <div className="wrap">
          <div className="contact-grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
