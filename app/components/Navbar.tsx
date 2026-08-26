"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ShoppingBag, Sparkle } from "@phosphor-icons/react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-4 z-50 mx-4 sm:mx-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-ink/5 bg-white/85 px-4 py-2.5 sm:px-6 sm:py-3 shadow-[0_8px_30px_-12px_rgba(28,58,69,0.25)] backdrop-blur-md transition-all">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:gap-2 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "bg-pink/10 text-pink font-semibold"
                    : "text-ink-soft hover:text-pink hover:bg-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/products"
            className="hidden items-center gap-1.5 rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-medium text-ink transition-[color,border-color,transform] duration-200 hover:border-pink hover:text-pink active:scale-[0.97] sm:inline-flex"
          >
            <Sparkle weight="fill" className="h-3.5 w-3.5 text-pink" />
            Same-day Delivery
          </Link>

          <Link
            href="/products"
            className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-pink px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_20px_-8px_rgba(255,111,174,0.7)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <ShoppingBag weight="bold" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Shop now</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-cream md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X weight="bold" className="h-5 w-5" />
            ) : (
              <List weight="bold" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-ink/5 bg-white/95 p-5 shadow-2xl backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? "bg-pink/10 text-pink font-semibold"
                      : "text-ink hover:bg-cream"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-ink/10 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-xl border border-ink/10 py-2.5 text-xs font-semibold text-ink"
              >
                Track Order & Support
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-pink py-2.5 text-xs font-semibold text-white shadow-md"
              >
                <ShoppingBag weight="bold" className="h-4 w-4" />
                Explore Collection
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
