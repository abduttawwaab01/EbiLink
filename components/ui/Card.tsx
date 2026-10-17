export function Card({ title, description, children }: { title: string; description?: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white/70 backdrop-blur-sm border border-emerald-900/5 shadow-sm p-8 hover:shadow-md transition">
      <h3 className="text-xl font-bold text-emerald-900 mb-2">{title}</h3>
      {description && <p className="text-sm text-emerald-800/60 mb-4">{description}</p>}
      {children}
    </div>
  );
}
