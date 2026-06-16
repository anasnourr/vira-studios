"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useSmoothScroll } from "./SmoothScroll";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MagneticButton } from "./ui/MagneticButton";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Navbar() {
  const { t } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.home, id: "#top" },
    { label: t.nav.services, id: "#services" },
    { label: t.nav.experience, id: "#experience" },
    { label: t.nav.work, id: "#work" },
    { label: t.nav.about, id: "#about" },
    { label: t.nav.contact, id: "#contact" },
  ];

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > last && y > 320 && !open);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    if (id === "#top") scrollTo(0);
    else scrollTo(id, -10);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="fixed inset-x-0 top-0 z-[120]"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-[var(--color-line)] bg-[rgba(10,10,10,0.72)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <nav className="shell flex h-[72px] items-center justify-between">
            {/* Wordmark */}
            <button
              onClick={() => go("#top")}
              className="group flex items-baseline gap-[0.18em] font-display text-lg tracking-tight"
              aria-label="VIRA STUDIOS — home"
            >
              <span>{t.brand.name}</span>
              <span className="h-1 w-1 translate-y-[-0.1em] rounded-full bg-[#c6a66b] transition-transform duration-500 group-hover:scale-150" />
              <span className="text-[0.7em] tracking-[0.2em] text-[#9b9b9b] transition-colors group-hover:text-[#c6a66b]">
                {t.brand.suffix}
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden items-center gap-9 lg:flex">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="link-underline text-[0.82rem] tracking-wide text-[#cfcfcf] transition-colors hover:text-[#f5f5f5]"
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Right cluster */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher className="hidden sm:flex" />
              <div className="hidden lg:block">
                <MagneticButton onClick={() => go("#contact")} className="!px-6 !py-2.5">
                  {t.nav.cta}
                </MagneticButton>
              </div>

              {/* Burger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="relative z-[130] flex h-10 w-10 items-center justify-center lg:hidden"
              >
                <span className="relative block h-3 w-6">
                  <motion.span
                    className="absolute left-0 block h-px w-6 bg-[#f5f5f5]"
                    animate={open ? { rotate: 45, top: 6 } : { rotate: 0, top: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 block h-px w-6 bg-[#f5f5f5]"
                    animate={
                      open ? { rotate: -45, bottom: 6 } : { rotate: 0, bottom: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[115] flex flex-col bg-[#0a0a0a] lg:hidden"
          >
            <div className="grain" />
            <div className="shell flex flex-1 flex-col justify-center gap-2 pt-20">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => go(l.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: EASE_OUT_EXPO }}
                  className="font-display text-left text-[2.6rem] leading-[1.15] text-[#f5f5f5]"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
            <div className="shell flex items-center justify-between border-t border-[var(--color-line)] py-6">
              <LanguageSwitcher />
              <a
                href={`mailto:${t.contact.email}`}
                className="text-sm text-[#9b9b9b] hover:text-[#c6a66b]"
              >
                {t.contact.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
