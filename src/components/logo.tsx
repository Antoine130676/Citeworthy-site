export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="9.25" stroke="currentColor" strokeOpacity="0.16" />
      <path
        d="M12.4 11.2c-2.42 0-4.2 1.86-4.2 4.6 0 2.72 1.76 4.56 4.16 4.56.98 0 1.86-.3 2.52-.84l-.86-1.3c-.44.34-.98.54-1.56.54-1.28 0-2.2-1-2.2-2.96 0-1.98.92-3 2.2-3 .56 0 1.06.18 1.5.5l.84-1.32a3.9 3.9 0 0 0-2.4-.78Z"
        fill="currentColor"
      />
      <path
        d="M20.6 11.2c-2.42 0-4.2 1.86-4.2 4.6 0 2.72 1.76 4.56 4.16 4.56.98 0 1.86-.3 2.52-.84l-.86-1.3c-.44.34-.98.54-1.56.54-1.28 0-2.2-1-2.2-2.96 0-1.98.92-3 2.2-3 .56 0 1.06.18 1.5.5l.84-1.32a3.9 3.9 0 0 0-2.4-.78Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-[15px] font-medium tracking-tight text-foreground ${className}`}>
      <LogoMark className="h-7 w-7 text-accent" />
      Citeworthy
    </span>
  );
}
