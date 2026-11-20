# Javid Akeel — Software Engineer Portfolio

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Flutter](https://img.shields.io/badge/Flutter-Production-02569B?logo=flutter)](https://flutter.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Production-grade portfolio website engineered with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS v4. Features an ultra-dark visual theme with high-contrast neon accents, interactive phone previews, bento engineering metrics, production app showcases, and a dedicated interactive resume viewer/downloader.

---

## ⚡ Core Highlights

- **Modern Visual Language**: Custom design tokens, typography pairing (`Bricolage Grotesque`, `Inter`, `JetBrains Mono`), and hardware-accelerated animations (`floaty`, `flow`, `marquee-h`).
- **Interactive Dual Phone Showcase**: 3D floating phone mockups featuring real-time interactive previews of **Selfitoons** and **Internsharks**.
- **Hard Engineering Milestones**:
  - **~75% Server Cost Reduction**: Native on-device FFmpeg video concatenation vs cloud rendering.
  - **5+ Commercial App Store Releases**: Live on Google Play and Apple App Store.
  - **650+ Active Businesses**: Migration of Ubill POS to Flutter cross-platform architecture.
  - **60 FPS Video Feed**: Custom video controller pool with 0 MB memory leakage.
- **Categorized Production Apps**: Deep-dive showcases for 6 production apps (Selfitoons, Internsharks, Fulupo Store, Ubill, Bizstack, Marine Ninja) with direct Play Store, App Store, and Web deployment links.
- **Dedicated Resume System (`/resume`)**:
  - Live interactive web CV.
  - Built-in embedded PDF viewer.
  - One-click PDF download & print stylesheet.
- **Interactive Micro-Interactions**:
  - One-click email copy-to-clipboard with real-time feedback toast.
  - Scroll-spy floating navbar.
  - Infinite continuous marquee tech ticker ribbon.

---

## 🧭 Project Documentation

Comprehensive documentation is organized under the [`docs/`](file:///home/javid/Documents/projects/javid_portfolio/docs) directory:

- 📐 [**Architecture Guide**](file:///home/javid/Documents/projects/javid_portfolio/docs/ARCHITECTURE.md): Component hierarchy, data flow, Next.js App Router design, and state management.
- 🎨 [**Design System & Tokens**](file:///home/javid/Documents/projects/javid_portfolio/docs/DESIGN_SYSTEM.md): Color tokens, typography pairings, custom animations, and responsive breakpoints.
- 📱 [**App Catalog & Store Links**](file:///home/javid/Documents/projects/javid_portfolio/docs/APP_LINKS.md): Verified Google Play, App Store, package IDs, and technical accomplishments.
- 🛠️ [**Maintenance Runbook & Troubleshooting**](file:///home/javid/Documents/projects/javid_portfolio/docs/FUTURE_FIXES_AND_RUNBOOK.md): Common fixes (e.g. `EADDRINUSE: 3000`), updating resume PDFs, adding new apps, and build checklists.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (Node 20+ recommended)
- npm or pnpm or yarn

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/javid-akeel/javid_portfolio.git
cd javid_portfolio

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Building for Production

```bash
# Compile and optimize for production
npm run build

# Start production server
npm start
```

---

## 📁 Repository Structure

```
├── app/
│   ├── globals.css         # Custom tokens, animations, utility classes
│   ├── layout.tsx          # Root layout & font definitions
│   ├── page.tsx            # Main single-page portfolio
│   └── resume/             # /resume route (CV viewer + PDF embed + downloader)
├── components/
│   ├── Apps.tsx            # 6 production apps with category filters
│   ├── Contact.tsx         # Email copy utility & social links
│   ├── Experience.tsx      # Vertical glowing timeline & education
│   ├── Footer.tsx          # Quick links & back-to-top
│   ├── Hero.tsx            # Dual phone preview, metrics & live pipeline
│   ├── Impact.tsx          # Bento engineering milestones
│   ├── Marquee.tsx         # Infinite continuous tech ticker
│   ├── Navbar.tsx          # Sticky pill navigation with scroll spy
│   └── TechStack.tsx       # 8-card bento tech proficiencies
├── docs/                   # Full engineering & design documentation
├── public/                 # Production assets, icons, shots, resume PDF
├── .gitignore              # Configured ignore rules
└── package.json            # Scripts & dependencies
```

---

## 📬 Contact & Connect

- **Email**: [workwithakeel@gmail.com](mailto:workwithakeel@gmail.com)
- **LinkedIn**: [linkedin.com/in/javid-akeel](https://linkedin.com/in/javid-akeel)
- **GitHub**: [github.com/javid-akeel](https://github.com/javid-akeel)
- **Interactive Resume**: [/resume](http://localhost:3000/resume)
