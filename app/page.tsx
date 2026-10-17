import Link from 'next/link';
import { Nav } from '../components/Nav';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 z-0" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-700/30 blur-[120px] -translate-y-1/3 translate-x-1/4 animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold-400/20 blur-[100px] translate-y-1/3 -translate-x-1/4 animate-float" style={{ animationDelay: '1.5s' }} />

        {/* Hero */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 md:pt-52 md:pb-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-medium text-cream-100/80 tracking-wide uppercase">Now open for families worldwide</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-cream-50 leading-[0.92] animate-fade-in-up">
              EbiLink
              <span className="block text-gradient-gold">A family&apos;s digital heart.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-cream-100/85 max-w-2xl leading-relaxed">
              Private communities. Living family trees. Shared memories. Real connection — built for the people who matter most.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/auth/register" className="inline-flex items-center rounded-full px-9 py-4 text-base font-extrabold bg-gradient-to-r from-gold-400 to-amber-300 text-emerald-950 hover:brightness-110 transition shadow-[0_0_40px_rgba(197,160,101,0.35)]">
                Start Your Family
              </Link>
              <Link href="/auth/login" className="inline-flex items-center rounded-full px-9 py-4 text-base font-extrabold border border-cream-50/20 text-cream-50 hover:bg-white/10 transition backdrop-blur-sm">
                Sign In
              </Link>
            </div>
          </div>
        </section>

        {/* Glass Feature Grid */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 -mt-8 pb-28">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Private Family Communities', desc: 'Every family is an independent tenant. No one else can see your posts, trees, or messages.', icon: '🏛️' },
              { title: 'Family Tree & Heritage', desc: 'Interactive trees, oral history recordings, recipes, traditions — preserved forever.', icon: '🌳' },
              { title: 'Events & Celebrations', desc: 'Plan reunions, birthdays, milestones. RSVP tracking and shared photo albums included.', icon: '🎉' },
            ].map((f, i) => (
              <Link key={f.title} href="#" className="group block glass-card rounded-[28px] p-8 hover:-translate-y-2 transition duration-500 shadow-xl shadow-emerald-950/10">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">{f.icon}</div>
                <h3 className="text-2xl font-extrabold text-emerald-950 mb-3 leading-tight">{f.title}</h3>
                <p className="text-emerald-800/70 leading-relaxed">{f.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-gold-500 font-bold text-sm">
                  <span>Explore</span>
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Memorable Section */}
        <section className="relative z-10 bg-emerald-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 via-emerald-900 to-emerald-800" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-700/20 blur-[150px]" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-cream-50 leading-tight tracking-tight">
                Beyond a social network.<br />
                <span className="text-gradient-gold">It&apos;s family infrastructure.</span>
              </h2>
              <p className="mt-6 text-cream-100/70 text-lg leading-relaxed">
                Most platforms treat family as a group chat. EbiLink treats it as a living institution — with trees, heritage archives, events, mentorship, help boards, and private circles that grow stronger over time.
              </p>
              <ul className="mt-8 space-y-4 text-cream-100/80">
                {['Interactive family trees with custom relationships', 'Memory capsules for future generations', 'Appreciation and gratitude systems', 'Private mentorship and skills directories', 'Event planning with household RSVPs'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center text-xs font-extrabold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="glass-dark rounded-[32px] p-8 shadow-2xl shadow-black/20 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-amber-300 shadow-lg shadow-amber-300/30" />
                  <div>
                    <div className="font-bold text-cream-50">The Adeyemi Family</div>
                    <div className="text-xs text-cream-100/40">Private Community</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Family Members', value: '24 active members', progress: 85 },
                    { label: 'Generations Traced', value: '4 generations', progress: 60 },
                    { label: 'Shared Memories', value: '312 photos & stories', progress: 95 },
                    { label: 'Upcoming Events', value: '3 this month', progress: 70 },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white/5 rounded-2xl p-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-cream-100/60">{stat.label}</span>
                        <span className="font-bold text-cream-50">{stat.value}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-600 to-gold-400 rounded-full" style={{ width: `${stat.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-950 mb-6">Your family is unique.<br />Your platform should be too.</h2>
          <p className="text-xl text-emerald-800/60 mb-10 max-w-2xl mx-auto">Create a private, beautiful home for your relatives. No ads, no noise, just connection.</p>
          <Link href="/auth/register" className="inline-flex items-center rounded-full px-10 py-5 text-lg font-extrabold bg-gradient-to-r from-emerald-800 to-emerald-950 text-cream-50 hover:brightness-110 transition shadow-[0_0_50px_rgba(6,78,59,0.3)]">
            Create Your Family — Free
          </Link>
        </section>

        <footer className="border-t border-emerald-900/10 py-12 text-center text-emerald-800/40 text-sm">
          <p>© {new Date().getFullYear()} EbiLink — Built for families everywhere. By Odebunmi Tawwab.</p>
        </footer>
      </main>
    </>
  );
}
