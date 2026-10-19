import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const R2 = "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev";

function AutoplayVideo({ src, className = "", poster }) {
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
      { threshold: 0.15 }
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
      aria-label="Cinematic FPV villa footage"
    />
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-zinc-400">
      {children}
    </p>
  );
}

function ClipCard({ src, title, description, number }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <AutoplayVideo
          src={`${R2}/${src}`}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs tracking-widest text-white backdrop-blur-sm">
          {number}
        </span>
      </div>

      <div className="p-6 md:p-7">
        <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
          {title}
        </h3>
        <p className="leading-relaxed text-zinc-400">{description}</p>
      </div>
    </article>
  );
}

export default function LuxuryVillaFPVMarbella() {
  return (
    <>
      <Head>
        <title>
          Luxury Villa FPV Marbella | Cinematic Indoor Drone Tours | AlexFilms
        </title>

        <meta
          name="description"
          content="Showcase luxury villas in Marbella and the Costa del Sol with cinematic indoor FPV drone tours. Seamless room-to-room flights, architectural reveals and immersive indoor-outdoor transitions by AlexFilms."
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
          content="Discover a more immersive way to present luxury properties with cinematic indoor FPV flights across Marbella and the Costa del Sol."
        />

        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="overflow-hidden bg-black text-white">
        {/* HERO */}
        <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden md:min-h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Cinematic FPV footage of a luxury villa"
          >
            <source
              src={`${R2}/herobackgroundfpv.mp4`}
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black to-transparent" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
            <SectionLabel>Luxury Property · FPV Filmmaking</SectionLabel>

            <h1 className="mb-8 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Luxury Villa
              <br />
              FPV Tours
              <br />
              <span className="text-zinc-300">in Marbella</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-200 md:text-xl">
              Experience exceptional properties through immersive,
              cinematic flights that connect architecture, interiors
              and outdoor living in one fluid visual journey.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#showcase"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-zinc-200"
              >
                Explore the footage
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Discuss a property
              </Link>
            </div>

            <p className="mt-12 text-xs uppercase tracking-[0.22em] text-zinc-400">
              Marbella · Costa del Sol · Spain
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <SectionLabel>A different perspective</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Don&apos;t just show the rooms.
                <br />
                <span className="text-zinc-400">
                  Reveal how they connect.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-zinc-400 md:col-span-7">
              <p>
                A luxury property is more than a collection of beautiful
                rooms. It is the way the entrance opens into the living
                space, how the kitchen connects to the terrace, and how
                the interior meets the pool and surrounding landscape.
              </p>

              <p>
                Indoor FPV filming brings these relationships to life.
                A compact, agile drone moves through carefully planned
                routes to create a continuous perspective that conventional
                static shots often cannot achieve on their own.
              </p>

              <p>
                The result is an immersive way to communicate the flow,
                scale and atmosphere of a property to prospective buyers,
                renters and clients.
              </p>
            </div>
          </div>
        </section>

        {/* EXTERIOR REVEAL */}
        <section id="showcase" className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>01 · First impressions</SectionLabel>
              <h2 className="mb-6 text-4xl font-semibold md:text-6xl">
                Build anticipation.
                <br />
                Reveal the property.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
                A carefully composed approach creates a sense of arrival.
                Move past a palm, sweep across the pool and reveal the
                architecture to establish the setting before taking the
                viewer inside.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ClipCard
                number="01"
                src="villa-fpv-01-palm-reveal.mp4"
                title="A reveal through the palms"
                description="Use foreground elements to create depth and anticipation, gradually opening up the view of the villa, pool and outdoor spaces."
              />

              <ClipCard
                number="02"
                src="villa-fpv-03-pool-approach.mp4"
                title="A dynamic approach to the house"
                description="Move across the pool towards the architecture to communicate scale, proximity and the relationship between the home and its outdoor setting."
              />

              <ClipCard
                number="03"
                src="villa-fpv-05-poolside-return.mp4"
                title="Follow the outdoor living space"
                description="A return flight over the poolside benches offers another perspective on the terrace and leisure areas, helping viewers imagine the experience of being there."
              />

              <ClipCard
                number="04"
                src="villa-fpv-06-palm-reveal-alt.mp4"
                title="Another angle on the architecture"
                description="A second palm-tree reveal can add variety to the exterior story, showing the property from a different approach and creating a stronger sense of place."
              />
            </div>
          </div>
        </section>

        {/* INDOOR-OUTDOOR TRANSITION */}
        <section className="border-y border-white/10 bg-zinc-950 px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-900">
                <AutoplayVideo
                  src={`${R2}/villa-fpv-04-terrace-to-interior.mp4`}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Terrace → open sliding doors → living room
              </p>
            </div>

            <div className="order-1 md:order-2">
              <SectionLabel>02 · Indoor meets outdoor</SectionLabel>
              <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
                One fluid transition.
                <br />
                <span className="text-zinc-400">
                  Two connected worlds.
                </span>
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                In Mediterranean luxury properties, the connection between
                the terrace and interior is part of the experience. FPV
                can travel from the outdoor living area through open
                sliding doors and into the home, making that connection
                immediately visible.
              </p>

              <p className="leading-relaxed text-zinc-400">
                Rather than cutting between disconnected views, this
                continuous movement helps the viewer understand how the
                spaces relate to one another.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED INTERIOR FLOW */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>03 · Interior flow</SectionLabel>
            <h2 className="mb-6 text-4xl font-semibold md:text-6xl">
              Follow the architecture.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-400">
              From the entrance hall through the kitchen and dining area
              into the living room, a single flight can reveal the layout
              as a connected experience. The movement gives viewers a
              clearer sense of the home&apos;s proportions, circulation
              and relationship between its main living spaces.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
            <div className="relative aspect-video bg-zinc-900">
              <AutoplayVideo
                src={`${R2}/villa-fpv-02-interior-flow.mp4`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-3 md:p-9">
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  A continuous perspective
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Connect multiple rooms without relying entirely on
                  separate, disconnected shots.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  A sense of space
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Show how the entrance, kitchen, dining area and living
                  room fit together.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  A natural journey
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Guide the viewer through the property with purposeful
                  movement and carefully planned framing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BASEMENT AND DISTINCTIVE SPACES */}
        <section className="border-y border-white/10 bg-zinc-950 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>04 · Beyond the main living spaces</SectionLabel>
              <h2 className="mb-6 text-4xl font-semibold md:text-6xl">
                Every space has a story.
              </h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                Entertainment rooms, private gyms and basement lounges
                are important parts of a luxury property. FPV creates
                opportunities to explore these spaces with movement,
                revealing their layout and character rather than simply
                presenting a series of static views.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ClipCard
                number="05"
                src="villa-fpv-07-basement-lounge.mp4"
                title="Explore the private lounge"
                description="A circular flight through the basement lounge gives the viewer a sense of the room's layout and atmosphere, making the entertainment space feel like part of the wider property experience."
              />

              <ClipCard
                number="06"
                src="villa-fpv-08-gym-flythrough.mp4"
                title="Bring the wellness space to life"
                description="A smooth flight through the gym shows how the fitness area is arranged and how it fits into the property's private amenities."
              />

              <div className="md:col-span-2">
                <article className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <div className="relative aspect-video bg-zinc-900">
                    <AutoplayVideo
                      src={`${R2}/villa-fpv-09-pool-table-gap.mp4`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="grid gap-6 p-6 md:grid-cols-2 md:p-9">
                    <div>
                      <SectionLabel>A closer look at precision</SectionLabel>
                      <h3 className="text-2xl font-semibold md:text-3xl">
                        Through spaces a camera cannot easily reach.
                      </h3>
                    </div>

                    <div>
                      <p className="leading-relaxed text-zinc-400">
                        Flying beneath a pool table through its openings
                        is a small but memorable demonstration of precise
                        FPV control. It shows how carefully planned
                        movement can turn an ordinary feature into an
                        unexpected visual moment.
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                        Tight-space manoeuvres are planned around the
                        location, obstacles and safe operating conditions.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* FULL PROPERTY PRESENTATION */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>05 · The complete presentation</SectionLabel>
            <h2 className="mb-6 text-4xl font-semibold md:text-6xl">
              See the villa as a whole.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-400">
              Individual sequences highlight specific features. A longer
              property presentation brings those moments together into
              a broader visual journey, giving the viewer more time to
              appreciate the architecture, interiors and outdoor areas.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-zinc-900">
            <video
              controls
              muted
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
              aria-label="Full cinematic FPV villa presentation"
            >
              <source
                src={`${R2}/villapresentation.mp4`}
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            Watch the longer presentation to experience how the property&apos;s
            different spaces come together in a single film.
          </p>
        </section>

        {/* BENEFITS */}
        <section className="border-y border-white/10 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <SectionLabel>Why FPV</SectionLabel>
              <h2 className="mb-6 text-4xl font-semibold md:text-6xl">
                More than a sequence of rooms.
              </h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                FPV is not a replacement for every kind of property
                photography or filmmaking. It is a specialist approach
                that adds continuous movement and distinctive perspectives
                to a considered property presentation.
              </p>
            </div>

            {/* FPV GEAR & VIDEO QUALITY */}
            <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
              <div className="grid items-center gap-0 lg:grid-cols-2">
                <div className="relative min-h-[280px] bg-zinc-900 sm:min-h-[380px]">
                  <img
                    src={`${R2}/gear1new.png`}
                    alt="Flywoo FlyLens 85 FPV drone with DJI Goggles 3 and RadioMaster GX12 controller"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-7 md:p-10 lg:p-12">
                  <SectionLabel>The equipment behind the shot</SectionLabel>
                  <h3 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
                    Compact FPV.{" "}
                    <span className="text-zinc-400">Cinematic detail.</span>
                  </h3>
                  <p className="mb-8 leading-relaxed text-zinc-400">
                    My indoor FPV setup combines a compact Flywoo FlyLens 85,
                    DJI Goggles 3 and RadioMaster GX12 controller with the DJI
                    O4 Air Unit Pro. The digital video system records detailed,
                    wide-angle footage while allowing precise movement through
                    carefully planned routes inside a property.
                  </p>

                  <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                    <div className="border-t border-white/15 pt-4">
                      <p className="mb-1 text-2xl font-semibold text-white">
                        4K / 120 fps
                      </p>
                      <p className="text-sm leading-relaxed text-zinc-500">
                        High-resolution recording with high-frame-rate options
                      </p>
                    </div>

                    <div className="border-t border-white/15 pt-4">
                      <p className="mb-1 text-2xl font-semibold text-white">
                        1/1.3-inch
                      </p>
                      <p className="text-sm leading-relaxed text-zinc-500">
                        CMOS image sensor in the O4 Air Unit Pro
                      </p>
                    </div>

                    <div className="border-t border-white/15 pt-4">
                      <p className="mb-1 text-2xl font-semibold text-white">
                        10-bit D-Log M
                      </p>
                      <p className="text-sm leading-relaxed text-zinc-500">
                        More flexibility for colour grading in post-production
                      </p>
                    </div>

                    <div className="border-t border-white/15 pt-4">
                      <p className="mb-1 text-2xl font-semibold text-white">
                        155° FOV
                      </p>
                      <p className="text-sm leading-relaxed text-zinc-500">
                        Ultra-wide field of view for immersive perspectives
                      </p>
                    </div>
                  </div>

                  <p className="mt-7 text-xs leading-relaxed text-zinc-500">
                    Recording modes and image results depend on camera settings,
                    flight conditions and the final delivery format.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-x-12 gap-y-12 md:grid-cols-3">
              <div>
                <p className="mb-5 text-sm tracking-widest text-zinc-500">
                  01
                </p>
                <h3 className="mb-3 text-xl font-semibold">
                  Show how spaces connect
                </h3>
                <p className="leading-relaxed text-zinc-400">
                  Move from room to room to help viewers understand the
                  property&apos;s layout and flow.
                </p>
              </div>

              <div>
                <p className="mb-5 text-sm tracking-widest text-zinc-500">
                  02
                </p>
                <h3 className="mb-3 text-xl font-semibold">
                  Reveal the indoor-outdoor lifestyle
                </h3>
                <p className="leading-relaxed text-zinc-400">
                  Connect interiors with terraces, pools and gardens
                  through continuous movement.
                </p>
              </div>

              <div>
                <p className="mb-5 text-sm tracking-widest text-zinc-500">
                  03
                </p>
                <h3 className="mb-3 text-xl font-semibold">
                  Create memorable perspectives
                </h3>
                <p className="leading-relaxed text-zinc-400">
                  Use foreground reveals, low passes and carefully
                  planned routes to add visual interest.
                </p>
              </div>

              <div>
                <p className="mb-5 text-sm tracking-widest text-zinc-500">
                  04
                </p>
                <h3 className="mb-3 text-xl font-semibold">
                  Highlight the details
                </h3>
                <p className="leading-relaxed text-zinc-400">
                  Showcase architectural features, entertainment areas
                  and distinctive amenities.
                </p>
              </div>

              <div>
                <p className="mb-5 text-sm tracking-widest text-zinc-500">
                  05
                </p>
                <h3 className="mb-3 text-xl font-semibold">
                  Create versatile content
                </h3>
                <p className="leading-relaxed text-zinc-400">
                  Plan footage that can support a full property film
                  and shorter social-media edits.
                </p>
              </div>

              <div>
                <p className="mb-5 text-sm tracking-widest text-zinc-500">
                  06
                </p>
                <h3 className="mb-3 text-xl font-semibold">
                  Combine filming techniques
                </h3>
                <p className="leading-relaxed text-zinc-400">
                  Pair FPV with conventional aerial footage and cinema
                  camera shots when a production calls for a broader
                  visual approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>Made for distinctive properties</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                For properties that deserve a more immersive presentation.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-relaxed text-zinc-400">
              <p>
                <span className="font-medium text-white">
                  Real-estate agencies
                </span>{" "}
                presenting exceptional homes to prospective buyers.
              </p>

              <p>
                <span className="font-medium text-white">
                  Luxury villa owners and rental companies
                </span>{" "}
                showcasing the full experience of a property.
              </p>

              <p>
                <span className="font-medium text-white">
                  Architects and developers
                </span>{" "}
                highlighting spatial design, circulation and architectural
                features.
              </p>

              <p>
                <span className="font-medium text-white">
                  Hospitality brands and creative agencies
                </span>{" "}
                looking for distinctive property content.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Cinematic villa background"
          >
            <source
              src={`${R2}/herobackgroundfpv.mp4`}
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black to-transparent" />

          <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
            <SectionLabel>Marbella · Costa del Sol</SectionLabel>

            <h2 className="mb-8 text-4xl font-semibold leading-tight md:text-6xl">
              Let&apos;s turn your property into a film.
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Have a villa, architectural space or distinctive property
              in mind? Let&apos;s discuss how a carefully planned FPV
              sequence could present it from a fresh perspective.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-zinc-200"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}