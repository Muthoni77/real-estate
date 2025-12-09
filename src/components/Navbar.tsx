import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onCustomRequest: () => void;
}

const Navbar = ({ onCustomRequest }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Catalog", href: "#listings" },
    { label: "Houses", href: "#listings" },
    { label: "For Rent", href: "#listings" },
  ];

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 lg:px-12 py-4 bg-card border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">CH</span>
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            CAMPUS HOMES
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onCustomRequest}
            className="px-5 py-2 text-sm border border-border rounded-md hover:bg-secondary transition-colors"
          >
            Custom Request
          </button>
          <button className="px-5 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
            Login
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="menu"
          className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-card border-b border-border lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-border" />
              <button
                onClick={() => {
                  onCustomRequest();
                  setMenuOpen(false);
                }}
                className="py-2 text-left text-muted-foreground hover:text-foreground"
              >
                Custom Request
              </button>
              <button className="mt-2 py-2 bg-primary text-primary-foreground rounded-md">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
