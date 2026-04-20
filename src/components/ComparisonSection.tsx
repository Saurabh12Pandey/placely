import { motion } from "framer-motion";

const traditional = [
  { text: "Manual, time-consuming scouting", detail: "Traveling to obscure trials without data." },
  { text: "Slow email chains & gatekeepers", detail: "Wasted months waiting for a reply." },
  { text: "Zero visibility into match quality", detail: "Committing to a school that doesn't fit." },
  { text: "Fragmented offline workflow", detail: "Paper resumes and lost connections." },
];

const placely = [
  { text: "AI-driven real-time discovery", detail: "Matches found while you're training." },
  { text: "Instant platform-direct access", detail: "Direct line to head recruitment scouts." },
  { text: "6-Dimension compatibility scoring", detail: "Mathematically verified suitability." },
  { text: "End-to-end digital pipeline", detail: "Track every lead from initial trial to contract." },
];

export function ComparisonSection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">The Logic</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.03em] text-foreground">
            Tradition vs.<br />
            <span className="gradient-neon-text">Transformation.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          {/* Decorative Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 md:block hidden" />

          {/* Traditional Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 sm:p-12 rounded-[40px] border border-red-500/10 bg-red-500/[0.02] hover:bg-red-500/[0.04] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="h-12 w-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-widest text-red-500/80">Traditional Way</h3>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Status Quo</p>
              </div>
            </div>

            <ul className="space-y-8">
              {traditional.map((item, idx) => (
                <li key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-red-500/40" />
                  <p className="text-base font-bold text-foreground/80 mb-1">{item.text}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Placely AI way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 sm:p-12 rounded-[40px] border border-primary/20 bg-primary/[0.02] hover:bg-primary/[0.04] transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-x-0 -top-px h-32 bg-gradient-to-b from-primary/10 to-transparent blur-3xl opacity-50" />
            
            <div className="relative flex items-center gap-4 mb-12">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-widest text-primary">Placely Intelligence</h3>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Neural Scouting</p>
              </div>
            </div>

            <ul className="relative space-y-8">
              {placely.map((item, idx) => (
                <li key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-sm bg-primary shadow-[0_0_8px_rgba(134,194,50,0.6)]" />
                  <p className="text-base font-black text-foreground mb-1">{item.text}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">{item.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
