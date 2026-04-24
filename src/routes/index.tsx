import { createFileRoute } from "@tanstack/react-router";
import { Hero,Marquee } from "@/components/Hero";
import  FleetPage from "@/components/fleet";
import { Tours } from "@/components/tour";
import { Services } from "@/components/service";
import { AIPlanner } from "@/components/AIPlanner";
import About from "@/components/about";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Mallikarjuna Travels — Premium Car Rentals & Curated Tours" },
      { name: "description", content: "Luxury cars, vetted chauffeurs, and AI-powered trip planning. Book your next journey with Mallikarjuna Travels." },
      { property: "og:title", content: "Mallikarjuna Travels — Drive the distance" },
      { property: "og:description", content: "Premium cars. Vetted chauffeurs. AI-curated trips and signature tours across India." },
    ],
  }),
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Marquee />
      <FleetPage />
      <Tours />
      <About />
      <Services />
      <AIPlanner />
      <Testimonials />
      <Booking />
    </div>
  );
}
