"use client";

import { useEffect, useRef } from "react";

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

  return (
    <section id="impact" ref={containerRef} className="relative mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="kicker">01 — Impact</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mt-3 text-white">
            Small decisions, real results.
          </h2>
        </div>
        <p className="text-zinc-400 max-w-sm">
          A few architectural decisions and performance optimizations from the last couple of years that I&apos;m proud of.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-6 auto-rows-[minmax(190px,auto)]">
        {/* Card 1: FFmpeg ~75% (Big Card) */}
        <div className="card spot md:col-span-3 md:row-span-2 p-7 sm:p-9 flex flex-col justify-between">
          <div>
            <div className="kicker">Selfitoons · FFmpeg</div>
            <div className="font-display font-extrabold text-[84px] sm:text-[116px] leading-none mt-6 grad-text tracking-tight">
              ~75%
            </div>
            <div className="text-xl font-semibold mt-2 text-white">
              less backend video processing
            </div>
            <p className="text-zinc-400 mt-3 max-w-md text-sm sm:text-base leading-relaxed">
              We were watermarking every video on the server. I moved watermarking onto the mobile client with FFmpeg, so the cloud backend only renders one clean master copy.
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
            <div className="kicker">Store releases</div>
            <div className="flex items-baseline gap-4 mt-4">
              <div className="font-display font-extrabold text-6xl leading-none text-white">5+</div>
              <div className="text-zinc-300 pb-1 text-base font-medium">
                production apps across App Store and Google Play
              </div>
            </div>
          </div>
          <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
            Code signing, TestFlight, privacy manifests, fastlane staged rollouts, review submissions. I handle the entire release lifecycle, not just the build.
          </p>
        </div>

        {/* Card 3: Ubill 650 users */}
        <div className="card spot md:col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className="kicker">Ubill</div>
            <div className="font-display font-extrabold text-5xl leading-none mt-4 text-white">650+</div>
          </div>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            active merchants migrated from legacy desktop billing to Ubill POS, with historical catalogs and transactions intact.
          </p>
        </div>

        {/* Card 4: Feed 60 FPS */}
        <div className="card spot md:col-span-1 p-6 flex flex-col justify-between">
          <div className="kicker">Feed</div>
          <div>
            <div className="font-display font-extrabold text-5xl leading-none text-[#C5F560]">60</div>
            <div className="text-zinc-400 text-sm mt-2 font-medium">FPS on budget phones</div>
          </div>
        </div>

        {/* Card 5: Selfitoons Video Pipeline */}
        <div className="card spot md:col-span-4 p-7">
          <div className="kicker">How the Selfitoons video pipeline works</div>
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-[12px] sm:text-[12.5px]">
            <span className="chip !text-zinc-200 !px-3 !py-1.5">🎙 voice prompt</span>
            <span className="text-zinc-600 font-bold">→</span>
            <span className="chip !px-3 !py-1.5">Whisper transcript</span>
            <span className="text-zinc-600 font-bold">→</span>
            <span className="chip !px-3 !py-1.5">ChatGPT image edit</span>
            <span className="text-zinc-600 font-bold">→</span>
            <span className="chip !px-3 !py-1.5">Pydantic choreography</span>
            <span className="text-zinc-600 font-bold">→</span>
            <span className="chip !px-3 !py-1.5 !border-[#45E3FF]/40 !text-[#45E3FF]">Kling / Grok</span>
            <span className="text-zinc-600 font-bold">→</span>
            <span className="chip !px-3 !py-1.5 !bg-[#C5F560] !text-[#07080B] !border-[#C5F560] font-bold">
              🎬 video
            </span>
          </div>
          <p className="text-zinc-500 text-sm mt-5 leading-relaxed">
            FastAPI microservice with Pydantic JSON schemas. Credits are locked while a video renders, deducted upon successful delivery, and safely refunded on failure.
          </p>
        </div>

        {/* Card 6: Video Controller Pool */}
        <div className="card spot md:col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className="kicker">Video controller pool</div>
            <div className="mt-5 flex gap-1.5">
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]"></span>
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]/75"></span>
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]/50"></span>
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]/30"></span>
              <span className="h-9 flex-1 rounded-md bg-[#C5F560]/15"></span>
            </div>
          </div>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Strict circular pool of max 5 active player controllers, recycled continuously as users scroll. Zero memory leaks, zero Android hardware codec exhaustion crashes.
          </p>
        </div>
      </div>
    </section>
  );
}
