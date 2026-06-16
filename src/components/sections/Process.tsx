"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Process() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative z-10 py-28 md:py-40">
      <div className="shell">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Sticky heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index={t.process.index} eyebrow={t.process.eyebrow} className="mb-8" />
              <AnimatedHeading lines={[t.process.title]} className="display-md" />
            </div>
          </div>

          {/* Steps */}
          <div ref={trackRef} className="relative lg:col-span-8">
            {/* base + progress rail */}
            <div className="absolute bottom-0 top-0 w-px bg-[var(--color-line)] ltr:left-0 rtl:right-0" />
            <motion.div
              className="absolute bottom-0 top-0 w-px origin-top bg-[#c6a66b] ltr:left-0 rtl:right-0"
              style={{ scaleY: lineScale }}
            />

            <div className="flex flex-col gap-16 ps-10 md:gap-24 md:ps-16">
              {t.process.steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="relative"
                >
                  {/* node */}
                  <span className="absolute top-3 flex h-4 w-4 items-center justify-center rounded-full border border-[#c6a66b] bg-[#0a0a0a] ltr:-left-[2.55rem] rtl:-right-[2.55rem] md:ltr:-left-[4.05rem] md:rtl:-right-[4.05rem]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c6a66b]" />
                  </span>

                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-sm text-[#c6a66b]">{step.number}</span>
                    <h3 className="font-display text-[2rem] leading-tight md:text-[2.8rem]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-[44ch] text-[1rem] leading-relaxed text-[#9b9b9b]">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
