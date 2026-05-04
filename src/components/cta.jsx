import React from "react";
import ctc from "../assets/ctc.png"; // adjust path if needed

const Cta = () => {
  return (
    <section
      className="mt-24 mx-6 md:mx-12 rounded-3xl overflow-hidden relative bg-cover bg-center py-16 px-6 md:py-24 md:px-12 text-center"
      style={{
        backgroundImage: `url(${ctc})`,
        backgroundPosition: "right bottom",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Glow + Border */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl leading-tight font-semibold text-white">
          Ready to experience the perfect coffee?
        </h2>

        <p className="mt-4 text-white/80 text-sm md:text-base">
          Visit us today or explore our menu online.
        </p>
        <button className="mt-6 px-8 py-3 hover:text-green-600 hover:transform-3d bg-white text-[#6f4e37] md:rounded-full rounded-full font-semibold 
        shadow-lg hover:shadow-2xl active:scale-95 transition duration-300">
        Order Now →
        </button>

        <p className="text-sm text-white/70 mt-4">
          Loved by 500+ coffee lovers daily ☕
        </p>
      </div>
    </section>
  );
};

export default Cta;