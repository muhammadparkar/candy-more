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

const CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "chocolates", label: "Chocolates" },
  { id: "flowers", label: "Fresh Flowers" },
  { id: "gift-boxes", label: "Gift Boxes" },
  { id: "hampers", label: "Grand Hampers" },
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

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [activeDietaryFilters, setActiveDietaryFilters] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalActivePhoto, setModalActivePhoto] = useState<string>("");
  const [modalQuantity, setModalQuantity] = useState(1);
  const [modalRibbon, setModalRibbon] = useState("Bubblegum Pink");
  const [modalCardNote, setModalCardNote] = useState("");
  const [cartToast, setCartToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });
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

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setModalActivePhoto(product.photo);
    setModalQuantity(1);
    setModalCardNote("");
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartToast({
      show: true,
      message: `Added ${quantity}x "${product.name}" to your bag! 🍬🌸`,
    });
    setTimeout(() => {
      setCartToast({ show: false, message: "" });
    }, 3500);
    if (selectedProduct) {
      setSelectedProduct(null);
    }
  };

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
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // "featured" maintains default curated order
    });
  }, [selectedCategory, searchQuery, activeDietaryFilters, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />

      {/* Notification Toast */}
      {cartToast.show && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-ink px-5 py-3.5 text-sm font-semibold text-cream shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink text-white">
            <Check weight="bold" className="h-4 w-4" />
          </div>
          <span>{cartToast.message}</span>
        </div>
      )}

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
                      setSortBy(
                        e.target.value as
                          | "featured"
                          | "price-asc"
                          | "price-desc"
                          | "rating"
                      )
                    }
                    className="bg-transparent font-medium text-ink focus:outline-none cursor-pointer"
                  >
                    <option value="featured">Featured Curations</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
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

                    {/* Price & Actions */}
                    <div className="mt-5 pt-3 border-t border-ink/5 flex flex-col gap-3">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-lg font-bold text-ink">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-ink-soft/60 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-medium text-pink flex items-center gap-1">
                          <Truck weight="duotone" className="h-3.5 w-3.5" />
                          Same day
                        </span>
                      </div>

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
                          onClick={() => handleAddToCart(product, 1)}
                          className="flex items-center justify-center gap-1 rounded-full bg-cream py-2 text-xs font-semibold text-ink transition-all group-hover:bg-pink group-hover:text-white active:scale-95 cursor-pointer shadow-sm"
                        >
                          <ShoppingBag weight="bold" className="h-3.5 w-3.5" />
                          Add
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink hover:bg-pink hover:text-white transition-colors"
            >
              <X weight="bold" className="h-5 w-5" />
            </button>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Photo View */}
              <div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream">
                  {selectedProduct.badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-cream">
                      {selectedProduct.badge}
                    </span>
                  )}
                  <Image
                    src={`https://images.unsplash.com/photo-${modalActivePhoto}?auto=format&fit=crop&w=800&h=800&q=80`}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Additional Thumbnails */}
                {selectedProduct.additionalPhotos && selectedProduct.additionalPhotos.length > 0 && (
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setModalActivePhoto(selectedProduct.photo)}
                      className={`relative h-14 w-14 overflow-hidden rounded-xl border-2 transition-all ${
                        modalActivePhoto === selectedProduct.photo ? "border-pink scale-105" : "border-transparent opacity-70"
                      }`}
                    >
                      <Image
                        src={`https://images.unsplash.com/photo-${selectedProduct.photo}?auto=format&fit=crop&w=150&h=150&q=80`}
                        alt="Thumbnail"
                        fill
                        className="object-cover"
                      />
                    </button>
                    {selectedProduct.additionalPhotos.map((photoId) => (
                      <button
                        key={photoId}
                        type="button"
                        onClick={() => setModalActivePhoto(photoId)}
                        className={`relative h-14 w-14 overflow-hidden rounded-xl border-2 transition-all ${
                          modalActivePhoto === photoId ? "border-pink scale-105" : "border-transparent opacity-70"
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
                      {selectedProduct.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-semibold text-ink">
                      <Star weight="fill" className="h-3.5 w-3.5 text-yellow" />
                      <span>{selectedProduct.rating}</span>
                      <span className="text-ink-soft/60">({selectedProduct.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                    {selectedProduct.name}
                  </h2>

                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="font-display text-2xl font-bold text-ink">
                      ${selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-sm text-ink-soft line-through">
                        ${selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {selectedProduct.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 space-y-1.5 border-t border-b border-ink/10 py-3 text-xs text-ink-soft">
                    {selectedProduct.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check weight="bold" className="h-3.5 w-3.5 text-pink shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-xs italic text-ink-soft/80">
                    {selectedProduct.notes}
                  </p>

                  {/* Ribbon choice */}
                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      Complimentary Silk Ribbon:
                    </label>
                    <div className="mt-2 flex gap-2">
                      {["Bubblegum Pink", "Matcha Mint", "Classic Cream"].map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setModalRibbon(color)}
                          className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                            modalRibbon === color
                              ? "bg-ink text-cream"
                              : "bg-cream border border-ink/10 text-ink hover:border-pink"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Handwritten Card Note */}
                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      Wax-Sealed Card Message (Optional):
                    </label>
                    <input
                      type="text"
                      maxLength={140}
                      placeholder="e.g. Happy Birthday Maya! Love, Alex"
                      value={modalCardNote}
                      onChange={(e) => setModalCardNote(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-ink/10 bg-cream/60 px-3.5 py-2 text-xs text-ink placeholder:text-ink-soft/50 focus:border-pink focus:outline-none"
                    />
                  </div>
                </div>

                {/* Stepper & Add Button */}
                <div className="mt-6 pt-4 border-t border-ink/10 flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-ink/15 bg-cream px-3 py-1.5">
                    <button
                      type="button"
                      onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                      className="text-sm font-bold text-ink hover:text-pink px-2"
                    >
                      -
                    </button>
                    <span className="font-display font-semibold text-sm px-2 text-ink">
                      {modalQuantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setModalQuantity(modalQuantity + 1)}
                      className="text-sm font-bold text-ink hover:text-pink px-2"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(selectedProduct, modalQuantity)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-pink py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag weight="bold" className="h-4 w-4" />
                    <span>Add to Bag (${selectedProduct.price * modalQuantity})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
