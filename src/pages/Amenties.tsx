import { Home, ChevronRight, CheckCircle, Waves, Dumbbell, Sparkles, Dribbble, Wifi, ShieldCheck, Bus, Tv, UtensilsCrossed, Bath } from "lucide-react";
import heroImage from "../assets/dubai-marina.jpg";

import amenityPool from "../assets/amenity-pool.jpg";
import amenityGym from "../assets/amenity-gym.jpg";
import amenitySauna from "../assets/amenity-sauna.jpg";
import amenityBasketball from "../assets/amenity-basketball.jpg";
import apartment1 from "../assets/apartment-1.jpg";
import apartment2 from "../assets/apartment-2.jpg";

const buildingAmenities = [
  {
    name: "Swimming Pool",
    description: "Relax and unwind in our temperature-controlled rooftop pool with stunning city views.",
    image: amenityPool,
    icon: Waves,
  },
  {
    name: "Fully Equipped Gym",
    description: "Stay fit and active with modern fitness equipment available 24/7.",
    image: amenityGym,
    icon: Dumbbell,
  },
  {
    name: "Sauna & Wellness",
    description: "Recharge after a busy day of studies in our relaxing sauna facilities.",
    image: amenitySauna,
    icon: Sparkles,
  },
  {
    name: "Basketball Court",
    description: "Recreation and sports on-site for an active student lifestyle.",
    image: amenityBasketball,
    icon: Dribbble,
  },
];

const inApartmentAmenities = [
  { name: "Fully Furnished Living Room", icon: Tv },
  { name: "Equipped Kitchen", icon: UtensilsCrossed },
  { name: "High-Speed WiFi", icon: Wifi },
  { name: "Two Washrooms", icon: Bath },
  { name: "24/7 Security", icon: ShieldCheck },
  { name: "Cleaning Included", icon: Sparkles },
];

export default function Amenities() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={amenityPool}
            alt="Premium Amenities"
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
            <span className="text-secondary font-medium">Amenities</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Premium Lifestyle</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Lifestyle & <span className="text-secondary">Amenities</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to support a healthy, balanced, and enjoyable student lifestyle.
          </p>
        </div>
      </section>

      {/* In-Apartment Amenities */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                In-Apartment Amenities
              </h2>
              <p className="text-muted-foreground mb-8">
                Each apartment comes fully equipped with everything you need for comfortable student living. No extra costs, no surprises.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {inApartmentAmenities.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={apartment1}
                alt="Apartment interior"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src={apartment2}
                alt="Apartment living room"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Building Amenities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Building & Community Amenities
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Shared facilities designed to enhance your lifestyle beyond the apartment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buildingAmenities.map((amenity) => (
              <div
                key={amenity.name}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <amenity.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Bus className="w-10 h-10 text-secondary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Student Transportation</h3>
              <p className="text-muted-foreground max-w-2xl">
                Optional student transportation buses to and from universities available upon request. 
                Never worry about your commute — we've got you covered.
              </p>
            </div>
            <a
              href="/request"
              className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition flex-shrink-0"
            >
              Request Transport
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
            Everything You Need to Live Well
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Our student hostel apartments are designed to support a healthy, balanced, and enjoyable lifestyle.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
             <a
              href="/request"
              className="px-8 py-3 rounded-xl bg-secondary text-white font-medium hover:bg-background/90 transition"
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
