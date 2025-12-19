import { useState } from "react";
import { ChevronDown, CheckCircle, Home, ChevronRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/dubai-marina.jpg";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who can rent these hostel apartments?",
    answer: "Our hostel apartments are exclusively for students enrolled in universities or colleges in Dubai.",
  },
  {
    question: "What is included in the monthly rent?",
    answer: "All bills are included — water, electricity, high-speed WiFi, cleaning, and maintenance. There are no hidden charges.",
  },
  {
    question: "How many students can share one apartment?",
    answer: "Each one-bedroom apartment accommodates up to four students. You may choose to live alone or share with up to three roommates. Pricing is adjusted based on the number of occupants.",
  },
  {
    question: "Can I choose a specific apartment location?",
    answer: "We assign the best available apartment based on your university location to ensure proximity and convenience.",
  },
  {
    question: "Is transportation available?",
    answer: "Yes. Optional student transportation to and from universities is available upon request.",
  },
  {
    question: "Are the apartments secure?",
    answer: "Absolutely. All properties are monitored 24/7 with security personnel, CCTV surveillance, and controlled access systems.",
  },
  {
    question: "What amenities are included?",
    answer: "Students enjoy access to shared facilities such as a swimming pool, sauna, fully equipped gym, and basketball court, alongside fully furnished apartments.",
  },
  {
    question: "How do I book a hostel apartment?",
    answer: "You can submit a request through our Request Form or contact us via phone or WhatsApp. Our team will guide you through availability and next steps.",
  },
  {
    question: "Can I take a virtual tour before moving in?",
    answer: "Yes. Virtual tours of sample apartments are available so you can explore the space confidently before arrival.",
  },
  {
    question: "How long are the lease agreements?",
    answer: "Lease durations are flexible and can be tailored to the academic year or your preferred length of stay.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Dubai Student Accommodation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary font-medium">FAQs</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Trusted by 500+ Students</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Frequently Asked<span className="text-secondary"> Questions</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about our premium student hostel apartments, pricing, security, and booking process.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-muted text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Below are answers to the most common questions students and parents ask about our hostel apartments, facilities, and booking process.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isOpen
                      ? "border-secondary bg-card shadow-lg"
                      : "border-border bg-card hover:border-secondary/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left transition"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? "bg-secondary text-secondary-foreground" : "bg-muted"
                    }`}>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-10 h-10 text-secondary" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground">
                Our team is happy to help you find the right student hostel apartment. Reach out via WhatsApp or give us a call.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/971545594940"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition text-center"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+971545594940"
                className="px-6 py-3 rounded-xl border border-border text-foreground hover:bg-muted transition text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0  bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/90" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to Find Your Student Home?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Submit a request and our team will match you with the perfect apartment.
          </p>
          
         <div className="mt-8">
            <Link
              to="/request"
              className="inline-block px-8 py-3 rounded-xl bg-secondary text-cream font-medium hover:bg-secondary/90 transition"
            >
              Request a Hostel
            </Link>
          </div>

        
        </div>
      </section>
     
    </main>
  );
}
