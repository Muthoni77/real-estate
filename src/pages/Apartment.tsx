import { useState, useMemo } from "react";
import { MapPin, Users, Wifi, Home, ChevronRight, CheckCircle, GraduationCap, Bed, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/dubai-marina.webp";
import { ApartmentCarousel } from "../components/ApartmentCarousel";
import { APARTMENTS } from "../data/apartment";
import { UNIVERSITY_DROPDOWN_OPTIONS } from "../data/university";
import { filterApartmentsByUniversity } from "../utils/filterApartmentsByUniversity";
import { useGroupedApartments } from "../hooks/UseGroupApartment";

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

// const priceByBeds: Record<number, number> = {
//   1: 9000,
//   2: 4750,
//   3: 3600,
//   4: 2700,
// };

export default function Apartments() {
  const [selectedLiving, setSelectedLiving] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedUniversity, setSelectedUniversity] = useState("all"); // lowercase for consistency

  const effectiveUniversity =
  selectedUniversity === "other" ? "all" : selectedUniversity;

const filteredLocations = useMemo(
  () => filterApartmentsByUniversity(effectiveUniversity),
  [effectiveUniversity]
);


  const groupedApartments = useGroupedApartments(filteredLocations, selectedUniversity);

  const hasActiveFilters =
    selectedLiving !== "all" || selectedPrice !== "all" || selectedUniversity !== "all";

  const clearFilters = () => {
    setSelectedLiving("all");
    setSelectedPrice("all");
    setSelectedUniversity("all");
  };

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Dubai Marina Apartments" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" /> <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Apartments</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <CheckCircle className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-sm font-medium">{APARTMENTS.length} Prime Locations</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Explore Our <span className="text-secondary">Student Apartments</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Fully furnished, secure one-bedroom apartments across Dubai — designed exclusively for students.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Header */}
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground">Find your perfect student accommodation</p>
          </div>

          {/* Living Preference */}
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
                    selectedLiving === pref.id ? "bg-secondary text-white shadow-md" : "bg-muted hover:bg-muted/80 text-foreground"
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

          {/* Price & University */}
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
                      selectedPrice === range.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* University */}
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
                  {UNIVERSITY_DROPDOWN_OPTIONS.map((uni) => (
                    <option key={uni.value} value={uni.value}>
                      {uni.label}
                    </option>
                  ))}
                </select>
                <GraduationCap className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

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
          <div className="mt-6 pt-4 border-t border-border text-center">
            <span className="text-sm text-muted-foreground">
              {filteredLocations.length} apartments available
          {selectedUniversity !== "all" &&
 selectedUniversity !== "other" &&
 ` near ${selectedUniversity}`}

            </span>
          </div>
        </div>
      </section>
       {/* Features Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">Up to 4 Students</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">All Bills Included</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
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
            {selectedUniversity === "all" || selectedUniversity === "other"
  ? "Choose your location"
  : `${filteredLocations.length} apartments near your university`}

            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Each location offers the same premium amenities. Hover on bed options to see pricing and interiors.
            </p>
          </div>

          {selectedUniversity === "all" ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredLocations.map((apt) => (
                <ApartmentCarousel key={apt.name} location={apt} variant="apartments" />
              ))}
            </div>
          ) : (
            <>
              {groupedApartments.recommended.length > 0 && (
                <>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">Recommended for you</h3>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {groupedApartments.recommended.map((apt) => (
                      <ApartmentCarousel key={apt.name} location={apt} variant="apartments" />
                    ))}
                  </div>
                </>
              )}

              {groupedApartments.nearby.length > 0 && (
                <>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">Near your university</h3>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {groupedApartments.nearby.map((apt) => (
                      <ApartmentCarousel key={apt.name} location={apt} variant="apartments" />
                    ))}
                  </div>
                </>
              )}

              {groupedApartments.other.length > 0 && (
                <>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">Other locations</h3>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {groupedApartments.other.map((apt) => (
                      <ApartmentCarousel key={apt.name} location={apt} variant="apartments" />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

