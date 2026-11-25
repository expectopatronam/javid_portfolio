"use client";

import { useState } from "react";
import Image from "next/image";
import { APPS, AppFilterTag } from "@/data/portfolio";
import TechChip from "@/components/ui/TechChip";

const FILTER_OPTIONS: { id: AppFilterTag; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "fintech", label: "Billing & POS" },
  { id: "community", label: "Community" },
];

export default function Apps() {
  const [activeFilter, setActiveFilter] = useState<AppFilterTag>("all");

  const filteredApps = APPS.filter((app) => {
    if (activeFilter === "all") return true;
    return app.tags.includes(activeFilter);
  });

  return (
    <section id="apps" className="relative py-24 sm:py-32 border-t border-white/[.06] bg-[#0B0D12]/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header with category filters */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="kicker">02 — Shipped apps</div>
            <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mt-3 text-white">
              Live in the stores. Go try them.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter apps">
            {FILTER_OPTIONS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`filter-btn chip !text-[12.5px] !px-3.5 !py-1.5 transition cursor-pointer ${
                    isActive ? "bg-white text-[#07080B] font-semibold border-white" : ""
                  }`}
                  aria-pressed={isActive}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 App Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredApps.map((app, index) => (
            <article
              key={app.id}
              className="app-card card spot group flex flex-col justify-between transition-all duration-300"
            >
              {/* Phone Mockup Screen Stage */}
              <div
                className="relative h-[300px] overflow-hidden rounded-t-[1.4rem]"
                style={{ background: app.gradient }}
              >
                <div className="absolute inset-0 grid-bg opacity-60"></div>
                <div
                  className={`phone sm absolute left-1/2 -translate-x-1/2 top-8 w-[170px] transition-transform duration-500 ${
                    index % 2 === 0
                      ? "group-hover:-translate-y-3 group-hover:rotate-[-2deg]"
                      : "group-hover:-translate-y-3 group-hover:rotate-[2deg]"
                  }`}
                >
                  <div className="screen relative overflow-hidden">
                    <div className="island"></div>
                    <Image
                      src={app.shotSrc}
                      alt={`${app.name} preview`}
                      fill
                      sizes="170px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="p-6 flex flex-col flex-1 border-t border-white/[.06]">
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 shrink-0">
                    <Image
                      src={app.iconSrc}
                      alt={`${app.name} icon`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg leading-tight text-white">{app.name}</h3>
                    <div className="text-[12.5px] text-zinc-400">{app.category}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm mt-4 leading-relaxed line-clamp-4">
                  {app.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {app.tech.map((tag, tIdx) => (
                    <TechChip key={tIdx} label={tag} />
                  ))}
                </div>

                {/* Store Links Buttons */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/[.04]">
                  {app.appStoreUrl && (
                    <a
                      className="store"
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.37 12.6c.02 2.6 2.28 3.47 2.3 3.48-.02.06-.36 1.24-1.19 2.45-.72 1.05-1.47 2.1-2.65 2.12-1.16.02-1.53-.69-2.86-.69-1.33 0-1.74.67-2.84.71-1.14.04-2.01-1.13-2.74-2.18-1.49-2.15-2.62-6.08-1.1-8.73.76-1.31 2.11-2.14 3.58-2.16 1.12-.02 2.17.75 2.86.75.68 0 1.96-.93 3.31-.79.56.02 2.15.23 3.17 1.71-.08.05-1.89 1.1-1.87 3.3M14.2 4.2c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.55 1.31-.56.65-1.05 1.68-.92 2.67.97.08 1.96-.49 2.57-1.22" />
                      </svg>
                      <span>App Store</span>
                    </a>
                  )}

                  {app.playStoreUrl && (
                    <a
                      className="store"
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="#34A853"
                          d="M3.6 2.2 13.3 12l-9.7 9.8c-.4-.2-.6-.6-.6-1.1V3.3c0-.5.2-.9.6-1.1z"
                        />
                        <path
                          fill="#FBBC04"
                          d="m16.6 15.3-3.3-3.3 3.3-3.3 3.8 2.2c1.1.6 1.1 1.6 0 2.2z"
                        />
                        <path
                          fill="#4285F4"
                          d="M16.6 15.3 13.3 12l-9.7 9.8c.3.2.8.2 1.3-.1z"
                        />
                        <path
                          fill="#EA4335"
                          d="M16.6 8.7 4.9 2.3c-.5-.3-1-.3-1.3-.1l9.7 9.8z"
                        />
                      </svg>
                      <span>Google Play</span>
                    </a>
                  )}

                  {app.webUrl && (
                    <a
                      className="store"
                      href={app.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
                      </svg>
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
