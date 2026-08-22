import { ExternalLink, Globe, Smartphone } from "lucide-react";

const PROJECTS = [
  {
    title: "Selfitoons",
    category: "Mobile (AI & Social)",
    platform: "Android & iOS",
    description: "An AI-powered video generation and social media application. Built a high-performance feed featuring followers, likes, comments, and posts, with FFmpeg-driven client-side watermarking and an optimized video caching controller manager.",
    tech: ["Flutter", "Dart", "Riverpod", "GoRouter", "FFmpeg", "Razorpay", "Cashfree"],
    links: [
      {
        label: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.doubletap.ai.selfitoons&pli=1",
        icon: <Smartphone className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Ubill",
    category: "Full-Stack Web & FinTech",
    platform: "Web & Mobile",
    description: "An accounting and GST filing software with an offline-first architecture. Features responsive design, custom authentication, and a high-speed JS Interop PDF invoice generator reusing existing backend HTML templates.",
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
    description: "A POS billing and inventory system supporting multi-account syncing. Implemented using an offline-first RoomDB database architecture, Google Cloud functions, and Jetpack Compose.",
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
    category: "Mobile (Marine Education)",
    platform: "Android",
    description: "A quiz and study utility application for marine engineers. Managed app data via Express.js and MongoDB services, backed by Docker deployments and AWS S3 storage assets.",
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
    description: "A scalable real-estate administrative platform featuring secure, role-based user access controls. Configured using AWS Cognito authentication alongside automated Docker infrastructure deployments.",
    tech: ["Next.js", "NestJS", "Tailwind CSS", "AWS Cognito", "Docker", "Terraform"],
    links: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-border/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl">
            A showcase of client products, production software contributions, and standalone freelance applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden hover:border-accent/40 transition-all hover:-translate-y-1 duration-300"
            >
              {/* Header Details */}
              <div className="p-6 flex-1">
                {/* Meta Tag Category */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {project.platform}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-muted/20 text-xs font-medium text-muted-foreground border border-border/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Bar */}
              {project.links.length > 0 && (
                <div className="px-6 py-4 bg-muted/10 border-t border-border/20 flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={project.title === "Selfitoons" && link.label === "PlayStore" ? link.url : link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                    >
                      {link.icon}
                      {link.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
