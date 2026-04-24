import { useState } from "react";

// 🔹 Vehicle Categories
export type VehicleType =
  | "Hatchback"
  | "Sedan"
  | "SUV"
  | "Luxury"
  | "Luxury SUV"
  | "Van"
  | "Electric";

// 🔹 Fuel Types
export type FuelType =
  | "Petrol"
  | "Diesel"
  | "CNG"
  | "Electric";

// 🔹 Fleet Item
export interface FleetVehicle {
  id: string;
  name: string;
  type: VehicleType;
  seats: number;
  fuel: FuelType;
  price: number; // base price (₹ per package or km)
  img: string;

  // optional (for advanced UI)
  rating?: number;
  luggage?: number;
  airConditioned?: boolean;
  transmission?: "Manual" | "Automatic";
}

export const FLEET: FleetVehicle[] = [

  // 🚗 HATCHBACK
  { id: "h1", name: "WagonR or equivalent", type: "Hatchback", seats: 4, fuel: "CNG", price: 999, img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { id: "h2", name: "Swift or equivalent", type: "Hatchback", seats: 4, fuel: "Petrol", price: 1099, img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { id: "h3", name: "i10 or equivalent", type: "Hatchback", seats: 4, fuel: "Petrol", price: 1049, img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { id: "h4", name: "Tiago or equivalent", type: "Hatchback", seats: 4, fuel: "CNG", price: 950, img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },

  // 🚘 SEDAN
  { id: "s1", name: "Dzire or equivalent", type: "Sedan", seats: 4, fuel: "CNG", price: 1399, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" },
  { id: "s2", name: "Etios or equivalent", type: "Sedan", seats: 4, fuel: "Diesel", price: 1499, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" },
  { id: "s3", name: "Amaze or equivalent", type: "Sedan", seats: 4, fuel: "Petrol", price: 1449, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" },
  { id: "s4", name: "Ciaz or equivalent", type: "Sedan", seats: 4, fuel: "Petrol", price: 1599, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" },

  // 🚙 SUV
  { id: "su1", name: "Ertiga or equivalent", type: "SUV", seats: 6, fuel: "CNG", price: 1799, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },
  { id: "su2", name: "Innova or equivalent", type: "SUV", seats: 6, fuel: "Diesel", price: 2499, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },
  { id: "su3", name: "Innova Crysta", type: "SUV", seats: 7, fuel: "Diesel", price: 2899, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },
  { id: "su4", name: "Xylo or equivalent", type: "SUV", seats: 6, fuel: "Diesel", price: 1999, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },
  { id: "su5", name: "Scorpio or equivalent", type: "SUV", seats: 6, fuel: "Diesel", price: 2599, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },
  { id: "su6", name: "Safari or equivalent", type: "SUV", seats: 6, fuel: "Diesel", price: 2699, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },

  // 🚐 TEMPO / VAN
  { id: "v1", name: "Tempo Traveller 9 Seater", type: "Van", seats: 9, fuel: "Diesel", price: 3999, img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023" },
  { id: "v2", name: "Tempo Traveller 12 Seater", type: "Van", seats: 12, fuel: "Diesel", price: 4999, img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023" },
  { id: "v3", name: "Tempo Traveller 17 Seater", type: "Van", seats: 17, fuel: "Diesel", price: 6999, img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023" },

  // 🚗 LUXURY
  { id: "l1", name: "Mercedes C-Class", type: "Luxury", seats: 4, fuel: "Petrol", price: 6999, img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8" },
  { id: "l2", name: "BMW 5 Series", type: "Luxury", seats: 4, fuel: "Petrol", price: 7999, img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8" },
  { id: "l3", name: "Audi A6", type: "Luxury", seats: 4, fuel: "Petrol", price: 8499, img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8" },
  { id: "lu1", name: "Fortuner", type: "Luxury SUV", seats: 6, fuel: "Diesel", price: 5999, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },

  // ⚡ ELECTRIC
  { id: "e1", name: "Tata Nexon EV", type: "Electric", seats: 4, fuel: "Electric", price: 1899, img: "https://images.unsplash.com/photo-1519643381401-22c77e60520e" },
  { id: "e2", name: "MG ZS EV", type: "Electric", seats: 4, fuel: "Electric", price: 2299, img: "https://images.unsplash.com/photo-1519643381401-22c77e60520e" },

];

export interface FleetFilters {
  type?: VehicleType;
  fuel?: FuelType;
  minPrice?: number;
  maxPrice?: number;
  seats?: number;
}

export interface BookingForm {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  distance: number;
  vehicle: FleetVehicle;
  phoneVerified: boolean;
}

const INITIAL_FORM: BookingForm = {
  name: "",
  phone: "",
  pickup: "",
  drop: "",
  distance: 120,
  vehicle: FLEET[0],     // default car
  phoneVerified: false,
};

export function FleetMarketplace() {
  const [type, setType] = useState("");
  const [fuel, setFuel] = useState("");

  const filtered = FLEET.filter(
    (f) =>
      (!type || f.type === type) &&
      (!fuel || f.fuel === fuel)
  );

  return (
    <section className="py-16 px-6 bg-gray-50 text-black">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[260px_1fr] gap-6">

        {/* LEFT FILTER */}
        <div className="bg-white p-4 border rounded-lg space-y-6">

          <div>
            <h3 className="font-semibold mb-3">Cab Type</h3>
            {["Hatchback", "Sedan", "SUV", "Luxury", "Van", "Electric"].map((t) => (
              <label key={t} className="flex gap-2 text-sm cursor-pointer hover:text-purple-600">
                <input 
                  type="radio" 
                  name="type"
                  checked={type === t}
                  onChange={() => setType(t)} 
                />
                {t}
              </label>
            ))}
            <button 
              onClick={() => setType("")}
              className="text-[10px] text-purple-600 mt-2 uppercase font-bold"
            >
              Clear
            </button>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Fuel Type</h3>
            {["CNG", "Diesel", "Petrol", "Electric"].map((f) => (
              <label key={f} className="flex gap-2 text-sm cursor-pointer hover:text-purple-600">
                <input 
                  type="radio" 
                  name="fuel"
                  checked={fuel === f}
                  onChange={() => setFuel(f)} 
                />
                {f}
              </label>
            ))}
            <button 
              onClick={() => setFuel("")}
              className="text-[10px] text-purple-600 mt-2 uppercase font-bold"
            >
              Clear
            </button>
          </div>

        </div>

        {/* RIGHT LIST */}
        <div className="space-y-6">

          {filtered.map((car) => (
            <div
              key={car.id}
              className="bg-white border rounded-xl p-5 flex flex-col md:flex-row justify-between items-center group hover:shadow-xl transition-shadow"
            >

              {/* LEFT INFO */}
              <div className="flex flex-col md:flex-row gap-6 w-full">

                <div className="relative overflow-hidden rounded-lg w-full md:w-48 h-32">
                  <img
                    src={car.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={car.name}
                  />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    {car.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] bg-purple-100 text-purple-700 font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {car.type}
                    </span>
                    <span className="text-[10px] bg-gray-100 text-gray-600 font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {car.fuel}
                    </span>
                  </div>

                  <div className="text-sm text-gray-500 mt-3 flex items-center gap-4">
                    <span>👥 {car.seats} Seats</span>
                    <span>❄️ AC</span>
                    <span>⛽ {car.fuel}</span>
                  </div>

                  <ul className="text-[11px] text-green-600 mt-4 flex gap-4 font-medium">
                    <li>✔ Free cancellation</li>
                    <li>✔ 1 luggage bag</li>
                    <li>✔ Professional Driver</li>
                  </ul>

                </div>
              </div>

              {/* RIGHT PRICE */}
              <div className="text-right w-full md:w-auto mt-6 md:mt-0 border-t md:border-t-0 pt-4 md:pt-0">
                <div className="text-green-600 text-[10px] font-bold uppercase tracking-wider">
                  Special Deal Applied
                </div>

                <div className="text-3xl font-black mt-1">
                  ₹{car.price}
                </div>

                <div className="text-[10px] text-gray-400 font-mono">
                  Base Package Fare
                </div>

                <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase text-[10px] tracking-widest px-8 py-3 rounded transition-all">
                  Book Now
                </button>
              </div>

            </div>
          ))}

          {filtered.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed rounded-xl">
              <p className="text-gray-400">No vehicles match your current filters.</p>
              <button 
                onClick={() => { setType(""); setFuel(""); }}
                className="text-purple-600 font-bold mt-2"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}