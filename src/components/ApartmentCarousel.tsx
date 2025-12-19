import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react";

// Import interior images
import interiorKitchen from "../assets/interior-kitchen.jpg";
import interiorBalcony from "../assets/interior-balcony.jpg";
import interiorWashroom from "../assets/interior-washroom.jpg";
import interiorSitting from "../assets/interior-sitting.jpg";
import interiorCorridor from "../assets/interior-corridor.jpg";
import interior4beds from "../assets/interior-4beds.jpg";

interface ApartmentCarouselProps {
  location: {
    name: string;
    image: string;
    distance?: string;
    description?: string;
    features?: string[];
    area?: string;
  };
  variant?: "landing" | "apartments";
}

const carouselImages = [
  { src: "", label: "Exterior", isDefault: true },
  { src: interiorSitting, label: "Living Room" },
  { src: interiorKitchen, label: "Kitchen" },
  { src: interiorBalcony, label: "Balcony" },
  { src: interiorWashroom, label: "Washroom" },
  { src: interiorCorridor, label: "Corridor" },
  { src: interior4beds, label: "Bedroom" },
];

export function ApartmentCarousel({ location, variant = "landing" }: ApartmentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace default exterior with location image
  const images = carouselImages.map((img) =>
    img.isDefault ? { ...img, src: location.image } : img
  );

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift cursor-pointer ${
        variant === "apartments" ? "border border-border" : ""
      }`}
    >
      {/* Image Container */}
      <div className={`overflow-hidden relative ${variant === "apartments" ? "aspect-[4/3]" : "h-48"}`}>
        <img
          src={images[currentIndex].src}
          alt={`${location.name} - ${images[currentIndex].label}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10"
        >
          <ChevronLeft className="w-5 h-5 text-deep-blue" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10"
        >
          <ChevronRight className="w-5 h-5 text-deep-blue" />
        </button>

        {/* Image Label */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
          {images[currentIndex].label}
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Features badges (apartments variant) */}
        {variant === "apartments" && location.features && currentIndex === 0 && (
          <div className="absolute bottom-10 left-4 right-4">
            <div className="flex flex-wrap gap-2">
              {location.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">{location.name}</h3>
            {location.distance && (
              <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-soft-green" />
                <span>{location.distance}</span>
              </div>
            )}
          </div>
          <a
            href="/request"
            className="px-4 py-2 rounded-xl bg-soft-green text-white text-sm font-medium hover:bg-soft-green/90 transition flex-shrink-0"
          >
            Request
          </a>
        </div>
        
        {location.description && (
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {location.description}
          </p>
        )}
        
        <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
          <Users className="w-3 h-3 text-soft-green" />
          Use arrows to explore interior
        </p>
      </div>
    </div>
  );
}
