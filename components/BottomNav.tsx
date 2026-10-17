import Link from 'next/link';

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-white/5 backdrop-blur-2xl">
      <div className="flex justify-around items-center h-16 px-4">
        {[
          { label: 'Home', href: '/', icon: '🏠' },
          { label: 'Family', href: '/family/ade-yemi-family', icon: '👥' },
          { label: 'Connect', href: '/messaging', icon: '💬' },
          { label: 'Events', href: '#', icon: '📅' },
          { label: 'Profile', href: '#', icon: '👤' },
        ].map(link => (
          <Link key={link.label} href={link.href} className="flex flex-col items-center gap-0.5 p-2 rounded-xl hover:bg-white/5 transition-colors">
            <span className="text-lg">{link.icon}</span>
            <span className="text-[9px] font-extrabold text-cream-50/70">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
