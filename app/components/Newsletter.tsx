"use client";

import { BonbonIcon, ChocolateSquareIcon, GummyDropIcon, LollipopIcon } from "./CandyDecor";

export function Newsletter() {
  return (
    <section id="newsletter" className="px-4 py-6 sm:px-6 lg:px-10 xl:px-16">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink via-bubblegum to-violet px-8 py-14 text-center sm:px-14">
        <LollipopIcon className="pointer-events-none absolute left-6 top-6 h-10 w-10 opacity-25 sm:left-10 sm:top-8 sm:h-14 sm:w-14" />
        <GummyDropIcon className="pointer-events-none absolute right-8 top-10 h-9 w-9 opacity-25 sm:right-14 sm:h-12 sm:w-12" />
        <BonbonIcon className="pointer-events-none absolute bottom-8 left-10 h-8 w-10 opacity-25 sm:bottom-10 sm:left-16 sm:h-10 sm:w-12" />
        <ChocolateSquareIcon className="pointer-events-none absolute bottom-6 right-10 h-9 w-9 opacity-25 sm:right-16 sm:h-12 sm:w-12" />

        <h2 className="relative font-display text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Get first access to new arrangements
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/85">
          10% off your first order, plus seasonal drops before they sell out.
        </p>
        <form
          className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@email.com"
            className="w-full flex-1 rounded-full border border-white/30 bg-white/95 px-5 py-3 text-sm text-ink placeholder:text-ink-soft/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="cursor-pointer whitespace-nowrap rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
