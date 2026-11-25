"use client";

import { GraduationCap } from "lucide-react";
import { EXPERIENCES, EDUCATION_ITEMS, EDUCATION_SUMMARY } from "@/data/portfolio";
import TechChip from "@/components/ui/TechChip";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <div>
        <div className="kicker">03 — Experience</div>
        <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mt-3 text-white">
          Where I&apos;ve been building.
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-[1fr_1.8fr] gap-8 items-start">
        {/* Left: Education Card */}
        <div className="card spot p-7 sm:p-8 flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-[#C5F560]" />
            <span className="kicker !text-[12px]">Education &amp; Roots</span>
          </div>

          <div className="space-y-6">
            {EDUCATION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={idx > 0 ? "pt-4 border-t border-white/[.06]" : ""}
              >
                <div className={`text-[12px] font-mono ${item.colorClass}`}>
                  {item.period}
                </div>
                <h3 className="font-display font-bold text-lg text-white mt-1">
                  {item.degree}
                </h3>
                <p className="text-zinc-400 text-sm mt-0.5">
                  {item.institution} · {item.location}
                </p>
              </div>
            ))}
          </div>

          <p className="text-zinc-500 text-sm pt-4 border-t border-white/[.06] leading-relaxed">
            {EDUCATION_SUMMARY}
          </p>
        </div>

        {/* Right: Experience Timeline with Glowing Line */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12 before:absolute before:left-[-2px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#C5F560] before:via-[#45E3FF] before:to-transparent">
          {EXPERIENCES.map((job) => (
            <div key={job.id} className="relative">
              {/* Timeline node dot */}
              <span
                className={`absolute left-[-31px] sm:left-[-39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07080B] border-2 ring-4 ${job.dotColorClass}`}
              ></span>

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-bold text-xl text-white">
                  {job.role}
                </h3>
                <span className={`chip !text-[12px] ${job.badgeClass || ""}`}>
                  {job.period}
                </span>
              </div>
              <div className="text-sm font-medium text-zinc-300 mt-1">
                {job.company} · {job.type} · {job.location}
              </div>

              <p className="text-zinc-400 text-sm sm:text-[15px] mt-4 leading-relaxed">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {job.tech.map((techItem, tIdx) => (
                  <TechChip key={tIdx} label={techItem} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
