export interface PersonalInfo {
  name: string;
  brandHandle: string;
  role: string;
  headline: string;
  availability: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  avatar: string;
  resumePdf: string;
  resumePage: string;
}

export interface SocialLink {
  id: "linkedin" | "github" | "email" | "whatsapp";
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PipelineStep {
  step: string;
  label: string;
  tool: string;
  active?: boolean;
}

export type AppFilterTag = "all" | "ai" | "fintech" | "community";

export interface AppItem {
  id: string;
  name: string;
  category: string;
  tags: AppFilterTag[];
  description: string;
  tech: string[];
  gradient: string;
  shotSrc: string;
  iconSrc: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  tech: string[];
  dotColorClass: string;
  badgeClass?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  colorClass: string;
}

export interface StackCategory {
  title: string;
  skills: string[];
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Javid Akeel",
  brandHandle: "javid.akeel",
  role: "Mobile & Generative AI Software Engineer",
  headline: "I build mobile apps with AI inside.",
  availability: "Open to Flutter & Mobile AI roles · Chennai · Remote or relocation",
  bio: "Hi, I'm Javid. Flutter engineer, 3+ years. I've shipped apps to the App Store and Google Play, and lately I work on turning a selfie and a voice note into a video at Selfitoons.",
  location: "Chennai, India",
  email: "workwithakeel@gmail.com",
  phone: "+916383007505",
  phoneDisplay: "+91 6383007505",
  avatar: "/my-snapshot.jpg",
  resumePdf: "/Javid_Akeel_Resume.pdf",
  resumePage: "/resume",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/javid-akeel/",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/expectopatronam",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:workwithakeel@gmail.com",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/916383007505",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Impact", href: "#impact" },
  { label: "Apps", href: "#apps" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
];

export const HERO_DATA = {
  stats: [
    { value: "3+", label: "years in Flutter" },
    { value: "5+", label: "apps in production" },
    { value: "2", label: "stores, end to end" },
  ],
  pipelineTitle: "selfitoons / pipeline",
  pipelineSteps: [
    { step: "01", label: "voice note", tool: "Whisper" },
    { step: "02", label: "edit selfie", tool: "ChatGPT" },
    { step: "03", label: "10s script", tool: "Pydantic" },
    { step: "04", label: "render video", tool: "Kling · Grok", active: true },
  ],
  mockups: {
    internsharks: {
      src: "/shots/com.doubletap.internsharks.ai-1.png",
      alt: "Internsharks app mockup",
    },
    selfitoons: {
      src: "/shots/com.doubletap.ai.selfitoons-2.png",
      alt: "Selfitoons app mockup",
    },
  },
};

export const MARQUEE_ITEMS: string[] = [
  "Flutter",
  "Dart",
  "Riverpod",
  "BLoC",
  "GetX",
  "FFmpeg",
  "FastAPI",
  "Node.js",
  "OpenAI",
  "Kling AI",
  "Grok",
  "Redis",
  "MongoDB",
  "Firebase",
  "Jetpack Compose",
  "AWS",
  "Docker",
  "TestFlight",
  "Play Console",
];

export const IMPACT_DATA = {
  kicker: "01 — Impact",
  title: "Small decisions, real results.",
  subtitle:
    "A few architectural decisions and performance optimizations from the last couple of years that I'm proud of.",
  metrics: {
    ffmpeg: {
      kicker: "Selfitoons · FFmpeg",
      stat: "~75%",
      label: "less backend video processing",
      description:
        "We were watermarking every video on the server. I moved watermarking onto the mobile client with FFmpeg, so the cloud backend only renders one clean master copy.",
    },
    releases: {
      kicker: "Store releases",
      stat: "5+",
      label: "production apps across App Store and Google Play",
      description:
        "Code signing, TestFlight, privacy manifests, fastlane staged rollouts, review submissions. I handle the entire release lifecycle, not just the build.",
    },
    ubill: {
      kicker: "Ubill",
      stat: "650+",
      label:
        "active merchants migrated from legacy desktop billing to Ubill POS, with historical catalogs and transactions intact.",
    },
    feed: {
      kicker: "Feed",
      stat: "60",
      label: "FPS on budget phones",
    },
    pipeline: {
      kicker: "How the Selfitoons video pipeline works",
      description:
        "FastAPI microservice with Pydantic JSON schemas. Credits are locked while a video renders, deducted upon successful delivery, and safely refunded on failure.",
      steps: [
        { label: "🎙 voice prompt" },
        { label: "Whisper transcript" },
        { label: "ChatGPT image edit" },
        { label: "Pydantic choreography" },
        { label: "Kling / Grok", highlight: true },
        { label: "🎬 video", primary: true },
      ],
    },
    controllerPool: {
      kicker: "Video controller pool",
      description:
        "Strict circular pool of max 5 active player controllers, recycled continuously as users scroll. Zero memory leaks, zero Android hardware codec exhaustion crashes.",
    },
  },
};

export const APPS: AppItem[] = [
  {
    id: "selfitoons",
    name: "Selfitoons",
    category: "Mobile AI · Viral Video Gen",
    tags: ["ai"],
    description:
      "Turn a voice prompt and selfie into a 10-second animated video. Whisper transcription, ChatGPT prompt engineering, Kling and Grok rendering, local FFmpeg watermarking, and a pool of five video controllers so the feed never leaks memory.",
    tech: ["Flutter", "FastAPI", "FFmpeg", "Kling AI", "Grok", "Whisper"],
    gradient:
      "radial-gradient(120% 90% at 50% 100%, rgba(124, 92, 255, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.doubletap.ai.selfitoons-1.png",
    iconSrc: "/icons/com.doubletap.ai.selfitoons.png",
    appStoreUrl: "https://apps.apple.com/in/app/selfitoons/id6758597947",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.doubletap.ai.selfitoons",
    webUrl: "https://selfitoons.ai/",
  },
  {
    id: "internsharks",
    name: "Internsharks",
    category: "Internship Discovery & Community",
    tags: ["ai", "community"],
    description:
      "Internship discovery app with real-time student community, resume drop, saved applications, and push alerts. Clean Riverpod architecture and custom card deck swiping.",
    tech: ["Flutter", "Riverpod", "Firebase", "REST", "Google Play"],
    gradient:
      "radial-gradient(120% 90% at 50% 100%, rgba(69, 227, 255, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.doubletap.internsharks.ai-1.png",
    iconSrc: "/icons/com.doubletap.internsharks.ai.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.doubletap.internsharks.ai",
    webUrl: "https://internsharks.ai/",
  },
  {
    id: "fulupostore",
    name: "Fulupo Store",
    category: "Hyperlocal Merchant Ordering",
    tags: ["community"],
    description:
      "Merchant order-taking app for regional stores with real-time order notifications, stock management, and customer messaging. Built for ultra-fast checkout on sub-$100 Android hardware.",
    tech: ["Flutter", "BLoC", "WebSockets", "Firebase", "Play Store"],
    gradient:
      "radial-gradient(120% 90% at 50% 100%, rgba(197, 245, 96, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.doubletap.fulupostore-1.png",
    iconSrc: "/icons/com.doubletap.fulupostore.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.doubletap.fulupostore",
  },
  {
    id: "ubill",
    name: "Ubill",
    category: "Cloud POS & GST Invoicing",
    tags: ["fintech"],
    description:
      "Full offline-first point-of-sale for retail shops. Bluetooth ESC/POS thermal printing, barcode scanning via camera, GST compliance, daily analytics, and multi-store synchronization.",
    tech: ["Flutter", "GetX", "SQLite", "ESC/POS", "REST"],
    gradient:
      "radial-gradient(120% 90% at 50% 100%, rgba(255, 176, 32, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.ubill.tech-1.png",
    iconSrc: "/icons/com.ubill.tech.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ubill.tech",
    webUrl: "https://app.ubill.tech/",
  },
  {
    id: "bizstack",
    name: "Bizstack",
    category: "Offline-First Mobile ERP",
    tags: ["fintech"],
    description:
      "Enterprise inventory management, customer ledger, credit settlement, and automated PDF invoice generation with thermal print support.",
    tech: ["Flutter", "Hive", "Provider", "PDF Engine", "Play Store"],
    gradient:
      "radial-gradient(120% 90% at 50% 100%, rgba(244, 63, 94, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.nativedesk.bizstack-1.png",
    iconSrc: "/icons/com.nativedesk.bizstack.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nativedesk.bizstack",
  },
  {
    id: "marine_ninja",
    name: "Marine Ninja",
    category: "Offline Engineering Companion",
    tags: ["community"],
    description:
      "Dedicated offline calculation utility, troubleshooting guides, and machinery maintenance manuals for maritime engineers with zero cellular coverage.",
    tech: ["Flutter", "SQLite", "Offline First", "Dart"],
    gradient:
      "radial-gradient(120% 90% at 50% 100%, rgba(14, 165, 233, 0.35), transparent 60%), linear-gradient(180deg, #0E1118, #0B0D12)",
    shotSrc: "/shots/com.engine_room_ninja.marine_ninja-1.png",
    iconSrc: "/icons/com.engine_room_ninja.marine_ninja.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.engine_room_ninja.marine_ninja",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "doubletap",
    role: "Mobile Application Developer",
    company: "Doubletap Innovations",
    type: "Full-time",
    location: "Chennai",
    period: "2024 — Present",
    isCurrent: true,
    description:
      "Leading mobile app development across flagship AI products. Built and launched Selfitoons (AI video generation with Whisper, ChatGPT, Kling AI, Grok & on-device FFmpeg) and Internsharks (internship & career network). Handled App Store & Play Store release operations, staged rollouts, and multi-tenant FastAPI backend integrations.",
    tech: ["Flutter", "Riverpod", "FFmpeg", "FastAPI", "App Store", "Google Play"],
    dotColorClass: "border-[#C5F560] ring-[#C5F560]/20",
    badgeClass: "!border-[#C5F560]/30 !text-[#C5F560]",
  },
  {
    id: "ecfile",
    role: "Flutter Developer",
    company: "Ecfile Solutions Pvt Ltd",
    type: "Full-time",
    location: "Chennai",
    period: "2023 — 2024",
    isCurrent: false,
    description:
      "Engineered Ubill (cloud-synchronized POS billing system) and Bizstack. Implemented Bluetooth ESC/POS thermal printing drivers, camera barcode scanning, offline-first SQLite state caching, and automated ledger reporting for 650+ retail merchants.",
    tech: ["Flutter", "GetX", "SQLite", "ESC/POS", "REST APIs"],
    dotColorClass: "border-[#45E3FF] ring-[#45E3FF]/20",
    badgeClass: "!border-white/10 text-zinc-400",
  },
  {
    id: "freelance",
    role: "Mobile App Developer",
    company: "Independent / Contract",
    type: "Contract",
    location: "Remote",
    period: "2022 — 2023",
    isCurrent: false,
    description:
      "Built and shipped Marine Ninja for maritime marine engineers, providing offline operational formulas and machinery inspection guides with zero network dependency. Built multiple client Flutter apps and reusable packages.",
    tech: ["Flutter", "Offline First", "Dart", "UI/UX"],
    dotColorClass: "border-zinc-500 ring-white/5",
    badgeClass: "!border-white/10 text-zinc-400",
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    period: "2022 — 2024",
    degree: "Master of Computer Applications (MCA)",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai",
    colorClass: "text-[#C5F560]",
  },
  {
    period: "2019 — 2022",
    degree: "B.Sc in Information Technology",
    institution: "Sadakathullah Appa College",
    location: "Tirunelveli",
    colorClass: "text-[#45E3FF]",
  },
];

export const EDUCATION_SUMMARY =
  "Strong foundation in software architecture, distributed backends, mobile UX engineering, and applied machine learning.";

export const STACK_CATEGORIES: StackCategory[] = [
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Android SDK", "iOS Interop", "Jetpack Compose", "Clean Architecture"],
  },
  {
    title: "State Management",
    skills: ["Riverpod", "BLoC / Cubit", "GetX", "Provider", "Reactive State"],
  },
  {
    title: "AI & GenAI",
    skills: ["OpenAI API", "Whisper", "Kling AI", "Grok", "Prompt Engineering", "Pydantic Schemas", "LangChain"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Python", "Node.js", "Express", "WebSockets", "RESTful APIs", "JWT Auth"],
  },
  {
    title: "Data & Storage",
    skills: ["SQLite", "Hive", "SharedPreferences", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Firebase (Auth/Firestore/FCM)", "AWS S3 / EC2", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Video, Audio & Hardware",
    skills: ["FFmpeg on-device", "Video Controller Pool", "Bluetooth ESC/POS Printing", "Camera Barcode Scanning"],
  },
  {
    title: "Store Shipping & Lifecycle",
    skills: ["App Store Connect", "TestFlight", "Google Play Console", "Staged Rollouts", "Privacy Manifests"],
  },
];

export const CONTACT_DATA = {
  kicker: "05 — Contact",
  titlePart1: "Hiring for Flutter",
  titlePart2: "or mobile AI?",
  titleHighlight: "Let's talk.",
  subtitle: "Based in Chennai. Happy to work remote or relocate.",
};

export const FOOTER_DATA = {
  copyright: `© ${new Date().getFullYear()} Javid Akeel`,
  builtWith: "built with Next.js + Tailwind · Chennai, IN",
};
