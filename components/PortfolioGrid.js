import React from "react";

export default function PortfolioGrid() {
  return (
    <section className="px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-8">My Expertise</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            FPV Drone Cinematics
          </h3>
          <p className="text-gray-400">
            I use the ultra-light Flywoo Flylens 85 paired with the DJI O4 Air
            Unit Pro — a sub-100g FPV drone that delivers smooth,
            color-graded footage in both indoor and outdoor environments. Its
            agility allows me to film tight spaces and dynamic angles that
            larger drones can’t reach.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            City Showreels & Tourism Board Films
          </h3>
          <p className="text-gray-400">
            I produce cinematic city and tourism films that highlight key
            attractions, atmosphere, and identity in a clear and engaging way.
            The goal is to help destinations stand out and attract visitors
            through high-quality visual storytelling.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Creating Music Videos
          </h3>
          <p className="text-gray-400">
            I build edits with precise timing and clean structure. Every cut
            is intentional — driven by story and purpose, not random beats.
            This approach delivers videos that are clear, engaging, and
            professionally finished for commercial use.
          </p>
        </div>
      </div>
    </section>
  );
}