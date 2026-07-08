"use client";

import { motion } from "framer-motion";

type AnimatedSkyProps = {
  isDark?: boolean;
};

export default function AnimatedSky({ isDark = true }: AnimatedSkyProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main sky gradient */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[linear-gradient(180deg,#03131f_0%,#0a2740_28%,#13465a_55%,#0b3c45_100%)]"
            : "bg-[linear-gradient(180deg,#fff3c4_0%,#ffd9a0_22%,#ffb36b_42%,#5cc6d0_72%,#1f7f8d_100%)]"
        }`}
      />

      {/* Sun / sunset glow */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.04, 1],
          opacity: isDark ? [0.5, 0.7, 0.5] : [0.75, 0.95, 0.75],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className={`absolute left-1/2 top-[12%] h-24 w-24 -translate-x-1/2 rounded-full blur-2xl sm:top-[14%] sm:h-32 sm:w-32 md:top-[16%] md:h-56 md:w-56 ${
          isDark ? "bg-orange-300/35" : "bg-yellow-200/70"
        }`}
      />

      {/* Atmospheric color glow - left */}
      <motion.div
        animate={{ x: [0, 20, -10, 0], opacity: [0.18, 0.3, 0.18] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className={`absolute left-[-10%] top-[10%] h-40 w-40 rounded-full blur-3xl sm:left-[2%] sm:top-[10%] sm:h-56 sm:w-56 md:left-[8%] md:top-[12%] md:h-72 md:w-72 ${
          isDark ? "bg-cyan-300/10" : "bg-pink-200/30"
        }`}
      />

      {/* Atmospheric color glow - right */}
      <motion.div
        animate={{ x: [0, -20, 15, 0], opacity: [0.16, 0.28, 0.16] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className={`absolute right-[-10%] top-[14%] h-40 w-40 rounded-full blur-3xl sm:right-[2%] sm:top-[16%] sm:h-56 sm:w-56 md:right-[8%] md:top-[18%] md:h-72 md:w-72 ${
          isDark ? "bg-emerald-300/10" : "bg-orange-200/30"
        }`}
      />
    </div>
  );
}