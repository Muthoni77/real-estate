import  { useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Bed,
  X,
  Menu,
  MapPin,
  Heart,
} from "lucide-react";

interface House {
  id: number;
  type: string;
  location: string;
  price: number;
  capacity: number;
  image: string;
  description?: string;
}

const houses: House[] = [
  {
    id: 1,
    type: "Studio Apartment",
    location: "Nairobi - Karen Campus",
    price: 15000,
    capacity: 1,
    image:
      "https://images.unsplash.com/photo-1600585154350-22f129f57f5d?auto=format&fit=crop&w=1400&q=80",
    description: "Cozy studio close to campus with private kitchenette and fast Wi‑Fi.",
  },
  {
    id: 2,
    type: "1 Bedroom",
    location: "Juja - Main Campus",
    price: 20000,
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
    description: "Spacious one-bedroom with study nook and shared garden space.",
  },
  {
    id: 3,
    type: "Bedsitter",
    location: "Thika - Town Campus",
    price: 10000,
    capacity: 1,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    description: "Affordable bedsitter ideal for single students — utilities included.",
  },
];

export default function HomePage(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [customModalOpen, setCustomModalOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Custom request form state
  const [prefLocation, setPrefLocation] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [requirements, setRequirements] = useState<string>("");
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [requestSuccess, setRequestSuccess] = useState<string | null>(null);

  const filtered = houses.filter(
    (h) =>
      h.location.toLowerCase().includes(query.toLowerCase()) ||
      h.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 900);
  };

  const handleBook = (house: House) => {
    // mock booking
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Booked ${house.type} at ${house.location} for KSh ${house.price}`);
      setSelectedHouse(null);
    }, 900);
  };

  const submitCustomRequest = () => {
    if (!prefLocation && !budget && !requirements) return;
    setRequestLoading(true);
    setRequestSuccess(null);
    setTimeout(() => {
      setRequestLoading(false);
      setRequestSuccess("We received your request — we'll be in touch within 24 hours.");
      setPrefLocation("");
      setBudget("");
      setRequirements("");
    }, 1200);
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-white to-black/80 text-gray-900 flex flex-col">
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-600 to-black flex items-center justify-center text-white font-bold">
            CH
          </div>
          <div>
            <h1 className="text-lg font-bold text-pink-700">Campus Homes</h1>
            <p className="text-xs text-gray-600">Student & Teacher Housing</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <a className="hover:text-pink-600 cursor-pointer">Home</a>
          <a className="hover:text-pink-600 cursor-pointer">Locations</a>
          <button
            onClick={() => setCustomModalOpen(true)}
            className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-90"
          >
            Custom Request
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen((s) => !s)} aria-label="menu">
            <Menu />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white/80 backdrop-blur-md md:hidden px-6 py-4"
          >
            <div className="flex flex-col gap-3">
              <a className="hover:text-pink-600">Home</a>
              <a className="hover:text-pink-600">Locations</a>
              <button
                onClick={() => {
                  setCustomModalOpen(true);
                  setMenuOpen(false);
                }}
                className="px-4 py-2 bg-black text-white rounded-lg"
              >
                Custom Request
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <header className="max-w-5xl mx-auto text-center py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Find Your Perfect Student Home</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">Affordable, safe, and campus-friendly housing — search by campus or create a custom request and we'll find a match for you.</p>
      </header>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mb-8 relative px-4 w-full">
        <Search className="absolute left-6 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search campus or location... e.g. Karen, Juja, Thika"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 py-3 rounded-xl shadow-sm border focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <button
          onClick={handleSearch}
          className="mt-3 w-full py-3 bg-pink-700 text-white rounded-xl hover:bg-pink-800 font-medium"
        >
          Search
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="flex justify-center py-6">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-10 h-10 border-4 border-pink-600 border-t-transparent rounded-full" />
        </div>
      )}

      {/* LIST */}
      <main className="flex-1">
        <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-12">
          {!loading && filtered.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No results found. Try searching a nearby campus or open a custom request.</p>
            </div>
          )}

          {!loading && filtered.map((h) => (
            <motion.article key={h.id} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer" onClick={() => setSelectedHouse(h)}>
              <img src={h.image} alt={h.type} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{h.type}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-2"><MapPin className="w-4 h-4" />{h.location}</p>
                <p className="mt-2 font-bold text-pink-600">KSh {h.price.toLocaleString()}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <Bed className="w-4 h-4" /> <span>{h.capacity} person{h.capacity > 1 ? 's' : ''}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* CUSTOM REQUEST PROMO */}
        <section className="max-w-4xl mx-auto mt-6 bg-white/40 backdrop-blur-xl p-6 rounded-3xl shadow-lg text-center mb-12 px-4">
          <h4 className="text-2xl font-bold mb-2">Don't see a match? Make a custom request</h4>
          <p className="text-gray-700 mb-4">Tell us your location, budget and requirements — we'll match you with available properties.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-black text-white rounded-xl" onClick={() => setCustomModalOpen(true)}>Open Request</button>
            <button className="px-6 py-3 border border-pink-600 rounded-xl text-pink-600" onClick={() => alert('We will show more campus locations soon!')}>View Locations</button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white/60 backdrop-blur-md py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-600 to-black flex items-center justify-center text-white font-bold">CH</div>
            <div>
              <div className="font-semibold">Campus Homes</div>
              <div className="text-xs text-gray-600">Helping students & teachers find homes</div>
            </div>
          </div>

          <div className="text-sm text-gray-700">© {new Date().getFullYear()} Campus Homes — All rights reserved</div>
        </div>
      </footer>

      {/* CUSTOM REQUEST MODAL */}
      <AnimatePresence>
        {customModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">
              <button className="absolute top-3 right-3" onClick={() => setCustomModalOpen(false)} aria-label="close">
                <X />
              </button>

              <h3 className="text-xl font-bold mb-2">Custom House Request</h3>
              <p className="text-sm text-gray-600 mb-4">Tell us what you need and we'll find the best options for you.</p>

              <div className="flex flex-col gap-3">
                <input value={prefLocation} onChange={(e) => setPrefLocation(e.target.value)} className="border rounded-lg p-3" placeholder="Preferred location (e.g. Juja, Karen)" />
                <input value={budget} onChange={(e) => setBudget(e.target.value)} className="border rounded-lg p-3" placeholder="Budget (KSh)" />
                <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} className="border rounded-lg p-3" placeholder="Requirements (rooms, close to campus, gender-specific, etc.)" rows={4} />

                <div className="flex items-center gap-3">
                  <button onClick={submitCustomRequest} className="flex-1 py-3 bg-pink-700 text-white rounded-lg">{requestLoading ? 'Submitting...' : 'Submit Request'}</button>
                  <button onClick={() => { setPrefLocation(''); setBudget(''); setRequirements(''); }} className="py-3 px-4 border rounded-lg">Reset</button>
                </div>

                {requestSuccess && <div className="text-sm text-green-600">{requestSuccess}</div>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HOUSE DETAIL MODAL */}
      <AnimatePresence>
        {selectedHouse && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
              <button className="absolute top-3 right-3" onClick={() => setSelectedHouse(null)} aria-label="close">
                <X />
              </button>

              <img src={selectedHouse.image} alt={selectedHouse.type} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-1">{selectedHouse.type}</h3>
              <p className="text-sm text-gray-600 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" />{selectedHouse.location}</p>
              <p className="text-gray-700 mb-3">{selectedHouse.description}</p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Capacity</div>
                  <div className="font-semibold">{selectedHouse.capacity} person{selectedHouse.capacity > 1 ? 's' : ''}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="font-bold text-pink-600 text-lg">KSh {selectedHouse.price.toLocaleString()}</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={() => handleBook(selectedHouse)} className="flex-1 py-3 bg-pink-700 text-white rounded-lg">{loading ? 'Processing...' : 'Book This Place'}</button>
                <button onClick={() => alert('Saved to favourites (mock)')} className="py-3 px-4 border rounded-lg flex items-center gap-2"><Heart /> Save</button>
              </div>
              
            </motion.div>
          </motion.div>
        
        )}
      </AnimatePresence>
    </div>
    
  );
}

