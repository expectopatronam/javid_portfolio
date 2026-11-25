"use client";

import { GraduationCap, Briefcase } from "lucide-react";

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
            <div>
              <div className="text-[12px] font-mono text-[#C5F560]">2024 — 2026</div>
              <h3 className="font-display font-bold text-lg text-white mt-1">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-zinc-400 text-sm mt-0.5">
                SRM Institute of Science and Technology · Chennai
              </p>
            </div>

            <div className="pt-4 border-t border-white/[.06]">
              <div className="text-[12px] font-mono text-[#45E3FF]">2020 — 2023</div>
              <h3 className="font-display font-bold text-lg text-white mt-1">
                B.Sc in Computer Science
              </h3>
              <p className="text-zinc-400 text-sm mt-0.5">
                Sadakathullah Appa College · Tirunelveli
              </p>
            </div>
          </div>

          <p className="text-zinc-500 text-sm pt-4 border-t border-white/[.06] leading-relaxed">
            Strong foundation in software architecture, distributed backends, mobile UX engineering, and applied machine learning.
          </p>
        </div>

        {/* Right: Experience Timeline with Glowing Line */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12 before:absolute before:left-[-2px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#C5F560] before:via-[#45E3FF] before:to-transparent">
          {/* Job 1: Doubletap Innovations */}
          <div className="relative">
            {/* Timeline node dot */}
            <span className="absolute left-[-31px] sm:left-[-39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07080B] border-2 border-[#C5F560] ring-4 ring-[#C5F560]/20"></span>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display font-bold text-xl text-white">
                Mobile Application Developer
              </h3>
              <span className="chip !text-[12px] !border-[#C5F560]/30 !text-[#C5F560]">
                Dec 2025 — Present
              </span>
            </div>
            <div className="text-sm font-medium text-zinc-300 mt-1">
              Doubletap Innovations · Full-time · Chennai
            </div>

            <p className="text-zinc-400 text-sm sm:text-[15px] mt-4 leading-relaxed">
              Leading mobile app development across flagship AI products. Built and launched <span className="text-white font-medium">Selfitoons</span> (AI video generation with Whisper, ChatGPT, Kling AI, Grok &amp; on-device FFmpeg) and <span className="text-white font-medium">Internsharks</span> (internship &amp; career network). Handled App Store &amp; Play Store release operations, staged rollouts, and multi-tenant FastAPI backend integrations.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              <span className="chip">Flutter</span>
              <span className="chip">Riverpod</span>
              <span className="chip">FFmpeg</span>
              <span className="chip">FastAPI</span>
              <span className="chip">App Store</span>
              <span className="chip">Google Play</span>
            </div>
          </div>

          {/* Job 2: Ecfile Solutions */}
          <div className="relative">
            {/* Timeline node dot */}
            <span className="absolute left-[-31px] sm:left-[-39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07080B] border-2 border-[#45E3FF] ring-4 ring-[#45E3FF]/20"></span>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display font-bold text-xl text-white">
                Flutter Developer
              </h3>
              <span className="chip !text-[12px] !border-white/10 text-zinc-400">
                Oct 2023 — Nov 2025
              </span>
            </div>
            <div className="text-sm font-medium text-zinc-300 mt-1">
              Ecfile Solutions Pvt Ltd · Full-time · Chennai
            </div>

            <p className="text-zinc-400 text-sm sm:text-[15px] mt-4 leading-relaxed">
              Engineered <span className="text-white font-medium">Ubill</span> (cloud-synchronized POS billing system) and <span className="text-white font-medium">Bizstack</span>. Implemented Bluetooth ESC/POS thermal printing drivers, camera barcode scanning, offline-first SQLite state caching, and automated ledger reporting for 650+ retail merchants.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              <span className="chip">Flutter</span>
              <span className="chip">GetX</span>
              <span className="chip">SQLite</span>
              <span className="chip">ESC/POS</span>
              <span className="chip">REST APIs</span>
            </div>
          </div>

          {/* Job 3: Independent / Freelance */}
          <div className="relative">
            {/* Timeline node dot */}
            <span className="absolute left-[-31px] sm:left-[-39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07080B] border-2 border-zinc-500 ring-4 ring-white/5"></span>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display font-bold text-xl text-white">
                Mobile App Developer
              </h3>
              <span className="chip !text-[12px] !border-white/10 text-zinc-400">
                2022 — 2023
              </span>
            </div>
            <div className="text-sm font-medium text-zinc-300 mt-1">
              Independent / Contract
            </div>

            <p className="text-zinc-400 text-sm sm:text-[15px] mt-4 leading-relaxed">
              Built and shipped <span className="text-white font-medium">Marine Ninja</span> for maritime marine engineers, providing offline operational formulas and machinery inspection guides with zero network dependency. Built multiple client Flutter apps and reusable packages.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              <span className="chip">Flutter</span>
              <span className="chip">Offline First</span>
              <span className="chip">Dart</span>
              <span className="chip">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
