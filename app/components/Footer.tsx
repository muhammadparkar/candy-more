import Link from "next/link";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Flowers", href: "/products?category=flowers" },
      { label: "Plants", href: "/products?category=plants" },
      { label: "Chocolates", href: "/products?category=chocolates" },
      { label: "Home Decors & Special Events", href: "/products?category=hampers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Philosophy", href: "/about#philosophy" },
      { label: "Master Artisans", href: "/about#team" },
      { label: "Sustainability", href: "/about#sustainability" },
    ],
  },
  {
    title: "Help & Support",
    links: [
      { label: "Contact Concierge", href: "/contact" },
      { label: "Studio Locations", href: "/contact#locations" },
      { label: "Delivery & Cutoffs", href: "/contact#delivery" },
      { label: "FAQs", href: "/contact#faq" },
    ],
  },
];

const socials = [
  { Icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/candyandmorefloral" },
  { Icon: WhatsappLogo, label: "WhatsApp", href: "https://wa.me/97431550554" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-ink px-4 pb-8 pt-16 text-cream sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              Hand-tied blooms, potted plants, artisan chocolates and styling for homes
              and special events, arranged like art and delivered same day.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Candy More Floral on ${label}`}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-cream/15 text-cream transition-colors duration-200 hover:border-pink hover:text-pink"
                >
                  <Icon weight="fill" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="cursor-pointer text-sm text-cream/80 transition-colors duration-200 hover:text-pink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Candy More Floral. All rights reserved.</p>
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://qadmastechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cream/80 hover:text-pink transition-colors underline-offset-4 hover:underline"
            >
              Qadmas Technologies
            </a>
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="cursor-pointer hover:text-pink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="cursor-pointer hover:text-pink">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
