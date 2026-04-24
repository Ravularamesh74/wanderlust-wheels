import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/service";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services | Mallikarjuna Travels" },
      {
        name: "description",
        content:
          "Premium car rentals, curated tours, AI trip planning, and corporate travel services across India.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
            Premium Travel Experience
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Services Designed for <span className="text-white/70">Luxury & Comfort</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg">
            From chauffeur-driven rides to AI-powered trip planning — we redefine travel standards.
          </p>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <div className="px-6">
        <Services />
      </div>

      {/* WHY SECTION */}
      <section className="py-28 px-6 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20">

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition">
            <h3 className="text-3xl font-semibold mb-6">
              Chauffeurs That Elevate Your Journey
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our chauffeurs are trained in hospitality, safety, and discretion.
              With deep local expertise and professional etiquette, they ensure
              every ride feels seamless, secure, and premium.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition">
            <h3 className="text-3xl font-semibold mb-6">
              Fleet Built for Excellence
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Each vehicle undergoes strict multi-point inspections and is
              maintained to luxury standards. Expect spotless interiors,
              smooth performance, and top-tier comfort on every trip.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-neutral-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h4 className="text-4xl font-bold mb-2">500+</h4>
            <p className="text-gray-400">Premium Trips Completed</p>
          </div>

          <div>
            <h4 className="text-4xl font-bold mb-2">4.9★</h4>
            <p className="text-gray-400">Customer Satisfaction</p>
          </div>

          <div>
            <h4 className="text-4xl font-bold mb-2">24/7</h4>
            <p className="text-gray-400">Support & Tracking</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center border-t border-white/10">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Experience Premium Travel?
        </h2>
        <p className="text-gray-400 mb-8">
          Book your ride now and travel in comfort, style, and reliability.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-200 transition">
          Book Your Ride
        </button>
      </section>

    </div>
  );
}