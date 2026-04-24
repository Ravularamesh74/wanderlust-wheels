import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/service";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services | Mallikarjuna Travels" },
      {
        name: "description",
        content: "Premium car rentals, curated tours, AI trip planning, and corporate travel services across India.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      <Services />

      {/* ADDITIONAL CONTENT FOR DEDICATED PAGE */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose Our Chauffeurs?</h3>
            <p className="text-gray-400 leading-relaxed">
              Our chauffeurs aren't just drivers; they are vetted professionals trained in safety, 
              local knowledge, and premium hospitality. Every ride is backed by 24/7 support 
              and real-time tracking for your peace of mind.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Fleet Standards</h3>
            <p className="text-gray-400 leading-relaxed">
              Every vehicle in our fleet undergoes a 50-point inspection before every journey. 
              We guarantee cleanliness, mechanical perfection, and all modern amenities to 
              ensure your travel is nothing short of exceptional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
