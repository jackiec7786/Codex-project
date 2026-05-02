# Grenada Board

Production-style Next.js App Router message board focused on Grenada communities.

## Stack
Next.js 15 App Router, TypeScript, Tailwind CSS, Prisma + PostgreSQL, Auth.js, Zod, lucide-react, sonner toasts.

## Setup
1. `cp .env.example .env`
2. `npm install`
3. `npx prisma migrate dev --name init`
4. `npm run prisma:seed`
5. `npm run dev`

## Seed credentials
- User: `user@grenadaboard.local` / `password123`
- Moderator: `mod@grenadaboard.local` / `password123`

## Features
- Public browsing of home/feed/categories/post pages
- Auth-protected server actions for post/comment creation
- Category/parish model for Grenada and diaspora filtering
- Moderation dashboard with role checks
- Prisma schema includes posts, comments, tags, votes, reports, saved posts, auth tables

## Notes
- Rate-limiting hooks are placeholders and should be backed by Redis/Upstash.
- Rich text/file upload intentionally omitted for reliability-first MVP.
