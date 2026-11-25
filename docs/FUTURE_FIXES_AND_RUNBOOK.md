# Maintenance Runbook & Troubleshooting Guide

This guide provides instructions for common maintenance tasks, troubleshooting known development environment errors, updating assets, and deploying updates.

---

## 1. Quick Development Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## 2. Troubleshooting Common Issues

### Issue A: `Error: listen EADDRINUSE: address already in use :::3000`
**Cause**: Another process (e.g. previous background `next dev` or `next start` server) is holding port 3000.

**Fix Option 1 (Recommended — kill the blocking process):**
```bash
# Find and terminate the process holding port 3000
fuser -k 3000/tcp
# Or using lsof:
# kill -9 $(lsof -t -i:3000)

# Then restart
npm run dev
```

**Fix Option 2 (Run on an alternate port):**
```bash
npx next dev -p 3001
# Or for production start:
# npx next start -p 3001
```

---

### Issue B: Font Fetch or Build Network Errors
**Cause**: The Next.js build uses Turbopack or Tailwind CSS `@import` rules that fetch Google Fonts (`Bricolage Grotesque`, `Inter`, `JetBrains Mono`). In sandboxed or offline environments without outbound access, font resolution can fail.

**Fix**:
1. Ensure the network connection is active during `npm run build`.
2. Keep font `@import` declarations at the very top of `app/globals.css` before any `@import "tailwindcss";` or `@theme` blocks.

---

### Issue C: Large Binary Files or Bloat in Git Repository
**Cause**: Downloaded archive files (like `.zip` assets or temporary design staging directories) accidentally committed to git.

**Fix**:
The `.gitignore` has been updated with:
```gitignore
# Prevent large archives and temp staging assets
*.zip
*.tar.gz
*.tar
public/portfolio-redesign/
public/portfolio-redesign-assets.zip
```
If an untracked zip or staging folder is ever generated, it will be automatically ignored.

---

## 3. How to Update the Resume

The portfolio maintains two synchronized resume formats:
1. **The Interactive Web CV**: Located in `app/resume/page.tsx`.
2. **The Downloadable & Embedded PDF**: Located at `public/Javid_Akeel_Resume.pdf`.

### Steps to Update:
1. **Update PDF**:
   - Generate your updated resume PDF.
   - Replace the file at `public/Javid_Akeel_Resume.pdf` (keeping the exact filename).
   - This immediately updates both the embedded PDF viewer and the "Download PDF" button.
2. **Update Web CV Content**:
   - Open `app/resume/page.tsx`.
   - Update the relevant sections (`Experience`, `Key Accomplishments`, `Education`, or `Skills`).
   - Run `npm run build` to verify syntax and formatting.

---

## 4. How to Add or Modify Featured Applications

The application showcase is declared in `components/Apps.tsx`.

### To Add a New App:
1. **Add Icons & Mockups**:
   - Save the app icon into `public/icons/your-app.png` (recommend 128x128px PNG).
   - Save the app screenshot mockup into `public/shots/your-app.png` (recommend 800x480px PNG).
2. **Update `components/Apps.tsx`**:
   - Add a new object to the `APPS` array:
   ```typescript
   {
     id: 'your-app-id',
     name: 'Your App Name',
     tagline: 'Short 1-line value proposition',
     category: 'AI', // 'AI' | 'Billing & POS' | 'Community'
     rating: '4.9 ★',
     badge: 'Featured',
     desc: 'Detailed 2-3 sentence overview of what the app does and your architectural achievements.',
     tags: ['Flutter', 'Python', 'Firebase'],
     stats: [
       { label: 'Metric 1', val: '10K+' },
       { label: 'Metric 2', val: '<15s' }
     ],
     icon: '/icons/your-app.png',
     shot: '/shots/your-app.png',
     playStore: 'https://play.google.com/store/apps/details?id=com.your.app',
     appStore: 'https://apps.apple.com/app/id...', // optional
     webUrl: 'https://yourapp.com'                  // optional
   }
   ```
3. Update `docs/APP_LINKS.md` with the new app metadata.

---

## 5. Deployment Checklist

Before deploying to Vercel, Netlify, or AWS Amplify:
- [ ] Run `npm run build` locally and ensure 0 errors and 0 warnings.
- [ ] Verify that all image assets in `public/` are referenced with correct relative URLs.
- [ ] Confirm `public/Javid_Akeel_Resume.pdf` is present and loads correctly.
- [ ] Verify responsive layout across mobile (< 768px) and desktop (> 1024px) views.
- [ ] Test email copy toast in `Contact.tsx` on both desktop and mobile devices.
