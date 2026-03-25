# Architecture

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 8 | Build tool + dev server |
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| React Router | 7 | Client-side routing |

## Deployment

Hosted on **Vercel**. Push to `main` triggers production deploy.

## Project Layout

```
website/
  src/
    main.tsx          # Entry point, BrowserRouter setup
    App.tsx           # Route definitions
    pages/            # Route-level components (one per page)
    index.css         # Global styles + design tokens
  public/             # Static assets (logos, favicon)
  index.html          # HTML shell
  vite.config.ts      # Vite configuration
  tsconfig.json       # TypeScript config

website-static/       # Original vanilla HTML/CSS/JS landing page (archived)
context/              # External reference materials (not deployed)
```

## Design System

Source of truth: `website-static/brandbook.html`

- **Fonts**: Sora (headings), DM Sans (body)
- **Colors**: cream, ink, purple, pink, yellow, cyan, green, magenta, teal
- **Tokens**: CSS custom properties defined in `src/index.css`
- **Easing**: `cubic-bezier(0.23, 1, 0.32, 1)` — never use `ease-in` for UI
- **Radii**: 12/20/28/999px

## Routing

React Router 7 with `BrowserRouter`. Pages live in `src/pages/` and are wired in `App.tsx`.
