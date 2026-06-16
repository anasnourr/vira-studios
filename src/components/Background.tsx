"use client";

import { motion } from "framer-motion";

/**
 * Layered, fixed background that gives the page depth without
 * a flat-black feel: soft radial light, two slow-drifting blurred
 * shapes, and a faint grid. Grain + vignette live in globals.css.
 */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Top radial light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 50% at 50% -10%, rgba(198,166,107,0.10), transparent 60%)",
        }}
      />
      {/* Lower-left cool depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 0% 100%, rgba(120,130,150,0.06), transparent 55%)",
        }}
      />

      {/* Drifting blurred shapes */}
      <motion.div
        className="absolute -left-[10%] top-[12%] h-[42vw] w-[42vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(198,166,107,0.14), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8%] top-[48%] h-[36vw] w-[36vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(155,155,155,0.10), transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Faint editorial grid */}
      <div className="hairline-grid absolute inset-0 opacity-[0.35]" />
    </div>
  );
}
