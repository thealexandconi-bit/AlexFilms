import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
      <p>© 2025 AlexFilms – Cinematic Videography & Drone Production</p>
      <p className="mt-2">
        <Link href="/legal-notice" className="underline hover:text-gray-300 transition">
          Legal Notice
        </Link>
      </p>
    </footer>
  );
}
