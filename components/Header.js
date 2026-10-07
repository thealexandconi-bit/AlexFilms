import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/luxury-villa-fpv-marbella", label: "FPV" },
    { href: "/wedding-videographer-malaga", label: "Weddings" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md py-4 px-6 md:px-10 flex justify-between items-center">
      <Link
        href="/"
        className="text-2xl font-bold tracking-wide text-white"
      >
        AlexFilms
      </Link>

      <nav className="hidden md:flex gap-8 text-gray-300 text-sm uppercase tracking-wider items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="md:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isDropdownOpen}
        >
          <span className="block h-0.5 w-full bg-white" />
          <span className="block h-0.5 w-full bg-white" />
          <span className="block h-0.5 w-full bg-white" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-black border border-gray-700 rounded shadow-lg flex flex-col text-gray-300 uppercase text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 hover:bg-gray-800"
                onClick={() => setIsDropdownOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}