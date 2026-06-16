"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  const { t } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const waNumber = t.contact.whatsapp.replace(/[^0-9]/g, "");

  return (
    <section className="relative z-10 overflow-hidden py-32 md:py-52">
      {/* glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(198,166,107,0.16), transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-[#c6a66b]/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="shell relative flex flex-col items-center text-center">
        <AnimatedHeading
          lines={t.finalCta.headlineLines}
          accentLine={t.finalCta.headlineLines.length - 1}
          className="display-xl"
        />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[52ch] text-[1.05rem] leading-relaxed text-[#b4b4b4]">
            {t.finalCta.subheadline}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton onClick={() => scrollTo("#contact", -10)} variant="primary">
              {t.finalCta.ctaPrimary}
            </MagneticButton>
            <MagneticButton
              href={`https://wa.me/${waNumber}`}
              variant="outline"
              ariaLabel={t.finalCta.ctaSecondary}
            >
              {t.finalCta.ctaSecondary}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
