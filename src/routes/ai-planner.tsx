import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AIPlanner } from "@/components/AIPlanner";

export const Route = createFileRoute("/ai-planner")({
  component: AIPlannerPage,
  head: () => ({
    meta: [
      { title: "AI Trip Planner | Mallikarjuna Travels" },
      {
        name: "description",
        content:
          "Plan your trip in seconds with our AI-powered travel planner. Get itinerary, vehicle, and pricing instantly.",
      },
    ],
  }),
});

function AIPlannerPage() {
  return (
    <div className="pt-24 bg-black text-white">

      {/* HERO */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Plan trips with
            <br />
            <span className="text-purple-500">AI Intelligence</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Tell us your destination, vibe, and budget — get a complete itinerary,
            vehicle suggestion, and cost in seconds.
          </p>
        </motion.div>
      </section>

      {/* PLANNER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 pb-32"
      >
        <div className="max-w-[1200px] mx-auto">
          <AIPlanner />
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-10 text-center">

          {[
            {
              title: "Instant Itinerary",
              desc: "Day-wise travel plan generated instantly.",
            },
            {
              title: "Smart Vehicle Match",
              desc: "AI suggests the perfect car for your trip.",
            },
            {
              title: "Accurate Pricing",
              desc: "Transparent cost estimation in seconds.",
            },
          ].map((f) => (
            <div key={f.title}>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold">
          Ready to book your trip?
        </h2>

        <p className="text-gray-400 mt-2">
          Lock your plan and ride with confidence.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/booking"
            className="bg-purple-600 px-6 py-3 text-sm uppercase"
          >
            Book Now
          </Link>

          <Link
            to="/fleet"
            className="border border-white/20 px-6 py-3 text-sm uppercase"
          >
            Explore Fleet
          </Link>
        </div>
      </section>

    </div>
  );
}