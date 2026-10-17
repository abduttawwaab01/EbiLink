import Link from 'next/link';
import { EnhancedPostCard } from '../../../components/EnhancedPostCard';

export default function FamilyDashboard({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 text-emerald-950">
      {/* Premium Hero Header */}
      <header className="relative overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-emerald-800 to-emerald-700" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gold-400/10 blur-[150px] -translate-y-1/3 translate-x-1/4" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-extrabold">Private Family Community</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-cream-50 leading-[0.95]">
            The Adeyemi Family
          </h1>
          <p className="mt-6 text-xl text-cream-100/70 max-w-2xl leading-relaxed">A private digital home for connection, heritage, events, and lasting relationships across generations.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#" className="inline-flex items-center rounded-full px-7 py-3.5 bg-gradient-to-r from-gold-400 to-amber-300 text-emerald-950 font-extrabold hover:brightness-110 transition shadow-[0_0_30px_rgba(197,160,101,0.3)]">New Post</Link>
            <Link href="#" className="inline-flex items-center rounded-full px-7 py-3.5 border border-cream-50/15 text-cream-50 hover:bg-white/10 transition backdrop-blur-sm font-bold">Events</Link>
            <Link href="/memory-capsule" className="inline-flex items-center rounded-full px-7 py-3.5 border border-cream-50/15 text-cream-50 hover:bg-white/10 transition backdrop-blur-sm font-bold">Memory Capsule</Link>
          </div>
        </div>
      </header>

      {/* Stats Strip */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-20">
        {[
          { label: 'Members', value: '24', sub: 'Active', color: 'text-emerald-800' },
          { label: 'Generations', value: '4', sub: 'Traced', color: 'text-gold-500' },
          { label: 'Memories', value: '312', sub: 'Shared', color: 'text-rose-400' },
          { label: 'Events', value: '3', sub: 'This month', color: 'text-amber-500' },
        ].map(s => (
          <div key={s.label} className="glass-card rounded-3xl p-6 shadow-xl shadow-emerald-950/5 border border-emerald-900/5 hover:-translate-y-1 transition">
            <div className="text-xs font-extrabold text-emerald-800/40 uppercase tracking-widest">{s.label}</div>
            <div className={`text-3xl font-extrabold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-emerald-800/30">{s.sub}</div>
          </div>
        ))}
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-8 pb-24">
        <div className="md:col-span-2 space-y-8">
          {/* Activity Feed */}
          <div className="glass-card rounded-[28px] p-8 shadow-xl shadow-emerald-950/5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold text-emerald-950">Family Activity</h2>
              <Link href="#" className="text-sm font-bold text-gold-500 hover:text-gold-600">View All</Link>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Welcome to the family', body: 'We are glad you joined. Share a memory or introduce yourself!', time: '2 hours ago', author: 'Tunde Adeyemi', avatar: 'TA', tags: ['Welcome'] },
                { title: 'Family Reunion Planning', body: 'We are planning a reunion for December. Please RSVP and share ideas.', time: 'Yesterday', author: 'Amara Adeyemi', avatar: 'AA', tags: ['Event', 'Planning'] },
                { title: 'Recipe Archive Added', body: 'Mama Foluke\'s original jollof recipe has been preserved with handwritten notes.', time: '3 days ago', author: 'Chief Adeyemi', avatar: 'CA', tags: ['Heritage', 'Recipe'] },
              ].map(post => (
                <EnhancedPostCard key={post.title} post={post} />
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          {/* Upcoming Events */}
          <div className="glass-card rounded-[28px] p-8 shadow-xl shadow-emerald-950/5">
            <h3 className="font-extrabold text-xl mb-5">Upcoming Events</h3>
            <div className="space-y-5">
              {[
                { title: "Grandpa's 85th Birthday", date: 'Nov 14', time: '4 PM', location: 'Family Home', type: 'In-Person', color: 'from-gold-400 to-amber-300' },
                { title: 'Holiday Reunion', date: 'Dec 20', time: '2 PM', location: 'Virtual + In-Person', type: 'Hybrid', color: 'from-emerald-600 to-emerald-400' },
                { title: 'New Year Gathering', date: 'Jan 1', time: '12 PM', location: 'Central Park', type: 'In-Person', color: 'from-rose-400 to-rose-300' },
              ].map(ev => (
                <div key={ev.title} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/60 to-cream-50 border border-emerald-900/5 p-5 hover:shadow-md transition">
                  <div className={`absolute top-0 right-0 w-16 h-16 rounded-full bg-gradient-to-br ${ev.color} opacity-10 blur-xl`} />
                  <div className="text-[10px] font-extrabold text-gold-500 uppercase tracking-wide">{ev.date} · {ev.time}</div>
                  <h4 className="font-extrabold text-emerald-950 mt-1">{ev.title}</h4>
                  <div className="text-xs text-emerald-800/40 mt-1">{ev.location} · <span className="font-bold text-emerald-700">{ev.type}</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-[28px] p-8 text-cream-50 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold-400/20 blur-3xl" />
            <h3 className="font-extrabold text-xl mb-6 relative">Quick Actions</h3>
            <ul className="space-y-3 relative">
              {[
                { label: 'Invite a relative', href: '#' },
                { label: 'View family tree', href: '/tree' },
                { label: 'Share a memory', href: '#' },
                { label: 'Send appreciation', href: '/appreciation' },
                { label: 'Lock a memory capsule', href: '/memory-capsule' },
                { label: 'Family AI Assistant', href: '/ai' },
              ].map(action => (
                <li key={action.label}><Link href={action.href} className="block text-sm font-medium text-cream-100/80 hover:text-white hover:translate-x-1 transition-transform duration-200">{action.label}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
