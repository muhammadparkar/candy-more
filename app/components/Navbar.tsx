import { Logo } from "./Logo";

const links = [
  { label: "Chocolates", href: "#collection" },
  { label: "Flowers", href: "#collection" },
  { label: "Gift Boxes", href: "#collection" },
  { label: "Our Story", href: "#story" },
];

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-4 sm:mx-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-ink/5 bg-white/80 px-5 py-3 shadow-[0_8px_30px_-12px_rgba(28,58,69,0.25)] backdrop-blur-md">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-pink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#collection"
            className="hidden cursor-pointer rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-pink hover:text-pink sm:inline-flex"
          >
            Track order
          </a>
          <a
            href="#collection"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_-8px_rgba(255,111,174,0.7)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Shop now
          </a>
        </div>
      </div>
    </header>
  );
}
