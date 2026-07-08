"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Fish, Mountain } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryCards = [
  {
    title: "Chikkamagaluru Destination",
    description:
      "Located in the heart of Chikkamagaluru, Annapoorna Fish Land offers travellers, families, and locals a welcoming seafood stop surrounded by the calm and greenery of the hills.",
    icon: Mountain,
    image: "/chikkamagaluru-spot.jpg",
    gradient:
      "bg-[linear-gradient(180deg,rgba(6,78,99,0.18)_0%,rgba(8,47,73,0.60)_48%,rgba(4,20,32,0.92)_100%)]",
    glow: "from-cyan-400/20 to-emerald-400/20",
    label: "Destination feel",
  },
  {
    title: "Restaurant Ambience",
    description:
      "A warm dine-in atmosphere that reflects family-friendly hospitality, calm interiors, and the welcoming feel of a homely seafood stop.",
    icon: Camera,
    image: "/hotel-ambience.jpeg",
    gradient:
      "bg-[linear-gradient(180deg,rgba(16,185,129,0.10)_0%,rgba(8,47,73,0.65)_52%,rgba(4,20,32,0.94)_100%)]",
    glow: "from-emerald-400/20 to-cyan-400/15",
    label: "Ambience",
  },
  {
    title: "Dining Experience",
    description:
      "Our food carries the soul of the coast — fish meals, fresh fry, kori rotti, neer dose, and rich gravies prepared in a comforting style that feels close to mother-cooked food.",
    icon: Fish,
    image: "/hotel-dining1.png",
    gradient:
      "bg-[linear-gradient(180deg,rgba(251,191,36,0.10)_0%,rgba(21,94,117,0.60)_50%,rgba(4,20,32,0.94)_100%)]",
    glow: "from-amber-300/15 to-emerald-400/15",
    label: "Hotel visuals",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-t border-white/5 bg-[#04131b] py-24 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#04131b_0%,#071c26_42%,#0a2326_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.08),transparent_22%),radial-gradient(circle_at_50%_85%,rgba(6,182,212,0.08),transparent_28%)]" />

      {/* Ambient glow blobs */}
      <motion.div
        animate={{ x: [0, 24, -12, 0], y: [0, -10, 8, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute left-[-5%] top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -20, 12, 0], y: [0, 10, -6, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute right-[-5%] top-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual experience section for food, ambience, and destination feel"
          description="Enjoy comforting seafood dishes, a warm family-style dining atmosphere, and the Chikkamagaluru setting that makes every visit feel relaxed and memorable."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Large left card */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
          >
            {/* image */}
            <div className="absolute inset-0">
              <Image
                src={galleryCards[0].image}
                alt={galleryCards[0].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* dark base */}
            <div className="absolute inset-0 bg-slate-950/35 transition duration-500 group-hover:bg-slate-950/10" />

            {/* themed overlay - fades on hover */}
            <div
              className={`absolute inset-0 ${galleryCards[0].gradient} transition duration-500 group-hover:opacity-0`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${galleryCards[0].glow} opacity-70 transition duration-500 group-hover:opacity-20`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,27,0.08)_0%,rgba(4,19,27,0.30)_40%,rgba(4,19,27,0.88)_100%)] transition duration-500 group-hover:opacity-20" />

            {/* top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10 transition duration-500 group-hover:translate-y-3 group-hover:opacity-0">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 text-cyan-200 shadow-lg backdrop-blur-md">
                  <Mountain className="h-7 w-7" />
                </div>

                <span className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs font-medium tracking-wide text-emerald-100/90 backdrop-blur-md">
                  {galleryCards[0].label}
                </span>
              </div>

              <div className="max-w-xl">
                <h3 className="text-3xl font-semibold text-white md:text-4xl">
                  {galleryCards[0].title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-8 text-slate-100/85 md:text-base">
                  {galleryCards[0].description}
                </p>
              </div>
            </div>
          </motion.article>

          {/* Right stacked cards */}
          <div className="grid gap-6">
            {galleryCards.slice(1).map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="group relative min-h-[220px] overflow-hidden rounded-[2rem] border border-white/10 shadow-xl"
                >
                  {/* image */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* dark base */}
                  <div className="absolute inset-0 bg-slate-950/40 transition duration-500 group-hover:bg-slate-950/10" />

                  {/* themed overlays fade on hover */}
                  <div
                    className={`absolute inset-0 ${card.gradient} transition duration-500 group-hover:opacity-0`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-65 transition duration-500 group-hover:opacity-20`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,27,0.08)_0%,rgba(4,19,27,0.34)_42%,rgba(4,19,27,0.90)_100%)] transition duration-500 group-hover:opacity-20" />

                  {/* top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  {/* content */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8 transition duration-500 group-hover:translate-y-3 group-hover:opacity-0">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 text-cyan-200 shadow-lg backdrop-blur-md">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs font-medium tracking-wide text-emerald-100/90 backdrop-blur-md">
                        {card.label}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-100/85">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}