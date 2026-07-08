"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Leaf, Drumstick, Utensils } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const fishFryOptions = [
  "Prawns",
  "Pamphlet",
  "Anjal",
  "Bangdai",
  "Disco",
  "Silver Fish",
  "Kandai",
  "Kodai",
  "Madumal",
  "Bhutai",
  "Bondas",
  "Crab",
];

const chickenOptions = [
  "Chicken Sukka",
  "Chicken Kebab",
  "Korri Roti",
  "Chicken Masala",
  "Chicken Butter Masala",
  "Chicken Hyderabadi",
];

const menuCategories = [
  {
    title: "Fish Meals",
    description:
      "Comforting seafood meals served with rice, curry, sides, and the kind of homely coastal taste that feels satisfying from the first bite to the last.",
    icon: Utensils,
    accent: "from-cyan-400/25 to-emerald-400/20",
    items: [
      "Annapoorna Fish Meals",
      "Rice, curry & fish combination",
      "Homely coastal lunch plate",
    ],
    image: "/fish_meals.jpg",
    hoverTitle: "Homely coastal fish meals",
    hoverDescription:
      "A comforting plate of fish, curry, rice, and sides — inspired by coastal flavours and served with the warmth of home-style cooking.",
    label: "Fish Meals",
  },
  {
    title: "Fish Fry",
    description:
      "Choose your favourite fish and enjoy it fried fresh with coastal masala, crisp texture, and flavours that pair perfectly with a relaxed meal.",
    icon: Flame,
    accent: "from-orange-400/25 to-rose-400/20",
    items: [
      "Choose your fish",
      "Fresh coastal fry",
      "Served hot and crisp",
    ],
  },
  {
    title: "Veg Menu",
    description:
      "Simple, satisfying vegetarian meals and side dishes prepared with familiar flavours, making it a comfortable choice for guests who prefer veg options.",
    icon: Leaf,
    accent: "from-emerald-400/25 to-lime-400/20",
    items: [
      "Veg Meals",
      "Homely curries and sides",
      "Comforting vegetarian options",
    ],
    image: "/veg_meals.jpg",
    hoverTitle: "Homely vegetarian meals",
    hoverDescription:
      "Wholesome veg meals served with comforting curries, rice, and familiar flavours that feel simple, satisfying, and close to home.",
    label: "Veg Menu",
  },
  {
    title: "Chicken Dishes",
    description:
      "A flavourful selection of chicken dishes that brings together rich masala gravies, dry favourites, and hearty coastal-style combinations.",
    icon: Drumstick,
    accent: "from-amber-400/25 to-orange-400/20",
    items: [
      "Masala and gravy dishes",
      "Dry chicken favourites",
      "Coastal-style combinations",
    ],
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

      {/* Ambient blobs */}
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
          title="A glimpse of the coastal and homely flavours served at Annapoorna"
          description="From fish meals and fish fry to veg options and chicken favourites, here’s a quick look at the comforting dishes guests can enjoy at Annapoorna Fish Land."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {menuCategories.map((category, index) => {
            const Icon = category.icon;
            const isFishMeals = category.title === "Fish Meals";
            const isFishFry = category.title === "Fish Fry";
            const isVegMenu = category.title === "Veg Menu";
            const isChicken = category.title === "Chicken Dishes";

            /* ---------------- IMAGE FLIP CARDS (Fish Meals + Veg Menu) ---------------- */
            if (isFishMeals || isVegMenu) {
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group [perspective:1200px]"
                >
                  <div className="relative min-h-[490px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
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
                      </article>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
                        <div className="absolute inset-0">
                          <Image
                            src={category.image!}
                            alt={category.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="absolute inset-0 bg-slate-950/35" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,29,0.08)_0%,rgba(5,20,29,0.18)_35%,rgba(5,20,29,0.88)_100%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)]" />

                        <div className="relative z-10 flex h-full flex-col justify-end p-6">
                          <p className="text-sm uppercase tracking-[0.22em] text-emerald-200/80">
                            {category.label}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">
                            {category.hoverTitle}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-100/85">
                            {category.hoverDescription}
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </motion.div>
              );
            }

            /* ---------------- Fish Fry Flip Card ---------------- */
            if (isFishFry) {
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group [perspective:1200px]"
                >
                  <div className="relative min-h-[490px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
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
                      </article>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#081a24] shadow-xl">
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,#071822_0%,#0a212c_55%,#0b2730_100%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent_28%)]" />

                        <div className="relative z-10 flex h-full flex-col p-5">
                          <div className="mb-4">
                            <p className="text-xs uppercase tracking-[0.22em] text-orange-200/80">
                              Fish Fry Options
                            </p>
                            <h3 className="mt-2 text-xl font-semibold text-white">
                              Available fish for fry
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-300/80">
                              Choose the fish you prefer for your fry.
                            </p>
                          </div>

                          <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto pr-1">
                            {fishFryOptions.map((fish) => (
                              <div
                                key={fish}
                                className="flex min-h-[52px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-sm font-medium text-white shadow-sm backdrop-blur-md"
                              >
                                {fish}
                              </div>
                            ))}
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </motion.div>
              );
            }

            /* ---------------- Chicken Dishes Flip Card ---------------- */
            if (isChicken) {
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group [perspective:1200px]"
                >
                  <div className="relative min-h-[490px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
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
                      </article>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#1a140f] shadow-xl">
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,#18120d_0%,#241912_55%,#2a1d14_100%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_28%)]" />

                        <div className="relative z-10 flex h-full flex-col p-5">
                          <div className="mb-4">
                            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">
                              Chicken Dishes
                            </p>
                            <h3 className="mt-2 text-xl font-semibold text-white">
                              Available chicken favourites
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-300/80">
                              A few of the chicken dishes guests can enjoy at Annapoorna.
                            </p>
                          </div>

                          <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto pr-1">
                            {chickenOptions.map((dish) => (
                              <div
                                key={dish}
                                className="flex min-h-[52px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-sm font-medium text-white shadow-sm backdrop-blur-md"
                              >
                                {dish}
                              </div>
                            ))}
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}