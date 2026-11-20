"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden noise">
      {/* Background radial glows and grid */}
      <div className="absolute inset-0 grid-bg"></div>
      <div
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C5F560, transparent 65%)" }}
      ></div>
      <div
        className="absolute top-20 -right-40 w-[620px] h-[620px] rounded-full blur-[150px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #45E3FF, transparent 65%)" }}
      ></div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 sm:pt-40 pb-20 lg:pb-28 grid lg:grid-cols-[1.15fr_.85fr] gap-14 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.03] px-3.5 py-1.5 text-[13px] text-zinc-300">
            <span className="live-dot"></span>
            <span>Open to Flutter &amp; Mobile AI roles · Chennai · Remote or relocation</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[0.95] text-[44px] sm:text-[68px] lg:text-[72px] xl:text-[76px] mt-7">
            I build mobile apps<br className="hidden lg:inline" /> with{" "}
            <span className="grad-text whitespace-nowrap">AI inside.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-7 max-w-xl text-[17px] sm:text-lg leading-relaxed text-zinc-400">
            Hi, I&apos;m Javid. Flutter engineer, 3+ years. I&apos;ve shipped apps to the App Store and Google Play, and lately I work on turning a selfie and a voice note into a video at Selfitoons.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-3 items-center">
            <a href="#contact" className="btn btn-primary">
              <span>Hire me</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a href="#apps" className="btn btn-ghost">
              View apps
            </a>
            <Link href="/resume" className="btn btn-ghost">
              <FileText className="w-4 h-4 text-[#C5F560]" />
              <span>Resume</span>
            </Link>
            <a
              href="/Javid_Akeel_Resume.pdf"
              download="Javid_Akeel_Resume.pdf"
              className="btn btn-ghost !p-2.5"
              title="Download PDF Resume directly"
            >
              <Download className="w-4 h-4 text-zinc-400 hover:text-white transition" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-3 max-w-md gap-6 border-t border-white/10 pt-6">
            <div>
              <div className="font-display text-3xl font-bold text-white">3+</div>
              <div className="text-[13px] text-zinc-500 mt-1">years in Flutter</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white">5+</div>
              <div className="text-[13px] text-zinc-500 mt-1">apps in production</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white">2</div>
              <div className="text-[13px] text-zinc-500 mt-1">stores, end to end</div>
            </div>
          </div>
        </div>

        {/* Right column: floating phone mockups + live pipeline card */}
        <div className="relative h-[480px] sm:h-[600px] flex items-center justify-center">
          {/* Subtle concentric orbit rings */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-white/[.06] pointer-events-none"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/[.04] pointer-events-none"></div>

          {/* Left phone (Internsharks / secondary preview) */}
          <div
            className="phone floaty absolute left-[4%] sm:left-[8%] top-[12%] w-[170px] sm:w-[220px] shadow-2xl transition-transform"
            style={{ "--r": "-7deg" } as React.CSSProperties}
          >
            <div className="screen relative overflow-hidden">
              <div className="island"></div>
              <Image
                src="/shots/com.doubletap.internsharks.ai-1.png"
                alt="Internsharks app mockup"
                fill
                sizes="(max-width: 640px) 170px, 220px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Right phone (Selfitoons flagship preview) */}
          <div
            className="phone floaty absolute right-[4%] sm:right-[6%] top-[2%] w-[200px] sm:w-[250px] z-10 shadow-2xl transition-transform"
            style={{ "--r": "5deg", animationDelay: "-3s" } as React.CSSProperties}
          >
            <div className="screen relative overflow-hidden">
              <div className="island"></div>
              <Image
                src="/shots/com.doubletap.ai.selfitoons-2.png"
                alt="Selfitoons app mockup"
                fill
                sizes="(max-width: 640px) 200px, 250px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating Selfitoons live pipeline card */}
          <div className="absolute left-0 sm:-left-4 bottom-[2%] z-20 w-[268px] rounded-2xl border border-white/10 bg-[#0B0D12]/90 backdrop-blur-xl p-4 shadow-2xl">
            <div className="kicker !text-[10.5px] flex items-center justify-between">
              <span>selfitoons / pipeline</span>
              <span className="text-[#C5F560] font-semibold">● live</span>
            </div>
            <div className="mt-3 space-y-2 font-mono text-[12px]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 grid place-items-center rounded-md bg-white/5 text-[10px] text-zinc-400">
                  01
                </span>
                <span className="text-zinc-300">voice note</span>
                <span className="ml-auto text-zinc-500">Whisper</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 grid place-items-center rounded-md bg-white/5 text-[10px] text-zinc-400">
                  02
                </span>
                <span className="text-zinc-300">edit selfie</span>
                <span className="ml-auto text-zinc-500">ChatGPT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 grid place-items-center rounded-md bg-white/5 text-[10px] text-zinc-400">
                  03
                </span>
                <span className="text-zinc-300">10s script</span>
                <span className="ml-auto text-zinc-500">Pydantic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 grid place-items-center rounded-md bg-[#C5F560] text-[#07080B] text-[10px] font-bold">
                  04
                </span>
                <span className="text-white font-medium">render video</span>
                <span className="ml-auto text-[#45E3FF]">Kling · Grok</span>
              </div>
            </div>
          </div>

          {/* Floating Badge (iOS + Android) */}
          <div className="hidden sm:block absolute right-0 bottom-[16%] z-20 rounded-2xl border border-white/10 bg-[#0B0D12]/90 backdrop-blur-xl px-4 py-3 shadow-2xl">
            <div className="font-display text-2xl font-bold grad-text">iOS + Android</div>
            <div className="text-[12px] text-zinc-400 leading-snug mt-0.5">
              built, signed and shipped
              <br />
              end to end
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
