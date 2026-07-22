"use client";

import { useEffect, useState } from "react";
import { RoseGemIcon } from "./icons";

const MIN_DISPLAY_MS = 550;
const CURTAIN_MS = 550;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), MIN_DISPLAY_MS);
    const removeTimer = setTimeout(
      () => setVisible(false),
      MIN_DISPLAY_MS + CURTAIN_MS,
    );
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-cream transition-transform duration-[550ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        exiting ? "pointer-events-none -translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`flex flex-col items-center gap-2 transition-[transform,opacity] duration-[300ms] ease-out ${
          exiting ? "scale-110 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <RoseGemIcon
          className={`h-16 w-16 ${exiting ? "" : "animate-loader-pulse"}`}
        />
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          Candy More
        </span>
      </div>
      <span className="sr-only">Loading Candy More Floral</span>
    </div>
  );
}
