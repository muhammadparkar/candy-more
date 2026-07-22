import { InstagramLogo, PinterestLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Shop",
    links: ["Chocolates", "Flowers", "Gift Boxes", "Hampers"],
  },
  {
    title: "Company",
    links: ["Our Story", "Sustainability", "Careers", "Press"],
  },
  {
    title: "Help",
    links: ["Delivery Areas", "Track Order", "Returns", "Contact"],
  },
];

const socials = [
  { Icon: InstagramLogo, label: "Instagram" },
  { Icon: PinterestLogo, label: "Pinterest" },
  { Icon: TiktokLogo, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="mt-8 bg-ink px-4 pb-8 pt-16 text-cream sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              Indulgent chocolates, avant-garde florals and gifts, arranged
              like art and delivered same day.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#top"
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
                    <li key={link}>
                      <a
                        href="#top"
                        className="cursor-pointer text-sm text-cream/80 transition-colors duration-200 hover:text-pink"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Candy More Floral. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#top" className="cursor-pointer hover:text-pink">
              Privacy
            </a>
            <a href="#top" className="cursor-pointer hover:text-pink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
