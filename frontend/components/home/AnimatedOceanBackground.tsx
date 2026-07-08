"use client";

import { motion } from "framer-motion";
import AnimatedSky from "@/components/home/AnimatedSky";
import AnimatedFish from "@/components/home/AnimatedFish";

const particles = Array.from({ length: 12 }, (_, i) => i);

type AnimatedOceanBackgroundProps = {
  isDark?: boolean;
};

export default function AnimatedOceanBackground({
  isDark = true,
}: AnimatedOceanBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatedSky isDark={isDark} />

      {/* Water tint overlay */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[linear-gradient(180deg,rgba(3,19,31,0)_0%,rgba(4,27,41,0.06)_36%,rgba(4,33,42,0.24)_62%,rgba(6,43,50,0.68)_100%)] md:bg-[linear-gradient(180deg,rgba(3,19,31,0)_0%,rgba(4,27,41,0.08)_38%,rgba(4,33,42,0.28)_60%,rgba(6,43,50,0.62)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(120,220,230,0.05)_40%,rgba(35,160,170,0.18)_62%,rgba(15,110,120,0.52)_100%)] md:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(120,220,230,0.06)_40%,rgba(35,160,170,0.22)_62%,rgba(15,110,120,0.5)_100%)]"
        }`}
      />

      {/* Fish movement */}
      <AnimatedFish />

      {/* Ocean wave 1 */}
      <motion.div
        animate={{ x: ["0%", "-10%", "0%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className={`absolute bottom-28 left-[-20%] h-24 w-[145%] blur-xl sm:bottom-32 sm:left-[-16%] sm:h-32 sm:w-[138%] md:bottom-40 md:left-[-15%] md:h-44 md:w-[130%] ${
          isDark ? "bg-cyan-400/10" : "bg-white/18"
        }`}
        style={{
          clipPath:
            "polygon(0% 55%, 8% 48%, 16% 54%, 24% 46%, 32% 55%, 40% 48%, 48% 56%, 56% 47%, 64% 54%, 72% 46%, 80% 56%, 88% 49%, 100% 55%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Ocean wave 2 */}
      <motion.div
        animate={{ x: ["0%", "8%", "0%"], y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className={`absolute bottom-16 left-[-16%] h-32 w-[138%] blur-lg sm:bottom-20 sm:left-[-12%] sm:h-40 sm:w-[130%] md:bottom-24 md:left-[-10%] md:h-52 md:w-[125%] ${
          isDark ? "bg-cyan-300/16" : "bg-cyan-50/28"
        }`}
        style={{
          clipPath:
            "polygon(0% 60%, 10% 50%, 20% 62%, 30% 48%, 40% 60%, 50% 52%, 60% 64%, 70% 50%, 80% 60%, 90% 48%, 100% 58%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Ocean wave 3 */}
      <motion.div
        animate={{ x: ["0%", "-6%", "0%"], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className={`absolute bottom-[-10px] left-[-12%] h-40 w-[132%] blur-md sm:left-[-10%] sm:h-48 sm:w-[126%] md:left-[-8%] md:h-64 md:w-[120%] ${
          isDark ? "bg-teal-300/22" : "bg-cyan-100/35"
        }`}
        style={{
          clipPath:
            "polygon(0% 62%, 8% 52%, 16% 64%, 24% 48%, 32% 60%, 40% 50%, 48% 66%, 56% 52%, 64% 62%, 72% 48%, 80% 64%, 88% 50%, 100% 60%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Surface shimmer */}
      <motion.div
        animate={{
          x: ["-10%", "10%", "-10%"],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 left-0 h-16 w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] blur-2xl sm:bottom-24 sm:h-20 md:bottom-28 md:h-24"
      />

      {/* Light reflection under sun */}
      <motion.div
        animate={{ opacity: [0.16, 0.28, 0.16], scaleY: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className={`absolute left-1/2 top-[38%] h-[34%] w-14 -translate-x-1/2 blur-3xl sm:top-[35%] sm:h-[38%] sm:w-20 md:top-[32%] md:h-[42%] md:w-24 ${
          isDark ? "bg-orange-200/15" : "bg-yellow-100/35"
        }`}
      />

      {/* Bubbles / water particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => {
          const left = 5 + ((particle * 8) % 90);
          const size = 4 + (particle % 3) * 2;
          const duration = 10 + (particle % 4) * 2;
          const delay = particle * 0.7;

          return (
            <motion.span
              key={particle}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: [0, 0.24, 0],
                y: [30, -140, -180],
                x: [0, particle % 2 === 0 ? 8 : -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration,
                delay,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 rounded-full bg-white/25 blur-[1px]"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}