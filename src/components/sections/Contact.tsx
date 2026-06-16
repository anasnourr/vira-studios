"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_OUT_EXPO } from "@/lib/motion";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const waNumber = c.whatsapp.replace(/[^0-9]/g, "");
  const igHandle = c.instagram.replace(/^@/, "");

  const channels = [
    { label: c.email, value: c.email, href: `mailto:${c.email}`, tag: "Email" },
    { label: c.whatsappLabel, value: c.whatsapp, href: `https://wa.me/${waNumber}`, tag: "WhatsApp" },
    {
      label: c.instagramLabel,
      value: c.instagram,
      href: `https://instagram.com/${igHandle}`,
      tag: "Instagram",
    },
  ];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`New project — ${form.name || "VIRA STUDIOS"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany / Project: ${form.company}\n\n${form.message}`,
    );
    // No backend: hand off to the visitor's mail client.
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <section id="contact" className="relative z-10 py-28 md:py-40">
      <div className="shell">
        <SectionLabel index={c.index} eyebrow={c.eyebrow} className="mb-12" />

        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <AnimatedHeading lines={[c.title]} accentLine={0} className="display-lg" />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[38ch] text-[1.02rem] leading-relaxed text-[#b4b4b4]">
                {c.intro}
              </p>
            </Reveal>

            <div className="mt-12">
              <Reveal>
                <span className="eyebrow text-[#6a6a6a]">{c.channelsTitle}</span>
              </Reveal>
              <div className="mt-6 flex flex-col">
                {channels.map((ch) => (
                  <Reveal key={ch.tag}>
                    <a
                      href={ch.href}
                      target={ch.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center justify-between border-t border-[var(--color-line)] py-5"
                    >
                      <span className="eyebrow text-[10px] text-[#8a8a8a]">{ch.tag}</span>
                      <span className="font-display text-lg text-[#e8e8e8] transition-colors duration-500 group-hover:text-[#c6a66b] md:text-xl">
                        {ch.value}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-[var(--color-line)] bg-[#0c0c0c]/60 p-8 backdrop-blur-sm md:p-12"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                  <Field
                    label={c.form.name}
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    required
                  />
                  <Field
                    label={c.form.email}
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    required
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label={c.form.company}
                      value={form.company}
                      onChange={(v) => setForm((f) => ({ ...f, company: v }))}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Field
                      label={c.form.message}
                      value={form.message}
                      onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                      textarea
                      required
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative inline-flex items-center gap-3 rounded-full bg-[#c6a66b] px-8 py-4 text-[0.82rem] font-medium uppercase tracking-[0.08em] text-[#0a0a0a] transition-colors duration-500 hover:bg-[#d8bf8e] disabled:opacity-60"
                  >
                    {status === "sending" ? c.form.sending : c.form.submit}
                    <span className="transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                      →
                    </span>
                  </button>

                  {status === "sent" && (
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                      className="text-sm text-[#c6a66b]"
                    >
                      {c.form.sent}
                    </motion.span>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    "peer w-full border-b border-[var(--color-line)] bg-transparent pb-3 pt-6 text-[#f5f5f5] outline-none transition-colors duration-300 placeholder-transparent focus:border-[#c6a66b]";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          rows={4}
          required={required}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          required={required}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
      <span className="pointer-events-none absolute top-1 text-xs tracking-wide text-[#7a7a7a] transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#6a6a6a] peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#c6a66b] ltr:left-0 rtl:right-0">
        {label}
      </span>
    </label>
  );
}
