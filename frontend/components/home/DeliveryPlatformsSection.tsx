"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const deliveryPartners = [
  {
    name: "WhatsApp",
    icon: "/wtsapp.jpg",
    href: "https://wa.me/917019753697",
  },
  {
    name: "Zomato",
    icon: "/zomato.png",
    href: "#",
  },
  {
    name: "Swiggy",
    icon: "/swiggy.jpeg",
    href: "#",
  },
];

export default function DeliveryPlatformsSection() {
  return (
    <section
      id="delivery"
      className="relative overflow-hidden border-t border-white/5 bg-[#04131d] py-14 md:py-16"
    >
      {/* background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#04131d_0%,#071b27_42%,#0a2428_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.06),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.06),transparent_24%)]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-6xl">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-medium tracking-tight text-white md:text-4xl"
        >
          We provide doorstep delivery and accept catering orders.
        </motion.h2>

        {/* compact delivery box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 rounded-[28px] border border-white/10 bg-white/6 px-4 py-5 shadow-xl backdrop-blur-xl md:px-6 md:py-6"
        >
          <div className="grid gap-2 md:grid-cols-3 md:gap-4">
            {deliveryPartners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.href}
                target={partner.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  partner.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group flex min-h-[150px] flex-col items-center justify-center rounded-2xl px-4 py-5 text-center transition hover:bg-white/[0.03]"
              >
                <div className="relative h-12 w-12 md:h-14 md:w-14">
                  <Image
                    src={partner.icon}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
                  {partner.name}
                </h3>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}