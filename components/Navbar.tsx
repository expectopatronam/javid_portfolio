"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code, Mail } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection observer logic for active section
      const sections = ["home", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
            <Code className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight group-hover:text-accent transition-colors">
            Javid.dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent relative py-1 ${
                activeSection === item.href.slice(1)
                  ? "text-accent"
                  : "text-muted"
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-fade-in" />
              )}
            </a>
          ))}
        </nav>

        {/* Social / Direct Action Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://linkedin.com/in/javid-akeel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted hover:text-accent hover:bg-muted/10 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:farrukjavid@gmail.com"
            className="p-2 rounded-lg text-muted hover:text-accent hover:bg-muted/10 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-muted hover:text-foreground hover:bg-muted/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border/80 px-6 py-4 flex flex-col gap-4 animate-fade-in shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 border-b border-border/30 transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-accent"
                  : "text-muted"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 py-2">
            <a
              href="https://linkedin.com/in/javid-akeel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="mailto:farrukjavid@gmail.com"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
