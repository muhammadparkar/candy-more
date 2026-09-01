"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlass,
  SlidersHorizontal,
  Star,
  ShoppingBag,
  Eye,
  X,
  Check,
  Truck,
  Sparkle,
  Gift,
  ArrowRight,
  Heart,
} from "@phosphor-icons/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PRODUCTS, Product } from "../data/products";
import { LollipopIcon, BonbonIcon } from "../components/CandyDecor";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { useQuote } from "../components/QuoteModal";

const CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "flowers", label: "Flowers" },
  { id: "plants", label: "Plants" },
  { id: "chocolates", label: "Chocolates" },
  { id: "hampers", label: "Home Decors & Special Events" },
];

const DIETARY_FILTERS = [
  "Gluten-Free",
  "Vegan",
  "Vegetarian",
  "Gift-Ready",
  "Fragrant",
  "Farm-Direct",
];

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const { open: openQuote } = useQuote();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "rating">("featured");
  const [activeDietaryFilters, setActiveDietaryFilters] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleDietaryFilter = (tag: string) => {
    setActiveDietaryFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const openProductModal = (product: Product) => setSelectedProduct(product);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.categorySlug !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      // Dietary / Feature tags
      if (activeDietaryFilters.length > 0) {
        const hasAllFilters = activeDietaryFilters.every((tag) =>
          item.dietaryOrType.includes(tag)
        );
        if (!hasAllFilters) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // "featured" maintains default curated order
    });
  }, [selectedCategory, searchQuery, activeDietaryFilters, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />

      {/* Header Banner */}
      <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-light/40 via-yellow-light/50 to-mint/30 border border-ink/5 p-8 sm:p-12 lg:p-16">
            {/* Playful Floating Candy Elements */}
            <LollipopIcon
              className="animate-candy-float absolute right-8 top-6 h-16 w-16 opacity-70 hidden sm:block"
              style={{ "--float-rot": "-12deg" } as React.CSSProperties}
            />
            <BonbonIcon
              className="animate-candy-float absolute right-32 bottom-6 h-12 w-14 opacity-60 hidden md:block"
              style={{ animationDelay: "1.5s", "--float-rot": "10deg" } as React.CSSProperties}
            />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-ink-soft shadow-sm">
                <Sparkle weight="fill" className="h-3.5 w-3.5 text-pink" />
                Hand-tied blooms & small-batch chocolate atelier
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                The Confection & Floral Collection
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Explore our full catalog of hand-painted truffles, fresh-cut seasonal stem bouquets, and sculptural gift boxes crafted to elevate every gesture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Body */}
      <main className="flex-1 px-4 pb-20 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          {/* Controls: Search, Categories, Sort, Filters */}
          <div className="space-y-6">
            {/* Search & Sort Bar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlass
                  weight="bold"
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft/70"
                />
                <input
                  type="text"
                  placeholder="Search truffles, roses, hampers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-ink/10 bg-white py-3 pl-11 pr-10 text-sm text-ink placeholder:text-ink-soft/50 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20 shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink"
                  >
                    <X weight="bold" className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm">
                  <SlidersHorizontal weight="bold" className="h-3.5 w-3.5 text-pink" />
                  <span>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as "featured" | "rating")
                    }
                    className="bg-transparent font-medium text-ink focus:outline-none cursor-pointer"
                  >
                    <option value="featured">Featured Curations</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-ink/10 pb-4">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      active
                        ? "bg-ink text-cream shadow-md scale-[1.02]"
                        : "bg-white text-ink-soft border border-ink/10 hover:border-pink hover:text-pink"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Dietary & Feature Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft/70 mr-1">
                Filter:
              </span>
              {DIETARY_FILTERS.map((tag) => {
                const active = activeDietaryFilters.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleDietaryFilter(tag)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-150 cursor-pointer ${
                      active
                        ? "bg-pink text-white shadow-sm"
                        : "bg-white border border-ink/10 text-ink-soft hover:bg-pink-light/30"
                    }`}
                  >
                    {active && <Check weight="bold" className="h-3 w-3" />}
                    {tag}
                  </button>
                );
              })}
              {activeDietaryFilters.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveDietaryFilters([])}
                  className="text-xs text-pink underline ml-2 font-medium cursor-pointer"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* Product Count & Results */}
          <div className="mt-8 flex items-center justify-between">
            <p className="text-xs font-semibold text-ink-soft uppercase tracking-wider">
              Showing {filteredProducts.length} handcrafted {filteredProducts.length === 1 ? "item" : "items"}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="mt-16 text-center py-20 bg-white rounded-3xl border border-ink/10 p-8 max-w-lg mx-auto">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-light/50 text-pink mb-4">
                <ShoppingBag weight="duotone" className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">
                No sweet matches found
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Try loosening your search keywords or clearing active filters to see our full artisan range.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                  setActiveDietaryFilters([]);
                }}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-pink px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:scale-105 transition-transform"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
              {filteredProducts.map((product) => {
                const isFav = favorites[product.id];
                return (
                  <article
                    key={product.id}
                    className="group relative flex flex-col justify-between rounded-3xl border border-ink/5 bg-white p-4 sm:p-5 shadow-[0_15px_35px_-25px_rgba(28,58,69,0.35)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-25px_rgba(255,111,174,0.4)]"
                  >
                    {/* Image Container */}
                    <div>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream">
                        {product.badge && (
                          <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold tracking-wide text-cream shadow-sm">
                            {product.badge}
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={(e) => toggleFavorite(product.id, e)}
                          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm text-ink hover:text-pink transition-colors"
                          aria-label="Add to wishlist"
                        >
                          <Heart
                            weight={isFav ? "fill" : "regular"}
                            className={`h-4 w-4 ${isFav ? "text-pink" : ""}`}
                          />
                        </button>

                        <Image
                          src={`https://images.unsplash.com/photo-${product.photo}?auto=format&fit=crop&w=640&h=480&q=80`}
                          alt={product.name}
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Quick View Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center bg-ink/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 backdrop-blur-[2px]">
                          <button
                            type="button"
                            onClick={() => openProductModal(product)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                          >
                            <Eye weight="bold" className="h-3.5 w-3.5 text-pink" />
                            Quick Look
                          </button>
                        </div>
                      </div>

                      {/* Product Meta */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs text-ink-soft">
                          <span>{product.category}</span>
                          <div className="flex items-center gap-1 text-ink font-medium">
                            <Star weight="fill" className="h-3.5 w-3.5 text-yellow" />
                            <span>{product.rating}</span>
                            <span className="text-ink-soft/60">({product.reviewsCount})</span>
                          </div>
                        </div>

                        <h3 className="mt-1 font-display text-base font-semibold text-ink line-clamp-1 group-hover:text-pink transition-colors">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-xs text-ink-soft line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 pt-3 border-t border-ink/5 flex flex-col gap-3">
                      <span className="text-[11px] font-medium text-pink flex items-center gap-1">
                        <Truck weight="duotone" className="h-3.5 w-3.5" />
                        Same day delivery available
                      </span>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => openProductModal(product)}
                          className="flex items-center justify-center rounded-full border border-ink/15 py-2 text-xs font-semibold text-ink transition-colors hover:border-pink hover:text-pink active:scale-95 cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          onClick={() => openQuote(product.name)}
                          className="flex items-center justify-center gap-1 rounded-full bg-cream py-2 text-xs font-semibold text-ink transition-all group-hover:bg-pink group-hover:text-white active:scale-95 cursor-pointer shadow-sm"
                        >
                          <ShoppingBag weight="bold" className="h-3.5 w-3.5" />
                          Get a quote
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Concierge & Custom Orders Banner */}
          <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-ink p-8 text-cream sm:p-12 lg:p-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-mint">
                  <Gift weight="fill" className="h-3.5 w-3.5" />
                  Custom Corporate & Event Floral Bar
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl text-cream">
                  Need 50+ gift boxes or bespoke event arrangements?
                </h2>
                <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-cream/70">
                  Our studio sommelier and botanical artists build custom branded packaging, curated flavor flights, and on-site floral installations tailored for your milestones.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                  >
                    Talk to our concierge
                    <ArrowRight weight="bold" className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-pink hover:text-pink"
                  >
                    Read about our craft
                  </Link>
                </div>
              </div>

              <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl border border-cream/10">
                <Image
                  src="https://images.unsplash.com/photo-1709294728779-6be509d45255?auto=format&fit=crop&w=700&h=700&q=80"
                  alt="Candy More floral bespoke event assembly"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <ProductsCatalog />
    </Suspense>
  );
}
