# EbiLink — Multi-Tenant Family Platform

App: **EbiLink** | Developer: **Odebunmi Tawwab**

## Design System
Deep emerald premium (`#047857`) + cream (`#FDF8E8`) + gold (`#C5A065`). Glass cards, gradient text, floating animations, shimmer effects.

## Stack
Next.js 15 (App Router) · TypeScript strict · Tailwind CSS · NextAuth v5 (boundary) · Neon PostgreSQL · Cloudinary / R2

## Multi-Tenant Architecture
Every family is an independent tenant via `family_id` on all owned tables. Server-side authorization enforced. No cross-family access possible at database level.

## Major Features Implemented
- Private family communities with secure isolation
- Interactive family tree explorer
- Memory capsule (time-locked messages for future generations)
- Appreciation wall with public/private gratitude
- Memory archive (photos, recipes, audio, timelines)
- Events with RSVP tracking and countdowns
- Premium landing page with animated gradients and glass cards
- Family dashboard with statistics, quick actions, event preview
- AI Family Assistant preview interface
- Enhanced invitation wizard
- Family DNA tracking and heritage score
- Moderation and audit-ready admin

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
npm run build
```

## Security
No service credentials committed. Database isolation enforced by foreign keys and `family_id` constraints. Row-level authorization verified by schema design.
