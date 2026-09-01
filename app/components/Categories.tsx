import Link from "next/link";
import { ArrowRight, Cookie, Flower, Plant, HouseLine, Confetti } from "@phosphor-icons/react/dist/ssr";

const categories = [
  {
    name: "Flowers",
    slug: "flowers",
    desc: "Hand-tied seasonal blooms",
    icon: Flower,
    bg: "bg-mint",
  },
  {
    name: "Plants",
    slug: "plants",
    desc: "Potted greenery & foliage",
    icon: Plant,
    bg: "bg-yellow",
  },
  {
    name: "Chocolates",
    slug: "chocolates",
    desc: "Small-batch truffles & bars",
    icon: Cookie,
    bg: "bg-pink-light",
  },
  {
    name: "Home Decors",
    slug: "hampers",
    desc: "Centerpieces & artistic accents",
    icon: HouseLine,
    bg: "bg-violet",
  },
  {
    name: "Special Events",
    slug: "hampers",
    desc: "Weddings, banquets & parties",
    icon: Confetti,
    bg: "bg-cyan/25",
  },
];

export function Categories() {
  return (
    <section className="px-4 py-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {categories.map(({ name, slug, desc, icon: Icon, bg }, idx) => (
            <Link
              key={name}
              href={`/products?category=${slug}`}
              className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl ${bg} p-6 transition-transform duration-200 hover:-translate-y-1 active:scale-[0.98] lg:p-7 ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <Icon
                weight="duotone"
                className="h-10 w-10 text-ink transition-transform duration-200 group-hover:scale-110 lg:h-11 lg:w-11"
              />
              <p className="mt-5 font-display text-xl font-semibold text-ink lg:text-[1.3rem] leading-snug">
                {name}
              </p>
              <p className="mt-1 text-sm text-ink-soft leading-snug">{desc}</p>
              <span className="mt-auto inline-flex items-center pt-4 text-sm font-semibold text-ink">
                Shop
                <ArrowRight
                  weight="bold"
                  className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
