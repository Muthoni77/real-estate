import { Home, ChevronRight, CheckCircle, Shield, Camera, Lock, Sparkles, HeadphonesIcon, Wifi, FileCheck, Users } from "lucide-react";
import securityImage from "../assets/security-monitoring.jpg";
import heroImage from "../assets/dubai-marina.jpg";

const safetyFeatures = [
  {
    icon: Camera,
    title: "24/7 Security Monitoring",
    description: "All properties are equipped with round-the-clock security personnel and CCTV surveillance to ensure a safe environment at all times.",
  },
  {
    icon: Lock,
    title: "Controlled Access",
    description: "Only registered residents and authorized personnel can enter the premises, providing peace of mind and privacy for students.",
  },
  {
    icon: Sparkles,
    title: "Cleanliness & Hygiene",
    description: "Our apartments and shared facilities are maintained to the highest standards with regular housekeeping and maintenance services included.",
  },
  {
    icon: HeadphonesIcon,
    title: "Emergency Support",
    description: "In case of any maintenance or safety issues, our responsive support team is available to assist immediately.",
  },
  {
    icon: Wifi,
    title: "Secure WiFi & Connectivity",
    description: "High-speed internet is provided with secure access, ensuring both safety and reliability for online studies and entertainment.",
  },
  {
    icon: FileCheck,
    title: "Insurance & Compliance",
    description: "Our properties comply with local safety regulations, and all electrical, fire, and safety standards are strictly adhered to.",
  },
];

export default function TrustSafety() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Trust and Safety"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8">
            <a href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary font-medium">Trust & Safety</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Your Safety, Our Priority</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Trust & <span className="text-secondary">Safety</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            The safety, security, and well-being of our residents are our top priority. We ensure a worry-free living environment for both students and parents.
          </p>
        </div>
      </section>

      {/* Main Security Image */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <CheckCircle className="w-4 h-4" />
                24/7 Protection
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Round-the-Clock Security
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our dedicated security team monitors all properties around the clock. With advanced CCTV systems, controlled access points, and regular patrols, we ensure that every student feels safe and protected.
              </p>
              <ul className="space-y-3">
                {["Professional security personnel", "CCTV monitoring throughout", "Controlled entry and exit points", "Emergency response protocols"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={securityImage}
                alt="Security monitoring center"
                className="rounded-2xl w-full shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary  border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">100% Secure</p>
                    <p className="text-xs text-primary-foreground">All properties monitored</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Comprehensive Safety Measures
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every aspect of our student accommodations is designed with your safety and comfort in mind.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parental Assurance */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-10 h-10 text-secondary" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-semibold mb-2">Parental Assurance</h3>
              <p className="text-muted-foreground">
                We provide transparency and regular updates for parents concerned about their child's living environment. Our team is always available to address any concerns and create a trustworthy, reliable experience for the whole family.
              </p>
            </div>
            <a
              href="/request"
              className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition flex-shrink-0"
            >
              Contact Us
            </a>
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
            Your Safety is Our Commitment
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Experience worry-free student living in Dubai with our secure, monitored accommodations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request"
              className="px-8 py-3 rounded-xl bg-secondary text-cream font-medium hover:bg-secondary/90 transition"
            >
              Request a Hostel
            </a>
            <a
              href="tel:+971545594940"
              className="px-8 py-3 rounded-xl border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition"
            >
              Request a Callback
            </a>
          </div>

        
        </div>
      </section>
      
    </main>
  );
}
