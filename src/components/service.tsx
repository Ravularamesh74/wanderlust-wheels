import { motion } from "framer-motion";
import { useState } from "react";
import { Car, Map, Sparkles, Users, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SERVICES = [
  {
    icon: Car,
    title: "Premium Rentals",
    desc: "Luxury sedans, SUVs, and exotic cars.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    details:
      "Airport, city, and outstation rides with professional chauffeurs and premium comfort.",
  },
  {
    icon: Map,
    title: "Curated Tours",
    desc: "Handcrafted travel experiences.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    details:
      "Goa, Kerala, hill stations, and custom routes tailored to your vibe.",
  },
  {
    icon: Sparkles,
    title: "AI Planner",
    desc: "Plan trips instantly.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    details:
      "Describe your trip → get itinerary, vehicle, and cost in seconds.",
  },
  {
    icon: Users,
    title: "Corporate Travel",
    desc: "For teams & events.",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    details:
      "Seamless logistics for corporate groups, weddings, and VIP transport.",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-mono mb-4">Our Expertise</div>
            <h2 className="text-6xl md:text-7xl font-bold font-display uppercase leading-tight">
              Services <span className="text-purple-500">Elevated.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm font-medium">
            Redefining mobility with a blend of luxury, technology, and uncompromising service.
          </p>
        </div>

        {/* INTERACTIVE ROW */}
        <div className="flex flex-col md:flex-row gap-4 min-h-[500px]">

          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;

            return (
              <motion.div
                key={s.title}
                layout
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative cursor-pointer border border-white/5 overflow-hidden flex flex-col justify-between p-8 transition-all duration-700
                  ${isActive ? "md:flex-[3]" : "md:flex-[1]"}
                `}
              >
                {/* BACKGROUND IMAGE */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    scale: isActive ? 1.1 : 1,
                    opacity: isActive ? 0.4 : 0.1
                  }}
                  className="absolute inset-0 z-0"
                >
                  <img 
                    src={s.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt={s.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 mb-6 
                    ${isActive ? "bg-purple-600 border-purple-500" : "bg-white/5 border-white/10"}
                  `}>
                    <Icon className={`${isActive ? "text-white" : "text-purple-400"}`} size={20} />
                  </div>

                  <h3 className={`text-2xl font-bold font-display uppercase tracking-tight transition-all duration-500 
                    ${isActive ? "text-white" : "text-gray-500"}
                  `}>
                    {s.title}
                  </h3>

                  <p className={`text-sm mt-3 font-medium transition-all duration-500 max-w-[250px]
                    ${isActive ? "text-gray-300" : "text-gray-600"}
                  `}>
                    {s.desc}
                  </p>
                </div>

                {/* EXPANDED DETAILS */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                  >
                    {isActive && (
                      <div className="max-w-md">
                        <p className="text-sm text-white/70 leading-relaxed italic">
                          "{s.details}"
                        </p>

                        <Link
                          to="/booking"
                          className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-purple-400 group"
                        >
                          Initialize Booking 
                          <div className="w-8 h-px bg-purple-400 group-hover:w-12 transition-all" />
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* STATUS INDICATOR (for non-active) */}
                {!isActive && (
                  <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-widest text-gray-700 font-mono rotate-90 origin-left">
                    Explore
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}