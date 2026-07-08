"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, SunMedium, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu-preview" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel+Annapoorna+Fish+Land,+Barlane+Rd,+Pension+Mohalla,+Chikkamagaluru,+Karnataka+577101";

type NavbarProps = {
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

export default function Navbar({
  isDarkMode,
  onToggleTheme,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setShowNavbar(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
          setIsMobileMenuOpen(false);
        } else {
          setShowNavbar(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: showNavbar ? 0 : -120,
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 w-[92%] max-w-7xl">
        {/* Main navbar */}
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/45 px-4 py-3 backdrop-blur-xl md:px-6">
          {/* Left brand area - clickable */}
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-300/20 bg-white/95 shadow-lg md:h-14 md:w-14">
              <Image
                src="/logo.jpg"
                alt="Annapoorna Fish Land logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide text-white md:text-base">
                Annapoorna Fish Land
              </p>
              <p className="text-[11px] text-emerald-100/70 md:text-xs">
                Chikkamagaluru
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/80 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Desktop theme toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/12 md:flex"
            >
              {isDarkMode ? (
                <SunMedium className="h-5 w-5 text-amber-300" />
              ) : (
                <Moon className="h-5 w-5 text-cyan-200" />
              )}
            </button>

            {/* Desktop directions button */}
            <div className="hidden md:block">
              <PrimaryButton href={directionsUrl}>Get Directions</PrimaryButton>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white backdrop-blur-md transition hover:bg-white/12 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-cyan-200" />
              ) : (
                <Menu className="h-5 w-5 text-cyan-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && showNavbar && (
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="mt-3 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="px-5 py-5">
                {/* nav links */}
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-3 text-sm font-medium text-white/85 transition hover:bg-white/6 hover:text-cyan-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* divider */}
                <div className="my-4 h-px bg-white/10" />

                {/* mobile actions */}
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={onToggleTheme}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
                  >
                    <span className="font-medium">
                      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    </span>

                    {isDarkMode ? (
                      <SunMedium className="h-5 w-5 text-amber-300" />
                    ) : (
                      <Moon className="h-5 w-5 text-cyan-200" />
                    )}
                  </button>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}