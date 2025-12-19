import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Apartments", href: "/apartments" },
   { label: "Virtual Tours", href: "/virtual-tours" },
  { label: "Amenities", href: "/amenities" },
  { label: "FAQs", href: "/faqs" },
  { label: "Trust & Safety", href: "/trust-safety" },
];

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);
const location = useLocation();
const [isScrolledUp, setIsScrolledUp] = useState(false);
// const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
    const currentY = window.scrollY;
    setIsScrolledUp(currentY < lastY && currentY > 10);
    lastY = currentY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
  <nav
  className={`w-full sticky top-0 z-50 transition-colors duration-300 ${
    isScrolledUp
      ? "bg-white border-b border-gray-200 shadow-sm"
      : "bg-background/95 backdrop-blur-sm border-b border-border"
  }`}
>

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
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
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
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition "
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, pointerEvents: "none" }}
            animate={{ height: "auto", opacity: 1, pointerEvents: "auto" }}
            exit={{ height: 0, opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[100] bg-white text-black">

<div className="flex items-center justify-between px-6 pt-6">
  {/* Logo (optional,  */}
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
      <span className="text-white font-bold text-sm">SH</span>
    </div>
    <span className="font-semibold text-base">Student Hostels</span>
  </div>

  {/* Close button */}
  <button
    onClick={() => setMenuOpen(false)}
    aria-label="Close menu"
    className="p-2 rounded-lg hover:bg-gray-100 transition"
  >
    <X className="w-6 h-6 text-black" />
  </button>
</div>

            <div className="mt-6 px-6 pb-6 flex flex-col gap-1">

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`py-3 px-4 rounded-lg transition ${location.pathname === link.href
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border mt-2">
                <a
                  href="tel:+971545594940"
                  className="flex items-center gap-2 py-3 px-4 text-gray-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>+971 54 559 4940</span>
                </a>
                <Link
                  to="/request"
                  className="block text-center py-3 rounded-xl bg-primary text-white font-medium mt-2"
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

