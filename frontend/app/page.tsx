"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SignatureDishesSection from "@/components/home/SignatureDishesSection";
import StorySection from "@/components/home/StorySection";
import MenuPreviewSection from "@/components/home/MenuPreviewSection";
import DeliveryPlatformsSection from "@/components/home/DeliveryPlatformsSection";
import GallerySection from "@/components/home/GallerySection";
import VisitSection from "@/components/home/VisitSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#03131f]">
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
      />

      <HeroSection isDarkMode={isDarkMode} />
      <SignatureDishesSection />
      <StorySection isDarkMode={isDarkMode} />
      <MenuPreviewSection />
      <DeliveryPlatformsSection />
      <GallerySection />
      <VisitSection />
      <Footer />
    </main>
  );
}