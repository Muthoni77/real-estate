import { useState, memo } from "react";
import { ChevronLeft, ChevronRight, MapPin, Users, Bed, Images } from "lucide-react";
import { Link } from "react-router-dom";
import { apartmentInteriors, type ApartmentInteriorImages } from "../data/apartmentimages";
import { ApartmentGalleryPopup } from "./ApartmentGalleryPopup";
// Original interior bed images for bed option hover
import interior4beds from "../assets/interior-4beds.webp";
import interior3beds from "../assets/interior-3beds.webp";
import interior2beds from "../assets/interior-2beds.webp";
import interior1bed from "../assets/interior-1bed.webp";
import jltVideo from "../assets/videos/JLT.mp4";
import marinaVideo from "../assets/videos/marina.mp4";
import barshaVideo from "../assets/videos/Barsha.mp4";
import ibnVideo from "../assets/videos/ibn.mp4";
import academicVideo from "../assets/videos/Academic.mp4";
import productionVideo from "../assets/videos/Production.mp4";

const locationVideos: Record<string, string> = {
  "JLT (Jumeirah Lake Towers)": jltVideo,
  "Dubai Marina": marinaVideo,
  "Al Barsha Heights (Tecom)": barshaVideo,
  "Ibn Battuta": ibnVideo,
  "Academic City": academicVideo,
  "Production City": productionVideo,
};


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

// Location-specific pricing data
const locationPricing: Record<string, { beds4: string; beds3: string; beds2: string; liveAlone: string }> = {
  "Al Barsha Heights (Tecom)": { beds4: "3,000", beds3: "3,900", beds2: "4,950", liveAlone: "6,950" },
  "Dubai Marina": { beds4: "3,400", beds3: "4,300", beds2: "5,350", liveAlone: "7,350" },
  "JLT (Jumeirah Lake Towers)": { beds4: "3,000", beds3: "3,900", beds2: "4,950", liveAlone: "6,950" },
  "Ibn Battuta": { beds4: "2,500", beds3: "3,400", beds2: "4,550", liveAlone: "6,550" },
  "Production City": { beds4: "2,500", beds3: "3,400", beds2: "4,550", liveAlone: "6,550" },
  "Academic City": { beds4: "2,500", beds3: "3,400", beds2: "4,550", liveAlone: "6,550" },
};

// Default pricing fallback
const defaultPricing = { beds4: "2,700", beds3: "3,600", beds2: "4,750", liveAlone: "9,000" };

const getBedOptions = (locationName: string) => {
  const pricing = locationPricing[locationName] || defaultPricing;
  return [
    { beds: 4, label: "4 beds", price: pricing.beds4, image: interior4beds },
    { beds: 3, label: "3 beds", price: pricing.beds3, image: interior3beds },
    { beds: 2, label: "2 beds", price: pricing.beds2, image: interior2beds },
    { beds: 1, label: "Live alone", price: pricing.liveAlone, image: interior1bed },
  ];
};

// Detect touch device
const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

// Optimized image component with lazy loading
const OptimizedImage = memo(({ src, alt, className, eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) => (
  <img
    key={src}
    src={src}
    alt={alt}
    loading={eager ? "eager" : "lazy"}
    decoding="async"
    className={className}
  />
));

OptimizedImage.displayName = "OptimizedImage";

export function ApartmentCarousel({ location, variant = "landing" }: ApartmentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeBedOption, setActiveBedOption] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Get location-specific pricing and interior images
  const bedOptions = getBedOptions(location.name);
  const interiors: ApartmentInteriorImages | undefined = apartmentInteriors[location.name];
  const videoUrl = locationVideos[location.name];

  // Build carousel images using location-specific interiors
  const carouselImages = [
    { src: location.image, label: "Exterior" },
    { src: interiors?.living || location.image, label: "Living Room" },
    { src: interiors?.kitchen || location.image, label: "Kitchen" },
    { src: interiors?.balcony || location.image, label: "Balcony" },
    { src: interiors?.washroom || location.image, label: "Washroom" },
    { src: interiors?.bedroom || location.image, label: "Bedroom" },
  ];

  // Show specific bed configuration image when hovering on bed options
  const displayImage = activeBedOption !== null 
    ? bedOptions[activeBedOption].image
    : carouselImages[currentIndex].src;
console.log(isHovered);
  const displayLabel = activeBedOption !== null 
    ? bedOptions[activeBedOption].label 
    : carouselImages[currentIndex].label;

const nextImage = () => {
  setActiveBedOption(null);
  setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
};

const prevImage = () => {
  setActiveBedOption(null);
  setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
};

  const handleCardClick = () => {
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift cursor-pointer ${
          variant === "apartments" ? "border border-border" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveBedOption(null);
        }}
        onClick={handleCardClick}
      >
        {/* Image Container */}
        <div className={`overflow-hidden relative ${variant === "apartments" ? "aspect-[4/3]" : "h-48 sm:h-52 md:h-48"}`}>
          <OptimizedImage
            src={displayImage}
            alt={`${location.name} - ${displayLabel}`}
            eager={currentIndex === 0 && activeBedOption === null}
            className="w-full h-full object-cover transition-all duration-500"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-opacity hover:bg-white z-10 ${
              isTouchDevice ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-deep-blue" />
          </button>
          <button
            onClick={nextImage}
            className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-opacity hover:bg-white z-10 ${
              isTouchDevice ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-deep-blue" />
          </button>

          {/* Image Label */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
            {displayLabel}
          </div>

          {/* Gallery indicator */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium flex items-center gap-1">
            <Images className="w-3 h-3" />
            <span>{activeBedOption !== null ? `Bed ${activeBedOption + 1}` : `${currentIndex + 1}/${carouselImages.length}`}</span>
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveBedOption(null);
                  setCurrentIndex(index);
                }}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                  index === currentIndex && activeBedOption === null
                    ? "bg-white w-3 sm:w-4"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Features badges (apartments variant) */}
          {variant === "apartments" && location.features && currentIndex === 0 && activeBedOption === null && (
            <div className="absolute bottom-8 sm:bottom-10 left-3 sm:left-4 right-3 sm:right-4">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {location.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-0.5 sm:py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground truncate">{location.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">1 bedroom apartment</p>
              {location.distance && (
                <div className="flex items-center gap-2 mt-1.5 sm:mt-2 text-muted-foreground text-xs sm:text-sm">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-soft-green flex-shrink-0" />
                  <span className="truncate">{location.distance}</span>
                </div>
              )}
            </div>
            <Link
              to="/request"
              onClick={(e) => e.stopPropagation()}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-soft-green text-white text-xs sm:text-sm font-medium hover:bg-soft-green/90 transition flex-shrink-0"
            >
              Request
            </Link>
          </div>

          {/* Bed Options with Pricing */}
          <div className="mt-3 sm:mt-4 grid grid-cols-4 gap-1.5 sm:gap-2">
            {bedOptions.map((option, index) => (
              <button
                key={option.beds}
                onMouseEnter={() => {
                  if (!isTouchDevice) setActiveBedOption(index);
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice) setActiveBedOption(null);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (isTouchDevice) {
                    setActiveBedOption((prev) => (prev === index ? null : index));
                  }
                }}
                className={`flex flex-col items-center p-1.5 sm:p-2 rounded-md sm:rounded-lg border transition-all text-center ${
                  activeBedOption === index
                    ? "border-soft-green bg-soft-green/10"
                    : "border-border hover:border-soft-green/50"
                }`}
              >
                <Bed className={`w-3 h-3 sm:w-4 sm:h-4 mb-0.5 sm:mb-1 ${activeBedOption === index ? "text-soft-green" : "text-muted-foreground"}`} />
                <span className="text-[10px] sm:text-xs font-medium text-foreground">{option.label}</span>
                <span className="text-[10px] sm:text-xs text-soft-green font-semibold">AED {option.price}</span>
              </button>
            ))}
          </div>
          
          <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
            <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-soft-green" />
            <span className="hidden sm:inline">Click card for gallery • Hover bed options to preview</span>
            <span className="sm:hidden">Tap card for gallery • Tap beds to preview</span>
          </p>
        </div>
      </div>

      {/* Gallery Popup */}
      <ApartmentGalleryPopup
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
        title={location.name}
        images={carouselImages}
        videoUrl={videoUrl}
      />
    </>
  );
}
