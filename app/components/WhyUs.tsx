import { Confetti, Sparkle, Truck } from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    title: "Hand-tied, same day",
    desc: "Florists arrange each bouquet the morning it ships, no cold storage weeks.",
    icon: Truck,
  },
  {
    title: "Artisan chocolatiers",
    desc: "Small-batch cacao, tempered in-house, paired to match every arrangement.",
    icon: Sparkle,
  },
  {
    title: "Gift-wrapped, always",
    desc: "Every order leaves in avant-garde packaging, ready to hand over as-is.",
    icon: Confetti,
  },
];

export function WhyUs() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Why people keep ordering
        </h2>
        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-t-0">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="flex gap-4 py-7 sm:flex-col sm:gap-0 sm:px-7 sm:first:pl-0 sm:last:pr-0">
              <Icon weight="duotone" className="h-8 w-8 shrink-0 text-pink" />
              <div className="sm:mt-5">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
