import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./ArrowIcon";

interface CTAStripProps {
  readonly heading: React.ReactNode;
  readonly subtitle: React.ReactNode;
  readonly buttonLabel?: string;
  readonly buttonHref?: string;
}

export function CTAStrip({
  heading,
  subtitle,
  buttonLabel = "Book a discovery call",
  buttonHref = "/contact",
}: CTAStripProps): React.ReactElement {
  return (
    <section>
      <div className="wrap">
        <Reveal className="cta-strip">
          <div>
            <h2 className="h2" style={{ margin: 0 }}>
              {heading}
            </h2>
            <p>{subtitle}</p>
          </div>
          <Link href={buttonHref} className="btn">
            {buttonLabel}
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
