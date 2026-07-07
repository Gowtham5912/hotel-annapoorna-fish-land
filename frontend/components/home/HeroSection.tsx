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

      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-[linear-gradient(90deg,rgba(3,19,31,0.72)_0%,rgba(3,19,31,0.45)_45%,rgba(3,19,31,0.18)_100%)]"
            : "bg-[linear-gradient(90deg,rgba(20,30,36,0.32)_0%,rgba(20,30,36,0.18)_45%,rgba(20,30,36,0.08)_100%)]"
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-[92%] max-w-7xl items-center pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`mb-4 inline-flex rounded-full border px-4 py-2 text-sm backdrop-blur-md ${
              isDarkMode
                ? "border-emerald-200/15 bg-white/5 text-emerald-100/85"
                : "border-slate-900/10 bg-white/35 text-slate-800"
            }`}
          >
            From Sun-Kissed Coasts to Misty Peaks: A Culinary Journey in the Heart of Chikmagaluru
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className={`text-4xl font-bold leading-tight sm:text-5xl md:text-7xl md:leading-[1.05] ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Hotel Annapoorna
            <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
              Fish Land
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${
              isDarkMode ? "text-slate-200/85" : "text-slate-800/90"
            }`}
          >
            Discover a dining sanctuary that blends the crisp, fresh catch of the coast with the misty, calming wilderness of Chikmagalur. Whether you are a traveler seeking comfort or a local celebrating tradition, join us to indulge in signature seafood and rich, heartwarming flavors designed to delight every palate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <PrimaryButton href="#menu">Explore Menu</PrimaryButton>
            <PrimaryButton href="#visit" variant="secondary">
              Plan Your Visit
            </PrimaryButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className={`mt-10 flex flex-wrap gap-6 text-sm ${
              isDarkMode ? "text-slate-300/85" : "text-slate-800/80"
            }`}
          >
            <div>
              <p className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Fresh Seafood
              </p>
              <p>Fish meals, fry, coastal flavours</p>
            </div>
            <div>
              <p className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                 The Ultimate Pitstop
              </p>
              <p>Find Us Instantly on Your Journey, Your Place to Unwind and Refuel</p>
            </div>
            <div>
              <p className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Hillside Harmony
              </p>
              <p>Ocean shades meet estate greenery.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}