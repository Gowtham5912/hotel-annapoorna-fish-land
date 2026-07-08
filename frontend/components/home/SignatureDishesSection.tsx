"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fish, Flame, UtensilsCrossed } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const dishes = [
  {
    title: "Annapoorna Fish Meals",
    description:
      "A comforting full meal experience built around fresh fish flavours, rice, sides, and a satisfying coastal touch.",
    icon: UtensilsCrossed,
    badge: "Signature",
    image: "/fish_meals.jpg",
    accent: "from-cyan-500/25 via-cyan-900/10 to-emerald-500/20",
  },
  {
    title: "Coastal Fish Fry",
    description:
      "Crisp, spicy and flavourful fish fry styled as the star dish for travellers looking for a memorable seafood stop.",
    icon: Flame,
    badge: "Popular",
    image: "/fish_fry.jpeg",
    accent: "from-orange-500/25 via-rose-900/10 to-red-500/20",
  },
  {
    title: "Coastal Bread Basket ",
    description:
      "Crisp Kori Rotti paired with rich gassi and light, lacy Neer Dose—brought straight from shore to the hills.",
    icon: Fish,
    badge: "Chef’s Pick",
    image: "/kori-roti.jpeg",
    accent: "from-emerald-500/25 via-teal-900/10 to-cyan-500/20",
  },
];

export default function SignatureDishesSection() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden border-t border-white/5 bg-[#041722] py-24 md:py-28"
    >
      {/* background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#041722_0%,#08212f_42%,#0b2c2f_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_22%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.08),transparent_28%)]" />

      {/* floating glow */}
      <motion.div
        animate={{ x: [0, 25, -10, 0], y: [0, -10, 6, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute left-[-6%] top-12 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -20, 12, 0], y: [0, 14, -6, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute right-[-4%] top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Signature dishes"
          title="Signature ocean catches crafted to define your food story."
          description="From ocean waves straight to your plate, experience authentic coastal heritage. Indulge in legendary, spice-crusted tawa fish fries, rich and fiery ghee roasts, and the morning's freshest seafood catch cooked the traditional way."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dishes.map((dish, index) => {
            const Icon = dish.icon;

            return (
              <motion.article
                key={dish.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 shadow-xl"
              >
                {/* background image */}
                <div className="absolute inset-0">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* dark overlay for readability */}
                <div className="absolute inset-0 bg-slate-950/60" />

                {/* accent overlay matching site theme */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${dish.accent} opacity-80`}
                />

                {/* subtle glass tint */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,23,34,0.15)_0%,rgba(4,23,34,0.55)_45%,rgba(4,23,34,0.88)_100%)]" />

                {/* top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="relative z-10 flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 text-cyan-200 shadow-lg backdrop-blur-md">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs font-medium tracking-wide text-emerald-100/90 backdrop-blur-md">
                      {dish.badge}
                    </span>
                  </div>

                  <div className="mt-auto pt-20">
                    <h3 className="text-2xl font-semibold text-white drop-shadow-sm">
                      {dish.title}
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-slate-100/85">
                      {dish.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                      <p className="text-sm font-medium text-cyan-200/90">
                        Featured seafood experience
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}