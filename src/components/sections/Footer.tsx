"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  const { t } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const year = new Date().getFullYear();

  const nav = [
    { label: t.nav.services, id: "#services" },
    { label: t.nav.experience, id: "#experience" },
    { label: t.nav.work, id: "#work" },
    { label: t.nav.about, id: "#about" },
    { label: t.nav.contact, id: "#contact" },
  ];

  const waNumber = t.contact.whatsapp.replace(/[^0-9]/g, "");
  const igHandle = t.contact.instagram.replace(/^@/, "");
  const social = [
    { label: t.contact.instagramLabel, href: `https://instagram.com/${igHandle}` },
    { label: t.contact.whatsappLabel, href: `https://wa.me/${waNumber}` },
    { label: "Email", href: `mailto:${t.contact.email}` },
  ];

  return (
    <footer className="relative z-10 border-t border-[var(--color-line)] pt-20">
      <div className="shell">
        {/* Top */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex items-baseline gap-[0.18em] font-display text-3xl">
                <span>{t.brand.name}</span>
                <span className="h-1.5 w-1.5 translate-y-[-0.1em] rounded-full bg-[#c6a66b]" />
                <span className="text-base tracking-[0.2em] text-[#9b9b9b]">
                  {t.brand.suffix}
                </span>
              </div>
              <p className="mt-5 max-w-[34ch] text-[0.98rem] leading-relaxed text-[#9b9b9b]">
                {t.footer.tagline}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <FooterCol title={t.footer.navTitle}>
              {nav.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id, -10)}
                  className="block text-start text-[0.95rem] text-[#bcbcbc] transition-colors hover:text-[#c6a66b]"
                >
                  {l.label}
                </button>
              ))}
            </FooterCol>
          </div>

          <div className="md:col-span-2">
            <FooterCol title={t.footer.socialTitle}>
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block text-[0.95rem] text-[#bcbcbc] transition-colors hover:text-[#c6a66b]"
                >
                  {s.label}
                </a>
              ))}
            </FooterCol>
          </div>

          <div className="md:col-span-2">
            <FooterCol title={t.footer.contactTitle}>
              <a
                href={`mailto:${t.contact.email}`}
                className="block text-[0.95rem] text-[#bcbcbc] transition-colors hover:text-[#c6a66b]"
              >
                {t.contact.email}
              </a>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noreferrer"
                className="block text-[0.95rem] text-[#bcbcbc] transition-colors hover:text-[#c6a66b]"
              >
                {t.contact.whatsapp}
              </a>
            </FooterCol>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-[var(--color-line)] py-8 md:flex-row">
          <p className="text-xs tracking-wide text-[#6a6a6a]">
            © {year} {t.brand.name} {t.brand.suffix}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <button
              onClick={() => scrollTo(0)}
              className="link-underline text-xs uppercase tracking-[0.18em] text-[#9b9b9b] hover:text-[#c6a66b]"
            >
              {t.footer.backToTop} ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow mb-5 text-[10px] text-[#6a6a6a]">{title}</h4>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
