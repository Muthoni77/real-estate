import {  Shield, Wifi, Dumbbell,  Star, ChevronRight, Phone, Mail,  CheckCircle2, Waves, Flame, CircleDot } from "lucide-react";

// Import images
import heroImage from "../assets/hero-dubai.jpg";
import apartment1 from "../assets/apartment-1.jpg";
import apartment2 from "../assets/apartment-2.jpg";
import apartment3 from "../assets/apartment-3.jpg";
import apartment4 from "../assets/apartment-4.jpg";
import apartment5 from "../assets/apartment-5.jpg";
import poolImage from "../assets/amenity-pool.jpg";
import gymImage from "../assets/amenity-gym.jpg";
import dubaiMarina from "../assets/dubai-marina.jpg";
import {ApartmentCarousel}  from "../components/ApartmentCarousel";

const locations = [
  { name: "Al Barsha Heights (Tecom)", distance: "5 min to metro", image: apartment1 },
  { name: "Dubai Marina", distance: "2 min to metro", image: dubaiMarina },
  { name: "JLT", distance: "Walking distance to JLT metro", image: apartment2 },
  { name: "Mall of the Emirates", distance: "3 min to metro", image: apartment3 },
  { name: "Ibn Battuta", distance: "3 min to metro", image: apartment4 },
  { name: "Academic City", distance: "4 min to metro", image: apartment5 },
];

// const amenities = [
//   { name: "Swimming Pool", description: "Relax and unwind after classes", icon: Waves, image: poolImage },
//   { name: "Fully Equipped Gym", description: "Stay fit and active", icon: Dumbbell, image: gymImage },
//   { name: "Sauna", description: "Recharge after a busy day", icon: Flame, image: null },
//   { name: "Basketball Court", description: "Recreation and sports on-site", icon: CircleDot, image: null },
// ];

const galleryImages = [
  { src: apartment1, title: "Premium Bedroom", category: "Bedroom" },
  { src: apartment2, title: "Living Area", category: "Living Room" },
  { src: apartment3, title: "Modern Kitchen", category: "Kitchen" },
  { src: apartment4, title: "Luxury Bathroom", category: "Bathroom" },
  { src: apartment5, title: "Study Space", category: "Study" },
  { src: poolImage, title: "Swimming Pool", category: "Amenities" },
];

const testimonials = [
  { name: "Sarah M.", university: "University of Dubai", text: "Living here has made my university life comfortable and hassle-free! The apartment is fully furnished, clean, and close to my campus. Highly recommend it for any student." },
  { name: "Ahmed R.", university: "Jumeirah University", text: "Safe, clean, and convenient! The hostel's amenities, like the gym and swimming pool, make it feel like a mini campus. The team is very responsive and helpful." },
  { name: "Leila K.", university: "Dubai Marina Campus", text: "I love the flexible sharing options. I live with two roommates, and the environment is friendly and secure. The location is perfect — just a short walk to the metro." },
  { name: "Mohammed S.", university: "Academic City", text: "The virtual tour helped me choose my apartment confidently. Everything promised was delivered — clean, fully equipped, and all bills included. Great experience!" },
];

export default function LandingPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
            <span className="text-white text-sm font-medium">Student-Only Living in Dubai</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tight leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Premium Student-Only
            <span className="block text-secondary">Hostel Apartments</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/85 font-body animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Fully furnished one-bedroom apartments near metro stations and universities.
            Starting from <span className="text-secondary font-semibold">AED 2,700/month</span> — all bills included.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
         
            <a href="/request">
  <button className="px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
    Request a Hostel
  </button>
</a>

     <a href="/request" className="px-8 py-4 rounded-xl border-2 border-white/40 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              Book a Virtual Tour
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-secondary">500+</p>
              <p className="text-white/70 text-sm mt-1">Happy Students</p>
            </div>
            <div className="text-center border-x border-white/20">
              <p className="text-3xl md:text-4xl font-display font-bold text-secondary">6</p>
              <p className="text-white/70 text-sm mt-1">Prime Locations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-secondary">4.9</p>
              <p className="text-white/70 text-sm mt-1">Rating</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-light-grey">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">About Us</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary leading-tight">
                Designed Exclusively for Students
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Modern, secure, and fully furnished one-bedroom hostel apartments designed 
                exclusively for students. Conveniently located near universities and metro stations. 
                Peaceful environment with all utilities included.
              </p>
              
              <div className="mt-8 space-y-4">
                {["All utilities & WiFi included", "24/7 maintenance support", "Flexible payment plans", "Student community events"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={apartment2} 
                alt="Luxury apartment interior" 
                className="rounded-3xl shadow-elevated w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-elevated">
                <p className="text-4xl font-display font-bold text-secondary">15+</p>
                <p className="text-sm mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Gallery</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Explore Your Student Apartment
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Take a virtual walkthrough of our fully furnished one-bedroom apartments. Each apartment is designed for comfort, convenience, and student-friendly living.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer hover-lift ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? 'h-[300px] md:h-full' : 'h-[200px] md:h-[250px]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-secondary text-xs font-medium uppercase tracking-wider">{image.category}</span>
                  <p className="text-white font-display text-lg">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-light-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Locations</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
              Prime Dubai Locations
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              All our apartments are strategically located near metro stations, universities, and key landmarks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <ApartmentCarousel
                key={location.name}
                location={location}
                variant="landing"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Amenities</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Lifestyle & Amenities for Students
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Our student hostel apartments offer premium amenities to ensure a healthy, active, and enjoyable lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Large amenity cards with images */}
            <div className="relative group overflow-hidden rounded-3xl h-[400px]">
              <img src={poolImage} alt="Swimming Pool" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Waves className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-display text-2xl font-semibold">Swimming Pool</h3>
                <p className="text-white/70 mt-2">Relax and unwind after a busy day of classes</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl h-[400px]">
              <img src={gymImage} alt="Fitness Center" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Dumbbell className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-display text-2xl font-semibold">Fully Equipped Gym</h3>
                <p className="text-white/70 mt-2">Stay fit and active with state-of-the-art equipment</p>
              </div>
            </div>
          </div>

          {/* Smaller amenity cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Flame, name: "Sauna", desc: "Recharge after a busy day" },
              { icon: CircleDot, name: "Basketball Court", desc: "Recreation & sports" },
              { icon: Shield, name: "24/7 Security", desc: "Monitored access" },
              { icon: Wifi, name: "High-Speed WiFi", desc: "Fiber optic internet" },
            ].map((item) => (
              <div key={item.name} className="bg-primary-light rounded-2xl p-6 text-center hover:bg-secondary/20 transition-colors">
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-white/60 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-light-grey">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
            Transparent Student Pricing
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Pricing ranges from <span className="text-secondary font-semibold">AED 2,700</span> to <span className="text-secondary font-semibold">AED 9,000</span> per student depending on
            occupancy. All bills included — no hidden costs.
          </p>
          
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { occupancy: "1 Bedroom 4 beds/ 4 students", price: "2,700", popular: false, students: "4" },
              { occupancy: "1 Bedroom 3 beds/ 3 students", price: "3,600", popular: true, students: "3" },
              { occupancy: "1 Bedroom 2 beds/ 2 students", price: "4,750", popular: false, students: "2" },
              { occupancy: "1 Bedroom 1 bed/ 1 student", price: "9,000", popular: false, students: "1" },
            ].map((plan) => (
              <div 
                key={plan.occupancy}
                className={`relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'bg-primary text-white shadow-primary' 
                    : 'bg-card shadow-card border border-border'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className={`text-sm font-medium ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.occupancy}
                </p>
                <p className="mt-4">
                  <span className="text-3xl font-display font-bold">AED {plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>/month</span>
                </p>
                <ul className={`mt-6 space-y-3 text-sm text-left ${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-secondary'}`} />
                    All utilities included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-secondary'}`} />
                    Fully furnished
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-secondary'}`} />
                    Cleaning included
                  </li>
                </ul>
                <a
                  href={`/request?students=${plan.students}`}
                  className={`mt-6 w-full py-3 rounded-xl font-medium transition-all block text-center ${
                    plan.popular 
                      ? 'bg-white text-secondary hover:bg-white/90' 
                      : 'bg-secondary text-white hover:shadow-secondary'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={apartment1} 
                alt="Secure apartment" 
                className="rounded-3xl shadow-elevated w-full h-[500px] object-cover"
              />
            </div>
            
            <div>
              <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Trust & Safety</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Your Safety is Our Priority
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                At our student hostel apartments, the safety, security, and well-being of our residents are our top priority. 
                We ensure a worry-free living environment for both students and parents.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["24/7 Security", "CCTV Monitoring", "Controlled Access", "Emergency Support", "Secure WiFi", "Parental Assurance"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-muted rounded-xl p-4">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-light-grey">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
              What Our Students Say
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Hear directly from students who have experienced comfortable, secure, and fully furnished living in our hostel apartments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover-lift">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary" fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0  bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/90" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Ready to Find Your
            <span className="block text-secondary">Student Home?</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
            Join 500+ students who have already made our residences their home in Dubai.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request"
              className="px-8 py-4 rounded-xl text-lg bg-secondary text-cream font-medium hover:bg-secondary/90 transition"
            >
              Request a Hostel
            </a>
            <a href="/request" className="px-8 py-4 rounded-xl border-2 border-white/40 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300">
              Book a Virtual Tour
            </a>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70">
            <a href="tel:+971545594940" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-5 h-5" />
              <span>+971 54 559 4940</span>
            </a>
            <a href="mailto:info@dubaistudenthostels.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@dubaistudenthostels.com</span>
            </a>
          </div>
        </div>
      </section>

      
    </main>
  );
}

