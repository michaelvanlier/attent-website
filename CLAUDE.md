# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Attent — "The Thoughtfulness App" marketing website. Helps users remember important moments for the people they care about. Bilingual: Dutch (primary), English (secondary).

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 8 | Build tool + dev server |
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| React Router | 7 | Client-side routing |

## Commands

```bash
cd website
npm run dev      # Start dev server
npm run build    # Type-check + production build
npm run lint     # ESLint
npm run preview  # Preview production build locally
```

## Project Structure

```
website/           # Vite + React + TypeScript app
  src/             # Application source
  public/          # Static assets served as-is
  package.json

website-static/    # Original static landing page (vanilla HTML/CSS/JS)
  index.html       # Main landing page
  brandbook.html   # Design system source of truth
  builder.html     # Interactive component builder
  css/             # tokens.css, components.css, animations.css
  js/              # main.js (i18n, scroll reveal, confetti, etc.)
  assets/          # Images (JPG) and logos (SVG)

context/           # External reference/input materials — not part of the project itself, used as inspiration and background research
```

## Design System

- **Brandbook**: `website-static/brandbook.html` is the source of truth for the full design system
- **Fonts**: Sora (headings), DM Sans (body) — Google Fonts
- **Brand colors**: cream (#FFF8EE), ink (#0C0C22), purple (#6D2EFF), pink (#FFA2FF), yellow (#E8FF3C), cyan (#7DFFFF)
- **Easing**: `cubic-bezier(0.23, 1, 0.32, 1)` for ease-out — never use `ease-in` for UI animations
- **Animation duration**: 200–400ms for UI interactions
- **Animate only**: `transform` and `opacity` (GPU-accelerated). Never animate from `scale(0)` — use `scale(0.95)` + opacity
- **Border radii**: 12px (sm), 20px (md), 28px (lg), 999px (full)

## Internationalization

The static site uses a JS translation dictionary with `data-i18n` attributes. The new React app should implement i18n as needed.
