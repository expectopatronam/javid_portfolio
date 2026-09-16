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
                Feel free to contact me via email, phone, WhatsApp, or connect on professional social media platforms. I typically reply within a few hours.
              </p>
            </div>

            <div className="space-y-4 my-6">
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

              {/* WhatsApp */}
              <a
                href="https://wa.me/916383007505"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40 hover:border-emerald-500/30 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                  <WhatsappIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">WhatsApp</div>
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
                      placeholder="Your Name"
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
                      placeholder="your.email@example.com"
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
