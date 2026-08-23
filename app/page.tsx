"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";
import SnapAvatar from "@/components/SnapAvatar";

export default function Home() {
  const [activeView, setActiveView] = useState("projects");
  const [projectColor, setProjectColor] = useState("#6366f1");

  // Handle page state change, resetting accent color to Indigo if navigating away from projects
  const handleViewChange = (view: string) => {
    setActiveView(view);
    if (view !== "projects") {
      setProjectColor("#6366f1");
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen relative transition-all duration-700 ease-in-out"
      style={{ "--accent": projectColor } as React.CSSProperties}
    >
      {/* Global Interactive 3D Background (Smoothly color-shifting) */}
      <ThreeBackground color={projectColor} />

      {/* Navigation */}
      <Navbar activeView={activeView} onViewChange={handleViewChange} />

      {/* Main Switcher Content */}
      <main className="flex-grow flex flex-col justify-center w-full max-w-6xl mx-auto px-6 py-12 md:py-16 z-10 animate-fade-in">
        {activeView === "projects" && (
          <div className="animate-fade-in-up">
            {/* Quick Greeting Header on Projects Landing */}
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-12">
              <div className="flex-grow max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-semibold mb-4 text-muted-foreground shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for New Projects & Freelancing
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 text-foreground">
                  Hi, I&apos;m{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-500">
                    Javid Akeel
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Flutter Developer & Full-Stack Engineer. Here is a deep-dive into key engineering challenges I have solved.
                </p>
              </div>

              {/* Interactive 3D Parallax Snapchat Avatar */}
              <div className="flex-shrink-0 self-center md:self-auto">
                <SnapAvatar color={projectColor} />
              </div>
            </div>
            
            {/* Carousel Projects component */}
            <Projects onColorChange={setProjectColor} />
          </div>
        )}

        {activeView === "skills" && (
          <div className="animate-fade-in-up">
            <Skills />
          </div>
        )}

        {activeView === "experience" && (
          <div className="animate-fade-in-up">
            <Experience />
          </div>
        )}

        {activeView === "contact" && (
          <div className="animate-fade-in-up">
            <Contact />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
