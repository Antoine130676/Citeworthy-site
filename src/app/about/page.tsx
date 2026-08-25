import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Citeworthy exists, how we approach Generative Engine Optimization, and the principles behind every engagement.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Implementation over reporting",
    body: "An audit that nobody acts on doesn't move a single citation. We scope engagements around shipping the fix, not just diagnosing it.",
  },
  {
    title: "Structure earns trust, tricks don't",
    body: "AI models cite sources that are easy to verify and extract cleanly. There's no prompt-injection shortcut to citability — the work is making content genuinely clearer and better-sourced.",
  },
  {
    title: "GEO complements SEO, it doesn't replace it",
    body: "Traditional search isn't going away. We build on top of solid SEO fundamentals rather than asking clients to choose between the two.",
  },
  {
    title: "Measure what actually matters",
    body: "Rankings and traffic estimates don't capture AI visibility. We track real citation and mention rate across the platforms your buyers actually use.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-12 sm:pt-16">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-medium tracking-tight sm:text-5xl">
            Built for a search landscape that no longer hands out ten blue links.
          </h1>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Citeworthy started from a simple observation: the teams doing excellent traditional SEO were still
              losing visibility, because the thing being optimized had changed. A ranked list of links and a
              synthesized AI answer reward completely different things — and most agencies were still only built for
              the first one.
            </p>
            <p>
              We built Citeworthy as a full-service Generative Engine Optimization practice — audit, implementation,
              and ongoing monitoring — because a scorecard alone doesn&apos;t change whether ChatGPT or an AI Overview
              cites you. Someone still has to ship the schema, rewrite the page, and fix the crawler access. That&apos;s
              the part we do.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-display mt-5 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
            A few principles we don&apos;t compromise on.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <GlassCard className="h-full" padding="p-8">
                <h3 className="font-display text-lg font-medium">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <Reveal>
          <GlassCard padding="p-10 sm:p-14" className="text-center">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Want to see how AI models currently talk about you?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted">
              A free citability snapshot takes one call to scope.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Book a call</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
