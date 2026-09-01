"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  CheckCircle,
  CaretDown,
  Sparkle,
  Truck,
  PaperPlaneRight,
  ArrowRight,
  ArrowSquareOut,
  ShieldCheck,
} from "@phosphor-icons/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LollipopIcon, BonbonIcon } from "../components/CandyDecor";
import { CustomDatePicker } from "../components/CustomDatePicker";

const INQUIRY_TYPES = [
  { id: "general", label: "General & Order Support" },
  { id: "custom-box", label: "Custom Gift Box Curation" },
  { id: "events", label: "Wedding & Private Event Florals" },
  { id: "corporate", label: "Corporate & Bulk Gifting (20+ units)" },
  { id: "press", label: "Press & Collaborations" },
];

const FAQS = [
  {
    q: "How does same-day delivery work?",
    a: "Orders placed before 2:00 PM local time Monday through Saturday are eligible for same-day hand delivery within our 9 metropolitan service areas. Our temperature-controlled couriers hand-deliver directly to your recipient's doorstep.",
  },
  {
    q: "How do you protect chocolates from heat during transit?",
    a: "Every confection order is packed in custom insulated thermal pouches with reusable non-toxic frozen cold packs and delivered via our climate-controlled courier fleet. We offer a 100% Melt-Free Guarantee.",
  },
  {
    q: "Can I include a personalized handwritten message card?",
    a: "Yes! Every box includes a complimentary luxury textured card. We hand-write your custom message in calligraphic script and seal the envelope with our signature hot wax stamp.",
  },
  {
    q: "What is your freshness guarantee for cut floral arrangements?",
    a: "We harvest stems directly from partner growers the morning of dispatch. We guarantee your flowers will stay vibrant and fresh for at least 7 days with proper water replenishment, or we will replace them complimentary.",
  },
  {
    q: "Do you cater to dietary preferences like vegan or gluten-free?",
    a: "Yes! A wide selection of our single-origin dark chocolate slabs and truffles are naturally vegan, dairy-free, and gluten-free. You can filter for these specific dietary tags on our Products page.",
  },
  {
    q: "How does corporate and bulk milestone gifting work?",
    a: "For orders of 20 or more units, our dedicated Gifting Concierge will coordinate custom color ribbons, company logo embossing on our keepsake boxes, and individual multi-address dispatch on scheduled dates.",
  },
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [lastMailtoUrl, setLastMailtoUrl] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please provide a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share some details about your inquiry";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const categoryObj = INQUIRY_TYPES.find((t) => t.id === inquiryType);
    const categoryLabel = categoryObj ? categoryObj.label : "General Inquiry";
    const recipient = "hello@candymoreflowers.com";

    const subject = `Inquiry [${categoryLabel}]: ${formData.name.trim()}`;

    let bodyText = `Hi Candy & More Team,\n\nI am submitting an inquiry with the following details:\n\n`;
    bodyText += `• Inquiry Category: ${categoryLabel}\n`;
    bodyText += `• Full Name: ${formData.name.trim()}\n`;
    bodyText += `• Email: ${formData.email.trim()}\n`;
    if (formData.phone.trim()) {
      bodyText += `• Phone: ${formData.phone.trim()}\n`;
    }
    if (formData.date) {
      bodyText += `• Target Date / Event Date: ${formData.date}\n`;
    }
    if (formData.quantity.trim()) {
      bodyText += `• Estimated Units / Budget: ${formData.quantity.trim()}\n`;
    }
    bodyText += `\nMessage & Special Requests:\n${formData.message.trim()}\n\n`;
    bodyText += `Best regards,\n${formData.name.trim()}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    setLastMailtoUrl(mailtoUrl);

    // Trigger default email app
    window.location.href = mailtoUrl;

    setReferenceId(`CMF-${Math.floor(10000 + Math.random() * 90000)}`);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setReferenceId("");
    setLastMailtoUrl("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      quantity: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />

      {/* Header Banner */}
      <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-mint/30 via-pink-light/40 to-yellow-light/50 border border-ink/5 p-8 sm:p-12 lg:p-16">
            <LollipopIcon
              className="animate-candy-float absolute right-10 top-6 h-16 w-16 opacity-70 hidden sm:block"
              style={{ "--float-rot": "14deg" } as React.CSSProperties}
            />
            <BonbonIcon
              className="animate-candy-float absolute right-32 bottom-6 h-12 w-14 opacity-60 hidden md:block"
              style={{ animationDelay: "1.2s", "--float-rot": "-8deg" } as React.CSSProperties}
            />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-ink-soft shadow-sm">
                <Sparkle weight="fill" className="h-3.5 w-3.5 text-pink" />
                Concierge & Atelier Inquiries
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Let&apos;s make something sweet together.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Have a question about an active delivery, planning a bespoke event floral bar, or ordering 100+ corporate gift boxes? Our team is here to assist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Quick Channels */}
      <main className="flex-1 px-4 pb-20 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] items-start">
            {/* Contact / Inquiry Form Card */}
            <div className="rounded-[2.5rem] border border-ink/5 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-25px_rgba(28,58,69,0.2)]">
              {isSubmitted ? (
                <div className="text-center py-10 animate-in zoom-in-95 duration-200">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mint/40 text-ink mb-5">
                    <CheckCircle weight="fill" className="h-12 w-12 text-pink" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-ink">
                    Opening Your Email Client
                  </h3>
                  <p className="mt-3 max-w-md mx-auto text-sm text-ink-soft leading-relaxed">
                    Thank you, <span className="font-semibold text-ink">{formData.name}</span>. Your default email app (Gmail, Apple Mail, Outlook) has been opened with your inquiry details pre-filled. Simply review and click <strong className="text-ink">Send</strong>!
                  </p>
                  <div className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-ink-soft border border-ink/10">
                    Reference ID: {referenceId}
                  </div>

                  {lastMailtoUrl && (
                    <div className="mt-6 max-w-xs mx-auto">
                      <a
                        href={lastMailtoUrl}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink py-3 text-sm font-semibold text-white shadow-md hover:scale-[1.02] active:scale-95 transition-transform"
                      >
                        <span>Re-open in Email App</span>
                        <ArrowSquareOut weight="bold" className="h-4 w-4" />
                      </a>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-full border border-ink/15 px-6 py-2.5 text-xs font-semibold text-ink hover:border-pink hover:text-pink transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-6 py-2.5 text-xs font-semibold text-ink hover:border-pink hover:text-pink shadow-sm transition-all"
                    >
                      Browse Products
                      <ArrowRight weight="bold" className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink">
                      Send a Message to our Concierge
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-ink-soft">
                      Fill out the details below and an atelier stylist will get in touch promptly.
                    </p>
                  </div>

                  {/* Inquiry Type Selector Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-2">
                      Inquiry Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {INQUIRY_TYPES.map((type) => {
                        const active = inquiryType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setInquiryType(type.id)}
                            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer ${
                              active
                                ? "bg-ink text-cream shadow-sm scale-[1.02]"
                                : "bg-cream border border-ink/10 text-ink hover:border-pink hover:text-pink"
                            }`}
                          >
                            {type.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name, Email, Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Elena Rostova"
                        className={`w-full rounded-2xl border bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 focus:bg-white focus:outline-none transition-all ${
                          errors.name
                            ? "border-red-400 ring-2 ring-red-100"
                            : "border-ink/10 focus:border-pink focus:ring-2 focus:ring-pink/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="elena@example.com"
                        className={`w-full rounded-2xl border bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 focus:bg-white focus:outline-none transition-all ${
                          errors.email
                            ? "border-red-400 ring-2 ring-red-100"
                            : "border-ink/10 focus:border-pink focus:ring-2 focus:ring-pink/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+974 7076 8555"
                        className="w-full rounded-2xl border border-ink/10 bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 focus:bg-white focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                        Target Date / Event Date
                      </label>
                      <CustomDatePicker
                        value={formData.date}
                        onChange={(val) => setFormData((prev) => ({ ...prev, date: val }))}
                        placeholder="Select target date"
                      />
                    </div>
                  </div>

                  {/* Quantity / Budget for bulk/events */}
                  {(inquiryType === "corporate" || inquiryType === "events" || inquiryType === "custom-box") && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                        Estimated Units / Guest Count / Budget
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g. 75 gift hampers, $5,000 budget"
                        className="w-full rounded-2xl border border-ink/10 bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 focus:bg-white focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20 transition-all"
                      />
                    </div>
                  )}

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                      Message & Special Requests *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about the colors, floral stems, dietary restrictions, or delivery arrangements you have in mind..."
                      className={`w-full rounded-2xl border bg-cream/50 p-4 text-sm text-ink placeholder:text-ink-soft/40 focus:bg-white focus:outline-none transition-all ${
                        errors.message
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-ink/10 focus:border-pink focus:ring-2 focus:ring-pink/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-pink py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-95 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <PaperPlaneRight weight="bold" className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Cards & Studio Info */}
            <div className="space-y-6">
              {/* Direct Channels */}
              <div className="rounded-[2.5rem] bg-ink p-8 text-cream">
                <h3 className="font-display text-2xl font-bold text-cream">
                  Direct Atelier Channels
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-cream/70">
                  Prefer a real-time conversation? Contact our studio staff directly during business hours.
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href="tel:+97470768555"
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink text-white">
                      <Phone weight="bold" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-cream/60 font-semibold">Call us</p>
                      <p className="text-sm font-bold text-cream">+974 7076 8555</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/97431550554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-ink">
                      <Phone weight="bold" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-cream/60 font-semibold">WhatsApp</p>
                      <p className="text-sm font-bold text-cream">+974 3155 0554</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@candymoreflowers.com"
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-ink">
                      <EnvelopeSimple weight="bold" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-cream/60 font-semibold">Email</p>
                      <p className="text-sm font-bold text-cream">hello@candymoreflowers.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Delivery Cutoffs & Guarantee */}
              <div id="delivery" className="rounded-3xl border border-ink/5 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink">
                  <Truck weight="duotone" className="h-4 w-4" />
                  Same-Day Cutoff Timings
                </div>
                <div className="mt-3 space-y-2 text-xs text-ink-soft">
                  <div className="flex items-center justify-between border-b border-ink/5 pb-2">
                    <span className="font-semibold text-ink">Mon – Fri:</span>
                    <span>Order by 2:00 PM local time</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-ink/5 pb-2">
                    <span className="font-semibold text-ink">Saturday:</span>
                    <span>Order by 12:30 PM local time</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink">Sunday:</span>
                    <span>Pre-scheduled & event orders</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-2xl bg-pink-light/30 p-3 text-xs text-ink">
                  <ShieldCheck weight="bold" className="h-5 w-5 text-pink shrink-0" />
                  <span>100% Melt-Free & 7-Day Bloom Freshness Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Studio Locations */}
          <section id="locations" className="mt-20">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                Our Spaces
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
                Visit our Flagship Ateliers
              </h2>
              <p className="mt-3 text-sm text-ink-soft">
                Stop by to build your custom chocolate box at our tasting counter or select fresh morning stems in person.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* NYC Studio */}
              <div className="group overflow-hidden rounded-[2.5rem] border border-ink/5 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1709294728779-6be509d45255?auto=format&fit=crop&w=700&h=400&q=80"
                    alt="Soho Atelier New York"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-cream">
                    Flagship Atelier
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Soho Botanical & Chocolate Atelier
                </h3>
                <div className="mt-4 space-y-2 text-sm text-ink-soft">
                  <p className="flex items-start gap-2.5">
                    <MapPin weight="bold" className="h-4 w-4 text-pink shrink-0 mt-0.5" />
                    <span>482 Broome Street, New York, NY 10013</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Clock weight="bold" className="h-4 w-4 text-pink shrink-0 mt-0.5" />
                    <span>Mon – Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM</span>
                  </p>
                </div>
              </div>

              {/* LA Studio */}
              <div className="group overflow-hidden rounded-[2.5rem] border border-ink/5 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&h=400&q=80"
                    alt="Arts District Studio Los Angeles"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-cream">
                    Floral Kitchen & Studio
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Arts District Botanical Workshop
                </h3>
                <div className="mt-4 space-y-2 text-sm text-ink-soft">
                  <p className="flex items-start gap-2.5">
                    <MapPin weight="bold" className="h-4 w-4 text-pink shrink-0 mt-0.5" />
                    <span>820 E 3rd Street, Los Angeles, CA 90013</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Clock weight="bold" className="h-4 w-4 text-pink shrink-0 mt-0.5" />
                    <span>Mon – Sat: 8:30 AM – 7:30 PM | Sun: 9:00 AM – 5:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive FAQ Accordion */}
          <section id="faq" className="mt-20">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                Common Questions
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-10 max-w-3xl mx-auto space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-3xl border border-ink/5 bg-white transition-all shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left font-display text-base font-semibold text-ink transition-colors hover:text-pink cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <CaretDown
                        weight="bold"
                        className={`h-4 w-4 text-ink-soft transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-pink" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-ink-soft border-t border-ink/5 mt-1 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
