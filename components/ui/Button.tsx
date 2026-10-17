export function Button({ children, variant = 'primary', ...props }: { children: React.ReactNode; variant?: 'primary' | 'outline'; } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30';
  const styles = variant === 'primary'
    ? 'bg-emerald-800 text-cream-50 hover:bg-emerald-900 shadow-lg hover:shadow-xl'
    : 'border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-50';
  return <button className={`${base} ${styles}`} {...props}>{children}</button>;
}
