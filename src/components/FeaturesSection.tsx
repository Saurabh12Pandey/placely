import { motion } from "framer-motion";

const features = [
  { title: "Location-Based Search", desc: "Find opportunities near you with GPS-powered discovery.", icon: "📍" },
  { title: "School Openings", desc: "Browse real-time openings from schools worldwide.", icon: "🏫" },
  { title: "End-to-End Recruitment", desc: "Complete recruitment lifecycle in one platform.", icon: "🔄" },
  { title: "AI Email Automation", desc: "Automated outreach that sounds personal.", icon: "📧" },
  { title: "Events & News", desc: "Never miss a trial, showcase, or deadline.", icon: "🗓️" },
  { title: "Analytics Dashboard", desc: "Track your profile views, matches, and progress.", icon: "📈" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Platform</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Everything You Need</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">A complete toolkit for modern football recruitment.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl bg-surface p-6 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:glow-green cursor-default"
            >
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
