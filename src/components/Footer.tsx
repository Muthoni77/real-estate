import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">SH</span>
              </div>
              <span className="font-display text-xl font-semibold text-white">
                Student Hostels
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Premium, fully furnished student-only hostel apartments across Dubai — secure, comfortable, and designed for student life.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Apartments", href: "/apartments" },
                { label: "Amenities", href: "/amenities" },
                { label: "FAQs", href: "/faqs" },
                { label: "Trust & Safety", href: "/trust-safety" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Locations</h4>
            <ul className="space-y-3">
              {[
                "Al Barsha Heights (Tecom)",
                "Dubai Marina",
                "JLT",
                "Mall of the Emirates",
                "Ibn Battuta",
                "Academic City",
              ].map((location) => (
                <li key={location} className="text-white/70">
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@dubaistudenthostels.com"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@dubaistudenthostels.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+971545594940"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+971 54 559 4940</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Dubai, UAE</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Student Hostels — All rights reserved
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
