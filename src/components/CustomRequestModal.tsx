import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CustomRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomRequestModal = ({ isOpen, onClose }: CustomRequestModalProps) => {
  const [prefLocation, setPrefLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!prefLocation && !budget && !requirements) return;
    setLoading(true);
    setSuccess(null);
    setTimeout(() => {
      setLoading(false);
      setSuccess("We received your request — we'll be in touch within 24 hours.");
      setPrefLocation("");
      setBudget("");
      setRequirements("");
    }, 1200);
  };

  const handleReset = () => {
    setPrefLocation("");
    setBudget("");
    setRequirements("");
    setSuccess(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-card w-full max-w-md rounded-2xl shadow-card p-6 relative border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={onClose}
              aria-label="close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <h3 className="text-xl font-bold mb-2 text-foreground">Custom House Request</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Tell us what you need and we'll find the best options for you.
            </p>

            <div className="flex flex-col gap-3">
              <input
                value={prefLocation}
                onChange={(e) => setPrefLocation(e.target.value)}
                className="border border-border rounded-lg p-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Preferred location (e.g. Juja, Karen)"
              />
              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="border border-border rounded-lg p-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Budget (KSh)"
              />
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="border border-border rounded-lg p-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Requirements (rooms, close to campus, gender-specific, etc.)"
                rows={4}
              />

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
                <button
                  onClick={handleReset}
                  className="py-3 px-4 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Reset
                </button>
              </div>

              {success && (
                <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                  {success}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomRequestModal;
