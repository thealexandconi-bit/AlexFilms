export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Alex FPV Films</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Cinematic FPV Pilot & Filmmaker
        </p>
        <a
          href="#portfolio"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          View Portfolio
        </a>
      </div>
    </section>
  )
}
