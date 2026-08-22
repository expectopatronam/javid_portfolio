"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

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

    // Mock API call to simulate message sending
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 border-b border-border/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl">
            Have an exciting opportunity, a freelancing project, or just want to connect? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details (Column 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to contact me via email, phone, or connect on professional social media platforms. I typically reply within a few hours.
              </p>
            </div>

            <div className="space-y-6 my-6">
              {/* Email */}
              <a
                href="mailto:farrukjavid@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40 hover:border-accent/30 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">Email Me</div>
                  <div className="text-sm font-medium text-foreground">farrukjavid@gmail.com</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916383007505"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40 hover:border-accent/30 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">Call Me</div>
                  <div className="text-sm font-medium text-foreground">+91 63830 07505</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/javid-akeel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40 hover:border-accent/30 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-violet-500/10 text-violet-500 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">LinkedIn</div>
                  <div className="text-sm font-medium text-foreground">linkedin.com/in/javid-akeel</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">Location</div>
                  <div className="text-sm font-medium text-foreground">Chennai, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card (Column 6-12) */}
          <div className="lg:col-span-7 p-8 rounded-2xl border border-border bg-card shadow-sm">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <CheckCircle className="w-16 h-16 text-emerald-500 mb-6" />
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground max-w-sm mb-6">
                  Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 rounded-xl border border-border hover:bg-muted/10 font-medium transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-11 px-4 rounded-xl border border-border bg-background hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-11 px-4 rounded-xl border border-border bg-background hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="h-11 px-4 rounded-xl border border-border bg-background hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or offer..."
                    className="py-3 px-4 rounded-xl border border-border bg-background hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-12 rounded-xl bg-accent text-accent-foreground font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 disabled:opacity-50 transition-all shadow-md shadow-accent/20 cursor-pointer"
                >
                  {status === "submitting" ? (
                    "Sending message..."
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
    </section>
  );
}
