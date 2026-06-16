"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";

interface AnimatedHeadingProps {
  lines: readonly string[];
  className?: string;
  /** index of the line to render in gold accent */
  accentLine?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}

export function AnimatedHeading({
  lines,
  className = "",
  accentLine,
  delay = 0,
  as = "h2",
}: AnimatedHeadingProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={`font-display ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${accentLine === i ? "text-[#c6a66b]" : ""}`}
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: {
                  duration: 1,
                  ease: EASE_OUT_EXPO,
                  delay: delay + i * 0.1,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
