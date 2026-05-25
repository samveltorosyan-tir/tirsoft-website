import { TESTIMONIALS, type Testimonial } from "@/data/site-content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

function StarRow(): React.ReactElement {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <path d="M7 0l1.9 4.4 4.7.4-3.6 3.1 1.1 4.6L7 10.1 2.9 12.5l1.1-4.6L.4 4.8l4.7-.4z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { readonly t: Testimonial }): React.ReactElement {
  return (
    <Reveal as="article" className="testi-card">
      <StarRow />
      <p
        className="testi-quote"
        dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quoteHtml}&rdquo;` }}
      />
      <span className="testi-co">{t.company}</span>
      <div className="testi-meta">
        <span className="testi-name">{t.name}</span>
        <span className="testi-role">{t.role}</span>
      </div>
    </Reveal>
  );
}

export function Testimonials(): React.ReactElement {
  return (
    <section className="testi" aria-labelledby="testi-heading">
      <div className="wrap">
        <SectionHead
          eyebrow="Clients"
          title={
            <>
              Words from the <em>operators.</em>
            </>
          }
          headingId="testi-heading"
        />
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
