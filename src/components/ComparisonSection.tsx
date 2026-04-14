import { motion } from "framer-motion";

const traditional = [
  "Manual, time-consuming scouting",
  "Slow email chains and phone tag",
  "No visibility into match quality",
  "Fragmented offline workflow",
];

const placely = [
  "AI matches in real-time",
  "Instant in-platform messaging",
  "Six-dimension compatibility score",
  "End-to-end digital pipeline",
];

export function ComparisonSection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">The Difference</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground">Old way vs. Placely</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden" style={{ background: "rgba(134,194,50,0.06)" }}>
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-background p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "rgba(255,80,80,0.1)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff5050" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground">Traditional</h3>
            </div>
            <ul className="space-y-5">
              {traditional.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "rgba(255,80,80,0.4)" }} />
                  <span className="text-sm text-muted-foreground leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Placely */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 sm:p-10"
            style={{ background: "linear-gradient(145deg, rgba(134,194,50,0.04), var(--background))" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "rgba(134,194,50,0.1)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#86C232" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-primary">Placely AI</h3>
            </div>
            <ul className="space-y-5">
              {placely.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-primary" />
                  <span className="text-sm text-foreground leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
