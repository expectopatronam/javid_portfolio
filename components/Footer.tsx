import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copy details */}
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-foreground mb-1">
            © {new Date().getFullYear()} Javid Akeel. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        {/* Scroll back to top */}
        <a
          href="#home"
          className="p-3 rounded-xl border border-border bg-card hover:bg-muted/10 text-muted-foreground hover:text-accent hover:border-accent/30 transition-all shadow-sm"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </footer>
  );
}
