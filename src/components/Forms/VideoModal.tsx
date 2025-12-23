import { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  videoSrc: string | null;
  poster?: string;
  onClose: () => void;
}

const VideoModal = ({ isOpen, videoSrc, poster, onClose }: VideoModalProps) => {
  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !videoSrc) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:opacity-80"
        aria-label="Close video"
      >
        <X size={28} />
      </button>

      {/* Video container */}
      <div className="w-full max-w-5xl px-4">
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
            muted
            preload="metadata"
            poster={poster}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

