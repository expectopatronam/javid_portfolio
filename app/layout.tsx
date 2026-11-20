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
  title: "Javid Akeel | Mobile & Generative AI Software Engineer",
  description: "Portfolio of Javid Akeel, a Software Engineer specializing in Mobile & Generative AI applications (Flutter, Node.js, Python), video processing pipelines, and cloud architectures.",
  keywords: ["Javid Akeel", "Flutter Developer", "Mobile Engineer", "Generative AI", "Full Stack Developer", "Next.js", "React", "iOS Developer", "Android Developer", "Node.js", "Python", "Dart", "Bizstack", "Selfitoons", "Ubill", "Internsharks", "Fulupo Store"],
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
