import Link from 'next/link';

export default function AIPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-emerald-50/10 to-cream-50 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-emerald-900/5 border border-emerald-900/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-xs font-extrabold text-emerald-800 tracking-wider uppercase">Coming Soon</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-emerald-950 mb-6">EbiLink AI</h1>
        <p className="text-2xl md:text-3xl text-gradient-emerald font-extrabold mb-8">Your family&apos;s personal historian.</p>
        <div className="glass-dark rounded-[32px] p-10 md:p-14 text-left shadow-2xl shadow-black/20 max-w-3xl mx-auto mb-12">
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-400 shadow-lg shadow-emerald-900/20 flex items-center justify-center text-white text-xl">🤖</div>
            <div>
              <h3 className="text-xl font-extrabold text-cream-50">Family Assistant</h3>
              <p className="text-sm text-cream-100/50">Powered by family context and heritage data</p>
            </div>
          </div>
          <div className="space-y-6 text-cream-100/90">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
              <div className="text-xs text-gold-400 font-extrabold uppercase tracking-wide mb-2">Ask a question</div>
              <p className="font-medium">&ldquo;What family traditions should we preserve for the next reunion?&rdquo;</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
              <div className="text-xs text-gold-400 font-extrabold uppercase tracking-wide mb-2">AI Response</div>
              <p className="font-medium">Based on your heritage archive, I recommend documenting Mama Foluke&apos;s jollof recipe, the 1995 reunion speeches, and the family timeline milestones. Would you like me to generate a preservation plan?</p>
            </div>
          </div>
        </div>
        <Link href="/family/create" className="inline-flex items-center rounded-full px-10 py-5 text-lg font-extrabold bg-gradient-to-r from-emerald-800 to-emerald-950 text-cream-50 hover:brightness-110 transition shadow-[0_0_50px_rgba(6,78,59,0.3)]">
          Build Your Family First
        </Link>
        <p className="mt-4 text-sm text-emerald-800/40">AI Assistant activates once your family has 5+ members and an archive.</p>
      </div>
    </main>
  );
}
