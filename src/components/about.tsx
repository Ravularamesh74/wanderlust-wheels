import { Shield, Award, Clock, Users, ArrowRight, Car } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { Link } from "@tanstack/react-router";
import aboutChauffeur from "@/assets/about-chauffeur.jpg";

export function About() {
  const features = [
    { icon: Shield, t: "Vetted Chauffeurs", d: "Every driver passes background checks, defensive-driving certification, and a 6-week hospitality program." },
    { icon: Award, t: "Premium Fleet", d: "Sedans, SUVs, and exotics — all under 3 years old, deep-cleaned between every ride." },
    { icon: Clock, t: "10-Min Confirmations", d: "Submit a booking and a real human calls you back within ten minutes. No bots, no waitlists." },
    { icon: Users, t: "Built for Groups", d: "Solo to a fleet of fifteen — corporate offsites, weddings, and shoots handled end-to-end." },
  ];
  return (
    <section id="about" className="py-32 px-6 lg:px-12 border-y border-border bg-card/30">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel num="03" title="About Velocity" />
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            We don't <span className="text-signal">rent cars.</span>
            <br />We move <span className="text-outline">people.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg max-w-xl">
            Velocity started in 2014 with one black sedan and one rule: never make a passenger feel like a transaction. Eleven years later, we operate a fleet of 280 vehicles across six cities — and that rule still ships every ride.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.t} className="border-l-2 border-signal pl-5">
                  <Icon className="h-5 w-5 text-signal mb-3" />
                  <h3 className="font-display text-lg uppercase tracking-tight">{f.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/booking" className="bg-signal text-primary-foreground font-mono uppercase text-xs tracking-[0.25em] px-6 py-4 flex items-center gap-2">
              Reserve a Ride <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/tours" className="border border-border font-mono uppercase text-xs tracking-[0.25em] px-6 py-4 flex items-center gap-2 hover:border-signal transition-colors">
              <Car className="h-4 w-4" /> See Tours
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden border border-border">
            <img src={aboutChauffeur} alt="Professional Velocity chauffeur" loading="lazy" width={1280} height={1600}
              className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background border border-border p-5 shadow-signal hidden md:block">
            <div className="font-display text-4xl text-signal">11<span className="text-foreground">/yrs</span></div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">Operating since 2014</div>
          </div>
          <div className="absolute -top-6 -right-6 bg-background border border-border p-5 hidden md:block">
            <div className="font-display text-4xl">280<span className="text-signal">.</span></div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">Vehicles · 6 cities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
