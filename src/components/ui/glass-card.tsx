import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  padding = "p-6",
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
}) {
  return (
    <div className={`rounded-[2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/[0.06] ${className}`}>
      <div
        className={`h-full rounded-[calc(2rem-0.375rem)] border border-hairline bg-surface/80 ${padding} shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]`}
      >
        {children}
      </div>
    </div>
  );
}
