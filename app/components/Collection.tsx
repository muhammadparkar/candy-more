"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, type Product } from "../data/products";
import { ProductDetailModal } from "./ProductDetailModal";

const FEATURED = [
  "bubblegum-rose-box",
  "tulip-field-bouquet",
  "surrealist-truffle-set",
  "golden-hour-hamper",
  "deconstructed-blossom",
  "midnight-praline-bar",
].map((id) => PRODUCTS.find((p) => p.id === id)!);

export function Collection() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="collection" className="px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Bestsellers, made to be given.
            </h2>
          </div>
          <Link
            href="/products"
            className="cursor-pointer text-sm font-semibold text-ink-soft underline-offset-4 transition-colors duration-200 hover:text-pink hover:underline"
          >
            View all 120+ arrangements
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURED.map((product) => (
            <article
              key={product.id}
              className="group rounded-3xl border border-ink/5 bg-white p-5 shadow-[0_20px_40px_-30px_rgba(28,58,69,0.4)] transition-transform duration-200 hover:-translate-y-1 lg:p-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {product.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-cream">
                    {product.badge}
                  </span>
                )}
                <Image
                  src={`https://images.unsplash.com/photo-${product.photo}?auto=format&fit=crop&w=640&h=480&q=80`}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {product.name}
                </h3>
                <p className="mt-0.5 text-sm text-ink-soft">{product.category}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(product)}
                className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-full bg-cream px-4 py-2.5 text-sm font-semibold text-ink transition-[background-color,color,transform] duration-200 group-hover:bg-pink group-hover:text-white active:scale-[0.97]"
              >
                Details
              </button>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <ProductDetailModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
