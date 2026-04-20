import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { RevealText } from "@/components/RevealText";

/* ─── Feature Data — Rich & Specific ─────────────────────────────── */
const features = [
  {
    id: "matching",
    category: "Core Platform",
    title: "Intelligent Profile Matching",
    subtitle: "The engine that replaces guesswork with precision.",
    description:
      "Placely's matching engine scores every athlete-school pairing across six weighted dimensions in real time. Unlike basic keyword filters, it weighs position need, skill rating, GPA requirements, geographic preference, budget alignment, and culture fit—then surfaces only the candidates worth reviewing.",
    proof: "Coaches save an average of 14 hours per week previously spent on manual screening.",
    metric: { value: "98.4%", label: "Match accuracy rate", context: "across 12,500 placements" },
    capabilities: [
      { name: "Six-Vector Scoring", desc: "Position, skill, academics, location, budget, and culture fit scored simultaneously." },
      { name: "Live Recalculation", desc: "Scores update in real time as athlete profiles and school requirements change." },
      { name: "Bias-Free Algorithm", desc: "Decisions driven purely by data. No favoritism, no network effects." },
      { name: "Fit Probability Score", desc: "Every match comes with a transparent percentage explaining exactly why it ranked." },
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    id: "scouting",
    category: "Discovery",
    title: "Global Talent Discovery",
    subtitle: "See athletes your competitors haven't found yet.",
    description:
      "Our discovery layer continuously indexes verified athlete profiles across 45+ regions. Coaches can filter by physical metrics, academic standing, position-specific performance data, and availability windows — then bookmark prospects directly into their pipeline with one click.",
    proof: "Schools using Placely discovery identify 3.2× more qualified candidates than through traditional networks.",
    metric: { value: "12,500+", label: "Verified athlete profiles", context: "growing by 400+ per week" },
    capabilities: [
      { name: "Position-Specific Metrics", desc: "Speed, agility, technical rating, and position-specific KPIs pulled from verified data." },
      { name: "Academic Filtering", desc: "Filter by GPA range, graduation year, academic major — no more unqualified outreach." },
      { name: "Availability Windows", desc: "Know exactly when an athlete is open to transfer or freshman enrollment." },
      { name: "Saved Search Alerts", desc: "Get notified the moment a new athlete matching your criteria joins the platform." },
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: "outreach",
    category: "Communication",
    title: "Smart Outreach & Messaging",
    subtitle: "Personalized at scale, without sounding like a template.",
    description:
      "Placely drafts and sends context-aware introductory emails based on the athlete's profile, the school's program details, and the match reasoning. Every message references something specific — not a generic form letter. Follow-up sequences are automated based on response signals.",
    proof: "Placely-generated outreach achieves an 85% open rate vs. the 22% industry average for cold recruitment emails.",
    metric: { value: "85%", label: "Average email open rate", context: "vs. 22% industry average" },
    capabilities: [
      { name: "Context-Aware Drafts", desc: "Every message references the athlete's specific stats, position, and the school's program needs." },
      { name: "Automated Follow-Ups", desc: "Smart sequences triggered by open/click behavior — no manual chasing required." },
      { name: "Unified Inbox", desc: "All your athlete conversations in one place, threaded by profile." },
      { name: "Response Analytics", desc: "Track open rates, reply rates, and conversion per campaign segment." },
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: "pipeline",
    category: "Recruitment CRM",
    title: "End-to-End Pipeline Tracking",
    subtitle: "Full visibility from first contact to signed commitment.",
    description:
      "Track every prospect across every stage of your funnel — discovery, outreach, evaluation, trial, offer, and commitment — from a single dashboard. Coaches get smart nudges when a prospect goes cold, and athletes can track their status in real time to reduce anxiety and ghost-rate.",
    proof: "Programs using Placely CRM reduce average time-to-commitment by 41% compared to spreadsheet-based tracking.",
    metric: { value: "41%", label: "Faster time-to-commitment", context: "vs. traditional tracking methods" },
    capabilities: [
      { name: "6-Stage Funnel View", desc: "Every recruit tracked across Discovery → Outreach → Evaluation → Trial → Offer → Signed." },
      { name: "Smart Re-engagement Nudges", desc: "Automatic alerts when a prospect hasn't been contacted in 7+ days." },
      { name: "Athlete Status Portal", desc: "Athletes can see exactly where they stand in a school's process, reducing ghost rate by 60%." },
      { name: "Team Collaboration", desc: "Assign prospects to coaching staff, leave notes, set follow-up dates — built for teams." },
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "events",
    category: "Events & Scouting",
    title: "Showcase & Trial Management",
    subtitle: "Never miss a live scouting opportunity again.",
    description:
      "Placely aggregates over 340 football showcases, regional trials, and scouting combines per month and intelligently matches athletes to events that fit their profile, geography, and program targets. Schools can list private trials and receive pre-ranked applicant pools.",
    proof: "Athletes who attend Placely-recommended events are 2.4× more likely to receive a formal offer within 90 days.",
    metric: { value: "340+", label: "Events indexed monthly", context: "across 45 global regions" },
    capabilities: [
      { name: "Profile-Matched Events", desc: "Only see events where your position, skill level, and program targets align." },
      { name: "Private Trial Listings", desc: "Schools list invitation-only trials and issue targeted invitations through Placely." },
      { name: "Coach Attendance Data", desc: "Know which scouts and coaches will be present before you commit to attending." },
      { name: "Post-Event Analytics", desc: "Performance notes and scouting observations attach directly to your profile." },
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "analytics",
    category: "Insights",
    title: "Recruitment Intelligence Reports",
    subtitle: "Understand your market, not just your shortlist.",
    description:
      "Placely generates weekly intelligence reports for both athletes and schools — showing where demand is highest, which positions are most competitive, trending school programs, and where commitment rates are rising. Make strategic decisions with data, not instinct.",
    proof: "Schools using Placely intelligence reduced misdirected outreach (contacting unqualified candidates) by 73%.",
    metric: { value: "73%", label: "Reduction in misdirected outreach", context: "for program directors using reports" },
    capabilities: [
      { name: "Market Demand Map", desc: "See which positions are most sought-after at schools that match your athlete profile." },
      { name: "Competitive Positioning", desc: "Understand how an athlete ranks vs. the current applicant pool for a target school." },
      { name: "Trend Forecasting", desc: "Predict which programs will have vacancies based on graduation class data." },
      { name: "Weekly Intelligence Brief", desc: "Automated digest delivered every Monday with actionable recruiting insights." },
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 20 22 16 18 12" /><line x1="2" y1="16" x2="22" y2="16" /><polyline points="6 4 2 8 6 12" /><line x1="2" y1="8" x2="22" y2="8" />
      </svg>
    ),
  },
];

export function AIFeaturesSection() {
  const [activeId, setActiveId] = useState(features[0].id);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const active = features.find((f) => f.id === activeId)!;
  const activeIdx = features.findIndex((f) => f.id === activeId);

  return (
    <section id="features" ref={ref} className="relative py-24 overflow-hidden bg-background">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(134,194,50,0.15), transparent)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(134,194,50,0.08), transparent)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 hover-reveal-zone"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/15 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Platform Features</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <RevealText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-foreground leading-[1.05]">
                Everything recruitment needs to work.
              </RevealText>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm lg:text-right reveal-paragraph">
              Six integrated modules covering the complete athlete-to-school recruitment lifecycle — from first discovery to signed commitment.
            </p>
          </div>
        </motion.div>

        {/* Feature Nav Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12 border-b border-white/5 pb-0"
        >
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActiveId(f.id)}
              className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-t-lg focus:outline-none ${
                activeId === f.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/70"
              }`}
            >
              <span className={`transition-colors duration-200 ${activeId === f.id ? "text-primary" : "text-muted-foreground/40"}`}>
                {f.icon}
              </span>
              <span className="whitespace-nowrap">{f.title.split(" ").slice(0, 2).join(" ")}</span>
              {activeId === f.id && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Active Feature Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-10 lg:gap-16"
          >
            {/* Left: Content */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/15">
                  {active.icon}
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60">{active.category}</div>
                  <div className="text-xs text-muted-foreground/50">{active.subtitle}</div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-[-0.02em] leading-tight mb-4">
                {active.title}
              </h3>

              <p className="text-[15px] text-muted-foreground leading-[1.75] mb-6">
                {active.description}
              </p>

              {/* Proof Statement */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-primary/10 bg-primary/[0.03] mb-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary mt-0.5 shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-sm text-muted-foreground leading-snug">
                  <span className="text-foreground font-semibold">Real-world impact: </span>
                  {active.proof}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-0 divide-y divide-white/[0.04] hover-reveal-zone">
                {active.capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-4 py-4"
                  >
                    <div className="mt-1 h-5 w-5 rounded-md bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-foreground mb-0.5">
                        <RevealText>{cap.name}</RevealText>
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed reveal-paragraph">{cap.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Metric + Visual Card */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              {/* Key Metric Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-primary/15 bg-primary/[0.03] p-8"
              >
                <div className="absolute top-0 right-0 w-48 h-48 opacity-5 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="80" cy="20" r="60" stroke="#86C232" strokeWidth="0.5" fill="none" />
                    <circle cx="80" cy="20" r="40" stroke="#86C232" strokeWidth="0.3" fill="none" strokeDasharray="3 6" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50 mb-3">Key Metric</div>
                  <div className="text-4xl font-black text-foreground tracking-[-0.03em] tabular-nums mb-2">
                    {active.metric.value}
                  </div>
                  <div className="text-sm font-medium text-foreground/70 mb-1">{active.metric.label}</div>
                  <div className="text-xs text-muted-foreground/50">{active.metric.context}</div>
                </div>
              </motion.div>

              {/* Feature Navigation: Prev/Next */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { dir: "prev", idx: (activeIdx - 1 + features.length) % features.length },
                  { dir: "next", idx: (activeIdx + 1) % features.length },
                ].map(({ dir, idx }) => {
                  const f = features[idx];
                  return (
                    <button
                      key={dir}
                      onClick={() => setActiveId(f.id)}
                      className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/10 transition-all duration-300 text-left"
                    >
                      <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/40 mb-2">
                        {dir === "prev" ? "← Previous" : "Next →"}
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors line-clamp-1">
                        {f.title}
                      </div>
                      <div className="text-[10px] text-muted-foreground/40 mt-0.5">{f.category}</div>
                    </button>
                  );
                })}
              </div>

              {/* All Features Summary Grid */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/40 mb-4">All Features</div>
                <div className="space-y-1">
                  {features.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setActiveId(f.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                        activeId === f.id
                          ? "bg-primary/[0.08] text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`transition-colors ${activeId === f.id ? "text-primary" : "text-muted-foreground/30"}`}>
                          {f.icon}
                        </span>
                        <span className="text-xs font-medium">{f.title}</span>
                      </div>
                      <span className="text-[9px] font-medium text-muted-foreground/30">{f.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
