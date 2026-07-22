import Image from "next/image";

const products = [
  {
    name: "Bubblegum Rose Box",
    category: "Chocolates + roses",
    price: "$58",
    badge: "Bestseller",
    photo: "1566565286951-f81c7ba5619d",
  },
  {
    name: "Tulip Field Bouquet",
    category: "Fresh flowers",
    price: "$42",
    badge: "New",
    photo: "1741803099750-e4102ab379b1",
  },
  {
    name: "Surrealist Truffle Set",
    category: "Artisan chocolate, 12pc",
    price: "$34",
    badge: null,
    photo: "1756318084626-de5cf8bab8c6",
  },
  {
    name: "Golden Hour Hamper",
    category: "Candy + flowers + note card",
    price: "$76",
    badge: "Gift-ready",
    photo: "1559648285-851dd3a04a02",
  },
  {
    name: "Deconstructed Blossom",
    category: "Statement centerpiece",
    price: "$64",
    badge: null,
    photo: "1573256815039-69d5f81f894f",
  },
  {
    name: "Midnight Praline Bar",
    category: "Single-origin cacao",
    price: "$18",
    badge: "New",
    photo: "1654493404885-5254978e9705",
  },
];

export function Collection() {
  return (
    <section id="collection" className="px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Bestsellers, made to be given.
            </h2>
          </div>
          <a
            href="#newsletter"
            className="cursor-pointer text-sm font-semibold text-ink-soft underline-offset-4 transition-colors duration-200 hover:text-pink hover:underline"
          >
            View all 120+ arrangements
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map(({ name, category, price, badge, photo }) => (
            <article
              key={name}
              className="group rounded-3xl border border-ink/5 bg-white p-5 shadow-[0_20px_40px_-30px_rgba(28,58,69,0.4)] transition-transform duration-200 hover:-translate-y-1 lg:p-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-cream">
                    {badge}
                  </span>
                )}
                <Image
                  src={`https://images.unsplash.com/photo-${photo}?auto=format&fit=crop&w=640&h=480&q=80`}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {name}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-soft">{category}</p>
                </div>
                <p className="whitespace-nowrap font-display text-lg font-semibold text-ink">
                  {price}
                </p>
              </div>
              <button
                type="button"
                className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-full bg-cream px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 group-hover:bg-pink group-hover:text-white"
              >
                Add to bag
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
