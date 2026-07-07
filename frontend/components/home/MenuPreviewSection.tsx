"use client";

import { motion } from "framer-motion";
import { Fish, Flame, Shell, Utensils } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const menuCategories = [
  {
    title: "Fish Meals",
    description:
      "Comforting seafood meals built around rice, curry, sides, and a satisfying fish-based main course.",
    icon: Utensils,
    accent: "from-cyan-400/25 to-emerald-400/20",
    items: ["Annapoorna Fish Meals", "Coastal Curry Meal", "Traveller’s Lunch Plate"],
  },
  {
    title: "Fish Fry",
    description:
      "Crisp, spicy, and flavour-packed fry dishes that can become one of the strongest hooks on the website.",
    icon: Flame,
    accent: "from-orange-400/25 to-rose-400/20",
    items: ["Masala Fish Fry", "Tawa Fish Fry", "Chef Special Crispy Fry"],
  },
  {
    title: "Seafood Specials",
    description:
      "Rotating seafood favourites that make the menu feel fresh and give the homepage a premium destination feel.",
    icon: Fish,
    accent: "from-emerald-400/25 to-cyan-400/20",
    items: ["Prawn Special", "Catch of the Day", "Signature Seafood Plate"],
  },
  {
    title: "Family Combos",
    description:
      "Larger meal combinations designed for groups, families, and travellers stopping by together.",
    icon: Shell,
    accent: "from-teal-400/25 to-sky-400/20",
    items: ["Family Fish Combo", "Weekend Seafood Combo", "Group Special Meal"],
  },
];

export default function MenuPreviewSection() {
  return (
    <section
      id="menu-preview"
      className="relative overflow-hidden border-t border-white/5 bg-[#05141d] py-24 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#05141d_0%,#071c29_42%,#0a2428_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.08),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(6,182,212,0.08),transparent_28%)]" />

      {/* Floating ambient blobs */}
      <motion.div
        animate={{ x: [0, 24, -12, 0], y: [0, -10, 8, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -20, 12, 0], y: [0, 10, -6, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute right-[-5%] top-12 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Menu preview"
          title="A homepage menu showcase designed for tourists and seafood lovers"
          description="This section is not the full menu page yet — it is a curated preview that gives visitors a quick sense of what Annapoorna Fish Land serves. Later, each category can link to a dedicated menu page."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {menuCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
              >
                {/* gradient layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-60 transition duration-500 group-hover:opacity-90`}
                />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/30 text-cyan-200 shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-200/80">
                    {category.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-3 text-sm text-slate-100/90"
                      >
                        {item}
                      </div>
                    ))}
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