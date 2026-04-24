import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ================= ROUTE ================= */
export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Mallikarjuna Travels" },
      {
        name: "description",
        content: "Premium travel experiences, curated fleet, AI-powered journeys.",
      },
    ],
  }),
});

/* ================= PAGE ================= */
function AboutPage() {
  return (
    <div className="bg-black text-white overflow-hidden pt-20">
      <Hero />
      <Story />
      <Timeline />
      <Stats />
      <Team />
      <CTA />
    </div>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">

      <motion.img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-purple-500/10 blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold leading-[0.9]"
        >
          We don’t sell rides.
          <br />
          <span className="text-purple-500">We design journeys.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-gray-300 text-lg"
        >
          Precision travel. Premium comfort. Zero friction experiences.
        </motion.p>
      </div>
    </section>
  );
}

/* ================= STORY ================= */
function Story() {
  const [expanded, setExpanded] = useState(false);

  const text = `
  What began as a small, service-driven travel operation has evolved into a refined and highly
  structured mobility platform built on precision, trust, and consistency. Over the years, we
  have carefully engineered every aspect of the travel experience to remove friction and deliver
  seamless journeys that feel effortless from start to finish.

  Our focus goes beyond simply providing vehicles — we design complete mobility solutions. Each
  chauffeur is professionally trained, background verified, and aligned with our hospitality-first
  philosophy. Our fleet is continuously maintained, upgraded, and deep-cleaned to ensure every ride
  meets premium standards.

  Behind the scenes, intelligent systems power everything from booking to route optimization,
  ensuring accuracy, transparency, and real-time coordination. Whether it’s a single ride,
  corporate travel, or large-scale event logistics, our infrastructure is built to scale without
  compromising quality.

  At our core, we believe reliability should not be an added feature — it should be the foundation.
  Every journey we deliver is designed to provide confidence, comfort, and a sense of control,
  allowing you to focus on what matters while we handle the movement with precision and care.
  `;

  return (
    <section className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-5xl font-bold leading-tight">
            Built on trust.<br />
            Driven by <span className="text-purple-500">precision.</span>
          </h2>

          <div className="relative max-w-xl mt-6">
            {/* TEXT */}
            <AnimatePresence initial={false}>
              <motion.p
                key={expanded ? "expanded" : "collapsed"}
                initial={{ height: "120px", opacity: 0.8 }}
                animate={{
                  height: expanded ? "auto" : "120px",
                  opacity: 1,
                }}
                transition={{ duration: 0.4 }}
                className="text-gray-400 leading-relaxed overflow-hidden whitespace-pre-line"
              >
                {text}
              </motion.p>
            </AnimatePresence>

            {/* FADE EFFECT WHEN COLLAPSED */}
            {!expanded && (
              <div className="absolute bottom-10 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            )}

            {/* BUTTON */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-purple-500 font-semibold text-sm hover:underline"
            >
              {expanded ? "Show Less ↑" : "Show More ↓"}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
            className="rounded-2xl shadow-2xl"
          />

          <div className="absolute -bottom-6 -right-6 bg-black/70 backdrop-blur p-6 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-500">10+</div>
            <div className="text-xs text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= TIMELINE ================= */
const timeline = [
  { year: "2015", text: "Founded with 2 cars." },
  { year: "2018", text: "Expanded to multiple cities." },
  { year: "2022", text: "Premium fleet launched." },
  { year: "2025", text: "AI travel planning introduced." },
];

function Timeline() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Journey
        </h2>

        <div className="relative before:absolute before:left-3 before:top-0 before:h-full before:w-[2px] before:bg-purple-500/30">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-10 mb-12"
            >
              <div className="absolute left-0 top-2 w-3 h-3 bg-purple-500 rounded-full" />
              <div className="text-purple-400 font-bold">{t.year}</div>
              <div className="text-gray-300">{t.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= STATS ================= */
function Stat({ value, label }: { value: number; label: string }) {
  const ref = useRef(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 30 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent =
          value % 1 === 0
            ? Math.floor(latest).toLocaleString()
            : latest.toFixed(1);
      }
    });
  }, [spring, value]);

  return (
    <div ref={ref} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl">
      <div ref={displayRef} className="text-4xl font-bold">0</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <Stat value={50000} label="Rides" />
        <Stat value={10000} label="Clients" />
        <Stat value={4.9} label="Rating" />
        <Stat value={24} label="Support (hrs)" />
      </div>
    </section>
  );
}

/* ================= TEAM ================= */
const TEAM = [
  { name: "R. Kumar", role: "CEO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
  { name: "R. Parshuram", role: "Managing Director", img: "https://images.unsplash.com/photo-1502767089025-6572583495b4" },
  { name: "R. Ramesh", role: "Director", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
];

function Team() {
  return (
    <section className="py-24 px-6 max-w-[1100px] mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Meet the Team
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {TEAM.map((m) => (
          <motion.div
            key={m.name}
            whileHover={{ scale: 1.05 }}
            className="relative group text-center"
          >
            <img
              src={m.img}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />

            <div className="mt-4 font-semibold">{m.name}</div>
            <div className="text-gray-400 text-sm">{m.role}</div>

            <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================= CTA ================= */
function CTA() {
  return (
    <section className="py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-black" />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold">
          Your journey starts here.
        </h2>

        <p className="text-gray-400 mt-3">
          Premium rides. Intelligent planning. Zero friction.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/booking" className="bg-purple-600 px-8 py-4 font-bold uppercase">
            Book Now
          </Link>

          <Link to="/ai-planner" className="border border-white/20 px-8 py-4 uppercase">
            AI Planner
          </Link>
        </div>
      </div>
    </section>
  );
}
