import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Heart } from "lucide-react";
import type { House } from "../types/house";

interface HouseDetailModalProps {
  house: House | null;
  onClose: () => void;
}

const HouseDetailModal = ({ house, onClose }: HouseDetailModalProps) => {
  const [loading, setLoading] = useState(false);

  const handleBook = () => {
    if (!house) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Booked ${house.type} at ${house.location} for KSh ${house.price.toLocaleString()}`);
      onClose();
    }, 900);
  };

  const handleSave = () => {
    alert("Saved to favourites (mock)");
  };

  return (
    <AnimatePresence>
      {house && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-card w-full max-w-lg rounded-2xl shadow-card p-6 relative border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 p-2 hover:bg-muted rounded-lg transition-colors z-10"
              onClick={onClose}
              aria-label="close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <img
              src={house.image}
              alt={house.type}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-1 text-foreground">{house.type}</h3>
            <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {house.location}
            </p>
            <p className="text-muted-foreground mb-4">{house.description}</p>

            <div className="flex items-center justify-between border-t border-border pt-4">
              <div>
                <div className="text-sm text-muted-foreground">Capacity</div>
                <div className="font-semibold text-foreground">
                  {house.capacity} person{house.capacity > 1 ? "s" : ""}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Price</div>
                <div className="font-bold text-primary text-xl">
                  KSh {house.price.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleBook}
                disabled={loading}
                className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Processing..." : "Book This Place"}
              </button>
              <button
                onClick={handleSave}
                className="py-3 px-4 border border-border rounded-lg flex items-center gap-2 hover:bg-muted transition-colors"
              >
                <Heart className="w-4 h-4" /> Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HouseDetailModal;
