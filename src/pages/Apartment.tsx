import { useState, useMemo } from "react";
import { MapPin, Users, Wifi, Home, ChevronRight, CheckCircle, Search, X, Building2, GraduationCap, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import locationMarina from "../assets/location-marina.jpg";
import locationBarsha from "../assets/location-barsha.jpg";
import locationJlt from "../assets/location-jlt.jpg";
import locationMoe from "../assets/location-moe.jpg";
import locationIbn from "../assets/location-ibn.jpg";
import locationAcademic from "../assets/location-academic.jpg";
import locationProduction from "../assets/location-production.jpg";
import locationDip from "../assets/location-dip.jpg";
import locationRemraam from "../assets/location-remraam.jpg";
import heroImage from "../assets/dubai-marina.jpg";
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

const dubaiAreas = [
  "All Areas",
  "Al Barsha",
  "Dubai Marina",
  "JLT",
  "Jebel Ali",
  "Academic City",
  "Production City",
  "DIP",
  "Remraam",
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

const propertyTypes = ["All", "Furnished", "Unfurnished"];

export default function Apartments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas");
  const [selectedUniversity, setSelectedUniversity] = useState("All Universities");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState("All");

  const filteredLocations = useMemo(() => {
    return apartmentLocations.filter((apt) => {
      const matchesSearch =
        apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.nearbyUniversities.some((uni) =>
          uni.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesArea = selectedArea === "All Areas" || apt.area === selectedArea;
      const matchesUniversity = 
        selectedUniversity === "All Universities" || 
        apt.nearbyUniversities.some((uni) => 
          uni.toLowerCase().includes(selectedUniversity.toLowerCase())
        );
      return matchesSearch && matchesArea && matchesUniversity;
    });
  }, [searchQuery, selectedArea, selectedUniversity]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedArea("All Areas");
    setSelectedUniversity("All Universities");
    setSelectedType("All");
  };

  const hasActiveFilters = searchQuery || selectedArea !== "All Areas" || selectedUniversity !== "All Universities";

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

      {/* Dubizzle-Style Search & Filter Section */}
      <section className="py-6 bg-card border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Filter Row */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search location, area, or university..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Area Dropdown */}
            <div className="relative">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary cursor-pointer min-w-[160px]"
              >
                {dubaiAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* University Dropdown */}
            <div className="relative">
              <select
                value={selectedUniversity}
                onChange={(e) => setSelectedUniversity(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary cursor-pointer min-w-[200px]"
              >
                {allUniversities.map((uni) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </select>
              <GraduationCap className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* More Filters Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                showFilters 
                  ? "border-secondary bg-secondary/5 text-secondary" 
                  : "border-border hover:border-secondary/50"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-4 py-3 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors text-sm font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground py-2">Type:</span>
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedType === type
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Count & Quick Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {filteredLocations.length} apartments found
            </span>
            <span className="text-muted-foreground">•</span>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {dubaiAreas.slice(1, 6).map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    selectedArea === area
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {area}
                </button>
              ))}
              {dubaiAreas.length > 6 && (
                <button
                  onClick={() => setShowFilters(true)}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted hover:bg-muted/80 whitespace-nowrap"
                >
                  View More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">Up to 4 Students</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">All Bills Included</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
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
              Each location offers the same premium amenities and comfort. Use arrows to explore interior.
            </p>
          </div>

          {filteredLocations.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredLocations.map((apt) => (
                <ApartmentCarousel
                  key={apt.name}
                  location={apt}
                  variant="apartments"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No apartments found matching your search.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-2 rounded-xl bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition"
              >
                Clear Filters
              </button>
            </div>
          )}
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
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
             <Link
              to="/request"
              className="px-8 py-3 rounded-xl bg-secondary text-cream font-medium hover:bg-secondary/90 transition"
            >
              Request a Hostel
            </Link>
        
             <a
              href="tel:+971545594940"
              className="px-8 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              Call +971 54 559 4940
            </a>
          </div>

         
        </div>
      </section>
    

    
    </main>
  );
}



