import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Terms of Service | Candy More Floral",
  description:
    "The terms that govern quotes, orders, delivery, and use of the Candy More Floral website.",
};

const SECTIONS = [
  {
    heading: "1. Overview",
    body: "These terms apply to your use of the Candy More Floral website and to any quote or order you place with us. By using the site or requesting a quote you agree to them.",
  },
  {
    heading: "2. Quotes & Pricing",
    body: "Prices are provided on request. A quote is an estimate based on the details you supply and is valid for 14 days. Final pricing may change if your requirements change or if seasonal flower availability affects sourcing costs. An order is confirmed only once we accept it in writing and payment terms are agreed.",
  },
  {
    heading: "3. Orders & Payment",
    body: "Full payment or an agreed deposit is due before dispatch unless otherwise arranged. We reserve the right to decline or cancel an order and refund any payment made.",
  },
  {
    heading: "4. Delivery",
    body: "We offer same-day delivery where available, subject to order cut-off times and courier coverage. Delivery dates are targets, not guarantees. Please ensure the recipient address is accurate; re-delivery due to incorrect details may incur a further charge.",
  },
  {
    heading: "5. Substitutions",
    body: "Fresh flowers are seasonal. If a specified stem is unavailable we will substitute a flower of equal or greater value in a similar style, and will contact you where the change is significant.",
  },
  {
    heading: "6. Cancellations & Refunds",
    body: "Perishable goods (flowers, chocolates, hampers) cannot be returned. You may cancel for a full refund before the order enters preparation. If an item arrives damaged, contact us within 24 hours with photos and we will arrange a replacement or refund.",
  },
  {
    heading: "7. Intellectual Property",
    body: "All content on this site — text, images, designs, and branding — belongs to Candy More Floral and may not be reused without permission.",
  },
  {
    heading: "8. Liability",
    body: "Our liability for any order is limited to the amount paid for that order. We are not liable for indirect or consequential loss.",
  },
  {
    heading: "9. Contact",
    body: "For any question about these terms, reach us through the contact page.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            Last updated {new Date().getFullYear()}
          </p>
          <div className="mt-10 space-y-8">
            {SECTIONS.map(({ heading, body }) => (
              <section key={heading}>
                <h2 className="font-display text-xl font-semibold">{heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
