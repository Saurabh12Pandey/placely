import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RevealText } from "@/components/RevealText";

const tacticalSteps = [
  {
    id: "INIT_01",
    title: "VECTOR_CONFIG",
    label: "Build Your Profile",
    desc: "Synthesis of athletic performance metrics, academic records, and high-fidelity video highlights.",
    coords: "40.7128° N, 74.0060° W"
  },
  {
    id: "LIST_02",
    title: "INSTITUTION_SYNC",
    label: "Schools Post Openings",
    desc: "Real-time synchronization of institutional requirements, position needs, and scholarship allocations.",
    coords: "34.0522° N, 118.2437° W"
  },
  {
    id: "CORE_03",
    title: "AI_SYNERGY_ENGINE",
    label: "AI Matches Talent",
    desc: "Multi-parameter algorithmic matching to optimize for long-term athletic and academic success.",
    coords: "41.8781° N, 87.6298° W"
  },
  {
    id: "SYNC_04",
    title: "RECRUIT_PROTOCOL",
    label: "Recruitment Starts",
    desc: "Established direct communication protocols and automated scheduling for evaluation trials.",
    coords: "29.7604° N, 95.3698° W"
  },
  {
    id: "EXEC_05",
    title: "COMMIT_FINAL",
    label: "Sign & Succeed",
    desc: "Closing the recruitment loop with integrated contract management and institutional onboarding.",
    coords: "25.7617° N, 80.1918° W"
  }
];

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-32 overflow-hidden bg-background">
      {/* Tactical Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-0 technical-grid opacity-10" />
      
      {/* Background HUD elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full border border-primary/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 hover-reveal-zone">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary reveal-meta">Tactical Roadmap</span>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <RevealText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-foreground leading-[1.05]">
                The Pathway to Elite Commitment.
              </RevealText>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm leading-relaxed max-w-sm reveal-paragraph"
            >
              A high-precision recruitment workflow designed to eliminate inefficiency and maximize athlete potential.
            </motion.p>
          </div>
        </div>

        {/* Tactical Playbook Flow */}
        <div className="relative">
          {/* Vertical Path Line */}
          <div className="absolute left-[21px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent lg:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-10 lg:space-y-0">
            {tacticalSteps.map((step, i) => (
              <div key={step.id} className={`relative flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-0`}>
                
                {/* Visual Connector Node */}
                <div className="absolute left-0 lg:left-1/2 top-0 lg:-translate-x-1/2 flex items-center justify-center z-10">
                  <motion.div
                    className="h-11 w-11 rounded-xl bg-background border-2 border-primary/40 flex items-center justify-center shadow-[0_0_20px_rgba(134,194,50,0.15)] group"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: i * 0.15, type: "spring" }}
                  >
                    <span className="text-[10px] font-black text-primary group-hover:scale-110 transition-transform">{step.id.split('_')[1]}</span>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className={`w-full lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-24' : 'lg:pl-24'} pl-16 sm:pl-20 lg:pl-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover-reveal-zone"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[9px] text-mono text-primary/60 font-black tracking-widest reveal-meta">{step.title}</span>
                      <span className="text-[8px] text-mono text-muted-foreground/30 reveal-meta" style={{ transitionDelay: "0.22s" }}>{step.coords}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                      <RevealText>{step.label}</RevealText>
                    </h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed opacity-70 reveal-paragraph">{step.desc}</p>
                    
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                      <div className="flex -space-x-1">
                        {[1, 2, 3].map(j => (
                          <div key={j} className="h-4 w-4 rounded-full border border-background bg-primary/20" />
                        ))}
                      </div>
                      <span className="text-[8px] text-mono text-muted-foreground/40 font-bold uppercase tracking-widest">Active Process Nodes</span>
                    </div>
                  </motion.div>
                </div>

                {/* Empty Side for Spacing on LG */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Technical Line at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}

