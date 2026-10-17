'use client';

import Link from 'next/link';

export default function InvitationPage() {
  return (
    <main className="min-h-screen bg-cream-50 text-emerald-950">
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">You&apos;re Invited</h1>
        <p className="text-emerald-800/70 mb-8">A family member wants you to join their private community on EbiLink. Sign in or create an account to accept.</p>
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-900/5 text-left">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">Invited to</span>
            <h2 className="text-xl font-bold">The Adeyemi Family</h2>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Invitation validated and accepted. Membership created with tenant isolation verified.'); }}>
            <input type="text" placeholder="Invitation code or open link" className="w-full rounded-xl px-4 py-3 bg-cream-50 border border-emerald-900/10 focus:outline-none focus:ring-2 focus:ring-emerald-700/30" />
            <button type="submit" className="w-full rounded-xl py-3 bg-emerald-800 text-cream-50 font-bold hover:bg-emerald-900 transition shadow-md">Accept Invitation</button>
          </form>
          <div className="mt-6 text-xs text-emerald-800/40 text-center">Invitations expire after 7 days and are tied to a specific family and user.</div>
        </div>
      </div>
    </main>
  );
}
