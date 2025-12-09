export interface House {
  id: number;
  type: string;
  location: string;
  price: number;
  capacity: number;
  image: string;
  description?: string;
}

export const houses: House[] = [
  {
    id: 1,
    type: "Studio Apartment",
    location: "Nairobi - Karen Campus",
    price: 15000,
    capacity: 1,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
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
