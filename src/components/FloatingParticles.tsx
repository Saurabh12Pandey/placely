import { motion } from "framer-motion";
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

export function FloatingParticles({ count = 20 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.05,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `oklch(0.74 0.18 128 / ${p.opacity})`,
          }}
          animate={{
            y: [0, -40, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity * 0.5, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {/* Larger floating geometric shapes */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 15}%`,
            width: 60 + i * 20,
            height: 60 + i * 20,
            border: `1px solid oklch(0.74 0.18 128 / ${0.04 + i * 0.02})`,
            borderRadius: i === 1 ? "50%" : i === 2 ? "8px" : "0",
            transform: `rotate(${i * 15}deg)`,
          }}
          animate={{
            rotate: [i * 15, i * 15 + 360],
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 40 + i * 10, repeat: Infinity, ease: "linear" },
            y: { duration: 8 + i * 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}
