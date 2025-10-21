import React from "react";
import Link from "next/link";
import Image from "next/image"; // <-- added import

export default function Contact() {
  return (
    <main className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/30 backdrop-blur-md py-4 px-6 md:px-10 flex justify-between items-center">
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
          <Link href="/contact" className="text-white font-semibold">
            Contact
          </Link>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative flex items-center justify-center min-h-[70vh] px-6 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/contact.jpg"
          alt="Contact background"
          fill
          className="object-cover object-center opacity-80 absolute inset-0"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text content */}
        <div className="relative z-10 max-w-2xl mt-24">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Let’s collaborate on something cinematic. Whether you’re a tourism
            board, a brand, or an artist — I create visuals that tell your
            story with emotion, precision, and impact.
          </p>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="w-full h-px bg-gray-700 my-12" />

      {/* ===== CONTACT FORM ===== */}
      <section className="relative px-6 md:px-20 py-10 max-w-4xl mx-auto">
        <form
          action="https://formspree.io/f/xovkbdeb"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* NAME */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm uppercase tracking-wider text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your name"
              className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm uppercase tracking-wider text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="_replyto"
              id="email"
              required
              placeholder="your@email.com"
              className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
            />
          </div>

          {/* SUBJECT */}
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label htmlFor="subject" className="text-sm uppercase tracking-wider text-gray-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Project idea, collaboration, etc."
              className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label htmlFor="message" className="text-sm uppercase tracking-wider text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="6"
              placeholder="Tell me more about your vision..."
              className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
            />
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-white text-black uppercase text-sm tracking-widest font-semibold px-10 py-3 rounded-xl hover:bg-gray-200 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center text-gray-500 text-xs py-10 tracking-wider">
        © {new Date().getFullYear()} AlexFilms — All Rights Reserved.
      </footer>
    </main>
  );
}
