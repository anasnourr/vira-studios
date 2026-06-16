"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/dictionaries";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  const options: { code: Locale; label: string }[] = [
    { code: "en", label: t.langSwitch.en },
    { code: "ar", label: t.langSwitch.ar },
  ];

  return (
    <div
      className={`relative flex items-center rounded-full border border-[rgba(245,245,245,0.14)] p-0.5 ${className}`}
      role="group"
      aria-label={t.langSwitch.label}
    >
      {options.map((opt) => {
        const active = locale === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            className="relative z-10 flex h-7 w-9 items-center justify-center text-xs font-medium tracking-wider transition-colors duration-300"
            style={{ color: active ? "#0a0a0a" : "#9b9b9b" }}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-[#c6a66b]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
