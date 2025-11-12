"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import { useI18n } from "@/i18n/I18nProvider";
import { useRouter } from "next/router";

export default function Contact() {
  const { t } = useI18n();
  const router = useRouter();
  const [subject, setSubject] = useState("");

  // Handle changing the service select and subject field
  const handleServiceChange = (e) => {
    const service = e.target.value;
    if (!service) {
      setSubject("");
      return;
    }
    setSubject(`${service} Project: `);
  };

  useEffect(() => {
    // Autofill if package is in query string
    if (router.query.package) {
      const pkg = router.query.package;
      setSubject(`${pkg} Project: `);
      const select = document.getElementById("service");
      if (select) select.value = pkg;
    }

    // Smooth scroll to form if URL contains #contact-form
    if (router.asPath.includes("#contact-form")) {
      setTimeout(() => {
        const el = document.getElementById("contact-form");
        if (el) {
          const yOffset = -80; // adjust for fixed header
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100); // small delay to ensure DOM rendered
    }
  }, [router.query.package, router.asPath]);

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
      <section
        id="contact-form"
        className="relative px-6 md:px-20 py-10 max-w-4xl mx-auto"
      >
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

          {/* SERVICE SELECT */}
          <div className="flex flex-col space-y-2 md:col-span-2">
  <label
    htmlFor="service"
    className="text-sm uppercase tracking-wider text-gray-300"
  >
    {t("contact_select_service") || "Select Service"}
  </label>
  <select
    id="service"
    name="service"
    onChange={handleServiceChange}
    className="bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
  >
    <option value="">-- {t("contact_choose_service") || "Choose a service"} --</option>
    <option value={t("services_package1_name")}>
      {t("services_package1_name")} — {t("services_package1_price")}
    </option>
    <option value={t("services_package2_name")}>
      {t("services_package2_name")} — {t("services_package2_price")}
    </option>
    <option value={t("services_package3_name")}>
      {t("services_package3_name")} — {t("services_package3_price")}
    </option>
    <option value={t("services_package4_name")}>
      {t("services_package4_name")} — {t("services_premium_text")}
    </option>
  </select>
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
              required
              placeholder={t("contact_subject_placeholder")}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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