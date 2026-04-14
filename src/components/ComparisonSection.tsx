import { motion } from "framer-motion";

const traditional = [
  "Manual, time-consuming process",
  "Slow communication channels",
  "No data-driven insights",
  "Offline and fragmented",
];

const placely = [
  "Automated AI matching",
  "Instant real-time communication",
  "Deep AI-powered insights",
  "Full digital recruitment workflow",
];

export function ComparisonSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Comparison</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Why Placely?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">❌</span>
              <h3 className="text-lg font-bold text-foreground">Traditional Recruitment</h3>
            </div>
            <ul className="space-y-4">
              {traditional.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-destructive shrink-0"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-glow glass-card p-8 glow-green"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">✅</span>
              <h3 className="text-lg font-bold text-foreground">Placely <span className="text-primary">AI</span></h3>
            </div>
            <ul className="space-y-4">
              {placely.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-primary shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
