import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Apartments", href: "/apartments" },
  { label: "Amenities", href: "/amenities" },
  { label: "FAQs", href: "/faqs" },
  { label: "Trust & Safety", href: "/trust-safety" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-sm">SH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Student Hostels
              </span>
              <span className="text-xs text-muted-foreground">Dubai</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+971545594940"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <Phone className="w-4 h-4" />
              <span>+971 54 559 4940</span>
            </a>
            <Link
              to="/request"
              className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition shadow-sm"
            >
              Request a Hostel
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="menu"
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden fixed top-[73px] left-0 right-0 z-40"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`py-3 px-4 rounded-lg transition ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border mt-2">
                <a
                  href="tel:+971545594940"
                  className="flex items-center gap-2 py-3 px-4 text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>+971 54 559 4940</span>
                </a>
                <Link
                  to="/request"
                  className="block text-center py-3 rounded-xl bg-primary text-primary-foreground font-medium mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Request a Hostel
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

