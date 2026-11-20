"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, Mail, ExternalLink, Download, FileText } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "workwithakeel@gmail.com";

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
        <div className="kicker">05 — Contact</div>
        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] text-5xl sm:text-7xl mt-4 text-white">
          Hiring for Flutter<br />
          or mobile AI? <span className="grad-text">Let&apos;s talk.</span>
        </h2>
        <p className="text-zinc-400 mt-6 text-lg">
          Based in Chennai. Happy to work remote or relocate.
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

        {/* External links: LinkedIn, GitHub, Resume */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/javid-akeel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.5-2.25 3.1V21H9z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            className="btn btn-ghost"
            href="https://github.com/expectopatronam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" />
            </svg>
            <span>GitHub</span>
          </a>

          <Link className="btn btn-ghost" href="/resume">
            <FileText className="w-4 h-4 text-[#C5F560]" />
            <span>Interactive Resume</span>
          </Link>

          <a
            className="btn btn-ghost"
            href="/Javid_Akeel_Resume.pdf"
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
