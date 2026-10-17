## Free-Forever Stack (Zero Payment Required)
- Database: SQLite (file-based, self-hosted, zero hosting cost)
- Auth: NextAuth.js email-only (self-hosted, no OAuth provider fees)
- Storage: Local filesystem (`public/uploads`) — no API limits, no billing
- Deployment: Any static host, Vercel free tier, or self-hosted server

No external paid services required for core functionality. Optional integrations (email providers) can be added without changing the core free-forever architecture.

Stack: Next.js 15 (App Router), TypeScript strict, Tailwind CSS, shadcn-style UI, NextAuth v5, Neon PostgreSQL, Cloudinary, Vercel.
App: EbiLink | Developer: Odebunmi Tawwab | Design: Deep emerald premium (#047857) + cream (#FDF8E8) + gold (#C5A065)

Multi-Tenant: Each family owns rows with family_id UUID. Authorization server-side; database policies prevent cross-tenant access.
