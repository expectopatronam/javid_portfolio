"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, ArrowUpRight, Menu, X } from "lucide-react";
import { PERSONAL_INFO, NAV_ITEMS } from "@/data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.replace("#", "")).concat("contact");
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

  const [brandFirst, brandRest] = PERSONAL_INFO.brandHandle.split(".");

  return (
    <header id="nav" className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-[#0B0D12]/80 backdrop-blur-xl px-3 py-2 pl-3 shadow-2xl">
          {/* Avatar + Brand */}
          <Link href="#top" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/15 group-hover:ring-[#C5F560] transition-all">
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-display font-bold text-[15px] tracking-tight">
              {brandFirst}
              <span className="text-[#C5F560]">.</span>
              {brandRest}
            </span>
          </Link>

          {/* Nav links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  className={`nav-link hover:text-white transition ${
                    isActive ? "active text-white font-medium" : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href={PERSONAL_INFO.resumePage}
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
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition"
                href={item.href}
              >
                {String(idx + 1).padStart(2, "0")} — {item.label}
              </a>
            ))}
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              href="#contact"
            >
              05 — Contact
            </a>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <Link
                href={PERSONAL_INFO.resumePage}
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
