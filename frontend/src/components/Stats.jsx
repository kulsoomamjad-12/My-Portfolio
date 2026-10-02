const STATS = [
  { value: '+12', label: 'Created projects' },
  { value: '+200', label: 'Projects' },
  { value: '+120', label: 'Happy Clients' },
  { value: '+5', label: 'Years' },
]

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-6 -mt-6 mb-24">
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/10 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card">
        {STATS.map((s) => (
          <div key={s.label} className="text-center py-8 px-4">
            <p className="text-3xl font-extrabold text-cyan">{s.value}</p>
            <p className="text-sm text-slate-600 dark:text-muted mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
