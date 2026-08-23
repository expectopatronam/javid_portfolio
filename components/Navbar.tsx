"use client";

import { useState } from "react";
import { Menu, X, Code, Mail, Phone } from "lucide-react";

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

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.165-3.498-8.418" />
  </svg>
);

const NAV_ITEMS = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

interface NavbarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function Navbar({ activeView, onViewChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => onViewChange("projects")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="p-2 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
            <Code className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight group-hover:text-accent transition-colors">
            Javid.dev
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`text-sm font-medium transition-colors hover:text-accent relative py-1 cursor-pointer ${
                activeView === item.id ? "text-accent" : "text-muted"
              }`}
            >
              {item.label}
              {activeView === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-fade-in" />
              )}
            </button>
          ))}
        </nav>

        {/* Social / Direct Action Links */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+916383007505"
            className="p-2 rounded-lg text-muted hover:text-indigo-500 hover:bg-indigo-500/10 transition-colors"
            title="Call +91 63830 07505"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/916383007505"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors"
            title="WhatsApp +91 63830 07505"
          >
            <WhatsappIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/javid-akeel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted hover:text-blue-500 hover:bg-blue-500/10 transition-colors"
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border/80 px-6 py-4 flex flex-col gap-2 animate-fade-in shadow-lg">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onViewChange(item.id);
                setIsOpen(false);
              }}
              className={`text-base font-medium py-2 text-left border-b border-border/30 transition-colors w-full cursor-pointer ${
                activeView === item.id ? "text-accent" : "text-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-wrap items-center gap-4 py-2 mt-2">
            <a
              href="tel:+916383007505"
              className="flex items-center gap-2 text-sm text-muted hover:text-indigo-500"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href="https://wa.me/916383007505"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-emerald-500"
            >
              <WhatsappIcon className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href="https://linkedin.com/in/javid-akeel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-blue-500"
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
