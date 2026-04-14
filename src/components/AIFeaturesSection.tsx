import { motion } from "framer-motion";

const features = [
  { title: "AI Profile Matching", desc: "Intelligent algorithms match student profiles to school requirements in real-time.", icon: "🎯" },
  { title: "AI Match Recommendations", desc: "Smart suggestions based on performance, location, and preferences.", icon: "💡" },
  { title: "AI Email Drafting", desc: "Automated, personalized communication between students and schools.", icon: "✉️" },
  { title: "AI Relationship Tracking", desc: "Monitor and nurture every connection in your recruitment pipeline.", icon: "📊" },
  { title: "AI Event & News", desc: "Stay updated with AI-curated events, trials, and football news.", icon: "📰" },
  { title: "24/7 AI Support", desc: "Instant assistance and guidance whenever you need it.", icon: "🤖" },
];

export function AIFeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Intelligence</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">AI-Powered Features</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Every aspect of the platform is enhanced by artificial intelligence.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-xl p-6 border-glow group cursor-default transition-all duration-300 hover:glow-green"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
