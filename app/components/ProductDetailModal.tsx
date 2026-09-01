"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Check, Star, ShoppingBag } from "@phosphor-icons/react";
import type { Product } from "../data/products";
import { useQuote } from "./QuoteModal";

export function ProductDetailModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { open: openQuote } = useQuote();
  const [activePhoto, setActivePhoto] = useState(product.photo);
  const [ribbon, setRibbon] = useState("Bubblegum Pink");
  const [cardNote, setCardNote] = useState("");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink hover:bg-pink hover:text-white transition-colors"
        >
          <X weight="bold" className="h-5 w-5" />
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Photo View */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream">
              {product.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-cream">
                  {product.badge}
                </span>
              )}
              <Image
                src={`https://images.unsplash.com/photo-${activePhoto}?auto=format&fit=crop&w=800&h=800&q=80`}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {product.additionalPhotos && product.additionalPhotos.length > 0 && (
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setActivePhoto(product.photo)}
                  className={`relative h-14 w-14 overflow-hidden rounded-xl border-2 transition-all ${
                    activePhoto === product.photo
                      ? "border-pink scale-105"
                      : "border-transparent opacity-70"
                  }`}
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${product.photo}?auto=format&fit=crop&w=150&h=150&q=80`}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                  />
                </button>
                {product.additionalPhotos.map((photoId) => (
                  <button
                    key={photoId}
                    type="button"
                    onClick={() => setActivePhoto(photoId)}
                    className={`relative h-14 w-14 overflow-hidden rounded-xl border-2 transition-all ${
                      activePhoto === photoId
                        ? "border-pink scale-105"
                        : "border-transparent opacity-70"
                    }`}
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=150&h=150&q=80`}
                      alt="Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info & Configuration */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-pink-light/40 px-3 py-0.5 text-xs font-semibold text-ink">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-xs font-semibold text-ink">
                  <Star weight="fill" className="h-3.5 w-3.5 text-yellow" />
                  <span>{product.rating}</span>
                  <span className="text-ink-soft/60">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                {product.name}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {product.description}
              </p>

              <div className="mt-4 space-y-1.5 border-t border-b border-ink/10 py-3 text-xs text-ink-soft">
                {product.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check weight="bold" className="h-3.5 w-3.5 text-pink shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs italic text-ink-soft/80">{product.notes}</p>

              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                  Complimentary Silk Ribbon:
                </label>
                <div className="mt-2 flex gap-2">
                  {["Bubblegum Pink", "Matcha Mint", "Classic Cream"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setRibbon(color)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        ribbon === color
                          ? "bg-ink text-cream"
                          : "bg-cream border border-ink/10 text-ink hover:border-pink"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                  Wax-Sealed Card Message (Optional):
                </label>
                <input
                  type="text"
                  maxLength={140}
                  placeholder="e.g. Happy Birthday Maya! Love, Alex"
                  value={cardNote}
                  onChange={(e) => setCardNote(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-ink/10 bg-cream/60 px-3.5 py-2 text-xs text-ink placeholder:text-ink-soft/50 focus:border-pink focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-ink/10">
              <button
                type="button"
                onClick={() => {
                  let initialMessage = "";
                  if (ribbon) initialMessage += `• Selected Ribbon: ${ribbon}\n`;
                  if (cardNote.trim()) initialMessage += `• Card Message: "${cardNote.trim()}"\n`;
                  openQuote(product.name, initialMessage.trim());
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <ShoppingBag weight="bold" className="h-4 w-4" />
                <span>Get a quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
