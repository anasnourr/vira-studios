"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO, EASE_IN_OUT_QUART } from "@/lib/motion";

export function Loader() {
  const { t } = useLanguage();
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Begin the reveal.
    const startExit = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 1800);

    // Hard fallback: remove from the tree via a timer (timers still fire in
    // throttled/background tabs, where requestAnimationFrame — and therefore
    // the exit animation — would otherwise stall and trap the page).
    const remove = setTimeout(() => {
      setRemoved(true);
      document.body.style.overflow = "";
    }, 2900);

    return () => {
      clearTimeout(startExit);
      clearTimeout(remove);
      document.body.style.overflow = "";
    };
  }, []);

  if (removed) return null;

  const letters = "VIRA".split("");
  const letters2 = "STUDIOS".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ y: "0%" }}
      animate={{ y: done ? "-100%" : "0%" }}
      transition={{ duration: 1, ease: EASE_IN_OUT_QUART }}
      style={{ pointerEvents: done ? "none" : "auto" }}
    >
      <div className="grain" />
      <div className="overflow-hidden">
        <div className="flex items-end gap-[0.12em] font-display text-[12vw] leading-none md:text-[7vw]">
          {letters.map((l, i) => (
            <motion.span
              key={`a-${i}`}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.06 }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
          <span className="mx-[0.18em] inline-block h-[0.12em] w-[0.12em] translate-y-[-0.1em] rounded-full bg-[#c6a66b]" />
          {letters2.map((l, i) => (
            <motion.span
              key={`b-${i}`}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.34 + i * 0.05 }}
              className="inline-block text-[#c6a66b]"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="eyebrow mt-6 text-[#9b9b9b]"
      >
        {t.loader.line}
      </motion.p>

      {/* progress hairline */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-[#1c1c1c]">
        <motion.div
          className="h-full bg-[#c6a66b]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: EASE_OUT_EXPO }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
