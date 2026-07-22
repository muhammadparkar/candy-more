// Hand-rolled candy illustrations, used only because the brief explicitly
// asked for a "candyworld" feel. Kept small, decorative, and non-load-bearing.

type IconProps = { className?: string; style?: React.CSSProperties };

export function LollipopIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} style={style} aria-hidden="true">
      <circle cx="20" cy="15" r="12" fill="url(#lolliSwirl)" />
      <path
        d="M20 5a10 10 0 0 1 8.7 5M20 25a10 10 0 0 1-8.7-5M11 12a10 10 0 0 1 5-8.7M29 18a10 10 0 0 1-5 8.7"
        stroke="var(--color-cream)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M20 27v11" stroke="#3a5a63" strokeWidth="2.2" strokeLinecap="round" />
      <defs>
        <linearGradient id="lolliSwirl" x1="8" y1="3" x2="32" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6fae" />
          <stop offset="1" stopColor="#ff85e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function GummyDropIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M20 6c7 6 12 12.5 12 18a12 12 0 1 1-24 0c0-5.5 5-12 12-18Z"
        fill="url(#gummyGrad)"
      />
      <ellipse cx="15" cy="20" rx="3.2" ry="4.5" fill="white" opacity="0.35" />
      <defs>
        <linearGradient id="gummyGrad" x1="8" y1="6" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffe7a8" />
          <stop offset="1" stopColor="#ff85e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BonbonIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 44 32" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M4 8 L14 6 L14 26 L4 24 C7 20 7 12 4 8Z" fill="#d1c4e9" />
      <path d="M40 8 L30 6 L30 26 L40 24 C37 20 37 12 40 8Z" fill="#66ecff" />
      <rect x="13" y="8" width="18" height="16" rx="8" fill="url(#bonbonGrad)" />
      <defs>
        <linearGradient id="bonbonGrad" x1="13" y1="8" x2="31" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6fae" />
          <stop offset="1" stopColor="#ff85e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ChocolateSquareIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} style={style} aria-hidden="true">
      <rect x="5" y="5" width="30" height="30" rx="6" fill="#3a5a63" />
      <path
        d="M5 20h30M20 5v30M5 12.5h30M5 27.5h30M12.5 5v30M27.5 5v30"
        stroke="var(--color-cream)"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M8 8c4 4 4 8 0 12"
        stroke="#ffb7d9"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
