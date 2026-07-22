import Image from "next/image";
import { DropletIcon } from "./icons";

export function Story() {
  return (
    <section id="story" className="px-4 py-6 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 sm:px-14 lg:px-16 lg:py-20 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] xl:max-w-md">
            <Image
              src="https://images.unsplash.com/photo-1709294728779-6be509d45255?auto=format&fit=crop&w=560&h=560&q=80"
              alt="Florist arranging fresh blooms in the Candy More Floral studio"
              fill
              sizes="(min-width: 1024px) 400px, 80vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <DropletIcon className="h-8 w-8" />
            </div>
          </div>
          <div>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              We treat every box like a small piece of art, because
              indulgence deserves good design.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">
              Candy More Floral started as a single market stall pairing
              hand-tempered chocolate with whatever was blooming that week.
              Today our florists and chocolatiers still work side by side,
              building arrangements that feel considered: bold color, honest
              ingredients, nothing generic.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              {[
                ["12+", "years crafting"],
                ["40+", "florists & chocolatiers"],
                ["9", "cities delivered"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl font-semibold text-cream">
                    {stat}
                  </p>
                  <p className="text-xs text-cream/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
