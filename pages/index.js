"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// === Small reusable stat component ===
function Stat({ end, suffix = "+", label, duration = 3, separator = "," }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="text-center flex-1 min-w-[150px]">
      <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
        {inView ? <CountUp end={end} duration={duration} separator={separator} /> : "0"}
        {suffix}
      </h3>
      <p className="text-gray-400 text-base md:text-lg">{label}</p>
    </div>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full z-30 bg-black/30 backdrop-blur-md py-4 px-6 md:px-10 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          AlexFilms
        </Link>
        <nav className="hidden md:flex gap-8 text-gray-300 text-sm uppercase tracking-wider">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          {!isMobile ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/USBaG4rg0Is?autoplay=1&mute=1&loop=1&playlist=USBaG4rg0Is&controls=0&showinfo=0&modestbranding=1"
              title="AlexFilms Intro"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          ) : (
            <video
    src="https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical5.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  ></video>
          )}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Foreground Text */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            AlexFilms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="mt-4 text-lg md:text-xl italic text-gray-300"
          >
            Cinematic Videography & Professional Drone Pilot
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
          >
            <Link
              href="/portfolio"
              className="inline-block mt-8 rounded-full px-8 py-3 bg-white text-black font-semibold shadow-lg transition-all duration-300"
            >
              Watch My Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== WHO IS ALEX ===== */}
      <section
        id="about"
        className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          src="/images/alex-portrait.jpg"
          alt="Alex portrait"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6">Who is Alex?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I’m a filmmaker and drone pilot passionate about capturing the world
            through movement and emotion. From remote mountain peaks to vibrant
            cities, I aim to tell stories that immerse the viewer in each
            moment.
          </p>
          <p className="text-gray-400 italic">
            Every flight, every shot — one story closer to perfection.
          </p>
        </motion.div>
      </section>

      {/* Divider Line */}
      <hr className="border-white/80 mx-auto w-1/3 my-8 opacity-80" />

      {/* ===== STATS SECTION ===== */}
      <section className="py-24 bg-black/80 text-center">
        <h2 className="text-3xl font-bold mb-12">My Journey in Numbers</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-24 px-6 md:px-24">
          <Stat end={40} label="Countries Filmed" />
          <Stat end={300} label="Hours of Flight Time" />
          <Stat end={500000} label="Organic Views" />
        </div>
      </section>

      {/* Divider Line */}
      <hr className="border-white/80 mx-auto w-1/3 my-8 opacity-80" />

      {/* ===== FEATURED PROJECTS ===== */}
      <section
        id="portfolio"
        className="min-h-[80vh] bg-black flex flex-col items-center py-20 px-8"
      >
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
          {[
            "dNgVbNkXi3Q",
            "-sZ3hP8bK6U",
            "Upn-O-M5Mic",
            "0187mui9mDY",
          ].map((id, idx) => (
            <div key={idx} className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Project ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            </div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="mt-16 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          See Full Portfolio
        </Link>
      </section>

      {/* Divider Line */}
      <hr className="border-white/80 mx-auto w-1/3 my-8 opacity-80" />

      {/* ===== CONTACT CTA ===== */}
      <section
        id="contact"
        className="py-24 bg-black/90 text-center border-t border-gray-800"
      >
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-gray-400 mb-8">
          Interested in cinematic FPV or professional videography for your next
          project?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Me
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        © 2025 AlexFilms – Videography & FPV | All rights reserved
      </footer>
    </main>
  );
}
