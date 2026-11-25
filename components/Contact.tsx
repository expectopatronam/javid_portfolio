"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, Mail, Download, FileText } from "lucide-react";
import { PERSONAL_INFO, CONTACT_DATA, SOCIAL_LINKS } from "@/data/portfolio";
import SocialIcon from "@/components/ui/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = PERSONAL_INFO.email;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden noise">
      {/* Background grid and radial glow */}
      <div className="absolute inset-0 grid-bg"></div>
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-300px] w-[900px] h-[600px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C5F560, #45E3FF 50%, transparent 70%)",
        }}
      ></div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 py-28 sm:py-36 text-center">
        <div className="kicker">{CONTACT_DATA.kicker}</div>
        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] text-5xl sm:text-7xl mt-4 text-white">
          {CONTACT_DATA.titlePart1}<br />
          {CONTACT_DATA.titlePart2} <span className="grad-text">{CONTACT_DATA.titleHighlight}</span>
        </h2>
        <p className="text-zinc-400 mt-6 text-lg">
          {CONTACT_DATA.subtitle}
        </p>

        {/* Copyable email pill */}
        <div className="mt-10 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-[#0B0D12]/80 backdrop-blur p-1.5 pl-5 max-w-full shadow-2xl">
          <span className="font-mono text-[13px] sm:text-base text-zinc-200 truncate mr-2 sm:mr-0 select-all">
            {email}
          </span>

          <button
            onClick={handleCopy}
            className="hidden sm:inline-flex items-center gap-1.5 ml-2 rounded-full bg-white/10 hover:bg-white/15 transition px-3.5 py-2 text-sm font-medium text-white cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#C5F560]" />
                <span className="text-[#C5F560]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#C5F560] text-[#07080B] px-4 py-2 text-sm font-semibold hover:bg-[#d4f885] transition shadow-md"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* External links: LinkedIn, GitHub, WhatsApp, Resume */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SOCIAL_LINKS.filter((s) => s.id !== "email").map((social) => (
            <a
              key={social.id}
              className="btn btn-ghost"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon name={social.id} className="w-4 h-4" />
              <span>{social.label}</span>
            </a>
          ))}

          <Link className="btn btn-ghost" href={PERSONAL_INFO.resumePage}>
            <FileText className="w-4 h-4 text-[#C5F560]" />
            <span>Interactive Resume</span>
          </Link>

          <a
            className="btn btn-ghost"
            href={PERSONAL_INFO.resumePdf}
            download="Javid_Akeel_Resume.pdf"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Floating Copy Toast Notification */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-[#C5F560] text-[#07080B] px-5 py-2.5 text-sm font-semibold shadow-2xl transition-all duration-300 pointer-events-none flex items-center gap-2 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <Check className="w-4 h-4 stroke-[3]" />
        <span>Email copied to clipboard ✓</span>
      </div>
    </section>
  );
}
