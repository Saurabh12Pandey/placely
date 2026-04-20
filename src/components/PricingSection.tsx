import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Student",
    prices: { monthly: "Free", yearly: "Free" },
    period: "forever",
    desc: "Launch your career and get discovered by top schools worldwide.",
    features: ["Athlete digital profile", "Browse school openings", "5 AI matches per month", "Community forum access"],
    cta: "Start Free",
    highlighted: false,
    color: "#6B6E70",
  },
  {
    name: "Pro Athlete",
    prices: { monthly: "$19", yearly: "$15" },
    period: "/month",
    desc: "Maximize your recruitment potential with advanced AI tools.",
    features: ["Unlimited AI matches", "Smart recommendations", "Email outreach automation", "Advanced analytics dashboard", "Priority support"],
    cta: "Go Pro",
    highlighted: true,
    color: "#86C232",
  },
  {
    name: "School",
    prices: { monthly: "$49", yearly: "$39" },
    period: "/month",
    desc: "Complete end-to-end management for professional recruitment teams.",
    features: ["Unlimited talent openings", "AI candidate screening", "Bulk outreach campaigns", "Team collaboration tools", "Dedicated success manager"],
    cta: "Contact Sales",
    highlighted: false,
    color: "#61892F",
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden bg-background">
      {/* Background depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle, #86C232 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Simple Pricing</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black tracking-[-0.03em] text-foreground leading-[1.0]"
          >
            Start free. Scale with<br />
            <span className="gradient-neon-text">your ambition.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto"
          >
            Transparent plans designed for every stage of your football journey. No hidden fees.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <span className={`text-xs font-bold tracking-widest transition-colors ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>MONTHLY</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-white/5 border border-white/10 p-1 transition-all"
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-primary shadow-[0_0_10px_rgba(134,194,50,0.5)]"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex flex-col items-start gap-1">
              <span className={`text-xs font-bold tracking-widest transition-colors ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>ANNUAL</span>
              <span className="text-[10px] font-black text-primary px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">SAVE 20%</span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-[32px] p-8 transition-all duration-500 hover:scale-[1.02] ${
                plan.highlighted ? "min-h-[580px] z-10" : "min-h-[540px]"
              }`}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(145deg, rgba(134,194,50,0.08) 0%, rgba(12,16,9,0.95) 100%)"
                  : "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(12,16,9,0.9) 100%)",
                border: plan.highlighted
                  ? "1.5px solid rgba(134,194,50,0.25)"
                  : "1.5px solid rgba(255,255,255,0.08)",
              }}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute -top-3 left-10 rounded-full px-4 py-1 text-[10px] uppercase font-black tracking-widest"
                    style={{ background: "linear-gradient(135deg, #86C232, #61892F)", color: "#222629" }}>
                    Most Popular
                  </div>
                  {/* Animated border glow */}
                  <div className="absolute inset-x-0 -bottom-px h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </>
              )}

              <div className="mb-10">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isYearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl font-black tracking-[-0.04em] text-foreground"
                    >
                      {isYearly ? plan.prices.yearly : plan.prices.monthly}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                    {plan.prices.monthly === "Free" ? "/forever" : isYearly ? "/mo (billed yearly)" : "/month"}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
              </div>

              <div className="h-px w-full bg-white/5 mb-8" />

              <ul className="space-y-4 mb-10">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary/10 border border-primary/20 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#86C232" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-medium text-foreground tracking-tight">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  variant={plan.highlighted ? "neon" : "neonOutline"}
                  size="xl"
                  className="w-full rounded-2xl text-[13px] font-black uppercase tracking-widest shadow-lg"
                >
                  {plan.cta}
                </Button>
                <p className="mt-4 text-center text-[10px] text-muted-foreground/60 font-bold uppercase tracking-widest">
                  No credit card required
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Looking for enterprise solutions? <a href="#" className="text-primary hover:underline font-bold">Contact our platform specialists</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
