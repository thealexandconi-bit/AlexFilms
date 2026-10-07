import React from "react";
import Link from "next/link";

const heroVideo =
  "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/background.mp4";

const projects = [
  {
    title: "FPV Cinematography",
    description:
      "Dynamic FPV filmmaking for immersive fly-throughs, fast movement, and perspectives that conventional cameras cannot reach.",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video1.mp4",
    href: "/fpv-drone-filmmaker-malaga",
  },
  {
    title: "Cinematic Drone",
    description:
      "Aerial cinematography for destinations, brands, hotels, tourism, and productions that need a powerful sense of scale.",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video2.mp4",
    href: "/drone-aerial-filmmaking",
  },
  {
    title: "Commercial Filmmaking",
    description:
      "Story-driven films combining cinematic camera work, aerial imagery, movement, and professional editing.",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video3.mp4",
    href: "/commercial",
  },
  {
    title: "Wedding Films",
    description:
      "Emotional, cinematic wedding films created with natural storytelling, professional cinematography, and aerial imagery.",
    video:
      "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video4.mp4",
    href: "/wedding-videographer-malaga",
  },
];

function ProjectVideo({ src }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    />
  );
}

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.35em] text-gray-300 mb-6">
              AlexFilms
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-7">
              Cinematic Filmmaker
              <br />
              & Drone Pilot
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
              Cinematic ground, aerial and FPV filmmaking for brands,
              destinations, events and unforgettable stories.
            </p>

            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Explore My Work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-white/60" />
        </div>
      </section>


      {/* INTRO */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            What I do
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            I create cinematic visuals
            <br className="hidden md:block" />
            that make people look twice.
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            From precision FPV flights and cinematic aerials to controlled
            ground cinematography, I combine technical precision with
            storytelling to create films that feel immersive, intentional,
            and memorable.
          </p>

        </div>
      </section>


      {/* SELECTED WORK */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                Selected work
              </p>

              <h2 className="text-3xl md:text-5xl font-bold">
                Different tools.
                <br />
                One visual language.
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="text-gray-300 hover:text-white transition"
            >
              View full portfolio →
            </Link>

          </div>


          <div className="grid md:grid-cols-2 gap-5">

            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative aspect-4/3 overflow-hidden rounded-lg"
              >

                <ProjectVideo src={project.video} />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 bg-linear-to-t from-black/90 via-black/50 to-transparent">

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 max-w-lg leading-relaxed opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    {project.description}
                  </p>

                  <span className="inline-block mt-4 text-sm uppercase tracking-widest text-gray-300">
                    Explore →
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="border-t border-white/10">

        <div className="grid md:grid-cols-2">

          <div className="min-h-[500px] md:min-h-[650px]">
            <img
              src="/images/alex.jpg"
              alt="AlexFilms filmmaker Alex"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-28">

            <div className="max-w-xl">

              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
                About Alex
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                Technical precision.
                <br />
                Cinematic storytelling.
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I’m Alex, a German filmmaker and professional drone pilot
                based in Málaga, Spain. My background in engineering shapes
                the technical side of my work, while filmmaking gives me the
                freedom to turn that precision into creative storytelling.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mb-9">
                I work across FPV, aerial and ground cinematography, adapting
                my approach to the story, location and production rather than
                forcing every project into the same visual style.
              </p>

              <Link
                href="/about"
                className="inline-block px-7 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition"
              >
                More About Me
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* SPECIALTIES */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-16">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-5">
              Specialties
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built around the shot.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              Every production has different requirements. I bring together
              the tools and techniques that make sense for the project.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-px bg-white/10">

            <Link
              href="/fpv-drone-filmmaker-malaga"
              className="bg-black p-8 md:p-10 hover:bg-white/5 transition"
            >
              <span className="text-sm text-gray-500">01</span>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                FPV Filmmaking
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Fast, immersive and precise FPV flights for spaces, vehicles,
                properties, events and cinematic sequences.
              </p>

              <span className="block mt-8 text-sm uppercase tracking-widest">
                Discover FPV →
              </span>
            </Link>


            <Link
              href="/drone-aerial-filmmaking"
              className="bg-black p-8 md:p-10 hover:bg-white/5 transition"
            >
              <span className="text-sm text-gray-500">02</span>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Aerial Cinematography
              </h3>

              <p className="text-gray-400 leading-relaxed">
                High-end aerial imagery for destinations, tourism,
                architecture, hospitality, brands and productions.
              </p>

              <span className="block mt-8 text-sm uppercase tracking-widest">
                Discover Aerial →
              </span>
            </Link>


            <Link
              href="/commercial"
              className="bg-black p-8 md:p-10 hover:bg-white/5 transition"
            >
              <span className="text-sm text-gray-500">03</span>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Commercial Film
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Story-driven commercial productions combining cinematic
                camera work, aerials, FPV and professional post-production.
              </p>

              <span className="block mt-8 text-sm uppercase tracking-widest">
                Discover Commercial →
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="relative px-6 py-32 md:py-44 overflow-hidden">

        <div className="absolute inset-0">
          <video
            src="https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/video4.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-300 mb-6">
            Have a project in mind?
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-7">
            Let’s create something worth watching.
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Tell me what you are working on, where it is happening, and what
            you want people to feel when they see it.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Start a Conversation
          </Link>

        </div>

      </section>

    </main>
  );
}