"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { X, PaperPlaneTilt, EnvelopeSimple, ArrowSquareOut } from "@phosphor-icons/react";

type QuoteContext = {
  open: (productName?: string, initialMessage?: string) => void;
};

const Ctx = createContext<QuoteContext | null>(null);

export function useQuote() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useQuote must be used inside <QuoteProvider>");
  return ctx;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<string | null>(null);
  const [initialMsg, setInitialMsg] = useState<string>("");
  const [sent, setSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const open = (productName?: string, initialMessage?: string) => {
    setProduct(productName ?? null);
    setInitialMsg(initialMessage ?? "");
    setSent(false);
    setError(null);
    setLastMailtoUrl("");
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setError(null);
    setIsSubmitting(true);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email) {
      setError("Please provide your name and email address.");
      setIsSubmitting(false);
      return;
    }

    // Format pre-filled email for the user's default email client
    const recipient = "hello@candymoreflowers.com";
    const subject = `Quote Request: ${product || "Custom Order"} - ${name}`;

    let bodyText = `Hi Candy & More Team,\n\nI would like to request a quote with the following details:\n\n`;
    bodyText += `• Product / Request: ${product || "Custom Floral & Confection Order"}\n`;
    bodyText += `• Full Name: ${name}\n`;
    bodyText += `• Email: ${email}\n`;
    if (phone) {
      bodyText += `• Phone: ${phone}\n`;
    }
    bodyText += `\nDetails & Requirements:\n${message}\n\n`;
    bodyText += `Best regards,\n${name}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    setLastMailtoUrl(mailtoUrl);

    // Also attempt background sync if backend API is configured
    try {
      fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, product }),
      }).catch(() => {
        // Silently ignore background API failures since mailto client handles the dispatch
      });
    } catch {
      // Ignore
    }

    // Trigger user's default email application
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setSent(true);
  };

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={close}
        >
          <div
            className="relative w-full max-w-md overflow-y-auto rounded-[2rem] bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink hover:bg-pink hover:text-white transition-colors"
              aria-label="Close"
            >
              <X weight="bold" className="h-5 w-5" />
            </button>

            {sent ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint/40 text-ink mb-4">
                  <EnvelopeSimple weight="fill" className="h-8 w-8 text-pink" />
                </div>
                <h2 className="font-display text-2xl font-bold text-ink">
                  Opening Your Email Client
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Your default email application (Gmail, Apple Mail, Outlook) has been opened with your quote request pre-filled. Simply review and click <strong className="text-ink">Send</strong>!
                </p>

                {lastMailtoUrl && (
                  <div className="mt-5 space-y-3">
                    <a
                      href={lastMailtoUrl}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink py-3 text-sm font-semibold text-white shadow-md hover:scale-[1.02] active:scale-95 transition-transform"
                    >
                      <span>Re-open Email App</span>
                      <ArrowSquareOut weight="bold" className="h-4 w-4" />
                    </a>
                  </div>
                )}

                <button
                  type="button"
                  onClick={close}
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-2 text-xs font-semibold text-ink hover:border-pink hover:text-pink transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-pink-light/30 px-3 py-1 text-xs font-semibold text-ink mb-2">
                  <EnvelopeSimple weight="bold" className="h-3.5 w-3.5 text-pink" />
                  Pre-filled Email Dispatch
                </div>
                <h2 className="font-display text-2xl font-bold text-ink">
                  Request a Quote
                </h2>
                {product && (
                  <p className="mt-1 text-sm text-ink-soft">
                    For <span className="font-semibold text-ink">{product}</span>
                  </p>
                )}
                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label htmlFor="quote-name" className="mb-1 block text-xs font-semibold text-ink-soft">
                      Your name *
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      className="w-full rounded-xl border border-ink/10 bg-cream/60 px-3.5 py-2.5 text-sm text-ink focus:bg-white focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="mb-1 block text-xs font-semibold text-ink-soft">
                      Email address *
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      required
                      placeholder="maya@example.com"
                      className="w-full rounded-xl border border-ink/10 bg-cream/60 px-3.5 py-2.5 text-sm text-ink focus:bg-white focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="mb-1 block text-xs font-semibold text-ink-soft">
                      Phone <span className="font-normal">(optional)</span>
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      className="w-full rounded-xl border border-ink/10 bg-cream/60 px-3.5 py-2.5 text-sm text-ink focus:bg-white focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-message" className="mb-1 block text-xs font-semibold text-ink-soft">
                      Quote details & requirements
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={3}
                      defaultValue={initialMsg}
                      placeholder="Occasion, estimated quantity, preferred delivery date, special notes..."
                      className="w-full rounded-xl border border-ink/10 bg-cream/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:bg-white focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20 transition-all"
                    />
                  </div>
                  {error && <p role="alert" className="text-xs font-medium text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer disabled:opacity-70"
                  >
                    <PaperPlaneTilt weight="bold" className="h-4 w-4" />
                    <span>Get a Quote via Email</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}

export function QuoteButton({
  productName,
  initialMessage,
  className,
  children,
}: {
  productName?: string;
  initialMessage?: string;
  className?: string;
  children: ReactNode;
}) {
  const { open } = useQuote();
  return (
    <button type="button" onClick={() => open(productName, initialMessage)} className={className}>
      {children}
    </button>
  );
}
