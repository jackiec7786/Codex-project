# SpiceClassifieds — UI/UX Next.js Build

Pixel-faithful port of the SpiceClassifieds mockups to a Next.js 14 App Router project.
**UI only** — no auth, no database, no API calls. All styling lives in a single `app/globals.css`
as requested. Drop this in your existing repo or start fresh.

## Stack
- Next.js 14 (App Router) + TypeScript
- `lucide-react` for icons
- Single `globals.css` design system (no Tailwind, no CSS Modules)
- Google Font: Plus Jakarta Sans (loaded via `<link>` in layout)

## Pages
| Route | Mockup reference |
|---|---|
| `/` | Hero + Popular Categories + Featured Listings |
| `/browse` | Search bar, sidebar filters, results grid |
| `/listing/[id]` | Gallery, specs, seller card, safety tips |
| `/dashboard` | Stats, views chart, top listings, side nav |
| `/post-ad` | 5-step wizard, category picker |
| `/messages` | Conversation list + chat pane |
| `/profile` | Banner, stats, tabs, listings grid |
| `/help` | Help Center with popular topics |
| `/saved` | Saved items grid |
| `/notifications` | Notifications feed |
| `/login`, `/signup` | Auth forms |

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Notes on fidelity

- Listing images use emoji + gradient backgrounds as placeholders. Swap with real
  `next/image` once you have product photos.
- The brand logo is a CSS-built tile (`SC` in a tilted gradient square). Replace
  `.brand-logo` in `globals.css` or the `<div className="brand-logo">SC</div>` markup
  in `components/Header.tsx` with your actual logo file.
- The hero illustration is a CSS gradient + emoji. Drop in your real SVG/PNG illustration
  by replacing the contents of `.hero-illustration` on the home page.
- The dashboard chart is a hand-drawn SVG path approximating the mockup. For real data,
  swap with Recharts or Chart.js.
- The mobile screens (images 3 and 4 from the mockup) are NOT included — those belong
  in the Flutter app, not the web build.

## Customizing colors

All brand colors live as CSS variables at the top of `app/globals.css`:

```css
:root {
  --brand-green: #0f7a5a;
  --brand-red: #dc2626;
  --brand-yellow: #fbbf24;
  ...
}
```

Change those and the whole site re-themes.
