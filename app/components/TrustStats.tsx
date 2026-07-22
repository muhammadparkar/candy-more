const stats = [
  ["4.9/5", "2,300+ reviews"],
  ["120+", "curated arrangements"],
  ["48hr", "freshness guarantee"],
];

export function TrustStats() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-3 divide-x divide-ink/10 border-y border-ink/10 py-6">
        {stats.map(([stat, label]) => (
          <div key={label} className="text-center">
            <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {stat}
            </p>
            <p className="mt-1 text-xs text-ink-soft sm:text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
