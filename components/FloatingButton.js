"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/services"
      className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full shadow-lg transition-all duration-300 font-medium text-white ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-linear-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500`}
    >
      🎥 Let’s Create Together
    </Link>
  );
}