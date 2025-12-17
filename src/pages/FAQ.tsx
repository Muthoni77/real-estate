import { useState } from "react";
import {
  ChevronDown,
  CheckCircle,
  Home,
  ChevronRight,
} from "lucide-react";
import heroImage from "../assets/luxury_high-rise.jpg";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who can rent these hostel apartments?",
    answer:
      "Our hostel apartments are exclusively for students enrolled in universities or colleges in Dubai.",
  },
  {
    question: "What is included in the monthly rent?",
    answer:
      "All bills are included — water, electricity, high-speed WiFi, cleaning, and maintenance. There are no hidden charges.",
  },
  {
    question: "How many students can share one apartment?",
    answer:
      "Each one-bedroom apartment accommodates up to four students. You may choose to live alone or share with up to three roommates. Pricing is adjusted based on the number of occupants.",
  },
  {
    question: "Can I choose a specific apartment location?",
    answer:
      "We assign the best available apartment based on your university location to ensure proximity and convenience.",
  },
  {
    question: "Is transportation available?",
    answer:
      "Yes. Optional student transportation to and from universities is available upon request.",
  },
  {
    question: "Are the apartments secure?",
    answer:
      "Absolutely. All properties are monitored 24/7 with security personnel, CCTV surveillance, and controlled access systems.",
  },
  {
    question: "What amenities are included?",
    answer:
      "Students enjoy access to shared facilities such as a swimming pool, sauna, fully equipped gym, and basketball court, alongside fully furnished apartments.",
  },
  {
    question: "How do I book a hostel apartment?",
    answer:
      "You can submit a request through our Request Form or contact us via phone or WhatsApp. Our team will guide you through availability and next steps.",
  },
  {
    question: "Can I take a virtual tour before moving in?",
    answer:
      "Yes. Virtual tours of sample apartments are available so you can explore the space confidently before arrival.",
  },
  {
    question: "How long are the lease agreements?",
    answer:
      "Lease durations are flexible and can be tailored to the academic year or your preferred length of stay.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)] relative">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] min-h-[520px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Dubai Student Accommodation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          {/* Breadcrumb */}
          <nav
            className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8"
            aria-label="Breadcrumb"
          >
            <a
              href="/"
              className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">FAQs</span>
          </nav>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by 500+ Students
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our premium student hostel
            apartments, pricing, security, and booking process.
          </p>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 60L1440 60L1440 30C1440 30 1140 0 720 0C300 0 0 30 0 30L0 60Z"
              className="fill-[var(--color-bg)]"
            />
          </svg>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-[var(--color-bg-muted)] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Below are answers to the most common questions students and parents
            ask about our hostel apartments, facilities, and booking process.
          </p>
        </div>
      </section>

      {/* ================= FAQ LIST ================= */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl overflow-hidden border transition-colors ${
                    isOpen
                      ? "border-[var(--color-primary)] bg-white"
                      : "border-[var(--color-border)] bg-white"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--color-bg-muted)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                  >
                    <span className="font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[var(--color-primary)] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Still have questions?
        </h2>
        <p className="mt-3 text-white/80">
          Our team is happy to help you find the right student hostel apartment.
        </p>
        <div className="mt-8">
          <a
            href="/request"
            className="inline-block px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-medium hover:opacity-90 transition"
          >
            Request a Hostel
          </a>
        </div>
      </section>
    </main>
  );
}
