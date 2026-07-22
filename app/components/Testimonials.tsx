const featured = {
  quote:
    "The Bubblegum Rose Box was the best gift I've given. It looked like something from a magazine.",
  name: "Priya M.",
  detail: "Anniversary order",
};

const supporting = [
  {
    quote:
      "Flowers arrived the same morning, still cold from the cooler. Genuinely thoughtful.",
    name: "Daniel O.",
    detail: "Birthday order",
    bg: "bg-mint",
  },
  {
    quote:
      "Client emailed to say thanks within the hour. Packaging alone did the work.",
    name: "Farah S.",
    detail: "Corporate gifting",
    bg: "bg-yellow-light",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink">
          Loved, again and again
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What people say after unboxing
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
          <figure className="flex flex-col justify-between rounded-3xl bg-pink-light p-9 lg:p-11">
            <blockquote className="font-display text-2xl leading-snug text-ink sm:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm">
              <span className="font-semibold text-ink">{featured.name}</span>
              <span className="text-ink-soft"> - {featured.detail}</span>
            </figcaption>
          </figure>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {supporting.map(({ quote, name, detail, bg }) => (
              <figure
                key={name}
                className={`flex flex-col justify-between rounded-3xl ${bg} p-7`}
              >
                <blockquote className="font-display text-base leading-snug text-ink">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-ink">{name}</span>
                  <span className="text-ink-soft"> - {detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
