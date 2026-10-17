# Railway Deployment — Multi-Tenant Free-Forever

App: EbiLink | Developer: Odebunmi Tawwab | Stack: SQLite + PWA + Mobile-First

## Why Railway for Free Multi-Tenancy

Railway provides persistent disk volumes on its free tier. This is critical for SQLite multi-tenant isolation: the SQLite file (`ebilink.db`) must survive redeploys, otherwise family data (`family_id`) would be lost.

## Deployment Steps (Already Configured)

Files created:
- `railway.json` — build and deploy configuration
- `.railway/config.toml` — environment and deploy settings
- `.env.example` — updated with SQLite and local storage variables
- `deploy-railway.sh` — script to run

## Required Commands (After Railway Account Created)

1. `railway login`
2. `railway link`
3. Set variables in Railway dashboard (AUTH_SECRET, DATABASE_URL, STORAGE_PROVIDER, STORAGE_PATH)
4. `railway up`

## Multi-Tenant Isolation on Railway

- SQLite file stored in persistent volume (`DATABASE_URL=file:./ebilink.db`)
- `family_id` enforces tenant isolation at database level
- Local uploads (`public/uploads/`) stored in persistent disk
- Admin portal (`/admin`) monitors all families, users, and storage

## Mobile + PWA Access

- Bottom navigation (`BottomNav`) active on mobile browsers
- PWA manifest (`manifest.json`) allows installation globally
- Service worker (`sw.js`) caches core pages for offline use
- Responsive design works on any device worldwide
