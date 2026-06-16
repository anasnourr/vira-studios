import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Amiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { en } from "@/i18n/dictionaries";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Background } from "@/components/Background";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virastudios.co"),
  title: {
    default: en.meta.title,
    template: "%s — VIRA STUDIOS",
  },
  description: en.meta.description,
  keywords: [
    "VIRA STUDIOS",
    "creative studio",
    "brand growth",
    "event experiences",
    "partnerships",
    "sponsorship",
    "audience growth",
    "operations",
  ],
  authors: [{ name: "VIRA STUDIOS" }],
  openGraph: {
    type: "website",
    title: en.meta.title,
    description: en.meta.description,
    siteName: "VIRA STUDIOS",
    locale: "en",
    alternateLocale: "ar",
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.title,
    description: en.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${amiri.variable} ${ibmArabic.variable}`}
    >
      <body className="antialiased">
        <LanguageProvider>
          <SmoothScroll>
            <Background />
            <div className="grain" />
            <div className="vignette" />
            <Loader />
            <CustomCursor />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
