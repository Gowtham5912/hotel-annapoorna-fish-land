import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function PrimaryButton({
  children,
  href = "#",
  className,
  variant = "primary",
}: PrimaryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]",
    secondary:
      "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/15 hover:scale-105",
  };

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </Link>
  );
}