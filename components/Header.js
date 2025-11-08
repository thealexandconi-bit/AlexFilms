"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useI18n } from "@/i18n/I18nProvider";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/30 backdrop-blur-md py-4 px-6 md:px-10 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold tracking-wide">
        AlexFilms
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 text-gray-300 text-sm uppercase tracking-wider items-center">
        <Link href="/about" className="hover:text-white transition">{t("about")}</Link>
        <Link href="/portfolio" className="hover:text-white transition">{t("portfolio")}</Link>
        <Link href="/contact" className="hover:text-white transition">{t("contact")}</Link>
        <LanguageSelector />
      </nav>

      {/* Mobile header right section */}
      {isMobile && (
        <div className="flex items-center gap-4">
          {/* Language flag always visible */}
          <LanguageSelector />

          {/* Dropdown menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex flex-col justify-between w-6 h-5 focus:outline-none"
            >
              <span className="block h-0.5 w-full bg-white"></span>
              <span className="block h-0.5 w-full bg-white"></span>
              <span className="block h-0.5 w-full bg-white"></span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-black border border-gray-700 rounded shadow-lg flex flex-col text-gray-300 uppercase text-sm">
                <Link href="/about" className="px-4 py-2 hover:bg-gray-800">{t("about")}</Link>
                <Link href="/portfolio" className="px-4 py-2 hover:bg-gray-800">{t("portfolio")}</Link>
                <Link href="/contact" className="px-4 py-2 hover:bg-gray-800">{t("contact")}</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}