"use client";

interface StackCategory {
  title: string;
  skills: string[];
}

const STACK_CATEGORIES: StackCategory[] = [
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

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32 border-t border-white/[.06] bg-[#0B0D12]/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <div className="kicker">04 — Tech stack</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mt-3 text-white">
            Tools I reach for.
          </h2>
          <p className="text-zinc-400 mt-3 max-w-lg">
            Battle-tested technologies used in production apps actively serving thousands of daily active users.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STACK_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="card spot p-6 sm:p-7 flex flex-col justify-between hover:border-[#C5F560]/30 transition-all duration-300"
            >
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="chip !text-[12px] !text-zinc-300 !py-1 !px-2.5 hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
