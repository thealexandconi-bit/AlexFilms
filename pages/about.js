import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* ===== TITLE ===== */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-12 uppercase tracking-wider">
            Who is Alex?
          </h1>
          <div className="w-40 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* ===== INTRO SECTION ===== */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-20 space-y-10 md:space-y-0 md:space-x-12">
          <div className="md:w-3/4 text-base md:text-lg leading-relaxed space-y-8 text-gray-200">
            <p>
              I’m a 32-year-old German filmmaker with a master’s degree in engineering and a professional focus on cinematic drone and ground videography. My expertise lies in pushing creative and technical boundaries — from high-precision FPV flights to large-scale tourism productions.
            </p>
            <p>
              I specialize in capturing environments that are typically inaccessible, using cutting-edge drone technology and advanced camera systems to deliver world-class, production-ready visuals.
            </p>
          </div>

          <div className="md:w-1/4 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/images/alex.jpg"
              alt="Alex Portrait"
              width={250}
              height={250}
              className="rounded-full shadow-lg object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full h-0.5 bg-white mb-20"></div>

        {/* ===== EXPERIENCE SECTION ===== */}
        <div className="text-base md:text-lg leading-relaxed text-gray-200 space-y-8 mb-20">
          <p>
            Over the past years, I’ve filmed across more than 40 countries — combining technical skill, cultural understanding, and cinematic storytelling. From dense urban centers to remote mountain regions, I adapt to any environment while maintaining consistent image quality and creative vision.
          </p>
          <p>
            My focus is on precision and control — ensuring every shot, every flight, and every transition aligns with a cohesive visual narrative that feels immersive and authentic.
          </p>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full h-0.5 bg-white mb-20"></div>

        {/* ===== STATS SECTION ===== */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-28">
          <div>
            <h2 className="text-5xl font-extrabold text-blue-400">
              {inView ? <CountUp end={40} duration={3} /> : "0"}+
            </h2>
            <p className="mt-4 text-sm uppercase tracking-wider text-gray-300">Countries Filmed</p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-blue-400">
              {inView ? <CountUp end={200} duration={3} /> : "0"}+
            </h2>
            <p className="mt-4 text-sm uppercase tracking-wider text-gray-300">Flight Hours Logged</p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-blue-400">
              {inView ? <CountUp end={500000} duration={3} separator="," /> : "0"}+
            </h2>
            <p className="mt-4 text-sm uppercase tracking-wider text-gray-300">Organic Views Worldwide</p>
          </div>
        </div>

        {/* ===== PROFESSIONAL GEAR SECTION ===== */}
        <div className="mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wider">
            Professional Gear
          </h2>
          <div className="w-32 h-0.5 bg-white mx-auto mb-16"></div>

          {/* --- FPV DRONE --- */}
          <div className="flex flex-col md:flex-row items-center mb-28 md:space-x-16">
            <div className="md:w-1/2">
              <Image
                src="/images/gear1.png"
                alt="FPV Drone Flywoo Flylens 85"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-gray-200 mt-8 md:mt-0 text-base md:text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 uppercase">
                FPV Drone – Flywoo Flylens 85 O4 Pro
              </h3>
              <p>
                The Flywoo Flylens 85 O4 Pro is an ultra-light FPV drone weighing under 100g, equipped with DJI’s O4 Air Unit Pro. It records ultra-stable 4K video with low latency, making it ideal for high-speed indoor and outdoor sequences. Its small size allows flight in tight spaces while maintaining professional-grade image quality.
              </p>
            </div>
          </div>

          {/* --- CINEMA CAMERA / GIMBAL RIG --- */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-28 md:space-x-16 md:space-x-reverse">
            <div className="md:w-1/2">
              <Image
                src="/images/gear2.png"
                alt="Sony FX30 and DJI RS4 Mini Gimbal"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-gray-200 mt-8 md:mt-0 text-base md:text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 uppercase">
                Cinema Camera & Gimbal Rig
              </h3>
              <p>
                My main ground setup consists of the Sony FX30 with the DJI RS4 Mini gimbal. This combination delivers cinematic-quality 10-bit 4:2:2 footage with perfect stabilization. I use multiple lenses tailored to different shooting environments — from wide-angle cinematic landscapes to tight, portrait-style storytelling.
              </p>
            </div>
          </div>

          {/* --- CINEMATIC DRONE --- */}
          <div className="flex flex-col md:flex-row items-center md:space-x-16">
            <div className="md:w-1/2">
              <Image
                src="/images/gear3.png"
                alt="DJI Mavic 3 Pro"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-gray-200 mt-8 md:mt-0 text-base md:text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 uppercase">
                Cinematic Drone – DJI Mavic 3 Pro
              </h3>
              <p>
                The DJI Mavic 3 Pro is my main cinematic aerial system. Featuring triple lenses with Hasselblad color science and up to 5.1K resolution recording, it ensures flexibility for every creative angle — from wide establishing shots to telephoto details. The camera’s precision allows for cinematic motion and consistent tone across all production styles.
              </p>
            </div>
          </div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full h-0.5 bg-white mb-24"></div>

        {/* ===== FILMMAKING APPROACH ===== */}
        <div className="text-base md:text-lg leading-relaxed text-gray-200 space-y-8 mb-20">
          <p>
            My work combines engineering-level precision with artistic storytelling. Every scene is designed to bring the audience closer to the real experience — visually and emotionally.
          </p>
          <p>
            From concept to final color grade, I maintain a consistent, professional workflow that ensures quality across commercial, cinematic, and travel projects.
          </p>
        </div>

        {/* ===== GALLERY ===== */}
        <div className="about-images grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <Image
            src="/images/video1.png"
            alt="Filming in remote locations"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/pic6.png"
            alt="Drone cinematography"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/video3.png"
            alt="Travel filmmaking"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
