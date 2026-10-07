import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "FPV Drone Cinematics",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical4.mp4",
    description:
      "High-speed FPV cinematography for immersive fly-throughs, dynamic transitions, and unique perspectives that conventional cameras cannot achieve.",
  },
  {
    title: "City Showreels & Tourism Films",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical2.mp4",
    description:
      "Cinematic films created for destinations, tourism boards, hotels, and brands, combining aerial footage, ground cinematography, and carefully crafted storytelling.",
  },
  {
    title: "Music Videos",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical1.mp4",
    description:
      "Visual storytelling built around rhythm, movement, atmosphere, and music to create distinctive cinematic music videos.",
  },
  {
    title: "Unreachable Places",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical3.mp4",
    description:
      "Aerial cinematography that brings remote landscapes, dramatic peaks, islands, and otherwise inaccessible environments into the frame.",
  },
  {
    title: "Cinematic Travel & Adventure",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/vertical5.mp4",
    description:
      "Cinematic travel imagery combining aerial perspectives, dynamic movement, and carefully composed shots to bring destinations and experiences to life.",
  },
];

function AutoplayVideo({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      loop
      preload="metadata"
      className="w-full max-w-[300px] aspect-9/16 object-cover rounded-lg shadow-2xl"
    />
  );
}

export default function Portfolio() {
  return (
    <main className="bg-black text-white">
      {/* Portfolio Hero */}
      <section className="relative min-h-screen overflow-hidden pt-20 flex items-center justify-center">
        {/* Seamless video background */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0">
          {[
            "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video1.mp4",
            "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video2.mp4",
            "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video3.mp4",
            "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video4.mp4",
          ].map((src) => (
            <video
              key={src}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Portfolio</h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            FPV fly-throughs · Cinematic drone shots · Stabilized gimbal footage · Professional editing and color grading · Story-driven videos for brands, events, restaurants, hotels and more.
          </p>
        </div>
      </section>

      {/* Vertical Projects */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-6xl mx-auto space-y-28 md:space-y-36">
          {projects.map((project, index) => {
            const videoFirst = index % 2 === 0;

            return (
              <article
                key={project.title}
                className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  videoFirst ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Video */}
                <div className="flex justify-center">
                  <AutoplayVideo src={project.video} />
                </div>

                {/* Text */}
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-5">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
