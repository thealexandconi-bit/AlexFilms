"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Header from "../components/Header";
import { useI18n } from "@/i18n/I18nProvider";
import { Youtube, Instagram, Music2 } from "lucide-react";

// === Small reusable stat component ===
function Stat({ end, labelKey, suffix = "+", duration = 3, separator = "," }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { t } = useI18n();

  return (
    <div ref={ref} className="text-center flex-1 min-w-[150px]">
      <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
        {inView ? <CountUp end={end} duration={duration} separator={separator} /> : "0"}
        {suffix}
      </h3>
      <p className="text-gray-400 text-base md:text-lg">{t(labelKey)}</p>
    </div>
  );
}

export default function Home() {
  const { t } = useI18n();

  const featuredProjects = [
    "dNgVbNkXi3Q",
    "-sZ3hP8bK6U",
    "Upn-O-M5Mic",
    "0187mui9mDY",
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== HERO SECTION (NEW: Cloudflare R2 Background Video) ===== */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          src="https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/background.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text */}
        <div className="relative z-20 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            {t("home_hero_title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="mt-4 text-lg md:text-xl italic text-gray-300"
          >
            {t("home_hero_subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
          >
            <Link
              href="/portfolio"
              className="inline-block mt-8 rounded-full px-8 py-3 bg-white text-black font-semibold shadow-lg transition-all duration-300 hover:bg-gray-200"
            >
              {t("home_hero_cta")}
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
          alt={t("home_about_alt")}
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6">{t("home_about_title")}</h2>
          <p className="text-gray-300 leading-relaxed mb-4">{t("home_about_paragraph1")}</p>
          <p className="text-gray-400 italic mb-4">{t("home_about_paragraph2")}</p>

          <Link
            href="/about"
            className="inline-block mt-2 rounded-full px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            {t("home_about_cta")}
          </Link>
        </motion.div>
      </section>

      {/* ===== SOCIAL MEDIA BUTTONS (WIDER SPACING) ===== */}
      <section className="py-6 flex justify-center">
        <div className="w-full max-w-4xl flex justify-between px-10 gap-8">
          <Link
            href="https://youtube.com/@alexandconi?si=RixpjGb0m_3bNqUX"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </Link>

          <Link
            href="https://www.instagram.com/alexandconi/"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </Link>

          <Link
            href="https://www.tiktok.com/@alexandconi"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            <Music2 className="w-5 h-5" />
            TikTok
          </Link>
        </div>
      </section>

      <hr className="border-white/80 mx-auto w-1/3 my-8 opacity-80" />

      {/* ===== STATS SECTION ===== */}
      <section className="py-24 bg-black/80 text-center">
        <h2 className="text-3xl font-bold mb-12">{t("home_stat_title")}</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-24 px-6 md:px-24">
          <Stat end={50} labelKey="home_stat_projects" />
          <Stat end={300} labelKey="home_stat_hours" />
          <Stat end={500000} labelKey="home_stat_views" />
        </div>
      </section>

      <hr className="border-white/80 mx-auto w-1/3 my-8 opacity-80" />

      {/* ===== FEATURED PROJECTS ===== */}
      <section id="portfolio" className="min-h-[80vh] bg-black flex flex-col items-center py-20 px-8">
        <h2 className="text-4xl font-bold mb-12">{t("home_featured_title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
          {featuredProjects.map((id, idx) => (
            <div key={idx} className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={`${t("home_featured_project")} ${idx + 1}`}
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
          {t("home_featured_cta")}
        </Link>
      </section>

      <hr className="border-white/80 mx-auto w-1/3 my-8 opacity-80" />

      {/* ===== CONTACT CTA ===== */}
      <section id="contact" className="py-24 bg-black/90 text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">{t("home_contact_title")}</h2>
        <p className="text-gray-400 mb-8">{t("home_contact_subtitle")}</p>

        <Link
          href="/contact"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          {t("home_contact_cta")}
        </Link>
      </section>
    </main>
  );
}