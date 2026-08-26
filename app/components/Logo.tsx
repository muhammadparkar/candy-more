import Image from "next/image";
import Link from "next/link";

export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Candy & More Home"
    >
      <div className="relative flex items-center">
        <Image
          src="/logo.png"
          alt="Candy & More"
          width={280}
          height={180}
          priority
          className={`h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:-rotate-1 ${
            dark ? "brightness-110 drop-shadow-[0_4px_16px_rgba(255,111,174,0.4)]" : ""
          }`}
        />
      </div>
    </Link>
  );
}
