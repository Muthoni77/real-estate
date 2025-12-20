import { useState } from "react";
import { MapPin, ChevronRight, Users, Bed } from "lucide-react";

import interior4beds from "@/assets/interior-4beds.webp";
import interior3beds from "@/assets/interior-3beds.webp";
import interior2beds from "@/assets/interior-2beds.webp";
import interior1bed from "@/assets/interior-1bed.webp";

interface LocationCardProps {
  location: {
    name: string;
    image: string;
    distance?: string;
    description?: string;
    features?: string[];
  };
  variant?: "landing" | "apartments";
}

const interiorImages = [
  { beds: 4, price: "2,700", image: interior4beds, label: "Shared (4 Students)" },
  { beds: 3, price: "3,600", image: interior3beds, label: "Shared (3 Students)" },
  { beds: 2, price: "4,750", image: interior2beds, label: "Shared (2 Students)" },
  { beds: 1, price: "9,000", image: interior1bed, label: "Live Alone " },
];

export function LocationHoverGallery({ location, variant = "landing" }: LocationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift cursor-pointer ${
        variant === "apartments" ? "border border-border" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImage(0);
      }}
    >
      {/* Main Image */}
      <div className={`overflow-hidden relative ${variant === "apartments" ? "aspect-[4/3]" : "h-48"}`}>
        <img
          src={isHovered ? interiorImages[activeImage].image : location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Hover Gallery Thumbnails */}
        {isHovered && (
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 animate-fade-in">
            {interiorImages.map((interior, index) => (
              <button
                key={interior.beds}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(index);
                }}
                className={`flex-1 p-2 rounded-lg backdrop-blur-sm transition-all ${
                  activeImage === index
                    ? "bg-soft-green text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <Bed className="w-3 h-3" />
                    <span className="text-xs font-medium">{interior.beds}</span>
                  </div>
                  <span className="text-[10px] mt-0.5">AED {interior.price}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Features badges (apartments variant) */}
        {variant === "apartments" && location.features && !isHovered && (
          <div className="absolute bottom-4 left-4 right-4">
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
          <div className="w-10 h-10 rounded-full bg-soft-green/10 flex items-center justify-center group-hover:bg-soft-green transition-colors">
            <ChevronRight className="w-5 h-5 text-soft-green group-hover:text-white transition-colors" />
          </div>
        </div>
        
        {location.description && (
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {location.description}
          </p>
        )}
        
        <p className="mt-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Users className="w-4 h-4 text-soft-green" />
            Hover to see room configurations
          </span>
        </p>
      </div>
    </div>
  );
}

