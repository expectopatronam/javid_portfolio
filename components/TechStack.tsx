"use client";

import { STACK_CATEGORIES } from "@/data/portfolio";
import TechChip from "@/components/ui/TechChip";

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32 border-t border-white/[.06] bg-[#0B0D12]/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <div className="kicker">04 — Tech stack</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mt-3 text-white">
            Tools I reach for.
          </h2>
          <p className="text-zinc-400 mt-3 max-w-lg">
            Battle-tested technologies used in production apps actively serving thousands of daily active users.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STACK_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="card spot p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20"
            >
              <div>
                <h3 className="font-display font-bold text-base text-white tracking-tight">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cat.skills.map((skill, sIdx) => (
                    <TechChip key={sIdx} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
