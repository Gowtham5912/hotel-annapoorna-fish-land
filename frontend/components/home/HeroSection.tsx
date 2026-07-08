"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AnimatedOceanBackground from "@/components/home/AnimatedOceanBackground";

type HeroSectionProps = {
  isDarkMode: boolean;
};

export default function HeroSection({ isDarkMode }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatedOceanBackground isDark={isDarkMode} />

      {/* overlay */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-[linear-gradient(180deg,rgba(3,19,31,0.74)_0%,rgba(3,19,31,0.58)_38%,rgba(3,19,31,0.38)_100%)] md:bg-[linear-gradient(90deg,rgba(3,19,31,0.72)_0%,rgba(3,19,31,0.45)_45%,rgba(3,19,31,0.18)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(20,30,36,0.34)_0%,rgba(20,30,36,0.22)_38%,rgba(20,30,36,0.10)_100%)] md:bg-[linear-gradient(90deg,rgba(20,30,36,0.32)_0%,rgba(20,30,36,0.18)_45%,rgba(20,30,36,0.08)_100%)]"
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-[92%] max-w-7xl items-center pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-28 md:pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`inline-flex max-w-full rounded-full border px-3 py-2 text-[11px] leading-5 backdrop-blur-md sm:px-4 sm:text-xs md:text-sm ${
              isDarkMode
                ? "border-emerald-200/15 bg-white/5 text-emerald-100/85"
                : "border-slate-900/10 bg-white/35 text-slate-800"
            }`}
          >
            From Sun-Kissed Coasts to Misty Peaks: A Culinary Journey in the Heart of Chikkamagaluru
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className={`mt-5 text-[2.3rem] font-bold leading-[1.05] sm:text-5xl md:mt-6 md:text-7xl md:leading-[1.05] ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Hotel Annapoorna
            <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
              Fish Land
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 md:mt-6 md:text-lg ${
              isDarkMode ? "text-slate-200/85" : "text-slate-800/90"
            }`}
          >
            Experience comforting coastal flavours in the heart of Chikkamagaluru.
            From homely fish meals and crisp fish fry to warm hospitality and a
            relaxed family dining space, Annapoorna Fish Land brings the taste of
            the coast to the calm of the hills.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <PrimaryButton href="#menu-preview">Explore Menu</PrimaryButton>
            <PrimaryButton href="#visit" variant="secondary">
              Plan Your Visit
            </PrimaryButton>
          </motion.div>

          {/* Bottom feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
          >
            <div
              className={`rounded-2xl border px-4 py-4 backdrop-blur-xl ${
                isDarkMode
                  ? "border-white/10 bg-white/5"
                  : "border-slate-900/10 bg-white/35"
              }`}
            >
              <p
                className={`text-base font-semibold sm:text-lg ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Fresh Seafood
              </p>
              <p
                className={`mt-1 text-sm leading-6 ${
                  isDarkMode ? "text-slate-300/85" : "text-slate-800/80"
                }`}
              >
                Fish meals, fish fry, and comforting coastal flavours.
              </p>
            </div>

            <div
              className={`rounded-2xl border px-4 py-4 backdrop-blur-xl ${
                isDarkMode
                  ? "border-white/10 bg-white/5"
                  : "border-slate-900/10 bg-white/35"
              }`}
            >
              <p
                className={`text-base font-semibold sm:text-lg ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                The Ultimate Pitstop
              </p>
              <p
                className={`mt-1 text-sm leading-6 ${
                  isDarkMode ? "text-slate-300/85" : "text-slate-800/80"
                }`}
              >
                A reliable stop for travellers and families looking for a satisfying meal.
              </p>
            </div>

            <div
              className={`rounded-2xl border px-4 py-4 backdrop-blur-xl sm:col-span-2 lg:col-span-1 ${
                isDarkMode
                  ? "border-white/10 bg-white/5"
                  : "border-slate-900/10 bg-white/35"
              }`}
            >
              <p
                className={`text-base font-semibold sm:text-lg ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Hillside Harmony
              </p>
              <p
                className={`mt-1 text-sm leading-6 ${
                  isDarkMode ? "text-slate-300/85" : "text-slate-800/80"
                }`}
              >
                Coastal taste served in the calm, green surroundings of Chikkamagaluru.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}