import { useState } from "react";
import { motion } from "framer-motion";

const dimensions = [
  { label: "Skills", value: 95 },
  { label: "Location", value: 88 },
  { label: "Performance", value: 92 },
  { label: "Experience", value: 75 },
  { label: "Availability", value: 90 },
  { label: "Academics", value: 85 },
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

export function HexagonMatchSection() {
  const [matchLevel, setMatchLevel] = useState(100);
  const cx = 160, cy = 160, maxR = 120;

  const adjusted = dimensions.map(d => ({
    ...d,
    value: Math.max(15, d.value * (matchLevel / 100)),
  }));

  const matchLabel = matchLevel >= 85 ? "Perfect Match" : matchLevel >= 60 ? "Good Match" : "Partial Match";
  const matchColor = matchLevel >= 85 ? "#86C232" : matchLevel >= 60 ? "#61892F" : "#6B6E70";

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left — text & controls */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Core Technology</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground leading-[1.1]">
                Hexagon Match{" "}
                <span className="gradient-neon-text">System</span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground leading-[1.8]">
                Six dimensions define every match. A perfect hexagon means a perfect fit.
                Drag the slider to see how partial matches distort the shape.
              </p>
            </motion.div>

            {/* Slider */}
            <div className="mt-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Match Quality</span>
                <span className="text-sm font-black" style={{ color: matchColor }}>{matchLabel} · {matchLevel}%</span>
              </div>
              <input
                type="range"
                min="25"
                max="100"
                value={matchLevel}
                onChange={e => setMatchLevel(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none bg-muted cursor-pointer"
                style={{ accentColor: "#86C232" }}
              />
            </div>

            {/* Dimension bars */}
            <div className="mt-8 space-y-4">
              {adjusted.map(d => (
                <div key={d.label}>
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="text-muted-foreground uppercase tracking-[0.1em] font-medium">{d.label}</span>
                    <span className="text-foreground font-bold tabular-nums">{Math.round(d.value)}</span>
                  </div>
                  <div className="h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(134,194,50,0.08)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${matchColor}, rgba(134,194,50,0.3))` }}
                      animate={{ width: `${d.value}%` }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hexagon visualization */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <svg width="320" height="320" viewBox="0 0 320 320">
                {/* Grid rings */}
                {[0.25, 0.5, 0.75, 1].map(scale => (
                  <polygon
                    key={scale}
                    points={getFullHexPoints(cx, cy, maxR * scale)}
                    fill="none"
                    stroke="rgba(107,110,112,0.15)"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Axes */}
                {dimensions.map((_, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  return (
                    <line key={i} x1={cx} y1={cy}
                      x2={cx + maxR * Math.cos(angle)} y2={cy + maxR * Math.sin(angle)}
                      stroke="rgba(107,110,112,0.12)" strokeWidth="0.5" />
                  );
                })}
                {/* Data shape */}
                <polygon
                  points={getHexPoints(adjusted.map(d => d.value), cx, cy, maxR)}
                  fill={`${matchColor}15`}
                  stroke={matchColor}
                  strokeWidth="2"
                  style={{ filter: `drop-shadow(0 0 12px ${matchColor}40)`, transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
                {/* Dots on vertices */}
                {adjusted.map((d, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  const r = (d.value / 100) * maxR;
                  return (
                    <circle key={d.label}
                      cx={cx + r * Math.cos(angle)} cy={cy + r * Math.sin(angle)}
                      r="3" fill={matchColor}
                      style={{ transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                  );
                })}
                {/* Labels */}
                {dimensions.map((d, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  const labelR = maxR + 28;
                  return (
                    <text key={d.label}
                      x={cx + labelR * Math.cos(angle)} y={cy + labelR * Math.sin(angle)}
                      textAnchor="middle" dominantBaseline="middle"
                      fill="rgba(107,110,112,0.7)" fontSize="10" fontWeight="600"
                      style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {d.label}
                    </text>
                  );
                })}
              </svg>

              {/* Ambient glow behind */}
              <div className="absolute inset-0 -z-10 rounded-full blur-[60px] opacity-30"
                style={{ background: `radial-gradient(circle, ${matchColor}30, transparent 70%)` }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
