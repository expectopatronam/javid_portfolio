"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Globe, Smartphone, AlertTriangle, Lightbulb, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Selfitoons",
    logo: "/app-icon.png",
    category: "Mobile (AI & Social)",
    platform: "Android & iOS",
    color: "#6366f1", // Indigo
    description: "An AI-powered cartoon creation and social media mobile application built for high-engagement feeds.",
    problem: "When launching the social feed, low-end Android devices immediately began crashing. The root cause was Android's strict hardware decoder limits: instantiating multiple concurrent video players to enable smooth scrolling exhausted device decoder resources. Furthermore, storing separate watermarked and unwatermarked video copies on the cloud for free vs. premium tiers bloated our storage costs and doubled server encoding times.",
    solution: "I ported the watermarking algorithm directly to the client devices by compiling and linking FFmpeg binaries within the Flutter build. This allowed us to dynamically overlay watermarks on-the-fly for free users. To fix the system crashes, I designed a custom Video Controller Pool Manager that caps active video players to a pool of exactly 5. As a video scrolls off-screen, its controller is recycled and reset. I implemented visibility detection to play only the active video, and preloaded adjacent videos in feed order to keep scroll latency at zero. Finally, I integrated Hive to cache feed data locally for instant startup loading.",
    impact: "Reduced cloud video storage and encoding overhead by 75% overnight. Eliminated all video decoder-related crashes on Android devices, maintained a consistent 60fps feed scrolling experience, and achieved sub-second initial feed loads.",
    tech: ["Flutter", "Dart", "Riverpod", "Hive", "FFmpeg", "GoRouter", "Razorpay", "Cashfree"],
    links: [
      {
        label: "Website",
        url: "https://selfitoons.ai/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        label: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.doubletap.ai.selfitoons&pli=1",
        icon: <Smartphone className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Ubill",
    category: "Full-Stack FinTech",
    platform: "Web & Mobile",
    color: "#10b981", // Emerald
    description: "Accounting and GST compliance platform serving retail merchants and business managers.",
    problem: "Re-coding complex government-compliant tax invoice layouts into native Flutter widgets resulted in design drift between backends and frontends. Minor template tweaks required multi-codebase edits. Additionally, compiling and rendering PDFs inside the Flutter Web build was slow, leading to frozen UI threads during customer checkouts.",
    solution: "Instead of rewriting HTML/CSS templates in Flutter code, I built a JavaScript Interop bridge. This allowed our Flutter Web client to directly interface with native browser printing engines and HTML canvas APIs. We reuse the exact backend HTML templates, rendering them inside a hidden iframe and compiling the output directly to a PDF without blocking the main rendering thread.",
    impact: "Boosted PDF invoice generation speed by 50% with zero UI thread blockages. Eliminated code duplication, ensuring that 100% of frontend-generated customer invoices matched backend receipts with zero layout drift.",
    tech: ["Flutter Web", "Node.js", "MongoDB", "GetX", "Hive", "JS Interop"],
    links: [
      {
        label: "Web App",
        url: "https://app.ubill.tech/",
        icon: <Globe className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Bizstack",
    category: "Mobile (POS & Inventory)",
    platform: "Android",
    color: "#f59e0b", // Amber
    description: "Point-of-Sale billing and inventory system tailored for small businesses.",
    problem: "Merchants operate in retail locations with highly unstable cellular connectivity. Any network latency or offline failure directly halts transactions, leading to lost sales, long checkout lines, and desynchronized inventory records across devices.",
    solution: "I architected an offline-first data layer using Android's RoomDB and SQLite. Every transaction, invoice creation, and inventory count is committed locally instantly. An automated synchronization queue runs on a background worker to poll network states, batch unsynced payloads, handle sync conflicts on the Django backend, and push real-time updates to Firebase Realtime Database once online.",
    impact: "Achieved 100% checkout uptime for 1,000+ active retail merchants, preventing transaction losses during critical outages with a self-healing sync engine.",
    tech: ["Kotlin", "Jetpack Compose", "Django", "Firebase RTDB", "RoomDB", "GCP"],
    links: [
      {
        label: "PlayStore",
        url: "http://play.google.com/store/apps/details?id=com.nativedesk.bizstack&hl=en_IN",
        icon: <Smartphone className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Engine Room Ninja",
    category: "Mobile (Education)",
    platform: "Android",
    color: "#06b6d4", // Cyan
    description: "Study and quiz preparation utility for marine engineering candidates.",
    problem: "Distributing high-definition video lessons and interactive study assets to offshore engineers required a secure, rapid-delivery media model. Manual content releases and unorganized media assets created high operational overhead.",
    solution: "I dockerized the Node.js / Express backend to simplify scaling. I integrated AWS S3 to store study materials, generating secure, short-lived pre-signed URLs on-demand to protect copyrighted study lessons, and cached assets via CloudFront CDNs.",
    impact: "Standardized build and deploy pipelines to under 5 minutes. Optimized video retrieval times by 40% and prevented unauthorized sharing of copyrighted media.",
    tech: ["Flutter", "Express.js", "MongoDB", "AWS S3", "Docker"],
    links: [
      {
        label: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.engine_room_ninja.marine_ninja",
        icon: <Smartphone className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "InvusProp Admin Panel",
    category: "Cloud Admin Platform",
    platform: "Web",
    color: "#ec4899", // Rose
    description: "Property and listing administration dashboard for real-estate managers.",
    problem: "Dealing with sensitive property transactions and confidential seller contracts required strict security permissions. Storing role configurations in client-side code was insecure, and query authorization on database levels caused API bottlenecks.",
    solution: "I integrated AWS Cognito user pools for enterprise SSO and multi-factor auth. I configured custom user role claims that are encrypted inside JWT tokens, which are parsed and validated at the edge using Next.js middleware, blocking unauthorized route rendering before it hits the backend.",
    impact: "Created an enterprise-grade administrative portal with secure access controls and automated audit logs, reducing unauthorized API attempts to zero.",
    tech: ["Next.js", "NestJS", "Tailwind CSS", "AWS Cognito", "Docker", "Terraform"],
    links: [],
  },
];

interface ProjectsProps {
  onColorChange?: (color: string) => void;
}

export default function Projects({ onColorChange }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProject = PROJECTS[currentIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax mouse movements (pure CSS variable updates for peak GPU performance)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized mouse positions (-0.5 to 0.5)
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;

      containerRef.current.style.setProperty("--mx", `${x}`);
      containerRef.current.style.setProperty("--my", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Notify parent component about color changes to adjust the global theme
  useEffect(() => {
    if (onColorChange) {
      onColorChange(activeProject.color);
    }
  }, [currentIndex, onColorChange, activeProject.color]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      ref={containerRef}
      className="w-full relative py-6 max-w-5xl mx-auto [--mx:0] [--my:0]"
    >
      {/* 1. Horizontal jump-tabs navigation */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center border-b border-border/20 pb-4">
        {PROJECTS.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setCurrentIndex(index)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              currentIndex === index
                ? "bg-accent text-accent-foreground shadow-sm"
                : "bg-muted/10 hover:bg-muted/20 text-muted-foreground hover:text-foreground"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* 2. Main Carousel Slider Shell (Transparent wrapper, letting background show through) */}
      <div className="relative flex items-center w-full">
        {/* Floating Left Arrow (Desktop only) */}
        <button
          onClick={handlePrev}
          className="hidden lg:flex absolute -left-16 z-20 items-center justify-center w-12 h-12 rounded-full border border-border bg-background/80 hover:bg-background text-foreground hover:text-accent shadow-sm hover:scale-110 transition-all cursor-pointer"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Floating Case Study (Clean transparent design) */}
        <div
          key={currentIndex}
          className="w-full bg-transparent border-none shadow-none animate-fade-in-up"
        >
          {/* Header (Level 1 Parallax) */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/20 mb-8"
            style={{
              transform: "translate(calc(var(--mx) * -8px), calc(var(--my) * -8px))",
              transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
            } as React.CSSProperties}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                  {activeProject.category}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {activeProject.platform}
                </span>
              </div>
              <div className="flex items-center gap-4">
                {activeProject.logo ? (
                  <img
                    src={activeProject.logo}
                    alt={activeProject.title}
                    className="w-12 h-12 rounded-xl object-cover border border-border/50 shadow-sm"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10 flex items-center justify-center font-bold text-accent text-lg shadow-sm">
                    {activeProject.title[0]}
                  </div>
                )}
                <div>
                  <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {activeProject.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            {activeProject.links.length > 0 && (
              <div className="flex flex-wrap gap-2.5">
                {activeProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-10 px-5 rounded-xl border border-border bg-background text-xs font-bold text-accent hover:bg-accent/5 transition-colors shadow-sm"
                  >
                    {link.icon}
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Case study body (Transparent borders, floating text with layered parallax) */}
          <div className="space-y-8">
            {/* Challenge (Level 2 Parallax) */}
            <div
              className="pl-6 border-l-2 border-amber-500 bg-transparent flex flex-col gap-3"
              style={{
                transform: "translate(calc(var(--mx) * -16px), calc(var(--my) * -16px))",
                transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
              } as React.CSSProperties}
            >
              <div className="flex items-center gap-2.5 font-bold text-amber-600 dark:text-amber-500 text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                01. The Challenge & Background
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {activeProject.problem}
              </p>
            </div>

            {/* Solution (Level 3 Parallax) */}
            <div
              className="pl-6 border-l-2 border-blue-500 bg-transparent flex flex-col gap-3"
              style={{
                transform: "translate(calc(var(--mx) * -28px), calc(var(--my) * -28px))",
                transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
              } as React.CSSProperties}
            >
              <div className="flex items-center gap-2.5 font-bold text-blue-600 dark:text-blue-500 text-sm uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                02. The Engineering Journey & Architecture
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {activeProject.solution}
              </p>
            </div>

            {/* Impact (Level 4 Parallax) */}
            <div
              className="pl-6 border-l-2 border-emerald-500 bg-transparent flex flex-col gap-3"
              style={{
                transform: "translate(calc(var(--mx) * -40px), calc(var(--my) * -40px))",
                transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
              } as React.CSSProperties}
            >
              <div className="flex items-center gap-2.5 font-bold text-emerald-600 dark:text-emerald-500 text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                03. The Outcome & Business Impact
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {activeProject.impact}
              </p>
            </div>
          </div>

          {/* Footer Tech stack (Level 1 Parallax) */}
          <div
            className="mt-8 pt-6 border-t border-border/20 flex flex-wrap items-center gap-2"
            style={{
              transform: "translate(calc(var(--mx) * -6px), calc(var(--my) * -6px))",
              transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
            } as React.CSSProperties}
          >
            <span className="text-xs font-bold text-muted uppercase tracking-wider mr-2">Technologies Used:</span>
            {activeProject.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded bg-muted/10 text-xs font-semibold text-muted border border-border/10 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Right Arrow (Desktop only) */}
        <button
          onClick={handleNext}
          className="hidden lg:flex absolute -right-16 z-20 items-center justify-center w-12 h-12 rounded-full border border-border bg-background/80 hover:bg-background text-foreground hover:text-accent shadow-sm hover:scale-110 transition-all cursor-pointer"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 3. Mobile Arrow Navigation Controls & Pagination Indicators */}
      <div className="flex items-center justify-between mt-6 lg:justify-center lg:gap-6">
        {/* Left Arrow (Visible on Mobile) */}
        <button
          onClick={handlePrev}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-card text-foreground hover:text-accent cursor-pointer"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === index ? "w-8 bg-accent" : "w-2 bg-muted/40 hover:bg-muted/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <span className="text-xs text-muted-foreground font-semibold ml-2">
            {currentIndex + 1} of {PROJECTS.length}
          </span>
        </div>

        {/* Right Arrow (Visible on Mobile) */}
        <button
          onClick={handleNext}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-card text-foreground hover:text-accent cursor-pointer"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
