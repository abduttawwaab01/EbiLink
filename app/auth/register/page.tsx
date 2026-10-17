import Link from 'next/link';

export default function RegisterPage() {
  return (
    <>
      <h2 className="text-2xl font-extrabold text-cream-50 mb-2">Join EbiLink</h2>
      <p className="text-sm text-cream-100/80 mb-6">Create an account to start or join a family.</p>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Registration flow ready.'); }}>
        <input type="text" placeholder="Full name" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-cream-50 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400" />
        <input type="email" placeholder="Email address" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-cream-50 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400" />
        <input type="password" placeholder="Create a password" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-cream-50 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400" />
        <button type="submit" className="w-full rounded-xl py-3 bg-gold-400 text-emerald-950 font-bold hover:bg-gold-500 transition">Create Account</button>
      </form>
      <p className="mt-6 text-sm text-cream-100 text-center">
        Already have an account? <Link href="/auth/login" className="underline text-gold-400 hover:text-gold-500">Sign in</Link>
      </p>
    </>
  );
}
