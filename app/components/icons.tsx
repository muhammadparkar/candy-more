// Hand-rolled brand marks only, matching the client's provided logo concepts
// (rose gem mark, surrealist droplet). All other icons use @phosphor-icons/react.

export function RoseGemIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 4 L34 14 L30 26 L24 34 L18 26 L14 14 Z"
        fill="url(#roseGemGrad)"
      />
      <path d="M24 4 L34 14 L24 20 L14 14 Z" fill="url(#roseGemGrad2)" />
      <path d="M14 14 L24 20 L18 26 Z" fill="#ff6fae" opacity="0.85" />
      <path d="M34 14 L24 20 L30 26 Z" fill="#d1c4e9" opacity="0.85" />
      <path d="M18 26 L24 20 L30 26 L24 34 Z" fill="#ffb7d9" opacity="0.9" />
      <path
        d="M24 34 C20 40 16 42 12 42"
        stroke="#3a5a63"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="roseGemGrad" x1="14" y1="4" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff85e5" />
          <stop offset="1" stopColor="#66ecff" />
        </linearGradient>
        <linearGradient id="roseGemGrad2" x1="14" y1="4" x2="34" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6fae" />
          <stop offset="1" stopColor="#d1c4e9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DropletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 5c6 8 11 14.5 11 20a11 11 0 1 1-22 0c0-5.5 5-12 11-20Z"
        fill="url(#dropGrad)"
      />
      <path d="M20 14c-2.5 4-4 6.5-4 9a4 4 0 0 0 4 4" stroke="var(--color-ink)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
      <defs>
        <linearGradient id="dropGrad" x1="9" y1="5" x2="31" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#66ecff" />
          <stop offset="1" stopColor="#ff6fae" />
        </linearGradient>
      </defs>
    </svg>
  );
}
