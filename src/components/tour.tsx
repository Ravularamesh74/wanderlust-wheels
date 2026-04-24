import { motion, AnimatePresence } from "framer-motion";
import { Compass, Star, Mountain, Zap, ArrowRight, LucideIcon } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

type TourDestination = {
  name: string;
  days: string;
  from: string;
  img: string;
  tag: string;
  icon: LucideIcon;
  desc: string;
};

const TELANGANA_DESTINATIONS: TourDestination[] = [
  {
    name: "Hyderabad Heritage",
    days: "2 Days / 1 Night",
    from: "₹6,999",
    img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    tag: "City",
    icon: Compass,
    desc: "Experience the Nizam's royalty at Golconda Fort, Charminar, and the world's largest film city, Ramoji.",
  },
  {
    name: "Warangal & Ramappa",
    days: "2 Days / 1 Night",
    from: "₹5,999",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    tag: "UNESCO Heritage",
    icon: Star,
    desc: "Visit the 1000 Pillar Temple and the UNESCO World Heritage Ramappa Temple, jewels of Kakatiya architecture.",
  },
  {
    name: "Ananthagiri Hills",
    days: "1 Day / 1 Night",
    from: "₹4,499",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Nature",
    icon: Mountain,
    desc: "A perfect weekend getaway near Vikarabad with dense forests and the Musi river origin.",
  },
  {
    name: "Nagarjuna Sagar",
    days: "2 Days / 1 Night",
    from: "₹7,499",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Nature",
    icon: Mountain,
    desc: "Explore the world's tallest masonry dam and the ancient Buddhist island of Nagarjunakonda.",
  },
  {
    name: "Adilabad Waterfalls",
    days: "3 Days / 2 Nights",
    from: "₹8,999",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    tag: "Adventure",
    icon: Zap,
    desc: "The Niagara of Telangana—Kuntala and Pochera waterfalls offer breathtaking natural beauty.",
  },
];

const ANDHRA_DESTINATIONS: TourDestination[] = [
  {
    name: "Tirupati Darshan",
    days: "2 Days / 1 Night",
    from: "₹9,999",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    tag: "Spiritual",
    icon: Star,
    desc: "Hassle-free spiritual journey to the world's richest temple, Lord Venkateswara at Tirumala.",
  },
  {
    name: "Araku Valley",
    days: "3 Days / 2 Nights",
    from: "₹14,999",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tag: "Hill Station",
    icon: Mountain,
    desc: "Coffee plantations, Borra caves, and the scenic beauty of the Eastern Ghats in Visakhapatnam.",
  },
  {
    name: "Vizag Coastal",
    days: "3 Days / 2 Nights",
    from: "₹12,999",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tag: "Beach",
    icon: Compass,
    desc: "The City of Destiny—explore RK Beach, Rishikonda, and the Submarine Museum.",
  },
  {
    name: "Gandikota Canyon",
    days: "2 Days / 1 Night",
    from: "₹7,999",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Canyon",
    icon: Zap,
    desc: "The Grand Canyon of India—explore the stunning gorge formed by the Pennar river.",
  },
  {
    name: "Horsley Hills",
    days: "2 Days / 1 Night",
    from: "₹7,499",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Hill",
    icon: Mountain,
    desc: "A serene hill retreat at 4,100ft, perfect for couples and nature lovers.",
  },
];

const GOA_DESTINATIONS: TourDestination[] = [
  {
    name: "Baga & Calangute",
    days: "3 Days / 2 Nights",
    from: "₹12,999",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tag: "Beach",
    icon: Compass,
    desc: "The heart of North Goa. Enjoy water sports, beach shacks, and the vibrant nightlife of Baga.",
  },
  {
    name: "South Goa Serenity",
    days: "4 Days / 3 Nights",
    from: "₹18,499",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tag: "Relaxation",
    icon: Star,
    desc: "Experience the peaceful side of Goa at Palolem and Colva beaches with luxury stay options.",
  },
  {
    name: "Dudhsagar Trek",
    days: "2 Days / 1 Night",
    from: "₹6,999",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    tag: "Adventure",
    icon: Zap,
    desc: "Witness the majestic 'Sea of Milk' waterfall deep inside the Bhagwan Mahaveer Sanctuary.",
  },
];

const KERALA_DESTINATIONS: TourDestination[] = [
  {
    name: "Munnar Tea Trails",
    days: "3 Days / 2 Nights",
    from: "₹14,999",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Hill Station",
    icon: Mountain,
    desc: "Misty mountains and sprawling tea estates. Perfect for honeymooners and nature enthusiasts.",
  },
  {
    name: "Alleppey Houseboat",
    days: "2 Days / 1 Night",
    from: "₹11,499",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tag: "Backwater",
    icon: Compass,
    desc: "Cruise through the tranquil backwaters of Kerala in a traditional luxury Kettuvallam.",
  },
];

const KARNATAKA_DESTINATIONS: TourDestination[] = [
  {
    name: "Coorg Coffee Land",
    days: "3 Days / 2 Nights",
    from: "₹13,999",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Nature",
    icon: Mountain,
    desc: "The Scotland of India. Coffee plantations, Abbey falls, and authentic Kodava hospitality.",
  },
  {
    name: "Hampi Heritage",
    days: "2 Days / 1 Night",
    from: "₹8,499",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    tag: "Heritage",
    icon: Star,
    desc: "Travel back in time to the ruins of the Vijayanagara Empire at this UNESCO world heritage site.",
  },
];

const MAHARASHTRA_DESTINATIONS: TourDestination[] = [
  {
    name: "Lonavala Escape",
    days: "2 Days / 1 Night",
    from: "₹6,499",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Hill Station",
    icon: Mountain,
    desc: "Breathtaking valley views, waterfalls, and the famous Tiger Point during the monsoon season.",
  },
];

const RAJASTHAN_DESTINATIONS: TourDestination[] = [
  {
    name: "Jaipur Pink City",
    days: "3 Days / 2 Nights",
    from: "₹15,999",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    tag: "Heritage",
    icon: Star,
    desc: "Experience the royal heritage of Amer Fort, Hawa Mahal, and the vibrant local markets.",
  },
];

const HIMACHAL_DESTINATIONS: TourDestination[] = [
  {
    name: "Manali Adventure",
    days: "4 Days / 3 Nights",
    from: "₹19,999",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Adventure",
    icon: Zap,
    desc: "Snow-capped peaks, Solang Valley sports, and the serene charm of Old Manali.",
  },
];

const PUNJAB_DESTINATIONS: TourDestination[] = [
  {
    name: "Amritsar Spiritual",
    days: "2 Days / 1 Night",
    from: "₹7,999",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    tag: "Spiritual",
    icon: Star,
    desc: "The holy Golden Temple and the patriotic energy of the Wagah Border ceremony.",
  },
];

export const TOURS = {
  telangana: TELANGANA_DESTINATIONS,
  andhra: ANDHRA_DESTINATIONS,
  goa: GOA_DESTINATIONS,
  kerala: KERALA_DESTINATIONS,
  karnataka: KARNATAKA_DESTINATIONS,
  maharashtra: MAHARASHTRA_DESTINATIONS,
  rajasthan: RAJASTHAN_DESTINATIONS,
  himachal: HIMACHAL_DESTINATIONS,
  punjab: PUNJAB_DESTINATIONS,
};

export function Tours() {
  const [state, setState] = useState<keyof typeof TOURS>("telangana");
  const data = TOURS[state];

  return (
    <section id="tours" className="py-32 px-6 lg:px-12 bg-black text-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <SectionLabel num="02" title="Signature Tours" />
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="flex-1">
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">
              Explore <span className="text-purple-500">the Drive.</span>
            </h2>
            <p className="mt-6 text-gray-400 max-w-xl text-lg">
              Curated journeys across India's most iconic landscapes. 
              From coastal escapes to mountain retreats, we handle the wheel.
            </p>
          </div>
          
          <div className="flex flex-wrap bg-white/5 p-1 border border-white/10 rounded-none max-w-2xl">
            {(Object.keys(TOURS) as Array<keyof typeof TOURS>).map((s) => (
              <button
                key={s}
                onClick={() => setState(s)}
                className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all font-mono m-0.5 ${
                  state === s 
                    ? "bg-purple-600 text-white" 
                    : "hover:bg-white/5 text-gray-500 hover:text-gray-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {data.map((t, i) => {
              const Icon = t.icon || Compass;
              return (
                <motion.article
                  key={t.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-purple-500/50 transition-colors flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-purple-600 text-white font-mono text-[10px] uppercase tracking-[0.2em]">
                      <Icon size={12} /> {t.tag}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-400">{t.days}</div>
                    <h3 className="font-display text-2xl uppercase mt-2 group-hover:text-purple-400 transition-colors leading-tight">
                      {t.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-400 flex-1 line-clamp-2">
                      {t.desc}
                    </p>
                    
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">Starting from</div>
                        <div className="font-display text-xl text-purple-400">{t.from}</div>
                      </div>
                      <Link 
                        to="/booking" 
                        className="font-mono text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 border border-white/10 px-4 py-3 hover:bg-purple-600 hover:border-purple-600 transition-all"
                      >
                        Book <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM STATS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { v: "100%", l: "Verified Drivers" },
            { v: "10 min", l: "Avg Confirmation" },
            { v: "4.9/5", l: "Customer Rating" },
            { v: "50K+", l: "Happy Travellers" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}