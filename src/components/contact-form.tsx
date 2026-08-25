"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@citeworthy.ai";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const mailtoHref = () => {
    const subject = encodeURIComponent(`GEO audit inquiry${form.company ? ` — ${form.company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref();
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-hairline-strong"
            placeholder="Jordan Ellis"
          />
        </Field>
        <Field label="Work email">
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-hairline-strong"
            placeholder="jordan@company.com"
          />
        </Field>
      </div>
      <Field label="Company / site">
        <input
          type="text"
          value={form.company}
          onChange={update("company")}
          className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-hairline-strong"
          placeholder="company.com"
        />
      </Field>
      <Field label="What are you trying to fix?">
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="w-full resize-none rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-hairline-strong"
          placeholder="e.g. We're not showing up in AI Overviews for our category at all."
        />
      </Field>

      <button
        type="submit"
        className="group inline-flex items-center rounded-full bg-accent py-1.5 pl-6 pr-1.5 text-sm font-medium text-accent-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_0_0_1px_rgba(242,181,68,0.4),0_20px_40px_-12px_rgba(242,181,68,0.35)] active:scale-[0.98]"
      >
        Send inquiry
        <span className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M17 7H8M17 7V16" />
          </svg>
        </span>
      </button>
      <p className="text-xs text-muted-2">Opens your email client, addressed to {CONTACT_EMAIL}.</p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-2">{label}</span>
      {children}
    </label>
  );
}
