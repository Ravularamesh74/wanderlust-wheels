import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Mallikarjuna Travels" },
      {
        name: "description",
        content:
          "Our story, team, and journey—premium car rentals, curated tours, and AI-powered travel experiences.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="pt-24 bg-black text-white">
      <Hero />
      <Story />
      <Timeline />
      <Stats />
      <Team />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold leading-[0.9]"
        >
          We don’t sell rides.
          <br />
          <span className="text-purple-500">We design journeys.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-gray-300 text-lg"
        >
          From city transfers to cross-country escapes, Mallikarjuna Travels
          blends comfort, precision, and technology into every mile.
        </motion.p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-24 px-6 max-w-[1000px] mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Our Story</h2>

      <p className="text-gray-400 leading-relaxed">
        What started as a small local travel service has evolved into a premium
        travel brand trusted by thousands. We focus on curated experiences,
        reliable service, and seamless journeys powered by intelligent systems.
      </p>
    </section>
  );
}

/* =========================
   TIMELINE (Animated)
========================= */

const timeline = [
  { year: "2015", text: "Founded with 2 cars in Hyderabad." },
  { year: "2018", text: "Expanded to multi-city tours." },
  { year: "2022", text: "Introduced premium fleet & corporate services." },
  { year: "2025", text: "Launched AI-powered travel planning." },
];

function Timeline() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Journey
        </h2>

        <div className="relative border-l border-white/10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 pl-6"
            >
              <div className="text-purple-400 font-bold">{t.year}</div>
              <div className="text-gray-300">{t.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   STATS (COUNT UP)
========================= */

function Stat({ value, label }: { value: number; label: string }) {
  const ref = useRef(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 30 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (displayRef.current) {
        // Handle decimals for rating (4.9), integers for others
        const formatted = value % 1 === 0 
          ? Math.floor(latest).toLocaleString() 
          : latest.toFixed(1);
        displayRef.current.textContent = formatted;
      }
    });
  }, [spring, value]);

  return (
    <div ref={ref}>
      <div ref={displayRef} className="text-4xl font-bold">0</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="py-24 px-6 border-y border-white/10">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat value={50000} label="Rides" />
        <Stat value={10000} label="Happy Clients" />
        <Stat value={4.9} label="Rating" />
        <Stat value={24} label="Support (hrs)" />
      </div>
    </section>
  );
}

/* =========================
   TEAM
========================= */

const TEAM = [
  {
    name: "R.Kumar",
    role: "CEO",
    img: "https://scontent.fvga2-4.fna.fbcdn.net/v/t39.30808-6/472165436_1158000882324924_3484666092604746311_n.jpg?stp=c0.119.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a934a8&_nc_ohc=9lG509eSfVkQ7kNvwHc051e&_nc_oc=AdqA5f4Yi79Shl1np0K6Fb8nn4ZmN1I8snlYuOqD9bNqMx66CwjMhPGsGIlnyTC52t0xzfhvN1veM2Fgs3T01l9P&_nc_zt=23&_nc_ht=scontent.fvga2-4.fna&_nc_gid=z759mLepeZzc2KWhZ3_XdQ&oh=00_Af10C6oyCzU6ZmVHcGr-24Y_HFX4RQ9Quz3sN_nTFXGH6Q&oe=69F14DAF",
  },
  {
    name: "R. Parshuram",
    role: "Managing Director",
    img: "https://scontent.fvga2-1.fna.fbcdn.net/v/t39.30808-6/482022548_2714390408749172_9050803906033017486_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=53a332&_nc_ohc=k1U0ZuxEBS0Q7kNvwFsQ70d&_nc_oc=AdpDjcctRXTnxODmtc67fYkrrpL0-ODDUkGz5N7WI4rbeZUr73xBT893Nu0nNk2FogSUw4H_1vadEHtzu0SjoS2P&_nc_zt=23&_nc_ht=scontent.fvga2-1.fna&_nc_gid=iYa8z1h1SgP0WOfOf1BSVA&oh=00_Af3Mh52mjhwc7F27asV8u2znl51RrhEENBJ0nHA3vQUlSg&oe=69F140AC",
  },
  {
    name: "R.Ramesh",
    role: "Director",
    img: "https://scontent.fvga2-4.fna.fbcdn.net/v/t39.30808-6/612996708_4316686205276322_3162034786568846981_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=IH6sCucWpJgQ7kNvwECJ34F&_nc_oc=AdqZsPl5eak7gLvACBtCVM8Ah-ZZ8eWxbGmDZomunpEw-CpbC7jVwjDgVRS5C9U4z6zr_2mUZHOPme05FhNzLIxc&_nc_zt=23&_nc_ht=scontent.fvga2-4.fna&_nc_gid=WFFSk7C4iqmPsVYcVu2Z0g&oh=00_Af1JQVxRGXj7YqDmmL97vNUZdfAUsk1Cf5AhCyMHred8MA&oe=69F16180",
  },
];

function Team() {
  return (
    <section className="py-24 px-6 max-w-[1100px] mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Meet the Team
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {TEAM.map((m) => (
          <motion.div
            key={m.name}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <img
              src={m.img}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <div className="font-semibold">{m.name}</div>
            <div className="text-gray-400 text-sm">{m.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   CTA
========================= */

function CTA() {
  return (
    <section className="py-24 text-center border-t border-white/10">
      <h2 className="text-3xl font-bold">
        Ready to start your journey?
      </h2>

      <p className="text-gray-400 mt-2">
        Book now or let AI design your perfect trip.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <Link
          to="/booking"
          className="bg-purple-600 px-6 py-3 text-sm uppercase"
        >
          Book Now
        </Link>

        <Link
          to="/ai-planner"
          className="border border-white/20 px-6 py-3 text-sm uppercase"
        >
          Plan with AI
        </Link>
      </div>
    </section>
  );
}