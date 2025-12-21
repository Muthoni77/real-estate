import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Users, Bed } from "lucide-react";
import { Link } from "react-router-dom";
// Import interior images
import interiorKitchen from "../assets/interior-kitchen.webp";
import interiorBalcony from "../assets/interior-balcony.webp";
import interiorWashroom from "../assets/interior-washroom.webp";
import interiorSitting from "../assets/interior-sitting.webp";
import interiorCorridor from "../assets/interior-corridor.webp";
import interior4beds from "../assets/interior-4beds.webp";
import interior3beds from "../assets/interior-3beds.webp";
import interior2beds from "../assets/interior-2beds.webp";
import interior1bed from "../assets/interior-1bed.webp";

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
];
   
const bedOptions = [
  { beds: 4, label: "4 beds / 1 bedroom", price: "2,500", image: interior4beds },
  { beds: 3, label: "3 beds / 1 bedroom", price: "3,400", image: interior3beds },
  { beds: 2, label: "2 beds / 1 bedroom", price: "4,550", image: interior2beds },
  { beds: 1, label: "1 bed / 1 bedroom", price: "6,550", image: interior1bed },
];

export function ApartmentCarousel({ location, variant = "landing" }: ApartmentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeBedOption, setActiveBedOption] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true); // track image fade-in

  // Replace default exterior with location image
  const images = carouselImages.map((img) =>
    img.isDefault ? { ...img, src: location.image } : img
  );
console.log('Next image clicked', isHovered);

  // Show bed image if hovering on a bed option
  const displayImage = activeBedOption !== null 
    ? bedOptions[activeBedOption].image 
    : images[currentIndex].src;

  const displayLabel = activeBedOption !== null 
    ? bedOptions[activeBedOption].label 
    : images[currentIndex].label;

  // Preload next and previous images for smooth navigation
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    new Image().src = images[nextIndex].src;
    new Image().src = images[prevIndex].src;
  }, [currentIndex, images]);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift cursor-pointer ${
        variant === "apartments" ? "border border-border" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveBedOption(null);   
      }}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      {/* Image Container */}
      <div className={`overflow-hidden relative ${variant === "apartments" ? "aspect-[4/3]" : "h-48"}`}>
        <img
          src={displayImage}
          alt={`${location.name} - ${displayLabel}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setActiveBedOption(null);
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10 arrow-btn"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setActiveBedOption(null);
            setCurrentIndex((prev) => (prev + 1) % images.length);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10 arrow-btn"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>

        {/* Image Label */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
          {displayLabel}
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveBedOption(null);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex && activeBedOption === null
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium">
          {activeBedOption !== null ? `Bed ${activeBedOption + 1}` : `${currentIndex + 1} / ${images.length}`}
        </div>

        {/* Features badges (apartments variant) */}
        {variant === "apartments" && location.features && currentIndex === 0 && activeBedOption === null && (
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
                <MapPin className="w-4 h-4 text-secondary" />
                <span>{location.distance}</span>
              </div>
            )}
          </div>
          <Link
            to="/request"
            className="px-4 py-2 rounded-xl bg-secondary text-white text-sm font-medium hover:bg-secondary/90 transition flex-shrink-0"
          >
            Request
          </Link>
        </div>

        {/* Bed Options with Pricing */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {bedOptions.map((option, index) => (
            <button
              key={option.beds}
              onMouseEnter={() => setActiveBedOption(index)}
              onMouseLeave={() => setActiveBedOption(null)}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className={`flex flex-col items-center p-2 rounded-lg border transition-all text-center ${
                activeBedOption === index
                  ? "border-secondary bg-secondary/10"
                  : "border-border hover:border-secondary/50"
              }`}
            >
              <Bed className={`w-4 h-4 mb-1 ${activeBedOption === index ? "text-secondary" : "text-muted-foreground"}`} />
              <span className="text-xs font-medium text-foreground">{option.beds} bed</span>
              <span className="text-xs text-secondary font-semibold">{option.price}K</span>
            </button>
          ))}
        </div>
        
        <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
          <Users className="w-3 h-3 text-secondary" />
          Hover bed options to preview • Use arrows for interior
        </p>
      </div>
    </div>
  );
}
