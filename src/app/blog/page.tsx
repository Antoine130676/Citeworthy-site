import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/reveal";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on Generative Engine Optimization, AI crawler access, schema markup, and AI search visibility.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-12 text-center sm:pt-16">
        <Reveal>
          <Eyebrow>Blog</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-medium tracking-tight sm:text-5xl">
            Notes on getting cited.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Practical writing on GEO, AI crawler access, and structured content — written to be extractable, and to
            be useful even if a model never quotes it.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="space-y-4">
          {posts
            .slice()
            .reverse()
            .map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/blog/${p.slug}`}>
                  <GlassCard padding="p-8" className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-2">
                      <time dateTime={p.date}>
                        {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </time>
                      <span>&middot;</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h2 className="font-display mt-3 text-xl font-medium">{p.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>
    </>
  );
}
