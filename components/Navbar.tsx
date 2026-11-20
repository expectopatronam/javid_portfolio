"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["impact", "apps", "experience", "stack", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="nav" className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-[#0B0D12]/80 backdrop-blur-xl px-3 py-2 pl-3 shadow-2xl">
          {/* Avatar + Brand */}
          <Link href="#top" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/15 group-hover:ring-[#C5F560] transition-all">
              <Image
                src="/avatar.png"
                alt="Javid Akeel"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-display font-bold text-[15px] tracking-tight">
              javid<span className="text-[#C5F560]">.</span>akeel
            </span>
          </Link>

          {/* Nav links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
            <a
              className={`nav-link hover:text-white transition ${activeSection === "impact" ? "active text-white font-medium" : ""}`}
              href="#impact"
            >
              Impact
            </a>
            <a
              className={`nav-link hover:text-white transition ${activeSection === "apps" ? "active text-white font-medium" : ""}`}
              href="#apps"
            >
              Apps
            </a>
            <a
              className={`nav-link hover:text-white transition ${activeSection === "experience" ? "active text-white font-medium" : ""}`}
              href="#experience"
            >
              Experience
            </a>
            <a
              className={`nav-link hover:text-white transition ${activeSection === "stack" ? "active text-white font-medium" : ""}`}
              href="#stack"
            >
              Stack
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/25 transition"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5F560]" />
              <span>Resume</span>
            </Link>

            <a
              href="#contact"
              className="btn btn-primary !py-2 !px-4 !text-sm cursor-pointer"
            >
              Hire me
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[#0B0D12]/95 backdrop-blur-xl p-4 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              href="#impact"
            >
              01 — Impact
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              href="#apps"
            >
              02 — Shipped Apps
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              href="#experience"
            >
              03 — Experience
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              href="#stack"
            >
              04 — Tech Stack
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              href="#contact"
            >
              05 — Contact
            </a>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C5F560]"
              >
                <FileText className="w-4 h-4" />
                <span>Interactive Resume / PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
