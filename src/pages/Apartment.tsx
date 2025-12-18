
import { useState, useMemo } from "react";
import { MapPin, Users, Wifi, Home, ChevronRight, CheckCircle, Search, X, } from "lucide-react";
import { Link } from "react-router-dom";

import locationMarina from "../assets/location-marina.jpg";
import locationBarsha from "../assets/location-barsha.jpg";
import locationJlt from "../assets/location-jlt.jpg";
import locationMoe from "../assets/location-moe.jpg";
import locationIbn from "../assets/location-ibn.jpg";
import locationAcademic from "../assets/location-academic.jpg";
import heroImage from "../assets/dubai-marina.jpg";

import { LocationHoverGallery } from "../components/LocationHoverGallery";


const apartmentLocations = [
  {
    name: "Al Barsha Heights (Tecom)",
    image: locationBarsha,
    description: "Spacious one-bedroom apartment with balcony, fully equipped kitchen, and two washrooms. Ideal for up to 4 students.",
    features: ["Near Metro", "City View", "Modern Design"],
    area: "Al Barsha",
    nearbyUniversities: ["University of Dubai", "Canadian University Dubai"],
  },
  {
    name: "Dubai Marina",
    image: locationMarina,
    description: "Modern interiors, high-speed WiFi, and premium facilities in one of Dubai's most vibrant areas.",
    features: ["Waterfront", "Premium Location", "Nightlife"],
    area: "Dubai Marina",
    nearbyUniversities: ["Dubai Marina Campus", "SP Jain School"],
  },
  {
    name: "JLT (Jumeirah Lake Towers)",
    image: locationJlt,
    description: "Bright, fully furnished apartments near metro stations and universities.",
    features: ["Lake View", "Metro Access", "Parks"],
    area: "JLT",
    nearbyUniversities: ["Murdoch University Dubai", "BITS Pilani Dubai"],
  },
  {
    name: "Mall of the Emirates",
    image: locationMoe,
    description: "Comfort, security, and convenience combined for student living.",
    features: ["Shopping", "Entertainment", "Central"],
    area: "Al Barsha",
    nearbyUniversities: ["University of Wollongong", "Middlesex University Dubai"],
  },
  {
    name: "Ibn Battuta",
    image: locationIbn,
    description: "Fully furnished apartments designed for focused and peaceful student life.",
    features: ["Quiet Area", "Near Mall", "Affordable"],
    area: "Jebel Ali",
    nearbyUniversities: ["Heriot-Watt University Dubai", "Amity University Dubai"],
  },
  {
    name: "Academic City",
    image: locationAcademic,
    description: "Close to major universities with flexible sharing options and modern design.",
    features: ["Near Universities", "Student Hub", "Modern"],
    area: "Academic City",
    nearbyUniversities: ["University of Birmingham Dubai", "Manipal Academy", "Amity University"],
  },
];

const dubaiAreas = [
  "All Areas",
  "Al Barsha",
  "Dubai Marina",
  "JLT",
  "Jebel Ali",
  "Academic City",
];

export default function Apartments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas");

  const filteredLocations = useMemo(() => {
    return apartmentLocations.filter((apt) => {
      const matchesSearch =
        apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.nearbyUniversities.some((uni) =>
          uni.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesArea = selectedArea === "All Areas" || apt.area === selectedArea;
      return matchesSearch && matchesArea;
    });
  }, [searchQuery, selectedArea]);

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dubai Marina Apartments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          {/* Breadcrumb */}
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
            <span className="text-white/90 text-sm font-medium">6 Prime Locations</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Explore Our <span className="text-secondary">Student Apartments</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Fully furnished, secure one-bedroom apartments across Dubai — designed exclusively for students.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-muted border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by location, area, or university..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
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

            {/* Area Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {dubaiAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedArea === area
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border hover:border-primary/50"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
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
              Each location offers the same premium amenities and comfort. Hover over cards to see room configurations.
            </p>
          </div>

          {filteredLocations.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredLocations.map((apt) => (
                <LocationHoverGallery
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
                onClick={() => {
                  setSearchQuery("");
                  setSelectedArea("All Areas");
                }}
                className="mt-4 px-6 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
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

