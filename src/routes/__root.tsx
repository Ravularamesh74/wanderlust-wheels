import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import appCss from "../styles.css?url";


// ======================
// 🔹 NOT FOUND
// ======================
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-gray-400">Page not found</p>
        <Link to="/" className="mt-6 inline-block bg-purple-600 px-6 py-3">
          Go Home
        </Link>
      </div>
    </div>
  );
}


// ======================
// 🔹 SCROLL RESET
// ======================
function ScrollToTop() {
  const { location } = useRouterState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}


// ======================
// 🔹 LOADING BAR
// ======================
function TopLoader() {
  const { location } = useRouterState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div
      className={`fixed top-0 left-0 h-[2px] bg-purple-500 z-[999] transition-all duration-500 ${loading ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
    />
  );
}


// ======================
// 🔹 ROUTE
// ======================
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // 🔥 SEO UPGRADE
      {
        title:
          "Mallikarjuna Travels | Premium Car Rentals & Tours in India",
      },
      {
        name: "description",
        content:
          "Luxury car rentals, curated tours, and AI-powered travel planning across India.",
      },

      { property: "og:title", content: "Mallikarjuna Travels" },
      {
        property: "og:description",
        content: "Premium car rentals and curated tours.",
      },
    ],

    links: [
      { rel: "stylesheet", href: appCss },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});


// ======================
// 🔹 SHELL
// ======================
function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-black text-white">
        {children}
        <Scripts />
      </body>
    </html>
  );
}


// ======================
// 🔹 ROOT COMPONENT
// ======================
function RootComponent() {
  const { location } = useRouterState();

  return (
    <>
      <TopLoader />
      <ScrollToTop />

      <Header />

      {/* 🔥 PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}