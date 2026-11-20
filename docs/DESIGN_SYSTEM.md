# Design System & Token Specifications

This guide outlines the visual language, typography, color palette, component abstractions, and animation guidelines for the portfolio.

---

## 1. Color Palette & CSS Variables

The portfolio uses an ultra-dark theme (`#07080B`) punctuated by high-contrast neon accents (`lime`, `cyan`, `violet`).

### Color Tokens (`app/globals.css`)

| Token | Hex Value | Usage / Semantic Role |
| :--- | :--- | :--- |
| `--ink-950` | `#07080B` | Deepest background canvas |
| `--ink-900` | `#0B0D12` | Elevated surface (cards, navbar, pills) |
| `--ink-800` | `#12151E` | Hover states, inner wells, borders |
| `--ink-700` | `#1A1F2C` | Subtle dividers, muted borders |
| `--ink-600` | `#242A3B` | Interactive borders, chip backgrounds |
| `--ink-400` | `#64748B` | Secondary text, captions, metadata |
| `--ink-200` | `#CBD5E1` | Body copy, secondary highlights |
| `--ink-50`  | `#F8FAFC` | Headings, primary bold text |
| `--lime`    | `#C5F560` | Primary brand accent, primary CTA, active states |
| `--cyan`    | `#45E3FF` | Secondary tech accent, gradients, info badges |
| `--violet`  | `#9D8CFF` | Tertiary accent, AI & Generative features |
| `--rose`    | `#FF5C8A` | Error states, special highlights |

---

## 2. Typography

Three Google Fonts are imported in `app/globals.css` with zero layout shift:

1. **Display & Headings**: `Bricolage Grotesque`
   - Weight: `600`, `700`, `800`
   - Used for: Hero headline, section kicker headings, big metric numbers, card titles.
   - Letter-spacing: `-0.03em` for tight, punchy headlines.

2. **Body & Interface**: `Inter`
   - Weight: `400`, `500`, `600`
   - Used for: Paragraph descriptions, button labels, navigation links.
   - High legibility at small sizes.

3. **Code & Technical Data**: `JetBrains Mono`
   - Weight: `400`, `500`
   - Used for: Section kickers (`APPS`, `IMPACT`, `TIMELINE`), version numbers, terminal metrics, pipeline nodes.

---

## 3. UI Component Tokens & Utility Classes

The following reusable utility classes are defined in `app/globals.css`:

### Surfaces & Containers
- `.card`: Dark elevated glass surface with subtle light border (`rgba(255,255,255,0.06)`), inner shadow, and hover transition.
  ```css
  background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%), var(--ink-900);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  ```
- `.spot`: Radial gradient spotlight overlay that illuminates card edges.

### Buttons & Interactive Controls
- `.btn-primary`: High-contrast pill button (`background: var(--lime); color: var(--ink-950);`) with a tactile hover transform.
- `.btn-ghost`: Translucent dark pill button with subtle border and lighter hover state.
- `.chip`: Compact pill badge for tags and tech stack labels.
- `.store`: App store button styling supporting Play Store and App Store badges.

### Visual Effects & Gradients
- `.grad-text`: Multi-stop gradient text (`--lime` -> `--cyan` -> `--violet`) with `-webkit-background-clip: text`.
- `.tl-line`: Glowing vertical gradient track in `Experience.tsx`.
- `.live-dot`: Pulsing green ping indicator indicating active work availability.

---

## 4. Animation System

All micro-interactions and ambient animations are hardware-accelerated:

1. **Floating Phone Effect (`.floaty`)**:
   - Continuous gentle 6-second vertical translation (`translateY(0)` to `translateY(-12px)`) with subtle easing (`ease-in-out`).
   - Phone 2 has a staggered delay (`animation-delay: -3s`) for natural asynchronous rhythm.

2. **Continuous Tech Ticker (`.marquee`)**:
   - Infinite horizontal translation using CSS `@keyframes marquee-h`.
   - Pauses gracefully on hover (`:hover { animation-play-state: paused; }`).

3. **Pipeline Data Flow (`.flow`)**:
   - Shimmering gradient animation applied to data stream connectors in the Hero and Impact sections.

---

## 5. Responsive Breakpoints

- **Mobile (< 768px)**:
  - Single-column layout.
  - Hero displays a single interactive phone preview to maximize screen real estate.
  - Horizontal scrolling ticker adapts seamlessly.
- **Tablet (768px - 1024px)**:
  - 2-column bento grids for impact and tech stack.
- **Desktop (> 1024px)**:
  - Full dual-phone isometric presentation with interactive live pipeline preview.
  - Multi-column bento grids with expanded engineering metrics.
