import { useState } from "react";
import { Search, MapPin, Banknote, BedDouble, Home } from "lucide-react";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rooms, setRooms] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    onSearch(location || propertyType || "");
  };

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[500px] lg:h-[550px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Modern student housing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        
        {/* Hero Text Overlay */}
        <div className="absolute bottom-32 lg:bottom-40 left-6 lg:left-12 max-w-lg bg-pink-400 p-8">
          <p className="text-card text-lg lg:text-xl leading-relaxed">
            From cozy studios to spacious apartments — we help you{" "}
            <span className="italic font-medium">find the right home</span>
          </p>
        </div>
      </div>

      {/* Search Filters Card */}
      <div className="absolute bottom-0 left-6 lg:left-12 right-6 lg:right-auto translate-y-1/2 lg:translate-y-0 lg:bottom-8">
        <div className="bg-card rounded-lg shadow-lg-custom p-4 lg:p-6 max-w-4xl">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Location */}
            <div className="col-span-2 lg:col-span-1">
              <label className="text-xs text-muted-foreground mb-1 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-secondary border-0 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select Campus</option>
                  <option value="Karen">Nairobi - Karen</option>
                  <option value="Juja">Juja - Main</option>
                  <option value="Thika">Thika - Town</option>
                </select>
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Price</label>
              <div className="relative">
                <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-secondary border-0 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Any Price</option>
                  <option value="0-15000">Under 15K</option>
                  <option value="15000-25000">15K - 25K</option>
                  <option value="25000+">25K+</option>
                </select>
              </div>
            </div>

            {/* Rooms */}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Rooms</label>
              <div className="relative">
                <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-secondary border-0 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Any</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3+">3+ People</option>
                </select>
              </div>
            </div>

            {/* Type */}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Type</label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-secondary border-0 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">All Types</option>
                  <option value="Studio">Studio</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="Bedsitter">Bedsitter</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="col-span-2 lg:col-span-1 flex items-end">
              <button
                onClick={handleSearch}
                className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
