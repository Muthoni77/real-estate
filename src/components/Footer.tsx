const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white py-14 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                <span className="text-[var(--color-primary)] font-semibold text-sm">
                  SH
                </span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Student Hostels
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Premium, fully furnished student-only hostel apartments across
              Dubai — secure, comfortable, and designed for student life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/apartments" className="hover:text-white transition">
                  Apartments
                </a>
              </li>
              <li>
                <a href="/amenities" className="hover:text-white transition">
                  Amenities
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-medium mb-4">Locations</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Al Barsha Heights (Tecom)</li>
              <li>Dubai Marina</li>
              <li>JLT</li>
              <li>Academic City</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@studenthostels.ae</li>
              <li>+971 54 559 4940</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/20 text-center text-sm text-white/60">
          © {currentYear} Student Hostels — All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
