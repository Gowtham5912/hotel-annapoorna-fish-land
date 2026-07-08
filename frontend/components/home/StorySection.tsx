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
      className="relative overflow-hidden border-t border-white/5 bg-[#061a22] py-24 md:py-32"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#071922_0%,#0b2225_35%,#0f2c23_100%)]" />

      {/* Green / mist glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(34,197,94,0.08),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.08),transparent_26%)]" />

      {/* Floating mist blobs */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], opacity: [0.16, 0.24, 0.16] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -30, 20, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute right-[-5%] top-16 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"
      />

      {/* -------- Mountain Layers -------- */}

      {/* Far mountains */}
      <motion.div
        animate={{ x: ["0%", "-2%", "0%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 h-[320px] bg-[#0a2a2f]/80"
        style={{
          clipPath:
            "polygon(0% 100%, 0% 58%, 10% 46%, 18% 55%, 28% 34%, 38% 52%, 48% 30%, 58% 48%, 68% 36%, 78% 54%, 88% 42%, 100% 58%, 100% 100%)",
        }}
      />

      {/* Mid mountains */}
      <motion.div
        animate={{ x: ["0%", "2%", "0%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 h-[270px] bg-[#12382f]/90"
        style={{
          clipPath:
            "polygon(0% 100%, 0% 68%, 8% 60%, 16% 66%, 26% 44%, 36% 60%, 46% 40%, 56% 62%, 66% 46%, 76% 64%, 86% 50%, 100% 70%, 100% 100%)",
        }}
      />

      {/* Front hill layer */}
      <motion.div
        animate={{ x: ["0%", "-1.5%", "0%"], y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 h-[220px] bg-[#1b4b35]"
        style={{
          clipPath:
            "polygon(0% 100%, 0% 78%, 10% 72%, 20% 82%, 30% 64%, 40% 80%, 50% 60%, 60% 82%, 70% 68%, 80% 84%, 90% 72%, 100% 80%, 100% 100%)",
        }}
      />

      {/* Low foreground ground */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[#143626]" />

      {/* Mist strips */}
      <motion.div
        animate={{ x: ["0%", "4%", "0%"], opacity: [0.16, 0.28, 0.16] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute bottom-32 left-0 h-16 w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] blur-2xl"
      />

      <motion.div
        animate={{ x: ["0%", "-3%", "0%"], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 17, ease: "easeInOut" }}
        className="absolute bottom-24 left-0 h-14 w-full bg-[linear-gradient(90deg,transparent,rgba(220,252,231,0.10),transparent)] blur-2xl"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-[92%] max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left content */}
        <div>
          <SectionHeading
            eyebrow="Coast meets Malnad"
            title="Inspired by coastal seafood, grounded in Chikkamagaluru’s greenery"
            description="Experience a beautiful culinary convergence where the rich, vibrant flavors of the ocean meet the serene, mist-kissed hills of Chikkamagaluru. We bring the authentic spirit of coastal dining into the heart of Malnad’s lush greenery, creating a comforting destination stop for travelers and food lovers alike."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">
                Elevated Mountain Comfort
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300/80">
                Unwind in the cool, tranquil air of Chikkamagaluru. Surrounded by green valleys and a laid-back travel vibe, our space offers the perfect earthy, relaxed atmosphere to sit back, pause your journey, and savor a truly memorable meal.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">
                Authentic Ocean Flavors
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300/80">
                At the heart of our kitchen is a passion for the sea. From our legendary signature fish meals and crispy tawa fries to perfectly spiced prawns, every dish delivers a premium, spice-infused taste of the coast right to your plate.
              </p>
            </div>
          </div>
        </div>

        {/* Right visual content card */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          {/* Glass glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.12),transparent_30%)]" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
              Our story
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Coastal roots, homely flavours, served in the heart of Chikkamagaluru
            </h3>

            <p className="mt-4 text-sm leading-8 text-slate-300/85 md:text-base">
              Hotel Annapoorna Fish Land brings the comfort of coastal-style seafood
              cooking to Chikkamagaluru. While the restaurant is located amidst the
              greenery and calm of the hills, the soul of the food comes from the
              flavours of the coast — simple, fresh, satisfying, and deeply homely.
              Every meal is meant to feel less like restaurant food and more like a
              plate served with the warmth of home.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-emerald-300/10 bg-slate-950/25 p-4">
                <p className="text-sm font-medium text-white">
                  Coastal-inspired homely meals
                </p>
                <p className="mt-1 text-sm text-slate-300/80">
                  Fish meals, fry, and everyday favourites prepared in a style that
                  feels comforting, familiar, and rooted in home-style cooking.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-300/10 bg-slate-950/25 p-4">
                <p className="text-sm font-medium text-white">
                  A seafood stop for travellers and locals
                </p>
                <p className="mt-1 text-sm text-slate-300/80">
                  Whether you are exploring Chikkamagaluru or simply craving a proper
                  fish meal, Annapoorna Fish Land is meant to be a welcoming stop for
                  fresh seafood and satisfying homely food.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating small accent card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 shadow-xl backdrop-blur-xl"
        >
          <p className="text-sm font-semibold text-white">Coastal taste, hill-town comfort</p>
          <p className="text-xs text-emerald-200/75">
            Homely seafood • fresh flavours • Chikkamagaluru warmth
          </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
}