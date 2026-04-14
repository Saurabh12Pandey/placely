import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Student",
    price: "Free",
    period: "forever",
    desc: "Get discovered by schools worldwide",
    features: ["Athlete profile", "Browse openings", "5 AI matches/mo", "Community support"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro Athlete",
    price: "$19",
    period: "/month",
    desc: "Maximize your recruitment potential",
    features: ["Unlimited AI matches", "Smart recommendations", "Email automation", "Analytics dashboard", "Priority support"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "School",
    price: "$49",
    period: "/month",
    desc: "Complete recruitment management",
    features: ["Unlimited openings", "AI candidate screening", "Bulk outreach tools", "Advanced analytics", "Dedicated manager"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Plans</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground">
            Start free. Scale when ready.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto leading-[1.7]">
            No credit card required. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-7 sm:p-8 transition-all duration-500 ${
                plan.highlighted ? "md:-translate-y-3" : ""
              }`}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(145deg, rgba(134,194,50,0.08), rgba(34,38,41,0.6))"
                  : "linear-gradient(145deg, rgba(71,75,79,0.08), rgba(34,38,41,0.4))",
                border: plan.highlighted
                  ? "1px solid rgba(134,194,50,0.2)"
                  : "1px solid rgba(71,75,79,0.15)",
              }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                  style={{ background: "linear-gradient(135deg, #86C232, #61892F)", color: "#222629" }}>
                  Popular
                </div>
              )}

              <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground">{plan.name}</h3>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-black tracking-[-0.02em] text-foreground">{plan.price}</span>
                <span className="text-xs text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-2 text-[13px] text-muted-foreground">{plan.desc}</p>

              <div className="mt-6 h-px" style={{ background: "rgba(107,110,112,0.12)" }} />

              <ul className="mt-6 space-y-3.5">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-[13px] text-foreground">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full shrink-0"
                      style={{ background: "rgba(134,194,50,0.12)" }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#86C232" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "neon" : "neonOutline"}
                size="lg"
                className="mt-8 w-full rounded-xl"
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
