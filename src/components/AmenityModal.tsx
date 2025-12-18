
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


interface AmenityModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}

export default function AmenityModal({
  open,
  onClose,
  title,
  images,
}: AmenityModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-end md:items-center justify-center">
      {/* Modal container */}
      <div className="bg-background w-full md:max-w-4xl md:rounded-2xl rounded-t-3xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg md:text-xl font-semibold">
            {title}
          </h3>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-muted transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Swipeable gallery */}
        <div className="h-[65vh] md:h-[500px]">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
