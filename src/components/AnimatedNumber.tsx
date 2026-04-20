import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform, animate } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  // Parse numeric value (handles commas and %)
  const numericValue = parseFloat(value.replace(/,/g, "").replace("%", ""));
  const hasComma = value.includes(",");
  const hasPercent = value.includes("%");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    let formatted = latest.toFixed(hasPercent ? 1 : 0);
    
    if (hasComma) {
      const parts = formatted.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      formatted = parts.join(".");
    }
    
    return formatted + (hasPercent ? "%" : "");
  });

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animation = animate(count, numericValue, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5,
    });

    return animation.stop;
  }, [numericValue, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
  }, [rounded]);

  return <span ref={ref} className={className}>0</span>;
}
