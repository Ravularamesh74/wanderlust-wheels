import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const NAV = [
  { label: "Fleet", href: "/fleet" },
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "AI Planner", href: "/ai-planner" },
  { label: "Book", href: "/booking" },
];

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  // SCROLL PARALLAX
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // MOUSE GLOW
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <footer
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden text-white"
    >

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      {/* MOUSE GLOW EFFECT */}
      <motion.div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* CONTENT */}
      <div className="relative px-6 lg:px-12 py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 backdrop-blur-md bg-white/5 p-6 border border-white/10"
          >
            <h2 className="text-4xl font-bold">
              Mallikarjuna<span className="text-purple-400">.</span>
            </h2>

            <p className="mt-4 text-gray-300 max-w-sm text-sm">
              Premium car rentals and curated journeys. Built for those who love the road more than the destination.
            </p>

            <Link
              to="/booking"
              className="inline-block mt-6 bg-purple-600 px-6 py-3 text-sm uppercase tracking-wide hover:scale-105 transition"
            >
              Book Now
            </Link>
          </motion.div>

          {/* NAV */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Explore
            </div>

            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.href}
                    className="hover:text-purple-400 transition"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Contact
            </div>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-2 items-center">
                <Phone size={14} /> +91 9640059577
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={14} /> mallikarjunatravels9771@gmail.com
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={14} />
                Secunderabad, Hyderabad
              </li>
            </ul>
          </motion.div>
        </div>

        {/* FLOATING DECOR ELEMENT */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-10 bottom-10 w-24 h-24 border border-purple-500/20 rounded-full"
        />

        {/* BOTTOM */}
        <div className="max-w-[1400px] mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400">
          <div>© 2015 Mallikarjuna Travels</div>
          <div>Drive the distance. Feel the journey.</div>
        </div>
      </div>
    </footer>
  );
}