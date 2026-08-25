import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free citability audit call, or send Citeworthy a note about what you're trying to fix.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-32 pt-12 sm:pt-16">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-display mt-6 text-4xl font-medium tracking-tight sm:text-5xl">
              Let&apos;s look at how AI sees you.
            </h1>
            <p className="mt-5 max-w-sm text-muted">
              Tell us a bit about your site and what&apos;s not working. We&apos;ll follow up to scope a full
              engagement.
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-2">
              Just want a quick automated look first?{" "}
              <Link href="/#teaser" className="text-accent underline underline-offset-4">
                Get a free instant snapshot
              </Link>{" "}
              instead.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-2">Email</p>
                <p className="mt-1 text-sm text-foreground">hello@citeworthy.ai</p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-2">Response time</p>
                <p className="mt-1 text-sm text-foreground">Within one business day</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <GlassCard padding="p-8 sm:p-10">
            <ContactForm />
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
