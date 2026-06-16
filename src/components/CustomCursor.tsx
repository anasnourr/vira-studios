"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

type CursorVariant = "default" | "hover" | "view";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor], input, textarea, [role='button']",
      ) as HTMLElement | null;

      if (!el) {
        setVariant("default");
        setLabel("");
        return;
      }
      const kind = el.getAttribute("data-cursor");
      if (kind === "view") {
        setVariant("view");
        setLabel(el.getAttribute("data-cursor-label") || "View");
      } else {
        setVariant("hover");
        setLabel("");
      }
    };

    const leaveWindow = () => setVisible(false);
    const enterWindow = () => setVisible(true);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("pointerleave", leaveWindow);
    document.addEventListener("pointerenter", enterWindow);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", leaveWindow);
      document.removeEventListener("pointerenter", enterWindow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const ringSize = variant === "view" ? 92 : variant === "hover" ? 56 : 36;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[200] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      {/* Lagging ring */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          backgroundColor:
            variant === "view" ? "rgba(198,166,107,1)" : "rgba(0,0,0,0)",
          borderColor:
            variant === "view"
              ? "rgba(198,166,107,0)"
              : "rgba(245,245,245,0.8)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <span
          className="rounded-full border"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderColor: "inherit",
          }}
        />
        <AnimatePresence>
          {variant === "view" && label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="font-display text-[11px] tracking-[0.18em] uppercase text-[#0a0a0a]"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Precise dot */}
      <motion.div
        className="fixed left-0 top-0 rounded-full bg-[#f5f5f5]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          width: variant === "default" ? 5 : 0,
          height: variant === "default" ? 5 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
}
