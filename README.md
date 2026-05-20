# SpiceClassifieds — UI/UX Next.js Build

UI/UX rebuild matching the **live spiceclassifieds.com** information architecture, branding, and structure.
**UI only** — no auth, no database, no API calls. Single `app/globals.css` design system.

## What's Fixed in This Version

| Aspect | v1 (wrong) | v2 (this build) |
|---|---|---|
| **Brand color** | Red `#dc2626` | Orange `#FF6B35` (real `meta theme-color`) |
| **Categories** | 7 generic | All 20 real categories with real ad counts |
| **Currency** | USD | XCD (East Caribbean Dollar) |
| **URL structure** | `/browse`, `/listing/[id]` | `/listings`, `/listings/[id]`, `/listings/create` |
| **Auth routes** | `/login`, `/signup` | `/sign-in`, `/sign-up` |
| **Vendors** | Missing | Full `/vendors`, `/vendor/apply`, `/vendor/dashboard` |
| **Feature banners** | Missing | Farm-to-Table + SGU Student Hub |
| **Mobile** | Treated as Flutter | Web responsive + bottom nav |
| **FAQ + CTA strip** | Missing | Included |
| **Footer** | Generic | Quick Links / Categories / Contact (real) |

## Stack
- Next.js 14 App Router + TypeScript
- `lucide-react` for icons
- Single `globals.css` (no Tailwind, no CSS Modules)
- Plus Jakarta Sans via Google Fonts

## Routes (all match real spiceclassifieds.com)

| Route | Purpose |
|---|---|
| `/` | Home: hero, 20 categories, featured, feature banners, latest, popular searches, FAQ, CTA |
| `/listings` | Browse all listings with sidebar filters |
| `/listings/[id]` | Listing detail with WhatsApp/phone/chat contact |
| `/listings/create` | Post ad wizard (5 steps) |
| `/vendors` | Verified vendors directory |
| `/vendor/apply` | Vendor application form |
| `/vendor/dashboard` | Vendor management: boost plans, analytics |
| `/dashboard` | Regular user dashboard |
| `/profile` | User profile with banner, stats, tabs |
| `/messages` | Chat with WhatsApp/phone integration UI |
| `/notifications` | Activity feed |
| `/saved` | Favorited listings |
| `/help` | Help Center |
| `/support` | Contact support form |
| `/sign-in`, `/sign-up` | Auth |

## Mobile (Web Mobile, NOT Flutter)

The mobile screens from the mockup are the responsive web view. Implemented via:
- **Mobile bottom nav** (`components/MobileBottomNav.tsx`) — Home / Browse / Post(+) / Dashboard / Profile, sticks to bottom on screens < 900px
- **Hamburger menu** appears in header on mobile
- **Breakpoints**: 1024px, 900px, 560px, 380px
- **Touch-friendly tap targets** (min 44px)
- Hero illustration hides on small screens to save space
- Category grid scales 5 → 4 → 3 → 2 cols
- Listing grid scales 4 → 3 → 2 cols

## Brand Tokens (`globals.css`)

```css
:root {
  --brand: #FF6B35;          /* spice orange — real site */
  --accent-green: #169B62;   /* Grenada flag green */
  --accent-yellow: #FCD116;  /* Grenada flag yellow */
  --accent-red: #CE1126;     /* Grenada flag red */
  ...
}
```

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Drop into your existing repo

This is a clean structural UI port. To integrate with your existing SpiceClassifieds repo:

1. Copy `app/globals.css` over your current global stylesheet
2. Use `components/Header.tsx`, `Footer.tsx`, `MobileBottomNav.tsx`, `ListingCard.tsx` as a baseline — they're framework-agnostic, no auth coupling
3. Replace the static `lib/data.ts` with real data fetched from your PostgreSQL via Next.js server components
4. Wire Clerk to the `/sign-in` and `/sign-up` routes (the URL paths already match Clerk defaults)

## What's still placeholder

- All product photos are emoji on gradient — swap for `next/image` with real CDN uploads
- The logo is `SC` in a CSS-built gradient tile — replace `.brand-logo` markup with your actual logo file
- The dashboard chart is a static SVG — wire to real analytics with Recharts when ready
- Hero illustration is a CSS gradient + emoji — drop in your real illustration
