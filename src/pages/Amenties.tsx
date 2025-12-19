import { useState } from "react";
import { Home, ChevronRight, CheckCircle, Waves, Dumbbell, Sparkles, Dribbble, Wifi, ShieldCheck, Bus, Tv, UtensilsCrossed, Bath, WashingMachine, ShoppingCart, Building2, Train, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-dubai.jpg";
import { AmenityGalleryPopup } from "../components/AmenityGalleryPopup";

import amenityPool from "../assets/amenity-pool.jpg";
import amenityGym from "../assets/amenity-gym.jpg";
import amenitySauna from "../assets/amenity-sauna.jpg";
import amenityBasketball from "../assets/amenity-basketball.jpg";
import amenityCleaning from "../assets/amenity-cleaning.jpg";
import amenityLaundry from "../assets/amenity-laundry.jpg";
import amenityGrocery from "../assets/amenity-grocery.jpg";
import amenityMall from "../assets/amenity-mall.jpg";
import amenityMetro from "../assets/amenity-metro.jpg";
import amenityPrayer1 from "../assets/amenity-prayer1.jpg";
import amenityPrayer2 from "../assets/amenity-prayer2.jpg";
import amenityPrayer3 from "../assets/amenity-prayer3.jpg";
import amenityPrayer4 from "../assets/amenity-prayer4.jpg";
import interiorKitchen from "../assets/interior-kitchen.jpg";
import interiorSitting from "../assets/interior-sitting.jpg";
import laundry from "../assets/laundry.jpg";
import mall from "../assets/mall.jpg";
import grocery from "../assets/grocery-shop.jpeg";
import pool from "../assets/pool.jpg";
import sauna from "../assets/sauna2.jpg";
import gym from "../assets/gym.jpg";
import basketball from "../assets/basketball.jpg";
import dubaimetro from "../assets/dubaimetro.jpeg"
import apartment1 from "../assets/apartment-1.jpg";
import apartment2 from "../assets/apartment-2.jpg";

const buildingAmenities = [
  {
    name: "Swimming Pool",
    description: "Relax and unwind in our temperature-controlled rooftop pool with stunning city views.",
    image: amenityPool,
    icon: Waves,
    galleryImages: [amenityPool, pool],
  },
  {
    name: "Fully Equipped Gym",
    description: "Stay fit and active with modern fitness equipment available 24/7.",
    image: amenityGym,
    icon: Dumbbell,
    galleryImages: [amenityGym, gym],
  },
  {
    name: "Sauna & Wellness",
    description: "Recharge after a busy day of studies in our relaxing sauna facilities.",
    image: amenitySauna,
    icon: Sparkles,
    galleryImages: [amenitySauna, sauna],
  },
  {
    name: "Basketball Court",
    description: "Recreation and sports on-site for an active student lifestyle.",
    image: amenityBasketball,
    icon: Dribbble,
    galleryImages: [amenityBasketball, basketball],
  },
];

const serviceAmenities = [
  {
    name: "Cleaning Services",
    description: "Professional housekeeping included with regular apartment cleaning.",
    image: amenityCleaning,
    icon: Sparkles,
    galleryImages: [amenityCleaning, apartment1, apartment2],
  },
  {
    name: "Laundry Services",
    description: "On-site laundry facilities with modern washing machines and dryers.",
    image: amenityLaundry,
    icon: WashingMachine,
    galleryImages: [amenityLaundry, laundry],
  },
];

const nearbyAmenities = [
  {
    name: "Nearby Groceries",
    description: "Supermarkets and grocery stores within walking distance.",
    image: amenityGrocery,
    icon: ShoppingCart,
    galleryImages: [amenityGrocery, grocery],
  },
  {
    name: "Nearby Malls",
    description: "Major shopping malls and entertainment centers close by.",
    image: amenityMall,
    icon: Building2,
    galleryImages: [amenityMall, mall],
  },
  {
    name: "Metro Station",
    description: "Direct access to Dubai Metro for convenient transportation.",
    image: amenityMetro,
    icon: Train,
    galleryImages: [amenityMetro, dubaimetro],
  },
  {
    name: "Prayer Areas",
    description: "Nearby mosques, churches, temples, and other places of worship.",
    image: amenityPrayer1,
    icon: Heart,
    galleryImages: [amenityPrayer1, amenityPrayer2, amenityPrayer3, amenityPrayer4, amenityPrayer1, amenityPrayer2],
  },
];

const inApartmentAmenities = [
  { name: "Fully Furnished Living Room", icon: Tv, images: [interiorSitting, apartment1] },
  { name: "Equipped Kitchen", icon: UtensilsCrossed, images: [interiorKitchen, interiorKitchen] },
  { name: "High-Speed WiFi", icon: Wifi, images: [apartment1, apartment2] },
  { name: "Two Washrooms", icon: Bath, images: [apartment2, apartment1] },
  { name: "24/7 Security", icon: ShieldCheck, images: [apartment1, apartment2] },
  { name: "Cleaning Included", icon: Sparkles, images: [amenityCleaning, apartment1] },
];

export default function Amenities() {
  const [selectedAmenity, setSelectedAmenity] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const handleAmenityClick = (title: string, images: string[]) => {
    setSelectedAmenity({ title, images });
  };

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
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary font-medium">Amenities</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <CheckCircle className="w-4 h-4 text-secondary" />
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
                Each apartment comes fully equipped with everything you need for comfortable student living. Click on any item to see photos.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {inApartmentAmenities.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleAmenityClick(item.name, item.images)}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg transition-all text-left"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={apartment1}
                alt="Apartment interior"
                className="rounded-2xl w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
                onClick={() => handleAmenityClick("Living Room", [apartment1, apartment2])}
              />
              <img
                src={apartment2}
                alt="Apartment living room"
                className="rounded-2xl w-full h-48 object-cover mt-8 cursor-pointer hover:opacity-90 transition"
                onClick={() => handleAmenityClick("Kitchen", [apartment2, interiorKitchen])}
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
              Shared facilities designed to enhance your lifestyle. Click to view gallery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buildingAmenities.map((amenity) => (
              <button
                key={amenity.name}
                onClick={() => handleAmenityClick(amenity.name, amenity.galleryImages)}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 text-left"
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
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-primary text-xs font-medium">
                    Click to view
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Included Services
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Professional services included in your monthly rent.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {serviceAmenities.map((amenity) => (
              <button
                key={amenity.name}
                onClick={() => handleAmenityClick(amenity.name, amenity.galleryImages)}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 text-left"
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
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-primary text-xs font-medium">
                    Click to view
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Nearby Conveniences
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Essential services and amenities just steps away from your apartment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {nearbyAmenities.map((amenity) => (
              <button
                key={amenity.name}
                onClick={() => handleAmenityClick(amenity.name, amenity.galleryImages)}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                      <amenity.icon className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {amenity.galleryImages.length} photos
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{amenity.name}</h3>
                  <p className="text-xs text-muted-foreground">{amenity.description}</p>
                </div>
              </button>
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
            <Link
              to="/request"
              className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition flex-shrink-0"
            >
              Request Transport
            </Link>
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
             <Link
              to="/request"
              className="px-8 py-3 rounded-xl bg-secondary text-white font-medium hover:bg-background/90 transition"
            >
              Request a Hostel
            </Link>
            <a
              href="tel:+971545594940"
              className="px-8 py-3 rounded-xl border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition"
            >
              Request a Callback
            </a>
          
          </div>

        </div>
      </section>



      {/* Gallery Popup */}
      <AmenityGalleryPopup
        isOpen={!!selectedAmenity}
        onClose={() => setSelectedAmenity(null)}
        title={selectedAmenity?.title || ""}
        images={selectedAmenity?.images || []}
      />
    </main>
  );
}

