"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Globe, Smartphone, Lightbulb, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Selfitoons",
    logo: "/app-icon.png",
    category: "Mobile (AI & Social)",
    platform: "Android & iOS",
    color: "#6366f1", // Indigo
    description: "An AI-powered cartoon creation and social media mobile application built for high-engagement feeds.",
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
    cases: [
      {
        problem: "We were storing and encoding two separate copies (watermarked and unwatermarked) of every generated video on our backend server, bloating cloud storage costs and doubling encoding latency.",
        solution: "I shifted the watermarking logic completely to the client side. By compiling and linking FFmpeg binaries within the mobile build, the frontend now overlays watermarks on-the-fly for free-tier users directly on their devices, requesting a single clean source video from the backend.",
        impact: "Slashed cloud storage and encoding processing costs by 75% overnight and eliminated double-encoding latency on the server."
      },
      {
        problem: "High-bitrate video feeds crashed the application on Android due to the system's strict hardware limit of exactly 5 concurrent active video decoders during infinite scrolling.",
        solution: "I designed a custom Video Controller Pool Manager that strictly caps active controllers to a pool of 5. When a video scrolls off-screen, its controller is recycled, reset, and re-assigned to the next video. I implemented visibility detection to play only the active video and preloaded adjacent items in feed order.",
        impact: "Eliminated 100% of decoder-related crashes on low-end Android devices while achieving smooth, zero-latency 60fps scrolling."
      },
      {
        problem: "Users experienced a sluggish initial startup while waiting for remote API requests to fetch feed media metadata on app launch.",
        solution: "I implemented Hive local database caching. The initial feed payload is stored locally and rendered immediately on launch, while remote API synchronization updates the cache silently in the background.",
        impact: "Achieved sub-second initial feed loads, improving user retention and startup responsiveness."
      }
    ]
  },
  {
    title: "Ubill",
    category: "Full-Stack FinTech",
    platform: "Web & Mobile",
    color: "#10b981", // Emerald
    description: "Accounting and GST compliance platform serving retail merchants and business managers.",
    tech: ["Flutter Web", "Node.js", "MongoDB", "GetX", "Hive", "JS Interop"],
    links: [
      {
        label: "Web App",
        url: "https://app.ubill.tech/",
        icon: <Globe className="w-4 h-4" />,
      },
    ],
    cases: [
      {
        problem: "Coding complex government-compliant GST invoice layouts into native Flutter widgets caused double-maintenance of styling code across frontends and backends. Additionally, rendering PDFs in Flutter Web was slow, freezing the UI thread at checkout.",
        solution: "I built a JavaScript Interop bridge allowing the Flutter Web client to call native browser printing engines and HTML canvas APIs. We reuse the exact HTML/CSS templates from the backend, rendering them inside a hidden iframe and compiling the output directly to a PDF without blocking the main thread.",
        impact: "Boosted PDF generation speeds by 50% with zero UI thread blockages and eliminated frontend-backend layout discrepancies."
      }
    ]
  },
  {
    title: "Bizstack",
    category: "Mobile (POS & Inventory)",
    platform: "Android",
    color: "#f59e0b", // Amber
    description: "Point-of-Sale billing and inventory system tailored for small businesses.",
    tech: ["Kotlin", "Jetpack Compose", "Django", "Firebase RTDB", "RoomDB", "GCP"],
    links: [
      {
        label: "PlayStore",
        url: "http://play.google.com/store/apps/details?id=com.nativedesk.bizstack&hl=en_IN",
        icon: <Smartphone className="w-4 h-4" />,
      },
    ],
    cases: [
      {
        problem: "Merchant locations frequently suffer from unstable cellular and internet connectivity, causing system latency or offline failures that directly halt transactions, leading to lost sales and desynchronized inventory records.",
        solution: "I architected an offline-first data layer using Android's RoomDB and SQLite. All transaction entries commit locally instantly. An automated background synchronization queue runs on a background worker to poll network states, batch unsynced payloads, handle sync conflicts on the Django backend, and push real-time updates to Firebase RTDB once online.",
        impact: "Achieved 100% checkout uptime for 1,000+ active retail merchants, securing all transaction history against network failures."
      }
    ]
  },
  {
    title: "Engine Room Ninja",
    category: "Mobile (Education)",
    platform: "Android",
    color: "#06b6d4", // Cyan
    description: "Study and quiz preparation utility for marine engineering candidates.",
    tech: ["Flutter", "Express.js", "MongoDB", "AWS S3", "Docker"],
    links: [
      {
        label: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.engine_room_ninja.marine_ninja",
        icon: <Smartphone className="w-4 h-4" />,
      },
    ],
    cases: [
      {
        problem: "Delivering high-definition study assets securely to offshore engineers while preventing unauthorized sharing of copyrighted video files. Manual content deployments also caused high operational overhead.",
        solution: "I dockerized the Node.js / Express backend to simplify scaling. I integrated AWS S3 to store study materials, generating secure, short-lived pre-signed URLs on-demand to protect media and cached assets via CloudFront CDNs.",
        impact: "Standardized deployment pipelines to under 5 minutes, reduced media latency by 40%, and secured copyrighted assets."
      }
    ]
  },
  {
    title: "InvusProp Admin Panel",
    category: "Cloud Admin Platform",
    platform: "Web",
    color: "#ec4899", // Rose
    description: "Property and listing administration dashboard for real-estate managers.",
    tech: ["Next.js", "NestJS", "Tailwind CSS", "AWS Cognito", "Docker", "Terraform"],
    links: [],
    cases: [
      {
        problem: "Dealing with sensitive property transactions required strict permission controls. Client-side configurations were insecure, and query authorization checks on the database caused API bottlenecks.",
        solution: "I integrated AWS Cognito user pools for enterprise SSO and multi-factor auth. I configured custom user role claims encrypted inside JWT tokens, which are parsed and validated at the edge using Next.js middleware, blocking unauthorized route rendering before it hits the backend.",
        impact: "Secured administrative dashboards with automated audit logs and fine-grained visual controls, reducing unauthorized API attempts to zero."
      }
    ]
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
      className="w-full relative py-6 max-w-5xl mx-auto overflow-x-clip [--mx:0] [--my:0]"
    >
      {/* 1. Horizontal jump-tabs navigation */}
      <div className="flex flex-wrap gap-2.5 mb-8 justify-center border-b border-border/20 pb-4">
        {PROJECTS.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setCurrentIndex(index)}
            className={`px-4.5 py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              currentIndex === index
                ? "bg-accent text-accent-foreground shadow-sm"
                : "bg-muted/10 hover:bg-muted/20 text-muted-foreground hover:text-foreground"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* 2. Main Carousel Slider Shell (Transparent wrapper) */}
      <div className="relative flex items-center w-full">
        {/* Floating Left Arrow (Desktop only) */}
        <button
          onClick={handlePrev}
          className="hidden lg:flex absolute -left-16 z-20 items-center justify-center w-12 h-12 rounded-full border border-border bg-background/80 hover:bg-background text-foreground hover:text-accent shadow-sm hover:scale-110 transition-all cursor-pointer"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Horizontal Overflow Slide Container */}
        <div className="overflow-hidden w-full relative">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {PROJECTS.map((project, index) => {
              const diff = index - currentIndex;

              return (
                <div
                  key={project.title}
                  className="w-full flex-shrink-0 bg-transparent border-none shadow-none"
                >
                  {/* Header (Parallax level 1) */}
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/20 mb-8 transition-transform duration-700 ease-out"
                    style={{
                      transform: `translateX(${diff * 20}px)`,
                    }}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          {project.platform}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        {project.logo ? (
                          <img
                            src={project.logo}
                            alt={project.title}
                            className="w-14 h-14 rounded-xl object-cover border border-border/50 shadow-sm"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10 flex items-center justify-center font-bold text-accent text-xl shadow-sm">
                            {project.title[0]}
                          </div>
                        )}
                        <div>
                          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-base text-muted-foreground mt-1">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-2.5">
                        {project.links.map((link) => (
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

                  {/* Narrative Case Studies list (Floating text with horizontal parallax offsets) */}
                  <div className="space-y-12">
                    {project.cases.map((c, cIndex) => {
                      const parallaxOffset = diff * (30 + cIndex * 20);

                      return (
                        <div
                          key={cIndex}
                          className="flex flex-col gap-6 transition-transform duration-700 ease-out border-b border-border/10 pb-8 last:border-b-0 last:pb-0"
                          style={{
                            transform: `translateX(${parallaxOffset}px)`,
                          }}
                        >
                          {/* Large Problem/Challenge Header */}
                          <div className="flex flex-col gap-1.5">
                            <span className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                              The Challenge & Context
                            </span>
                            <h4 className="text-2xl md:text-3xl font-extrabold text-foreground leading-snug tracking-tight">
                              {c.problem}
                            </h4>
                          </div>

                          {/* Details Grid (Solution & Impact columns) */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pl-10">
                            {/* Solution */}
                            <div className="md:col-span-7 flex flex-col gap-2">
                              <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500 flex items-center gap-1.5">
                                <Lightbulb className="w-4 h-4" />
                                Engineering Solution
                              </span>
                              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                {c.solution}
                              </p>
                            </div>

                            {/* Impact */}
                            <div className="md:col-span-5 flex flex-col gap-2">
                              <span className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-500 flex items-center gap-1.5">
                                <TrendingUp className="w-4 h-4" />
                                Impact & Metrics
                              </span>
                              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-bold">
                                {c.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer Tech stack (Parallax level 1) */}
                  <div
                    className="mt-8 pt-6 border-t border-border/20 flex flex-wrap items-center gap-2 transition-transform duration-700 ease-out"
                    style={{
                      transform: `translateX(${diff * 20}px)`,
                    }}
                  >
                    <span className="text-sm font-bold text-muted uppercase tracking-wider mr-3">Technologies Used:</span>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 rounded-xl bg-muted/10 text-xs md:text-sm font-semibold text-muted border border-border/10 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
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
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === index ? "w-10 bg-accent" : "w-2.5 bg-muted/40 hover:bg-muted/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <span className="text-xs md:text-sm text-muted-foreground font-semibold ml-2">
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
