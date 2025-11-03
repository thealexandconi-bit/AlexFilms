"use client";

import { useI18n } from "@/context/I18nContext";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t("hero_title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          {t("hero_subtitle")}
        </p>
        <a
          href="#portfolio"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          {t("portfolio")}
        </a>
      </div>
    </section>
  );
}
