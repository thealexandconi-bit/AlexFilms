"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useI18n } from "@/context/I18nContext";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { t } = useI18n();

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* ===== TITLE ===== */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-12 uppercase tracking-wider">
            {t("about_title")}
          </h1>
          <div className="w-40 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* ===== INTRO SECTION ===== */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-20 space-y-10 md:space-y-0 md:space-x-12">
          <div className="md:w-3/4 text-base md:text-lg leading-relaxed space-y-8 text-gray-200">
            <p>{t("about_intro1")}</p>
            <p>{t("about_intro2")}</p>
          </div>

          <div className="md:w-1/4 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/images/alex.jpg"
              alt={t("about_image_alt")}
              width={250}
              height={250}
              className="rounded-full shadow-lg object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full h-0.5 bg-white mb-20"></div>

        {/* ===== EXPERIENCE SECTION ===== */}
        <div className="text-base md:text-lg leading-relaxed text-gray-200 space-y-8 mb-20">
          <p>{t("about_experience1")}</p>
          <p>{t("about_experience2")}</p>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full h-0.5 bg-white mb-20"></div>

        {/* ===== STATS SECTION ===== */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-28">
          <div>
            <h2 className="text-5xl font-extrabold text-blue-400">
              {inView ? <CountUp end={40} duration={3} /> : "0"}+
            </h2>
            <p className="mt-4 text-sm uppercase tracking-wider text-gray-300">{t("about_countries")}</p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-blue-400">
              {inView ? <CountUp end={200} duration={3} /> : "0"}+
            </h2>
            <p className="mt-4 text-sm uppercase tracking-wider text-gray-300">{t("about_flight_hours")}</p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-blue-400">
              {inView ? <CountUp end={500000} duration={3} separator="," /> : "0"}+
            </h2>
            <p className="mt-4 text-sm uppercase tracking-wider text-gray-300">{t("about_views")}</p>
          </div>
        </div>

        {/* ===== PROFESSIONAL GEAR SECTION ===== */}
        <div className="mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wider">
            {t("about_gear_title")}
          </h2>
          <div className="w-32 h-0.5 bg-white mx-auto mb-16"></div>

          {/* --- FPV DRONE --- */}
          <div className="flex flex-col md:flex-row items-center mb-28 md:space-x-16">
            <div className="md:w-1/2">
              <Image
                src="/images/gear1.png"
                alt={t("gear_fpv_alt")}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-gray-200 mt-8 md:mt-0 text-base md:text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 uppercase">
                {t("gear_fpv_title")}
              </h3>
              <p>{t("gear_fpv_text")}</p>
            </div>
          </div>

          {/* --- CINEMA CAMERA / GIMBAL RIG --- */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-28 md:space-x-16 md:space-x-reverse">
            <div className="md:w-1/2">
              <Image
                src="/images/gear2.png"
                alt={t("gear_gimbal_alt")}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-gray-200 mt-8 md:mt-0 text-base md:text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 uppercase">
                {t("gear_gimbal_title")}
              </h3>
              <p>{t("gear_gimbal_text")}</p>
            </div>
          </div>

          {/* --- CINEMATIC DRONE --- */}
          <div className="flex flex-col md:flex-row items-center md:space-x-16">
            <div className="md:w-1/2">
              <Image
                src="/images/gear3.png"
                alt={t("gear_drone_alt")}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-gray-200 mt-8 md:mt-0 text-base md:text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 uppercase">
                {t("gear_drone_title")}
              </h3>
              <p>{t("gear_drone_text")}</p>
            </div>
          </div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full h-0.5 bg-white mb-24"></div>

        {/* ===== FILMMAKING APPROACH ===== */}
        <div className="text-base md:text-lg leading-relaxed text-gray-200 space-y-8 mb-20">
          <p>{t("about_approach1")}</p>
          <p>{t("about_approach2")}</p>
        </div>

        {/* ===== GALLERY ===== */}
        <div className="about-images grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <Image
            src="/images/video1.png"
            alt={t("about_gallery1")}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/pic6.png"
            alt={t("about_gallery2")}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/video3.png"
            alt={t("about_gallery3")}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
