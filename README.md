# VIRA STUDIOS

A premium, bilingual (English / Arabic, full RTL) marketing website for **VIRA STUDIOS** — a modern growth, experiences, and creative studio.

Dark-luxury, editorial, cinematic. Built as a single-page experience with no backend.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, parallax, animated typography, counters, magnetic buttons
- **Lenis** — smooth scrolling
- Custom cursor, luxury loader, grain/noise depth system
- Fully responsive · SEO optimized (metadata, Open Graph, robots, sitemap)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

> This machine had no Node.js, so a portable copy lives in `C:\Users\IT\tools\node`.
> Use it directly if `node` isn't on your PATH, e.g.
> `& "C:\Users\IT\tools\node\npm.cmd" run dev`.

## Project structure

```
src/
  app/
    layout.tsx        # fonts, SEO metadata, providers
    page.tsx          # section composition
    globals.css       # design system (colors, type, grain, utilities)
    icon.svg          # favicon
    robots.ts · sitemap.ts
  i18n/
    dictionaries.ts   # ALL copy — English + Arabic
    LanguageProvider.tsx
  components/
    SmoothScroll.tsx · CustomCursor.tsx · Loader.tsx
    Background.tsx · Navbar.tsx · LanguageSwitcher.tsx
    ui/               # Reveal, AnimatedHeading, AnimatedCounter, MagneticButton, SectionLabel
    sections/         # Hero, About, Services, FeaturedExperience, SelectedWork,
                      # Process, WhyVira, Testimonials, FinalCTA, Contact, Footer
```

## Customizing

- **All text** (both languages) lives in `src/i18n/dictionaries.ts`. Edit `en` and `ar`.
- **Contact details** are placeholders — update `contact.email`, `contact.whatsapp`,
  and `contact.instagram` in the dictionary. They drive the contact section, the
  WhatsApp / Book-a-Call buttons, and the footer.
- **Brand colors** are CSS variables in `src/app/globals.css` (`--color-ink`,
  `--color-bone`, `--color-gold`, `--color-ash`).
- **MN NEXUS visual** is a crafted brand plate (`BrandPlate` in
  `components/sections/FeaturedExperience.tsx`). Replace its inner markup with a
  real logo asset when available.
- **Selected Work** projects (`work.projects`) are representative case studies —
  swap titles, copy, and metrics for real engagements.

## Notes

- The contact form has no backend; on submit it opens the visitor's mail client
  (`mailto:`) prefilled with their message. Wire it to a form service
  (Formspree, Resend, a route handler, etc.) if you want server-side delivery.
- Motion respects `prefers-reduced-motion`.
