import { motion } from "framer-motion";
import { RevealText } from "@/components/RevealText";
import aboutHeroImg from "@/assets/ai_football_recruitment_abstract_hero_1776247571240.png";

const values = [
  {
    title: "Radical Transparency",
    desc: "We eliminate the 'black box' of recruitment. Athletes and schools see exactly why they match, powered by objective performance data and clear scoring.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" /><path d="M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    desc: "Talent is everywhere, but access is not. We use intelligent matching to bridge the gap between regional scouts and global opportunities.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Precision Analytics",
    desc: "Built by veteran pro-scouts and experts, our engine understands the nuanced athletic data that traditional methods often miss.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-background">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Narrative Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hover-reveal-zone"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary reveal-meta">Our Mission</span>
            </div>
            <RevealText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-foreground leading-[1.05] mb-6">
              Leveling the field with intelligent data.
            </RevealText>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed max-w-xl mt-4">
              <p className="reveal-paragraph">
                We believe that every talented athlete deserves access to the right opportunities—regardless of geography, connections, or existing resources.
              </p>
              <p className="reveal-paragraph" style={{ transitionDelay: "0.13s" }}>
                Traditional recruitment has been slow and inefficient, relying on analog networks and fragmented data. Placely replaces that friction with <span className="text-foreground">precision matching technology</span>.
              </p>
              <p className="reveal-paragraph" style={{ transitionDelay: "0.18s" }}>
                Founded by veteran pros and AI engineers, we use predictive models to eliminate recruitment bottlenecks and make discovery fast, fair, and data-driven.
              </p>
            </div>

            {/* Values Summary */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover-reveal-zone">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 block mb-2 reveal-meta">Our Goal</span>
                <p className="text-sm font-bold text-foreground reveal-paragraph">Connect 1M players to top-tier schools by 2030.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover-reveal-zone">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 block mb-2 reveal-meta">Global Presence</span>
                <p className="text-sm font-bold text-foreground reveal-paragraph">Verified recruitment in over 45 global regions.</p>
              </div>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] glass-card p-3 shadow-2xl group overflow-hidden border-white/5">
              <div className="relative rounded-[32px] overflow-hidden">
                <img
                  src={aboutHeroImg}
                  alt="AI Football Discovery"
                  className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-8 left-8 right-8 p-8 rounded-[32px] bg-background/40 backdrop-blur-xl border border-white/10">
                  <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed italic opacity-90">
                    "Placely isn't just a platform; it's an architecture overhaul in how talent is discovered for the next generation of football."
                  </p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-primary">— Engineering Core</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground tracking-tight">Rooted in Performance.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden hover-reveal-zone"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h4 className="text-base font-bold text-foreground mb-2 transition-colors group-hover:text-primary">
                  <RevealText>{v.title}</RevealText>
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed reveal-paragraph">{v.desc}</p>
                
                <div className="absolute bottom-6 right-8 text-[9px] font-bold text-primary/20 uppercase tracking-widest">Verified Value</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
