import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

export function ContactInfo(): React.ReactElement {
  const phoneHref = `tel:${SITE.phone.replace(/\s/g, "")}`;
  return (
    <aside className="contact-info" aria-label="Contact details">
      <Reveal className="contact-line">
        <span className="k">Email</span>
        <a className="v" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
      </Reveal>
      <Reveal className="contact-line">
        <span className="k">Phone</span>
        <a className="v" href={phoneHref}>
          {SITE.phone}
        </a>
      </Reveal>
      <Reveal className="contact-line">
        <span className="k">Glendale</span>
        <span className="v">450 N Brand Blvd, CA 91203</span>
      </Reveal>
      <Reveal className="contact-line">
        <span className="k">Yerevan</span>
        <span className="v">14 Tumanyan St, 0001</span>
      </Reveal>
      <Reveal className="contact-line" style={{ borderBottom: 0 }}>
        <span className="k">Response</span>
        <span className="v">Within one business day.</span>
      </Reveal>
    </aside>
  );
}
