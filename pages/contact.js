"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import { useI18n } from "../context/I18nContext";

export default function Contact() {
  const { t } = useI18n();

  return (
    <main className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative flex items-center justify-center min-h-[70vh] px-6 text-center overflow-hidden">
        <Image
          src="/images/contact.jpg"
          alt={t("contact_hero_title")}
          fill
          className="object-cover object-center opacity-80 absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-2xl mt-24">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6">
            {t("contact_hero_title")}
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {t("contact_hero_text")}
          </p>
        </div>
      </section>

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
            <label
              htmlFor="name"
              className="text-sm uppercase tracking-wider text-gray-300"
            >
              {t("contact_name")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder={t("contact_name_placeholder")}
              className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm uppercase tracking-wider text-gray-300"
            >
              {t("contact_email")}
            </label>
            <input
              type="email"
              name="_replyto"
              id="email"
              required
              placeholder={t("contact_email_placeholder")}
              className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
            />
          </div>

          {/* SUBJECT */}
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label
              htmlFor="subject"
              className="text-sm uppercase tracking-wider text-gray-300"
            >
              {t("contact_subject")}
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder={t("contact_subject_placeholder")}
              className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm uppercase tracking-wider text-gray-300"
            >
              {t("contact_message")}
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={6}
              placeholder={t("contact_message_placeholder")}
              className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
            />
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-white text-black uppercase text-sm tracking-widest font-semibold px-10 py-3 rounded-xl hover:bg-gray-200 transition-all"
            >
              {t("contact_send_button")}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
