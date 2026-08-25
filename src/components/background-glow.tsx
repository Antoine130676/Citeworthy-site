export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-20%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet/[0.22] blur-[140px]"
        style={{ animation: "orb-drift-a 22s ease-in-out infinite" }}
      />
      <div
        className="absolute right-[-10%] top-[28%] h-[42rem] w-[42rem] rounded-full bg-accent-2/[0.16] blur-[140px]"
        style={{ animation: "orb-drift-b 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[-15%] left-[-10%] h-[38rem] w-[38rem] rounded-full bg-emerald/[0.13] blur-[140px]"
        style={{ animation: "orb-drift-c 26s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[10%] right-[8%] h-[26rem] w-[26rem] rounded-full bg-magenta/[0.1] blur-[130px]"
        style={{ animation: "orb-drift-b 20s ease-in-out infinite reverse" }}
      />
      <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}
