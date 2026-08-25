const DOMAIN_RE = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)+$/i;

export function normalizeDomain(raw: string): string | null {
  let host = raw.trim().toLowerCase();
  host = host.replace(/^[a-z]+:\/\//, "");
  host = host.split(/[/?#]/)[0];
  host = host.split(":")[0];
  host = host.replace(/^www\./, "");
  if (!DOMAIN_RE.test(host) || host.length > 253) return null;
  return host;
}
