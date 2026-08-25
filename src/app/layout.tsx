import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BackgroundGlow } from "@/components/background-glow";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://citeworthy.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Citeworthy — GEO agency for AI search visibility",
    template: "%s — Citeworthy",
  },
  description:
    "Citeworthy is a full-service Generative Engine Optimization agency. We audit, rebuild, and monitor your content so ChatGPT, Perplexity, Gemini, and AI Overviews cite you by name.",
  openGraph: {
    type: "website",
    siteName: "Citeworthy",
    url: siteUrl,
    title: "Citeworthy — GEO agency for AI search visibility",
    description:
      "Full-service Generative Engine Optimization: audits, implementation, and monitoring so AI answer engines cite your brand.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citeworthy — GEO agency for AI search visibility",
    description:
      "Full-service Generative Engine Optimization: audits, implementation, and monitoring so AI answer engines cite your brand.",
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Citeworthy",
  url: siteUrl,
  description:
    "Full-service Generative Engine Optimization (GEO) agency helping brands earn citations across AI answer engines including ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Generative Engine Optimization",
    "AI search visibility",
    "Structured data and schema markup",
    "llms.txt",
    "AI crawler access",
    "Content citability",
    "Brand mention monitoring",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundGlow />
        <Nav />
        <main className="relative z-10 flex-1 pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
