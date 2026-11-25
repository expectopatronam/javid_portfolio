import {
  Code2,
  Smartphone,
  Server,
  Database,
  Cpu,
  Layers,
  Cloud,
  Video,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    skills: [
      "Dart",
      "JavaScript",
      "TypeScript",
      "Python",
      "Kotlin",
      "SQL (PostgreSQL)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Mobile Frameworks & SDKs",
    icon: <Smartphone className="w-5 h-5 text-indigo-500" />,
    skills: [
      "Flutter (iOS, Android, Web)",
      "Jetpack Compose (Kotlin)",
      "Android SDK",
      "React Native (Basics)",
      "iOS Native Interop",
    ],
  },
  {
    title: "Architecture & State Management",
    icon: <Layers className="w-5 h-5 text-violet-500" />,
    skills: [
      "Riverpod",
      "BLoC",
      "GetX",
      "Provider",
      "GoRouter",
      "Clean Architecture",
      "Offline-First Design",
      "MVVM / MVC",
      "JS Interop",
    ],
  },
  {
    title: "AI, Vision & Generative Tech",
    icon: <Cpu className="w-5 h-5 text-purple-500" />,
    skills: [
      "Multimodal GenAI Pipelines",
      "OpenAI Whisper (Speech-to-Text)",
      "ChatGPT Image Editing",
      "Prompt Engineering",
      "Pydantic Structured Outputs",
      "Kling AI & Grok Imagine",
      "Computer Vision (Object Detection)",
      "Async Render Queues",
    ],
  },
  {
    title: "Backend & Web Frameworks",
    icon: <Server className="w-5 h-5 text-sky-500" />,
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python (FastAPI, Pydantic)",
      "Django",
      "React",
      "Next.js",
      "REST APIs",
      "WebSockets",
      "Dio & HTTP",
    ],
  },
  {
    title: "Databases & Local Storage",
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis (Caching & Queues)",
      "Firebase Realtime DB",
      "RoomDB (SQLite)",
      "Hive (Key-Value)",
      "SharedPreferences",
    ],
  },
  {
    title: "Multimedia, Processing & Payments",
    icon: <Video className="w-5 h-5 text-amber-500" />,
    skills: [
      "FFmpeg (Client-Side Watermarking)",
      "Video Controller Pooling (60 FPS)",
      "Razorpay",
      "Cashfree",
      "Google Play Billing",
      "Nodemailer",
    ],
  },
  {
    title: "Store Releases & Cloud DevOps",
    icon: <Cloud className="w-5 h-5 text-rose-500" />,
    skills: [
      "Apple App Store Connect",
      "TestFlight (Internal & External Beta)",
      "iOS Signing & Provisioning",
      "Privacy Manifests (PrivacyInfo.xcprivacy)",
      "Google Play Console (Staged Rollouts)",
      "AWS (S3, Cognito)",
      "Google Cloud Run",
      "Docker",
      "Terraform",
      "Git & GitHub Actions",
    ],
  },
];

export default function Skills() {
  return (
    <div className="py-4">
      <div className="max-w-6xl mx-auto px-2">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Skills & Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Technical Expertise</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
            A comprehensive matrix of technologies, frameworks, and release tooling utilized to build production-grade systems from concept to App Store deployment.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-3xl border border-border/70 bg-card/75 dark:bg-card/90 backdrop-blur-md hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-muted/20 border border-border/40">
                  {category.icon}
                </div>
                <h3 className="font-bold text-base sm:text-lg text-foreground">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-background border border-border/60 hover:border-accent/40 hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
