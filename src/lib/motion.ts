import type { Variants, Transition } from "framer-motion";

/* Shared easing — elegant, never bouncy. */
export const EASE_OUT_EXPO: number[] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT_QUART: number[] = [0.76, 0, 0.24, 1];

export const baseTransition: Transition = {
  duration: 1,
  ease: EASE_OUT_EXPO,
};

/* Fade + rise, used for most block reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: EASE_OUT_EXPO } },
};

/* Container that staggers its children. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/* Per-line mask reveal for headlines. */
export const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: EASE_OUT_EXPO },
  },
};

/* Word reveal for animated typography. */
export const wordReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/* Shared viewport config for scroll reveals. */
export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;
