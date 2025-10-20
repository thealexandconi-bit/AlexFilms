import React from "react";

export default function Portfolio() {
  const sections = [
    {
      id: 1,
      title: "Creating Music Videos",
      text: "I build edits with precise timing and clean structure. Every cut is intentional — driven by story and purpose, not random beats. This approach delivers videos that are clear, engaging, and professionally finished for commercial use.",
      video: "/videos/vertical1.mp4",
      reverse: false,
    },
    {
     id: 2,
  title: "City Showreels & Tourism Board Films",
  text: <>
    I produce cinematic city and tourism films that highlight key attractions,
    atmosphere, and identity in a clear and engaging way. The goal is to help
    destinations stand out and attract visitors through high-quality visual
    storytelling. My cinematic Thailand video has already reached more than
    115,000 viewers and received over 1,000 positive comments from people who
    resonated with the story.
    <br />
    <a
      href="https://youtu.be/Upn-O-M5Mic?si=LxcGIy5dPKTlfUQ6"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Watch it here
    </a>
  </>,
  video: "/videos/vertical2.mp4",
  reverse: true,
    },
    {
      id: 3,
      title: "Reaching the Unreachable",
      text: "Using the DJI Mavic 3 Pro, I access peaks, islands, and remote corners that are otherwise unreachable. I capture cinematic aerial perspectives with precision and clarity, delivering visuals that were previously impossible to film.",
      video: "/videos/vertical3.mp4",
      reverse: false,
    },
    {
      id: 4,
      title: "FPV Drone Cinematics",
      text: "I use the ultra-light Flywoo Flylens 85 paired with the DJI O4 Air Unit Pro — a sub-100g FPV drone that delivers smooth, color-graded footage in both indoor and outdoor environments. Its agility allows me to film tight spaces and dynamic angles that larger drones can’t reach.",
      video: "/videos/vertical4.mp4",
      reverse: true,
    },
  ];

  // ✅ return MUST be inside this function
  return (
    <main className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/30 backdrop-blur-md py-4 px-6 md:px-10 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-wide">
          AlexFilms
        </a>
        <nav className="hidden md:flex gap-8 text-gray-300 text-sm uppercase tracking-wider">
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/portfolio" className="text-white font-semibold">
            Portfolio
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </header>

      {/* ===== BACKGROUND GRID VIDEOS ===== */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 w-full h-full z-0">
          {[1, 2, 3, 4].map((i) => (
            <video
              key={i}
              src={`/videos/video${i}.mp4`}
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
            Portfolio
          </h1>
          <p className="mt-6 text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            FPV fly-throughs · Cinematic drone shots · Stabilized gimbal footage · Professional Editing and Colorgrading ·  Story-driven videos for brands, events, restaurants, hotels and many more!
          </p>
        </div>
      </section>

      {/* ===== CREATIVE SECTIONS ===== */}
      {sections.map((section, index) => (
        <React.Fragment key={section.id}>
          {/* Divider Line */}
          <div className="flex justify-center py-12">
            <hr className="border-t-2 border-white w-1/3 opacity-70" />
          </div>

          <section
            className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 md:px-20 py-16 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Vertical Video */}
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

            {/* Text */}
            <div className="w-full md:w-1/2 max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                {section.text}
              </p>
            </div>
          </section>
        </React.Fragment>
      ))}

      {/* Final Divider */}
      <div className="flex justify-center py-12">
        <hr className="border-t-2 border-white w-1/3 opacity-70" />
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        © 2025 AlexFilms – Cinematic Videography & Drone Production | All rights reserved
      </footer>
    </main>
  );
}
