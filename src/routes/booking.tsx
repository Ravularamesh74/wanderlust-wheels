import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/Booking";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Star } from "lucide-react";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book Now | Mallikarjuna Travels" },
      {
        name: "description",
        content:
          "Reserve your premium car or tour package today. Professional service guaranteed.",
      },
    ],
  }),
});

function BookingPage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center">

        <motion.img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Book Your Ride
          </motion.h1>

          <p className="mt-4 text-gray-300 max-w-lg">
            Fast. Reliable. Premium travel experience with professional chauffeurs.
          </p>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="border-y border-white/10 py-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 text-center text-sm">

          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="text-purple-500" size={18} />
            Verified Drivers
          </div>

          <div className="flex items-center justify-center gap-2">
            <Clock className="text-purple-500" size={18} />
            Instant Booking
          </div>

          <div className="flex items-center justify-center gap-2">
            <Star className="text-purple-500" size={18} />
            4.9 Rating
          </div>

        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_350px] gap-10">

          {/* LEFT: BOOKING FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Step Indicator */}
            <div className="flex gap-4 mb-8 text-sm">
              <div className="bg-purple-600 px-4 py-2 rounded">1. Details</div>
              <div className="border border-white/20 px-4 py-2 rounded">2. Vehicle</div>
              <div className="border border-white/20 px-4 py-2 rounded">3. Confirm</div>
            </div>

            {/* Your existing booking component */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
              <Booking />
            </div>
          </motion.div>

          {/* RIGHT: SUMMARY PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-28 h-fit"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">

              <h3 className="text-xl font-bold mb-4">Booking Summary</h3>

              <div className="space-y-3 text-sm text-gray-400">

                <div className="flex justify-between">
                  <span>Base Fare</span>
                  <span>₹1200</span>
                </div>

                <div className="flex justify-between">
                  <span>Distance</span>
                  <span>₹800</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>₹150</span>
                </div>

                <div className="border-t border-white/10 pt-3 flex justify-between text-white font-bold">
                  <span>Total</span>
                  <span>₹2150</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-purple-600 py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                Confirm Booking
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Free cancellation available
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold">
          Need help planning your trip?
        </h2>

        <p className="text-gray-400 mt-2">
          Let our AI planner design your perfect journey.
        </p>

        <a
          href="/ai-planner"
          className="inline-block mt-6 bg-purple-600 px-8 py-4 font-bold uppercase"
        >
          Try AI Planner
        </a>
      </section>

    </div>
  );
}