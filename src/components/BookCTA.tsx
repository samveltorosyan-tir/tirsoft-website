import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

interface BookCTAProps {
  readonly label?: string;
  readonly href?: string;
}

export function BookCTA({
  label = "Book a discovery call",
  href = "/contact",
}: BookCTAProps): React.ReactElement {
  return (
    <Link href={href} className="btn">
      {label}
      <ArrowIcon />
    </Link>
  );
}
