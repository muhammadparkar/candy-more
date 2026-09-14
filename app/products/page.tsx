"use client";

import { useState, useMemo, useRef, useEffect, Suspense } from "react";
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
  Truck,
  Gift,
  ArrowRight,
  Heart,
  Check,
  CaretDown,
} from "@phosphor-icons/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PRODUCTS, Product, imgSrc } from "../data/products";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { useQuote } from "../components/QuoteModal";

const CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "flowers", label: "Flowers" },
  { id: "plants", label: "Plants" },
  { id: "chocolates", label: "Chocolates" },
  { id: "hampers", label: "Home Decors & Special Events" },
];

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const { open: openQuote } = useQuote();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "rating">("featured");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!sortMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(e.target as Node)) {
        setSortMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sortMenuOpen]);

  const SORT_OPTIONS: { value: "featured" | "rating"; label: string }[] = [
    { value: "featured", label: "Featured Curations" },
    { value: "rating", label: "Highest Rated" },
  ];

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
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
      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // "featured" maintains default curated order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />

      {/* Header Banner */}
      <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-light/40 via-yellow-light/50 to-mint/30 border border-ink/5 p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block [mask-image:linear-gradient(to_right,transparent,black_30%)]">
              <Image
                src="/images/products-hero.jpg"
                alt="Candy More Floral gift boxes with truffles and preserved roses"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="relative z-10 max-w-2xl lg:max-w-xl">
              <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                The Confection & Floral Collection
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Explore our full catalog of fresh flowers, live plants, artisan chocolates, and decor for weddings and special events.
              </p>

              <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] lg:hidden">
                <Image
                  src="/images/products-hero.jpg"
                  alt="Candy More Floral gift boxes with truffles and preserved roses"
                  fill
                  className="object-cover"
                />
              </div>
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
                <div className="relative" ref={sortMenuRef}>
                  <button
                    type="button"
                    onClick={() => setSortMenuOpen((prev) => !prev)}
                    aria-haspopup="listbox"
                    aria-expanded={sortMenuOpen}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition-colors hover:border-pink"
                  >
                    <SlidersHorizontal weight="bold" className="h-3.5 w-3.5 text-pink" />
                    <span className="text-ink-soft">Sort by:</span>
                    <span>{SORT_OPTIONS.find((o) => o.value === sortBy)?.label}</span>
                    <CaretDown
                      weight="bold"
                      className={`h-3 w-3 text-ink-soft transition-transform duration-150 ${
                        sortMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    role="listbox"
                    className={`absolute right-0 top-full z-20 mt-2 w-52 overflow-hidden rounded-2xl border border-ink/10 bg-white p-1.5 shadow-[0_20px_40px_-15px_rgba(28,58,69,0.35)] transition-[opacity,transform] duration-150 ease-out origin-top-right ${
                      sortMenuOpen
                        ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
                        : "-translate-y-1 opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {SORT_OPTIONS.map((option) => {
                      const active = sortBy === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="option"
                          aria-selected={active}
                          onClick={() => {
                            setSortBy(option.value);
                            setSortMenuOpen(false);
                          }}
                          className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-xs font-medium transition-colors ${
                            active
                              ? "bg-pink/10 text-pink font-semibold"
                              : "text-ink hover:bg-cream"
                          }`}
                        >
                          <span>{option.label}</span>
                          {active && <Check weight="bold" className="h-3.5 w-3.5" />}
                        </button>
                      );
                    })}
                  </div>
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
                          src={imgSrc(product.photo, 640, 480)}
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
