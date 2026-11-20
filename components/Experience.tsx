import { Briefcase, Calendar, MapPin, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Software Engineer – Mobile & AI (Flutter)",
    company: "Doubletap Innovations and Technologies",
    location: "Chennai, India",
    period: "Dec 2025 – Present",
    type: "Full-Time",
    highlights: [
      "Built Selfitoons (iOS, Android, Web), an AI video generation and social platform: engineered a high-performance feed with follower graphs and interactions using Riverpod and GoRouter with scoped rebuilds and deep linking.",
      "Designed a custom Video Controller Pool Manager that caps active controllers to 5, eliminating memory leaks, bypassing Android hardware decoder limits, and maintaining steady 60 FPS playback on budget devices.",
      "Shifted video watermarking to the client via native FFmpeg, cutting backend CPU/GPU processing and cloud storage load by ~75%.",
      "Engineered local Hive caching for sub-second cold starts with silent background synchronization, persisting task IDs and request drafts for instant error recovery.",
      "Integrated Razorpay and Cashfree payment gateways for credit purchases and tiered subscriptions, along with dynamic ad-insertion logic.",
      "Backend & AI: built Node.js feed ranking algorithms with Redis caching and transactional credit lock/deduct/release lifecycle; built FastAPI / Pydantic pipeline turning voice prompts (OpenAI Whisper) and images into video synthesis via Grok and Kling AI.",
      "Internsharks (Flutter, React, Python): built interactive AI Resume Builder with on-device live PDF rendering as users type, role-based student/recruiter portals, and automated AI MCQ screening assessments.",
      "Fulupo Store: built Flutter camera scanning flow and backend computer vision item detection for barcode-free instant checkout.",
      "End-to-end Store Releases: managed complete publishing lifecycle for 5+ production apps across Apple App Store (signing certificates, provisioning profiles, TestFlight betas, Privacy Manifests PrivacyInfo.xcprivacy, export compliance) and Google Play Console (staged rollouts, content ratings, app signing).",
    ],
    links: [
      { label: "Selfitoons Web", url: "https://selfitoons.ai/" },
      { label: "Selfitoons iOS", url: "https://apps.apple.com/in/app/selfitoons/id6758597947" },
      { label: "Selfitoons Android", url: "https://play.google.com/store/apps/details?id=com.doubletap.ai.selfitoons" },
      { label: "Internsharks Web", url: "https://internsharks.ai/" },
    ],
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "FFmpeg",
      "Node.js",
      "FastAPI",
      "Pydantic",
      "OpenAI",
      "Kling AI",
      "Grok",
      "Redis",
      "Razorpay",
      "Cashfree",
      "App Store Connect",
      "TestFlight",
      "Google Play Console",
    ],
  },
  {
    role: "Flutter FullStack Developer",
    company: "Ecfile Solutions (Ubill – Accounting & GST Software)",
    location: "Chennai, India",
    period: "Oct 2023 – Nov 2025",
    type: "Full-Time",
    highlights: [
      "Contributed 40,000+ lines of production code across responsive Flutter Web/Mobile applications, Node.js services, and MongoDB database layer.",
      "Architected a web-first responsive Flutter application for Ubill adhering to Clean Architecture principles to deliver a desktop-class user experience.",
      "Built client-side PDF invoice rendering for Flutter Web with JS Interop, reusing backend HTML/CSS templates directly in hidden iframes; boosted generation speeds by 50% with zero UI thread blockages.",
      "Engineered real-time Indian GST calculation (multi-tier tax computation, automatic intra-state CGST/SGST vs inter-state IGST handling) and automated financial ledgers.",
      "Built client-side bulk Excel parsing and validation for sales invoices, items, categories, and journals, removing manual data entry hurdles.",
      "Developed secure backend APIs with Node.js, Express, and MongoDB with custom JWT authentication and role-based access control (RBAC).",
      "Created scheduled background cron jobs for GST return reminders and pending invoice notices with Nodemailer.",
      "Engineered a database migration script that transitioned 650+ users from legacy billing software to Ubill with data and transaction history intact.",
    ],
    links: [
      { label: "Ubill Web Portal", url: "https://app.ubill.tech/" },
      { label: "Ubill Play Store", url: "https://play.google.com/store/apps/details?id=com.ubill.tech" },
    ],
    tech: [
      "Flutter Web",
      "Dart",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Provider",
      "GetX",
      "Hive",
      "JS Interop",
      "Nodemailer",
      "Clean Architecture",
    ],
  },
  {
    role: "Independent & Client Projects (Mobile & Full-Stack)",
    company: "Bizstack, Engine Room Ninja & InvusProp",
    location: "Chennai / Remote",
    period: "2023 – 2024",
    type: "Freelance / Enterprise",
    highlights: [
      "Bizstack (Android): Architected an offline-first POS and retail inventory platform in Kotlin and Jetpack Compose with RoomDB local caching, delta sync conflict resolution, Django microservices on Google Cloud Run, and Firebase Realtime Database.",
      "Engine Room Ninja (Android): Scaled a Quora-style technical study community to 1,000+ marine engineers; implemented BLoC state management, 1-on-1 real-time WebSocket direct messaging, Google Play Billing coin purchases, and AWS S3 pre-signed media distribution.",
      "InvusProp (Web): Built enterprise property administration dashboards in Next.js and Tailwind CSS with NestJS backend, AWS Cognito RBAC, edge JWT authorization, and automated Terraform infrastructure.",
    ],
    links: [
      { label: "Bizstack Play Store", url: "https://play.google.com/store/apps/details?id=com.nativedesk.bizstack" },
      { label: "Engine Room Ninja Play Store", url: "https://play.google.com/store/apps/details?id=com.engine_room_ninja.marine_ninja" },
    ],
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "RoomDB",
      "Flutter",
      "BLoC",
      "Python (Django)",
      "Next.js",
      "NestJS",
      "AWS Cognito",
      "AWS S3",
      "Terraform",
      "Docker",
    ],
  },
];

export default function Experience() {
  return (
    <div className="py-4">
      <div className="max-w-6xl mx-auto px-2">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Work Experience</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
            Engineering high-performance mobile applications, multimodal GenAI pipelines, and scalable full-stack platforms across startup and enterprise environments.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-border/60 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.company + index} className="relative group">
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[35px] md:-left-[51px] top-2 flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-sm">
                <Briefcase className="w-4 h-4" />
              </span>

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-3xl border border-border/70 bg-card/75 dark:bg-card/90 backdrop-blur-md hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-md">
                {/* Meta details */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-base font-semibold text-foreground/90">{exp.company}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 mb-6 text-sm sm:text-base text-muted-foreground list-disc pl-5 marker:text-accent">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Live Links */}
                {exp.links && exp.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mb-6 pt-2">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mr-2">
                      Live Products:
                    </span>
                    {exp.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-background border border-border hover:border-accent hover:text-accent transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted/10 text-foreground/80 border border-border/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
