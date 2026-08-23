"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Globe, Smartphone, Lightbulb, TrendingUp, ChevronLeft, ChevronRight, Info } from "lucide-react";

const PROJECTS = [
  {
    title: "Selfitoons",
    logo: "/app-icon.png",
    category: "Mobile (AI & Social)",
    platform: "Android & iOS",
    color: "#6366f1", // Indigo
    description: "AI-based video creation and social media app.",
    summary: "Selfitoons is an AI-based video creation and social media app. You can create custom AI videos with a single selfie image and video prompt.",
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
    description: "Full-stack GST accounting & stock management platform built from scratch.",
    summary: "For Ubill, I mastered GST compliance, accounting principles, stock management, and journal entries, building the entire full-stack business logic completely from scratch.",
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
    description: "Offline-first POS & inventory platform with delta sync & GCP microservices.",
    summary: "Bizstack is an offline-first POS and inventory app featuring delta sync. I architected the complete application, utilizing Python with Google Cloud Services for backend microservices and Firebase for real-time database management.",
    tech: ["Kotlin", "Jetpack Compose", "Python", "GCP Microservices", "Firebase RTDB", "RoomDB"],
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
        solution: "I architected an offline-first data layer with delta synchronization using Android's RoomDB and SQLite. All transaction entries commit locally instantly. An automated background synchronization engine polls network states, batching unsynced delta payloads to Python microservices deployed on Google Cloud Services and pushing real-time sync updates to Firebase RTDB once online.",
        impact: "Achieved 100% checkout uptime for 1,000+ active retail merchants, securing all transaction history against network failures."
      }
    ]
  },
  {
    title: "Engine Room Ninja",
    category: "Mobile (Education)",
    platform: "Android",
    color: "#06b6d4", // Cyan
    description: "Study and quiz utility for marine engineering candidates.",
    summary: "Engine Room Ninja is a secure marine engineering study and quiz app providing offshore candidates with encrypted video lessons and preparation materials.",
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
    title: "InvusProp",
    category: "Cloud Admin Platform",
    platform: "Web",
    color: "#ec4899", // Rose
    description: "Property administration dashboard for real-estate managers.",
    summary: "InvusProp is a cloud property administration platform built for real-estate managers to handle listings, tenant records, and enterprise RBAC security.",
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

// Expanded track array for infinite non-rewinding CarouselView looping
const REPEAT_COUNT = 5;
const EXPANDED_PROJECTS = Array.from({ length: REPEAT_COUNT }).flatMap(() => PROJECTS);
const MID_OFFSET = Math.floor(REPEAT_COUNT / 2) * PROJECTS.length; // 10

interface ProjectsProps {
  onColorChange?: (color: string) => void;
}

export default function Projects({ onColorChange }: ProjectsProps) {
  // Virtual continuous slide index starting in the middle set (10)
  const [virtualIndex, setVirtualIndex] = useState(MID_OFFSET);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Active project index (0 to 4)
  const currentIndex = ((virtualIndex % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
  const activeProject = PROJECTS[currentIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  // Notify parent component about active project color
  useEffect(() => {
    if (onColorChange) {
      onColorChange(activeProject.color);
    }
  }, [currentIndex, onColorChange, activeProject.color]);

  const navigateVirtual = (newVirtualIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setVirtualIndex(newVirtualIndex);

    // After animation completes, silently re-center virtualIndex to prevent infinite bounds
    setTimeout(() => {
      setIsTransitioning(false);
      const targetProjIndex = ((newVirtualIndex % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
      const normalizedVirtualIndex = MID_OFFSET + targetProjIndex;

      if (newVirtualIndex !== normalizedVirtualIndex) {
        setIsResetting(true);
        setVirtualIndex(normalizedVirtualIndex);
        // Turn transition back on after 1 frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsResetting(false);
          });
        });
      }
    }, 600);
  };

  const handlePrev = () => {
    navigateVirtual(virtualIndex - 1);
  };

  const handleNext = () => {
    navigateVirtual(virtualIndex + 1);
  };

  const jumpToProject = (targetIndex: number) => {
    if (isTransitioning) return;
    const diff = targetIndex - currentIndex;
    navigateVirtual(virtualIndex + diff);
  };

  // Math for CarouselView track centering (80% step per item)
  // Formula: 10% - (virtualIndex * 80%)
  const trackOffset = 10 - virtualIndex * 80;

  return (
    <div
      ref={containerRef}
      className="w-full relative py-6 max-w-6xl mx-auto overflow-x-clip"
    >
      {/* 1. Horizontal jump-tabs navigation */}
      <div className="flex flex-wrap gap-2.5 mb-8 justify-center border-b border-border/20 pb-4">
        {PROJECTS.map((project, index) => (
          <button
            key={project.title}
            onClick={() => jumpToProject(index)}
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

      {/* 2. Main CarouselView Viewport Stage */}
      <div className="relative w-full min-h-[560px] md:min-h-[620px] flex items-center justify-center my-4 overflow-hidden">
        {/* Floating Left Navigation Arrow */}
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="absolute left-2 md:left-4 z-40 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-border bg-background/90 hover:bg-background text-foreground hover:text-accent shadow-lg hover:scale-110 transition-all cursor-pointer disabled:opacity-40"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* CarouselView Infinite Track */}
        <div
          className={`flex items-center w-full ${
            isResetting ? "transition-none" : "transition-transform duration-600 ease-[cubic-bezier(0.2,0,0,1)]"
          }`}
          style={{
            transform: `translateX(${trackOffset}%)`,
          }}
        >
          {EXPANDED_PROJECTS.map((project, index) => {
            const isActive = index === virtualIndex;

            return (
              <div
                key={`${project.title}-${index}`}
                onClick={() => !isActive && !isTransitioning && navigateVirtual(index)}
                className={`flex-shrink-0 w-[76%] mx-[2%] p-6 md:p-10 rounded-3xl transition-all duration-600 ease-[cubic-bezier(0.2,0,0,1)] select-none ${
                  isActive
                    ? "opacity-100 border border-accent/40 bg-card/90 dark:bg-card/95 backdrop-blur-xl shadow-2xl scale-100 cursor-default z-30"
                    : "opacity-40 border border-border/20 bg-card/40 backdrop-blur-md shadow-md scale-[0.92] cursor-pointer hover:opacity-65 z-10"
                }`}
              >
                {/* Card Header (Title, Logo, Badges & Links) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/20 mb-6">
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
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover border border-border/50 shadow-sm"
                        />
                      ) : (
                        <div
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-bold text-accent text-xl shadow-sm"
                          style={{ background: `${project.color}20`, color: project.color }}
                        >
                          {project.title[0]}
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground mt-0.5">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* External Links */}
                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 self-start sm:self-auto">
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

                {/* Dedicated Project Overview Callout */}
                <div className="mb-6 p-4 rounded-2xl bg-accent/5 border-l-4 border-accent/70 flex items-start gap-3">
                  <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent mb-0.5 block">
                      Project Overview & Summary
                    </span>
                    <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Case Studies Content */}
                <div className="space-y-8 max-h-[340px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {project.cases.map((c, cIndex) => (
                    <div
                      key={cIndex}
                      className="flex flex-col gap-4 border-b border-border/10 pb-6 last:border-b-0 last:pb-0"
                    >
                      {/* Challenge Headline */}
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                          The Challenge & Context
                        </span>
                        <h4 className="text-xl md:text-2xl font-extrabold text-foreground leading-snug tracking-tight">
                          {c.problem}
                        </h4>
                      </div>

                      {/* Solution & Impact Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-7 flex flex-col gap-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500 flex items-center gap-1.5">
                            <Lightbulb className="w-3.5 h-3.5" />
                            Engineering Solution
                          </span>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {c.solution}
                          </p>
                        </div>
                        <div className="md:col-span-5 flex flex-col gap-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-500 flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5" />
                            Impact & Metrics
                          </span>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-bold">
                            {c.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-4 border-t border-border/20 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-muted uppercase tracking-wider mr-2">Technologies Used:</span>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl bg-muted/10 text-xs font-semibold text-muted border border-border/10 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Right Navigation Arrow */}
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="absolute right-2 md:right-4 z-40 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-border bg-background/90 hover:bg-background text-foreground hover:text-accent shadow-lg hover:scale-110 transition-all cursor-pointer disabled:opacity-40"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      </div>

      {/* 3. Slide Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => jumpToProject(index)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              currentIndex === index ? "w-10 bg-accent" : "w-2.5 bg-muted/40 hover:bg-muted/60"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
        <span className="text-xs md:text-sm text-muted-foreground font-semibold ml-2">
          {currentIndex + 1} of {PROJECTS.length}
        </span>
      </div>
    </div>
  );
}
