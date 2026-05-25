"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

const NAV_ITEMS: ReadonlyArray<NavItem> = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header(): React.ReactElement {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <Logo />
          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive(item.href) ? " active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn-nav nav-cta">
            <span className="dotdot" />
            Book a discovery call
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMenuOpen(true);
            }}
          >
            menu
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`menu-overlay${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="top">
          <Logo variant="menu" />
          <button
            type="button"
            className="menu-toggle"
            style={{ display: "inline-flex" }}
            aria-label="Close menu"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            close
          </button>
        </div>
        <nav aria-label="Mobile">
          {NAV_ITEMS.map((item) => {
            const useEm = item.label === "Services" || item.label === "Careers";
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {useEm ? <em>{item.label}</em> : item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
