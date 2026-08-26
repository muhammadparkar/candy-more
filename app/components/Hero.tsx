import Image from "next/image";
import Link from "next/link";
import { Sparkle, Truck } from "@phosphor-icons/react/dist/ssr";
import { BonbonIcon, GummyDropIcon, LollipopIcon } from "./CandyDecor";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-10 xl:px-16">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1fr_0.9fr] xl:gap-20">
        <div className="relative z-10 lg:translate-x-6 xl:translate-x-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-light px-4 py-1.5 text-xs font-semibold tracking-wide text-ink-soft">
            <Sparkle weight="fill" className="h-3.5 w-3.5 text-pink" />
            Same-day delivery in select cities
          </div>

          <h1 className="mt-6 font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[3.4rem] 2xl:text-[4.2rem]">
            Sweetness,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">arranged</span>
              <span
                className="absolute inset-x-0 bottom-2 z-0 h-4 bg-pink-light/70"
                aria-hidden="true"
              />
            </span>{" "}
            like art.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Indulgent chocolates, hand-tied blooms and avant-garde gift boxes,
            arranged like art and delivered same day.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-[0_16px_30px_-14px_rgba(28,58,69,0.6)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Shop now
            </Link>
            <Link
              href="/about"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-pink hover:text-pink"
            >
              Our story
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:ml-auto lg:mr-0 lg:max-w-lg">
          <div
            className="absolute -top-6 right-6 h-40 w-40 rounded-full bg-mint blur-[2px]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-4 left-0 h-32 w-32 rounded-full bg-yellow"
            aria-hidden="true"
          />
          <div
            className="absolute right-2 top-1/3 h-24 w-24 rounded-full bg-violet"
            aria-hidden="true"
          />
          <div className="absolute -left-5 top-10 z-20 flex h-20 w-20 -rotate-6 items-center justify-center p-2 rounded-full bg-white shadow-[0_20px_40px_-20px_rgba(28,58,69,0.4)] ring-1 ring-ink/5">
            <Image
              src="/logo.png"
              alt="Candy & More"
              width={100}
              height={70}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="absolute inset-8 overflow-hidden rounded-[3rem] shadow-[0_40px_80px_-30px_rgba(255,111,174,0.55)]">
            <Image
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&h=900&q=80"
              alt="Close-up of hand-tied pink garden roses"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-4 bottom-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-20px_rgba(28,58,69,0.35)]">
            <Truck weight="duotone" className="h-6 w-6 text-pink" />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-ink">Free delivery</p>
              <p className="text-[11px] text-ink-soft">on orders $60+</p>
            </div>
          </div>

          <LollipopIcon
            className="animate-candy-float absolute -right-3 -top-2 h-14 w-14 drop-shadow-[0_10px_15px_rgba(28,58,69,0.2)]"
            style={{ "--float-rot": "-8deg" } as React.CSSProperties}
          />
          <GummyDropIcon
            className="animate-candy-float absolute -bottom-3 right-10 h-11 w-11 drop-shadow-[0_10px_15px_rgba(28,58,69,0.2)]"
            style={{ animationDelay: "1.2s", "--float-rot": "6deg" } as React.CSSProperties}
          />
          <BonbonIcon
            className="animate-candy-float absolute left-1/2 -top-8 h-9 w-11 -translate-x-1/2 drop-shadow-[0_10px_15px_rgba(28,58,69,0.2)]"
            style={{ animationDelay: "2.1s" } as React.CSSProperties}
          />
        </div>
      </div>
    </section>
  );
}
