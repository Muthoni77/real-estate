import { useState, useMemo } from "react";
import { MapPin, Users, Wifi, Home, ChevronRight, CheckCircle, GraduationCap, Bed, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import locationMarina from "../assets/location-marina.webp";
import locationBarsha from "../assets/location-barsha.webp";
import locationJlt from "../assets/location-jlt.webp";
import locationMoe from "../assets/location-moe.webp";
import locationIbn from "../assets/location-ibn.webp";
import locationAcademic from "../assets/location-academic.webp";
import locationProduction from "../assets/location-production.webp";
import locationDip from "../assets/location-dip.webp";
import locationRemraam from "../assets/location-remraam.webp";
import heroImage from "../assets/dubai-marina.webp";
import { ApartmentCarousel } from "../components/ApartmentCarousel";


const apartmentLocations = [
  {
    name: "Al Barsha Heights (Tecom)",
    image: locationBarsha,
    description: "Spacious one-bedroom apartment with balcony, fully equipped kitchen, and two washrooms. Ideal for up to 4 students.",
    features: ["Near Metro", "City View", "Modern Design"],
    area: "Al Barsha",
    nearbyUniversities: ["University of Dubai", "Canadian University Dubai"],
    distance: "5 min to metro",
  },
  {
    name: "Dubai Marina",
    image: locationMarina,
    description: "Modern interiors, high-speed WiFi, and premium facilities in one of Dubai's most vibrant areas.",
    features: ["Waterfront", "Premium Location", "Nightlife"],
    area: "Dubai Marina",
    nearbyUniversities: ["Dubai Marina Campus", "SP Jain School"],
    distance: "2 min to beach",
  },
  {
    name: "JLT (Jumeirah Lake Towers)",
    image: locationJlt,
    description: "Bright, fully furnished apartments near metro stations and universities.",
    features: ["Lake View", "Metro Access", "Parks"],
    area: "JLT",
    nearbyUniversities: ["Murdoch University Dubai", "BITS Pilani Dubai"],
    distance: "Walking distance to metro",
  },
  {
    name: "Mall of the Emirates",
    image: locationMoe,
    description: "Comfort, security, and convenience combined for student living.",
    features: ["Shopping", "Entertainment", "Central"],
    area: "Al Barsha",
    nearbyUniversities: ["University of Wollongong", "Middlesex University Dubai"],
    distance: "3 min walk to mall",
  },
  {
    name: "Ibn Battuta",
    image: locationIbn,
    description: "Fully furnished apartments designed for focused and peaceful student life.",
    features: ["Quiet Area", "Near Mall", "Affordable"],
    area: "Jebel Ali",
    nearbyUniversities: ["Heriot-Watt University Dubai", "Amity University Dubai"],
    distance: "Near Ibn Battuta Mall",
  },
  {
    name: "Academic City",
    image: locationAcademic,
    description: "Close to major universities with flexible sharing options and modern design.",
    features: ["Near Universities", "Student Hub", "Modern"],
    area: "Academic City",
    nearbyUniversities: ["University of Birmingham Dubai", "Manipal Academy", "Amity University"],
    distance: "Walking distance to universities",
  },
  {
    name: "Production City",
    image: locationProduction,
    description: "Affordable student apartments in a growing community with excellent connectivity.",
    features: ["Affordable", "Growing Area", "Good Transport"],
    area: "Production City",
    nearbyUniversities: ["Middlesex University Dubai", "University of Dubai"],
    distance: "15 min to Dubai Media City",
  },
  {
    name: "Dubai Investments Park (DIP)",
    image: locationDip,
    description: "Peaceful community with green spaces, perfect for focused student living.",
    features: ["Green Spaces", "Peaceful", "Family-Friendly"],
    area: "DIP",
    nearbyUniversities: ["BITS Pilani Dubai", "Amity University Dubai"],
    distance: "Near Sheikh Zayed Road",
  },
  {
    name: "Remraam Community",
    image: locationRemraam,
    description: "Modern townhouse-style living with community amenities and secure environment.",
    features: ["Community Living", "Secure", "Modern"],
    area: "Remraam",
    nearbyUniversities: ["Heriot-Watt University Dubai", "University of Wollongong"],
    distance: "Near Al Qudra Road",
  },
];

const livingPreferences = [
  { id: "all", label: "All Options", beds: null },
  { id: "solo", label: "Live Alone", beds: 1, description: "Private 1 bedroom" },
  { id: "shared-2", label: "Shared (2 students)", beds: 2, description: "Share with 1 roommate" },
  { id: "shared-3", label: "Shared (3 students)", beds: 3, description: "Share with 2 roommates" },
  { id: "shared-4", label: "Shared (4 students)", beds: 4, description: "Share with 3 roommates" },
];

const priceRanges = [
  { id: "all", label: "Any Budget", min: 0, max: Infinity },
  { id: "budget", label: "Under AED 3,000", min: 0, max: 3000 },
  { id: "mid", label: "AED 3,000 - 5,000", min: 3000, max: 5000 },
  { id: "premium", label: "Above AED 5,000", min: 5000, max: Infinity },
];

const allUniversities = [
  "All Universities",
  "University of Dubai",
  "Canadian University Dubai",
  "Dubai Marina Campus",
  "SP Jain School",
  "Murdoch University Dubai",
  "BITS Pilani Dubai",
  "University of Wollongong",
  "Middlesex University Dubai",
  "Heriot-Watt University Dubai",
  "Amity University Dubai",
  "University of Birmingham Dubai",
  "Manipal Academy",
];

// Price per bed count (for filtering)
const priceByBeds: Record<number, number> = {
  1: 9000,
  2: 4750,
  3: 3600,
  4: 2700,
};

export default function Apartments() {
  const [selectedLiving, setSelectedLiving] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedUniversity, setSelectedUniversity] = useState("All Universities");

  const filteredLocations = useMemo(() => {
    let results = apartmentLocations.filter((apt) => {
      const matchesUniversity = 
        selectedUniversity === "All Universities" || 
        apt.nearbyUniversities.some((uni) => 
          uni.toLowerCase().includes(selectedUniversity.toLowerCase())
        );
      return matchesUniversity;
    });

    // If no results, show all (nearby suggestion)
    if (results.length === 0) {
      results = apartmentLocations;
    }

    return results;
  }, [selectedUniversity]);

  // Check if selected price range matches any bed option
  const matchesPriceFilter = (priceRangeId: string) => {
    if (priceRangeId === "all") return true;
    const range = priceRanges.find(p => p.id === priceRangeId);
    if (!range) return true;
    
    // Check if any bed price falls in range
    return Object.values(priceByBeds).some(price => price >= range.min && price < range.max);
  };

  const clearFilters = () => {
    setSelectedLiving("all");
    setSelectedPrice("all");
    setSelectedUniversity("All Universities");
    console.log({matchesPriceFilter});
  };

  const hasActiveFilters = selectedLiving !== "all" || selectedPrice !== "all" || selectedUniversity !== "All Universities";

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dubai Marina Apartments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary font-medium">Apartments</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <CheckCircle className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-sm font-medium">{apartmentLocations.length} Prime Locations</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Explore Our <span className="text-secondary">Student Apartments</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Fully furnished, secure one-bedroom apartments across Dubai — designed exclusively for students.
          </p>
        </div>
      </section>

      {/* Simplified Filter Section */}
      <section className="py-8 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Header */}
          <div className="text-center mb-6">
            <p className="text-sm text-secondary">Find your perfect student accommodation</p>
          </div>

          {/* Living Preference Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Bed className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">How do you want to live?</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {livingPreferences.map((pref) => (
                <button
                  key={pref.id}
                  onClick={() => setSelectedLiving(pref.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    selectedLiving === pref.id
                      ? "bg-secondary text-white shadow-md"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  <span>{pref.label}</span>
                  {pref.description && selectedLiving === pref.id && (
                    <span className="block text-xs opacity-80 mt-0.5">{pref.description}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range & University Row */}
          <div className="flex flex-wrap gap-4 items-end">
            {/* Price Range */}
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Budget</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedPrice === range.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* University Filter */}
            <div className="min-w-[220px]">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Near Your Campus</span>
              </div>
              <div className="relative">
                <select
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                  className="w-full appearance-none px-4 py-2.5 pr-10 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
                >
                  {allUniversities.map((uni) => (
                    <option key={uni} value={uni}>
                      {uni}
                    </option>
                  ))}
                </select>
                <GraduationCap className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-4 py-2.5 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors text-sm font-medium whitespace-nowrap"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="mt-6 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">
              {filteredLocations.length} Apartments Near you
              {selectedUniversity !== "All Universities" && ` near ${selectedUniversity}`}
            </span>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">Up to 4 Students</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">All Bills Included</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">Near Metro & Universities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">
              {filteredLocations.length === apartmentLocations.length
                ? "Choose Your Location"
                : `${filteredLocations.length} Location${filteredLocations.length !== 1 ? "s" : ""} Found`}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Each location offers the same premium amenities. Hover on bed options to see pricing and interiors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredLocations.map((apt) => (
              <ApartmentCarousel
                key={apt.name}
                location={apt}
                variant="apartments"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
       <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0  bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/90" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Find the Right Apartment Near 
            <span className="block text-secondary">Your Campus</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
            Request a hostel and we'll assign the most convenient option based on your university location.
          </p>
          
         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="px-8 py-3 rounded-xl bg-background text-secondary font-medium hover:bg-primary/90 transition"
            >
              Request a Hostel
            </Link>
            <Link
              to="/virtual-tours"
              className="px-8 py-3 rounded-xl border-2 border-white/40 text-white font-medium hover:bg-white/10 transition"
            >
              Virtual Tours
            </Link>
          </div>         
        </div>
      </section>

    </main>
  );
}


