"use client";

import { useState } from "react";
import {
  ExternalLink,
  Globe,
  Smartphone,
  Apple,
  Lightbulb,
  TrendingUp,
  Info,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

export interface ProjectLink {
  label: string;
  url: string;
  iconType: "web" | "android" | "ios" | "external";
}

export interface CaseStudy {
  problem: string;
  solution: string;
  impact: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "mobile-ai" | "fintech-pos" | "fullstack-cloud";
  categoryLabel: string;
  platform: string;
  color: string;
  tagline: string;
  summary: string;
  logo?: string;
  metrics: string[];
  tech: string[];
  links: ProjectLink[];
  cases: CaseStudy[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "selfitoons",
    title: "Selfitoons",
    logo: "/app-icon.png",
    category: "mobile-ai",
    categoryLabel: "Mobile & Generative AI",
    platform: "Android · iOS · Web",
    color: "#6366f1", // Indigo
    tagline: "Multimodal AI video generation & high-performance social platform.",
    summary:
      "Architected an end-to-end multimodal GenAI application that synthesizes custom AI videos from a user's voice prompt and selfie. Engineered client-side FFmpeg processing, video controller pooling, and full release management for both Apple App Store and Google Play Store.",
    metrics: [
      "-75% Backend Video CPU Load",
      "Steady 60 FPS on Budget Devices",
      "Live on App Store & Play Store",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "Hive",
      "FFmpeg",
      "OpenAI Whisper",
      "Kling AI",
      "Grok Imagine",
      "Node.js",
      "Redis",
      "FastAPI",
      "Pydantic",
      "Razorpay",
      "Cashfree",
      "TestFlight",
      "Play Console",
    ],
    links: [
      {
        label: "Website",
        url: "https://selfitoons.ai/",
        iconType: "web",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/in/app/selfitoons/id6758597947",
        iconType: "ios",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.doubletap.ai.selfitoons",
        iconType: "android",
      },
    ],
    cases: [
      {
        problem:
          "Storing and encoding dual copies (watermarked and unwatermarked) of every generated video on the server bloated cloud storage costs and doubled rendering latency.",
        solution:
          "Shifted video watermarking to the client by compiling and linking native FFmpeg libraries into the mobile build. The device renders the watermark overlay on-the-fly for free-tier users, streaming a single clean source video from the backend.",
        impact:
          "Slashed cloud storage and backend video transcoding costs by ~75% while eliminating server encoding latency.",
      },
      {
        problem:
          "High-bitrate video feeds crashed on Android due to the hardware limit of max 5 concurrent active video decoders during continuous scrolling.",
        solution:
          "Engineered a custom Video Controller Pool Manager strictly capped at 5 controllers. Controllers are dynamically recycled and reassigned when videos scroll off-screen, combined with viewport intersection detection and adjacent item prefetching.",
        impact:
          "Eliminated 100% of decoder crashes on low-end Android devices while sustaining buttery 60 FPS scrolling.",
      },
      {
        problem:
          "Sluggish initial app cold startup while waiting for remote API requests to fetch feed media metadata over mobile networks.",
        solution:
          "Implemented local Hive caching with background stale-while-revalidate synchronization. Persisted generation task IDs and request drafts so failed generations recover with original inputs intact.",
        impact:
          "Achieved instant sub-second feed launch and seamless error resilience for user prompts.",
      },
      {
        problem:
          "Managing complex release governance, compliance, and store approvals across dual platforms (iOS and Android).",
        solution:
          "Owned end-to-end publishing lifecycle: iOS signing certificates, provisioning profiles, TestFlight beta distribution, Apple Privacy Manifests (PrivacyInfo.xcprivacy), export compliance, and Google Play Console staged rollouts.",
        impact:
          "Successfully deployed and maintained production apps across both Apple App Store and Google Play Console.",
      },
    ],
  },
  {
    id: "internsharks",
    title: "Internsharks",
    category: "mobile-ai",
    categoryLabel: "Career Tech & Generative AI",
    platform: "Android · Web",
    color: "#0ea5e9", // Sky Blue
    tagline: "Professional student-recruiter network with real-time AI Resume Builder.",
    summary:
      "Built a unified cross-platform career platform connecting students with hiring companies. Features an interactive AI Resume Builder that converts unstructured user inputs into ATS-optimized structured JSON and renders live on-device PDF previews as the user types.",
    metrics: [
      "Real-Time On-Device PDF Preview",
      "Role-Based Student & Recruiter Portals",
      "Automated AI MCQ Assessments",
    ],
    tech: [
      "Flutter",
      "Dart",
      "GetX",
      "React",
      "Python",
      "FastAPI",
      "OpenAI",
      "Deep Linking",
      "REST APIs",
      "Play Console",
    ],
    links: [
      {
        label: "Web Portal",
        url: "https://internsharks.ai/",
        iconType: "web",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.doubletap.internsharks.ai",
        iconType: "android",
      },
    ],
    cases: [
      {
        problem:
          "Traditional resume builders generate static PDFs on remote servers, leading to slow rendering feedback, high latency, and frequent ATS rejection for students.",
        solution:
          "Engineered an on-device AI Resume Builder in Flutter and React. The AI transforms plain text into strict JSON schemas, allowing the client to render real-time interactive PDF previews without round-trip latency.",
        impact:
          "Delivered sub-second real-time CV updates as users type, drastically improving completion rates.",
      },
      {
        problem:
          "Recruiters were overwhelmed by unqualified candidates, while students lacked feedback on why they were filtered out.",
        solution:
          "Built automated eligibility matching in Python based on skills and degree criteria. Integrated an OpenAI pipeline that dynamically generates custom MCQ assessments per job description before applicants can submit.",
        impact:
          "Screened applicant pools automatically, reducing recruiter candidate review time by over 50%.",
      },
    ],
  },
  {
    id: "fulupo-store",
    title: "Fulupo Store",
    category: "mobile-ai",
    categoryLabel: "Smart Retail & Computer Vision",
    platform: "Android",
    color: "#8b5cf6", // Violet / Purple
    tagline: "Instant retail POS with on-device camera AI item recognition.",
    summary:
      "A next-generation smart retail checkout solution eliminating traditional barcode scanning bottlenecks. Shoppers or cashiers scan multiple merchandise items in a single camera frame, using AI object detection matched against live store inventory.",
    metrics: [
      "Barcode-Free Multi-Item Scanning",
      "Instant Cart Population",
      "Automated Inventory Sync",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Computer Vision",
      "Object Detection",
      "REST APIs",
      "Inventory Sync",
      "Play Console",
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.doubletap.fulupostore",
        iconType: "android",
      },
    ],
    cases: [
      {
        problem:
          "Individual barcode scanning creates severe bottlenecks at checkout counters during peak retail hours.",
        solution:
          "Designed a multi-item camera scanning workflow in Flutter that captures retail baskets in a single snapshot, transmitting frames to an AI object detection pipeline that identifies all items concurrently and synchronizes with the store catalog.",
        impact:
          "Sped up retail checkout speeds by 60%, allowing rapid barcode-free self-checkout and automated cashier billing.",
      },
    ],
  },
  {
    id: "ubill",
    title: "Ubill",
    category: "fintech-pos",
    categoryLabel: "Full-Stack FinTech & Accounting",
    platform: "Web & Android",
    color: "#10b981", // Emerald
    tagline: "Cloud accounting, multi-tier GST compliance, and billing engine.",
    summary:
      "Architected the web-first Flutter application and Node.js microservices for Ubill. Built real-time multi-tier Indian GST tax computation, client-side PDF invoice synthesis via JS Interop, financial ledgers, and automated business data migration.",
    metrics: [
      "50% Faster PDF Generation",
      "650+ Business Accounts Migrated",
      "Zero UI Thread Freezing",
    ],
    tech: [
      "Flutter Web",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Provider",
      "GetX",
      "Hive",
      "JS Interop",
      "Nodemailer",
      "Play Console",
    ],
    links: [
      {
        label: "Web Portal",
        url: "https://app.ubill.tech/",
        iconType: "web",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.ubill.tech",
        iconType: "android",
      },
    ],
    cases: [
      {
        problem:
          "Maintaining separate invoice templates across Flutter Web and backend Node.js created double maintenance and slow PDF downloads that blocked the UI thread.",
        solution:
          "Built a JavaScript Interop bridge enabling Flutter Web to interface with native browser print engines and HTML canvas APIs. Reused backend HTML/CSS templates directly in hidden iframes for zero-latency client PDF compilation.",
        impact:
          "Boosted PDF generation speed by 50% with zero UI thread blockages and guaranteed 100% design fidelity across web, email, and downloads.",
      },
      {
        problem:
          "Complex Indian GST regulations (intra-state CGST/SGST vs inter-state IGST) and manual Excel ledger entry caused human bookkeeping errors for clients.",
        solution:
          "Engineered a real-time GST calculation engine that dynamically evaluates tax splits as items are added. Created a client-side bulk Excel parsing and validation pipeline for frictionless onboarding of inventory and invoices.",
        impact:
          "Automated ledger bookkeeping and successfully migrated 650+ business accounts from legacy software with zero data corruption.",
      },
    ],
  },
  {
    id: "bizstack",
    title: "Bizstack",
    category: "fintech-pos",
    categoryLabel: "Offline-First Mobile POS",
    platform: "Android",
    color: "#f59e0b", // Amber
    tagline: "Offline-first point of sale & inventory system with delta sync.",
    summary:
      "Architected an offline-first POS application in Kotlin and Jetpack Compose for retail environments prone to intermittent connectivity. Powered by Android RoomDB local storage and automated delta synchronization to Django microservices and Firebase RTDB.",
    metrics: [
      "100% Offline Checkout Uptime",
      "Conflict-Free Delta Sync Engine",
      "Instant Barcode Item Lookup",
    ],
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "RoomDB",
      "SQLite",
      "Python",
      "Django",
      "Google Cloud Run",
      "Firebase RTDB",
      "Play Console",
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nativedesk.bizstack",
        iconType: "android",
      },
    ],
    cases: [
      {
        problem:
          "Unstable cellular or WiFi connectivity at retail counters frequently halted checkout transactions, leading to lost sales and desynchronized inventory records.",
        solution:
          "Engineered an offline-first architecture using RoomDB. Transactions commit locally in milliseconds. A background worker detects connection changes and batches unsynced delta payloads to cloud APIs with conflict-resolution strategies.",
        impact:
          "Achieved 100% checkout uptime across active retail merchants, safeguarding transaction records through zero-network blackouts.",
      },
    ],
  },
  {
    id: "engine-room-ninja",
    title: "Engine Room Ninja",
    category: "fullstack-cloud",
    categoryLabel: "Mobile Community & EdTech",
    platform: "Android",
    color: "#06b6d4", // Cyan
    tagline: "Quora-style technical community & calculation utilities for marine engineers.",
    summary:
      "A technical community and examination study platform for maritime engineers worldwide. Features real-time WebSocket direct messaging, deep linking, in-app Google Play Billing coin purchases, and protected media distribution.",
    metrics: [
      "1,000+ Marine Engineers",
      "WebSocket Real-Time Messaging",
      "Google Play Billing Integrated",
    ],
    tech: [
      "Flutter",
      "BLoC",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "Docker",
      "WebSockets",
      "Google Play Billing",
      "Play Console",
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.engine_room_ninja.marine_ninja",
        iconType: "android",
      },
    ],
    cases: [
      {
        problem:
          "High media latency and unauthorized sharing of proprietary technical diagrams and exam preparation content across offshore locations.",
        solution:
          "Dockerized the Node.js / Express backend with MongoDB. Utilized AWS S3 with short-lived pre-signed URLs to protect assets, while integrating Google Play Billing to let users unlock verified engineering answers.",
        impact:
          "Scaled to 1,000+ offshore engineers, cut media latency by 40%, and eliminated unauthorized asset leaking.",
      },
    ],
  },
  {
    id: "invusprop",
    title: "InvusProp",
    category: "fullstack-cloud",
    categoryLabel: "Enterprise Cloud Platform",
    platform: "Web",
    color: "#ec4899", // Rose
    tagline: "Enterprise property administration and portfolio management dashboard.",
    summary:
      "A comprehensive real estate management platform for property portfolios, lease records, and scheduled site visits. Engineered with enterprise role-based access control (RBAC) via AWS Cognito, Next.js edge middleware, and automated Terraform infrastructure.",
    metrics: [
      "Edge JWT Route Authorization",
      "Zero Unauthorized Access",
      "Automated Terraform Infrastructure",
    ],
    tech: [
      "Next.js",
      "NestJS",
      "Tailwind CSS",
      "PostgreSQL",
      "AWS Cognito",
      "Docker",
      "Terraform",
    ],
    links: [],
    cases: [
      {
        problem:
          "Enterprise property transactions require strict permission controls; client-side route guards were vulnerable and repetitive database permission queries slowed dashboards.",
        solution:
          "Integrated AWS Cognito user pools with encrypted custom role claims inside JWT tokens. Edge middleware in Next.js verifies token claims before page hydration, preventing unauthorized route rendering.",
        impact:
          "Zero unauthorized API or route requests and sub-second dashboard rendering across extensive property records.",
      },
    ],
  },
];

interface ProjectsProps {
  onColorChange?: (color: string) => void;
}

export default function Projects({ onColorChange }: ProjectsProps) {
  const [expandedCases, setExpandedCases] = useState<Record<string, boolean>>({});

  const toggleCase = (projectId: string) => {
    setExpandedCases((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const getLinkIcon = (type: ProjectLink["iconType"]) => {
    switch (type) {
      case "web":
        return <Globe className="w-3.5 h-3.5" />;
      case "ios":
        return <Apple className="w-3.5 h-3.5" />;
      case "android":
        return <Smartphone className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full relative py-2 max-w-6xl mx-auto">
      {/* Vertical Grid of Projects (2 in a row on md/lg screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PROJECTS.map((project) => {
          const isExpanded = !!expandedCases[project.id];

          return (
            <article
              key={project.id}
              onMouseEnter={() => onColorChange?.(project.color)}
              className="group relative rounded-3xl border border-border/60 bg-card/85 dark:bg-card/90 backdrop-blur-xl p-6 sm:p-7 shadow-md hover:shadow-2xl hover:border-accent/50 transition-all duration-300 flex flex-col justify-between h-full"
              style={{
                "--project-accent": project.color,
              } as React.CSSProperties}
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: project.color }}
              />

              <div className="space-y-4">
                {/* Card Header: Icon, Titles & Badges */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-border/30">
                  <div className="flex items-start gap-3.5">
                    {/* Project Logo / Monogram */}
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-12 h-12 rounded-2xl object-cover border border-border shadow-xs flex-shrink-0"
                      />
                    ) : (
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-xl shadow-xs flex-shrink-0"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                          border: `1px solid ${project.color}40`,
                        }}
                      >
                        {project.title.charAt(0)}
                      </div>
                    )}

                    <div className="space-y-1">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${project.color}18`,
                            color: project.color,
                          }}
                        >
                          {project.categoryLabel}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium px-2 py-0.5 rounded-md bg-muted/10 border border-border/40">
                          {project.platform}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-foreground/80 font-medium">
                  {project.tagline}
                </p>

                {/* External Action Links */}
                {project.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border bg-background/90 text-xs font-semibold text-foreground hover:text-accent hover:border-accent hover:bg-accent/5 transition-all shadow-xs"
                      >
                        {getLinkIcon(link.iconType)}
                        <span>{link.label}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Summary Overview */}
                <div className="p-3.5 rounded-xl bg-muted/5 border border-border/40 flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  <Info
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: project.color }}
                  />
                  <p>{project.summary}</p>
                </div>

                {/* Highlight Metrics Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-background border border-border/60 shadow-xs"
                      style={{ color: project.color }}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Engineering Deep-Dive Section (Collapsible) */}
                <div className="border-t border-border/30 pt-3">
                  <button
                    onClick={() => toggleCase(project.id)}
                    className="w-full flex items-center justify-between py-1 text-left cursor-pointer group/btn"
                  >
                    <div className="flex items-center gap-1.5">
                      <Sparkles
                        className="w-3.5 h-3.5"
                        style={{ color: project.color }}
                      />
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover/btn:text-accent transition-colors">
                        Engineering Deep Dive ({project.cases.length})
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground group-hover/btn:text-foreground">
                      {isExpanded ? "Collapse" : "Explore"}
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="mt-3 space-y-4 pt-1 animate-fade-in">
                      {project.cases.map((c, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3.5 rounded-xl bg-background/50 border border-border/50 space-y-2.5"
                        >
                          {/* Problem */}
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                              Challenge
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                              {c.problem}
                            </h4>
                          </div>

                          {/* Technical Solution */}
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1">
                              <Lightbulb className="w-3 h-3" />
                              Solution
                            </span>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {c.solution}
                            </p>
                          </div>

                          {/* Impact */}
                          <div className="space-y-0.5 pt-1 border-t border-border/20">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              Result
                            </span>
                            <p className="text-xs text-foreground/90 font-semibold leading-relaxed">
                              {c.impact}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies Used Pills */}
              <div className="mt-5 pt-3 border-t border-border/20 flex flex-wrap items-center gap-1">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mr-1.5 flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  Tech:
                </span>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-muted/10 text-[11px] font-medium text-foreground/80 border border-border/30 hover:border-accent/40 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
