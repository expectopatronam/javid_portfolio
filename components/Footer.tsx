import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copy details */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-semibold text-foreground">
            © {new Date().getFullYear()} Javid Akeel. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Mobile & GenAI Software Engineer · Shipped 5+ production apps to App Store & Play Store.
          </p>
        </div>

        {/* Direct Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-medium text-muted-foreground">
          <a
            href="/resume"
            className="text-accent font-semibold hover:underline transition-colors"
          >
            Resume / CV
          </a>
          <span>•</span>
          <a
            href="/javid-resume.pdf"
            download="Javid_Akeel_Resume.pdf"
            className="hover:text-accent transition-colors"
          >
            Download PDF
          </a>
          <span>•</span>
          <a
            href="https://github.com/expectopatronam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/javid-akeel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="mailto:workwithakeel@gmail.com"
            className="hover:text-accent transition-colors"
          >
            workwithakeel@gmail.com
          </a>
        </div>

        {/* Scroll back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 rounded-xl border border-border bg-card hover:bg-muted/10 text-muted-foreground hover:text-accent hover:border-accent/30 transition-all shadow-sm cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </footer>
  );
}
