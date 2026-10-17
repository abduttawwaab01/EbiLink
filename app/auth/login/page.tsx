import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <h2 className="text-2xl font-extrabold text-cream-50 mb-6">Welcome Back</h2>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Login flow ready for NextAuth integration.'); }}>
        <input type="email" placeholder="Email address" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-cream-50 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400" />
        <input type="password" placeholder="Password" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-cream-50 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400" />
        <button type="submit" className="w-full rounded-xl py-3 bg-gold-400 text-emerald-950 font-bold hover:bg-gold-500 transition">Sign In</button>
      </form>
      <p className="mt-6 text-sm text-cream-100 text-center">
        New to EbiLink? <Link href="/auth/register" className="underline text-gold-400 hover:text-gold-500">Create a family</Link>
      </p>
    </>
  );
}
