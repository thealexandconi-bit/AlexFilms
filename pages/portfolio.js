"use client";

import React from "react";
import Header from "../components/Header";
import { useI18n } from '@/i18n/I18nProvider';

export default function Portfolio() {
  const { t } = useI18n();

  const sections = [
    {
      id: 1,
      title: t("fpv_title"),
      text: t("fpv_text"),
      video: "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical4.mp4",
      reverse: true,
    },
    {
      id: 2,
      title: t("city_title"),
      text: (
        <>
          {t("city_text")}
          <br />
          <a
            href="https://youtu.be/Upn-O-M5Mic?si=LxcGIy5dPKTlfUQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Watch it here
          </a>
        </>
      ),
      video: "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical2.mp4",
      reverse: true,
    },
    {
      id: 3,
      title: t("music_title"),
      text: t("music_text"),
      video: "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical1.mp4",
      reverse: false,
    },
    {
      id: 4,
      title: t("unreachable_title"),
      text: t("unreachable_text"),
      video: "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical3.mp4",
      reverse: false,
    },
  ];

  return (
    <main className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== BACKGROUND GRID VIDEOS ===== */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-0 w-full h-full z-0">
          {[1, 2, 3, 4].map((i) => (
            <video
              key={i}
              src={`https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video${i}.mp4`}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="object-cover w-full h-full opacity-60"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Foreground Text */}
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            {t("portfolio")}
          </h1>
          <p className="mt-6 text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
  {t("portfolio_intro")}
</p>
        </div>
      </section>

      {/* ===== "My Expertise" TITLE ===== */}
      <section className="text-center py-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          {t("my_expertise")}
        </h2>
      </section>

      {/* ===== CREATIVE SECTIONS ===== */}
      {sections.map((section, index) => (
        <React.Fragment key={section.id}>
          {index !== 0 && (
            <div className="flex justify-center py-12">
              <hr className="border-t-2 border-white w-1/3 opacity-70" />
            </div>
          )}

          <section
            className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 md:px-20 py-16 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <video
                src={section.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="rounded-2xl shadow-lg object-cover w-[280px] h-[500px] md:w-[320px] md:h-[560px] opacity-90"
              />
            </div>

            <div className="w-full md:w-1/2 max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">{section.text}</p>
            </div>
          </section>
        </React.Fragment>
      ))}

      <div className="flex justify-center py-12">
        <hr className="border-t-2 border-white w-1/3 opacity-70" />
      </div>
    </main>
  );
}
