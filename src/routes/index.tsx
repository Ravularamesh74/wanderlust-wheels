import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Phone, Mail, MapPin, Clock, Shield, Star,
  Car, Mountain, Compass, Send, Check, Users, Award, Zap,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import fleetSedan from "@/assets/fleet-sedan.jpg";
import fleetSuv from "@/assets/fleet-suv.jpg";
import fleetExotic from "@/assets/fleet-exotic.jpg";
import tourGoa from "@/assets/tour-goa.jpg";
import tourKerala from "@/assets/tour-kerala.jpg";
import tourCoorg from "@/assets/tour-coorg.jpg";
import tourManali from "@/assets/tour-manali.jpg";
import aboutChauffeur from "@/assets/about-chauffeur.jpg";

export const Route = createFileRoute("/")({
  component: VelocityPage,
  head: () => ({
    meta: [
      { title: "VELOCITY — Insane Car Travels & Curated Tours" },
      { name: "description", content: "Premium cars, vetted chauffeurs, AI-curated trips. Book a sedan tonight or a cross-country escape next month." },
      { property: "og:title", content: "VELOCITY — Drive the insane distance" },
      { property: "og:description", content: "Premium cars. Vetted chauffeurs. AI-curated trips and signature tours across India." },
    ],
  }),
});

const NAV = [
  { label: "Fleet", href: "#fleet" },
  { label: "Tours", href: "#tours" },
  { label: "About", href: "#about" },
  { label: "AI Planner", href: "#ai" },
  { label: "Book", href: "#book" },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-tight">
          VELOCITY<span className="text-signal">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em]">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-signal transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#book" className="bg-signal text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] px-5 py-3 hover:opacity-90 transition-opacity">
          Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={heroCar} alt="" className="w-full h-full object-cover opacity-60" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 w-full py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-signal mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-signal" /> / Since 2014 — 50,000+ rides
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[15vw] md:text-[10vw] leading-[0.9] uppercase"
        >
          Drive the
          <br />
          <span className="text-signal">insane</span>
          <br />
          <span className="text-outline">distance.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-xl text-muted-foreground text-lg"
        >
          Premium cars. Vetted chauffeurs. AI-curated trips. Book a sedan for tonight or a cross-country escape for next month — Velocity doesn't do ordinary.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#book" className="group bg-signal text-primary-foreground font-mono uppercase text-xs tracking-[0.25em] px-8 py-5 flex items-center gap-3 shadow-signal hover:translate-y-[-2px] transition-transform">
            Reserve a Ride <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#ai" className="border border-border bg-card/40 backdrop-blur font-mono uppercase text-xs tracking-[0.25em] px-8 py-5 flex items-center gap-3 hover:border-signal transition-colors">
            <Sparkles className="h-4 w-4 text-signal" /> Plan with AI
          </a>
        </motion.div>
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-8">
          {[
            { v: "50K+", l: "Rides" },
            { v: "4.9", l: "Rating" },
            { v: "24/7", l: "Support" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const text = "PREMIUM • PERFORMANCE • INSANE • VELOCITY • ";
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-card/30">
      <div className="flex marquee whitespace-nowrap font-display text-3xl md:text-5xl uppercase">
        <span className="px-4">{text.repeat(8)}</span>
        <span className="px-4">{text.repeat(8)}</span>
      </div>
    </div>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.3em] text-signal mb-6 flex items-center gap-3">
      <span className="h-px w-10 bg-signal" /> / {num} — {title}
    </div>
  );
}

const FLEET = [
  { name: "Executive Sedan", cat: "Daily / Airport", price: "₹14/km", img: fleetSedan, specs: ["4 Seats", "Petrol/Diesel", "AC"] },
  { name: "Premium SUV", cat: "Family / Outstation", price: "₹22/km", img: fleetSuv, specs: ["7 Seats", "4WD", "Panoramic"] },
  { name: "Exotic Coupe", cat: "Special Occasion", price: "₹95/km", img: fleetExotic, specs: ["2 Seats", "V10", "Self-drive"] },
];

function Fleet() {
  return (
    <section id="fleet" className="py-32 px-6 lg:px-12 bg-grid">
      <div className="max-w-[1500px] mx-auto">
        <SectionLabel num="01" title="Fleet" />
        <h2 className="font-display text-5xl md:text-7xl uppercase max-w-3xl">
          The garage. <span className="text-signal">Curated.</span>
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Every vehicle is fewer than 3 years old, sanitised between rides, and driven by a chauffeur with a 4.8+ star rating.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {FLEET.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border bg-card overflow-hidden hover:border-signal transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden bg-background">
                <img src={f.img} alt={f.name} loading="lazy" width={1280} height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{f.cat}</div>
                <div className="flex items-end justify-between mt-2">
                  <h3 className="font-display text-2xl uppercase">{f.name}</h3>
                  <div className="text-signal font-mono">{f.price}</div>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {f.specs.map((s) => (
                    <span key={s} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-border">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TOURS = [
  { name: "Goa Coastal", days: "5 Days / 4 Nights", from: "₹24,999", img: tourGoa, tag: "Beach", icon: Compass,
    desc: "Beach hop from Anjuna to Palolem with sunset cocktails and an SUV at your call." },
  { name: "Kerala Backwaters", days: "6 Days / 5 Nights", from: "₹32,499", img: tourKerala, tag: "Honeymoon", icon: Star,
    desc: "Houseboat on the Alleppey backwaters, Munnar tea trails, and a private chauffeur the whole way." },
  { name: "Coorg Hills", days: "3 Days / 2 Nights", from: "₹14,999", img: tourCoorg, tag: "Weekend", icon: Mountain,
    desc: "Misty coffee plantations, Abbey Falls, and winding ghat roads in a panoramic SUV." },
  { name: "Manali Snow", days: "7 Days / 6 Nights", from: "₹38,499", img: tourManali, tag: "Adventure", icon: Zap,
    desc: "Solang Valley, Rohtang Pass, and Kasol — 4WD with snow chains and a local-expert driver." },
];

function Tours() {
  return (
    <section id="tours" className="py-32 px-6 lg:px-12">
      <div className="max-w-[1500px] mx-auto">
        <SectionLabel num="02" title="Signature Tours" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl md:text-7xl uppercase max-w-3xl">
            Places worth <span className="text-signal">the drive.</span>
          </h2>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            12 destinations · 4 featured below
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {TOURS.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden border border-border bg-card"
              >
                <div className="aspect-[5/4] md:aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" width={1280} height={1600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-signal text-primary-foreground font-mono text-[10px] uppercase tracking-[0.2em]">
                  <Icon className="h-3 w-3" /> {t.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{t.days}</div>
                  <h3 className="font-display text-3xl md:text-4xl uppercase mt-2">{t.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground max-w-md">{t.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">From</div>
                      <div className="font-display text-2xl text-signal">{t.from}</div>
                    </div>
                    <a href="#book" className="font-mono text-xs uppercase tracking-[0.25em] flex items-center gap-2 border border-border px-4 py-3 hover:border-signal hover:text-signal transition-colors">
                      Book Tour <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10">
          {[
            { v: "100%", l: "Verified Drivers" },
            { v: "10 min", l: "Avg Confirmation" },
            { v: "4.9/5", l: "Customer Rating" },
            { v: "50K+", l: "Happy Travellers" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
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
            <a href="#book" className="bg-signal text-primary-foreground font-mono uppercase text-xs tracking-[0.25em] px-6 py-4 flex items-center gap-2">
              Reserve a Ride <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#tours" className="border border-border font-mono uppercase text-xs tracking-[0.25em] px-6 py-4 flex items-center gap-2 hover:border-signal transition-colors">
              <Car className="h-4 w-4" /> See Tours
            </a>
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

const PROMPTS = [
  "5-day Goa beach trip for 4 people, mid budget",
  "Weekend hill station escape near Bangalore",
  "Corporate team outing for 25, luxury vibe",
  "Backwater honeymoon in Kerala",
];

function AIPlanner() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "ai" | "user"; text: string }[]>([
    { role: "ai", text: "I'm VELOCITY AI — your trip architect. Tell me where you want to go, how many days, and your vibe. I'll build the itinerary and pick your ride." },
  ]);

  const send = (text?: string) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMessages((m) => [
      ...m,
      { role: "user", text: t },
      { role: "ai", text: `Got it. I'd pair "${t}" with a Premium SUV and a 3-stop curated route. Want me to lock dates and send to the booking team?` },
    ]);
    setInput("");
  };

  return (
    <section id="ai" className="py-32 px-6 lg:px-12">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel num="04" title="Neural" />
          <h2 className="font-display text-5xl md:text-7xl uppercase">
            Velocity <span className="text-signal">AI.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Describe your trip in plain words. Get a full itinerary, vehicle pick, and cost estimate in seconds.
          </p>
          <div className="mt-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">/ Try</div>
            <div className="flex flex-wrap gap-2">
              {PROMPTS.map((p) => (
                <button key={p} onClick={() => send(p)}
                  className="text-xs border border-border px-3 py-2 hover:border-signal hover:text-signal transition-colors text-left">
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-border bg-card flex flex-col h-[520px]">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">velocity_ai — session #i6c4b2</div>
            <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-signal" /><span className="h-2 w-2 rounded-full bg-muted-foreground/40" /><span className="h-2 w-2 rounded-full bg-muted-foreground/40" /></div>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] ${m.role === "ai" ? "" : "ml-auto"}`}>
                {m.role === "ai" && <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-1">velocity.ai</div>}
                <div className={`p-4 text-sm ${m.role === "ai" ? "bg-background border border-border" : "bg-signal text-primary-foreground"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="border-t border-border p-3 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your trip…"
              className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-signal" />
            <button type="submit" className="bg-signal text-primary-foreground px-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
              Send <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Marcus R.", role: "CEO, Redline Ventures", text: "Velocity handled my Bangalore→Coorg trip like a private jet on wheels. Sedan was immaculate, driver — discreet, punctual, professional." },
  { name: "David L.", role: "Film Producer", text: "We needed 3 SUVs for a 12-day shoot across Kerala. Zero delays, zero drama. Already rebooked for next quarter." },
  { name: "James H.", role: "Luxury Traveller", text: "The AI planner scoped a 5-day Goa trip in 30 seconds. Accurate, cinematic, and actually delivered on every promise." },
];

function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-[1500px] mx-auto">
        <SectionLabel num="05" title="Signal" />
        <h2 className="font-display text-5xl md:text-7xl uppercase">From the <span className="text-signal">people.</span></h2>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-8 bg-card flex flex-col">
              <div className="flex gap-0.5 text-signal mb-5">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/90 flex-1">"{t.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-display uppercase">{t.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="book" className="py-32 px-6 lg:px-12 bg-grid">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-16">
        <div>
          <SectionLabel num="06" title="Reserve" />
          <h2 className="font-display text-5xl md:text-7xl uppercase">Book your <span className="text-signal">ride.</span></h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Fill the form. We confirm within 10 minutes via call. Pay after the ride — cash, UPI, or card.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { i: Phone, l: "Call us", v: "+91 98765 43210" },
              { i: Mail, l: "Email", v: "rides@velocity.travel" },
              { i: MapPin, l: "HQ", v: "Indiranagar, Bengaluru" },
              { i: Clock, l: "Hours", v: "24 / 7 / 365" },
            ].map((c) => {
              const Icon = c.i;
              return (
                <div key={c.l} className="flex items-center gap-4">
                  <div className="h-10 w-10 border border-border flex items-center justify-center text-signal"><Icon className="h-4 w-4" /></div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.l}</div>
                    <div className="text-sm">{c.v}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="border border-border bg-card p-6 md:p-10 grid sm:grid-cols-2 gap-5">
          {submitted ? (
            <div className="sm:col-span-2 py-20 text-center">
              <div className="h-14 w-14 mx-auto bg-signal text-primary-foreground flex items-center justify-center"><Check className="h-7 w-7" /></div>
              <div className="font-display text-3xl uppercase mt-6">Booking Received</div>
              <p className="text-muted-foreground mt-3">We'll call you within 10 minutes to confirm.</p>
            </div>
          ) : (
            <>
              <Field label="Full Name *"><input required className="form" /></Field>
              <Field label="Phone *"><input required type="tel" className="form" /></Field>
              <Field label="Email"><input type="email" className="form" /></Field>
              <Field label="Trip Type">
                <select className="form">
                  <option>One Way</option><option>Round Trip</option><option>Rental</option><option>Tour Package</option>
                </select>
              </Field>
              <Field label="Pickup Location *"><input required className="form" /></Field>
              <Field label="Drop Location *"><input required className="form" /></Field>
              <Field label="Pickup Date *"><input required type="date" className="form" /></Field>
              <Field label="Pickup Time *"><input required type="time" className="form" /></Field>
              <Field label="Vehicle">
                <select className="form">
                  <option>Executive Sedan</option><option>Premium SUV</option><option>Exotic Coupe</option>
                </select>
              </Field>
              <Field label="Passengers"><input type="number" min={1} defaultValue={2} className="form" /></Field>
              <Field label="Notes" full><textarea rows={3} className="form resize-none" /></Field>
              <button type="submit" className="sm:col-span-2 mt-2 bg-signal text-primary-foreground font-mono uppercase text-xs tracking-[0.25em] py-5 flex items-center justify-center gap-3 hover:opacity-90">
                Confirm Booking <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
      <style>{`.form{width:100%;background:var(--background);border:1px solid var(--border);padding:0.75rem 1rem;font-size:0.875rem;outline:none;color:var(--foreground);font-family:var(--font-body)}.form:focus{border-color:var(--signal)}`}</style>
    </section>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 lg:px-12 py-16">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">VELOCITY<span className="text-signal">.</span></div>
          <p className="mt-4 text-muted-foreground max-w-sm text-sm">
            Premium car travel and curated tours. Built for people who'd rather drive the distance than fly over it.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.label}><a href={n.href} className="hover:text-signal">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+91 98765 43210</li>
            <li>rides@velocity.travel</li>
            <li>Indiranagar, Bengaluru</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <div>© 2025 Velocity Travels — All rights reserved</div>
        <div>Drive the insane distance.</div>
      </div>
    </footer>
  );
}

function VelocityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Fleet />
      <Tours />
      <About />
      <AIPlanner />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}
