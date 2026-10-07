import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function AutoplayVideo({ src, className = "" }) {
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
      { threshold: 0.35 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

export default function LuxuryVillaFPVMarbella() {
  return (
    <>
      <Head>
        <title>
          Luxury Villa FPV Marbella | Cinematic Indoor FPV Tours | AlexFilms
        </title>

        <meta
          name="description"
          content="Cinematic indoor FPV drone tours of luxury villas and high-end properties in Marbella and across the Costa del Sol. Smooth, immersive FPV filmmaking by AlexFilms."
        />

        <link
          rel="canonical"
          href="https://alex-films.com/luxury-villa-fpv-marbella"
        />

        <meta
          property="og:title"
          content="Luxury Villa FPV Marbella | AlexFilms"
        />

        <meta
          property="og:description"
          content="Cinematic indoor FPV drone tours for luxury villas, estates and high-end properties in Marbella and the Costa del Sol."
        />

        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-black text-white">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/villa-fpv-hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-6">
              Luxury Property FPV
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Luxury Villa FPV
              <br />
              Tours in Marbella
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
              Cinematic indoor FPV flights through exceptional villas,
              estates and architectural spaces across Marbella and the
              Costa del Sol.
            </p>

            <Link
              href="#work"
              className="inline-block px-7 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            >
              See the possibilities
            </Link>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-5">
              More than a property walkthrough
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Show the entire villa as one cinematic experience.
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Traditional property videos often move from room to room with
              static shots and predictable transitions. Indoor FPV allows the
              camera to move continuously through the architecture, connecting
              spaces, levels and exterior areas into one fluid sequence.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mt-6">
              The result is immersive, dynamic and designed to make the viewer
              feel like they are actually moving through the property.
            </p>
          </div>
        </section>

        {/* FEATURED VIDEO */}
        <section id="work" className="px-6 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900">
              <AutoplayVideo
                src="/videos/villa-fpv-01.mp4"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-3">
                  Featured property
                </p>

                <h2 className="text-3xl font-bold">
                  Marbella Luxury Villa
                </h2>
              </div>

              <p className="text-gray-400 leading-relaxed">
                A cinematic FPV property film designed to reveal the flow,
                scale and architecture of a high-end Marbella residence.
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO GRID */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-5">
              What can be filmed
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designed around the property.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              Every flight can be planned around the architecture, interior
              design and strongest visual features of the property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-zinc-950 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <AutoplayVideo
                  src="/videos/villa-fpv-02.mp4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">
                  Room-to-room transitions
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Fly seamlessly from living spaces into kitchens, bedrooms,
                  hallways and entertainment areas without breaking the visual
                  flow.
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <AutoplayVideo
                  src="/videos/villa-fpv-03.mp4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">
                  Indoor to outdoor reveals
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Move from an interior space through large glass doors or
                  terraces and reveal the pool, gardens, sea views and
                  surrounding landscape.
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <AutoplayVideo
                  src="/videos/villa-fpv-04.mp4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">
                  Architectural movement
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Use precise movement around staircases, ceilings, corridors,
                  double-height spaces and architectural details to emphasize
                  the character of the property.
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <AutoplayVideo
                  src="/videos/villa-fpv-05.mp4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">
                  Lifestyle sequences
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Combine the architecture with people, cars, pool areas,
                  terraces and lifestyle details to create a complete luxury
                  property story.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="border-y border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">

            <div className="max-w-3xl mb-16">
              <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-5">
                Why indoor FPV
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A different way to experience a property.
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                Indoor FPV changes how the viewer experiences the space.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">

              <div>
                <div className="text-4xl font-bold mb-5">01</div>
                <h3 className="text-xl font-semibold mb-3">
                  Immersive movement
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Continuous movement creates a sense of actually travelling
                  through the property rather than watching disconnected rooms.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-5">02</div>
                <h3 className="text-xl font-semibold mb-3">
                  Show the full flow
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Connect multiple rooms, floors and exterior areas into a
                  single visual journey.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-5">03</div>
                <h3 className="text-xl font-semibold mb-3">
                  Stand out instantly
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  A well-executed FPV sequence feels completely different from
                  conventional property videos.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-5">04</div>
                <h3 className="text-xl font-semibold mb-3">
                  Reveal scale
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Long corridors, open-plan interiors and double-height spaces
                  can be revealed through movement.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-5">05</div>
                <h3 className="text-xl font-semibold mb-3">
                  Built for social
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  The same flight can be edited into vertical sequences for
                  Instagram, TikTok and short-form campaigns.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-5">06</div>
                <h3 className="text-xl font-semibold mb-3">
                  Cinematic production
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  FPV can be combined with cinema cameras, aerial drone footage
                  and sound design for a complete property film.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CREATIVE IDEAS */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mb-16">

            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-5">
              Creative concepts
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ways to make a villa unforgettable.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              The best FPV property films use movement to create memorable
              moments around the architecture.
            </p>

          </div>

          <div className="space-y-20">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <AutoplayVideo
                  src="/videos/villa-fpv-06.mp4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-3">01</p>

                <h3 className="text-3xl font-bold mb-4">
                  One continuous journey
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Start outside, enter the villa, pass through the entrance,
                  reveal the living room, transition through the kitchen,
                  follow the staircase and finish at the pool or ocean view.
                </p>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="md:order-2 aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <AutoplayVideo
                  src="/videos/villa-fpv-07.mp4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:order-1">
                <p className="text-sm text-gray-500 mb-3">02</p>

                <h3 className="text-3xl font-bold mb-4">
                  Follow the lifestyle
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Follow a person through the villa, transition through the
                  kitchen and continue outside towards the pool.
                </p>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <AutoplayVideo
                  src="/videos/villa-fpv-08.mp4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-3">03</p>

                <h3 className="text-3xl font-bold mb-4">
                  Architecture reveal
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Start close to an architectural detail and pull away into a
                  much larger composition to reveal the scale of the space.
                </p>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="md:order-2 aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <AutoplayVideo
                  src="/videos/villa-fpv-09.mp4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:order-1">
                <p className="text-sm text-gray-500 mb-3">04</p>

                <h3 className="text-3xl font-bold mb-4">
                  FPV meets cinema
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Combine fast, precise FPV movement with slower cinematic
                  shots from a professional cinema camera and exterior aerial
                  drone footage.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* FPV GEAR */}
        <section className="bg-zinc-950">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">

            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div>

                <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-5">
                  The FPV system
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Small enough to fly indoors.
                  <br />
                  Built for cinematic movement.
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  Indoor FPV requires a compact and highly responsive aircraft
                  that can move precisely through complex interiors.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed">
                  This allows me to create flights through spaces that would be
                  impossible to capture with a conventional large drone.
                </p>

              </div>

              <div>
                <img
                  src="/images/gear1.png"
                  alt="FPV drone used by AlexFilms"
                  className="w-full max-w-xl mx-auto rounded-xl"
                />
              </div>

            </div>
          </div>
        </section>

        {/* FULL PRODUCTION */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">

          <div className="max-w-3xl mb-14">
            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-5">
              Full production
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              FPV is only one part of the film.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              For larger property productions, FPV can be combined with
              conventional aerial drone footage and ground-based cinematic
              cameras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-zinc-950 rounded-xl overflow-hidden">
              <img
                src="/images/gear2.png"
                alt="AlexFilms professional camera equipment"
                className="w-full aspect-4/3 object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">
                  Cinema camera
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Detailed cinematic shots for interiors, architecture,
                  lifestyle and important property details.
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-xl overflow-hidden">
              <img
                src="/images/gear3.png"
                alt="Professional aerial drone equipment"
                className="w-full aspect-4/3 object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">
                  Aerial drone
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Exterior aerial perspectives showing the villa, gardens,
                  surrounding landscape, coastline and its position within
                  Marbella.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="border-y border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">

            <div className="grid md:grid-cols-2 gap-16">

              <div>
                <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-5">
                  Built for
                </p>

                <h2 className="text-4xl md:text-5xl font-bold">
                  Properties that deserve more than a standard walkthrough.
                </h2>
              </div>

              <div className="space-y-8 text-lg text-gray-400">
                <p>
                  Luxury real-estate agencies presenting premium properties.
                </p>

                <p>
                  Villa developers and architects wanting to showcase
                  architecture and design.
                </p>

                <p>
                  Property owners preparing a villa for sale or rental.
                </p>

                <p>
                  Luxury hospitality brands and villa rental companies.
                </p>

                <p>
                  Agencies and production companies looking for specialist
                  indoor FPV footage in Marbella and the Costa del Sol.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/villa-fpv-hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-6">
              Marbella · Costa del Sol
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let&apos;s turn the villa into a film.
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              If you have a property that deserves a cinematic presentation,
              get in touch and we can plan the flight around the architecture
              and story of the space.
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Get in touch
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}