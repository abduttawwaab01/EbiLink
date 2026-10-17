export default function InteractiveTreePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 px-6 py-20 overflow-hidden relative">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-gold-400/20 animate-float" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${4 + Math.random() * 4}s` }} />
        ))}
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gradient-emerald mb-4">Living Tree</h1>
        <p className="text-xl text-emerald-800/50 mb-16">Interactive branches that grow with your family.</p>

        <div className="relative">
          {/* Connecting lines */}
          <svg className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0 pointer-events-none opacity-40" viewBox="0 0 800 400">
            <line x1="200" y1="50" x2="400" y2="150" stroke="#C5A065" strokeWidth="2" strokeDasharray="8 6" />
            <line x1="600" y1="50" x2="400" y2="150" stroke="#C5A065" strokeWidth="2" strokeDasharray="8 6" />
            <line x1="400" y1="150" x2="300" y2="280" stroke="#065f46" strokeWidth="2" strokeDasharray="8 6" />
            <line x1="400" y1="150" x2="500" y2="280" stroke="#065f46" strokeWidth="2" strokeDasharray="8 6" />
          </svg>

          <div className="relative z-10 flex flex-col items-center gap-12 md:gap-24">
            {/* Root */}
            <div className="group">
              <div className="glass-card rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-2xl shadow-emerald-950/10 transition-transform duration-500 hover:scale-110 hover:rotate-1 group-hover:shadow-[0_20px_60px_rgba(197,160,101,0.3)]">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-gradient-gold">Chief</div>
                  <div className="text-xs text-emerald-800/40 font-bold">Founder</div>
                </div>
              </div>
            </div>

            {/* Second Gen */}
            <div className="flex gap-16 md:gap-24">
              <div className="group relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-rose-400 to-rose-300 shadow-xl flex items-center justify-center text-white font-extrabold text-xl shadow-rose-300/20 hover:scale-110 transition-all duration-500 hover:shadow-[0_0_30px_rgba(248,113,113,0.4)]">Mama</div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-rose-400">Spouse</div>
              </div>
              <div className="group relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-300 to-amber-200 shadow-xl flex items-center justify-center text-amber-900 font-extrabold text-xl shadow-amber-200/30 hover:scale-110 transition-all duration-500 hover:shadow-[0_0_30px_rgba(252,211,77,0.4)]">Chief</div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-amber-500">Founder</div>
              </div>
            </div>

            {/* Third Gen */}
            <div className="flex gap-8 md:gap-12">
              {[
                { name: 'Tunde', color: 'from-emerald-600 to-emerald-400' },
                { name: 'Amara', color: 'from-rose-400 to-rose-300' },
                { name: 'Uncle Kola', color: 'from-amber-300 to-amber-200' },
              ].map(person => (
                <div key={person.name} className="group relative">
                  <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${person.color} shadow-xl flex items-center justify-center text-white font-extrabold text-base shadow-emerald-900/10 hover:scale-110 transition-all duration-500`}>
                    {person.name}
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-emerald-800/30 whitespace-nowrap">2nd Gen</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
