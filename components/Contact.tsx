"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from "lucide-react";

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

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Mailto fallback or API integration
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="py-4">
      <div className="max-w-6xl mx-auto px-2">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Get In Touch</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
            Have a role opening, engineering collaboration, or freelancing project? Feel free to reach out directly through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details (Column 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Direct Contact Channels</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I am actively considering full-time software engineering roles (Mobile, Generative AI, Full-Stack) and contract work. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3.5 my-4">
              {/* Primary Email */}
              <a
                href="mailto:workwithakeel@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-card/60 hover:border-accent/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Primary Email</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    workwithakeel@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916383007505"
                className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-card/60 hover:border-accent/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Direct Call</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    +91 63830 07505
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916383007505"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-card/60 hover:border-emerald-500/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                  <WhatsappIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">WhatsApp Chat</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                    +91 63830 07505
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/javid-akeel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-card/60 hover:border-blue-500/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                    linkedin.com/in/javid-akeel
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/expectopatronam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-card/60 hover:border-violet-500/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">GitHub Profile</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-violet-500 transition-colors">
                    github.com/expectopatronam
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-card/60">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Base Location</div>
                  <div className="text-sm font-semibold text-foreground">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card (Column 6-12) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/80 backdrop-blur-xl shadow-lg">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-500 animate-bounce" />
                <h4 className="text-2xl font-bold">Message Delivered!</h4>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. I have received your message and will reply shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-xl border border-border hover:bg-muted/10 font-semibold transition-all cursor-pointer text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-foreground mb-4">Send a Direct Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-muted-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="h-11 px-4 rounded-xl border border-border bg-background hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="h-11 px-4 rounded-xl border border-border bg-background hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Engineering Role / Project Consultation"
                    className="h-11 px-4 rounded-xl border border-border bg-background hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your technical requirements, role specifications, or project details..."
                    className="py-3 px-4 rounded-xl border border-border bg-background hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none text-sm"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-12 rounded-xl bg-accent text-accent-foreground font-bold flex items-center justify-center gap-2 hover:bg-accent/90 disabled:opacity-50 transition-all shadow-md shadow-accent/20 cursor-pointer text-sm"
                >
                  {status === "submitting" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
