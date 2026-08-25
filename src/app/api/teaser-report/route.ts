import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";
import { normalizeDomain } from "@/lib/teaser/domain";
import { isRateLimited } from "@/lib/teaser/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid request body.");
  }

  if (typeof body.hpField === "string" && body.hpField.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const businessName = typeof body.businessName === "string" ? body.businessName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const domainInput = typeof body.domain === "string" ? body.domain.trim() : "";

  if (!businessName || businessName.length > 120) {
    return badRequest("Enter a business name.");
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return badRequest("Enter a valid email address.");
  }
  const domain = normalizeDomain(domainInput);
  if (!domain) {
    return badRequest("That doesn't look like a valid domain — try something like example.com.");
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip) || isRateLimited(email)) {
    return NextResponse.json(
      { ok: false, error: "You've hit the limit for free snapshots this hour — try again later." },
      { status: 429 }
    );
  }

  const gatewayUrl = process.env.HERMES_GATEWAY_URL;
  const secret = process.env.HERMES_TEASER_WEBHOOK_SECRET;
  if (!gatewayUrl || !secret) {
    console.error("teaser-report: HERMES_GATEWAY_URL / HERMES_TEASER_WEBHOOK_SECRET not configured");
    return NextResponse.json(
      { ok: false, error: "Snapshots aren't available right now. Try again in a bit." },
      { status: 503 }
    );
  }

  const payload = JSON.stringify({ businessName, email, domain });
  const signature = "sha256=" + createHmac("sha256", secret).update(payload).digest("hex");

  try {
    const res = await fetch(`${gatewayUrl}/webhooks/citeworthy-teaser`, {
      method: "POST",
      headers: { "content-type": "application/json", "X-Hub-Signature-256": signature },
      body: payload,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("teaser-report: gateway rejected the event", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Something went wrong queuing your snapshot. Try again in a bit." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("teaser-report: failed to reach Hermes gateway", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong queuing your snapshot. Try again in a bit." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
