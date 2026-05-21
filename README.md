# SpiceClassifieds — Next.js UI/UX Rebuild

Pure UI/UX rebuild of [spiceclassifieds.com](https://spiceclassifieds.com) in Next.js 14 + TypeScript.

**No backend, no auth, no database.** Pure presentational code you can drop into your existing project.

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

To build for production:
```bash
npm run build
npm start
```

---

## Design system

- **Palette**: Grenada flag — red `#DC2626`, green `#0F7A5A`, yellow `#FBBF24`
- **Background**: warm off-white `#FBF8F3` (matches the banner illustration's background)
- **Font**: Plus Jakarta Sans (loaded from Google Fonts in `app/layout.tsx`)
- **Icons**: lucide-react
- **Styling**: single `app/globals.css` file — no Tailwind, no CSS Modules
- **Brand logo**: CSS-only (yellow circle + red diamond + small green dot), see `.brand-logo` in globals.css

---

## Routes (matches production site structure)

| Route                       | Purpose                                       |
| --------------------------- | --------------------------------------------- |
| `/`                         | Home — banner hero, 20 categories, listings   |
| `/listings`                 | Browse with category sidebar + filters        |
| `/listings/[id]`            | Detail with gallery, specs, seller, WhatsApp  |
| `/listings/create`          | Post-ad wizard (5 steps)                      |
| `/vendors`                  | Vendor directory                              |
| `/vendor/apply`             | Apply to become a verified vendor             |
| `/vendor/dashboard`         | Vendor analytics + boost center               |
| `/dashboard`                | User dashboard with stats                     |
| `/messages`                 | Split list + chat                             |
| `/profile`                  | Profile banner + tabs                         |
| `/notifications`            | Notification list                             |
| `/saved`                    | Hearted listings                              |
| `/help`                     | Help center + FAQs                            |
| `/support`                  | Contact form                                  |
| `/sign-in`, `/sign-up`      | Auth screens                                  |

---

## Hero banner

The banner image (`public/hero-banner.webp`) is the Caribbean illustration containing the logo and the "Find it. List it. Love Local." headline baked into the pixels.

**It is rendered full-bleed with NO HTML text overlay** — the typography lives inside the image. Search bar and CTAs are in a separate row below the banner.

The PNG source (`public/hero-banner.png`, 1.4 MB) was converted to WebP at quality 85 → **104 KB (93% reduction)**.

To regenerate the WebP from a new PNG:
```bash
python3 -c "from PIL import Image; Image.open('public/hero-banner.png').save('public/hero-banner.webp', 'WEBP', quality=85, method=6)"
```

---

## Mobile

- Bottom nav: Home / Browse / Post / Dashboard / Profile (`components/MobileBottomNav.tsx`)
- Hamburger drawer in the Header for full menu
- Sticky Call + WhatsApp CTA at the bottom of listing detail pages
- All grids collapse cleanly at 768px and 1024px breakpoints

---

## What's emoji-placeholder vs production-ready

**Placeholders to replace later**:
- Listing images use emoji + colored gradient backgrounds — swap for real `<Image>` components when wiring to your DB
- Avatars use initials in colored circles — swap for real user uploads
- Sample data lives in `lib/data.ts` — wire to your Postgres/Clerk later

**Production-ready as-is**:
- Banner hero (real illustration)
- All color tokens, spacing, typography
- All button/badge/card styles
- All responsive breakpoints
- All routing structure

---

## Honest critiques worth knowing

1. **Red + green together is striking but risky in dense UI.** I used yellow as a buffer where they'd otherwise sit adjacent (badges, buttons). Don't put a red "delete" button next to a green "save" button — it'll read as accept/reject error UI.

2. **The banner image has the headline baked in.** This means you can't A/B-test headline copy without redesigning the image. If you want to test headlines later, swap to a banner with no text and add the headline as HTML.

3. **WebP support is universal in modern browsers** but very old iOS/Android won't display it. The `<Image>` component from `next/image` automatically serves the right format, but if you ever hand-write `<img src="/hero-banner.webp">` you'll lose that fallback.

4. **20 categories is a lot for mobile.** On small screens they collapse to a 2-column scroll. Consider showing the top 8 with a "View all" tile in a future iteration if scroll depth becomes a UX problem.

---

## File structure

```
app/
  globals.css                  ← entire design system, single file
  layout.tsx
  page.tsx                     ← home
  listings/page.tsx
  listings/[id]/page.tsx
  listings/create/page.tsx
  vendors/page.tsx
  vendor/apply/page.tsx
  vendor/dashboard/page.tsx
  dashboard/page.tsx
  messages/page.tsx
  profile/page.tsx
  notifications/page.tsx
  saved/page.tsx
  help/page.tsx
  support/page.tsx
  sign-in/page.tsx
  sign-up/page.tsx
components/
  Header.tsx
  Footer.tsx
  AnnounceBar.tsx
  ListingCard.tsx
  MobileBottomNav.tsx
lib/
  data.ts                      ← 20 categories + sample listings
public/
  hero-banner.png              ← 1.4 MB source
  hero-banner.webp             ← 104 KB optimized
```
