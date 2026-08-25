"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function TeaserForm() {
  const [form, setForm] = useState({ businessName: "", email: "", domain: "", hpField: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/teaser-report", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Try again in a bit.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Something went wrong. Try again in a bit.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h3 className="font-display mt-4 text-lg font-medium">Your snapshot is on its way.</h3>
        <p className="mt-2 max-w-xs text-sm text-muted">
          Check {form.email} in the next minute or two — and your spam folder, just in case.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        type="text"
        value={form.hpField}
        onChange={update("hpField")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          type="text"
          value={form.businessName}
          onChange={update("businessName")}
          placeholder="Business name"
          className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-hairline-strong"
        />
        <input
          required
          type="text"
          value={form.domain}
          onChange={update("domain")}
          placeholder="yourdomain.com"
          className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-hairline-strong"
        />
      </div>
      <input
        required
        type="email"
        value={form.email}
        onChange={update("email")}
        placeholder="you@company.com"
        className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-hairline-strong"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-full items-center justify-center rounded-full bg-accent py-3 text-sm font-medium text-accent-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_0_0_1px_rgba(242,181,68,0.4),0_20px_40px_-12px_rgba(242,181,68,0.35)] active:scale-[0.98] disabled:opacity-60"
      >
        {status === "loading" ? "Crawling your site…" : "Send me my free snapshot"}
      </button>

      {status === "error" && error && <p className="text-center text-sm text-[#e08a3c]">{error}</p>}

      <p className="text-center text-xs text-muted-2">
        We crawl your homepage and a few key pages — takes about 15–30 seconds.
      </p>
    </form>
  );
}
