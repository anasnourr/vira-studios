"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Services() {
  const { t, dir } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative z-10 py-28 md:py-40">
      <div className="shell">
        <div className="mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index={t.services.index} eyebrow={t.services.eyebrow} className="mb-8" />
            <AnimatedHeading lines={[t.services.title]} className="display-lg" />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[38ch] text-[0.98rem] leading-relaxed text-[#9b9b9b] md:text-right">
              {t.services.intro}
            </p>
          </Reveal>
        </div>

        <motion.ul
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-t border-[var(--color-line)]"
        >
          {t.services.items.map((s, i) => {
            const isActive = active === i;
            return (
              <motion.li
                key={s.title}
                variants={fadeUp}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative border-b border-[var(--color-line)]"
              >
                {/* hover wash */}
                <motion.span
                  className="pointer-events-none absolute inset-0 origin-bottom bg-gradient-to-t from-[#101010] to-transparent"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="relative grid grid-cols-12 items-baseline gap-4 py-7 md:py-9">
                  <span className="col-span-2 font-display text-sm text-[#c6a66b] md:col-span-1">
                    0{i + 1}
                  </span>

                  <motion.h3
                    animate={{
                      x: isActive ? (dir === "rtl" ? -14 : 14) : 0,
                      color: isActive ? "#c6a66b" : "#f0f0f0",
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="col-span-10 font-display text-[1.7rem] leading-tight md:col-span-6 md:text-[2.4rem]"
                  >
                    {s.title}
                  </motion.h3>

                  <p className="col-span-12 col-start-3 max-w-[42ch] text-sm leading-relaxed text-[#8f8f8f] md:col-span-4 md:col-start-8 md:self-center">
                    {s.description}
                  </p>

                  <span
                    className="absolute end-0 top-1/2 hidden -translate-y-1/2 text-[#c6a66b] transition-all duration-500 md:block"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(-50%) translateX(${
                        isActive ? "0" : dir === "rtl" ? "10px" : "-10px"
                      })`,
                    }}
                  >
                    <ArrowIcon rtl={dir === "rtl"} />
                  </span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

function ArrowIcon({ rtl }: { rtl: boolean }) {
  return (
    <svg
      width="34"
      height="14"
      viewBox="0 0 34 14"
      fill="none"
      style={{ transform: rtl ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M27 1L33 7L27 13M0 7H32"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
