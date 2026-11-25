import React from "react";

export interface TechChipProps {
  label: string;
  variant?: "default" | "accent" | "cyan" | "active";
  className?: string;
}

export default function TechChip({
  label,
  variant = "default",
  className = "",
}: TechChipProps) {
  const variantStyles = {
    default: "chip",
    accent: "chip !border-[#C5F560]/30 !text-[#C5F560]",
    cyan: "chip !border-[#45E3FF]/40 !text-[#45E3FF]",
    active: "chip !bg-[#C5F560] !text-[#07080B] !border-[#C5F560] font-bold",
  };

  return <span className={`${variantStyles[variant]} ${className}`}>{label}</span>;
}
