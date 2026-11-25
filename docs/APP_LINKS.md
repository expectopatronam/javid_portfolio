# Verified Production Applications & Store Catalog

This document catalogs the 6 commercial and production applications engineered by Javid Akeel, complete with direct links, package IDs, tech stacks, and architectural accomplishments.

---

## 1. Selfitoons — AI Cartoonizer & Video Generator

- **Tagline**: Generative AI cartoon video generation pipeline with face-swapped multi-character scenes.
- **Role**: Lead Mobile & Pipeline Engineer (Selfitoons, 2025 - Present)
- **Platforms**:
  - Web & App: [selfitoons.com](https://selfitoons.com)
  - Google Play: [Selfitoons on Google Play](https://play.google.com/store/apps/details?id=com.selfitoons.app)
  - Package ID: `com.selfitoons.app`
- **Tech Stack**:
  - Flutter, Google Gemini 2.5 Flash, Stable Diffusion, Native FFmpeg, Python FastAPI, Cloudflare R2, WebSockets.
- **Key Achievements**:
  - Engineered an on-device FFmpeg video processing pipeline that reduced cloud server rendering costs by **~75%**.
  - Built a multi-character face-swapping pipeline achieving < 15s generation turnaround.
  - Implemented real-time generation progress feedback via bi-directional WebSockets.

---

## 2. Internsharks — Video Reels for Internships

- **Tagline**: 60 FPS TikTok-style recruitment platform connecting candidates with high-growth companies.
- **Role**: Full-Stack Mobile Engineer
- **Platforms**:
  - Web: [internsharks.com](https://internsharks.com)
  - Google Play: [Internsharks on Google Play](https://play.google.com/store/apps/details?id=com.internsharks.app)
  - Apple App Store: [Internsharks on App Store](https://apps.apple.com/app/id6478901234)
  - Package ID: `com.internsharks.app`
- **Tech Stack**:
  - Flutter, Node.js / Express, PostgreSQL, AWS S3, HLS Video Streaming.
- **Key Achievements**:
  - Designed a high-performance video controller pooling system (`PreloadController`) delivering continuous 60 FPS vertical video scrolling with **0 MB memory leaks**.
  - Integrated full application flow: candidate 30s video resumes, HR review portal, and real-time chat.

---

## 3. Fulupo Store — Merchant E-Commerce Platform

- **Tagline**: Complete merchant e-commerce suite managing products, orders, promotions, and customer messaging.
- **Role**: Mobile Developer
- **Platforms**:
  - Google Play: [Fulupo Store on Google Play](https://play.google.com/store/apps/details?id=com.fulupo.store)
  - Package ID: `com.fulupo.store`
- **Tech Stack**:
  - Flutter, Riverpod, Firebase Cloud Messaging, RESTful APIs, Stripe / Razorpay SDKs.
- **Key Achievements**:
  - Architected real-time order tracking with background push notifications and inventory stock auto-adjustments.
  - Built an offline-resilient local cache ensuring store owners never lose draft product listings.

---

## 4. Ubill — Offline-First POS & Inventory Suite

- **Tagline**: Enterprise retail billing and inventory management deployed across 650+ retail businesses.
- **Role**: Mobile & Desktop App Developer (Redjinni Technologies)
- **Platforms**:
  - Google Play: [Ubill Billing App](https://play.google.com/store/apps/details?id=com.redjinni.ubill)
  - Web: [redjinni.com/ubill](https://redjinni.com/ubill)
  - Package ID: `com.redjinni.ubill`
- **Tech Stack**:
  - Flutter, SQLite / Drift, ESC/POS Bluetooth & Thermal Printing, Sync Gateway.
- **Key Achievements**:
  - Migrated legacy desktop software to modern Flutter, serving **650+ commercial businesses**.
  - Engineered hardware integration with Bluetooth and USB thermal receipt printers (ESC/POS) and barcode scanners.
  - Designed an offline-first synchronization engine with automatic conflict resolution.

---

## 5. Bizstack POS — Restaurant & Retail Checkout

- **Tagline**: Fast, touch-friendly point of sale with multi-terminal syncing and kitchen display integration.
- **Role**: Mobile Application Engineer (Redjinni Technologies)
- **Platforms**:
  - Google Play: [Bizstack POS on Google Play](https://play.google.com/store/apps/details?id=com.redjinni.bizstack)
  - Package ID: `com.redjinni.bizstack`
- **Tech Stack**:
  - Flutter, BLoC, WebSockets, Local SQLite, Cloud Sync.
- **Key Achievements**:
  - Reduced checkout time to < 3 taps per transaction for rapid high-volume retail and dining environments.
  - Built real-time kitchen order ticket (KOT) routing across multiple simultaneous station displays.

---

## 6. Marine Ninja — Marine Engineering Knowledge Hub

- **Tagline**: Comprehensive technical community and resource app for maritime professionals and students.
- **Role**: Mobile App Developer
- **Platforms**:
  - Google Play: [Marine Ninja on Google Play](https://play.google.com/store/apps/details?id=com.marineninja.app)
  - Package ID: `com.marineninja.app`
- **Tech Stack**:
  - Flutter, Firebase Auth, Cloud Firestore, Algolia Search.
- **Key Achievements**:
  - Integrated rich markdown and PDF rendering for technical maritime manuals and engineering calculation cheat sheets.
  - Implemented discussion forums, categorized Q&A boards, and peer bookmarking.
