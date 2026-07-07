"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock3,
  Navigation,
  Mountain,
  Star,
  IndianRupee,
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
    value: "4.2 / 5",
    subtext: "Based on public reviews",
  },
  {
    icon: IndianRupee,
    title: "Price Range",
    value: "₹200 – ₹400",
    subtext: "Approximate dining range",
  },
];

export default function VisitSection() {
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
            title="A seafood stop worth finding while you’re in Chikkamagaluru"
            description="Whether someone is exploring Chikkamagaluru or just looking for a reliable seafood meal, this section should make it easy to find Annapoorna Fish Land, understand the timings, and decide quickly."
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
                    The positioning of this website should feel like more than a
                    basic restaurant listing. It should tell tourists and locals
                    that this is a dependable seafood stop in Chikkamagaluru —
                    good for fish meals, fry, and a casual dine-in experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">
                Suggested next improvement
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-300/80">
                <li>• Add the restaurant’s confirmed phone number</li>
                <li>• Add a real Google Maps direction link</li>
                <li>• Add 2–3 real signature dishes from the hotel menu</li>
                <li>• Add actual food / ambience photos later</li>
              </ul>
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
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="https://www.google.com/maps/dir/?api=1&destination=Hotel+Annapoorna+Fish+Land,+Barlane+Rd,+Pension+Mohalla,+Chikkamagaluru,+Karnataka+577101">
               Get Directions
               </PrimaryButton>
              <PrimaryButton href="#visit" variant="secondary">
                Call Restaurant
              </PrimaryButton>
            </div>

            {/* Location summary card */}
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,#0a2430_0%,#123641_100%)] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/30 text-cyan-200 shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Barlane Rd, Pension Mohalla
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300/80">
                    Chikkamagaluru, Karnataka 577101. This gives the page a
                    proper location anchor instead of a generic placeholder.
                    Later we can replace the buttons above with a real Google
                    Maps link and a working phone call action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <p className="text-sm font-semibold text-white">Tourist-friendly</p>
            <p className="text-xs text-emerald-200/75">
              Fish meals • Chikkamagaluru stop • casual dine-in
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}