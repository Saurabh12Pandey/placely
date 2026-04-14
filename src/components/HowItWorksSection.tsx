import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Students build a detailed football profile with skills, stats, and highlight videos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Schools Post Openings",
    desc: "Schools list available slots with specific requirements—positions, skills, and academic needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h18" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Matches Talent",
    desc: "Our AI engine analyzes hundreds of data points to find the perfect student-school fit.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Recruitment Begins",
    desc: "Mutual matches unlock direct communication, trials, and the full recruitment workflow.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Process</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">From profile creation to recruitment — powered by AI every step of the way.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="grid gap-12 md:gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <span className="text-xs font-bold text-primary tracking-wider">{step.num}</span>
                  <h3 className="mt-1 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-sm">{step.desc}</p>
                </div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass-card border-glow text-primary shrink-0 animate-pulse-glow">
                  {step.icon}
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
