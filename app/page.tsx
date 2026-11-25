import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Impact from "@/components/Impact";
import Apps from "@/components/Apps";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#07080B] text-[#E7EAF0] relative selection:bg-[#C5F560] selection:text-[#07080B]">
      {/* Fixed Pill Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Continuous Marquee Ticker */}
      <Marquee />

      {/* 01 — Impact Bento Grid */}
      <Impact />

      {/* 02 — Shipped Apps */}
      <Apps />

      {/* 03 — Experience & Education */}
      <Experience />

      {/* 04 — Tech Stack */}
      <TechStack />

      {/* 05 — Contact & Direct Hire */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
