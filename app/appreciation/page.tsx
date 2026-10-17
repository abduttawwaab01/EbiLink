export default function AppreciationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-rose-50/20 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-emerald-950 mb-4">Appreciation Wall</h1>
        <p className="text-xl text-emerald-800/50">Send gratitude, thanks, and encouragement to your family members.</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {[
          { to: 'Grandma Foluke', from: 'Tunde', msg: 'Thank you for teaching me patience and cooking. Your recipes live in my heart.', type: 'public' },
          { to: 'Amara', from: 'Mama Foluke', msg: 'You make me proud every single day. Keep shining.', type: 'private' },
          { to: 'Uncle Kola', from: 'The Family', msg: 'Your wisdom guides us all. We appreciate your leadership.', type: 'public' },
          { to: 'Everyone', from: 'The Adeyemi Family', msg: 'We are stronger together. Here is to another year of love.', type: 'public' },
        ].map(app => (
          <div key={app.msg} className="glass-card rounded-[28px] p-8 shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-gold-500">To: {app.to}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-500 font-bold border border-rose-100">{app.type}</span>
            </div>
            <p className="text-emerald-900 font-medium text-lg leading-relaxed">&ldquo;{app.msg}&rdquo;</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-emerald-800/40 font-medium">— {app.from}</div>
          </div>
        ))}
      </div>
      <div className="max-w-xl mx-auto mt-16 text-center">
        <textarea rows={3} className="w-full rounded-3xl px-6 py-4 bg-white/60 border border-emerald-900/5 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/20 text-base resize-none mb-4" placeholder="Write your appreciation..." />
        <button className="rounded-full px-8 py-4 bg-gradient-to-r from-gold-400 to-amber-300 text-emerald-950 font-extrabold hover:brightness-110 transition shadow-lg shadow-amber-200/30">Send Appreciation</button>
      </div>
    </main>
  );
}
