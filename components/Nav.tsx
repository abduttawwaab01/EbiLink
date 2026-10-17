import Link from 'next/link';

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-cream-50/70 backdrop-blur-2xl border-b border-emerald-900/5 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-emerald-950 hover:scale-105 transition-transform">
          <span className="text-gradient-emerald">EbiLink</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold text-emerald-800/50 items-center">
          <Link href="#" className="hover:text-emerald-900 transition-colors">Family</Link>
          <Link href="#" className="hover:text-emerald-900 transition-colors">Connect</Link>
          <Link href="#" className="hover:text-emerald-900 transition-colors">Events</Link>
          <Link href="#" className="hover:text-emerald-900 transition-colors">Profile</Link>
          <Link href="/family/create" className="rounded-full px-5 py-2 bg-emerald-800 text-cream-50 hover:bg-emerald-900 transition shadow-md">Start Family</Link>
        </div>
      </div>
    </nav>
  );
}
