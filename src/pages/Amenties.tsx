import { useState, memo } from "react";
import { Home, ChevronRight, CheckCircle, Waves, Dumbbell, Sparkles, Dribbble, Wifi, ShieldCheck, Bus, Tv, UtensilsCrossed, Bath, WashingMachine, ShoppingCart, Building2, Train, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useModal } from "../components/context/ModalContext";
import { AmenityGalleryPopup } from "../components/AmenityGalleryPopup";
import { amenityGalleries } from "../data/amenityimages";
import heroImage from "../assets/hero-dubai.webp";

// Optimized image component with lazy loading
const OptimizedImage = memo(({
  src,
  alt,
  className,
  onClick,
  loading = "lazy",
  fetchPriority
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low";
}) => (
  <img
    src={src}
    alt={alt}
    loading={loading}
    decoding="async"
    fetchPriority={fetchPriority}
    className={className}
    onClick={onClick}
  />
));


OptimizedImage.displayName = "OptimizedImage";

const buildingAmenities = [
  {
    name: "Swimming Pool",
    description: "Relax and unwind in our temperature-controlled rooftop pool with stunning city views.",
    image: amenityGalleries.pool[0],
    icon: Waves,
    galleryImages: amenityGalleries.pool,
  },
  {
    name: "Fully Equipped Gym",
    description: "Stay fit and active with modern fitness equipment available 24/7.",
    image: amenityGalleries.gym[0],
    icon: Dumbbell,
    galleryImages: amenityGalleries.gym,
  },
  {
    name: "Sauna & Wellness",
    description: "Recharge after a busy day of studies in our relaxing sauna facilities.",
    image: amenityGalleries.sauna[0],
    icon: Sparkles,
    galleryImages: amenityGalleries.sauna,
  },
  {
    name: "Basketball Court",
    description: "Recreation and sports on-site for an active student lifestyle.",
    image: amenityGalleries.basketball[0],
    icon: Dribbble,
    galleryImages: amenityGalleries.basketball,
  },
];

const serviceAmenities = [
  {
    name: "Cleaning Services",
    description: "Professional housekeeping included with regular apartment cleaning.",
    image: amenityGalleries.cleaning[0],
    icon: Sparkles,
    galleryImages: amenityGalleries.cleaning,
  },
  {
    name: "Laundry Services",
    description: "On-site laundry facilities with modern washing machines and dryers.",
    image: amenityGalleries.laundry[0],
    icon: WashingMachine,
    galleryImages: amenityGalleries.laundry,
  },
];

const nearbyAmenities = [
  {
    name: "Nearby Groceries",
    description: "Supermarkets and grocery stores within walking distance.",
    image: amenityGalleries.grocery[0],
    icon: ShoppingCart,
    galleryImages: amenityGalleries.grocery,
  },
  {
    name: "Nearby Malls",
    description: "Major shopping malls and entertainment centers close by.",
    image: amenityGalleries.mall[0],
    icon: Building2,
    galleryImages: amenityGalleries.mall,
  },
  {
    name: "Metro Station",
    description: "Direct access to Dubai Metro for convenient transportation.",
    image: amenityGalleries.metro[0],
    icon: Train,
    galleryImages: amenityGalleries.metro,
  },
  {
    name: "Prayer Areas",
    description: "Nearby mosques, churches, temples, and other places of worship.",
    image: amenityGalleries.prayer[0],
    icon: Heart,
    galleryImages: amenityGalleries.prayer,
  },
];

const inApartmentAmenities = [
  { name: "Fully Furnished Living Room", icon: Tv, images: amenityGalleries.living },
  { name: "Equipped Kitchen", icon: UtensilsCrossed, images: amenityGalleries.kitchen },
  { name: "High-Speed WiFi", icon: Wifi, images: amenityGalleries.wifi },
  { name: "Two Washrooms", icon: Bath, images: amenityGalleries.washroom },
  { name: "24/7 Security", icon: ShieldCheck, images: amenityGalleries.security },
  { name: "Cleaning Included", icon: Sparkles, images: amenityGalleries.cleaning },
];

export default function Amenities() {
     // callback
    const { openCallback } = useModal();
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
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[350px] sm:min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
        
          <OptimizedImage
            src={amenityGalleries.pool[0]}
            alt="Premium Amenities"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-6 sm:mb-8">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary font-medium">Amenities</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-4 sm:mb-6">
            <CheckCircle className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">Premium Lifestyle</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Lifestyle &<span className="text-secondary"> Amenities</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to support a healthy, balanced, and enjoyable student lifestyle.
          </p>
        </div>
      </section>

      {/* In-Apartment Amenities */}
      <section className="py-12 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                In-Apartment Amenities
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Each apartment comes fully equipped with everything you need for comfortable student living. Click on any item to see photos.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {inApartmentAmenities.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleAmenityClick(item.name, item.images)}
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg transition-all text-left"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium leading-tight">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <OptimizedImage
                src={amenityGalleries.cleaning[0]}
                alt="Apartment interior"
                className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-48 object-cover cursor-pointer hover:opacity-90 transition"
                loading="eager"
                fetchPriority="high"
                onClick={() => handleAmenityClick("Living Room", amenityGalleries.cleaning)}
              />
              <OptimizedImage
                src={amenityGalleries.laundry[0]}
                alt="Apartment living room"
                className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-48 object-cover mt-4 sm:mt-8 cursor-pointer hover:opacity-90 transition"
                onClick={() => handleAmenityClick("Kitchen", amenityGalleries.laundry)}
             
              />
            </div>
          </div>
        </div>
      </section>

      {/* Building Amenities */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Building & Community Amenities
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Shared facilities designed to enhance your lifestyle. Click to view gallery.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
            {buildingAmenities.map((amenity) => (
              <button
                key={amenity.name}
                onClick={() => handleAmenityClick(amenity.name, amenity.galleryImages)}
                className="group rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <OptimizedImage
                    src={amenity.image}
                    alt={amenity.name}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <amenity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-primary text-xs font-medium">
                    Click to view
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{amenity.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Included Services
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Professional services included in your monthly rent.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
            {serviceAmenities.map((amenity) => (
              <button
                key={amenity.name}
                onClick={() => handleAmenityClick(amenity.name, amenity.galleryImages)}
                className="group rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <OptimizedImage
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                      <amenity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-primary text-xs font-medium">
                    Click to view
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{amenity.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Nearby Conveniences
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Essential services and amenities just steps away from your apartment.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {nearbyAmenities.map((amenity) => (
              <button
                key={amenity.name}
                onClick={() => handleAmenityClick(amenity.name, amenity.galleryImages)}
                className="group rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="aspect-square overflow-hidden relative">
                  <OptimizedImage
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <amenity.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                    </div>
                  </div>
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-0.5 sm:py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-medium">
                    {amenity.galleryImages.length} photos
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{amenity.name}</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{amenity.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-12 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl sm:rounded-2xl bg-card border border-border p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Bus className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Student Transportation</h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
                Optional student transportation buses to and from universities available upon request. 
                Never worry about your commute — we've got you covered.
              </p>
            </div>
            <Link
              to="/request"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-secondary text-secondary-foreground text-sm sm:text-base font-medium hover:bg-secondary/90 transition flex-shrink-0 w-full md:w-auto text-center"
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
            <button
             onClick={openCallback}
              className="px-8 py-3 rounded-xl bg-background text-secondary font-medium hover:bg-primary/90 transition"
            >
              Request a Call Back
            </button>
          
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

