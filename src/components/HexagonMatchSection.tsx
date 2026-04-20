import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealText } from "@/components/RevealText";

const dimensions = [
  { 
    label: "Skills", 
    value: 95, 
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> 
  },
  { 
    label: "Location", 
    value: 88, 
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> 
  },
  { 
    label: "Performance", 
    value: 92, 
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> 
  },
  { 
    label: "Experience", 
    value: 75, 
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> 
  },
  { 
    label: "Availability", 
    value: 90, 
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 
  },
  { 
    label: "Academics", 
    value: 85, 
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> 
  },
];

function getHexPoints(values: number[], cx: number, cy: number, maxR: number) {
  return values.map((v, i) => {
    const angle = (Math.PI * 2 * i) / values.length - Math.PI / 2;
    const r = (v / 100) * maxR;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

function getFullHexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

function AnimatedCounter({ value, color }: { value: number; color: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    const duration = 500;
    const start = displayValue;
    const end = value;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setDisplayValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className="font-black tabular-nums transition-colors duration-500" style={{ color }}>
      {displayValue}%
    </span>
  );
}

export function HexagonMatchSection() {
  const [matchLevel, setMatchLevel] = useState(100);
  const [hoveredDimension, setHoveredDimension] = useState<string | null>(null);
  const cx = 180, cy = 180, maxR = 140;

  const adjusted = dimensions.map(d => ({
    ...d,
    value: Math.max(15, d.value * (matchLevel / 100)),
  }));

  const getStatus = (level: number) => {
    if (level >= 95) return { label: "ELITE MATCH", color: "#86C232", filter: "drop-shadow(0 0 15px rgba(134,194,50,0.6))" };
    if (level >= 80) return { label: "STRONG FIT", color: "#86C232", filter: "drop-shadow(0 0 10px rgba(134,194,50,0.4))" };
    if (level >= 60) return { label: "GOOD MATCH", color: "#61892F", filter: "none" };
    return { label: "PARTIAL MATCH", color: "#6B6E70", filter: "none" };
  };

  const status = getStatus(matchLevel);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl opacity-10"
          style={{ 
            background: "radial-gradient(circle, rgba(134,194,50,0.2) 0%, transparent 70%)" 
          }} 
        />
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(#86C232 0.5px, transparent 0.5px)", 
            backgroundSize: "24px 24px" 
          }} 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content — HUD Control Dashboard */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hover-reveal-zone"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Placely Analytics Engine</span>
              </div>
              
              <RevealText as="h2" className="text-3xl sm:text-4xl font-black tracking-[-0.03em] text-foreground leading-[1.05] mb-5">
                Redefining the Precision of Match
              </RevealText>
              
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-10 max-w-md reveal-paragraph">
                Our dynamic hexagon system evaluates six core vectors simultaneously to ensure cultural, academic, and athletic synergy.
              </p>

              {/* Tactical Audit Log (New Technical Layer) */}
              <div className="mb-10 rounded-2xl border border-primary/10 bg-primary/[0.02] p-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-black tracking-widest text-primary/60 uppercase">System_State: ACTIVE</span>
                  <span className="text-[9px] text-mono text-primary/40">AUDIT_LOG_v2.0</span>
                </div>
                <div className="flex flex-col gap-1.5 h-20 overflow-hidden text-[10px] text-mono text-muted-foreground/60 leading-none">
                  <div className="flex justify-between items-center whitespace-nowrap">
                    <span>{'>'} INITIALIZING_VECTORS...</span>
                    <span className="text-primary/40 text-[8px]">DONE</span>
                  </div>
                  <div className="flex justify-between items-center whitespace-nowrap">
                    <span>{'>'} CALCULATING_SYNERGY_COEFFICIENT...</span>
                    <span className="text-primary/40 text-[8px] animate-pulse">RUNNING</span>
                  </div>
                  <div className="flex justify-between items-center whitespace-nowrap">
                    <span>{'>'} MATCH_THRESHOLD: {matchLevel}%</span>
                    <span className="text-primary text-[8px]">{matchLevel > 80 ? 'ELITE' : 'STABLE'}</span>
                  </div>
                  <div className="flex justify-between items-center whitespace-nowrap">
                    <span>{'>'} VECTOR_INTERSECTION_CONFIRMED</span>
                    <span className="text-primary/40 text-[8px]">OK</span>
                  </div>
                </div>
              </div>

              {/* Range Control Glass Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl mb-8">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block mb-1">Match Quality Score</span>
                    <div className="text-3xl font-black flex items-center gap-2">
                      <AnimatedCounter value={matchLevel} color={status.color} />
                    </div>
                  </div>
                  <motion.div 
                    key={status.label}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-3 py-1 rounded-md text-[9px] font-black tracking-[0.15em]"
                    style={{ background: `${status.color}20`, color: status.color, border: `1px solid ${status.color}40` }}
                  >
                    {status.label}
                  </motion.div>
                </div>

                <div className="relative h-12 flex items-center mb-4">
                  <div className="absolute inset-0 h-1.5 my-auto rounded-full bg-muted/30 overflow-hidden">
                    <motion.div 
                    className="h-full bg-primary" 
                    animate={{ width: `${matchLevel}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="100"
                    step="1"
                    value={matchLevel}
                    onChange={e => setMatchLevel(Number(e.target.value))}
                    className="absolute inset-0 w-full h-1.5 my-auto appearance-none bg-transparent cursor-pointer z-10 
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 
                    [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(134,194,50,0.5)] 
                    [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:active:scale-90"
                  />
                </div>
                <div className="flex justify-between text-[9px] font-bold text-muted-foreground uppercase tracking-widest px-1">
                  <span>Minimum Threshold</span>
                  <span>Perfect Score</span>
                </div>
              </div>

              {/* Dimension Grid */}
              <div className="grid grid-cols-2 gap-3">
                {adjusted.map(d => (
                  <motion.div 
                    key={d.label}
                    className="p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                    onMouseEnter={() => setHoveredDimension(d.label)}
                    onMouseLeave={() => setHoveredDimension(null)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary opacity-70">{d.icon}</div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">{d.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1 rounded-full bg-muted/20 overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary/40"
                          animate={{ width: `${d.value}%` }}
                          transition={{ duration: 0.6, ease: "circOut" }}
                        />
                      </div>
                      <span className="text-xs font-black tabular-nums">{Math.round(d.value)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — The Visualization Core */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
            >
              {/* Spinning decorative outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/5 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/10" />

              <svg width="360" height="360" viewBox="0 0 360 360" className="relative z-10 overflow-visible">
                <defs>
                  <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#86C232" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#61892F" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid rings - animated in on scroll */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, ringIdx) => (
                  <motion.polygon
                    key={scale}
                    points={getFullHexPoints(cx, cy, maxR * scale)}
                    fill="none"
                    stroke="rgba(134,194,50,0.07)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: ringIdx * 0.15, ease: "easeOut" }}
                  />
                ))}

                {/* Additional Technical Cross-lines (Interconnecting Nodes) */}
                {dimensions.map((_, i) => {
                  const angle1 = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  const angle2 = (Math.PI * 2 * ((i + 2) % 6)) / 6 - Math.PI / 2;
                  return (
                    <line 
                      key={`connect-${i}`} 
                      x1={cx + (maxR * 0.8) * Math.cos(angle1)} 
                      y1={cy + (maxR * 0.8) * Math.sin(angle1)}
                      x2={cx + (maxR * 0.8) * Math.cos(angle2)} 
                      y2={cy + (maxR * 0.8) * Math.sin(angle2)}
                      stroke="rgba(134,194,50,0.04)" 
                      strokeWidth="0.5" 
                    />
                  );
                })}

                {/* Axes Lines */}
                {dimensions.map((_, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  return (
                    <line key={i} x1={cx} y1={cy}
                      x2={cx + maxR * Math.cos(angle)} y2={cy + maxR * Math.sin(angle)}
                      stroke="rgba(134,194,50,0.08)" strokeWidth="1" />
                  );
                })}

                {/* Reference Hex (Static Max Potential) */}
                <polygon
                  points={getHexPoints(dimensions.map(d => d.value), cx, cy, maxR)}
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1"
                  strokeDasharray="4 2"
                />

                {/* Data Shape — The Active Match */}
                <motion.polygon
                  points={getHexPoints(adjusted.map(d => d.value), cx, cy, maxR)}
                  fill="url(#matchGradient)"
                  stroke={status.color}
                  strokeWidth="2"
                  className="transition-all duration-700"
                  style={{ filter: status.filter, opacity: 0.2 }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  transformOrigin={`${cx}px ${cy}px`}
                />
                <motion.polygon
                  points={getHexPoints(adjusted.map(d => d.value), cx, cy, maxR)}
                  fill="none"
                  stroke={status.color}
                  strokeWidth="2"
                  strokeLinejoin="round"
                  className="transition-all duration-700"
                  style={{ filter: status.filter }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.9, ease: "easeOut" }}
                />

                {/* Vertex Points */}
                {adjusted.map((d, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  const r = (d.value / 100) * maxR;
                  const isHovered = hoveredDimension === d.label;
                  return (
                    <g key={d.label}>
                      <motion.circle
                        cx={cx + r * Math.cos(angle)} cy={cy + r * Math.sin(angle)}
                        r={4} 
                        fill="#fff"
                        stroke={status.color}
                        strokeWidth="1.5"
                        style={{ cursor: "pointer" }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: isHovered ? 2 : 1 }}
                        viewport={{ once: true }}
                        animate={{ scale: isHovered ? 2 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1.0 }}
                      />
                      {/* Vertex Glow */}
                      <circle
                        cx={cx + r * Math.cos(angle)} cy={cy + r * Math.sin(angle)}
                        r="12" fill={status.color}
                        className="opacity-20 blur-md pointer-events-none"
                      />
                    </g>
                  );
                })}

                {/* Dimension Labels with HUD Style */}
                {dimensions.map((d, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  const labelR = maxR + 45;
                  const isHovered = hoveredDimension === d.label;
                  return (
                    <g key={d.label} className="transition-opacity duration-300">
                      <text
                        x={cx + labelR * Math.cos(angle)} y={cy + labelR * Math.sin(angle)}
                        textAnchor="middle" dominantBaseline="middle"
                        className="transition-all duration-500"
                        fill={isHovered ? "#fff" : "rgba(107,110,112,0.6)"} 
                        fontSize={isHovered ? "11" : "9"} 
                        fontWeight="800"
                        style={{ textTransform: "uppercase", letterSpacing: "0.15em" }}
                      >
                        {d.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Absolute Center Pulse */}
              <div className="absolute w-12 h-12 rounded-full flex items-center justify-center bg-background border border-primary/20 shadow-[0_0_20px_rgba(134,194,50,0.1)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86C232" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>

              {/* Ambient Background Glow */}
              <div className="absolute inset-0 -z-10 rounded-full blur-[80px] opacity-40 transition-colors duration-1000"
                style={{ background: `radial-gradient(circle, ${status.color}25, transparent 70%)` }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
