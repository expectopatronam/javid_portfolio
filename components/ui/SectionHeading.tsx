import React from "react";

export interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center max-w-4xl mx-auto" : ""} ${className}`}>
      {kicker && <div className="kicker">{kicker}</div>}
      <h2
        className={`font-display font-extrabold tracking-[-0.03em] ${
          isCenter
            ? "leading-[0.98] text-5xl sm:text-7xl mt-4 text-white"
            : "leading-tight text-4xl sm:text-5xl mt-3 text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-zinc-400 mt-4 text-base sm:text-lg leading-relaxed ${isCenter ? "mt-6" : "max-w-lg"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
