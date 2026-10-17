export default function FamilyAdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 text-emerald-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Family Administration</h1>
        <p className="text-emerald-800/50 mb-12">Manage members, roles, settings, and community rules securely.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-[28px] p-8 shadow-xl">
            <h2 className="font-extrabold text-xl mb-4">Members & Invitations</h2>
            <p className="text-sm text-emerald-800/50 mb-6">Invite relatives, manage roles, and revoke access securely.</p>
            <div className="space-y-3 mb-6">
              {[
                { name: 'Tunde Adeyemi', role: 'Owner', status: 'Active' },
                { name: 'Amara Adeyemi', role: 'Admin', status: 'Active' },
                { name: 'Uncle Kola', role: 'Member', status: 'Pending' },
              ].map(m => (
                <div key={m.name} className="flex items-center justify-between p-3 rounded-2xl bg-white/40 hover:bg-white/60 transition border border-emerald-900/5">
                  <div>
                    <div className="text-sm font-bold text-emerald-950">{m.name}</div>
                    <div className="text-[10px] text-emerald-800/40">{m.role}</div>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${m.status === 'Active' ? 'bg-emerald-800 text-cream-50' : 'bg-amber-300 text-amber-900'}`}>{m.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full rounded-2xl py-3 bg-emerald-800 text-cream-50 font-extrabold hover:bg-emerald-900 transition shadow-md">Send Invitation</button>
          </div>
          <div className="glass-card rounded-[28px] p-8 shadow-xl">
            <h2 className="font-extrabold text-xl mb-4">Family Settings</h2>
            <ul className="space-y-3 text-sm text-emerald-800/70">
              <li><a href="#" className="hover:text-emerald-950 font-medium">Name & Slug</a></li>
              <li><a href="#" className="hover:text-emerald-950 font-medium">Privacy & Membership Rules</a></li>
              <li><a href="#" className="hover:text-emerald-950 font-medium">Timezone & Language</a></li>
              <li><a href="#" className="hover:text-emerald-950 font-medium">Ownership Transfer</a></li>
              <li><a href="#" className="hover:text-emerald-950 font-medium">Family DNA Score</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 glass-card rounded-[28px] p-8 shadow-xl">
            <h2 className="font-extrabold text-xl mb-4">Content Moderation</h2>
            <p className="text-sm text-emerald-800/50 mb-6">Review reported content, manage community rules, and enforce family standards. All actions are audited.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-50/30 border border-rose-100">
                <h4 className="font-extrabold text-rose-600 mb-1">Reports</h4>
                <p className="text-sm text-rose-800/60">2 new items requiring review</p>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-50/30 border border-emerald-100">
                <h4 className="font-extrabold text-emerald-800 mb-1">Audit Log</h4>
                <p className="text-sm text-emerald-800/60">14 actions recorded today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
