import { motion } from "framer-motion";

const features = [
  {
    title: "AI Profile Matching",
    desc: "Intelligent algorithms match student profiles to school requirements across six core dimensions in real-time.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>,
  },
  {
    title: "Smart Recommendations",
    desc: "Data-driven suggestions based on performance trends, geographic preferences, and compatibility scores.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  },
  {
    title: "Automated Outreach",
    desc: "AI drafts personalized emails and follow-ups that feel human — saving hours of manual communication.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    title: "Pipeline Tracking",
    desc: "Monitor every relationship from first contact to signed commitment with real-time status updates.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    title: "Events & Scouting",
    desc: "AI-curated trial dates, showcases, and scouting events matched to your profile and location.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: "24/7 AI Assistant",
    desc: "Instant guidance on profile optimization, match strategy, and recruitment best practices — anytime.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
];

export function AIFeaturesSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Accent */}
      <div className="absolute right-0 top-1/4 w-[1px] h-1/3" style={{ background: "linear-gradient(180deg, transparent, rgba(134,194,50,0.15), transparent)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">AI Engine</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground">
            Intelligence at every layer
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto leading-[1.7]">
            Six AI modules working together to transform how football recruitment works.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{ background: "rgba(134,194,50,0.06)" }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group p-7 sm:p-8 bg-background transition-all duration-500 hover:bg-surface cursor-default"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl text-primary mb-5 transition-all duration-300"
                style={{ background: "rgba(134,194,50,0.08)" }}>
                {f.icon}
              </div>
              <h3 className="text-[15px] font-bold text-foreground group-hover:text-primary transition-colors duration-300">{f.title}</h3>
              <p className="mt-2.5 text-[13px] text-muted-foreground leading-[1.7]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
