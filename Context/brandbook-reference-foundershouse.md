# House of Founders — Design System 2026

> Production design system for foundershouse.nl
> Cool neutrals meet forward-thinking glass. Light, clean, minimal.

---

## 01 — Identity: Logo & Marks

### Logo Variants
- **On Light** — Black logo on light background
- **On Ink** — White logo on dark (#101010) background
- **On Green** — White logo on green background

### Assets
- Full Logo (Black on White / White on Black)
- Brandmark (Black on White / White on Black / Standalone Black / Standalone White)
- Favicon (Black / White)

### Logo Files (SVG paths on foundershouse.nl)
- `/logos/logo-black-on-white.svg`
- `/logos/logo-white-on-black.svg`
- `/logos/brandmark-black-on-white.svg`
- `/logos/brandmark-white-on-black.svg`
- `/logos/brandmark-black.svg`
- `/logos/brandmark-white.svg`
- `/logos/favi-black.svg`
- `/logos/favi-white.svg`

---

## 02 — Color Palette

> 90% neutral. Green (#437C34) is the accent — a touch, not a flood.
> Ink (#101010) may be used as background for focused CTA blocks and accent panels (ticket cards, footer CTA).
> For full dark sections, use dark-bg (#141414) instead.

### Light Palette

| Token          | Hex / Value       | Usage            |
|----------------|-------------------|------------------|
| `--bg`         | `#E8E8E8`         | Page background  |
| `--bg-lt`      | `#EFEFEF`         | Light sections   |
| `--surface`    | `#F5F5F5`         | Cards            |
| `--white`      | `#FFFFFF`         | White            |
| `--tan`        | `#D9D9D9`         | Soft fill        |
| `--green`      | `#437C34`         | Accent           |
| `--green-lt`   | `#5A9E48`         | Bright accent    |
| `--green-pale` | `#A8CDA0`         | Border           |
| `--green-wash` | `#E8F2E6`         | Tint             |
| `--ink`        | `#101010`         | Headings         |
| `--body`       | `#4A4A4A`         | Body text        |
| `--mid`        | `#7A7A7A`         | Muted            |
| `--soft`       | `#A0A0A0`         | Tertiary         |
| `--faint`      | `#C4C4C4`         | Whisper          |

### Dark Section Palette

| Token           | Value                        | Usage              |
|-----------------|------------------------------|--------------------|
| `--dark-bg`     | `#141414`                    | Dark sections      |
| `--dark-deep`   | `#0A0A0A`                    | Deepest dark       |
| `--dark-text`   | `rgba(245,245,245,0.9)`      | Headings on dark   |
| `--dark-body`   | `rgba(245,245,245,0.5)`      | Body on dark       |
| `--dark-muted`  | `rgba(245,245,245,0.35)`     | Muted on dark      |
| `--dark-border` | `rgba(67,124,52,0.12)`       | Borders on dark    |

---

## 03 — Surfaces: Glass System

### Glass Variants

| Class       | Opacity | Blur    | Notes                  |
|-------------|---------|---------|------------------------|
| `.glass`    | 0.55    | 24px    | Standard glass         |
| `.glass-md` | 0.40    | 16px    | Medium glass           |
| `.glass-lt` | 0.25    | 12px    | Light glass            |

### Dark Glass (on dark sections)

- **Green Glass** — `bg: rgba(67,124,52,0.06)` — Tool cards, nav on dark
- **Green Glass Active** — `bg: rgba(67,124,52,0.12)` — Hovered/active state on dark

### Glass Rules

- **Foundation:** Glass cards sit on the neutral grey page (#E8E8E8). The grey shows through the frost to every panel.
- **Border:** White border at 0.5 opacity catches light. Creates the frosted edge. Always present on light backgrounds.
- **On Dark:** Use green-tinted glass (`rgba(67,124,52,0.06)`) with green borders (`rgba(67,124,52,0.1)`) instead of white glass.

---

## 04 — Typography

### Font Families

- **Halant** (Serif) — Medium weight (500). Heritage serif. Used for headings, stats, and display text only.
- **Inter** (Sans) — Regular (400) for body, medium (500) for captions and buttons. The modern complement to the serif.

### Type Scale

| Style     | Size                      | Weight | Usage                                    |
|-----------|---------------------------|--------|------------------------------------------|
| Monument  | `clamp(150–320px)`        | 500    | Hero background numbers (HeroH)          |
| Display   | `52px`                    | 500    | e.g. "House of Founders"                 |
| H2        | `clamp(28–48px)`          | 500    | e.g. "Het experiment"                    |
| H3        | `22px`                    | 500    | e.g. "A venture studio for builders"     |
| Stat      | `36px`                    | 500    | e.g. "17:00"                             |
| Number    | `32px`                    | 500    | e.g. "01"                                |
| Body      | `16px`                    | 400    | Body copy                                |
| Caption   | `11px`                    | 500    | Section labels                           |

---

## 05 — Shape: Border Radius

| Value  | Tier      | Usage                                                        |
|--------|-----------|--------------------------------------------------------------|
| `28px` | Primary   | Glass cards, buttons, CTA blocks, badges. The signature radius. |
| `20px` | Secondary | Images inside cards, portrait thumbnails, dark glass on dark sections. |
| `16px` | Compact   | Dense grid items on dark, marquee cards, tool cards in cascade. |

---

## 06 — Cards

### Card Types

- **Glass Card (Frosted Panel):** The primary card. White frost on neutral grey. Used in Hero, Experiment, FAQ, Footer.
- **Dark Solid (Ink Surface):** CTA blocks, ticket card, footer CTA. Light text on `#101010`.
- **Portrait Card:** Photo + gradient overlay (TeamE marquee).
- **Film-Strip Card:** Glass card with sprocket holes on the left edge. Used in ExperimentI film strip. Horizontal scroll.
- **Fan Card (3D Cascade):** Green-glass on dark, 3D perspective with rotation. ToolsH cascade.

---

## 07 — Motion: Animation Patterns

> Library: anime.js v4 — `createTimeline` + `stagger`. CSS `@keyframes` for infinite scroll only.

### Standard Entrance (Fade Up)
```
opacity: [0, 1]
translateY: [24, 0]
duration: 700
easing: 'easeOutCubic'
stagger: 80-120
```

### Timing Cascade (Stagger Order)
```
headers    → 200ms
cards      → 500ms
images     → 800ms
interactive → last
```

### Fade + Translate
```
opacity [0, 1]
translateY [20-40, 0]
duration: 600-800
easing: easeOutCubic
```

### Scale Entrance
```
opacity [0, 1]
scale [0.88-0.97, 1]
duration: 600-800
easing: easeOutQuart
```

### Line Reveal
```
scaleY [0, 1]
duration: 800-1000
transformOrigin: top
easing: easeOutQuart
```

### Infinite Scroll (CSS Keyframes)
```css
/* TeamE marquee */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
animation: marquee 35-40s linear infinite;
/* Row 1: left, Row 2: right (reverse) */
```

---

## 08 — Compositions: Layout Patterns

### Hero H — The Monument (Giant Typography Background)
Giant serif numbers (150-320px) at 0.06 opacity behind content. Numbers represent key stats (21 founders, 5 tracks). Photo collage overlaid. Light bg. `clamp(150-320px)`.

### Trailer C — The Full Bleed (Viewport Video)
Video fills 80vh. Inset vignette shadow. Bottom gradient for text overlay. Play button with frosted circle. `#0D0704`, `80vh`.

### Experiment I — The Film Strip (Horizontal Scroll Cards)
Glass cards with film sprocket holes. Horizontal scroll container with overflow visible. Each card has left-edge perforations.

### Team E — The Marquee (Infinite Portrait Scroll)
Two opposing rows of 140x180 portrait cards. Row 1 scrolls left (40s), Row 2 scrolls right (35s). Gradient overlay on photos for text.

### Tools H — The Cascade (3D Card Fan)
Cards fanned with rotation `((i-3.5)*2.5deg)` and X offset `((i-3.5)*65px)`. Active card lifts 20px + scales 1.1x. Bouncy `cubic-bezier(0.34, 1.56, 0.64, 1)`.

### Avond B — The Split (Sticky Sidebar)
Two-column: left 58% with timeline content, right 42% with sticky dark ticket card (`#101010`). Stat times in 36px serif green.

### FAQ E — The Numbered Grid (Large Serif Numbers)
Two-column grid. Each Q&A pair led by a large serif number (32px, `#A8CDA0`). Zero-padded (01, 02...). CTA banner at bottom in `#101010`.

### Footer B — The Dual Card (Glass + Dark Side by Side)
Two cards in a grid: left is glass (2027 signup), right is solid dark `#101010` (ticket CTA). Both `min-height: 300px`, `28px` radius.

---

## 09 — Navigation (Top Bar)

### Fixed Navigation Bar

**Default State:**
- `bg: transparent`
- No blur, no border
- Transitions after `scrollY > 40px`
- `transition: all 500ms ease`

**Scrolled State:**
- `bg: rgba(232,232,232,0.8)`
- `backdrop-filter: blur(24px)`
- `border-bottom: 1px solid rgba(255,255,255,0.4)`
- Height: 64px (mobile) / 80px (desktop)

**Logo:** HoF Logo, height: 36px, color: `#101010`

**Links:** 13px, font-medium, color: `#7A7A7A`, hover: `#437C34`, transition: 200ms ease

**CTA Button:** bg: `#101010`, color: `#E8E8E8`, radius: 28px, px-5 py-2.5, hover: `scale(1.02)`

**Behavior:**
- `position: fixed`, `top: 0`, `z-index: 50`
- Scroll trigger: `scrollY > 40px` → glass state
- Entrance: opacity 0→1, y -10→0, 0.6s ease, delay 0.1s
- `max-width: 1120px` centered
- Mobile: Programma + Founders links hidden, CTA always visible

---

## 10 — Buttons

### On Light Backgrounds

- **Primary Dark:** `bg: #101010`, `color: #E8E8E8`, `radius: 28px`, `px-8 py-3.5`
- **Outline Light:** `border: 1px solid #101010`, `color: #101010`, `radius: 28px`

### On Dark Backgrounds

- **Green:** `bg: #437C34`, `color: #FFFFFF`, `radius: 28px`, optional glow shadow
- **Outline Green:** `border: rgba(67,124,52,0.3)`, `bg: rgba(67,124,52,0.12)`, `color: #437C34`, `blur(12px)`

### Badges & Labels

- **Inline Label:** 11px, font-medium, uppercase, tracking: 0.1em, color: `#437C34`, no background
- **Wash Pill:** `bg: #E8F2E6`, `color: #437C34`, radius: 28px, px-4 py-1.5
- **Outline Pill:** `bg: transparent`, `border: 1px solid #A8CDA0`, `color: #437C34`, radius: 28px, px-4 py-2

---

## 11 — Icons

### Icon Style
- Thin line SVGs, `strokeWidth: 1.5`
- `strokeLinecap: round`, `strokeLinejoin: round`
- No fill — stroke only (outline style)
- Never use chunky filled brand logos

### Sizing & Color
- Footer: 16x16px, color: `#4A4A4A`
- Signup: 14x14px, color: `rgba(245,245,240,0.2)`
- Hover: `#437C34`, transition 300ms
- Spacing: `gap-4` between icons

### Footer Placement
Row 1 pattern: brand name (left) + icon set (right). Icons grouped with `gap-4`, no text labels, `aria-label` for a11y.

### Dark Background Variant (Signup)
14px icons on dark, color: `rgba(245,245,240,0.2)`, hover: `#437C34`. Label at 12px, `gap-3`.

---

## 12 — Media: Video Player

### Player Frame
- Aspect ratio: 16:9
- Corner radius: 20px (inner), 28px (outer)
- Background: `#0A0A0A`
- Play button: 56px circle, glass blur
- Controls auto-hide after 2.5s

### Control Pills
- Active: `bg rgba(67,124,52,0.25)`, `border: rgba(67,124,52,0.4)`, `color: #437C34`
- Inactive: `bg rgba(10,10,10,0.5)`, `border: rgba(255,255,255,0.1)`, `color: rgba(255,255,255,0.7)`
- All: radius 28px, blur(12px), 11px bold

### Progress Bar
- Height: 3px (resting), 6px (hover)
- Track: `rgba(255,255,255,0.15)`
- Fill: `#437C34`
- Transition: height 200ms ease

### Features
- HD toggle (auto-detect bandwidth)
- Subtitles: NL / EN (VTT tracks)
- Mute toggle, keyboard shortcuts
- Branded fullscreen with HoF logo
- Subtitle overlay: glass pill, 15px

---

## 13 — Section Headers

### Standard Pattern: Badge + Headline + Description

**Badge Pill:**
- 11px, font-medium, uppercase
- Tracking: 0.08em
- Border: 1px solid `#A8CDA0`
- Color: `#437C34`, radius: 28px, px-4 py-2, mb-5

**Headline:**
- Halant serif, fw-500
- `clamp(28px, 4vw, 48px)`
- Color: `#101010`
- Letter-spacing: -0.02em
- Green accent on key words

**Description:**
- 15px, leading 1.7
- Color: `#4A4A4A`
- Max-w: 440px
- mt-4 below headline

### On Dark Backgrounds
- Badge: color `#A8CDA0`, border `rgba(168,205,160,0.3)`
- Headline: color `rgba(245,245,240,0.9)`
- Description: `rgba(245,245,240,0.45)`

### Entrance Animation Cascade
1. Badge → +200ms
2. Headline → +300ms
3. Description → +400ms
4. Content → +500ms

All elements: `opacity [0→1]`, `translateY [24→0px]`, duration 700ms, `easeOutCubic`. Stagger 100ms between elements.

### Section Dividers
- Standard: 1px, color `#A8CDA0` — between major sections
- On dark: `rgba(67,124,52,0.12)`

---

## 14 — Forms & Interactions

### Signup Pill Bar (Dark)

**Container:**
- `bg: rgba(255,255,255,0.05)`
- `border: rgba(255,255,255,0.08)`
- Radius: 32px, p-1.5
- Max-w: 680px, mx-auto

**Type Pills:**
- 11px font-medium
- Active: `bg #437C34`, white
- Inactive: transparent, `rgba(245,245,240,0.3)`
- Radius: 28px, px-3.5 py-1.5

**Divider:**
- Desktop only (hidden md:block)
- 1px wide, h-6
- `rgba(255,255,255,0.1)`
- Between pills and input

### FAQ — Question Index + Answer Reveal

**Q-Index:**
- 13px, py-4 per row
- Border-bottom: 1px `#A8CDA0`
- Active: fw-500, color `#101010`
- Inactive: fw-400, color `#7A7A7A`

**Active Dot:**
- 5px circle
- Active: `bg #437C34`, no border
- Inactive: transparent, border 1px `#C4C4C4`
- Transition: all 0.2s ease

**Answer:**
- Halant serif, 18px, fw-500
- Color: `#101010`, leading 1.6
- Fade in: opacity [0→1], translateY [16→0px], 600ms

### Globe Language Toggle

**Globe Icon:** 16px, strokeWidth 1.5, inactive stroke `#7A7A7A`, active stroke `#437C34`, transition 0.3s ease

**Popout:**
- `bg: rgba(255,255,255,0.72)`
- `blur(20px)`, radius: 16px
- Shadow: `0 8px 32px rgba(0,0,0,0.08)`
- Offset: `top calc(100% + 8px)`

**Animation:**
- Open: opacity 1, translateY(0)
- Close: opacity 0, translateY(-4px), scale(0.96)
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`, 200-250ms

### Confetti Success Animation

- 100 pieces, 6-12px
- Shapes: circles, rects, strips
- Absolute, top -20px, left staggered 0-100%
- 8-color green palette
- Keyframes: 0% Y(0) rotate(0) opacity:1 → 100% Y(280px) rotate(540deg)
- 1.5-2s per piece, stagger: `i * 0.04s`
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

---

## 15 — Data Display

### Stats Row

**Number:** Halant serif, 36px, fw-500, color: `#A8CDA0`, letter-spacing: -0.03em, line-height: 1

**Label:** 10px uppercase, font-medium, tracking: 0.06em, color: `#7A7A7A`, mt-1

**Spacing:** gap-8 to gap-14

### Timeline / Programme

**Time:** Halant serif, 28-36px, color: `#437C34`, fw-500, tabular-nums, right-aligned, fixed width: 72px

**Title:** Halant serif, 18-22px, color: `#101010`, fw-500

**Row:** border-top: 1px `#A8CDA0` (skip first row), py-4, gap-4

### Tool Cards — Auto-Cycling Fan

**Card Fan Layout:**
- X offset: `(i - center) * 65px`
- Rotation: `(i - center) * 2.5deg`
- Active: lift -20px, scale 1.1
- Inactive: lower opacity

**Card Style:**
- Active: `bg rgba(67,124,52,0.08)`, `border: rgba(67,124,52,0.25)`, `blur(16px)`, radius: 20px
- Inactive: `rgba(255,255,255,0.04)`

**Animation:**
- Auto-cycle: 3s interval
- Pause on hover, resume +500ms
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` — bouncy overshoot
- Entrance: stagger 60ms

### Tool Card — Detail View

**Category Label:** 11px, font-medium, uppercase, tracking: 0.06em, color: `#437C34`, mb-2

**Tool Names:** 15px, font-medium, color: `rgba(245,245,240,0.9)`, separated by " · "

**Favicon Links:** 11px, font-medium, `bg: rgba(255,255,255,0.06)`, `border: rgba(255,255,255,0.08)`, radius: 28px, 12px favicon, opens in new tab

### Founder Portraits

**Portrait Card:** 140x180px (desktop), borderRadius: 18px, filter: saturate(0.9), name overlay with gradient bottom, Halant 10px white

**Fallback Gradient:** `linear-gradient(160deg, #EFE7DD 0%, #A8CDA0 60%, #D5CEC7 100%)`, initials: Halant 24px, `#B8ADA4`

### Marquee Scroll (Team Portraits)

**Speed:**
- Row 1: 0.6px/frame (left)
- Row 2: 0.5px/frame (right)
- Mobile: 1.8 / 1.5 px/frame
- `requestAnimationFrame`

**Loop:** 3x array duplication, seamless wrap at 1/3 width, no CSS keyframes — pure JS

**Drag:** Touch + mouse drag, momentum: velocity * 0.95 decay per frame, pause auto-scroll on drag

---

*This brandbook documents the exact patterns used on foundershouse.nl*
*House of Founders Premiere — 29 april 2026 — H'ART Museum Amsterdam*
