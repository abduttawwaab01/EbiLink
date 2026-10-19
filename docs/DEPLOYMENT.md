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

## Cloudflare vs Vercel for This Architecture

**Cloudflare (Pages + D1 + R2) wins over Vercel for free-forever multi-tenancy:**

- **Cloudflare D1**: SQLite-compatible database with persistent data (free tier). Multi-tenant `family_id` isolation survives deploys without external services.
- **Cloudflare R2**: Storage with free tier. Replaces local `public/uploads/` if needed.
- **Cloudflare Pages**: Static/deployment hosting (free forever tier).
- **Cloudflare Workers**: Free tier (100k requests/day) for server-side logic.

**Vercel issue**: Serverless functions reset SQLite file between deploys. Requires migrating DB to PostgreSQL (Neon) or using external persistent DB — breaks the pure free-forever file-based design.

**Migration to Cloudflare** (optional, for true lock-free deployment):
- Replace SQLite file adapter with D1 adapter (`DATABASE_URL` points to D1 binding)
- Move uploads from `public/uploads/` to R2 bucket
- Update `railway.json` to `wrangler.json` or use `pages` build output

## Mobile + PWA Access

- Bottom navigation (`BottomNav`) active on mobile browsers
- PWA manifest (`manifest.json`) allows installation globally
- Service worker (`sw.js`) caches core pages for offline use
- Responsive design works on any device worldwide
