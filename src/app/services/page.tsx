import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Citability audits, GEO implementation, and AI visibility monitoring — the three-phase engagement Citeworthy runs for every client.",
  alternates: { canonical: "/services" },
};

const pillars = [
  {
    id: "audit",
    n: "01",
    title: "Citability audit",
    tagline: "Where you stand today",
    body: "We evaluate your site the way AI crawlers actually do: robots.txt and header access, structured data coverage, content extractability, factual density, and existing citations across ChatGPT, Perplexity, Gemini, and AI Overviews.",
    deliverables: [
      "Full AI crawler access audit (GPTBot, PerplexityBot, ClaudeBot, Google-Extended)",
      "Page-by-page citability scoring",
      "Schema.org / structured data gap analysis",
      "Competitive citation benchmark — who's getting quoted instead of you",
      "Prioritized fix list, ranked by effort vs. citation impact",
    ],
  },
  {
    id: "implementation",
    n: "02",
    title: "Implementation",
    tagline: "Doing the work, not just reporting it",
    body: "Most GEO providers stop at the audit. We don't — our team ships the fixes directly: rewriting pages for clean extraction, deploying JSON-LD schema, publishing and maintaining llms.txt, and correcting crawler access at the infrastructure level.",
    deliverables: [
      "Content rewrites optimized for AI extraction and quoting",
      "JSON-LD schema implementation (Organization, Article, FAQ, Product)",
      "llms.txt authored and kept current",
      "robots.txt and header fixes for AI crawler access",
      "Internal linking and topical structure improvements",
    ],
  },
  {
    id: "monitoring",
    n: "03",
    title: "AI visibility monitoring",
    tagline: "Because models retrain and rankings move",
    body: "GEO isn't a one-time project — model providers update retrieval behavior constantly. We track your citation rate, brand mentions, and share of voice against named competitors every month, and adjust the implementation plan as the landscape shifts.",
    deliverables: [
      "Monthly citation and brand mention tracking across major AI platforms",
      "Share-of-voice reporting against named competitors",
      "Alerting when citation rate drops or crawler access breaks",
      "Quarterly strategy review and re-prioritization",
    ],
  },
];

const tiers = [
  {
    name: "Audit",
    price: "Fixed fee",
    desc: "A one-time citability audit and prioritized fix list. Good for a first look, or if you have an internal team to implement.",
    features: ["Full citability audit", "Competitive citation benchmark", "Prioritized fix list", "Findings walkthrough call"],
  },
  {
    name: "Managed GEO",
    price: "Monthly retainer",
    desc: "The full engagement — audit, hands-on implementation, and ongoing monitoring. Our most common engagement.",
    features: ["Everything in Audit", "Content & schema implementation", "llms.txt & crawler access fixes", "Monthly citation monitoring", "Quarterly strategy review"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom scope",
    desc: "Multi-brand or multi-market accounts, deeper technical integration, or dedicated reporting cadence.",
    features: ["Everything in Managed GEO", "Multi-brand / multi-domain coverage", "Custom reporting cadence", "Dedicated engagement lead"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-12 text-center sm:pt-16">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-medium tracking-tight sm:text-5xl">
            One engagement, three phases.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            We don&apos;t sell reports that sit in a shared drive. Every Citeworthy engagement runs audit, implementation,
            and monitoring as one continuous loop.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-8">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <div id={p.id} className="scroll-mt-32">
                <GlassCard padding="p-8 sm:p-10">
                  <div className="grid gap-8 md:grid-cols-[auto_1fr]">
                    <div className="flex md:flex-col md:items-start items-center gap-3 md:gap-4">
                      <span className="font-mono text-xs text-muted-2">{p.n}</span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-accent">{p.tagline}</span>
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-medium">{p.title}</h2>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{p.body}</p>
                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {p.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-muted">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>Engagement models</Eyebrow>
          <h2 className="font-display mt-5 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
            Pricing scoped to your site, not a price list.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Every engagement is scoped after the audit call — site size, competitive density, and target markets all
            change the number. Here&apos;s the shape of what we offer.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <GlassCard
                padding="p-8"
                className={`h-full ${t.featured ? "ring-accent/40" : ""}`}
              >
                {t.featured && (
                  <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-accent">
                    Most common
                  </span>
                )}
                <h3 className="font-display text-xl font-medium">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-2">{t.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{t.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Button href="/contact">Get a scoped quote</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
