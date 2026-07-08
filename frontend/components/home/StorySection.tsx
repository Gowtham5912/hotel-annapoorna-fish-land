"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

type StorySectionProps = {
  isDarkMode: boolean;
};

export default function StorySection({ isDarkMode }: StorySectionProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-[#061a22] py-20 md:py-32"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#071922_0%,#0b2225_35%,#0f2c23_100%)]" />

      {/* Green / mist glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(34,197,94,0.08),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.08),transparent_26%)]" />

      {/* Floating mist blobs */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], opacity: [0.16, 0.24, 0.16] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute left-[-18%] top-20 h-52 w-52 rounded-full bg-emerald-300/10 blur-3xl sm:left-[-10%] sm:h-64 sm:w-64 md:top-24 md:h-72 md:w-72"
      />

      <motion.div
        animate={{ x: [0, -30, 20, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute right-[-12%] top-14 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl sm:right-[-5%] sm:h-72 sm:w-72 md:top-16 md:h-80 md:w-80"
      />

      {/* -------- Mountain Layers -------- */}

      {/* Far mountains */}
      <motion.div
        animate={{ x: ["0%", "-2%", "0%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 h-[180px] bg-[#0a2a2f]/80 sm:h-[240px] md:h-[320px]"
        style={{
          clipPath:
            "polygon(0% 100%, 0% 58%, 10% 46%, 18% 55%, 28% 34%, 38% 52%, 48% 30%, 58% 48%, 68% 36%, 78% 54%, 88% 42%, 100% 58%, 100% 100%)",
        }}
      />

      {/* Mid mountains */}
      <motion.div
        animate={{ x: ["0%", "2%", "0%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 h-[150px] bg-[#12382f]/90 sm:h-[210px] md:h-[270px]"
        style={{
          clipPath:
            "polygon(0% 100%, 0% 68%, 8% 60%, 16% 66%, 26% 44%, 36% 60%, 46% 40%, 56% 62%, 66% 46%, 76% 64%, 86% 50%, 100% 70%, 100% 100%)",
        }}
      />

      {/* Front hill layer */}
      <motion.div
        animate={{ x: ["0%", "-1.5%", "0%"], y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 h-[120px] bg-[#1b4b35] sm:h-[170px] md:h-[220px]"
        style={{
          clipPath:
            "polygon(0% 100%, 0% 78%, 10% 72%, 20% 82%, 30% 64%, 40% 80%, 50% 60%, 60% 82%, 70% 68%, 80% 84%, 90% 72%, 100% 80%, 100% 100%)",
        }}
      />

      {/* Low foreground ground */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-[#143626] sm:h-20 md:h-24" />

      {/* Mist strips */}
      <motion.div
        animate={{ x: ["0%", "4%", "0%"], opacity: [0.16, 0.28, 0.16] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute bottom-20 left-0 h-12 w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] blur-2xl sm:bottom-28 sm:h-14 md:bottom-32 md:h-16"
      />

      <motion.div
        animate={{ x: ["0%", "-3%", "0%"], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 17, ease: "easeInOut" }}
        className="absolute bottom-14 left-0 h-10 w-full bg-[linear-gradient(90deg,transparent,rgba(220,252,231,0.10),transparent)] blur-2xl sm:bottom-20 sm:h-12 md:bottom-24 md:h-14"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-[92%] max-w-7xl items-start gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        {/* Left content */}
        <div>
          <SectionHeading
            eyebrow="Coast meets Malnad"
            title="Inspired by coastal seafood, grounded in Chikkamagaluru’s greenery"
            description="Hotel Annapoorna Fish Land brings together coastal-style seafood and the calm atmosphere of Chikkamagaluru. It’s a place where comforting fish meals, fresh fry, and homely flavours meet the relaxed feel of the hills."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md md:rounded-3xl md:p-6">
              <h3 className="text-base font-semibold text-white md:text-lg">
                Hill-town comfort
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300/80">
                Set in the calm of Chikkamagaluru, the restaurant offers a relaxed
                stop where travellers and families can enjoy a satisfying meal in a
                simple and welcoming atmosphere.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md md:rounded-3xl md:p-6">
              <h3 className="text-base font-semibold text-white md:text-lg">
                Coastal homely flavours
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300/80">
                From fish meals and crisp fish fry to everyday seafood favourites,
                the food is rooted in coastal taste and served with the warmth of
                home-style cooking.
              </p>
            </div>
          </div>
        </div>

        {/* Right visual content card */}
        <div className="relative pb-0 sm:pb-4 md:pb-8">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl md:rounded-[2rem] md:p-6">
            {/* Glass glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.12),transparent_30%)]" />

            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200/70 sm:text-xs md:text-sm">
                Our story
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl">
                Coastal roots, homely flavours, served in the heart of Chikkamagaluru
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300/85 md:text-base md:leading-8">
                Hotel Annapoorna Fish Land brings the comfort of coastal-style
                seafood cooking to Chikkamagaluru. While the restaurant is located
                amidst the greenery and calm of the hills, the soul of the food
                comes from the flavours of the coast — simple, fresh, satisfying,
                and deeply homely.
              </p>

              <div className="mt-6 space-y-3 md:mt-8 md:space-y-4">
                <div className="rounded-2xl border border-emerald-300/10 bg-slate-950/25 p-4">
                  <p className="text-sm font-medium text-white">
                    Coastal-inspired homely meals
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300/80">
                    Fish meals, fry, and everyday favourites prepared in a style
                    that feels comforting, familiar, and rooted in home-style
                    cooking.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/10 bg-slate-950/25 p-4">
                  <p className="text-sm font-medium text-white">
                    A seafood stop for travellers and locals
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300/80">
                    A welcoming stop in Chikkamagaluru for fresh seafood, fish
                    meals, and satisfying homely food.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative mt-4 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 shadow-xl backdrop-blur-xl sm:absolute sm:-bottom-4 sm:left-4 sm:mt-0 sm:max-w-[260px] md:-bottom-6 md:-left-4 md:px-5 md:py-4"
          >
            <p className="text-sm font-semibold text-white">
              Coastal taste, hill-town comfort
            </p>
            <p className="mt-1 text-xs leading-5 text-emerald-200/75">
              Homely seafood • fresh flavours • Chikkamagaluru warmth
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}