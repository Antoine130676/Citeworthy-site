import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "Illustrative before/after snapshots showing what a Citeworthy citability audit and implementation actually change.",
  alternates: { canonical: "/case-studies" },
};

const snapshots = [
  {
    tag: "Illustrative example",
    industry: "B2B SaaS",
    title: "From invisible to cited on a pricing comparison query",
    before: [
      "No JSON-LD on any product or comparison page",
      "robots.txt silently blocking GPTBot",
      "Pricing buried in a PDF, unreadable to crawlers",
    ],
    after: [
      "Product & FAQ schema shipped across 40+ pages",
      "AI crawler access restored and verified",
      "Pricing rebuilt as extractable on-page tables",
    ],
    outcome: "Site became eligible to be quoted directly on pricing and feature-comparison questions it was previously excluded from entirely.",
  },
  {
    tag: "Illustrative example",
    industry: "E-commerce",
    title: "Turning product pages into extractable answers",
    before: [
      "Specs rendered client-side only, invisible to crawlers",
      "No Product or Review schema",
      "Category pages with thin, duplicate copy",
    ],
    after: [
      "Server-rendered spec tables with Product schema",
      "Review markup surfaced for aggregate ratings",
      "Category pages rewritten with genuinely distinct, citable copy",
    ],
    outcome: "Product detail became directly quotable for spec-comparison and \"which is better for X\" style AI answers.",
  },
  {
    tag: "Illustrative example",
    industry: "Professional services",
    title: "Building topical authority an AI model can verify",
    before: [
      "Thin \"services\" pages with no supporting depth",
      "No author or organization credentials in markup",
      "Zero llms.txt or structured site map for AI crawlers",
    ],
    after: [
      "Deep, well-sourced service and methodology pages",
      "Organization and Person schema with verifiable credentials",
      "llms.txt published and kept current",
    ],
    outcome: "Content gained the depth and verifiable sourcing that answer engines look for before attributing a claim.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-12 text-center sm:pt-16">
        <Reveal>
          <Eyebrow>Proof</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-medium tracking-tight sm:text-5xl">
            What a citability audit actually surfaces.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            We&apos;re a new agency, so instead of client logos we&apos;re showing you the methodology directly:
            illustrative before/after snapshots built from real audit criteria, not marketing claims.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-8">
          {snapshots.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <GlassCard padding="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-accent">
                    {s.tag}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-2">{s.industry}</span>
                </div>
                <h2 className="font-display mt-4 text-xl font-medium sm:text-2xl">{s.title}</h2>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-2">Before</p>
                    <ul className="mt-3 space-y-2.5">
                      {s.before.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">After</p>
                    <ul className="mt-3 space-y-2.5">
                      {s.after.map((a) => (
                        <li key={a} className="flex items-start gap-2.5 text-sm text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 border-t border-hairline pt-6 text-sm leading-relaxed text-muted">{s.outcome}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <Reveal>
          <GlassCard padding="p-10 sm:p-14" className="text-center">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Want to see this run against your own site?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted">
              A free citability snapshot shows exactly where you stand before you commit to anything.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/#teaser">Get my free snapshot</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
