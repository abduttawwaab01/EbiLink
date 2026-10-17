import Link from 'next/link';

export default function MemoryCapsulePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 text-emerald-950 px-6">
      <div className="max-w-3xl mx-auto py-20 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-rose-50 text-rose-500 text-xs font-extrabold tracking-wider uppercase border border-rose-100">New Feature</div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Memory Capsule</h1>
        <p className="text-xl text-emerald-800/60 mb-4">Write a message or upload a photo. Lock it for 5, 10, or 25 years. Only your family will unlock it.</p>
        <div className="glass-card rounded-[32px] p-8 md:p-12 text-left shadow-2xl">
          <label className="block text-sm font-bold mb-3">Your Message</label>
          <textarea rows={4} className="w-full rounded-2xl px-5 py-4 bg-white/80 border border-emerald-900/5 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 resize-none text-base mb-6" placeholder="Dear family..." />
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Unlock in 5 years', date: '2030', desc: 'For the next reunion' },
              { label: 'Unlock in 10 years', date: '2035', desc: 'For a milestone birthday' },
              { label: 'Unlock in 25 years', date: '2050', desc: 'For future generations' },
            ].map(opt => (
              <button key={opt.label} className="rounded-2xl bg-white/50 border border-emerald-900/5 hover:border-emerald-700/20 p-5 text-left hover:shadow-md transition">
                <div className="text-xs text-gold-500 font-extrabold uppercase tracking-wide">{opt.label}</div>
                <div className="text-2xl font-extrabold text-emerald-900">{opt.date}</div>
                <div className="text-xs text-emerald-800/50 mt-1">{opt.desc}</div>
              </button>
            ))}
          </div>
          <Link href="#" className="inline-flex items-center rounded-full px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-extrabold hover:brightness-110 transition shadow-lg shadow-rose-400/20">
            Lock Memory Capsule
          </Link>
          <p className="mt-4 text-xs text-emerald-800/30">Capsules are encrypted and tied to family membership.</p>
        </div>
      </div>
    </main>
  );
}
