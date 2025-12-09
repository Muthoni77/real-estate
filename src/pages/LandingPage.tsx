import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedHomes from "../components/FeaturedHomes";
import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import CustomRequestModal from "../components/CustomRequestModal";
import HouseDetailModal from "../components/HouseDetailModal";
import { houses, type House } from "../types/house";

const LandingPage = () => {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [filteredHouses, setFilteredHouses] = useState(houses);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredHouses(houses);
      return;
    }
    const filtered = houses.filter(
      (h) =>
        h.location.toLowerCase().includes(query.toLowerCase()) ||
        h.type.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredHouses(filtered);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onCustomRequest={() => setCustomModalOpen(true)} />
      
      <main className="flex-1">
        <HeroSection onSearch={handleSearch} />
        
        {/* Spacer for hero search card overlap */}
        <div className="h-16 lg:h-8" />
          <AboutSection />
        <FeaturedHomes houses={filteredHouses} onSelect={setSelectedHouse} />
        <CTASection onCustomRequest={() => setCustomModalOpen(true)} />
      </main>

      <Footer />

      {/* Modals */}
      <CustomRequestModal
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
      />
      <HouseDetailModal house={selectedHouse} onClose={() => setSelectedHouse(null)} />
    </div>
  );
};

export default LandingPage;