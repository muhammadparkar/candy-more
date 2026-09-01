import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Candy More Floral",
  description:
    "How Candy More Floral collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    body: "When you contact us for a quote, place an order, or subscribe to updates, we collect the details you provide: your name, email address, phone number, delivery address, and any message or gift note. We also collect basic technical data (browser type, pages visited) through standard analytics to improve the site.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "We use your information to respond to quote requests, prepare and deliver your order, arrange same-day courier logistics, send order updates, and — only if you opt in — share seasonal collections and offers. We do not sell your personal information.",
  },
  {
    heading: "3. Sharing With Third Parties",
    body: "We share the minimum necessary information with delivery couriers and payment processors to fulfil your order. These partners are bound to use your data only for that purpose. We may disclose information if required by law.",
  },
  {
    heading: "4. Cookies",
    body: "The site uses essential cookies to function and optional analytics cookies to understand usage. You can disable cookies in your browser settings; some features may not work as expected.",
  },
  {
    heading: "5. Data Retention & Security",
    body: "We keep order records for as long as needed for accounting and customer-service purposes, then delete or anonymise them. We use reasonable technical and organisational measures to protect your data.",
  },
  {
    heading: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information, and you may unsubscribe from marketing at any time. Contact us using the details below.",
  },
  {
    heading: "7. Contact",
    body: "Questions about this policy? Reach us through the contact page and we will respond within two business days.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
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
