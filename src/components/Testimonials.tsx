import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "M.Sandseep .",
    role: "CEO, Redline Ventures",
    text: "Mallikarjuna handled my Bangalore→Coorg trip like a private jet on wheels.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "D.Nithin",
    role: "Film Producer",
    text: "3 SUVs, 12 days, zero delays. Already rebooked.",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "B shyamsundar.",
    role: "Luxury Traveller",
    text: "AI planner built a Goa trip in seconds. Delivered perfectly.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <h2 className="text-6xl font-bold mb-16">
          Trusted by <span className="text-purple-500">People</span>
        </h2>

        {/* CAROUSEL */}
        <div className="relative">

          {/* EDGE FADE */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="min-w-[320px] border border-gray-800 p-6 bg-white/5 backdrop-blur"
              >
                {/* STARS */}
                <div className="flex text-purple-400 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-sm text-gray-300">
                  "{t.text}"
                </p>

                {/* USER */}
                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={t.img}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <div className="text-sm font-semibold">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}