const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">CH</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">CAMPUS HOMES</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Helping students and teachers find their perfect home near campus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#listings" className="hover:text-primary-foreground transition-colors">Browse Listings</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-medium mb-4">Campus Locations</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Nairobi - Karen Campus</li>
              <li>Juja - Main Campus</li>
              <li>Thika - Town Campus</li>
              <li>Eldoret - Moi University</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>info@campushomes.co.ke</li>
              <li>+254 700 123 456</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © {currentYear} Campus Homes — All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
