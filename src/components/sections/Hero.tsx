"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Hero() {
  const { t, dir } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-12"
    >
      <motion.div style={{ y: yContent, opacity }} className="shell relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[#c6a66b]" />
          <span className="eyebrow text-[#c6a66b]">{t.hero.eyebrow}</span>
        </motion.div>

        {/* Headline */}
        <AnimatedHeading
          as="h1"
          lines={t.hero.headlineLines}
          accentLine={t.hero.headlineLines.length - 1}
          delay={0.9}
          className="display-xl max-w-[16ch] text-balance"
        />

        {/* Subheadline + CTAs */}
        <div
          className={`mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between ${
            dir === "rtl" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="max-w-[46ch] text-[1.05rem] leading-relaxed text-[#b9b9b9]"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton onClick={() => scrollTo("#contact", -10)} variant="primary">
              {t.hero.ctaPrimary}
            </MagneticButton>
            <MagneticButton onClick={() => scrollTo("#work", -10)} variant="outline">
              {t.hero.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4"
        >
          {t.hero.metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[#0c0c0c] px-6 py-7 transition-colors duration-500 hover:bg-[#101010]"
            >
              <div className="font-display text-4xl text-[#f5f5f5] md:text-5xl">
                <AnimatedCounter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-xs leading-snug tracking-wide text-[#8a8a8a]">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="eyebrow text-[10px] text-[#6a6a6a]">{t.hero.scroll}</span>
        <span className="relative block h-10 w-px overflow-hidden bg-[#2a2a2a]">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-[#c6a66b]"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
