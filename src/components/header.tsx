import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "AI Planner", href: "/ai-planner" },
  { label: "Book", href: "/booking" },
  { label: "Services", href: "/services" },


];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 h-16"
            : "bg-background/60 backdrop-blur-md h-20"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-full">

          {/* LOGO */}
          <Link to="/" className="text-xl font-bold tracking-tight">
            MALLIKARJUNA<span className="text-purple-500">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest">
            {NAV.map((n) => {
              const active = location.pathname === n.href;
              return (
                <Link key={n.label} to={n.href} className="relative group">
                  <span className={active ? "text-purple-400" : ""}>
                    {n.label}
                  </span>

                  {/* ANIMATED UNDERLINE */}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-purple-400 transition-all group-hover:w-full" />

                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              to="/booking"
              className="hidden md:block bg-purple-600 px-5 py-2 text-xs uppercase tracking-widest hover:scale-105 transition"
            >
              Book Now
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden"
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 bg-black z-50 flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-lg">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  to={n.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-purple-400"
                >
                  {n.label}
                </Link>
              ))}
            </div>

            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-10 bg-purple-600 py-3 text-center"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}