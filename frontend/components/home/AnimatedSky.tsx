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
        className={`absolute left-1/2 top-[16%] h-40 w-40 -translate-x-1/2 rounded-full blur-2xl md:h-56 md:w-56 ${
          isDark
            ? "bg-orange-300/35"
            : "bg-yellow-200/70"
        }`}
      />

      {/* Atmospheric color glow */}
      <motion.div
        animate={{ x: [0, 20, -10, 0], opacity: [0.18, 0.3, 0.18] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className={`absolute left-[8%] top-[12%] h-72 w-72 rounded-full blur-3xl ${
          isDark ? "bg-cyan-300/10" : "bg-pink-200/30"
        }`}
      />

      <motion.div
        animate={{ x: [0, -20, 15, 0], opacity: [0.16, 0.28, 0.16] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className={`absolute right-[8%] top-[18%] h-72 w-72 rounded-full blur-3xl ${
          isDark ? "bg-emerald-300/10" : "bg-orange-200/30"
        }`}
      />
    </div>
  );
}