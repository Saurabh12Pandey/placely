import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for students getting started",
    features: ["Basic profile", "Browse schools", "5 matches/month", "Community support"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "Advanced AI for serious players",
    features: ["Unlimited matches", "AI recommendations", "Email automation", "Analytics dashboard", "Priority support"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "School",
    price: "$49",
    period: "/month",
    desc: "Complete toolkit for schools",
    features: ["Unlimited openings", "AI candidate screening", "Bulk communication", "Advanced analytics", "Dedicated account manager"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Simple, Transparent Plans</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Start free. Upgrade when you're ready.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "glass-card border-glow glow-green scale-[1.02]"
                  : "bg-surface border border-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-neon px-4 py-1 text-xs font-bold text-neon-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? "neon" : "neonOutline"}
                size="lg"
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
