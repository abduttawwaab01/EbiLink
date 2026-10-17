import type { Metadata } from 'next';
import './globals.css';
import HolographicCanvas from '../components/HolographicCanvas';
import { BottomNav } from '../components/BottomNav';

export const metadata: Metadata = {
  title: 'EbiLink — Family Connection Platform',
  description: 'Helping families stay connected, preserve heritage, and build stronger relationships across generations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-cream-50 text-emerald-950 font-sans selection:bg-gold-400/30 selection:text-emerald-950 relative pb-16 md:pb-0">
        <HolographicCanvas />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
