import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Javid Akeel | Flutter & Full-Stack Developer",
  description: "Portfolio of Javid Akeel, a Flutter and Full-Stack Developer specializing in high-performance mobile apps, web applications, and scalable backend architectures.",
  keywords: ["Javid Akeel", "Flutter Developer", "Full Stack Developer", "Next.js", "React", "Mobile App Developer", "iOS Developer", "Android Developer", "Node.js", "Dart", "Bizstack", "Selfitoons", "Ubill"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
