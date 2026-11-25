"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, FileText } from "lucide-react";
import { PERSONAL_INFO, HERO_DATA } from "@/data/portfolio";

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

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 sm:pt-40 pb-20 lg:pb-28 grid lg:grid-cols-[1.1fr_.9fr] gap-14 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.03] px-3.5 py-1.5 text-[13px] text-zinc-300">
            <span className="live-dot"></span>
            <span>Open to full-stack, GenAI, or mobile roles · Chennai · Remote or relocation</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[0.95] text-[42px] sm:text-[62px] lg:text-[66px] xl:text-[72px] mt-7">
            I build full-stack<br />
            products in{" "}
            <span className="grad-text">
              React<br />
              and Next.js
            </span>{" "}
            — and<br />
            GenAI in Python.
          </h1>

          {/* Subtitle */}
          <p className="mt-7 max-w-xl text-[17px] sm:text-lg leading-relaxed text-zinc-400">
            Software engineer, 3+ years. Node and NestJS on the backend, FastAPI for GenAI pipelines, Flutter when it needs to be in the stores.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-3 items-center max-w-lg">
            <a href="#contact" className="btn btn-primary">
              <span>Hire me</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a href="#impact" className="btn btn-ghost">
              View work
            </a>
            <a href="#apps" className="btn btn-ghost">
              Mobile apps
            </a>
            <Link href={PERSONAL_INFO.resumePage} className="btn btn-ghost">
              <FileText className="w-4 h-4 text-[#C5F560]" />
              <span>Resume</span>
            </Link>
            <a
              href={PERSONAL_INFO.resumePdf}
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
              <div className="text-[13px] text-zinc-500 mt-1">years shipping products</div>
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

        {/* Right column: web browser mockup + foreground phone mockup + live pipeline card */}
        <div className="relative h-[470px] sm:h-[580px] flex items-center justify-center">
          {/* Subtle concentric orbit rings */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-white/[.06] pointer-events-none"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/[.04] pointer-events-none"></div>

          {/* Background Browser Mockup (selfitoons.ai) */}
          <div
            className="floaty absolute left-[2%] sm:left-[4%] top-[6%] sm:top-[8%] w-[290px] sm:w-[400px] lg:w-[420px] rounded-2xl border border-white/10 bg-[#0D1017] shadow-2xl overflow-hidden"
            style={{ "--r": "-3deg" } as React.CSSProperties}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-white/[.08] bg-[#121620]">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              </div>
              <div className="flex-1 rounded-full bg-[#07080B]/70 border border-white/[.06] px-3 py-1 text-[11px] font-mono text-zinc-400 truncate">
                selfitoons.ai
              </div>
            </div>
            {/* Browser viewport */}
            <div className="relative aspect-[16/10] w-full bg-[#07080B]">
              <Image
                src="/shots/selfitoons-web.png"
                alt="Selfitoons web application"
                fill
                sizes="(max-width: 640px) 290px, 420px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Foreground Phone Mockup (Selfitoons mobile app) */}
          <div
            className="phone floaty absolute right-[4%] sm:right-[10%] top-[22%] sm:top-[20%] w-[175px] sm:w-[215px] z-10 shadow-2xl transition-transform"
            style={{ "--r": "0deg", animationDelay: "-3s" } as React.CSSProperties}
          >
            <div className="screen relative overflow-hidden">
              <div className="island"></div>
              <Image
                src="/shots/com.doubletap.ai.selfitoons-2.png"
                alt="Selfitoons mobile app mockup"
                fill
                sizes="(max-width: 640px) 175px, 215px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating Selfitoons live pipeline card */}
          <div className="absolute left-0 sm:-left-2 bottom-[4%] sm:bottom-[8%] z-20 w-[268px] rounded-2xl border border-white/10 bg-[#0B0D12]/90 backdrop-blur-xl p-4 shadow-2xl">
            <div className="kicker !text-[10.5px] flex items-center justify-between">
              <span>{HERO_DATA.pipelineTitle}</span>
              <span className="text-[#C5F560] font-semibold">● live</span>
            </div>
            <div className="mt-3 space-y-2 font-mono text-[12px]">
              {HERO_DATA.pipelineSteps.map((step) => (
                <div key={step.step} className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 grid place-items-center rounded-md text-[10px] ${
                      step.active
                        ? "bg-[#C5F560] text-[#07080B] font-bold"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className={step.active ? "text-white font-medium" : "text-zinc-300"}>
                    {step.label}
                  </span>
                  <span
                    className={`ml-auto ${
                      step.active ? "text-[#45E3FF]" : "text-zinc-500"
                    }`}
                  >
                    {step.tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
