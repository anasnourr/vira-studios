"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function FeaturedExperience() {
  const { t } = useLanguage();
  const x = t.experience;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="experience" className="relative z-10 py-28 md:py-40">
      <div className="shell">
        <SectionLabel index={x.index} eyebrow={x.eyebrow} className="mb-14" />

        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          {/* Brand panel / featured visual */}
          <div ref={ref} className="lg:col-span-5">
            <motion.div style={{ y: visualY }} className="lg:sticky lg:top-28">
              <Reveal>
                <BrandPlate tag={x.clientTag} />
              </Reveal>
            </motion.div>
          </div>

          {/* Story */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-display text-[2.4rem] leading-tight md:text-[3.4rem]">
                {x.client}
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-[54ch] text-[1.05rem] leading-relaxed text-[#bcbcbc]">
                {x.description}
              </p>
            </Reveal>

            {/* Responsibilities */}
            <div className="mt-12">
              <Reveal>
                <span className="eyebrow text-[#6a6a6a]">{x.responsibilitiesTitle}</span>
              </Reveal>
              <motion.ul
                variants={stagger(0.07)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-6 grid grid-cols-1 gap-x-8 gap-y-px sm:grid-cols-2"
              >
                {x.responsibilities.map((r) => (
                  <motion.li
                    key={r}
                    variants={fadeUp}
                    className="flex items-center gap-3 border-b border-[var(--color-line)] py-3.5 text-[0.98rem] text-[#e2e2e2]"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c6a66b]" />
                    {r}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <Reveal>
            <span className="eyebrow text-[#6a6a6a]">{x.timelineTitle}</span>
          </Reveal>
          <div className="relative mt-10">
            <motion.div
              className="absolute top-[7px] h-px bg-gradient-to-r from-[#c6a66b] via-[#c6a66b]/40 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={viewportOnce}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-8 md:grid-cols-4"
            >
              {x.timeline.map((step) => (
                <motion.div key={step.phase} variants={fadeUp} className="relative pt-8">
                  <span className="absolute top-0 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-[#c6a66b] bg-[#0a0a0a]" />
                  <h4 className="font-display text-xl text-[#f5f5f5]">{step.phase}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#8f8f8f]">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Impact */}
        <Reveal className="mt-24" variants={fadeUp}>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[#0d0d0d] px-8 py-14 md:px-16 md:py-20">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-60"
              style={{
                background: "radial-gradient(circle, rgba(198,166,107,0.18), transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <span className="eyebrow text-[#c6a66b]">{x.impactTitle}</span>
            <p className="mt-6 max-w-[40ch] font-display text-[1.6rem] leading-snug text-[#f5f5f5] md:text-[2.4rem]">
              {x.impact}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Crafted brand plate used as the MN NEXUS featured visual.
 *  Swap with a real logo asset by replacing the inner markup. */
function BrandPlate({ tag }: { tag: string }) {
  return (
    <div
      data-cursor="view"
      data-cursor-label="Case"
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--color-line)] bg-gradient-to-b from-[#121212] to-[#0a0a0a]"
    >
      <div className="hairline-grid absolute inset-0 opacity-30" />
      <div
        className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(198,166,107,0.22), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[6rem] leading-none tracking-tight text-[#f5f5f5] md:text-[7rem]"
        >
          MN
        </motion.span>
        <span className="mt-3 h-px w-16 bg-[#c6a66b]" />
        <span className="mt-3 text-sm tracking-[0.5em] text-[#c6a66b]">NEXUS</span>
        <span className="mt-8 max-w-[24ch] text-[11px] leading-relaxed tracking-wider text-[#7a7a7a]">
          {tag}
        </span>
      </div>
    </div>
  );
}
