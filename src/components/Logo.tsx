import Link from "next/link";

interface LogoProps {
  readonly variant?: "header" | "menu";
}

export function Logo({ variant = "header" }: LogoProps): React.ReactElement {
  const label =
    variant === "menu" ? "TIRSoft — home (close menu)" : "TIRSoft — home";
  return (
    <Link href="/" className="logo" aria-label={label}>
      <span className="mark">tirsoft</span>
      <span className="studio">studio</span>
    </Link>
  );
}
