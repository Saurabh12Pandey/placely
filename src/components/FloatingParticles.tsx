import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function FloatingParticles({ count = 12 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.2 + 0.05,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]">
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(8px, -20px); }
          50% { transform: translate(-5px, 5px); }
          75% { transform: translate(4px, -10px); }
        }
        @keyframes spin-shape {
          from { transform: rotate(var(--start-rot)); }
          to { transform: rotate(calc(var(--start-rot) + 360deg)); }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `oklch(0.74 0.18 128 / ${p.opacity})`,
            animation: `float-particle ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
      {[0, 1].map((i) => (
        <div
          key={`shape-${i}`}
          className="absolute will-change-transform"
          style={{
            left: `${25 + i * 40}%`,
            top: `${35 + i * 20}%`,
            width: 50 + i * 20,
            height: 50 + i * 20,
            border: `1px solid oklch(0.74 0.18 128 / ${0.03 + i * 0.02})`,
            borderRadius: i === 0 ? "50%" : "6px",
            ["--start-rot" as string]: `${i * 15}deg`,
            animation: `spin-shape ${50 + i * 15}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
