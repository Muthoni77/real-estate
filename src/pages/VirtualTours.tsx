import { Home, ChevronRight, Play, MapPin, Compass, Eye, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/dubai-marina.webp";
import apartment1 from "../assets/apartment-1.webp";
import apartment2 from "../assets/apartment-2.webp";
import apartment3 from "../assets/apartment-3.webp";
import apartment5 from "../assets/apartment-5.webp";
import interiorSitting from "../assets/interior-sitting.webp";
import interiorKitchen from "../assets/interior-kitchen.webp";
import interiorBalcony from "../assets/interior-balcony.webp";
import interiorWashroom from "../assets/interior-washroom.webp";
import poolImage from "../assets/amenity-pool.webp";
import gymImage from "../assets/amenities/gym-1.webp";
import jltVideo from "../assets/JLT.mp4";
import marinaVideo from "../assets/marina.mp4";
import barsharVideo from "../assets/barshar.mp4";
import ibnVideo from "../assets/ibn.mp4";
import { useModal } from "../components/context/ModalContext";
import { useState } from "react";
import VideoModal from "../components/Forms/VideoModal";


const tourLocations = [
  {
    name: "Al Barsha Heights (Tecom)",
    image: apartment1,
    videoPlaceholder: true,
    video: barsharVideo,
    features: ["1 Bedroom", "4 Beds Max", "Near Metro"],
  },
  {
    name: "Dubai Marina",
    image: heroImage,
    videoPlaceholder: true,
    video: marinaVideo,
    features: ["Waterfront View", "Premium Location", "Modern Design"],
  },
  {
    name: "JLT",
    image: apartment2,
    videoPlaceholder: true,
    video: jltVideo,
    features: ["Lake View", "Metro Access", "Parks Nearby"],
  },
  {
    name: "Academic City",
    image: apartment5,
    videoPlaceholder: true,
    video: ibnVideo,
    features: ["University Hub", "Student Community", "Modern Facilities"],
  },
];

const interiorGallery = [
  { image: interiorSitting, label: "Living Room" },
  { image: interiorKitchen, label: "Kitchen" },
  { image: interiorBalcony, label: "Balcony" },
  { image: interiorWashroom, label: "Bathroom" },
  { image: poolImage, label: "Swimming Pool" },
  { image: gymImage, label: "Fitness Center" },
];



export default function VirtualTours() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
const [activeVideo, setActiveVideo] = useState<string | null>(null);
const [poster, setPoster] = useState<string | undefined>(undefined);

const openVideo = (video: string, posterImg?: string) => {
  setActiveVideo(video);
  setPoster(posterImg);
  setIsVideoOpen(true);
};

const closeVideo = () => {
  setIsVideoOpen(false);
  setActiveVideo(null);
  setPoster(undefined);
};

    // callback
    const { openCallback } = useModal();
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={apartment3}
            alt="Virtual Tours"
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
            <span className="text-secondary font-medium">Virtual Tours</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/20 mb-6">
            <Camera className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-sm font-medium">360° Virtual Experience</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Virtual Tours <span className="text-secondary"> & Gallery</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Explore our student apartments from anywhere in the world. Take a virtual walkthrough before you book.
          </p>
        </div>
      </section>

      {/* Tour Types */}
      <section className="py-16 bg-light-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 text-center shadow-card hover-lift">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">360° Tours</h3>
              <p className="text-muted-foreground text-sm">
                Navigate through every room with our immersive 360-degree virtual tours.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center shadow-card hover-lift">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Video Walkthroughs</h3>
              <p className="text-muted-foreground text-sm">
                Watch guided video tours of our apartments and amenities.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center shadow-card hover-lift">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Live Tours</h3>
              <p className="text-muted-foreground text-sm">
                Book a live video call tour with our team for real-time Q&A.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Explore Locations</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Take a Virtual Tour
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Click on any location to start exploring. Each tour includes living areas, bedrooms, kitchen, and amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tourLocations.map((location) => (
              <div
                key={location.name}
                 className="group relative overflow-hidden rounded-3xl cursor-pointer hover-lift"
  onClick={() => openVideo(location.video, location.image)}
  aria-label={`Play ${location.name} virtual tour`}
                
              >
                <div className="aspect-video">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-secondary text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Dubai, UAE</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-white mb-3">
                      {location.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 360 Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-white text-xs font-semibold">
                    360° Tour
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Gallery</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Interior & Amenities
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              High-quality images of our apartment interiors and shared amenities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interiorGallery.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? "h-[300px] md:h-full" : "h-[200px] md:h-[250px]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-display text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Locations</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Interactive Map
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore our apartment locations across Dubai. Click on markers to view details.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-3xl overflow-hidden bg-primary text-white h-[500px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground max-w-md">
                We're building an interactive map to help you explore our locations, nearby universities, metro stations, and landmarks.
              </p>
              <Link
                to="/apartments"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-secondary text-white font-medium hover:bg-secondary/90 transition"
              >
                View All Locations
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
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
            <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to Find Your Student Home?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Submit a request and our team will match you with the perfect apartment.
          </p>
          
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
             <Link
              to="/request"
              className="px-8 py-3 rounded-xl bg-secondary text-white font-medium hover:bg-background/90 transition"
            >
              Request a Hostel
            </Link>
            <button
             onClick={openCallback}
              className="px-8 py-3 rounded-xl bg-background text-secondary font-medium hover:bg-primary/90 transition"
            >
              Request a Call Back
            </button>
          
          </div>
        </div>
      </section>
        {/* Video modal (mounted once) */}
      <VideoModal
        isOpen={isVideoOpen}
        videoSrc={activeVideo}
        poster={poster}
        onClose={closeVideo}
      />
    </main>
  );
}
