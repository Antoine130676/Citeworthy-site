import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/reveal";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Citeworthy" },
    publisher: { "@type": "Organization", name: "Citeworthy" },
    mainEntityOfPage: `https://citeworthy.ai/blog/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-6 pb-32 pt-12 sm:pt-16">
      <Reveal>
        <Link href="/blog" className="text-sm text-muted-2 transition-colors hover:text-foreground">
          &larr; Back to blog
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-2">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
      </Reveal>

      <div className="mt-12 space-y-10">
        {post.sections.map((s, i) => (
          <Reveal key={s.heading} delay={i * 0.04}>
            <h2 className="font-display text-xl font-medium">{s.heading}</h2>
            <div className="mt-4 space-y-4">
              {s.body.map((p, j) => (
                <p key={j} className="text-[15px] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <GlassCard padding="p-8 sm:p-10" className="mt-16 text-center">
          <Eyebrow>Talk to us</Eyebrow>
          <h2 className="font-display mt-4 text-xl font-medium">Want this run against your own site?</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
            A free citability snapshot covers crawler access, schema, and structure in one call.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/#teaser">Get my free snapshot</Button>
          </div>
        </GlassCard>
      </Reveal>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
