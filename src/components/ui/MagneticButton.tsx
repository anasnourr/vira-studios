"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "primary" | "outline" | "ghost";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  strength?: number;
  ariaLabel?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-[#c6a66b] text-[#0a0a0a] hover:bg-[#d8bf8e] border border-transparent",
  outline:
    "bg-transparent text-[#f5f5f5] border border-[rgba(245,245,245,0.22)] hover:border-[#c6a66b] hover:text-[#c6a66b]",
  ghost:
    "bg-transparent text-[#f5f5f5] border border-transparent hover:text-[#c6a66b]",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.35,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 18, mass: 0.5 });
  const y = useSpring(my, { stiffness: 260, damping: 18, mass: 0.5 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mx.set(relX * strength);
    my.set(relY * strength);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
    </span>
  );

  const base =
    "group relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.82rem] font-medium tracking-[0.08em] uppercase transition-colors duration-500 will-change-transform";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className="inline-block"
    >
      {href ? (
        <motion.a
          href={href}
          aria-label={ariaLabel}
          onClick={onClick}
          className={`${base} ${styles[variant]} ${className}`}
        >
          {inner}
        </motion.a>
      ) : (
        <motion.button
          type="button"
          aria-label={ariaLabel}
          onClick={onClick}
          className={`${base} ${styles[variant]} ${className}`}
        >
          {inner}
        </motion.button>
      )}
    </motion.div>
  );
}
