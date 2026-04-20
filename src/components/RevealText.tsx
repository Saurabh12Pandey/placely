/**
 * RevealText
 *
 * Splits text into individual word spans. Each word has a CSS custom property
 * `--i` (its index) which drives a staggered transition-delay via the
 * `.reveal-word` CSS class. Parent must have `.hover-reveal-zone` to trigger.
 *
 * Usage:
 *   <div className="hover-reveal-zone">
 *     <RevealText as="h2" className="text-3xl font-black">
 *       The Platform That Changes Everything
 *     </RevealText>
 *     <p className="reveal-paragraph">Supporting copy that follows.</p>
 *   </div>
 */

import React from "react";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface RevealTextProps {
  children: string;
  as?: Tag;
  className?: string;
  /** How much to reduce the delay per word. Default 0.045s */
  stagger?: number;
}

export function RevealText({
  children,
  as: Tag = "span",
  className = "",
  stagger = 0.045,
}: RevealTextProps) {
  const words = children.split(" ");

  return (
    <Tag className={className} aria-label={children}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span
            className="reveal-word"
            style={{ "--i": i } as React.CSSProperties}
            aria-hidden="true"
          >
            {word}
          </span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </Tag>
  );
}
