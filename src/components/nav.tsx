"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Proof" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-40 flex justify-center px-4">
        <div className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-hairline bg-white/[0.05] px-3 py-2 pl-5 backdrop-blur-2xl">
          <Link href="/" aria-label="Citeworthy home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium transition-colors duration-300 ${
                  pathname === l.href ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-accent-foreground transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
            >
              Book a call
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline md:hidden"
            >
              <span
                className={`absolute h-[1.5px] w-4 bg-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-2 bg-background/90 backdrop-blur-3xl transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.concat([{ href: "/contact", label: "Contact" }]).map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            className={`font-display text-3xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } ${pathname === l.href ? "text-accent" : "text-foreground"}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
