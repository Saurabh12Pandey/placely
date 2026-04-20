import { motion } from "framer-motion";

// --- Sub-components for Visuals ---

const RadarChart = () => {
  const points = [
    { label: "Academics", value: 85 },
    { label: "Athletics", value: 95 },
    { label: "Admissions", value: 70 },
    { label: "Cost", value: 60 },
    { label: "Social", value: 80 },
  ];

  const getPointPosition = (index: number, total: number, value: number, radius: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const x = radius + (radius * value / 100) * Math.cos(angle);
    const y = radius + (radius * value / 100) * Math.sin(angle);
    return `${x},${y}`;
  };

  const polyPoints = points.map((p, i) => getPointPosition(i, points.length, p.value, 100)).join(" ");

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto group">
      {/* Achievement Badge Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="absolute -top-4 -right-4 z-20 h-16 w-16 bg-card/80 backdrop-blur-xl rounded-full flex items-center justify-center border-primary/20 shadow-lg rotate-12"
      >
        <div className="text-[10px] font-black text-primary uppercase text-center leading-tight">Elite<br />Match</div>
      </motion.div>

      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        {/* Grids */}
        {[20, 40, 60, 80, 100].map((r) => (
          <polygon
            key={r}
            points={points.map((p, i) => getPointPosition(i, points.length, r, 100)).join(" ")}
            className="fill-none stroke-white/5"
            strokeWidth="0.5"
          />
        ))}
        {/* Axis */}
        {points.map((p, i) => {
          const end = getPointPosition(i, points.length, 100, 100);
          return <line key={i} x1="100" y1="100" x2={end.split(",")[0]} y2={end.split(",")[1]} className="stroke-white/5" strokeWidth="0.5" />;
        })}
        {/* Value Area */}
        <motion.polygon
          points={polyPoints}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fill-primary/10 stroke-primary group-hover:fill-primary/20 transition-colors"
          strokeWidth="1.5"
        />
        {/* Labels */}
        {points.map((p, i) => {
          const pos = getPointPosition(i, points.length, 125, 100);
          const [x, y] = pos.split(",");
          return (
            <text
              key={i}
              x={x}
              y={y}
              className="fill-muted-foreground/40 text-[9px] font-bold uppercase tracking-wider"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {p.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const NeuralGraph = () => (
  <div className="relative w-full h-64 sm:h-80 flex items-center justify-center overflow-hidden rounded-[32px] bg-white/[0.02] border border-white/5 group">
    {/* Subtle Grid Background */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
      backgroundSize: "20px 20px"
    }} />

    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" className="z-10 text-primary/60">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <motion.circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
      {[...Array(6)].map((_, i) => (
        <motion.line
          key={i}
          x1="12" y1="12"
          x2={12 + 10 * Math.cos(Math.PI * i / 3)}
          y2={12 + 10 * Math.sin(Math.PI * i / 3)}
          stroke="currentColor" strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </svg>
    <div className="absolute bottom-8 left-8 right-8">
      <div className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2">Analyzing Data</div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "85%" }}
          className="h-full bg-primary/40"
        />
      </div>
    </div>
  </div>
);

const MessagingUI = () => (
  <div className="w-full max-w-sm rounded-[32px] border border-white/5 bg-white/[0.03] p-8 glass-card shadow-2xl relative overflow-hidden group">
    <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">H</div>
      <div>
        <div className="text-sm font-bold text-foreground tracking-tight">Coach Henderson</div>
        <div className="text-[10px] text-primary/60 flex items-center gap-2 font-bold uppercase tracking-wider mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Live Analysis
        </div>
      </div>
    </div>
    <div className="space-y-4">
      <div className="max-w-[85%] p-4 rounded-2xl rounded-tl-none bg-white/[0.04] text-[13px] leading-relaxed text-muted-foreground">
        Matching result: 94%. High affinity for athletic performance data.
      </div>
      <div className="max-w-[85%] ml-auto p-4 rounded-2xl rounded-br-none bg-primary/10 text-[13px] leading-relaxed text-foreground font-medium border border-primary/10">
        Confirmed. Drafting recruitment pitch...
      </div>
    </div>
  </div>
);

// --- Content Data ---

const showcases = [
  {
    title: "AI Profile Matching",
    desc: "Intelligent algorithms match student profiles to school requirements across six core dimensions in real-time.",
    visual: <MessagingUI />,
    reversed: false,
    label: "Step 01"
  },
  {
    title: "Smart Recommendations",
    desc: "Data-driven suggestions based on performance trends, geographic preferences, and compatibility scores.",
    visual: <NeuralGraph />,
    reversed: true,
    label: "Step 02"
  },
  {
    title: "Impact Analysis",
    desc: "Multi-parameter evaluation covering Academics, Roster Needs, and Intensity Trial probability for confirmed fit.",
    visual: <RadarChart />,
    reversed: false,
    label: "Step 03"
  },
];

const secondaryFeatures = [
  {
    title: "AI Email Drafting",
    desc: "Neural-generated outreach templates optimized for institutional response rates.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    title: "Pipeline Tracking",
    desc: "Monitor every relationship from first contact to signed commitment with real-time status updates.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>,
  },
  {
    title: "Discovery Sonar",
    desc: "GPS-powered discovery finds opportunities and talent based on localized roster needs.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
  },
  {
    title: "School Openings",
    desc: "Real-time roster slots from schools worldwide, filtered specifically to your athlete profile.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>,
  },
  {
    title: "Events & Trials",
    desc: "Curated calendar of showcases, trials, and scouting events matched to your profile and location.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  },
  {
    title: "Real-time Analytics",
    desc: "Track profile views, match scores, institutional engagement, and recruitment velocity.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Core Platform</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black tracking-[-0.03em] text-foreground leading-[1.0]"
          >
            Everything you need for<br />
            <span className="gradient-neon-text">elite recruitment.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto"
          >
            From profile discovery to signed contracts — powered by intelligent matching at every step.
          </motion.p>
        </div>

        {/* Flagship Showcases */}
        <div className="space-y-40">
          {showcases.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${s.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
            >
              <div className="flex-1 text-center lg:text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-4 block">{s.label}</span>
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-6">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                  <div className="h-[2px] w-12 bg-primary/30 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Active module</span>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center items-center">
                {s.visual}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Utility Grid */}
        <div className="mt-48">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-foreground tracking-tight">Powerful Subsystems.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFeatures.map((f, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform duration-500 group-hover:scale-110">
                  {f.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{f.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                
                {/* Visual accent */}
                <div className="absolute -bottom-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
