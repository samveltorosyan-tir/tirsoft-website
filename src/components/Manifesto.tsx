import { Reveal } from "./Reveal";

export function Manifesto(): React.ReactElement {
  return (
    <section className="manifesto" aria-labelledby="manifesto-heading">
      <div className="wrap">
        <div className="manifesto-grid">
          <Reveal className="manifesto-numeral" aria-hidden="true">
            01
          </Reveal>
          <div className="manifesto-body">
            <Reveal id="manifesto-heading" className="eyebrow manifesto-label">
              Manifesto
            </Reveal>
            <Reveal as="p" className="manifesto-stmt">
              At TIRSoft, <em>your vision is our code.</em>
              <br />
              We are an AI-native studio — partners, not a vendor.
            </Reveal>
            <Reveal className="manifesto-not">
              <span className="strike">not a body shop</span>
              <span className="strike">not a chatbot factory</span>
              <span className="strike">not a slide deck</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
