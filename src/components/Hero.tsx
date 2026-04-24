import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import heroCar from "@/assets/hero-car.jpg";

export function Hero({ heroRef }: { heroRef?: React.RefObject<HTMLDivElement> }) {
  const localRef = heroRef || useRef<HTMLDivElement>(null);

  // SCROLL TRACKING
  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ["start start", "end start"],
  });

  // PARALLAX
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // TEXT FADE
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={localRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0"
      >
        <img
          src={heroCar}
          className="w-full h-full object-cover opacity-60"
        />

        {/* GRADIENTS */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative max-w-[1500px] mx-auto px-6 lg:px-12 w-full py-24"
      >
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-signal mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-signal" />
          / Since 2015 — 50,000+ rides
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[15vw] md:text-[10vw] leading-[0.9] uppercase"
        >
          Drive the
          <br />
          <span className="text-signal">insane</span>
          <br />
          <span className="text-outline">distance.</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 max-w-xl text-muted-foreground text-lg"
        >
          Premium cars. Vetted chauffeurs. AI-curated trips.
          Book a premium ride or a cross-country escape —
          Mallikarjuna Travels doesn't do ordinary.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/booking"
            className="group bg-signal text-primary-foreground font-mono uppercase text-xs tracking-[0.25em] px-8 py-5 flex items-center gap-3 hover:-translate-y-1 transition"
          >
            Reserve a Ride
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            to="/ai-planner"
            className="border border-border bg-card/40 backdrop-blur font-mono uppercase text-xs tracking-[0.25em] px-8 py-5 flex items-center gap-3 hover:border-signal transition"
          >
            <Sparkles className="h-4 w-4 text-signal" />
            Plan with AI
          </Link>
        </motion.div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-8">
          {[
            { v: "50K+", l: "Rides" },
            { v: "4.9", l: "Rating" },
            { v: "24/7", l: "Support" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Marquee() {
  const items = [
    "Luxury Sedans",
    "Professional Chauffeurs",
    "24/7 Support",
    "AI Trip Planning",
    "Verified Tours",
    "Corporate Travel",
    "Airport Transfers",
  ];

  return (
    <div className="bg-signal py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="flex marquee">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center mx-8 text-primary-foreground font-display text-lg uppercase tracking-wider"
          >
            <span className="mr-8">/</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}