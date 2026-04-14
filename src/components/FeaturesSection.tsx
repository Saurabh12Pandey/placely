import { motion } from "framer-motion";

const features = [
  {
    title: "Location Search",
    desc: "GPS-powered discovery finds opportunities and talent near you.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    title: "School Openings",
    desc: "Real-time roster slots from schools worldwide, filtered to your profile.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  },
  {
    title: "Full Recruitment",
    desc: "From first contact to signed commitment — every step managed digitally.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    title: "Email Automation",
    desc: "AI-crafted messages that sound authentic and drive 3x response rates.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    title: "Events & Trials",
    desc: "Curated calendar of showcases, trials, and scouting events near you.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: "Analytics",
    desc: "Track profile views, match scores, engagement, and recruitment velocity.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Platform</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground">
            Everything you need
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-[1.7]">
            A complete suite of tools for modern football recruitment — from discovery to commitment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl p-7 transition-all duration-500 cursor-default"
              style={{
                background: "linear-gradient(145deg, rgba(134,194,50,0.03), rgba(34,38,41,0.4))",
                border: "1px solid rgba(134,194,50,0.06)",
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-primary mb-5 transition-all duration-300"
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
