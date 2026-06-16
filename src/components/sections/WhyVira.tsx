"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function WhyVira() {
  const { t } = useLanguage();

  return (
    <section id="why" className="relative z-10 py-28 md:py-40">
      <div className="shell">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index={t.why.index} eyebrow={t.why.eyebrow} className="mb-8" />
            <AnimatedHeading
              lines={[t.why.title]}
              accentLine={0}
              className="display-lg max-w-[16ch]"
            />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4"
        >
          {t.why.stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="bg-[#0c0c0c] px-6 py-9">
              <div className="font-display text-5xl text-[#c6a66b] md:text-6xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-[#9b9b9b]">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-1 gap-x-12 gap-y-px sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.why.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              className="group border-t border-[var(--color-line)] py-8"
            >
              <span className="font-display text-xs text-[#c6a66b]">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl text-[#f0f0f0] transition-colors duration-500 group-hover:text-[#c6a66b]">
                {h.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[0.95rem] leading-relaxed text-[#8f8f8f]">
                {h.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
