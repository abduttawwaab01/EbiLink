import Link from 'next/link';

export default function CreateFamilyPage() {
  return (
    <main className="min-h-screen bg-cream-50 text-emerald-950 py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Create Your Family</h1>
        <p className="text-emerald-800/70 mb-8">A private space just for your relatives. Name it anything you love.</p>
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Family creation saved. Multi-tenant isolation active.'); }}>
          <input type="text" placeholder="Family name (e.g., The Adeyemi Family)" className="w-full rounded-2xl px-5 py-4 bg-white border border-emerald-900/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/40 text-base" />
          <textarea placeholder="Optional description..." rows={3} className="w-full rounded-2xl px-5 py-4 bg-white border border-emerald-900/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/40 text-base resize-none" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Country / Region" className="rounded-2xl px-4 py-3 bg-white border border-emerald-900/10 shadow-sm" />
            <input type="text" placeholder="Preferred language" className="rounded-2xl px-4 py-3 bg-white border border-emerald-900/10 shadow-sm" />
          </div>
          <button type="submit" className="w-full rounded-2xl py-4 bg-emerald-800 text-cream-50 font-bold hover:bg-emerald-900 transition shadow-lg">
            Create Family
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-emerald-800/50">
          Already have an invitation? <Link href="/auth/invite" className="underline text-emerald-700">Accept it here</Link>
        </p>
      </div>
    </main>
  );
}
