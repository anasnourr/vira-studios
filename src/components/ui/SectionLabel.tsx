"use client";

import { Reveal } from "./Reveal";

interface SectionLabelProps {
  index: string;
  eyebrow: string;
  className?: string;
}

/** Small editorial section marker: 'index — EYEBROW'. */
export function SectionLabel({ index, eyebrow, className = "" }: SectionLabelProps) {
  return (
    <Reveal className={`flex items-center gap-4 ${className}`}>
      <span className="font-display text-sm text-[#c6a66b]">{index}</span>
      <span className="h-px w-8 bg-[rgba(245,245,245,0.2)]" />
      <span className="eyebrow text-[#9b9b9b]">{eyebrow}</span>
    </Reveal>
  );
}
