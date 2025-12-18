

import { MapPin, Users, Wifi, Home, ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import locationMarina from "../assets/location-marina.jpg";
import locationBarsha from "../assets/location-barsha.jpg";
import locationJlt from "../assets/location-jlt.jpg";
import locationMoe from "../assets/location-moe.jpg";
import locationIbn from "../assets/location-ibn.jpg";
import locationAcademic from "../assets/location-academic.jpg";
import heroImage from "../assets/dubai-marina.jpg";

const apartmentLocations = [
  {
    name: "Al Barsha Heights (Tecom)",
    image: locationBarsha,
    description: "Spacious one-bedroom apartment with balcony, fully equipped kitchen, and two washrooms. Ideal for up to 4 students.",
    features: ["Near Metro", "City View", "Modern Design"],
  },
  {
    name: "Dubai Marina",
    image: locationMarina,
    description: "Modern interiors, high-speed WiFi, and premium facilities in one of Dubai's most vibrant areas.",
    features: ["Waterfront", "Premium Location", "Nightlife"],
  },
  {
    name: "JLT (Jumeirah Lake Towers)",
    image: locationJlt,
    description: "Bright, fully furnished apartments near metro stations and universities.",
    features: ["Lake View", "Metro Access", "Parks"],
  },
  {
    name: "Mall of the Emirates",
    image: locationMoe,
    description: "Comfort, security, and convenience combined for student living.",
    features: ["Shopping", "Entertainment", "Central"],
  },
  {
    name: "Ibn Battuta",
    image: locationIbn,
    description: "Fully furnished apartments designed for focused and peaceful student life.",
    features: ["Quiet Area", "Near Mall", "Affordable"],
  },
  {
    name: "Academic City",
    image: locationAcademic,
    description: "Close to major universities with flexible sharing options and modern design.",
    features: ["Near Universities", "Student Hub", "Modern"],
  },
];

export default function Apartments() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dubai Marina Apartments"
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
            <span className="text-secondary font-medium">Apartments</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">6 Prime Locations</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Explore Our <span className="text-secondary">Student Apartments</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Fully furnished, secure one-bedroom apartments across Dubai — designed exclusively for students.
          </p>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">Up to 4 Students</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">All Bills Included</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">Near Metro & Universities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">Choose Your Location</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Each location offers the same premium amenities and comfort, tailored to your campus proximity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {apartmentLocations.map((apt) => (
              <div
                key={apt.name}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={apt.image}
                    alt={apt.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {apt.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-lg">{apt.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {apt.description}
                  </p>
                  <Link
                    to="/request"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition"
                  >
                    Request This Location
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Find the Right Apartment Near Your Campus
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Request a hostel and we'll assign the most convenient option based on your university location.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="px-8 py-3 rounded-xl bg-background text-secondary font-medium hover:bg-background/90 transition"
            >
              Request a Hostel
            </Link>
            <a
              href="tel:+971545594940"
              className="px-8 py-3 rounded-xl border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition"
            >
              Call +971 54 559 4940
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
