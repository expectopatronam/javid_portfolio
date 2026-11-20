"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";
import SnapAvatar from "@/components/SnapAvatar";
import { useScreenType } from "@/hooks/useScreenType";
import { Sparkles, ArrowRight, ShieldCheck, Briefcase, Cpu, Layers } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("projects");
  const [projectColor, setProjectColor] = useState("#6366f1");

  // Initialize client-side screen layout classifiers
  useScreenType();

  // Scroll spy to update active section in navbar as user scrolls
  useEffect(() => {
    const sectionIds = ["projects", "skills", "experience", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // Offset for navbar

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen relative transition-all duration-700 ease-in-out"
      style={{ "--accent": projectColor } as React.CSSProperties}
    >
      {/* Global Interactive 3D Background */}
      <ThreeBackground color={projectColor} />

      {/* Dynamic Ambient Blur Glow */}
      <div
        className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[760px] md:h-[760px] rounded-full blur-[170px] opacity-[0.05] dark:opacity-[0.08] transition-all duration-1000 ease-in-out pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle, ${projectColor} 0%, transparent 70%)`,
        }}
      />

      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Single-Page Content */}
      <main className="flex-grow flex flex-col justify-center w-full max-w-6xl mx-auto px-6 py-8 md:py-12 z-10 space-y-20 md:space-y-28">
        
        {/* Section 1: Hero & Projects */}
        <section id="projects" className="scroll-mt-24 space-y-10 animate-fade-in-up">
          {/* Greeting Header */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 pt-4 pb-2">
            <div className="flex-grow max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-semibold text-muted-foreground shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Full-Time Roles & High-Impact Contracts
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                  Javid Akeel
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                Software Engineer specializing in <strong className="text-foreground font-semibold">Mobile & Generative AI applications</strong> with 3+ years engineering cross-platform apps (iOS, Android, Web). Architected multimodal GenAI video pipelines, client-side FFmpeg processing (-75% server load), and shipped <strong>5+ production apps</strong> to the Apple App Store and Google Play Store.
              </p>

              {/* Quick highlight badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-card border border-border/80 text-foreground">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  App Store & Play Store Shipper
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-card border border-border/80 text-foreground">
                  <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                  Multimodal GenAI & FFmpeg
                </span>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline cursor-pointer ml-1"
                >
                  Get in touch <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Interactive 3D Parallax Avatar */}
            <div className="flex-shrink-0 self-center md:self-auto">
              <SnapAvatar color={projectColor} />
            </div>
          </div>

          {/* Vertical Grid Projects Component */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Featured Projects
                </h2>
                <p className="text-sm text-muted-foreground">
                  Production mobile applications, AI systems, and full-stack software architectures
                </p>
              </div>
            </div>

            <Projects onColorChange={setProjectColor} />
          </div>
        </section>

        {/* Section 2: Skills */}
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        {/* Section 3: Experience */}
        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        {/* Section 4: Contact */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
