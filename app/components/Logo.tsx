import Link from "next/link";
import { RoseGemIcon } from "./icons";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <RoseGemIcon className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:-rotate-6" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          Candy More
        </span>
        <span
          className={`text-[10px] font-semibold tracking-[0.35em] ${
            dark ? "text-mint" : "text-pink"
          }`}
        >
          FLORAL
        </span>
      </span>
    </Link>
  );
}

