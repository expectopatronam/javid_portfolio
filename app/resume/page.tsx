"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Printer,
  FileText,
  Sparkles,
  ShieldCheck,
  Globe,
  Briefcase,
  GraduationCap,
  Layers,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import ThreeBackground from "@/components/ThreeBackground";
import CodingCursor from "@/components/CodingCursor";

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<"pdf" | "web">("pdf");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-background text-foreground transition-all duration-300">
      {/* Subtle Background */}
      <ThreeBackground color="#6366f1" />
      <CodingCursor color="#6366f1" />

      {/* Top Navigation & Action Toolbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center p-1 rounded-xl bg-muted/20 border border-border/50 text-xs font-semibold">
            <button
              onClick={() => setViewMode("pdf")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "pdf"
                  ? "bg-accent text-accent-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              PDF Document
            </button>
            <button
              onClick={() => setViewMode("web")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "web"
                  ? "bg-accent text-accent-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Interactive Web CV
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href="/javid-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl border border-border bg-card hover:bg-muted/10 text-xs font-semibold text-foreground transition-all shadow-xs"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Raw</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden lg:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl border border-border bg-card hover:bg-muted/10 text-xs font-semibold text-foreground transition-all shadow-xs cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href="/javid-resume.pdf"
              download="Javid_Akeel_Resume.pdf"
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm font-bold transition-all shadow-md shadow-accent/20"
              title="Download PDF resume"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Mobile View Toggle bar */}
        <div className="sm:hidden flex items-center justify-center p-2 border-t border-border/40 bg-muted/10">
          <div className="inline-flex p-1 rounded-xl bg-background border border-border text-xs font-semibold">
            <button
              onClick={() => setViewMode("pdf")}
              className={`px-3 py-1 rounded-lg ${
                viewMode === "pdf" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              }`}
            >
              PDF Document
            </button>
            <button
              onClick={() => setViewMode("web")}
              className={`px-3 py-1 rounded-lg ${
                viewMode === "web" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              }`}
            >
              Web CV
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 z-10">
        {/* Document Headline / Metadata Banner */}
        <div className="mb-6 p-5 sm:p-6 rounded-3xl border border-border/60 bg-card/85 backdrop-blur-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                Latest Verified 2026 Edition
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
                <ShieldCheck className="w-3 h-3" />
                5+ Production Store Apps
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Javid Akeel
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Software Engineer – Mobile & Generative AI Applications (Flutter, Node.js, Python)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <a
              href="mailto:workwithakeel@gmail.com"
              className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-background border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>workwithakeel@gmail.com</span>
            </a>
            <a
              href="tel:+916383007505"
              className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-background border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 63830 07505</span>
            </a>
            <span className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-background border border-border">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chennai, India</span>
            </span>
          </div>
        </div>

        {/* View Mode 1: PDF Viewer */}
        {viewMode === "pdf" && (
          <div className="space-y-4">
            <div className="w-full h-[78vh] sm:h-[84vh] rounded-3xl border border-border/80 bg-card overflow-hidden shadow-2xl relative">
              <object
                data="/javid-resume.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
                type="application/pdf"
                className="w-full h-full"
              >
                {/* Fallback for browsers without native PDF embed */}
                <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                  <FileText className="w-16 h-16 text-muted-foreground opacity-50" />
                  <h3 className="text-lg font-bold">Unable to display PDF directly in your browser</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Your mobile browser may not support inline PDF previews. You can view our interactive Web CV format or download the file directly.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setViewMode("web")}
                      className="px-4 py-2 rounded-xl bg-background border border-border text-xs font-semibold hover:border-accent"
                    >
                      Switch to Web View
                    </button>
                    <a
                      href="/javid-resume.pdf"
                      download="Javid_Akeel_Resume.pdf"
                      className="px-4 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-bold"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </object>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
              <span>Tip: Use the toolbar in the viewer to zoom, search, or print.</span>
              <button
                onClick={() => setViewMode("web")}
                className="text-accent hover:underline font-semibold cursor-pointer"
              >
                Prefer responsive web format? Switch to Web CV →
              </button>
            </div>
          </div>
        )}

        {/* View Mode 2: Responsive Web CV */}
        {viewMode === "web" && (
          <div className="space-y-8 p-6 sm:p-10 rounded-3xl border border-border/70 bg-card/90 backdrop-blur-xl shadow-xl animate-fade-in print:border-none print:shadow-none print:p-0">
            {/* Summary */}
            <section className="space-y-2 border-b border-border/30 pb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Professional Summary
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Flutter developer with 3+ years building and shipping cross-platform apps for Android, iOS, and Web, with full-stack experience in Node.js and Python. Owns store releases on the Apple App Store and Google Play. Strengths: video and feed performance, offline-first caching, state management (Riverpod, BLoC, GetX, Provider), and payment integrations (Razorpay, Cashfree, Google Play Billing).
              </p>
            </section>

            {/* Experience */}
            <section className="space-y-6 border-b border-border/30 pb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                Work Experience
              </h2>

              {/* Job 1 */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      Software Engineer – Mobile & AI (Flutter)
                    </h3>
                    <div className="text-sm font-semibold text-accent">
                      Doubletap Innovations and Technologies · Chennai, India
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    Dec 2025 – Present
                  </span>
                </div>

                <div className="text-xs font-semibold text-muted-foreground">
                  Live: <a href="https://selfitoons.ai/" target="_blank" rel="noreferrer" className="text-accent underline">Selfitoons (Web</a> | <a href="https://apps.apple.com/in/app/selfitoons/id6758597947" target="_blank" rel="noreferrer" className="text-accent underline">App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.doubletap.ai.selfitoons" target="_blank" rel="noreferrer" className="text-accent underline">Play Store)</a>, <a href="https://internsharks.ai/" target="_blank" rel="noreferrer" className="text-accent underline">Internsharks (Web</a> | <a href="https://play.google.com/store/apps/details?id=com.doubletap.internsharks.ai" target="_blank" rel="noreferrer" className="text-accent underline">Play Store)</a>, <a href="https://play.google.com/store/apps/details?id=com.doubletap.fulupostore" target="_blank" rel="noreferrer" className="text-accent underline">Fulupo Store (Play Store)</a>
                </div>

                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                  <li>Built Selfitoons (iOS, Android), an AI video generation and social app: high-performance feed with follower graphs and interactions using Riverpod and GoRouter.</li>
                  <li>Designed custom Video Controller Manager that pools max 5 controllers, eliminating memory leaks and sustaining steady 60 FPS playback on budget devices.</li>
                  <li>Cached feed in Hive for instant loads with silent background refresh; persisted generation task IDs and request drafts for error resilience.</li>
                  <li>Implemented client-side video watermarking with native FFmpeg, cutting backend CPU/GPU processing load by ~75%.</li>
                  <li>Integrated Razorpay and Cashfree for credit purchases and subscriptions; built feed ad-insertion (Google Ads every 7th video, in-house ads every 15th).</li>
                  <li>Backend: built Node.js feed ranking with Redis caching; built FastAPI/Pydantic pipeline turning voice prompts (OpenAI Whisper) and images into videos via Grok and Kling AI.</li>
                  <li>Internsharks: built AI resume builder that renders live PDF on-device as user types, with GetX, deep linking, and automated AI MCQ assessments.</li>
                  <li>Fulupo Store: built camera scanning flow and backend item detection for barcode-free instant retail checkout.</li>
                  <li>Store releases (end-to-end): shipped Selfitoons on Apple App Store (signing certificates, TestFlight, Privacy Manifests) and Selfitoons, Internsharks, Fulupo Store on Google Play Console.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="space-y-3 pt-4 border-t border-border/20">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      Flutter FullStack Developer
                    </h3>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Ecfile Solutions (Ubill) · Chennai, India
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    Oct 2023 – Nov 2025
                  </span>
                </div>

                <div className="text-xs font-semibold text-muted-foreground">
                  Live: <a href="https://app.ubill.tech/" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">Ubill Web Portal</a> | <a href="https://play.google.com/store/apps/details?id=com.ubill.tech" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">Play Store</a>
                </div>

                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                  <li>Architected web-first Flutter Web app with responsive layouts and desktop-class user experience, using Provider and Clean Architecture.</li>
                  <li>Built client-side PDF invoice rendering with JS Interop, reusing backend HTML/CSS template to boost generation speeds by 50% with zero UI freezing.</li>
                  <li>Implemented live Indian GST calculation as invoices are edited (multi-tier, CGST/SGST vs IGST) and automated financial ledgers.</li>
                  <li>Built bulk Excel upload for sales and purchase invoices, items, categories, and journals with client-side parsing and validation.</li>
                  <li>Backend (Node.js, Express, MongoDB): built APIs with custom JWT auth and RBAC, Nodemailer email workflows, and migrated 650+ users from legacy software.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="space-y-4 border-b border-border/30 pb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Featured Projects
              </h2>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Bizstack – Offline-First POS (Play Store)
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Kotlin, Jetpack Compose, RoomDB, Python (Django), Firebase RTDB, Google Cloud Run
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Built offline-first POS architecture with RoomDB delta sync and conflict resolution for 100% checkout uptime across retail merchants during network outages.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Engine Room Ninja – Q&A Community for Marine Engineers (Play Store)
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Flutter, BLoC, Express.js, MongoDB, AWS S3, Docker, WebSockets, Google Play Billing
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Built Quora-style community scaled to 1,000+ marine engineers with real-time WebSocket messaging and in-app coin purchases via Google Play Billing.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    InvusProp – Real Estate Admin Platform
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Next.js, NestJS, Tailwind CSS, PostgreSQL, AWS Cognito, Docker, Terraform
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Built property admin dashboard with RBAC via AWS Cognito, edge JWT authorization, and automated Terraform AWS infrastructure.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-3 border-b border-border/30 pb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-accent">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <strong className="text-foreground">Languages:</strong> Dart, Kotlin, JavaScript, TypeScript, Python, SQL
                </div>
                <div>
                  <strong className="text-foreground">Mobile & Web:</strong> Flutter (iOS, Android, Web), Jetpack Compose, React, Next.js
                </div>
                <div>
                  <strong className="text-foreground">Architecture & State:</strong> Clean Architecture, Offline-First, Riverpod, BLoC, GetX, Provider
                </div>
                <div>
                  <strong className="text-foreground">Backend & Data:</strong> Node.js, Express, NestJS, FastAPI, Django, MongoDB, PostgreSQL, Redis, Firebase, RoomDB, Hive
                </div>
                <div>
                  <strong className="text-foreground">Payments & AI:</strong> Razorpay, Cashfree, Play Billing, FFmpeg, OpenAI Whisper, Kling AI, Grok, Pydantic
                </div>
                <div>
                  <strong className="text-foreground">Cloud & Releases:</strong> Apple App Store Connect, TestFlight, Google Play Console, AWS, Cloud Run, Docker, Terraform
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Education
              </h2>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span><strong>SRM Institute of Science and Technology, Chennai</strong> – Master of Computer Applications (MCA)</span>
                  <span className="text-muted-foreground">2024 – 2026</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Sadakathullah Appa College, Tirunelveli</strong> – B.Sc. Computer Science</span>
                  <span className="text-muted-foreground">2020 – 2023</span>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
