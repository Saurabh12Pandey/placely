import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Build Your Profile",
    desc: "Students create a detailed athlete profile — skills, stats, highlight reels, and academic records.",
    color: "#86C232",
  },
  {
    num: "02",
    title: "Schools Post Openings",
    desc: "Schools list available slots with specific requirements — positions needed, skill levels, academic criteria.",
    color: "#61892F",
  },
  {
    num: "03",
    title: "AI Matches Talent",
    desc: "Our engine analyzes hundreds of data points across six dimensions to find the perfect student-school fit.",
    color: "#86C232",
  },
  {
    num: "04",
    title: "Recruitment Starts",
    desc: "Mutual matches unlock direct communication, trial scheduling, and the complete recruitment workflow.",
    color: "#61892F",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-28">
      {/* Subtle side accent */}
      <div className="absolute left-0 top-1/3 w-[1px] h-1/3" style={{ background: "linear-gradient(180deg, transparent, rgba(134,194,50,0.2), transparent)" }} />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left header — sticky */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">How It Works</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground leading-[1.1]">
                Four steps to your{" "}
                <span className="gradient-neon-text">perfect match</span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground leading-[1.8]">
                From profile creation to signed contract — powered by AI at every step.
              </p>
              <div className="mt-8 h-[2px] w-16 rounded-full" style={{ background: "linear-gradient(90deg, #86C232, transparent)" }} />
            </motion.div>
          </div>

          {/* Right steps */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex gap-6 rounded-2xl p-6 sm:p-8 transition-all duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(134,194,50,0.03), rgba(34,38,41,0.4))",
                    border: "1px solid rgba(134,194,50,0.06)",
                  }}
                >
                  {/* Step number */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-black text-sm text-primary"
                    style={{ background: `rgba(134,194,50,0.08)` }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">{step.desc}</p>
                  </div>
                  {/* Hover accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: step.color }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
