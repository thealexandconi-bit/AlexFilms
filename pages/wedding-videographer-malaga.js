import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

const R2 =
  "https://pub-fafa1cfd10a84168b854e9b1497b897c.r2.dev";

function AutoplayVideo({ src, poster, className = "" }) {
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
        threshold: 0.25,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

export default function WeddingVideographerMalaga() {
  return (
    <>
      <Head>
        <title>
          Wedding Videographer Málaga | AlexFilms Cinematic Wedding Films
        </title>

        <meta
          name="description"
          content="Cinematic wedding videographer in Málaga capturing emotional, high-end wedding films across Costa del Sol, Marbella, Estepona and Nerja."
        />

        <link
          rel="canonical"
          href="https://alex-films.com/wedding-videographer-malaga"
        />

        <meta name="theme-color" content="#000000" />

        <meta
          property="og:title"
          content="Wedding Videographer Málaga | AlexFilms"
        />

        <meta
          property="og:description"
          content="Cinematic wedding films across Málaga, Costa del Sol, Marbella, Estepona, Nerja and destination weddings across Spain and Europe."
        />

        <meta
          property="og:image"
          content={`${R2}/mepic2.webp`}
        />
      </Head>

      <main className="bg-black text-white">

        {/* HERO */}
        <section className="relative h-screen min-h-[700px] overflow-hidden">

          <video
            src={`${R2}/herobackground2.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">

            <div className="max-w-5xl">

              <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-300 mb-7">
                AlexFilms Weddings
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight mb-7">
                Wedding Videographer
                <br />
                Málaga & Costa del Sol
              </h1>

              <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
                Cinematic storytelling with professional drone and high-end
                filmmaking for weddings across Spain and Europe.
              </p>

              <a
                href="#films"
                className="inline-block mt-10 px-8 py-4 border border-white/60 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition"
              >
                Watch Films
              </a>

            </div>

          </div>

        </section>


        {/* INTRO / ABOUT */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <div className="max-w-7xl mx-auto">

            <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

              <div>
                <img
                  src={`${R2}/mepic2.webp`}
                  alt="Wedding filmmaker Málaga portrait Alexander Kagerer AlexFilms"
                  className="w-full max-w-xl mx-auto object-cover rounded-lg"
                />
              </div>

              <div className="max-w-xl">

                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
                  The approach
                </p>

                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                  A wedding film that feels like your wedding.
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  I’m Alexander Kagerer, the filmmaker behind AlexFilms,
                  based in Málaga in southern Spain, working with couples who
                  value a natural and cinematic approach.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Rather than staged or overly directed footage, I focus on
                  real interactions, subtle moments and the overall atmosphere
                  of the day.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Each film is edited with careful attention to pacing, music
                  and sound, creating something immersive and personal rather
                  than traditional.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ABOUT VIDEO */}
        <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">

          <div className="max-w-5xl mx-auto">

            <AutoplayVideo
              src={`${R2}/mefilm.mp4`}
              poster={`${R2}/imagewebsite12.webp`}
              className="w-full max-h-[650px] object-cover rounded-lg shadow-2xl"
            />

          </div>

        </section>


        {/* FILMS */}
        <section
          id="films"
          className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-white/10"
        >

          <div className="max-w-5xl mx-auto text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
              Wedding films
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-8">
              Wedding Films in Málaga
              <br />
              & Costa del Sol
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              A short wedding trailer filmed in Málaga, capturing the
              atmosphere, location and energy of the day.
            </p>

            <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
              Working as a wedding videographer in Málaga, Marbella and across
              the Costa del Sol, the focus is on creating cinematic wedding
              videos that feel natural, engaging and true to each couple.
            </p>

            <div className="relative mt-14 aspect-video overflow-hidden rounded-lg shadow-2xl">

              <iframe
                src="https://www.youtube.com/embed/ebg8tDTMTjM?autoplay=1&mute=1&controls=0&rel=0&playsinline=1"
                title="AlexFilms cinematic wedding film Málaga"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

            </div>

          </div>

        </section>


        {/* MOMENTS */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <div className="max-w-7xl mx-auto">

            <div className="max-w-3xl mb-14">

              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
                Moments & atmosphere
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                The moments between the moments.
              </h2>

            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-5">

              <img
                src={`${R2}/imagewebsite2.webp`}
                alt="Wedding videographer Málaga cinematic couple moment"
                className="w-full aspect-4/3 object-cover rounded-lg"
              />

              <img
                src={`${R2}/imagewebsite13.webp`}
                alt="Costa del Sol wedding videographer sunset scene"
                className="w-full aspect-4/3 object-cover rounded-lg"
              />

              <img
                src={`${R2}/imagewebsite12.webp`}
                alt="Marbella wedding videographer luxury venue film"
                className="w-full aspect-4/3 object-cover object-[center_15%] rounded-lg"
              />

              <img
                src={`${R2}/imagewebsite9.webp`}
                alt="Destination wedding Spain cinematic video moment"
                className="w-full aspect-4/3 object-cover rounded-lg"
              />

            </div>

          </div>

        </section>


        {/* DESTINATION WEDDINGS */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-white/10">

          <div className="max-w-7xl mx-auto">

            <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

              <div className="max-w-xl">

                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
                  Destination weddings
                </p>

                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                  Wedding films across Spain & Europe.
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Available for destination weddings across Spain and Europe,
                  with a strong focus on Andalucía, covering a wide range of
                  wedding venues in Málaga, Spain and throughout the Costa del
                  Sol region.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Open for travel, projects can be adapted to different
                  timelines, locations and event structures while maintaining
                  a cinematic style suited for modern wedding videography in
                  Spain.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <img
                  src={`${R2}/imagewebsite5.webp`}
                  alt="Estepona wedding videographer beach wedding scene"
                  className="w-full aspect-3/4 object-cover rounded-lg"
                />

                <img
                  src={`${R2}/imagewebsite14.webp`}
                  alt="Nerja wedding videographer coastal wedding film"
                  className="w-full aspect-3/4 object-cover rounded-lg"
                />

              </div>

            </div>

          </div>

        </section>


        {/* MÁLAGA / COSTA DEL SOL */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <div className="max-w-7xl mx-auto">

            <div className="max-w-4xl">

              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
                Málaga · Costa del Sol
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                Wedding Videographer Málaga & Costa del Sol
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Filming weddings across the Costa del Sol, including Marbella,
                Estepona and Nerja, with experience covering a wide range of
                wedding venues in Málaga, Spain — from beachfront ceremonies
                to private villas and larger event locations.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Each setting brings different lighting, timing and logistical
                challenges, requiring a flexible approach to maintain a
                consistent visual style throughout the wedding day.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                As a videographer in Málaga, the focus is on delivering
                high-quality wedding video production that reflects the
                location, atmosphere and structure of each wedding, whether in
                the city, along the coast or in more remote areas.
              </p>

            </div>

          </div>

        </section>


        {/* MARBELLA / ESTEPONA / NERJA */}
        <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

            <div>

              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Wedding Videographer Marbella
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Filming weddings in Marbella offers a unique mix of luxury
                venues, coastal views and elegant settings, making it one of
                the most sought-after wedding destinations in southern Spain.
                From beachfront ceremonies to private villas, each film is
                crafted to reflect the style and energy of the location while
                maintaining a cinematic and timeless look.
              </p>

            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Estepona & Nerja
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Along the Costa del Sol, locations like Estepona and Nerja
                provide a more relaxed and scenic backdrop for destination
                weddings in Spain. Whether it’s a beachfront wedding in
                Estepona or a cliffside ceremony in Nerja, each wedding film is
                created to reflect the setting, light and atmosphere of the
                day in a cinematic way.
              </p>

            </div>

          </div>

        </section>


        {/* EXTRA IMAGE MOMENTS */}
        <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">

          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">

            <img
              src={`${R2}/imagewebsite3.webp`}
              alt="Wedding videographer Málaga bride and groom cinematic shot"
              className="w-full aspect-4/3 object-cover rounded-lg"
            />

            <img
              src={`${R2}/imagewebsite7.webp`}
              alt="Málaga wedding film romantic couple moment"
              className="w-full aspect-4/3 object-cover object-[center_30%] rounded-lg"
            />

          </div>

        </section>


        {/* SOCIALS */}
        <section className="px-6 py-24 border-t border-white/10">

          <div className="max-w-3xl mx-auto text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
              Follow & connect
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-10">
              More weddings & behind the scenes.
            </h2>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="https://www.instagram.com/alex_films_malaga/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition text-sm uppercase tracking-wider"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61578445648378"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition text-sm uppercase tracking-wider"
              >
                Facebook
              </a>

              <a
                href="https://www.youtube.com/channel/UCEi2ysMye8OYCTKDc1tpmRA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition text-sm uppercase tracking-wider"
              >
                YouTube
              </a>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section
          id="contact"
          className="relative px-6 py-32 md:py-44 overflow-hidden"
        >

          <video
            src={`${R2}/herobackground2.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-300 mb-6">
              Your wedding film
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-8">
              Let’s create something
              <br />
              worth remembering.
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Tell me about your wedding, your location and what you want your
              film to feel like.
            </p>

            <a
              href="https://wa.me/34624546805?text=Hey%20Alex,%20I%E2%80%99d%20love%20to%20ask%20for%20a%20wedding%20film.%20Our%20wedding%20is%20in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Message on WhatsApp
            </a>

          </div>

        </section>

      </main>
    </>
  );
}