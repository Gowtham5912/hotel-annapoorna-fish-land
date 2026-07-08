"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Fish, Mountain } from "lucide-react";
import { useState } from "react";
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

type GalleryCardProps = {
  card: (typeof galleryCards)[number];
  large?: boolean;
  delay?: number;
};

function GalleryCard({ card, large = false, delay = 0 }: GalleryCardProps) {
  const [revealed, setRevealed] = useState(false);
  const Icon = card.icon;

  const wrapperHeights = large
    ? "min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]"
    : "min-h-[240px] sm:min-h-[260px] lg:min-h-[220px]";

  const iconSize = large
    ? "h-12 w-12 sm:h-14 sm:w-14"
    : "h-11 w-11 sm:h-12 sm:w-12";

  const iconInner = large ? "h-6 w-6 sm:h-7 sm:w-7" : "h-5 w-5 sm:h-6 sm:w-6";

  const titleClass = large
    ? "text-2xl font-semibold text-white sm:text-3xl lg:text-4xl"
    : "text-xl font-semibold text-white sm:text-2xl";

  const paddingClass = large ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6 lg:p-8";

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      onClick={() => setRevealed((prev) => !prev)}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-xl md:rounded-[2rem] ${wrapperHeights} cursor-pointer`}
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
      <div
        className={`absolute inset-0 transition duration-500 ${
          revealed
            ? "bg-slate-950/10"
            : "bg-slate-950/40 group-hover:bg-slate-950/10"
        }`}
      />

      {/* themed overlays */}
      <div
        className={`absolute inset-0 ${card.gradient} transition duration-500 ${
          revealed ? "opacity-0" : "group-hover:opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.glow} transition duration-500 ${
          revealed
            ? "opacity-20"
            : "opacity-65 group-hover:opacity-20"
        }`}
      />
      <div
        className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,27,0.08)_0%,rgba(4,19,27,0.30)_40%,rgba(4,19,27,0.88)_100%)] transition duration-500 ${
          revealed ? "opacity-20" : "group-hover:opacity-20"
        }`}
      />

      {/* top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* content */}
      <div
        className={`relative z-10 flex h-full flex-col justify-between ${paddingClass} transition duration-500 ${
          revealed
            ? "translate-y-3 opacity-0"
            : "group-hover:translate-y-3 group-hover:opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div
            className={`flex ${iconSize} items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 text-cyan-200 shadow-lg backdrop-blur-md`}
          >
            <Icon className={iconInner} />
          </div>

          <span className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-100/90 backdrop-blur-md sm:text-xs">
            {card.label}
          </span>
        </div>

        <div className={large ? "max-w-xl" : ""}>
          <h3 className={titleClass}>{card.title}</h3>
          <p
            className={`mt-3 text-sm text-slate-100/85 sm:mt-4 ${
              large ? "max-w-lg leading-7 sm:leading-8 md:text-base" : "leading-7"
            }`}
          >
            {card.description}
          </p>

          {/* mobile hint */}
          <p className="mt-4 text-xs text-slate-300/65 md:hidden">
            Tap to view image clearly
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-t border-white/5 bg-[#04131b] py-20 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#04131b_0%,#071c26_42%,#0a2326_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.08),transparent_22%),radial-gradient(circle_at_50%_85%,rgba(6,182,212,0.08),transparent_28%)]" />

      {/* Ambient glow blobs */}
      <motion.div
        animate={{ x: [0, 24, -12, 0], y: [0, -10, 8, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute left-[-10%] top-12 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl sm:left-[-5%] sm:top-16 sm:h-72 sm:w-72"
      />

      <motion.div
        animate={{ x: [0, -20, 12, 0], y: [0, 10, -6, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute right-[-10%] top-8 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl sm:right-[-5%] sm:top-10 sm:h-80 sm:w-80"
      />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse of our food, dining space, and Chikkamagaluru surroundings"
          description="Enjoy comforting seafood dishes, a warm family-style dining atmosphere, and the Chikkamagaluru setting that makes every visit feel relaxed and memorable."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          {/* Large left card */}
          <GalleryCard card={galleryCards[0]} large />

          {/* Right stacked cards */}
          <div className="grid gap-5 lg:gap-6">
            {galleryCards.slice(1).map((card, index) => (
              <GalleryCard
                key={card.title}
                card={card}
                delay={index * 0.12}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}