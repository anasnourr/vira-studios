"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { viewportOnce } from "@/lib/motion";
import type { Dictionary } from "@/i18n/dictionaries";

type Project = Dictionary["work"]["projects"][number];

export function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative z-10 py-28 md:py-40">
      <div className="shell">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index={t.work.index} eyebrow={t.work.eyebrow} className="mb-8" />
            <AnimatedHeading lines={[t.work.title]} className="display-lg" />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[40ch] text-[0.98rem] leading-relaxed text-[#9b9b9b] md:text-right">
              {t.work.intro}
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-28 md:gap-40">
          {t.work.projects.map((p, i) => (
            <ProjectBlock key={p.title} project={p} index={i} labels={t.work} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectBlock({
  project,
  index,
  labels,
}: {
  project: Project;
  index: number;
  labels: Dictionary["work"];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const flip = index % 2 === 1;

  const narrative = [
    { label: labels.fieldChallenge, text: project.challenge },
    { label: labels.fieldApproach, text: project.approach },
    { label: labels.fieldExecution, text: project.execution },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 items-center gap-x-14 gap-y-10 lg:grid-cols-12">
      {/* Visual */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <motion.div style={{ y }}>
          <ProjectVisual project={project} index={index} />
        </motion.div>
      </div>

      {/* Content */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
        <Reveal>
          <div className="flex items-center gap-4 text-xs tracking-wider text-[#8a8a8a]">
            <span className="text-[#c6a66b]">{project.category}</span>
            <span className="h-px w-6 bg-[#3a3a3a]" />
            <span>{project.year}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-4 font-display text-[2.6rem] leading-none md:text-[3.4rem]">
            {project.title}
          </h3>
        </Reveal>

        <div className="mt-8 flex flex-col gap-5">
          {narrative.map((n, k) => (
            <Reveal key={n.label} delay={0.05 + k * 0.05}>
              <div className="grid grid-cols-12 gap-3 border-t border-[var(--color-line)] pt-4">
                <span className="col-span-12 eyebrow text-[10px] text-[#c6a66b] sm:col-span-3">
                  {n.label}
                </span>
                <p className="col-span-12 text-[0.95rem] leading-relaxed text-[#b4b4b4] sm:col-span-9">
                  {n.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Results */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10"
        >
          <span className="eyebrow text-[10px] text-[#6a6a6a]">{labels.fieldResults}</span>
          <div className="mt-4 grid grid-cols-3 gap-6">
            {project.results.map((r) => (
              <div key={r.label}>
                <div className="font-display text-3xl text-[#f5f5f5] md:text-4xl">
                  <AnimatedCounter value={r.value} suffix={r.suffix} />
                </div>
                <div className="mt-1 text-[11px] leading-snug text-[#8a8a8a]">{r.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  return (
    <div
      data-cursor="view"
      data-cursor-label="View"
      className="group relative aspect-[5/6] w-full overflow-hidden rounded-3xl border border-[var(--color-line)]"
    >
      {/* gradient field */}
      <div
        className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        style={{
          background:
            index % 3 === 0
              ? "linear-gradient(150deg, #15130d 0%, #0a0a0a 55%, #100d08 100%)"
              : index % 3 === 1
                ? "linear-gradient(150deg, #121316 0%, #0a0a0a 55%, #0d0e10 100%)"
                : "linear-gradient(150deg, #141014 0%, #0a0a0a 55%, #0f0c0f 100%)",
        }}
      />
      <div className="hairline-grid absolute inset-0 opacity-20" />
      <div
        className="absolute bottom-0 left-0 h-2/3 w-full opacity-80"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 100%, rgba(198,166,107,0.16), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      {/* big index */}
      <span className="absolute right-6 top-4 font-display text-[7rem] leading-none text-[#f5f5f5]/[0.05] md:text-[9rem]">
        0{index + 1}
      </span>
      {/* title overprint */}
      <div className="absolute inset-0 flex items-end p-8 md:p-10">
        <span className="font-display text-[2.4rem] leading-[0.95] text-[#f5f5f5]/90 md:text-[3rem]">
          {project.title}
        </span>
      </div>
    </div>
  );
}
