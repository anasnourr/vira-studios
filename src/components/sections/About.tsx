"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative z-10 py-28 md:py-40">
      <div className="shell">
        <SectionLabel index={t.about.index} eyebrow={t.about.eyebrow} className="mb-14" />

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Headline */}
          <div className="lg:col-span-7">
            <AnimatedHeading
              lines={[t.about.headline]}
              accentLine={0}
              className="display-lg max-w-[14ch]"
            />
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:pt-3">
            {t.about.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-[1.05rem] leading-relaxed text-[#bcbcbc]">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <p className="border-t border-[var(--color-line)] pt-6 font-display text-xl leading-snug text-[#f5f5f5]">
                {t.about.statement}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Focus areas */}
        <div className="mt-24">
          <Reveal>
            <span className="eyebrow text-[#6a6a6a]">{t.about.focusTitle}</span>
          </Reveal>
          <motion.ul
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {t.about.focus.map((f, i) => (
              <motion.li
                key={f}
                variants={fadeUp}
                className="group flex items-center gap-3"
              >
                <span className="font-display text-[2rem] leading-none text-[#e8e8e8] transition-colors duration-500 group-hover:text-[#c6a66b] md:text-[3.2rem]">
                  {f}
                </span>
                {i < t.about.focus.length - 1 && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c6a66b]/60" />
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
