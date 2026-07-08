"use client";

import { motion } from "framer-motion";

type FishProps = {
  className?: string;
};

function FishSilhouette({ className = "" }: FishProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M102 30c-9-12-24-18-41-18-19 0-33 7-45 18 12 11 26 18 45 18 17 0 32-6 41-18Zm-70 0c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7Zm76 0 12-12v24l-12-12Z" />
    </svg>
  );
}

export default function AnimatedFish() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Fish 1 */}
      <motion.div
        initial={{ x: "-20vw", y: 0, opacity: 0 }}
        animate={{
          x: "120vw",
          y: [-10, 10, -6, 0],
          opacity: [0, 0.22, 0.22, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
          delay: 0,
        }}
        className="absolute left-0 top-[48%] text-cyan-100/25 sm:top-[44%] md:top-[42%]"
      >
        <FishSilhouette className="h-8 w-16 -scale-x-100 sm:h-10 sm:w-20 md:h-12 md:w-24" />
      </motion.div>

      {/* Fish 2 */}
      <motion.div
        initial={{ x: "-25vw", y: 0, opacity: 0 }}
        animate={{
          x: "120vw",
          y: [8, -10, 4, 0],
          opacity: [0, 0.16, 0.16, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
          delay: 3,
        }}
        className="absolute left-0 top-[64%] text-emerald-100/20 sm:top-[60%] md:top-[58%]"
      >
        <FishSilhouette className="h-7 w-14 -scale-x-100 sm:h-9 sm:w-18 md:h-10 md:w-20" />
      </motion.div>

      {/* Fish 3 */}
      <motion.div
        initial={{ x: "-15vw", y: 0, opacity: 0 }}
        animate={{
          x: "115vw",
          y: [0, -12, 10, 0],
          opacity: [0, 0.12, 0.12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 32,
          ease: "linear",
          delay: 7,
        }}
        className="absolute left-0 top-[76%] text-cyan-50/15 sm:top-[72%] md:top-[68%]"
      >
        <FishSilhouette className="h-6 w-12 -scale-x-100 sm:h-7 sm:w-14 md:h-8 md:w-16" />
      </motion.div>
    </div>
  );
}