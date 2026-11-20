"use client";

import { useState } from "react";
import Image from "next/image";

type FilterTag = "all" | "ai" | "fintech" | "community";

interface AppItem {
  id: string;
  name: string;
  category: string;
  tags: FilterTag[];
  description: string;
  tech: string[];
  gradient: string;
  shotSrc: string;
  iconSrc: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
}

const APPS: AppItem[] = [
  {
    id: "selfitoons",
    name: "Selfitoons",
    category: "Mobile AI · Viral Video Gen",
    tags: ["ai"],
    description:
      "Turn a voice prompt and selfie into a 10-second animated video. Whisper transcription, ChatGPT prompt engineering, Kling and Grok rendering, local FFmpeg watermarking, and a pool of five video controllers so the feed never leaks memory.",
    tech: ["Flutter", "FastAPI", "FFmpeg", "Kling AI", "Grok", "Whisper"],
    gradient: "radial-gradient(120% 90% at 50% 100%, rgba(124, 92, 255, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.doubletap.ai.selfitoons-1.png",
    iconSrc: "/icons/com.doubletap.ai.selfitoons.png",
    appStoreUrl: "https://apps.apple.com/in/app/selfitoons/id6758597947",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.doubletap.ai.selfitoons",
    webUrl: "https://selfitoons.ai/",
  },
  {
    id: "internsharks",
    name: "Internsharks",
    category: "Internship Discovery & Community",
    tags: ["ai", "community"],
    description:
      "Internship discovery app with real-time student community, resume drop, saved applications, and push alerts. Clean Riverpod architecture and custom card deck swiping.",
    tech: ["Flutter", "Riverpod", "Firebase", "REST", "Google Play"],
    gradient: "radial-gradient(120% 90% at 50% 100%, rgba(69, 227, 255, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.doubletap.internsharks.ai-1.png",
    iconSrc: "/icons/com.doubletap.internsharks.ai.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.doubletap.internsharks.ai",
    webUrl: "https://internsharks.ai/",
  },
  {
    id: "fulupostore",
    name: "Fulupo Store",
    category: "Hyperlocal Merchant Ordering",
    tags: ["community"],
    description:
      "Merchant order-taking app for regional stores with real-time order notifications, stock management, and customer messaging. Built for ultra-fast checkout on sub-$100 Android hardware.",
    tech: ["Flutter", "BLoC", "WebSockets", "Firebase", "Play Store"],
    gradient: "radial-gradient(120% 90% at 50% 100%, rgba(197, 245, 96, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.doubletap.fulupostore-1.png",
    iconSrc: "/icons/com.doubletap.fulupostore.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.doubletap.fulupostore",
  },
  {
    id: "ubill",
    name: "Ubill",
    category: "Cloud POS & GST Invoicing",
    tags: ["fintech"],
    description:
      "Full offline-first point-of-sale for retail shops. Bluetooth ESC/POS thermal printing, barcode scanning via camera, GST compliance, daily analytics, and multi-store synchronization.",
    tech: ["Flutter", "GetX", "SQLite", "ESC/POS", "REST"],
    gradient: "radial-gradient(120% 90% at 50% 100%, rgba(255, 176, 32, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.ubill.tech-1.png",
    iconSrc: "/icons/com.ubill.tech.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ubill.tech",
    webUrl: "https://app.ubill.tech/",
  },
  {
    id: "bizstack",
    name: "Bizstack",
    category: "SME Operations & Ledger",
    tags: ["fintech"],
    description:
      "Business ledger and payment reconciliation suite. Automated overdue customer reminders via WhatsApp, expense tracking, and instant PDF invoice generation on device.",
    tech: ["Flutter", "Riverpod", "PDF Gen", "SQLite", "Razorpay"],
    gradient: "radial-gradient(120% 90% at 50% 100%, rgba(69, 227, 255, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.nativedesk.bizstack-1.png",
    iconSrc: "/icons/com.nativedesk.bizstack.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nativedesk.bizstack",
  },
  {
    id: "marine_ninja",
    name: "Marine Ninja",
    category: "Maritime Engineering Companion",
    tags: ["community"],
    description:
      "Offline field calculator and exam prep guide for marine engineers at sea. Interactive machinery schematics, formula lookup, and quiz engine functioning 100% offline.",
    tech: ["Flutter", "SQLite", "Offline First", "Google Play"],
    gradient: "radial-gradient(120% 90% at 50% 100%, rgba(124, 92, 255, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.engine_room_ninja.marine_ninja-1.png",
    iconSrc: "/icons/com.engine_room_ninja.marine_ninja.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.engine_room_ninja.marine_ninja",
  },
];

export default function Apps() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("all");

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
            <button
              onClick={() => setActiveFilter("all")}
              className={`filter-btn chip !text-[12.5px] !px-3.5 !py-1.5 transition cursor-pointer ${
                activeFilter === "all" ? "bg-white text-[#07080B] font-semibold border-white" : ""
              }`}
              aria-pressed={activeFilter === "all"}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("ai")}
              className={`filter-btn chip !text-[12.5px] !px-3.5 !py-1.5 transition cursor-pointer ${
                activeFilter === "ai" ? "bg-white text-[#07080B] font-semibold border-white" : ""
              }`}
              aria-pressed={activeFilter === "ai"}
            >
              AI
            </button>
            <button
              onClick={() => setActiveFilter("fintech")}
              className={`filter-btn chip !text-[12.5px] !px-3.5 !py-1.5 transition cursor-pointer ${
                activeFilter === "fintech" ? "bg-white text-[#07080B] font-semibold border-white" : ""
              }`}
              aria-pressed={activeFilter === "fintech"}
            >
              Billing &amp; POS
            </button>
            <button
              onClick={() => setActiveFilter("community")}
              className={`filter-btn chip !text-[12.5px] !px-3.5 !py-1.5 transition cursor-pointer ${
                activeFilter === "community" ? "bg-white text-[#07080B] font-semibold border-white" : ""
              }`}
              aria-pressed={activeFilter === "community"}
            >
              Community
            </button>
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
                    <span key={tIdx} className="chip">
                      {tag}
                    </span>
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
