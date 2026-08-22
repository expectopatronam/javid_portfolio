import { ArrowRight, Mail, FileText, Smartphone, Server, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-[90vh] py-16 md:py-24 border-b border-border/10"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/5" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[100px] dark:bg-violet-500/5" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy (Column 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs sm:text-sm font-medium mb-6 text-muted-foreground shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for New Projects & Freelancing
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground leading-[1.15]">
              Building Pixel-Perfect Apps &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-500">
                Scalable Systems
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-semibold text-muted mb-6">
              Javid Akeel — Flutter & Full-Stack Developer
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              I am a software engineer specializing in cross-platform mobile app development with Flutter, high-performance web applications, and backend engineering. From client-side video editing with FFmpeg to robust Node.js and MongoDB backends.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all shadow-md shadow-accent/20"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-border bg-card text-foreground font-medium hover:bg-muted/10 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>

              <a
                href="/Javid_Resume_2026.md"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-border bg-card text-foreground font-medium hover:bg-muted/10 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </div>
          </div>

          {/* Feature Grid/Visuals (Column 8-12) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Experience Card */}
            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm flex flex-col justify-between h-44 hover:border-accent/40 transition-colors group">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 w-fit group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-foreground mb-1">5+</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">Apps on AppStore/PlayStore</div>
              </div>
            </div>

            {/* Code Card */}
            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm flex flex-col justify-between h-44 hover:border-accent/40 transition-colors group">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 w-fit group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-foreground mb-1">40K+</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">Lines of Production Code</div>
              </div>
            </div>

            {/* Fullstack Card */}
            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm flex flex-col justify-between h-44 hover:border-accent/40 transition-colors group sm:col-span-2">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 w-fit group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-500">Full-Stack Capability</span>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground mb-1">Flutter + Node.js + SQL/NoSQL</div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  Architecting mobile frontends, reactive state management, secure Node backends, and cloud configurations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
