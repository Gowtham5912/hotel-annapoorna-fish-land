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
            ? "bg-[linear-gradient(180deg,rgba(3,19,31,0)_0%,rgba(4,27,41,0.08)_38%,rgba(4,33,42,0.28)_60%,rgba(6,43,50,0.62)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(120,220,230,0.06)_40%,rgba(35,160,170,0.22)_62%,rgba(15,110,120,0.5)_100%)]"
        }`}
      />

      {/* Fish movement */}
      <AnimatedFish />

      {/* Ocean wave 1 */}
      <motion.div
        animate={{ x: ["0%", "-10%", "0%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className={`absolute bottom-40 left-[-15%] h-44 w-[130%] blur-xl ${
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
        className={`absolute bottom-24 left-[-10%] h-52 w-[125%] blur-lg ${
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
        className={`absolute bottom-[-10px] left-[-8%] h-64 w-[120%] blur-md ${
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
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-28 left-0 h-24 w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] blur-2xl"
      />

      {/* Light reflection under sun */}
      <motion.div
        animate={{ opacity: [0.18, 0.32, 0.18], scaleY: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className={`absolute left-1/2 top-[32%] h-[42%] w-24 -translate-x-1/2 blur-3xl ${
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
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: [0, 0.28, 0],
                y: [40, -220],
                x: [0, particle % 2 === 0 ? 10 : -10, 0],
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