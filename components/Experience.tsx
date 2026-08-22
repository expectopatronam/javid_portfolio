import { Briefcase, Calendar, MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Flutter Developer",
    company: "Doubletap Innovations and Technologies",
    location: "Chennai, India",
    period: "Dec 2025 – Present",
    highlights: [
      "Developed Selfitoons, an AI-powered video generation and social media mobile application for Android and iOS.",
      "Architected a high-performance social feed with followers, following, likes, comments, and post functionalities using Riverpod and GoRouter.",
      "Integrated Razorpay and Cashfree payment gateways to handle seamless premium subscriptions and transactions.",
      "Implemented client-side video watermarking via FFmpeg, reducing server-side processing costs and CPU load by 75%.",
      "Designed and built a Video Controller Manager maintaining only 5 active controllers, significantly improving memory usage and performance in feed-based video playback.",
    ],
    tech: ["Flutter", "Dart", "Riverpod", "GoRouter", "FFmpeg", "Razorpay", "Cashfree", "Android", "iOS"],
  },
  {
    role: "Flutter FullStack Developer",
    company: "Ecfile Solutions (Ubill – Accounting & GST Software)",
    location: "Chennai, India",
    period: "Oct 2023 – Aug 2025",
    highlights: [
      "Contributed 40,000+ lines of production code across Flutter mobile/web apps, Node.js services, and MongoDB database layer.",
      "Architected a web-first responsive Flutter application for Ubill to ensure cross-platform compatibility.",
      "Built a PDF invoice generator using JS Interop to reuse backend HTML templates directly, improving generation speed by 50%.",
      "Developed Node.js + MongoDB backend with secure custom authentication pipelines.",
      "Implemented architectures using GetX, Riverpod, and Provider for state management, with local storage via Hive.",
    ],
    tech: ["Flutter", "Dart", "Node.js", "MongoDB", "GetX", "Riverpod", "Provider", "Hive", "JS Interop"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-border/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl">
            A history of building production-grade mobile applications and full-stack software products in fast-paced teams.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-border/50 ml-4 md:ml-6 pl-6 md:pl-10 py-2 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.company + index} className="relative group">
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-sm">
                <Briefcase className="w-4 h-4" />
              </span>

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-accent/30 transition-colors shadow-sm">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-semibold text-muted">{exp.company}</h4>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
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

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-accent/5 text-accent border border-accent/10"
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
    </section>
  );
}
