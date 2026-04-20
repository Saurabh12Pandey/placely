import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { WaitlistForm } from "@/components/WaitlistForm";
// Removed unused heroVideo import
import patternTexture from "@/assets/pattern-texture.jpg";

function MiniStatPill({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 rounded-xl px-5 py-3.5 w-52"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
      <div>
        <p className="text-lg font-black tracking-tight text-white leading-none">
          <AnimatedNumber value={value} />
        </p>
        <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-white/40 font-semibold whitespace-nowrap">{label}</p>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background — GPU-accelerated, no software filters */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ willChange: "transform", contain: "strict" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-bg-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            /* GPU compositing — avoids software decode path */
            transform: "translateZ(0)",
            willChange: "transform",
            /* No CSS filter here — overlay handles darkening */
          }}
        >
          {/* WebM first (smaller, better compression) then mp4 fallback */}
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Darkening overlay — much cheaper than CSS filter on video */}
        <div
          className="absolute inset-0 bg-background/85"
        />

        {/* Gradient vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--background) 0%, transparent 20%, transparent 75%, var(--background) 100%)",
          }}
        />
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
        style={{ background: "radial-gradient(circle, oklch(0.74 0.18 128 / 0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full z-[1]"
        style={{ background: "radial-gradient(circle, oklch(0.53 0.12 128 / 0.05) 0%, transparent 70%)" }} />

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
                background: "oklch(0.74 0.18 128 / 0.08)",
                border: "1px solid oklch(0.74 0.18 128 / 0.2)",
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col mb-7"
            >
              <h1 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-foreground">
                The Future of<br />
                Football <span className="gradient-neon-text">Recruitment</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-base sm:text-lg leading-[1.7] text-muted-foreground mb-10"
            >
              AI-powered platform connecting student athletes with schools through
              intelligent matching. No more cold emails. No more missed opportunities.
            </motion.p>

            <WaitlistForm />

            {/* CTAs */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button variant="neon" size="xl" className="rounded-xl">
                Start Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Button>
              <Button variant="neonOutline" size="xl" className="rounded-xl">
                Watch Demo
              </Button>
            </motion.div> */}

            {/* Trust line */}
            {/* <motion.div
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
            </motion.div> */}
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

      {/* Elite HUD Overlay Layer */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden opacity-40">
        {/* Corner Brackets */}
        <div className="absolute top-12 left-12 w-32 h-32 border-t-2 border-l-2 border-primary/30" />
        <div className="absolute top-12 right-12 w-32 h-32 border-t-2 border-r-2 border-primary/30" />
        <div className="absolute bottom-12 left-12 w-32 h-32 border-b-2 border-l-2 border-primary/30" />
        <div className="absolute bottom-12 right-12 w-32 h-32 border-b-2 border-r-2 border-primary/30" />

        {/* Technical Data Streams */}
        <div className="absolute top-1/4 right-8 flex flex-col gap-1 items-end text-[9px] text-mono text-primary/40 leading-none">
          {["TRACKING_ATHLETE_VECTORS", "AI_CORE_ACTIVE", "LAT: 51.5074 N", "LON: 0.1278 W", "SCAN_FREQ: 120HZ"].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 1 }}
            >
              {text}
            </motion.div>
          ))}
        </div>

        {/* Floating Scan Marker */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-40 h-40 border border-primary/20 rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1], 
            translateY: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-[8px] text-mono text-primary/60 mt-2">OBJ_DETECTION.01</div>
        </motion.div>

        {/* Horizontal Scan Line */}
        <motion.div 
          className="absolute left-0 w-full h-[1px] bg-primary/20"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

    </section>
  );
}
