
import React from "react";
import Head from "next/head";
import Link from "next/link";

const R2 = "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/";
const WEDDING_R2 =
  "https://pub-fafa1cfd10a84168b854e9b1497b897c.r2.dev/";

const villaHeroVideo = `${R2}herobackgroundfpv.mp4`;
const weddingHeroVideo = `${WEDDING_R2}herobackground2.mp4`;
const aerialVideo = `${R2}cinematic_drone_web_small.mp4`;

const projects = [
  {
    number: "01",
    title: "Luxury Villa FPV",
    description:
      "Immersive indoor and outdoor FPV flights through luxury villas, connecting architecture, living spaces, terraces and pools in one fluid movement.",
    video: villaHeroVideo,
    href: "/luxury-villa-fpv-marbella",
    linkText: "Explore Villa FPV",
  },
  {
    number: "02",
    title: "Wedding Films",
    description:
      "Cinematic wedding films capturing genuine moments, the atmosphere of the day and the unique story of each couple.",
    video: weddingHeroVideo,
    href: "/wedding-videographer-malaga",
    linkText: "Explore Wedding Films",
  },
  {
    number: "03",
    title: "Cinematic Aerials",
    description:
      "Sweeping drone footage capturing the scale, atmosphere and natural beauty of landscapes and destinations.",
    video: aerialVideo,
    href: "/contact",
    linkText: "Discuss an Aerial Project",
  },
  {
    number: "04",
    title: "Let's Create Something",
    description:
      "Have a brand, event or creative idea in mind? Let's discuss your project and find the right visual approach to bring it to life.",
    video: `${R2}video3.mp4`,
    href: "/contact",
    linkText: "Discuss a Project",
  },
];

function ProjectVideo({ src, title }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={title}
      className="absolute inset-0 z-0 h-full w-full object-cover"
    />
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-400 md:text-sm">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>AlexFilms | Cinematic Filmmaking & FPV Drone Tours</title>
        <meta
          name="description"
          content="Cinematic filmmaking, luxury villa FPV tours, wedding films and aerial cinematography. Based in Málaga, Spain."
        />
        <link rel="canonical" href="https://www.alex-films.com/" />
        <meta
          property="og:title"
          content="AlexFilms | Cinematic Filmmaking"
        />
        <meta
          property="og:description"
          content="Cinematic ground, aerial and FPV filmmaking for luxury properties, weddings, destinations and creative projects."
        />
        <meta property="og:url" content="https://www.alex-films.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="overflow-hidden bg-black text-white">
        {/* HERO */}
        <section className="relative flex h-[90svh] min-h-[650px] max-h-[1000px] items-center justify-center overflow-hidden">
          <video
            src={`${R2}background.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gray-300 md:text-base">
              AlexFilms · Málaga, Spain
            </p>

            <h1 className="mb-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
              Cinematic Filmmaking
              <br />
              & FPV Drone Tours
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
              Ground, aerial and immersive FPV filmmaking for luxury
              properties, weddings, brands and unforgettable stories.
            </p>

            <Link
              href="#selected-work"
              className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
            >
              Explore My Work
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
            <div className="h-12 w-px bg-white/60" />
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-5xl text-center">
            <SectionLabel>What I do</SectionLabel>

            <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">
              Different perspectives.
              <br className="hidden md:block" />
              One considered approach.
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-xl">
              I combine cinematic camera work, aerial cinematography and
              precision FPV flying to create visual stories shaped around
              the subject, the setting and the feeling a film should leave
              behind.
            </p>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section
          id="selected-work"
          className="px-6 pb-20 md:px-12 md:pb-28 lg:px-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>Selected work</SectionLabel>

                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  Movement with purpose.
                  <br />
                  Images with feeling.
                </h2>
              </div>

              <Link
                href="/portfolio"
                className="w-fit text-sm text-gray-300 transition hover:text-white md:text-base"
              >
                View full portfolio →
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.number}
                  href={project.href}
                  className="group relative isolate flex min-h-[400px] flex-col justify-end overflow-hidden rounded-lg border border-white/10 bg-neutral-900 sm:min-h-[450px]"
                >
                  <ProjectVideo
                    src={project.video}
                    title={project.title}
                  />

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition duration-500 group-hover:via-black/65" />

                  <div className="relative z-20 p-6 sm:p-8 md:p-9">
                    <p className="mb-4 text-xs tracking-[0.25em] text-gray-300">
                      {project.number} / ALEXFILMS
                    </p>

                    <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="max-w-lg text-sm leading-relaxed text-gray-100 sm:text-base">
                      {project.description}
                    </p>

                    <span className="mt-6 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white transition group-hover:translate-x-1 sm:text-sm">
                      {project.linkText} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="border-t border-white/10">
          <div className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-24 lg:px-20">
            <div className="flex justify-center">
              <img
                src="https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev/menew.jpg"
                alt="Alex, filmmaker and drone pilot behind AlexFilms"
                loading="lazy"
                className="aspect-square w-56 rounded-full object-cover object-center sm:w-64 md:w-72 lg:w-80"
              />
            </div>

            <div className="mx-auto max-w-xl">
              <SectionLabel>About Alex</SectionLabel>

              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">
                Technical precision.
                <br />
                Cinematic storytelling.
              </h2>

              <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
                I’m a German filmmaker and professional drone pilot based
                in Málaga, Spain. My background in engineering shapes the
                technical side of my work, while filmmaking lets me turn
                that precision into creative storytelling.
              </p>

              <p className="mb-9 text-base leading-relaxed text-gray-300 md:text-lg">
                From FPV flights through architectural spaces to aerial
                landscapes, wedding films and ground-based cinematography,
                I adapt my approach to each project rather than forcing
                every story into the same visual style.
              </p>

              <Link
                href="/contact"
                className="inline-block rounded-full border border-white/30 px-7 py-3 transition hover:bg-white hover:text-black"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl md:mb-16">
              <SectionLabel>What I offer</SectionLabel>

              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                The right approach for the story.
              </h2>

              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                Every production has different requirements. I choose the
                camera, flight style and visual approach to suit the
                location, subject and intended result.
              </p>
            </div>

            <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              <Link
                href="/luxury-villa-fpv-marbella"
                className="bg-black p-7 transition hover:bg-neutral-900 md:p-10"
              >
                <span className="text-sm text-gray-400">01</span>

                <h3 className="mb-4 mt-8 text-2xl font-bold">
                  Luxury Villa FPV Tours
                </h3>

                <p className="leading-relaxed text-gray-300">
                  Seamless indoor and outdoor FPV tours connecting
                  architecture, living spaces, terraces and pools through
                  immersive flight.
                </p>

                <span className="mt-8 block text-xs uppercase tracking-[0.2em] text-white sm:text-sm">
                  Explore Villa FPV →
                </span>
              </Link>

              <Link
                href="/wedding-videographer-malaga"
                className="bg-black p-7 transition hover:bg-neutral-900 md:p-10"
              >
                <span className="text-sm text-gray-400">02</span>

                <h3 className="mb-4 mt-8 text-2xl font-bold">
                  Wedding Films
                </h3>

                <p className="leading-relaxed text-gray-300">
                  Personal, cinematic wedding films focused on genuine
                  moments, atmosphere and the story of each couple.
                </p>

                <span className="mt-8 block text-xs uppercase tracking-[0.2em] text-white sm:text-sm">
                  Explore Wedding Films →
                </span>
              </Link>

              <Link
                href="/contact"
                className="bg-black p-7 transition hover:bg-neutral-900 md:p-10"
              >
                <span className="text-sm text-gray-400">03</span>

                <h3 className="mb-4 mt-8 text-2xl font-bold">
                  Let's Create Something
                </h3>

                <p className="leading-relaxed text-gray-300">
                  Have a brand, event or creative idea in mind? Let's
                  discuss your project and find the right visual approach
                  to bring it to life.
                </p>

                <span className="mt-8 block text-xs uppercase tracking-[0.2em] text-white sm:text-sm">
                  Discuss a Project →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative isolate overflow-hidden px-6 py-24 md:py-36">
          <video
            src={villaHeroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-black/70" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <SectionLabel>Have a project in mind?</SectionLabel>

            <h2 className="mb-7 text-3xl font-bold leading-tight md:text-6xl">
              Let’s create something worth watching.
            </h2>

            <p className="mb-10 text-base leading-relaxed text-gray-200 md:text-lg">
              Tell me what you are working on, where it is happening and
              what you want people to feel when they see it.
            </p>

            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
