import { useState } from "react";
import { Users, Luggage, Fuel, Star, ShieldCheck, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";

type Vehicle = {
  id: string;
  name: string;
  type: string;
  seats: number;
  luggage: number;
  fuel: string;
  transmission: string;
  price: number;
  originalPrice: number;
  baseKms: number;
  baseHours: number;
  extraKmRate: number;
  rating: number;
  reviews: number;
  img: string;
  badges: string[];
  features: string[];
  available: boolean;
};

const fleetData: Vehicle[] = [
  {
    id: "1",
    name: "Wagon R or equivalent",
    type: "Hatchback",
    seats: 4,
    luggage: 1,
    fuel: "CNG",
    transmission: "Manual",
    price: 999,
    originalPrice: 1150,
    baseKms: 40,
    baseHours: 4,
    extraKmRate: 15,
    rating: 4.4,
    reviews: 150,
    img: "https://i.pinimg.com/736x/69/ba/7f/69ba7f56f6a42e56efcb1df92c7b345d.jpg",
    badges: ["Best Price", "CNG Saver", "Free Cancellation"],
    features: ["AC", "CNG", "4 Seat"],
    available: true,
  },
  {
    id: "2",
    name: "Hyundai i10",
    type: "Hatchback",
    seats: 4,
    luggage: 1,
    fuel: "Petrol",
    transmission: "Manual",
    price: 1049,
    originalPrice: 1200,
    baseKms: 40,
    baseHours: 4,
    extraKmRate: 16,
    rating: 4.5,
    reviews: 170,
    img: "https://i.pinimg.com/736x/9e/96/fd/9e96fd0349c1ee7a0c7195d44ccec378.jpg",
    badges: ["Compact Comfort", "City Ride"],
    features: ["AC", "Petrol", "4 Seat"],
    available: true,
  },
  {
    id: "3",
    name: "Dzire",
    type: "Sedan",
    seats: 4,
    luggage: 2,
    fuel: "CNG",
    transmission: "Manual",
    price: 1399,
    originalPrice: 1550,
    baseKms: 40,
    baseHours: 4,
    extraKmRate: 18,
    rating: 4.7,
    reviews: 240,
    img: "https://i.pinimg.com/736x/b9/83/19/b98319e577ef9da3df8d7e4949b859c7.jpg",
    badges: ["Top Rated", "Comfort Ride", "Free Cancellation"],
    features: ["AC", "CNG", "4 Seat"],
    available: true,
  },
  {
    id: "4",
    name: "Innova Crysta",
    type: "SUV",
    seats: 7,
    luggage: 4,
    fuel: "Diesel",
    transmission: "Manual",
    price: 2499,
    originalPrice: 2800,
    baseKms: 80,
    baseHours: 8,
    extraKmRate: 22,
    rating: 4.9,
    reviews: 420,
    img: "https://i.pinimg.com/736x/b3/0e/8f/b30e8ffd409781768e031bcb7e79f165.jpg",
    badges: ["Best Seller", "Premium Comfort", "Family Choice"],
    features: ["AC", "Diesel", "7 Seat"],
    available: true,
  },
  {
    id: "5",
    name: "Tata Nexon EV",
    type: "Electric",
    seats: 5,
    luggage: 2,
    fuel: "Electric",
    transmission: "Automatic",
    price: 1899,
    originalPrice: 2100,
    baseKms: 60,
    baseHours: 6,
    extraKmRate: 15,
    rating: 4.6,
    reviews: 130,
    img: "https://i.pinimg.com/736x/08/ad/ca/08adca139d73c867e65607f7f024ffd4.jpg",
    badges: ["Eco Friendly", "Silent Ride", "Tech Loaded"],
    features: ["AC", "Electric", "5 Seat"],
    available: true,
  },
];

export default function Fleet() {
  const [filter, setFilter] = useState("All");

  const filteredFleet =
    filter === "All"
      ? fleetData
      : fleetData.filter((v) => v.type === filter);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Our Fleet</h1>
        <p className="text-gray-500 mt-2">
          Choose from economy to luxury vehicles
        </p>
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto flex gap-4 mb-8">
        {["All", "Hatchback", "Sedan", "SUV", "Electric"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === cat
                ? "bg-black text-white"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredFleet.map((car) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group"
          >
            {/* IMAGE */}
            <div className="relative h-60 overflow-hidden bg-gray-50">
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* STATUS BADGE */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    car.available
                      ? "bg-green-500 text-white shadow-lg shadow-green-200"
                      : "bg-red-500 text-white shadow-lg shadow-red-200"
                  }`}
                >
                  {car.available ? "Available Now" : "Currently Booked"}
                </span>
              </div>

              {/* RATING FLOATING */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl shadow-lg border border-white flex items-center gap-1.5">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-black text-gray-900">{car.rating}</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase">({car.reviews})</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">{car.name}</h2>
              </div>
              <p className="text-sm font-bold text-purple-600 uppercase tracking-widest flex items-center gap-2">
                {car.type} <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> {car.transmission}
              </p>

              {/* SPECS */}
              <div className="grid grid-cols-3 gap-4 mt-8 py-6 border-y border-gray-50">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600">
                    <Users size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{car.seats} Seats</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Luggage size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{car.luggage} Bags</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600">
                    <Fuel size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{car.fuel}</span>
                </div>
              </div>

              {/* FEATURES */}
              <div className="flex flex-wrap gap-2 mt-6">
                {car.features.map((f, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-[10px] font-black text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100"
                  >
                    <Check size={10} className="text-green-500" /> {f.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* PRICE & ACTION */}
              <div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-gray-900 tracking-tighter">₹{car.price}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">/pkg</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">
                    {car.baseHours}H / {car.baseKms}KM • ₹{car.extraKmRate}/KM EXTRA
                  </p>
                </div>

                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-purple-100 transition-all active:scale-95">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}