import { useState, useEffect, useCallback, memo, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AmenityGalleryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}


// Optimized thumbnail component
const Thumbnail = memo(({ 
  src, 
  index, 
  isActive, 
  onClick 
}: { 
  src: string; 
  index: number; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex-shrink-0 w-14 h-10 sm:w-20 sm:h-14 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
      isActive
        ? "border-primary ring-2 ring-primary/30"
        : "border-transparent opacity-70 hover:opacity-100"
    }`}
    aria-label={`View image ${index + 1}`}
  >
    <img 
      src={src} 
      alt="" 
      loading="eager"
      decoding="async"
      className="w-full h-full object-cover" 
    />
  </button>
));

Thumbnail.displayName = "Thumbnail";

export function AmenityGalleryPopup({ isOpen, onClose, title, images }: AmenityGalleryPopupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

// Reset index when popup opens with new images
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsImageLoaded(false);
    }
  }, [isOpen, images]);

  // bulk preloading of images
  useEffect(() => {
  if (!isOpen || images.length === 0) return;

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, [isOpen, images]);

// adjacent image preloading
useEffect(() => {
  if (!images.length) return;

  const next = new Image();
  next.src = images[(currentIndex + 1) % images.length];

  const prev = new Image();
  prev.src = images[(currentIndex - 1 + images.length) % images.length];
}, [currentIndex, images]);


  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Auto-scroll thumbnails to keep active one visible
  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const activeThumb = container.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        const containerWidth = container.offsetWidth;
        const thumbLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;
        const scrollLeft = thumbLeft - containerWidth / 2 + thumbWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [currentIndex]);

  const nextImage = useCallback(() => {
    setIsImageLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setIsImageLoaded(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleThumbnailClick = useCallback((index: number) => {
    if (index !== currentIndex) {
      setIsImageLoaded(false);
      setCurrentIndex(index);
    }
  }, [currentIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border flex-shrink-0">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground truncate pr-4">{title}</h3>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted transition-colors flex-shrink-0"
              aria-label="Close gallery"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Main Image */}
          <div className="relative aspect-[16/10] bg-muted overflow-hidden flex-shrink-0">
            {/* Loading skeleton */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            
            <img
  key={currentIndex}
  src={images[currentIndex]}
  alt={`${title} ${currentIndex + 1}`}
  loading="eager"
  decoding="async"
  fetchPriority="high"
  onLoad={() => setIsImageLoaded(true)}
  className={`w-full h-full object-cover transition-opacity duration-300 ${
    isImageLoaded ? "opacity-100" : "opacity-0"
  }`}
/>


            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-deep-blue" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-deep-blue" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/60 text-white text-xs sm:text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div 
              ref={thumbnailsRef}
              className="p-2 sm:p-4 flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide flex-shrink-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {images.map((img, index) => (
                <Thumbnail
                  key={index}
                  src={img}
                  index={index}
                  isActive={index === currentIndex}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
