import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, Star, ChevronRight, Filter, Car, Gauge, Fuel, Users, Luggage, ShieldCheck, Zap } from "lucide-react";

/* ================= TYPES ================= */

type VehicleType =
  | "Hatchback"
  | "Sedan"
  | "Sedan-Electric"
  | "SUV"
  | "SUV-Electric-Compact"
  | "SUV-Electric-Luxury"
  | "Van"
  | "Luxury"
  | "Electric";

type FuelType = "Petrol" | "Diesel" | "CNG" | "Electric";

interface FleetVehicle {
  id: string;
  name: string;
  type: VehicleType;
  seats: number;
  luggage: number;
  fuel: FuelType;
  transmission: "Manual" | "Automatic";
  
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
}

/* ================= DATA ================= */
const FLEET: FleetVehicle[] = [


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

  // 🔹 HATCHBACK
  {
    id: "6",
    name: "Swift or equivalent",
    type: "Hatchback",
    seats: 4,
    luggage: 1,
    fuel: "Petrol",
    transmission: "Manual",
    price: 1099,
    originalPrice: 1250,
    baseKms: 40,
    baseHours: 4,
    extraKmRate: 16,
    rating: 4.6,
    reviews: 180,
    img: "https://i.pinimg.com/736x/87/f3/5b/87f35b8481bfbbd231a07d28e263c63c.jpg",
    badges: ["Budget Deal", "Fuel Efficient", "Free Cancellation"],
    features: ["AC", "Petrol", "4 Seat"],
    available: true,
  },
  {
    id: "7",
    name: "Hyundai i20",
    type: "Hatchback",
    seats: 4,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
    price: 1199,
    originalPrice: 1350,
    baseKms: 40,
    baseHours: 4,
    extraKmRate: 17,
    rating: 4.7,
    reviews: 220,
    img: "https://images.unsplash.com/photo-1629005559534-e71542e2a24a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEh5dW5kYWklMjBpMjAlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
    badges: ["Premium Hatchback", "Smooth Ride"],
    features: ["AC", "Music", "4 Seat"],
    available: true,
  },

  // 🔹 SEDAN
  {
    id: "8",
    name: "Honda Amaze",
    type: "Sedan",
    seats: 4,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
    price: 1449,
    originalPrice: 1650,
    baseKms: 40,
    baseHours: 4,
    extraKmRate: 18,
    rating: 4.7,
    reviews: 260,
    img: "https://i.pinimg.com/1200x/77/22/e2/7722e2597650120d676eb7b497ddfd42.jpg",
    badges: ["Comfort Ride", "Best Value"],
    features: ["AC", "Petrol", "4 Seat"],
    available: true,
  },
  {
    id: "9",
    name: "Hyundai Verna",
    type: "Sedan",
    seats: 4,
    luggage: 3,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 1799,
    originalPrice: 2000,
    baseKms: 50,
    baseHours: 5,
    extraKmRate: 20,
    rating: 4.8,
    reviews: 300,
    img: "https://i.pinimg.com/1200x/cd/de/00/cdde00ad6a188f600df7cf96ce4d1204.jpg",
    badges: ["Premium Sedan", "Top Rated"],
    features: ["AC", "Automatic", "4 Seat"],
    available: true,
  },

  // 🔹 SUV
  {
    id: "10",
    name: "Maruti Brezza",
    type: "SUV",
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
    price: 1799,
    originalPrice: 2000,
    baseKms: 60,
    baseHours: 6,
    extraKmRate: 20,
    rating: 4.6,
    reviews: 210,
    img: "https://i.pinimg.com/736x/b2/00/01/b2000145fc14134f20fc8e0e6d6a203e.jpg",
    badges: ["Compact SUV", "Popular Choice"],
    features: ["AC", "Petrol", "5 Seat"],
    available: true,
  },
  {
    id: "11",
    name: "Mahindra XUV700",
    type: "SUV",
    seats: 7,
    luggage: 4,
    fuel: "Diesel",
    transmission: "Automatic",
    price: 2999,
    originalPrice: 3400,
    baseKms: 80,
    baseHours: 8,
    extraKmRate: 25,
    rating: 4.9,
    reviews: 390,
    img: "https://i.pinimg.com/736x/b5/76/0f/b5760fa24140d4141bb436521c6f6acb.jpg",
    badges: ["Top Rated", "Luxury SUV"],
    features: ["AC", "Automatic", "7 Seat"],
    available: true,
  },

  // 🔹 VAN
  {
    id: "12",
    name: "Tempo Traveller 9 Seater",
    type: "Van",
    seats: 9,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Manual",
    price: 3999,
    originalPrice: 4500,
    baseKms: 100,
    baseHours: 10,
    extraKmRate: 28,
    rating: 4.8,
    reviews: 150,
    img: "https://i.pinimg.com/1200x/7b/38/76/7b3876be3fc6eea04711c23cb2174b4d.jpg",
    badges: ["Group Travel", "Best Seller"],
    features: ["AC", "Diesel", "9 Seat"],
    available: true,
  },
  {
    id: "13",
    name: "Tempo Traveller 12 Seater",
    type: "Van",
    seats: 12,
    luggage: 6,
    fuel: "Diesel",
    transmission: "Manual",
    price: 4999,
    originalPrice: 5600,
    baseKms: 120,
    baseHours: 12,
    extraKmRate: 30,
    rating: 4.7,
    reviews: 120,
    img: "https://i.pinimg.com/1200x/49/c5/16/49c51692f832852b0c879f1de90ba3bf.jpg",
    badges: ["Large Group", "Comfort Ride"],
    features: ["AC", "Diesel", "12 Seat"],
    available: true,
  },

  // 🔹 LUXURY
  {
    id: "14",
    name: "BMW 5 Series",
    type: "Luxury",
    seats: 4,
    luggage: 3,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 7999,
    originalPrice: 9000,
    baseKms: 100,
    baseHours: 12,
    extraKmRate: 50,
    rating: 5.0,
    reviews: 95,
    img: "https://i.pinimg.com/236x/87/31/46/8731463048462a2de23d3316fc808da9.jpg",
    badges: ["Elite", "Luxury Pick"],
    features: ["AC", "Sunroof", "Automatic"],
    available: true,
  },
  {
    id: "15",
    name: "Audi A6",
    type: "Luxury",
    seats: 4,
    luggage: 3,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 8299,
    originalPrice: 9500,
    baseKms: 100,
    baseHours: 12,
    extraKmRate: 52,
    rating: 4.9,
    reviews: 88,
    img: "https://i.pinimg.com/1200x/a9/82/52/a982521804be3023aed4443bf2e2c075.jpg",
    badges: ["Executive Ride", "Premium"],
    features: ["AC", "Automatic", "Luxury"],
    available: true,
  },

  // 🔹 ELECTRIC
  {
    id: "16",
    name: "MG ZS EV",
    type: "Electric",
    seats: 5,
    luggage: 3,
    fuel: "Electric",
    transmission: "Automatic",
    price: 2299,
    originalPrice: 2600,
    baseKms: 70,
    baseHours: 7,
    extraKmRate: 18,
    rating: 4.7,
    reviews: 140,
    img: "https://i.pinimg.com/1200x/d5/12/bf/d512bf080175c650d4d37c9337b265dc.jpg",
    badges: ["Eco Luxury", "Silent Ride"],
    features: ["AC", "Electric", "5 Seat"],
    available: true,
  },

  // 🔹 EXTRA (FILLING TO 20)
  {
    id: "17",
    name: "Toyota Fortuner",
    type: "SUV",
    seats: 7,
    luggage: 4,
    fuel: "Diesel",
    transmission: "Automatic",
    price: 3999,
    originalPrice: 4500,
    baseKms: 80,
    baseHours: 8,
    extraKmRate: 30,
    rating: 4.9,
    reviews: 410,
    img: "https://i.pinimg.com/1200x/94/cc/8b/94cc8b5aeb2a015888d8db7cc8656ed6.jpg",
    badges: ["Power SUV", "Premium"],
    features: ["AC", "Automatic", "7 Seat"],
    available: true,
  },
  {
    id: "18",
    name: "Kia Carens",
    type: "SUV",
    seats: 6,
    luggage: 3,
    fuel: "Petrol",
    transmission: "Manual",
    price: 1999,
    originalPrice: 2300,
    baseKms: 60,
    baseHours: 6,
    extraKmRate: 20,
    rating: 4.6,
    reviews: 160,
    img: "https://i.pinimg.com/736x/3a/8f/49/3a8f4965003a43180ba20603616f983d.jpg",
    badges: ["Family Car", "Comfort"],
    features: ["AC", "Petrol", "6 Seat"],
    available: true,
  },
  {
    id: "19",
    name: "Skoda Slavia",
    type: "Sedan",
    seats: 4,
    luggage: 3,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 1699,
    originalPrice: 1900,
    baseKms: 50,
    baseHours: 5,
    extraKmRate: 19,
    rating: 4.7,
    reviews: 175,
    img: "https://i.pinimg.com/736x/92/b6/de/92b6dee09203d9ca4a5f2ae1c9b3d7a9.jpg",
    badges: ["European Feel", "Smooth Drive"],
    features: ["AC", "Automatic", "4 Seat"],
    available: true,
  },
  {
    id: "20",
    name: "Tata Harrier",
    type: "SUV",
    seats: 5,
    luggage: 3,
    fuel: "Diesel",
    transmission: "Manual",
    price: 2199,
    originalPrice: 2500,
    baseKms: 60,
    baseHours: 6,
    extraKmRate: 21,
    rating: 4.6,
    reviews: 200,
    img: "https://i.pinimg.com/736x/43/2f/11/432f11c9d34f16f7a23d901fee4bc401.jpg",
    badges: ["Strong Build", "Comfort"],
    features: ["AC", "Diesel", "5 Seat"],
    available: true,
  },
];

const AIRPORT_SERVICES = [
  "Darbhanga Airport Cab Services",
  "Kanpur Airport Cab Services",
  "Durgapur Airport Cab Services",
  "Dehradun Airport Cab Services",
  "Visakhapatnam Airport Cab Services"
];

/* ================= COMPONENTS ================= */

const FilterSection = ({ title, options, selected, onChange, counts }: any) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-sm text-gray-800 uppercase tracking-tight">{title}</h3>
      <button onClick={() => onChange([])} className="text-blue-500 text-[11px] font-semibold hover:underline">Reset</button>
    </div>
    <div className="space-y-2.5">
      {options.map((opt: string) => (
        <label key={opt} className="flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selected.includes(opt) ? 'bg-blue-500 border-blue-500' : 'border-gray-300 group-hover:border-blue-400'}`}>
              {selected.includes(opt) && <Check size={10} className="text-white stroke-[3]" />}
            </div>
            <input 
              type="checkbox" 
              className="hidden" 
              checked={selected.includes(opt)}
              onChange={() => {
                if (selected.includes(opt)) {
                  onChange(selected.filter((s: string) => s !== opt));
                } else {
                  onChange([...selected, opt]);
                }
              }}
            />
            <span className={`text-sm ${selected.includes(opt) ? 'text-blue-600 font-semibold' : 'text-gray-600 group-hover:text-gray-900'}`}>{opt}</span>
          </div>
          <span className="text-[11px] text-gray-400 font-medium">{counts[opt] || 0}</span>
        </label>
      ))}
    </div>
  </div>
);

export default function FleetPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);

  const counts = useMemo(() => {
    const typeCounts: any = {};
    const fuelCounts: any = {};
    FLEET.forEach(car => {
      typeCounts[car.type] = (typeCounts[car.type] || 0) + 1;
      fuelCounts[car.fuel] = (fuelCounts[car.fuel] || 0) + 1;
    });
    return { typeCounts, fuelCounts };
  }, []);

  const filteredFleet = useMemo(() => {
    return FLEET.filter(car => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(car.type);
      const fuelMatch = selectedFuels.length === 0 || selectedFuels.includes(car.fuel);
      return typeMatch && fuelMatch;
    });
  }, [selectedTypes, selectedFuels]);

  return (
    <div className="bg-[#f2f5f8] min-h-screen pb-20">
      
      {/* BREADCRUMB / TOP BAR */}
      <div className="bg-white border-b sticky top-20 z-40 px-6 py-3">
        <div className="max-w-[1300px] mx-auto flex items-center gap-2 text-[11px] text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <span className="hover:text-blue-500 cursor-pointer">Home</span>
          <ChevronRight size={10} />
          <span className="hover:text-blue-500 cursor-pointer">Cabs</span>
          <ChevronRight size={10} />
          <span className="text-blue-600 font-semibold">Cab Rental In Hyderabad / Secunderabad</span>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-6 mt-6 grid lg:grid-cols-[280px_1fr] gap-6 items-start">
        
        {/* SIDEBAR FILTERS */}
        <aside className="hidden lg:block sticky top-36 h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            
            <FilterSection 
              title="Cab Type" 
              options={["Hatchback", "Sedan", "SUV", "Luxury", "Van", "Electric"]} 
              selected={selectedTypes} 
              onChange={setSelectedTypes}
              counts={counts.typeCounts}
            />

            <FilterSection 
              title="Fuel Type" 
              options={["Diesel", "Petrol", "Electric", "CNG"]} 
              selected={selectedFuels} 
              onChange={setSelectedFuels}
              counts={counts.fuelCounts}
            />

            {/* AIRPORT LINKS */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="font-bold text-xs text-gray-800 uppercase tracking-wider mb-4">Top Airport Cab Services</h3>
              <div className="space-y-3">
                {AIRPORT_SERVICES.map(link => (
                  <a key={link} href="#" className="block text-[12px] text-blue-500 hover:text-blue-700 transition-colors leading-relaxed">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="space-y-6">
          
          {/* TOP HIGHLIGHTS */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Zap, label: "Exclusive Discounts", sub: "Grab exclusive deals on cab bookings easily.", color: "bg-yellow-50 text-yellow-600" },
              { icon: ShieldCheck, label: "Best Cab Services", sub: "Unlock all inclusive benefits on booking cabs.", color: "bg-blue-50 text-blue-600" },
              { icon: Gauge, label: "Competitive Prices", sub: "Enjoy delightful journeys at wallet-friendly prices.", color: "bg-green-50 text-green-600" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 border rounded-xl flex gap-3 shadow-sm group hover:shadow-md transition-shadow cursor-default">
                <div className={`p-2.5 rounded-lg h-fit ${item.color}`}>
                  <item.icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">{item.label}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* LIST OF CARS */}
          <div className="space-y-5">
            <AnimatePresence mode="popLayout">
              {filteredFleet.length > 0 ? (
                filteredFleet.map((car) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={car.id}
                    className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-6 grid md:grid-cols-[240px_1fr_180px] gap-8">
                      
                      {/* LEFT: IMAGE & TAG */}
                      <div className="relative">
                        <div className="bg-[#e9f2fe] rounded-xl p-4 flex items-center justify-center overflow-hidden">
                          <img 
                            src={car.img} 
                            alt={car.name} 
                            className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-700" 
                          />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                           <span className="bg-[#56b1f9] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                            {car.type}
                          </span>
                          <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 px-2">
                            <span>{car.seats} Seat</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>AC</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{car.fuel}</span>
                          </div>
                        </div>
                      </div>

                      {/* CENTER: DETAILS & BADGES */}
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{car.name}</h3>
                          <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded border border-green-100">
                             <Star size={10} className="fill-green-600 text-green-600" />
                             <span className="text-[11px] font-bold text-green-700">{car.rating}</span>
                             <span className="text-[10px] text-green-500 font-medium">({car.reviews})</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-8">
                          {car.badges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="bg-green-500/10 p-0.5 rounded-full">
                                <Check size={10} className="text-green-600 stroke-[3]" />
                              </div>
                              <span className={`text-[12px] font-medium ${badge.includes('After') ? 'text-gray-700' : 'text-green-600'}`}>
                                {badge}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
                           {car.features.map(f => (
                             <span key={f} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-1 rounded border border-gray-100 whitespace-nowrap">
                               {f}
                             </span>
                           ))}
                        </div>
                      </div>

                      {/* RIGHT: PRICING & ACTION */}
                      <div className="flex flex-col items-end justify-between border-l border-dashed border-gray-200 pl-8">
                        <div className="text-right">
                          <div className="flex items-center gap-2 justify-end mb-1">
                            <span className="text-[11px] font-bold text-green-600 uppercase tracking-tighter">Applied</span>
                            <div className="bg-green-50 border border-dashed border-green-500 text-green-700 px-2 py-0.5 text-[10px] font-bold rounded">
                              MALCARE
                            </div>
                          </div>
                          
                          <p className="text-[11px] text-gray-500 font-medium">Book Now and Get Rs {car.originalPrice - car.price} OFF*</p>
                          <div className="mt-2">
                            <span className="text-sm text-red-400 line-through font-medium">₹{car.originalPrice}</span>
                            <div className="text-3xl font-black text-gray-900 -mt-1 tracking-tight">₹{car.price}</div>
                          </div>
                          <p className="text-[11px] text-gray-500 font-bold mt-0.5">For {car.baseHours} hr and {car.baseKms} Km</p>
                        </div>

                        <button className="w-full bg-[#ef6614] hover:bg-[#d8580d] text-white py-3 rounded-lg font-bold text-sm shadow-lg shadow-orange-100 transition-all active:scale-95">
                          Book Now
                        </button>
                      </div>

                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="bg-white p-20 text-center rounded-2xl border-2 border-dashed border-gray-200">
                   <Car size={48} className="mx-auto text-gray-300 mb-4" />
                   <h3 className="text-xl font-bold text-gray-900">No Cabs Found</h3>
                   <p className="text-gray-500 mt-2">Try adjusting your filters to find your perfect ride.</p>
                   <button 
                    onClick={() => { setSelectedTypes([]); setSelectedFuels([]); }}
                    className="mt-6 text-blue-500 font-bold hover:underline"
                   >
                     Clear all filters
                   </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}