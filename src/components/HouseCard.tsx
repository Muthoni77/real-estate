import { motion } from "framer-motion";
import { MapPin, Bed } from "lucide-react";
import type { House } from "../types/house";

interface HouseCardProps {
  house: House;
  onClick: () => void;
}

const HouseCard = ({ house, onClick }: HouseCardProps) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-[fcfcfc] rounded-2xl shadow-black/20 overflow-hidden cursor-pointer border border-border"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={house.image}
          alt={house.type}
          className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground">{house.type}</h3>
        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
          <MapPin className="w-4 h-4" />
          {house.location}
        </p>
        <p className="mt-3 font-bold text-primary text-lg">
          KSh {house.price.toLocaleString()}
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Bed className="w-4 h-4" />
          <span>
            {house.capacity} person{house.capacity > 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default HouseCard;
