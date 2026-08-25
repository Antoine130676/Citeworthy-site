"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function parseValue(raw: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = raw.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, number: parseFloat(numStr), suffix, decimals };
}

export function StatCounter({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const { prefix, number, suffix, decimals } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(number * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, number, duration]);

  return (
    <motion.span
      ref={ref}
      className="font-display text-gradient text-4xl font-semibold"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
    >
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
