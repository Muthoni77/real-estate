const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
              About Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
               Modern, secure, and fully furnished one-bedroom hostel apartments designed
            exclusively for students. Peaceful living, convenient locations, and all
            utilities included.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
         Enjoy a vibrant student community with thoughtfully designed common areas, 
  study spaces, and social lounges. With high-speed internet, on-site maintenance, 
  and flexible lease options, your living experience is convenient, comfortable, 
  and tailored to support your academic journey.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-light text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">years of experience</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">successful placements</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
              alt="Modern apartment interior"
              className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
