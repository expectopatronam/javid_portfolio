import { BookOpen, Database, Layout, Settings, Layers } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: <BookOpen className="w-5 h-5 text-blue-500" />,
    skills: ["Dart", "JavaScript", "TypeScript", "Kotlin", "Java", "Python", "SQL (PostgreSQL)", "HTML/CSS"],
  },
  {
    title: "Frameworks & Runtimes",
    icon: <Layers className="w-5 h-5 text-indigo-500" />,
    skills: ["Flutter (iOS, Android, Web)", "React.js", "Next.js", "Node.js (Express, NestJS)", "Django", "Jetpack Compose"],
  },
  {
    title: "Flutter Architecture & State",
    icon: <Layout className="w-5 h-5 text-violet-500" />,
    skills: ["Riverpod", "GetX", "Bloc", "Provider", "Clean Architecture", "MVVM / MVC", "JS Interop", "Hive / SharedPreferences", "Dio / HTTP"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    skills: ["PostgreSQL", "MongoDB", "Firebase Realtime DB", "AWS DynamoDB", "RoomDB (Offline-first)"],
  },
  {
    title: "Tools & DevOps",
    icon: <Settings className="w-5 h-5 text-amber-500" />,
    skills: ["Git", "Docker", "AWS (Cognito, S3)", "Terraform", "Google Cloud Functions", "Docker Compose", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-border/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl">
            My skill set spans cross-platform mobile engineering, responsive frontend web frameworks, backend servers, database optimization, and cloud configurations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl border border-border bg-card hover:border-accent/40 transition-colors shadow-sm flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-muted/30">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-sm bg-background border border-border hover:border-accent/30 hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
