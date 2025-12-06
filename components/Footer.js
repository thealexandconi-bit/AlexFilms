import React from "react";
import Link from "next/link";
import { Youtube, Instagram, Music2 } from "lucide-react"; // TikTok icon substitute
// TikTok icon not in Lucide, so Music2 is commonly used as replacement

export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
      <p>© 2025 AlexFilms – Cinematic Videography & Drone Production</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4 text-gray-400">
        <Link
          href="https://youtube.com/@alexandconi?si=RixpjGb0m_3bNqUX"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
        >
          <Youtube className="w-6 h-6" />
        </Link>

        <Link
          href="https://www.instagram.com/alexandconi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <Instagram className="w-6 h-6" />
        </Link>

        <Link
          href="https://www.tiktok.com/@alexandconi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Music2 className="w-6 h-6" />
        </Link>
      </div>

      <p className="mt-4">
        <Link href="/legal-notice" className="underline hover:text-gray-300 transition">
          Legal Notice
        </Link>
      </p>
    </footer>
  );
}