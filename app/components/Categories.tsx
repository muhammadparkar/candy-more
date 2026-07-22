import { ArrowRight, Basket, Cookie, Flower, Gift } from "@phosphor-icons/react/dist/ssr";

const categories = [
  {
    name: "Chocolates",
    desc: "Small-batch truffles & bars",
    icon: Cookie,
    bg: "bg-pink-light",
  },
  {
    name: "Flowers",
    desc: "Hand-tied seasonal blooms",
    icon: Flower,
    bg: "bg-mint",
  },
  {
    name: "Gift Boxes",
    desc: "Curated candy + floral sets",
    icon: Gift,
    bg: "bg-yellow",
  },
  {
    name: "Hampers",
    desc: "Big-occasion baskets",
    icon: Basket,
    bg: "bg-violet",
  },
];

export function Categories() {
  return (
    <section className="px-4 py-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map(({ name, desc, icon: Icon, bg }) => (
            <a
              key={name}
              href="#collection"
              className={`group relative cursor-pointer overflow-hidden rounded-3xl ${bg} p-6 transition-transform duration-200 hover:-translate-y-1 lg:p-8`}
            >
              <Icon
                weight="duotone"
                className="h-10 w-10 text-ink transition-transform duration-200 group-hover:scale-110 lg:h-12 lg:w-12"
              />
              <p className="mt-5 font-display text-xl font-semibold text-ink lg:text-2xl">
                {name}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{desc}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-ink">
                Shop
                <ArrowRight
                  weight="bold"
                  className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
