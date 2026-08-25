export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "what-is-llms-txt",
    title: "What is llms.txt, and does your site actually need one?",
    excerpt:
      "llms.txt is a proposed standard for telling AI systems what your site is and how to navigate it. Here's what it does, what it doesn't, and when it's worth publishing.",
    date: "2026-06-02",
    readTime: "5 min read",
    sections: [
      {
        heading: "The short answer",
        body: [
          "llms.txt is a plain-text file, served from your site's root, that gives AI systems a curated map of your most important content — similar in spirit to robots.txt or sitemap.xml, but written for language models instead of crawlers.",
          "It doesn't guarantee citation. No file does. What it does is reduce ambiguity: instead of an AI system inferring your site structure from a crawl, you hand it a clean, prioritized index.",
        ],
      },
      {
        heading: "What it changes in practice",
        body: [
          "Model providers vary in how much weight they give llms.txt today, and that's likely to keep shifting. The practical value right now is less about any single platform honoring the file perfectly, and more about the exercise of writing it: it forces you to articulate, in plain language, what your site actually is and which pages matter most.",
          "That clarity tends to improve the underlying content too — which is the part that actually drives citations, regardless of whether a given model reads the file directly.",
        ],
      },
      {
        heading: "When it's worth doing",
        body: [
          "If your site has a large surface area — docs, blog, product pages, marketing pages — an llms.txt file is a low-cost way to signal priority. If you're a small site with a handful of pages, the value is marginal and your time is better spent on schema and content structure first.",
          "We publish and maintain llms.txt as part of every Managed GEO engagement, but we treat it as one signal among several, not a silver bullet.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-crawlers-read-your-site",
    title: "How AI crawlers actually read your site — and how to check access",
    excerpt:
      "GPTBot, PerplexityBot, ClaudeBot, and Google-Extended each request access differently. If any of them are silently blocked, you're invisible to that entire platform.",
    date: "2026-06-18",
    readTime: "6 min read",
    sections: [
      {
        heading: "Why this gets missed",
        body: [
          "Most robots.txt files were last touched years ago, often by whoever set up the CMS, long before AI crawlers existed. It's extremely common to find a blanket disallow rule that was meant for scrapers or dead bots, quietly also blocking GPTBot or PerplexityBot with no one aware of it.",
          "Unlike a broken sitemap or a 404, this failure mode is invisible in normal analytics. Your site looks fine to human visitors and to Google. It's simply absent from an entire category of AI answers.",
        ],
      },
      {
        heading: "What to actually check",
        body: [
          "Start with robots.txt and look explicitly for GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Amazonbot, and Applebot-Extended — each is a distinct user-agent with its own rules. A generic 'Disallow: /' at the top of the file overrides everything below it for crawlers that respect the first matching rule.",
          "Then check for server-level blocks — some CDN or WAF configurations block AI crawler user-agents by default, entirely outside of robots.txt, which means the file can look correct while access is still denied at the network layer.",
          "Finally, check whether your critical content actually renders without JavaScript. Several AI crawlers don't execute client-side JavaScript, so content that only appears after a client-side fetch may be functionally invisible even with perfect crawler access.",
        ],
      },
      {
        heading: "The fix is usually small",
        body: [
          "In most audits we run, this is a handful of lines in robots.txt and one CDN rule — not a rebuild. The value of catching it is disproportionate to the effort: it's binary access, not a ranking nudge.",
        ],
      },
    ],
  },
  {
    slug: "schema-markup-that-helps-you-get-cited",
    title: "Schema markup that actually helps you get cited by AI",
    excerpt:
      "Not all structured data moves the needle for AI citability. Here's what to prioritize, and what's mostly cosmetic in a GEO context.",
    date: "2026-07-09",
    readTime: "7 min read",
    sections: [
      {
        heading: "Schema helps verification, not just discovery",
        body: [
          "Traditional SEO treats schema mostly as a way to earn rich results in a search listing. For GEO, the more relevant function is different: schema gives an AI system a structured, low-ambiguity way to verify facts before attributing them to you — who published this, when, what organization stands behind it, what the actual answer to a question is.",
          "That reframing changes which schema types are worth prioritizing.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "Organization schema, with accurate name, url, logo, and sameAs links to verified profiles, establishes who you are — this underpins entity recognition across almost every downstream citation.",
          "FAQPage schema on genuinely useful FAQ content maps directly onto the question-and-answer format most AI systems generate, making it easy to lift a clean answer with attribution.",
          "Article schema with a real author, dateModified, and publisher signals recency and accountability — both weighed by systems trying to avoid citing stale or unverifiable claims.",
          "Product and Review schema, where applicable, give AI systems structured specs and sentiment they don't have to infer from prose.",
        ],
      },
      {
        heading: "What's usually not worth the effort",
        body: [
          "Highly granular schema — BreadcrumbList, SiteNavigationElement, and similar navigational types — mainly help traditional search rendering and rarely change whether AI systems cite you. If you're prioritizing a limited implementation budget, we generally rank these last.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
