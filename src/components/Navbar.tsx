import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Apartments", href: "/apartments" },
  { label: "Amenities", href: "/amenities" },
  { label: "FAQs", href: "/faqs" },
  { label: "Trust & Safety", href: "/trust-safety" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <span className="text-white font-semibold text-sm">SH</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Student Hostels
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <a
              href="/request"
              className="px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white text-sm font-medium hover:opacity-90 transition"
            >
              Request a Hostel
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="menu"
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-bg-muted)] transition"
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
            className="lg:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3">
                <a
                  href="/request"
                  className="block text-center py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Request a Hostel
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
