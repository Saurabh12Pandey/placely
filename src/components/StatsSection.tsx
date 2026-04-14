import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", label, icon }: { target: number; suffix?: string; label: string; icon: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="relative group">
      <div className="flex flex-col items-start p-6 sm:p-8 rounded-2xl transition-all duration-500"
        style={{
          background: "linear-gradient(145deg, rgba(134,194,50,0.04), rgba(34,38,41,0.6))",
          border: "1px solid rgba(134,194,50,0.08)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl text-primary"
            style={{ background: "rgba(134,194,50,0.1)" }}>
            {icon}
          </div>
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">{label}</span>
        </div>
        <span className="text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground tabular-nums">
          {count.toLocaleString()}{suffix}
        </span>
        {/* Subtle bar */}
        <div className="mt-4 h-[2px] w-full rounded-full overflow-hidden" style={{ background: "rgba(134,194,50,0.1)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #86C232, #61892F)" }}
            initial={{ width: "0%" }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Live Analytics</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.02em] text-foreground">Platform Performance</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatedCounter
            target={12500}
            label="Players"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
          />
          <AnimatedCounter
            target={850}
            label="Schools"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>}
          />
          <AnimatedCounter
            target={4200}
            label="Matches"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
          />
          <AnimatedCounter
            target={94}
            suffix="%"
            label="Success"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
          />
        </div>
      </div>
    </section>
  );
}
