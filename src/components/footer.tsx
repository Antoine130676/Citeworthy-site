import Link from "next/link";
import { Logo } from "./logo";

const columns = [
  {
    title: "Site",
    links: [
      { href: "/services", label: "Services" },
      { href: "/case-studies", label: "Proof" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#audit", label: "Citability audits" },
      { href: "/services#implementation", label: "Implementation" },
      { href: "/services#monitoring", label: "AI visibility monitoring" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col justify-between gap-14 md:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A full-service GEO agency — we make brands citeworthy across ChatGPT, Perplexity, Gemini, and AI Overviews.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-20">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-2">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-muted transition-colors duration-300 hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Citeworthy. All rights reserved.</p>
          <p>Built to be read by humans and cited by machines.</p>
        </div>
      </div>
    </footer>
  );
}
