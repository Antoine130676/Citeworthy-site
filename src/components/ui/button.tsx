import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const arrow = (
  <span className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 dark:bg-white/10">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H8M17 7V16" />
    </svg>
  </span>
);

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "group inline-flex items-center rounded-full pl-6 pr-1.5 py-1.5 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] hover:scale-[1.02]";

  const styles =
    variant === "primary"
      ? "bg-[length:200%_200%] bg-[image:var(--gradient-brand)] text-accent-foreground bg-[position:0%_50%] hover:bg-[position:100%_50%] hover:shadow-[0_0_0_1px_rgba(167,139,250,0.4),0_20px_45px_-12px_rgba(139,92,246,0.45)]"
      : "border border-hairline-strong bg-white/[0.03] text-foreground hover:bg-white/[0.06] pr-6";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {variant === "primary" && arrow}
    </Link>
  );
}
