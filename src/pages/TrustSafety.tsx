import { ShieldCheck, Camera, Sparkles, LifeBuoy, Wifi, HeartHandshake } from "lucide-react";

const safetyItems = [
  {
    icon: ShieldCheck,
    title: "24/7 Security Monitoring",
    description:
      "Round-the-clock security personnel and monitored premises to ensure a safe living environment at all times.",
  },
  {
    icon: Camera,
    title: "CCTV & Controlled Access",
    description:
      "All buildings are equipped with CCTV cameras and controlled entry points for residents only.",
  },
  {
    icon: Sparkles,
    title: "Cleanliness & Hygiene",
    description:
      "Regular housekeeping and maintenance services keep apartments and shared spaces clean and comfortable.",
  },
  {
    icon: LifeBuoy,
    title: "Emergency Support",
    description:
      "Our responsive support team is available to assist immediately in case of emergencies or maintenance issues.",
  },
  {
    icon: Wifi,
    title: "Secure WiFi & Connectivity",
    description:
      "High-speed internet with secure access ensures reliable connectivity for studying and daily use.",
  },
  {
    icon: HeartHandshake,
    title: "Parental Assurance",
    description:
      "Transparent communication and reliable standards give parents peace of mind about their child’s living environment.",
  },
];

export default function TrustSafety() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Header */}
      <section className="py-24 bg-[var(--color-bg-muted)] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Trust & Safety
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Your safety, comfort, and peace of mind — for both students and parents —
            are our highest priority.
          </p>
        </div>
      </section>

      {/* Safety Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safetyItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] p-6 bg-white"
              >
                <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                <h3 className="mt-4 font-medium text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-primary)] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          A Safe Place to Focus, Live, and Grow
        </h2>
        <p className="mt-3 text-white/80 max-w-xl mx-auto">
          Our student hostel apartments are designed to offer security, comfort,
          and trust — every single day.
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
