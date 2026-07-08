"use client";

import Image from "next/image";
import { MapPin, Clock3, Phone, Navigation } from "lucide-react";

const menuLinks = [
  { label: "Menu Preview", href: "#menu-preview" },
  { label: "Signature Dishes", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

const restaurantLinks = [
  { label: "About Us", href: "#about" },
  { label: "Directions", href: "#visit" },
  { label: "Timings", href: "#visit" },
  { label: "Contact", href: "#visit" },
];

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel+Annapoorna+Fish+Land,+Barlane+Rd,+Pension+Mohalla,+Chikkamagaluru,+Karnataka+577101";

export default function Footer() {
  return (
    <footer className="px-4 pb-5 pt-8 sm:px-5 md:px-6 md:pb-8 md:pt-10">
      <div className="mx-auto max-w-[1500px] rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-xl md:rounded-[2rem]">
        {/* top section */}
        <div className="grid gap-10 px-5 py-7 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:grid-cols-[1.35fr_1fr]">
          {/* left brand */}
          <div className="max-w-lg">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-cyan-300/20 bg-white shadow-md sm:h-12 sm:w-12">
                <Image
                  src="/logo.jpg"
                  alt="Hotel Annapoorna Fish Land logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  Hotel Annapoorna Fish Land
                </h3>
                <p className="text-sm text-slate-300/75">Chikkamagaluru</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300/75 sm:mt-5">
              Enjoy homely coastal seafood in the heart of Chikkamagaluru, with
              comforting fish meals, warm family dining, and flavours that bring
              the taste of the coast to the hills.
            </p>

            <div className="mt-5">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition hover:bg-white/10"
              >
                <Navigation className="h-4 w-4 text-cyan-200" />
                Get Directions
              </a>
            </div>
          </div>

          {/* right links area */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Menu */}
            <div>
              <h4 className="text-sm font-semibold text-white">Menu</h4>
              <div className="mt-4 grid gap-3">
                {menuLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm leading-6 text-slate-300/75 transition hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Restaurant */}
            <div>
              <h4 className="text-sm font-semibold text-white">Restaurant</h4>
              <div className="mt-4 grid gap-3">
                {restaurantLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm leading-6 text-slate-300/75 transition hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Visit info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-sm font-semibold text-white">Visit Info</h4>
              <div className="mt-4 space-y-4 text-sm text-slate-300/75">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                  <p className="leading-6">
                    Barlane Rd, Pension Mohalla,
                    <br />
                    Chikkamagaluru
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" />
                  <p className="leading-6">
                    11:00 AM – 4:30 PM
                    <br />
                    7:00 PM – 11:30 PM
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />

                  <ul className="space-y-1 text-sm text-slate-300/75">
                    <li>
                      <a
                        href="tel:+917019753697"
                        className="leading-6 transition hover:text-white"
                      >
                        +91 70197 53697
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+917892012242"
                        className="leading-6 transition hover:text-white"
                      >
                        +91 78920 12242
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom strip */}
        <div className="border-t border-white/10 px-5 py-4 sm:px-6 md:px-10">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-slate-400 md:flex-row md:justify-between md:text-left">
            <p>© 2026 Hotel Annapoorna Fish Land. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-end">
              <a href="#" className="transition hover:text-cyan-300">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-cyan-300">
                Terms of Service
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}