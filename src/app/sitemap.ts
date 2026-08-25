import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const base = "https://citeworthy.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/case-studies", "/blog", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
