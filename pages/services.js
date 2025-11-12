"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export default function ServicesPage() {
  const { t } = useI18n();

  const packages = [
    {
      name: t("services_package1_name"),
      price: t("services_package1_price"),
      description: t("services_package1_description"),
      features: [
        t("services_package1_feature1"),
        t("services_package1_feature2"),
        t("services_package1_feature3"),
        t("services_package1_feature4"),
      ],
      extras: [
        { name: t("services_package1_extra1"), price: t("services_package1_extra1_price") },
        { name: t("services_package1_extra2"), price: t("services_package1_extra2_price") },
        { name: t("services_package1_extra3"), price: t("services_package1_extra3_price") },
        { name: t("services_package1_extra4"), price: t("services_package1_extra4_price") },
      ],
    },
    {
      name: t("services_package2_name"),
      price: t("services_package2_price"),
      description: t("services_package2_description"),
      features: [
        t("services_package2_feature1"),
        t("services_package2_feature2"),
        t("services_package2_feature3"),
        t("services_package2_feature4"),
        t("services_package2_feature5"),
      ],
      extras: [
        { name: t("services_package2_extra1"), price: t("services_package2_extra1_price") },
        { name: t("services_package2_extra2"), price: t("services_package2_extra2_price") },
        { name: t("services_package2_extra3"), price: t("services_package2_extra3_price") },
        { name: t("services_package2_extra4"), price: t("services_package2_extra4_price") },
        { name: t("services_package2_extra5"), price: t("services_package2_extra5_price") },
      ],
    },
    {
      name: t("services_package3_name"),
      price: t("services_package3_price"),
      description: t("services_package3_description"),
      features: [
        t("services_package3_feature1"),
        t("services_package3_feature2"),
        t("services_package3_feature3"),
        t("services_package3_feature4"),
      ],
      extras: [
        { name: t("services_package3_extra1"), price: t("services_package3_extra1_price") },
        { name: t("services_package3_extra2"), price: t("services_package3_extra2_price") },
        { name: t("services_package3_extra3"), price: t("services_package3_extra3_price") },
        { name: t("services_package3_extra4"), price: t("services_package3_extra4_price") },
        { name: t("services_package3_extra5"), price: t("services_package3_extra5_price") },
      ],
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-heading mb-4">{t("services_hero_title")}</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("services_hero_text")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <h2 className="text-3xl font-heading mb-2 text-white">{pkg.name}</h2>
            <p className="text-xl text-amber-500 font-semibold mb-4">{pkg.price}</p>
            <p className="text-gray-300 mb-6">{pkg.description}</p>

            <h3 className="font-semibold mb-2 text-white">{t("services_includes")}:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {pkg.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>

            <h3 className="font-semibold mb-2 text-white">{t("services_extras")}:</h3>
            <ul className="text-gray-300 mb-6">
              {pkg.extras.map((e, j) => (
                <li key={j}>
                  {e.name} <span className="text-gray-500">{e.price}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/contact?package=${encodeURIComponent(pkg.name)}#contact-form`}
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              {t("services_cta")}
            </Link>
          </div>
        ))}
      </div>

      {/* Premium Section */}
      <div className="max-w-4xl mx-auto text-center mt-24 bg-gray-900 rounded-2xl p-10 shadow-md">
        <h2 className="text-3xl font-heading mb-2 text-white">{t("services_package4_name")}</h2>
        <p className="text-gray-300 text-lg mb-6">{t("services_package4_description")}</p>
        <ul className="text-gray-300 mb-6">
          <li>{t("services_package4_feature1")}</li>
          <li>{t("services_package4_feature2")}</li>
          <li>{t("services_package4_feature3")}</li>
          <li>{t("services_package4_feature4")}</li>
          <li>{t("services_package4_feature5")}</li>
        </ul>
        <Link
          href="/contact?package=High-End Custom#contact-form"
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition"
        >
          {t("services_premium_text")}
        </Link>
      </div>

      {/* Add-ons Section */}
      <div className="max-w-4xl mx-auto text-center mt-24">
        <h2 className="text-3xl font-heading mb-4 text-white">{t("services_addons_title")}</h2>
        <p className="text-gray-300 mb-6">{t("services_addons_text")}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-700 rounded-xl">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="py-3 px-6">{t("services_addons_column1")}</th>
                <th className="py-3 px-6">{t("services_addons_column2")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-6">{t("services_addon1")}</td>
                <td className="py-3 px-6">{t("services_addon1_price")}</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-6">{t("services_addon2")}</td>
                <td className="py-3 px-6">{t("services_addon2_price")}</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-6">{t("services_addon3")}</td>
                <td className="py-3 px-6">{t("services_addon3_price")}</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-6">{t("services_addon4")}</td>
                <td className="py-3 px-6">{t("services_addon4_price")}</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-6">{t("services_addon5")}</td>
                <td className="py-3 px-6">{t("services_addon5_price")}</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-6">{t("services_addon6")}</td>
                <td className="py-3 px-6">{t("services_addon6_price")}</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-6">{t("services_addon7")}</td>
                <td className="py-3 px-6">{t("services_addon7_price")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}