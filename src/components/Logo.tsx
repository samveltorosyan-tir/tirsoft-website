import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  readonly variant?: "header" | "menu";
}

export function Logo({ variant = "header" }: LogoProps): React.ReactElement {
  const label =
    variant === "menu" ? "TIRSoft — home (close menu)" : "TIRSoft — home";
  return (
    <Link href="/" className="logo" aria-label={label}>
      <Image
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="logo-mark"
      />
    </Link>
  );
}
