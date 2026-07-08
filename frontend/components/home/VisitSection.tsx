"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock3,
  Navigation,
  Mountain,
  Star,
  IndianRupee,
  ChevronDown,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

const infoCards = [
  {
    icon: MapPin,
    title: "Location",
    value: "Barlane Rd, Pension Mohalla, Chikkamagaluru, Karnataka 577101",
    subtext: "Hotel Annapoorna Fish Land, Chikkamagaluru",
  },
  {
    icon: Clock3,
    title: "Timings",
    value: "11:00 AM – 4:30 PM • 7:00 PM – 11:30 PM",
    subtext: "Open daily for lunch and dinner",
  },
  {
    icon: Star,
    title: "Rating",
    value: "4.8 / 5",
    subtext: "Based on public reviews",
  },
  {
    icon: IndianRupee,
    title: "Price Range",
    value: "₹120 – ₹380",
    subtext: "Approximate dining range",
  },
];

const phoneNumbers = [
  { label: "+91 81052 46344", href: "tel:+918105246344" },
  { label: "+91 70197 53697", href: "tel:+917019753697" },
  { label: "+91 78920 12242", href: "tel:+917892012242" },
];

export default function VisitSection() {
  const [isCallOpen, setIsCallOpen] = useState(false);

  return (
    <section
      id="visit"
      className="relative overflow-hidden border-t border-white/5 bg-[#04121a] py-24 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#04121a_0%,#071a25_42%,#0a2023_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.08),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(6,182,212,0.08),transparent_28%)]" />

      {/* Ambient blobs */}
      <motion.div
        animate={{ x: [0, 24, -12, 0], y: [0, -10, 8, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute left-[-5%] top-14 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -20, 12, 0], y: [0, 10, -6, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute right-[-5%] top-12 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-[92%] max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        {/* Left side */}
        <div>
          <SectionHeading
            eyebrow="Visit us"
            title="Plan your visit to Annapoorna Fish Land"
            description="Whether you're exploring Chikkamagaluru or simply craving comforting coastal flavours, find our location, timings, and everything you need for a relaxed visit."
          />

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/30 text-cyan-200 shadow-lg">
                  <Mountain className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Why stop here
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300/80">
                    Annapoorna Fish Land is a welcoming stop in Chikkamagaluru
                    for anyone craving comforting coastal flavours. From homely
                    fish meals and crisp fish fry to a relaxed family dining
                    atmosphere, it offers the kind of seafood experience that
                    feels simple, satisfying, and worth coming back for.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">
                What makes us special
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-300/80">
                Rooted in coastal flavours and served in the calm of
                Chikkamagaluru, Annapoorna Fish Land brings together fresh
                seafood, comforting homely cooking, and a warm dining space
                where every meal feels familiar, flavourful, and made with care.
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                  Plan your visit
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                  Hotel Annapoorna Fish Land
                </h3>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/30 text-cyan-200 shadow-lg">
                <Navigation className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {infoCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/25 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-emerald-100/80">
                          {card.title}
                        </p>
                        <p className="mt-1 text-base font-semibold text-white">
                          {card.value}
                        </p>
                        <p className="mt-1 text-sm text-slate-300/75">
                          {card.subtext}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryButton href="https://www.google.com/maps/dir/?api=1&destination=Hotel+Annapoorna+Fish+Land,+Barlane+Rd,+Pension+Mohalla,+Chikkamagaluru,+Karnataka+577101">
                Get Directions
              </PrimaryButton>

              <div
                className="group relative"
                onMouseEnter={() => {
                  if (window.innerWidth >= 640) setIsCallOpen(true);
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 640) setIsCallOpen(false);
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsCallOpen((prev) => !prev)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/12 sm:w-auto"
                >
                  <span>Call Restaurant</span>
                  <ChevronDown
                    className={`h-4 w-4 text-cyan-200 transition-transform duration-300 ${
                      isCallOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isCallOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute left-0 top-full z-30 mt-3 w-72 rounded-2xl border border-white/10 bg-[#0b1f29]/95 p-3 shadow-2xl backdrop-blur-xl"
                    >
                      <p className="px-2 pb-2 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200/70">
                        Contact Numbers
                      </p>

                      <div className="space-y-2">
                        {phoneNumbers.map((phone) => (
                          <a
                            key={phone.label}
                            href={phone.href}
                            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                          >
                            <span>{phone.label}</span>
                            <Phone className="h-4 w-4 text-cyan-200" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Must-Try compact card */}
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,#0a2430_0%,#123641_100%)] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/30 text-cyan-200 shadow-lg">
                  <Star className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <p className="text-sm uppercase tracking-[0.22em] text-emerald-200/70">
                    Must-Try at Annapoorna
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    Fish Meals, Fish Fry, and coastal favourites served with a
                    homely touch
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-300/80">
                    Enjoy comforting fish meals, crisp fry, and coastal classics
                    like kori rotti and neer dose — simple, flavourful food that
                    feels close to home-cooked seafood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}