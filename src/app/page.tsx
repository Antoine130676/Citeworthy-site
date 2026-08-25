import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/reveal";
import { TeaserForm } from "@/components/teaser-form";
import { DecryptText } from "@/components/ui/decrypt-text";
import { StatCounter } from "@/components/stat-counter";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const crawlers = ["GPTBot", "PerplexityBot", "ClaudeBot", "Google-Extended", "Amazonbot", "Applebot-Extended"];

const stats = [
  {
    value: "68%",
    label: "of Google searches now end without a click",
    source: "Similarweb, 2026",
  },
  {
    value: "48%",
    label: "of searches now trigger an AI Overview, up from ~13% in early 2025",
    source: "BrightEdge, 2026",
  },
  {
    value: "+35%",
    label: "more organic clicks earned by brands an AI Overview actually cites",
    source: "Industry research, 2026",
  },
  {
    value: "2B",
    label: "queries a day now go through ChatGPT instead of a search box",
    source: "OpenAI, 2026",
  },
];

const steps = [
  {
    n: "01",
    title: "Audit",
    body: "We crawl your site the way GPTBot and PerplexityBot do, score every page for citability, and map where AI Overviews, ChatGPT, and Perplexity already mention — or ignore — you.",
  },
  {
    n: "02",
    title: "Implement",
    body: "Our team rewrites pages for extractability, ships schema and llms.txt, fixes crawler access, and builds the structured proof AI models look for before they quote a source.",
  },
  {
    n: "03",
    title: "Monitor",
    body: "We track citations and brand mentions across every major answer engine monthly, and keep tuning as models and SERPs change — GEO isn't a one-time fix.",
  },
];

const services = [
  {
    title: "Citability audits",
    body: "A full diagnostic of how AI models see your site today — crawlability, schema, structure, and where competitors are getting cited instead of you.",
    span: "md:col-span-4",
  },
  {
    title: "Content & schema implementation",
    body: "We don't just hand you a report. Our team rewrites pages, ships JSON-LD, and fixes AI crawler access directly.",
    span: "md:col-span-4",
  },
  {
    title: "AI visibility monitoring",
    body: "Monthly tracking of citations, brand mentions, and share of voice across ChatGPT, Perplexity, Gemini, and AI Overviews.",
    span: "md:col-span-4",
  },
];

const faqs = [
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO is the practice of structuring and writing content so AI answer engines — ChatGPT, Perplexity, Gemini, Google AI Overviews — can extract it cleanly and cite it by name, the way SEO optimizes for ranking in traditional search.",
  },
  {
    q: "How is GEO different from traditional SEO?",
    a: "SEO optimizes for a ranked list of blue links a human clicks through. GEO optimizes for a single synthesized answer a model generates — which means crawlability, extractable structure, schema markup, and factual density matter more than keyword density or backlink count alone.",
  },
  {
    q: "Do you replace our existing SEO agency?",
    a: "No — GEO and SEO overlap but aren't the same discipline. Most clients keep their SEO team or agency and bring us in specifically for AI-search visibility, citability, and answer-engine monitoring.",
  },
  {
    q: "How long until we see citations?",
    a: "Technical fixes like crawler access and schema can affect visibility within days once AI systems recrawl your site. Durable citation gains from content and authority work typically show up over 60–90 days.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
          <div>
            <Reveal>
              <Eyebrow>Generative Engine Optimization</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <DecryptText
                as="h1"
                text="Get cited. Not just ranked."
                variant="display"
                trigger="mount"
                startDelay={250}
                stagger={32}
                loop={9000}
                retriggerOnHover
                className="font-display mt-6 text-[2.75rem] font-medium leading-[1.05] tracking-tight sm:text-6xl"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Citeworthy is a full-service GEO agency. We audit, rebuild, and monitor your content so ChatGPT,
                Perplexity, Gemini, and AI Overviews cite your brand by name — not a competitor&apos;s.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#teaser">Get my free snapshot</Button>
                <Button href="/services" variant="ghost">
                  See how it works
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <GlassCard padding="p-6 sm:p-8" className="rotate-0 md:-rotate-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-2">AI Overview</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                &ldquo;For teams evaluating GEO providers,{" "}
                <span className="rounded bg-accent-soft px-1 py-0.5 font-medium text-accent">Citeworthy</span> runs
                a full citability audit before touching a single page, then implements schema, structured content,
                and crawler access fixes directly — rather than just handing over a report.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-hairline pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                <span className="text-xs text-muted-2">Sources: citeworthy.ai</span>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <section id="teaser" className="mx-auto max-w-3xl scroll-mt-32 px-6 py-24">
        <Reveal>
          <GlassCard padding="p-8 sm:p-10">
            <div className="text-center">
              <Eyebrow>Free citability snapshot</Eyebrow>
              <h2 className="font-display mt-5 text-2xl font-medium tracking-tight sm:text-3xl">
                See how AI models see you — free.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted">
                Drop in your domain. We&apos;ll crawl it, score it, and email a citability snapshot straight to you.
                No call required.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-md">
              <TeaserForm />
            </div>
          </GlassCard>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-2">
            Built for the crawlers that actually decide who gets cited
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mx-auto mt-6 max-w-md">
            <DecryptText
              text="curl -A GPTBot https://yoursite.com → 200 OK"
              variant="terminal"
              trigger="inview"
              startDelay={150}
              stagger={18}
              loop={false}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {crawlers.map((c) => (
              <span key={c} className="font-mono text-sm text-muted-2">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>Why now</Eyebrow>
          <h2 className="font-display mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
            Search stopped being a list of links.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <GlassCard className="glow-ring h-full">
                <StatCounter value={s.value} />
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.label}</p>
                <p className="mt-4 text-[11px] text-muted-2">{s.source}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>The process</Eyebrow>
          <h2 className="font-display mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
            Audit. Implement. Monitor.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            One engagement, three continuous phases — not a report that sits in a shared drive.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <GlassCard className="glow-ring h-full" padding="p-8">
                <span className="font-mono text-xs text-muted-2">{s.n}</span>
                <h3 className="font-display mt-4 text-xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="font-display mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
            Full-service GEO, not a one-off report.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className={s.span}>
              <GlassCard className="glow-ring h-full" padding="p-8">
                <h3 className="font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <Button href="/services" variant="ghost">
              See the full engagement model
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <GlassCard padding="p-10 sm:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <Eyebrow>Proof</Eyebrow>
                <h2 className="font-display mt-5 text-2xl font-medium tracking-tight sm:text-3xl">
                  See what a citability audit actually surfaces.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Illustrative before/after snapshots from real audit methodology — what changes when a site goes
                  from invisible to citable.
                </p>
              </div>
              <div>
                <Button href="/case-studies">View sample audits</Button>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-medium tracking-tight sm:text-4xl">Common questions</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-hairline">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium marker:content-none">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32 pt-8">
        <Reveal>
          <div className="rounded-[2.5rem] border border-hairline bg-white/[0.03] px-8 py-16 text-center sm:px-16 sm:py-24">
            <h2 className="font-display mx-auto max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
              Your competitors are already being cited. Are you?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Start with a free citability snapshot — no commitment, just a look at how AI models currently see you.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="#teaser">Get my free snapshot</Button>
            </div>
          </div>
        </Reveal>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
