"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Testimonials() {
  const { t, dir, locale } = useLanguage();
  const items = t.testimonials.items;
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const paginate = useCallback(
    (dirStep: number) => {
      setState(([i]) => {
        const next = (i + dirStep + items.length) % items.length;
        return [next, dirStep];
      });
    },
    [items.length],
  );

  const rtl = dir === "rtl";
  const enter = rtl ? -1 : 1;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 * enter : -80 * enter, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 * enter : 80 * enter, opacity: 0 }),
  };

  const current = items[index];
  const counter = (n: number) =>
    locale === "ar"
      ? String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)])
      : String(n).padStart(2, "0");

  return (
    <section id="testimonials" className="relative z-10 py-28 md:py-40">
      <div className="shell">
        <SectionLabel
          index={t.testimonials.index}
          eyebrow={t.testimonials.eyebrow}
          className="mb-10"
        />
        <AnimatedHeading lines={[t.testimonials.title]} className="display-md mb-16 max-w-[18ch]" />

        <div className="relative">
          <div className="relative min-h-[260px] overflow-hidden md:min-h-[300px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.blockquote
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) paginate(1);
                  else if (info.offset.x > 80) paginate(-1);
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <p className="max-w-[24ch] font-display text-[1.8rem] leading-snug text-[#f0f0f0] md:max-w-[20ch] md:text-[3rem]">
                  <span className="text-[#c6a66b]">“</span>
                  {current.quote}
                  <span className="text-[#c6a66b]">”</span>
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a66b]/40 font-display text-sm text-[#c6a66b]">
                    {current.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-[0.95rem] font-medium text-[#f5f5f5]">
                      {current.name}
                    </div>
                    <div className="text-sm text-[#8f8f8f]">
                      {current.role} · {current.company}
                    </div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-between border-t border-[var(--color-line)] pt-8">
            <div className="font-display text-sm text-[#8a8a8a]">
              <span className="text-[#c6a66b]">{counter(index + 1)}</span>
              <span className="mx-2 text-[#3a3a3a]">/</span>
              <span>{counter(items.length)}</span>
            </div>

            <div className="flex items-center gap-3">
              <CircleButton onClick={() => paginate(-1)} ariaLabel="Previous" rtl={rtl}>
                <Arrow flip={!rtl} />
              </CircleButton>
              <CircleButton onClick={() => paginate(1)} ariaLabel="Next" rtl={rtl}>
                <Arrow flip={rtl} />
              </CircleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CircleButton({
  children,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  rtl: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(245,245,245,0.16)] text-[#cfcfcf] transition-all duration-500 hover:border-[#c6a66b] hover:text-[#c6a66b]"
    >
      {children}
    </button>
  );
}

function Arrow({ flip }: { flip: boolean }) {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M14 1L19 6L14 11M0 6H18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
