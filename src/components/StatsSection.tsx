import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RevealText } from "@/components/RevealText";

function DashboardTile({ 
  label, 
  value, 
  suffix = "", 
  subtext, 
  className = "", 
  large = false,
  delay = 0,
}: { 
  label: string; 
  value: number; 
  suffix?: string; 
  subtext: string; 
  className?: string; 
  large?: boolean;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-7 transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/10 scanner-line hover-reveal-zone ${className}`}
    >
      {/* HUD Accents - smaller */}
      <div className="absolute top-3 left-3 h-1.5 w-1.5 border-t border-l border-primary/30" />
      <div className="absolute top-3 right-3 h-1.5 w-1.5 border-t border-r border-primary/30" />
      <div className="absolute bottom-3 left-3 h-1.5 w-1.5 border-b border-l border-primary/30" />
      <div className="absolute bottom-3 right-3 h-1.5 w-1.5 border-b border-r border-primary/30" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary/50 reveal-meta">{label}</span>
          <div className="text-[9px] text-muted-foreground/20 text-mono reveal-meta">
            <span style={{ transitionDelay: "0.25s" }}>V4.2</span>
          </div>
        </div>

        <div className="flex items-baseline gap-1.5 mb-2">
          <span className={`font-black tracking-[-0.03em] text-foreground tabular-nums leading-none ${large ? 'text-5xl' : 'text-4xl'}`}>
            {count.toLocaleString()}
          </span>
          {suffix && <span className={`font-bold text-primary ${large ? 'text-2xl' : 'text-xl'}`}>{suffix}</span>}
        </div>
        <p className="text-[10px] font-medium text-muted-foreground/40 uppercase tracking-[0.18em] reveal-paragraph">{subtext}</p>

        {/* Compact graph - less dominant */}
        <div className="mt-6 flex items-end gap-[2px] h-8 opacity-50">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-full bg-primary/30 rounded-t-[1px]"
              initial={{ height: "15%" }}
              animate={inView ? { height: `${20 + Math.random() * 80}%` } : {}}
              transition={{ delay: delay + i * 0.025, duration: 0.8, repeat: Infinity, repeatType: "mirror", repeatDelay: Math.random() * 2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Technical Layer */}
      <div className="absolute inset-0 z-0 technical-grid opacity-15" />
      <div className="absolute top-0 right-0 w-full h-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(134,194,50,0.1) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-14 hover-reveal-zone">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/15 mb-5">
              <span className="animate-pulse h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Live Network Pulse</span>
            </div>
            <RevealText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-foreground leading-[1.05]">
              Trusted by the elite next generation.
            </RevealText>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-4 items-start">
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DashboardTile 
              label="Athlete Database"
              value={12500}
              subtext="Verified student athletes"
              large={true}
              delay={0.1}
              className="sm:col-span-2"
            />
            <DashboardTile 
              label="Institutional Reach"
              value={850}
              subtext="Active scouting schools"
              delay={0.2}
            />
            <DashboardTile 
              label="Platform Precision"
              value={96}
              suffix="%"
              subtext="Match success algorithm"
              delay={0.3}
            />
          </div>

          <div className="lg:col-span-4">
            <DashboardTile 
              label="Successful Placements"
              value={4200}
              subtext="Confirmed school matches"
              delay={0.25}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
