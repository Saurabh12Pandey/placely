import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
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
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-4xl sm:text-5xl font-extrabold text-primary text-glow tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="mt-2 text-sm text-muted-foreground font-medium">{label}</span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl border-glow p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <AnimatedCounter target={12500} label="Players Joined" />
            <AnimatedCounter target={850} label="Schools Active" />
            <AnimatedCounter target={4200} label="Matches Completed" />
            <AnimatedCounter target={94} suffix="%" label="Success Rate" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
