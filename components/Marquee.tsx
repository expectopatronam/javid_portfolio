"use client";

import { MARQUEE_ITEMS } from "@/data/portfolio";

export default function Marquee() {
  return (
    <div className="relative border-y border-white/[.07] bg-[#0B0D12]/60 py-4 overflow-hidden select-none">
      <div className="marquee flex w-max gap-10 font-mono text-[13px] text-zinc-500 whitespace-nowrap">
        {/* First set */}
        {MARQUEE_ITEMS.map((item, idx) => (
          <span key={`tech-1-${idx}`} className="flex items-center gap-10">
            {item}
            <span className="text-[#C5F560]/60">✦</span>
          </span>
        ))}
        {/* Repeated set for infinite seamless scroll */}
        {MARQUEE_ITEMS.map((item, idx) => (
          <span key={`tech-2-${idx}`} className="flex items-center gap-10">
            {item}
            <span className="text-[#C5F560]/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
