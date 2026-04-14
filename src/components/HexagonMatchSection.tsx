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
  const cx = 150, cy = 150, maxR = 110;

  const adjusted = dimensions.map(d => ({
    ...d,
    value: Math.max(20, d.value * (matchLevel / 100)),
  }));

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Core USP</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Hexagon Match System</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Perfect match = perfect hexagon. See how each dimension contributes to the overall fit.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <svg width="300" height="300" viewBox="0 0 300 300">
                {/* Grid rings */}
                {[0.25, 0.5, 0.75, 1].map(scale => (
                  <polygon
                    key={scale}
                    points={getFullHexPoints(cx, cy, maxR * scale)}
                    fill="none"
                    stroke="oklch(0.35 0.01 240 / 0.4)"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Axes */}
                {dimensions.map((_, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  return (
                    <line
                      key={i}
                      x1={cx} y1={cy}
                      x2={cx + maxR * Math.cos(angle)}
                      y2={cy + maxR * Math.sin(angle)}
                      stroke="oklch(0.35 0.01 240 / 0.3)"
                      strokeWidth="0.5"
                    />
                  );
                })}
                {/* Data polygon */}
                <motion.polygon
                  points={getHexPoints(adjusted.map(d => d.value), cx, cy, maxR)}
                  fill="oklch(0.74 0.18 128 / 0.15)"
                  stroke="oklch(0.74 0.18 128)"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ filter: "drop-shadow(0 0 8px oklch(0.74 0.18 128 / 0.4))" }}
                />
                {/* Labels */}
                {dimensions.map((d, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  const labelR = maxR + 24;
                  const x = cx + labelR * Math.cos(angle);
                  const y = cy + labelR * Math.sin(angle);
                  return (
                    <text
                      key={d.label}
                      x={x} y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="oklch(0.58 0.01 240)"
                      fontSize="10"
                      fontWeight="500"
                    >
                      {d.label}
                    </text>
                  );
                })}
              </svg>
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-[40px] -z-10" />
            </div>
          </motion.div>

          <div className="flex-1 max-w-md">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Match Quality</span>
                  <span className="font-bold text-primary">{matchLevel}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={matchLevel}
                  onChange={e => setMatchLevel(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none bg-muted cursor-pointer accent-primary"
                  style={{ accentColor: "oklch(0.74 0.18 128)" }}
                />
              </div>

              {adjusted.map(d => (
                <div key={d.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{d.label}</span>
                    <span className="text-foreground font-medium">{Math.round(d.value)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full gradient-neon"
                      initial={{ width: 0 }}
                      animate={{ width: `${d.value}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
