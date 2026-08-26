import Image from "next/image";
import Link from "next/link";
import {
  Plant,
  Cookie,
  Package,
  Handshake,
  ArrowRight,
  Quotes,
  GlobeHemisphereWest,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LollipopIcon, GummyDropIcon } from "../components/CandyDecor";
import { DropletIcon } from "../components/icons";

export const metadata = {
  title: "About Us | Candy More Floral",
  description:
    "Learn the story of Candy More Floral: how fine artisan chocolate confectionery and avant-garde floristry came together.",
};

const PILLARS = [
  {
    icon: Cookie,
    title: "Small-Batch Confectionery",
    desc: "We hand-temper single-origin cacao from Madagascar and Ecuador, infusing fresh wild fruit purées, roasted nuts, and botanical essences without artificial colors or preservatives.",
    bg: "bg-pink-light/40",
  },
  {
    icon: Plant,
    title: "Farm-Direct Living Blooms",
    desc: "Our flowers never sit in warehouse cold-storage for weeks. Stems are harvested by partner growers and arranged fresh the morning of dispatch for maximum vase life.",
    bg: "bg-mint/40",
  },
  {
    icon: Package,
    title: "Avant-Garde Keepsake Packaging",
    desc: "We design our custom magnetic keepsake boxes to live on as jewelry cases or vanity trays. Every parcel is finished with silk ribbons and hand-pressed wax seals.",
    bg: "bg-yellow-light/60",
  },
  {
    icon: GlobeHemisphereWest,
    title: "100% Plastic-Free & Fair-Trade",
    desc: "All wrapping is biodegradable and compostable. We pay a 25% premium above Fair-Trade minimums directly to cacao farming cooperatives and local flower growers.",
    bg: "bg-violet/30",
  },
];

const ARTISANS = [
  {
    name: "Élodie Vance",
    role: "Head Chocolatier & Co-Founder",
    origin: "Paris & New York",
    specialty: "Ruby berry ganaches & delicate tempered praline wafers",
    quote: "Chocolate should surprise you—both in texture and in emotional memory.",
    photo: "1582794543139-8ac9cb0f7b11",
  },
  {
    name: "Mateo Rivera",
    role: "Master Botanical Stylist",
    origin: "Bogotá & Los Angeles",
    specialty: "Asymmetrical garden rose arrangements & wild cosmos",
    quote: "Flowers have a natural rhythm; our job is to frame their untamed elegance.",
    photo: "1709294728779-6be509d45255",
  },
  {
    name: "Chloe Chen",
    role: "Botanical Scent & Flavor Sommelier",
    origin: "Taipei & San Francisco",
    specialty: "Jasmine tea infusions & organic wildflower honeycombs",
    quote: "The aroma of fresh lavender and dark cacao creates an instant sense of calm.",
    photo: "1741803099750-e4102ab379b1",
  },
  {
    name: "Soren Lindqvist",
    role: "Creative & Packaging Director",
    origin: "Copenhagen",
    specialty: "Sculptural unboxing architecture & sustainable papercraft",
    quote: "The moment you untie the ribbon is the start of the celebration.",
    photo: "1559648285-851dd3a04a02",
  },
];

const TIMELINE = [
  {
    year: "2014",
    title: "The Weekend Pop-up Stall",
    desc: "Élodie and Mateo set up a single wooden table at a neighborhood farmers market, selling 30 boxes of fresh garden roses alongside handmade raspberry chocolates.",
  },
  {
    year: "2017",
    title: "Our Soho Atelier Opens",
    desc: "We opened our first dedicated flower studio and chocolate kitchen in downtown NYC, introducing same-day custom gift delivery across Manhattan and Brooklyn.",
  },
  {
    year: "2020",
    title: "Cold-Courier Logistics",
    desc: "Engineered proprietary temperature-shielded vans to guarantee that artisan chocolate never melts and garden blooms stay dew-fresh regardless of summer heat.",
  },
  {
    year: "2023",
    title: "Zero Single-Use Plastic",
    desc: "Completely eliminated plastic floral foam and cellophane wraps, transitioning 100% of our packaging to FSC-certified paper, compostable hydration wraps, and silk ribbons.",
  },
  {
    year: "Today",
    title: "Serving 9 Cities Daily",
    desc: "A team of over 40 florists, pastry chefs, and artists crafting 120+ unique arrangements daily for birthdays, weddings, anniversaries, and spontaneous joy.",
  },
];

const PRESS = [
  {
    quote: "Candy More Floral has reinvented the modern luxury gift box into an art form.",
    publication: "Vogue Living",
  },
  {
    quote: "The single-origin chocolates taste as mesmerizing as the blooms look.",
    publication: "Bon Appétit",
  },
  {
    quote: "The bubblegum aesthetic and impeccable botanical craft is a breath of fresh air.",
    publication: "Architectural Digest",
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
            {/* Animated Decor */}
            <LollipopIcon
              className="animate-candy-float absolute right-12 top-10 h-16 w-16 opacity-70 hidden md:block"
              style={{ "--float-rot": "-10deg" } as React.CSSProperties}
            />
            <GummyDropIcon
              className="animate-candy-float absolute right-40 bottom-10 h-12 w-12 opacity-60 hidden lg:block"
              style={{ animationDelay: "1.8s", "--float-rot": "8deg" } as React.CSSProperties}
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-ink-soft shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Candy & More"
                  width={30}
                  height={20}
                  className="h-4 w-auto object-contain"
                />
                Our Story & Botanical Philosophy
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.1]">
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
                Where botanical sculpture meets artisan pastry.
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
              Crafted without compromises.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-soft">
              Every detail is engineered to make unboxing feel like opening a small piece of contemporary art.
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

      {/* Meet The Artisans */}
      <section id="team" className="px-4 py-16 sm:px-6 lg:px-10 xl:px-16 bg-white border-y border-ink/5">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
              The Makers
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
              Meet our master florists & chocolatiers.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-soft">
              Passionate creators who bring precision, sensory experimentation, and genuine love to every parcel.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ARTISANS.map((artisan) => (
              <div
                key={artisan.name}
                className="group flex flex-col justify-between rounded-3xl border border-ink/5 bg-cream/50 p-5 transition-all hover:bg-cream hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-cream">
                    <Image
                      src={`https://images.unsplash.com/photo-${artisan.photo}?auto=format&fit=crop&w=500&h=500&q=80`}
                      alt={artisan.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {artisan.name}
                  </h3>
                  <p className="text-xs font-semibold text-pink">{artisan.role}</p>
                  <p className="mt-0.5 text-[11px] text-ink-soft/70">{artisan.origin}</p>
                  <div className="mt-3 border-t border-ink/5 pt-3">
                    <p className="text-xs text-ink-soft">
                      <span className="font-semibold text-ink">Specialty: </span>
                      {artisan.specialty}
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-white p-3 border border-ink/5">
                  <p className="text-[11px] italic text-ink-soft">
                    &ldquo;{artisan.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
              Our Journey
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
              From market stall to flagship studios.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {TIMELINE.map((item, idx) => (
              <div
                key={item.year}
                className="relative rounded-3xl border border-ink/5 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full bg-pink-light/50 px-3 py-1 font-display text-xs font-bold text-ink">
                    {item.year}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-[11px] font-semibold text-pink">
                  <span>Step 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Accolades */}
      <section id="press" className="px-4 py-16 sm:px-6 lg:px-10 xl:px-16 bg-ink text-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-mint">
              <Medal weight="fill" className="h-3.5 w-3.5" />
              Press & Industry Recognition
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-cream">
              Celebrated by the critics.
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
                  <p className="font-semibold text-sm uppercase tracking-widest text-mint">
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
