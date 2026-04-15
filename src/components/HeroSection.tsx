import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/FloatingParticles";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import patternTexture from "@/assets/pattern-texture.jpg";

function MiniStatPill({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 rounded-2xl px-5 py-3"
      style={{
        background: "linear-gradient(135deg, rgba(134,194,50,0.08), rgba(97,137,47,0.04))",
        border: "1px solid rgba(134,194,50,0.15)",
      }}
    >
      <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
      <div>
        <p className="text-xl font-black tracking-tight text-foreground">{value}</p>
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.55) saturate(0.9) contrast(1.15)" }}
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(34,38,41,0.85) 0%, rgba(34,38,41,0.6) 40%, rgba(34,38,41,0.95) 100%)"
        }} />
      </div>

      {/* Pattern texture overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.06]" style={{
        backgroundImage: `url(${patternTexture})`,
        backgroundSize: "cover",
        mixBlendMode: "screen",
      }} />

      {/* Floating particles */}
      <FloatingParticles count={25} />

      {/* Asymmetric glow orbs */}
      <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full z-[1]"
        style={{ background: "radial-gradient(circle, rgba(134,194,50,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full z-[1]"
        style={{ background: "radial-gradient(circle, rgba(97,137,47,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content — 7 cols */}
          <div className="lg:col-span-7">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
              style={{
                background: "rgba(134,194,50,0.08)",
                border: "1px solid rgba(134,194,50,0.2)",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                Platform Live · 2,847 Online
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,5.5vw,5rem)] font-black leading-[0.95] tracking-[-0.03em]"
            >
              <span className="text-foreground">The Future of</span>
              <br />
              <span className="text-foreground">Football </span>
              <span className="gradient-neon-text">Recruitment</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-lg text-[15px] leading-[1.7] text-muted-foreground"
            >
              AI-powered platform connecting student athletes with schools through
              intelligent matching. No more cold emails. No more missed opportunities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button variant="neon" size="xl" className="rounded-xl">
                Start Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Button>
              <Button variant="neonOutline" size="xl" className="rounded-xl">
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background"
                    style={{ background: `linear-gradient(135deg, hsl(${90 + i * 20}, 60%, ${35 + i * 8}%), hsl(${90 + i * 20}, 40%, ${25 + i * 5}%))` }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">12,500+</span> athletes already on the platform
              </p>
            </motion.div>
          </div>

          {/* Right stats column — 5 cols */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 items-end">
            <MiniStatPill label="Players Online" value="2,847" delay={0.6} />
            <MiniStatPill label="Schools Active" value="342" delay={0.75} />
            <MiniStatPill label="Matches Today" value="156" delay={0.9} />
            <MiniStatPill label="Success Rate" value="94.2%" delay={1.05} />
          </div>
        </div>
      </div>

      {/* Bottom edge gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10" style={{
        background: "linear-gradient(to top, var(--background) 0%, transparent 100%)"
      }} />
    </section>
  );
}
