"use client";

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const R2 = "https://pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev";

const gearItems = [
  {
    number: "01",
    category: "Indoor & cinematic FPV",
    title: "Flywoo FlyLens 85 O4 Pro",
    description:
      "My compact FPV setup is built for precise, immersive flights through interiors and tight spaces. Combined with the DJI O4 Air Unit Pro, it captures detailed 4K footage with the agility needed to move through rooms, reveal architectural features and create continuous indoor-to-outdoor sequences.",
    image: `${R2}/gear1new.png`,
    alt: "Flywoo FlyLens 85 FPV drone and digital FPV equipment",
    features: [
      "Compact indoor flight platform",
      "DJI O4 Air Unit Pro",
      "Immersive, continuous camera movement",
    ],
  },
  {
    number: "02",
    category: "Ground cinematography",
    title: "Sony FX3 & DJI RS 4",
    description:
      "My main cinema camera setup combines the Sony FX3 with the DJI RS 4 gimbal for controlled, cinematic movement. I use different Sony lenses depending on the scene, from the ultra-wide 11mm to the versatile 24–70mm f/2.8 GM II and the 70–350mm telephoto zoom. A Sony microphone completes the setup for capturing sound on location.",
    image: `${R2}/gear2new.png`,
    alt: "Sony FX3 cinema camera on a DJI RS 4 gimbal with Sony lenses and microphone",
    features: [
      "Sony FX3 full-frame cinema camera",
      "Sony 24–70mm f/2.8 GM II, 11mm and 70–350mm lenses",
      "DJI RS 4 gimbal and Sony microphone",
    ],
  },
  {
    number: "03",
    category: "Aerial cinematography",
    title: "DJI Mavic 3 Pro",
    description:
      "For aerial establishing shots, landscapes and cinematic property reveals, I use the DJI Mavic 3 Pro. Its triple-camera system gives me the flexibility to move between wide environmental views and tighter compositions, helping establish a location and complement the more immersive perspective of FPV footage.",
    image: `${R2}/gear3new.png`,
    alt: "DJI Mavic 3 Pro professional camera drone",
    features: [
      "Triple-camera aerial system",
      "Wide, medium and telephoto perspectives",
      "Cinematic establishing and location shots",
    ],
  },
];

function SectionLabel({ children }) {
  return (
    <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-zinc-400">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-20 h-px w-full bg-white/10 md:my-28" />;
}

function GearSection({ item, reverse = false }) {
  return (
    <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
      {/* Circular gear image */}
      <div
        className={`relative mx-auto w-full max-w-[420px] ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-zinc-950">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 85vw, 420px"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Equipment {item.number}
            </span>
          </div>
        </div>
        <div className="absolute -bottom-3 -right-3 -z-10 aspect-square w-2/3 rounded-full border border-white/10" />
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <SectionLabel>{item.category}</SectionLabel>

        <h3 className="mb-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          {item.title}
        </h3>

        <p className="text-base leading-8 text-zinc-400 md:text-lg">
          {item.description}
        </p>

        <div className="mt-8 border-t border-white/10">
          {item.features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-start gap-4 border-b border-white/10 py-4"
            >
              <span className="mt-0.5 text-xs tabular-nums text-zinc-600">
                0{index + 1}
              </span>
              <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <main className="min-h-screen overflow-hidden bg-black font-sans text-white">
      {/* HERO */}
      <section className="relative px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl">
          <SectionLabel>Behind the camera</SectionLabel>

          <div className="grid items-end gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                Who is
                <br />
                <span className="text-zinc-400">Alex?</span>
              </h1>
            </div>

            <div className="md:col-span-4 md:pb-2">
              <p className="max-w-sm text-base leading-7 text-zinc-400 md:text-lg">
                Engineer by education. Filmmaker by passion. Driven by
                curiosity, movement and the art of telling stories through
                images.
              </p>
            </div>
          </div>

          <div className="mt-12 h-px w-full bg-white/15 md:mt-16" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="relative mx-auto w-full max-w-sm md:col-span-4 md:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-zinc-900">
              <Image
                src="/images/alex.jpg"
                alt="Portrait of Alex"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 35vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 aspect-square w-2/3 rounded-full border border-white/10" />
          </div>

          <div className="md:col-span-8">
            <SectionLabel>A little about me</SectionLabel>

            <h2 className="mb-8 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Technical precision.
              <br />
              <span className="text-zinc-400">
                A cinematic perspective.
              </span>
            </h2>

            <div className="space-y-6 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                I’m a 32-year-old German filmmaker with a master’s degree in
                engineering and a professional focus on cinematic drone and
                ground videography. My expertise lies in pushing creative and
                technical boundaries — from high-precision FPV flights to
                large-scale tourism productions.
              </p>

              <p>
                I specialize in capturing environments that are typically
                inaccessible, using cutting-edge drone technology and advanced
                camera systems to deliver world-class, production-ready
                visuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <SectionLabel>Experience & perspective</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Different places.
              <br />
              <span className="text-zinc-500">One visual vision.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-400 md:col-span-8 md:text-lg">
            <p>
              Over the past years, I’ve filmed across more than 40 countries —
              combining technical skill, cultural understanding, and cinematic
              storytelling. From dense urban centers to remote mountain
              regions, I adapt to any environment while maintaining consistent
              image quality and creative vision.
            </p>

            <p>
              My focus is on precision and control — ensuring every shot,
              every flight, and every transition aligns with a cohesive visual
              narrative that feels immersive and authentic.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div
          ref={ref}
          className="grid grid-cols-1 gap-12 border-y border-white/10 py-12 text-center md:grid-cols-3 md:gap-8 md:py-16"
        >
          <div>
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              {inView ? <CountUp end={40} duration={2.5} /> : "0"}
              <span className="text-zinc-500">+</span>
            </h2>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
              Countries filmed
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              {inView ? <CountUp end={200} duration={2.5} /> : "0"}
              <span className="text-zinc-500">+</span>
            </h2>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
              Flight hours logged
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              {inView ? (
                <CountUp end={500000} duration={2.5} separator="," />
              ) : (
                "0"
              )}
              <span className="text-zinc-500">+</span>
            </h2>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
              Organic views worldwide
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL GEAR */}
      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-20">
        <div className="mb-16 md:mb-24">
          <SectionLabel>Tools of the trade</SectionLabel>

          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Professional gear.
                <br />
                <span className="text-zinc-500">
                  Creative possibilities.
                </span>
              </h2>
            </div>

            <p className="text-base leading-7 text-zinc-400 md:col-span-4">
              The right tools for the right perspective — from precise indoor
              FPV flights to controlled ground cinematography and aerial
              storytelling.
            </p>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {gearItems.map((item, index) => (
            <GearSection
              key={item.number}
              item={item}
              reverse={index === 1}
            />
          ))}
        </div>
      </section>

      <Divider />

      {/* SECOND PORTRAIT — PERSONAL SIDE */}
      <section className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-zinc-900">
              <Image
                src={`${R2}/menew.jpg`}
                alt="Alex behind the camera"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 aspect-square w-2/3 rounded-full border border-white/10" />
          </div>

          <div className="md:col-span-7">
            <SectionLabel>Beyond the equipment</SectionLabel>

            <h2 className="mb-8 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              The person behind
              <br />
              <span className="text-zinc-500">the camera.</span>
            </h2>

            <div className="space-y-6 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                For me, filmmaking is about more than technical perfection.
                It’s about curiosity, discovering new perspectives and finding
                the details that make a place or a moment feel unique.
              </p>

              <p>
                Whether I’m flying an FPV drone through an architectural space
                or filming on the ground, I aim to create images that feel
                immersive, intentional and true to the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* FILMMAKING APPROACH */}
      <section className="mx-auto max-w-6xl px-6 py-4 md:py-12">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel>My approach</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              More than
              <br />
              <span className="text-zinc-500">just the shot.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-400 md:col-span-7 md:text-lg">
            <p>
              My work combines engineering-level precision with artistic
              storytelling. Every scene is designed to bring the audience
              closer to the real experience — visually and emotionally.
            </p>

            <p>
              From concept to final color grade, I maintain a consistent,
              professional workflow that ensures quality across commercial,
              cinematic, and travel projects.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-10">
          <SectionLabel>Selected moments</SectionLabel>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            A few frames from my world.
          </h2>
        </div>

        <div className="about-images grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
            <Image
              src="/images/video1.png"
              alt="Selected filmmaking project"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900 sm:translate-y-8">
            <Image
              src="/images/pic6.png"
              alt="Selected cinematic moment"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
            <Image
              src="/images/video3.png"
              alt="Selected aerial filmmaking project"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>AlexFilms</SectionLabel>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Every project starts with a perspective.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Whether it’s a property, an event or a story worth sharing, I’m
            always interested in exploring new ways to bring it to life.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium transition duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            Get in touch <span className="ml-3">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
