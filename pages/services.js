import React from "react";
import Link from "next/link";

export default function Services() {
  const packages = [
    {
      name: "Social Media Package",
      price: "€150",
      description:
        "Ideal for short, engaging videos optimized for social platforms.",
      features: [
        "Up to 2 hours of shooting",
        "1 edited video (up to 60 seconds)",
        "Color correction & basic grading",
        "Music license included",
      ],
      extras: [
        ["Additional revision", "€40"],
        ["Extra shooting hour", "€60"],
        ["Custom graphics", "€50"],
        ["Captions/Subtitles", "€30"],
      ],
    },
    {
      name: "Business Package",
      price: "€350",
      description:
        "Perfect for small businesses or local brands wanting cinematic storytelling.",
      features: [
        "Half-day shooting",
        "2 edited videos (up to 90 seconds)",
        "Professional color grading",
        "Basic FPV or drone shots",
        "Licensed music included",
      ],
      extras: [
        ["Second camera operator", "€100"],
        ["Voice-over", "€60"],
        ["FPV sequence", "€120"],
        ["Custom thumbnail", "€25"],
        ["Script writing", "€70"],
      ],
    },
    {
      name: "Full Experience",
      price: "€500",
      description:
        "For brands and destinations looking for a cinematic experience with full production value.",
      features: [
        "Full-day shooting",
        "FPV + Drone + Ground coverage",
        "Professional sound design",
        "Custom story planning",
      ],
      extras: [
        ["Color master grade", "€100"],
        ["Extra editing version", "€80"],
        ["Multi-location setup", "€120"],
        ["Reel version (portrait)", "€40"],
        ["Music and Audio fine-tuning", "€100"],
      ],
    },
    {
      name: "High-End Production",
      price: "Custom",
      description:
        "Premium cinematic video production for commercial clients, tourism boards, and major campaigns.",
      features: [
        "Up to 2 filming days",
        "Professional color grading",
        "Cinematic sound design",
        "FPV & Drone footage",
        "Licensed music included",
      ],
      extras: [],
    },
  ];

  const addons = [
    ["Voice-over recording", "€60"],
    ["Professional color grading", "€80–€100"],
    ["Extra filming hour", "€60/hr"],
    ["Editing revisions", "€50/hr"],
    ["FPV add-on", "from €80"],
    ["Drone footage (Mavic 3 Pro)", "€150"],
    ["Travel cost", "+€0.35/km"],
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-12 uppercase tracking-wider">
            Professional Video Production Services
          </h1>

          <div className="w-40 h-0.5 bg-white mx-auto mb-8"></div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Story-driven visuals crafted with cinematic precision — from short
            social clips to full-scale FPV productions.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="border border-gray-700 rounded-lg p-8 flex flex-col"
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-3">
                  {pkg.name}
                </h2>

                <div className="text-3xl font-bold text-blue-400 mb-4">
                  {pkg.price}
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                  Includes
                </h3>

                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-gray-200"
                    >
                      <span className="text-blue-400 mr-3">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pkg.extras.length > 0 && (
                <div className="border-t border-gray-800 pt-6 mb-8">
                  <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                    Extras
                  </h3>

                  <div className="space-y-3">
                    {pkg.extras.map(([name, price]) => (
                      <div
                        key={name}
                        className="flex justify-between gap-4 text-sm"
                      >
                        <span className="text-gray-300">{name}</span>
                        <span className="text-gray-400 whitespace-nowrap">
                          {price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="inline-block w-full text-center border border-white px-6 py-3 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition"
                >
                  Get this package
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              Add-ons
            </h2>

            <div className="w-32 h-0.5 bg-white mx-auto mb-6"></div>

            <p className="text-gray-300 text-lg">
              Enhance your video production
            </p>
          </div>

          <div className="max-w-4xl mx-auto border border-gray-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-gray-900 px-6 py-4 text-sm uppercase tracking-widest">
              <span>Service</span>
              <span className="text-right">Price</span>
            </div>

            {addons.map(([name, price]) => (
              <div
                key={name}
                className="grid grid-cols-2 px-6 py-5 border-t border-gray-800"
              >
                <span className="text-gray-200">{name}</span>
                <span className="text-gray-400 text-right">{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom offer */}
        <div className="text-center border-t border-gray-800 pt-20">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
            Request Custom Offer
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-8">
            Every production is different. If your project requires a custom
            combination of FPV, aerial, ground cinematography, editing, or
            multiple filming locations, get in touch and I’ll create an offer
            around your requirements.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gray-200 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}