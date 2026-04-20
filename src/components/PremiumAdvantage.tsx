import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function PremiumAdvantage() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[2/1] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Elite Access</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-[1.0] mb-8"
        >
          Ready for the <br />
          <span className="gradient-neon-text">Premium Advantage?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-lg font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Elevate your recruitment journey with proprietary AI matching models and a high-performance system designed for elite results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button variant="neon" size="xl" className="rounded-2xl px-12 h-14 text-[13px] font-bold uppercase tracking-widest transition-all">
            Join the Waitlist
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Button>
          <div className="h-14 flex items-center gap-8 px-8 border border-white/5 bg-white/[0.02] rounded-2xl backdrop-blur-md">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-7 w-7 rounded-full border-2 border-background bg-zinc-800 text-[9px] font-bold flex items-center justify-center text-primary/60">AI</div>
              ))}
            </div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Inst. 1,500+</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative side accents */}
      <div className="absolute top-0 bottom-0 left-10 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 bottom-0 right-10 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
    </section>
  );
}
