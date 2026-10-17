export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50/20 to-cream-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-950">Memory Archive</h1>
            <p className="mt-3 text-emerald-800/50">Photos, stories, recipes, and traditions — organized forever.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Grandma Foluke\'s Jollof Recipe', category: 'Recipe', year: '1987', desc: 'The original handwritten recipe preserved with handwritten notes and cooking instructions.' },
            { title: 'The 1995 Family Reunion', category: 'Photo Album', year: '1995', desc: 'Over 120 photos from the first reunion in Lagos. Restored and digitized.' },
            { title: 'Chief Adeyemi\'s Speech', category: 'Audio', year: '2001', desc: 'A recorded speech at the family gathering celebrating unity and heritage.' },
            { title: 'Wedding of Tunde & Chioma', category: 'Photo Album', year: '2012', desc: 'A beautiful celebration of family, tradition, and modern love.' },
            { title: 'Family Timeline', category: 'Timeline', year: '1900-2026', desc: 'An interactive timeline spanning over a century of milestones.' },
          ].map(item => (
            <div key={item.title} className="group glass-card rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-emerald-900 to-emerald-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80')] bg-cover bg-center opacity-40" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-extrabold text-gold-400 uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-xl font-extrabold text-cream-50 leading-tight mt-1">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-emerald-800/60 leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-emerald-900 bg-cream-100 px-3 py-1 rounded-full">{item.year}</span>
                  <span className="text-xs font-bold text-gold-500">Open →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
