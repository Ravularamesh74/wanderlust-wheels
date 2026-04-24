import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Clock, Users, ArrowRight, Car } from "lucide-react";
import { Link } from "@tanstack/react-router";

/* ================== COUNTER ================== */
function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {inView && (
        <motion.span
          initial={{ count: 0 } as any}
          animate={{ count: value } as any}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {Math.floor(value)}
        </motion.span>
      )}
    </motion.span>
  );
}

/* ================== COMPONENT ================== */
export default function AboutInsane() {
  const features = [
    {
      icon: Shield,
      t: "Vetted Chauffeurs",
      d: "Background-verified, trained, and hospitality-certified professionals.",
    },
    {
      icon: Award,
      t: "Premium Fleet",
      d: "Modern, spotless vehicles maintained at elite standards.",
    },
    {
      icon: Clock,
      t: "Fast Confirmations",
      d: "Real human response within minutes. No waiting.",
    },
    {
      icon: Users,
      t: "Scalable Mobility",
      d: "From solo rides to fleet logistics for large groups.",
    },
  ];

  return (
    <section className="relative py-32 px-6 lg:px-12 bg-black text-white overflow-hidden">

      {/* ===== BACKGROUND GRADIENT ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />

      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* ================= LEFT ================= */}
        <div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-[0.95]"
          >
            We don’t{" "}
            <span className="text-purple-500">rent cars.</span>
            <br />
            We move{" "}
            <span className="text-transparent stroke-text">people.</span>
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed"
          >
            Mallikarjuna was founded with a single idea — transportation should feel seamless, refined, and human.
            Over the years, we’ve evolved into a premium mobility brand delivering precision-driven travel experiences.
            Every vehicle, every driver, and every journey is engineered to remove friction and elevate comfort.
            Whether it’s a short city ride or a multi-day itinerary, we operate with consistency, discipline,
            and attention to detail that defines true reliability.
          </motion.p>

          {/* FEATURES */}
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.t}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group border-l-2 border-purple-600 pl-5 hover:translate-x-2 transition"
                >
                  <Icon className="h-5 w-5 text-purple-500 mb-3 group-hover:scale-110 transition" />
                  <h3 className="text-lg font-semibold">{f.t}</h3>
                  <p className="text-sm text-gray-400 mt-2">{f.d}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 flex gap-4 flex-wrap">
            <Link
              to="/booking"
              className="bg-purple-600 px-8 py-4 flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:bg-purple-700 transition"
            >
              Reserve Ride <ArrowRight size={16} />
            </Link>

            <Link
              to="/tours"
              className="border border-gray-700 px-8 py-4 flex items-center gap-2 text-sm uppercase tracking-widest hover:border-purple-500 transition"
            >
              <Car size={16} /> Explore Fleet
            </Link>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
              className="w-full h-[500px] object-cover hover:scale-110 transition duration-700"
            />
          </div>

          {/* FLOATING STATS */}
          <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur border border-gray-800 p-6 rounded-xl">
            <div className="text-4xl font-bold text-purple-500">
              <Counter value={11} />+
            </div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
              Years Experience
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-black/80 backdrop-blur border border-gray-800 p-6 rounded-xl">
            <div className="text-4xl font-bold">
              <Counter value={280} />
            </div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
              Vehicles Active
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== BOTTOM STRIP ===== */}
      <div className="mt-24 border-t border-gray-800 pt-10 text-center text-gray-500 text-sm tracking-wide">
        Trusted by corporates, travelers, and event planners across multiple cities.
      </div>
    </section>
  );
}