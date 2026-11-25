"use client";

import { useEffect, useRef } from "react";
import { IMPACT_DATA } from "@/data/portfolio";

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(".spot");
    const handlePointerMove = (e: PointerEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };

    container.addEventListener("pointermove", handlePointerMove);
    return () => container.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const { metrics } = IMPACT_DATA;

  return (
    <section id="impact" ref={containerRef} className="relative mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="kicker">{IMPACT_DATA.kicker}</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mt-3 text-white">
            {IMPACT_DATA.title}
          </h2>
        </div>
        <p className="text-zinc-400 max-w-sm">
          {IMPACT_DATA.subtitle}
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-6 auto-rows-[minmax(190px,auto)]">
        {/* Card 1: FFmpeg ~75% (Big Card) */}
        <div className="card spot md:col-span-3 md:row-span-2 p-7 sm:p-9 flex flex-col justify-between">
          <div>
            <div className="kicker">{metrics.ffmpeg.kicker}</div>
            <div className="font-display font-extrabold text-[84px] sm:text-[116px] leading-none mt-6 grad-text tracking-tight">
              {metrics.ffmpeg.stat}
            </div>
            <div className="text-xl font-semibold mt-2 text-white">
              {metrics.ffmpeg.label}
            </div>
            <p className="text-zinc-400 mt-3 max-w-md text-sm sm:text-base leading-relaxed">
              {metrics.ffmpeg.description}
            </p>
          </div>

          <div className="mt-8 pt-4">
            <svg viewBox="0 0 400 70" className="w-full h-auto">
              {/* Server pill */}
              <rect
                x="2"
                y="22"
                width="120"
                height="28"
                rx="14"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.14)"
              />
              <text
                x="62"
                y="40"
                textAnchor="middle"
                fill="#AEB6C4"
                fontFamily="JetBrains Mono"
                fontSize="11"
              >
                server render
              </text>

              {/* Connecting animated flow path */}
              <path
                d="M124 36 H 248"
                stroke="#45E3FF"
                strokeWidth="1.8"
                className="flow"
                fill="none"
              />
              <text
                x="186"
                y="26"
                textAnchor="middle"
                fill="#8A93A3"
                fontFamily="JetBrains Mono"
                fontSize="10"
              >
                1 clean video
              </text>

              {/* Device pill */}
              <rect
                x="250"
                y="22"
                width="148"
                height="28"
                rx="14"
                fill="rgba(197,245,96,0.1)"
                stroke="rgba(197,245,96,0.5)"
              />
              <text
                x="324"
                y="40"
                textAnchor="middle"
                fill="#C5F560"
                fontFamily="JetBrains Mono"
                fontSize="11"
                fontWeight="500"
              >
                watermark on device
              </text>
            </svg>
          </div>
        </div>

        {/* Card 2: Store Releases */}
        <div className="card spot md:col-span-3 p-7 flex flex-col justify-between">
          <div>
            <div className="kicker">{metrics.releases.kicker}</div>
            <div className="flex items-baseline gap-4 mt-4">
              <div className="font-display font-extrabold text-6xl leading-none text-white">
                {metrics.releases.stat}
              </div>
              <div className="text-zinc-300 pb-1 text-base font-medium">
                {metrics.releases.label}
              </div>
            </div>
          </div>
          <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
            {metrics.releases.description}
          </p>
        </div>

        {/* Card 3: Ubill 650 users */}
        <div className="card spot md:col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className="kicker">{metrics.ubill.kicker}</div>
            <div className="font-display font-extrabold text-5xl leading-none mt-4 text-white">
              {metrics.ubill.stat}
            </div>
          </div>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            {metrics.ubill.label}
          </p>
        </div>

        {/* Card 4: Feed 60 FPS */}
        <div className="card spot md:col-span-1 p-6 flex flex-col justify-between">
          <div className="kicker">{metrics.feed.kicker}</div>
          <div>
            <div className="font-display font-extrabold text-5xl leading-none text-[#C5F560]">
              {metrics.feed.stat}
            </div>
            <div className="text-zinc-400 text-sm mt-2 font-medium">
              {metrics.feed.label}
            </div>
          </div>
        </div>

        {/* Card 5: Selfitoons Video Pipeline */}
        <div className="card spot md:col-span-4 p-7">
          <div className="kicker">{metrics.pipeline.kicker}</div>
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-[12px] sm:text-[12.5px]">
            {metrics.pipeline.steps.map((step, idx) => (
              <span key={idx} className="flex items-center gap-2 sm:gap-2.5">
                <span
                  className={`chip !px-3 !py-1.5 ${
                    step.primary
                      ? "!bg-[#C5F560] !text-[#07080B] !border-[#C5F560] font-bold"
                      : step.highlight
                      ? "!border-[#45E3FF]/40 !text-[#45E3FF]"
                      : "!text-zinc-200"
                  }`}
                >
                  {step.label}
                </span>
                {idx < metrics.pipeline.steps.length - 1 && (
                  <span className="text-zinc-600 font-bold">→</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-zinc-500 text-sm mt-5 leading-relaxed">
            {metrics.pipeline.description}
          </p>
        </div>

        {/* Card 6: Video Controller Pool */}
        <div className="card spot md:col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className="kicker">{metrics.controllerPool.kicker}</div>
            <div className="mt-5 flex gap-1.5">
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]"></span>
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]/75"></span>
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]/50"></span>
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]/30"></span>
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]/15"></span>
            </div>
          </div>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            {metrics.controllerPool.description}
          </p>
        </div>
      </div>
    </section>
  );
}
