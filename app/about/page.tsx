import Image from "next/image";
import Link from "next/link";
import {
  Plant,
  Package,
  Handshake,
  ArrowRight,
  Quotes,
  GlobeHemisphereWest,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { DropletIcon } from "../components/icons";

export const metadata = {
  title: "About Us | Candy More Floral",
  description:
    "Learn the story of Candy More Floral: how fine artisan chocolate confectionery and avant-garde floristry came together.",
};

const PILLARS = [
  {
    icon: Plant,
    title: "Flowers, Plants & Chocolates",
    desc: "From fresh-cut bouquets and indoor plants to artisan chocolates and gift boxes, every piece is sourced and arranged with care for the occasion it's meant for.",
    bg: "bg-pink-light/40",
  },
  {
    icon: Package,
    title: "Same-Day Delivery",
    desc: "Order in the morning, arrive in the evening. Our team packs and dispatches every gift the same day so your gesture lands exactly when it matters.",
    bg: "bg-mint/40",
  },
  {
    icon: Handshake,
    title: "Weddings & Special Events",
    desc: "From engagement decor to wedding stages and majlis styling, we plan and set up full floral installations for weddings, Eid, and corporate events.",
    bg: "bg-yellow-light/60",
  },
  {
    icon: GlobeHemisphereWest,
    title: "Custom Gifting for Every Occasion",
    desc: "Birthdays, anniversaries, corporate thank-yous or festive celebrations. Every order can be customized with your choice of ribbon, card message, and packaging.",
    bg: "bg-violet/30",
  },
];

const PRESS = [
  {
    quote: "Ordered the rose heart arrangement for our anniversary and it looked even better in person than the photos.",
    publication: "Fatima Al-Sayed",
  },
  {
    quote: "The chocolate strawberries were a huge hit at my daughter's baby shower. Fresh, beautifully packed, delivered right on time.",
    publication: "Noora Hassan",
  },
  {
    quote: "Booked them for our wedding decor and the team handled everything, from the floral arch to the table settings.",
    publication: "Yousef Al-Kaabi",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-yellow-light/60 via-pink-light/30 to-mint/40 border border-ink/5 p-8 sm:p-14 lg:p-20">
            <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block [mask-image:linear-gradient(to_right,transparent,black_30%)]">
              <Image
                src="/images/about-story.jpg"
                alt="Candy More Floral gift box with flowers and chocolates"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="relative z-10 max-w-3xl lg:max-w-xl">
              <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.1]">
                Sweetness, arranged like art.
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-soft max-w-2xl">
                Candy More Floral was born from a simple obsession: why should extraordinary confectionery and breathtaking floristry live in separate worlds? We brought them under one roof to create moments of pure wonder.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  Explore the Collection
                  <ArrowRight weight="bold" className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-pink hover:text-pink"
                >
                  Visit our Ateliers
                </Link>
              </div>

              <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] lg:hidden">
                <Image
                  src="/images/about-story.jpg"
                  alt="Candy More Floral gift box with flowers and chocolates"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story In-Depth */}
      <section className="px-4 py-12 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-[0_25px_50px_-20px_rgba(28,58,69,0.3)]">
                <Image
                  src="https://images.unsplash.com/photo-1709294728779-6be509d45255?auto=format&fit=crop&w=900&h=675&q=80"
                  alt="Candy More floral master studio workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 flex h-24 w-24 items-center justify-center rounded-full bg-yellow shadow-xl border-4 border-white hidden sm:flex">
                <DropletIcon className="h-12 w-12" />
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                The Origins
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
Where flowers, plants and chocolates come together.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-ink-soft">
                Most gift services treat flowers as an afterthought and chocolates as generic mass-produced candy. We set out to change that standard completely.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-ink-soft">
                At Candy More Floral, our chocolatiers and florists share one open atelier. While our florists hand-tie garden roses and delicate cosmos harvested that very morning, our chocolatiers temper grand-cru cacao and infuse fresh botanical ganaches just across the kitchen counter.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-ink-soft">
                The result is a sensory experience where sight, scent, and taste harmonize into something unforgettable.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-ink/10">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-ink">120k+</p>
                  <p className="text-xs text-ink-soft">Smiles Delivered</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-pink">100%</p>
                  <p className="text-xs text-ink-soft">Plastic-Free</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-ink">9</p>
                  <p className="text-xs text-ink-soft">Metropolitan Hubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Pillars */}
      <section id="philosophy" className="px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
              Our Principles
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
              What we bring to every gift.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-soft">
              From everyday bouquets to full event styling, here's what you can count on with every order.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`rounded-3xl ${pillar.bg} p-7 border border-ink/5 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-ink shadow-sm">
                      <Icon weight="duotone" className="h-6 w-6 text-pink" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-soft">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="px-4 py-16 sm:px-6 lg:px-10 xl:px-16 bg-ink text-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-mint">
              <Medal weight="fill" className="h-3.5 w-3.5" />
              Customer Stories
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-cream">
              Loved by our customers.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRESS.map((item) => (
              <div
                key={item.publication}
                className="rounded-3xl border border-cream/10 bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-between"
              >
                <Quotes weight="fill" className="h-8 w-8 text-pink opacity-80" />
                <p className="mt-4 font-display text-lg sm:text-xl font-medium leading-relaxed text-cream">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-cream/10">
                  <p className="font-semibold text-sm text-mint">
                    {item.publication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Sustainability Guarantee */}
      <section id="sustainability" className="px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2.5rem] bg-mint/30 border border-ink/5 p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink-soft">
                Our Green Promise
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
                Ethical sweetness for the earth and farmers.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">
                We believe indulgence should never cost the environment. We work strictly with regenerative family-owned cocoa farms in Latin America and ethical flower cooperatives that rely on natural rainwater and zero harmful pesticides.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm">
                  <Handshake weight="bold" className="h-4 w-4 text-pink" />
                  Direct Trade 25%+ Premium
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm">
                  <Plant weight="bold" className="h-4 w-4 text-pink" />
                  Compostable Stems Wrap
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream shadow-xl hover:scale-105 active:scale-95 transition-transform"
              >
                Send a Handcrafted Gift
                <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-8 py-4 text-sm font-semibold text-ink hover:border-pink hover:text-pink transition-colors"
              >
                Inquire for Weddings & Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
