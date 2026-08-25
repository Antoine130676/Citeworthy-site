import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
      <span className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}
