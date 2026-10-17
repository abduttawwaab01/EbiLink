import Link from 'next/link';

export default function AdminPortalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-extrabold text-rose-500 uppercase tracking-[0.3em]">Platform Admin — Full Control</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gradient-emerald mb-3">EbiLink Command Center</h1>
        <p className="text-xl text-emerald-800/50 mb-12 max-w-3xl">Full administrative authority. Manage families, users, content, security, database, storage, and platform settings.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Family Management */}
          <section className="glass-card rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-xl font-extrabold mb-2 text-emerald-950">Family Management</h2>
            <p className="text-xs text-emerald-800/40 mb-6">Create, archive, or delete any family tenant.</p>
            <ul className="space-y-2 text-sm text-emerald-800/80">
              <li>• Create new family communities</li>
              <li>• Suspend or activate families</li>
              <li>• Transfer ownership</li>
              <li>• Force delete with audit log</li>
              <li>• Manage family DNA scores</li>
            </ul>
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-900/5 to-rose-50 border border-rose-100">
              <div className="text-xs font-extrabold text-rose-500">WARNING</div>
              <div className="text-xs text-rose-600/60">Deletions are permanent and audited.</div>
            </div>
          </section>

          {/* User & Auth */}
          <section className="glass-card rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-xl font-extrabold mb-2 text-emerald-950">Users & Authentication</h2>
            <p className="text-xs text-emerald-800/40 mb-6">Full user lifecycle and session management.</p>
            <ul className="space-y-2 text-sm text-emerald-800/80">
              <li>• Reset any user password</li>
              <li>• Revoke sessions globally</li>
              <li>• Manage roles (admin/member/minor)</li>
              <li>• Audit login history</li>
              <li>• Block or suspend accounts</li>
            </ul>
          </section>

          {/* Content Moderation */}
          <section className="glass-card rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-xl font-extrabold mb-2 text-emerald-950">Content Moderation</h2>
            <p className="text-xs text-emerald-800/40 mb-6">Review, edit, or remove any content across families.</p>
            <ul className="space-y-2 text-sm text-emerald-800/80">
              <li>• Review all posts and comments</li>
              <li>• Remove inappropriate content</li>
              <li>• View family messages (with audit)</li>
              <li>• Manage announcements</li>
              <li>• Enforce community rules</li>
            </ul>
          </section>

          {/* Database & Storage */}
          <section className="glass-card rounded-[28px] p-8 shadow-2xl md:col-span-2">
            <h2 className="text-xl font-extrabold mb-2 text-emerald-950">Database & Storage</h2>
            <p className="text-xs text-emerald-800/40 mb-6">Direct access to backend resources. Free-forever SQLite and local file storage.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Database</h3>
                <p className="text-sm text-emerald-800/60 mb-3">SQLite file-based database with full SQL access. Zero hosting costs.</p>
                <div className="flex gap-2">
                  <button className="rounded-full px-4 py-2 bg-emerald-800 text-cream-50 text-xs font-bold hover:bg-emerald-900 transition">Run Migration</button>
                  <button className="rounded-full px-4 py-2 bg-rose-400 text-white text-xs font-bold hover:bg-rose-500 transition">Backup DB</button>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Storage</h3>
                <p className="text-sm text-emerald-800/60 mb-3">Local filesystem uploads in /public/uploads. No API limits or billing.</p>
                <div className="flex gap-2">
                  <button className="rounded-full px-4 py-2 bg-gold-400 text-emerald-950 text-xs font-bold hover:bg-gold-500 transition">Browse Files</button>
                  <button className="rounded-full px-4 py-2 bg-emerald-900/10 text-emerald-800 text-xs font-bold hover:bg-emerald-900/20 transition">Clean Orphans</button>
                </div>
              </div>
            </div>
          </section>

          {/* System & Monitoring */}
          <section className="glass-card rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-xl font-extrabold mb-2 text-emerald-950">System Health</h2>
            <p className="text-xs text-emerald-800/40 mb-6">Platform status, audit trails, and security events.</p>
            <ul className="space-y-3 text-sm text-emerald-800/80">
              <li className="flex justify-between"><span>Database Size</span> <span className="font-extrabold">2.4 MB</span></li>
              <li className="flex justify-between"><span>Active Families</span> <span className="font-extrabold">142</span></li>
              <li className="flex justify-between"><span>Active Users</span> <span className="font-extrabold">3,891</span></li>
              <li className="flex justify-between"><span>Storage Used</span> <span className="font-extrabold">48 MB</span></li>
            </ul>
            <div className="mt-6 p-3 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-900 text-cream-50 text-xs font-medium shadow-lg shadow-emerald-900/20">
              <div className="font-extrabold text-sm mb-1">Audit Trail Active</div>
              All admin actions are permanently logged with timestamps and user attribution.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
