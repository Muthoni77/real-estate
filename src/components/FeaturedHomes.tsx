import { motion } from "framer-motion";
import { MapPin, Maximize, BedDouble, ArrowRight } from "lucide-react";
import type { House } from "../types/house";

interface FeaturedHomesProps {
  houses: House[];
  onSelect: (house: House) => void;
}

const FeaturedHomes = ({ houses, onSelect }: FeaturedHomesProps) => {
  return (
    <section id="listings" className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Featured Homes</h2>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map((house, index) => (
            <motion.article
              key={house.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-lg overflow-hidden shadow-card cursor-pointer group"
              onClick={() => onSelect(house)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={house.image}
                  alt={house.type}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-foreground">{house.type}</h3>
                  <span className="text-sm font-semibold text-foreground">
                    KSh {house.price.toLocaleString()}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {house.location}
                </p>

                <div className="flex items-center gap-4 pt-3 border-t border-border text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Maximize className="w-3.5 h-3.5" />
                    45 m²
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-3.5 h-3.5" />
                    {house.capacity} {house.capacity > 1 ? "rooms" : "room"}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHomes;
