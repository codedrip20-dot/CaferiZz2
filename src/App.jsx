import React from "react";
import Hero from "./components/hero";
import Ctc from "./assets/ctc.png"
import Cta from "./components/cta";

const App = () => {
  return (
   <div className="min-h-screen bg-[#f8f5f2] relative text-gray-900">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#e6dccf,_transparent_60%)]"></div>
      <div className="relative z-10">
      {/* NAVBAR (we'll improve later) */}
   <nav className="px-6 py-4 sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200/50 shadow-sm">
 <div className="max-w-6xl mx-auto flex items-center justify-between">

  {/* Logo */}
  <h1 className="text-lg font-semibold tracking-wide">
    Caffe<span className="text-[#8B5E3C]">Rizz</span>
  </h1>

  {/* Menu (desktop only) */}
  <div className="hidden md:flex gap-8 text-sm text-gray-600">
    <a href="#" className="hover:text-black transition">Home</a>
    <a href="#" className="hover:text-black transition">Menu</a>
    <a href="#" className="hover:text-black transition">About</a>
    <a href="#" className="hover:text-black transition">Contact</a>
  </div>

  {/* Button */}
  <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
    Order Now
  </button>

</div>
</nav>

      {/* HERO */}
   <Hero />

{/* Menu section */}
<section className="px-10 md:px-20 pt-16 pb-24 bg-gradient-to-b from-transparent via-white to-white py-20">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="mb-16">
      <p className="text-sm tracking-widest text-gray-500 mb-3">
        WHAT WE OFFER
      </p>

      <h2 className="text-3xl md:text-5xl font-semibold text-[#2d1f14]">
        Crafted for coffee lovers.
      </h2>
    </div>

    {/* Cards */}
   <div className="grid md:grid-cols-3 gap-8">

  {[
    {
      title: "Signature Brews",
      desc: "Rich, bold, and perfectly balanced flavors in every cup.",
      icon: "☕"
    },
    {
      title: "Warm Ambience",
      desc: "A cozy space designed for comfort, creativity, and connection.",
      icon: "🪑"
    },
    {
      title: "Fresh Bakes",
      desc: "Daily baked delights that pair perfectly with your coffee.",
      icon: "🥐"
    }
  ].map((item, i) => (

    <div
      key={i}
      className="
      group relative p-[1px] rounded-3xl 
      bg-gradient-to-br from-white/40 to-white/10
      backdrop-blur-xl
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      transition duration-500
      hover:-translate-y-3
      "
    >

      {/* inner card */}
      <div className="
          group rounded-3xl p-6 h-full
          bg-white/70 backdrop-blur-md
          border border-white/40
          relative overflow-hidden
          transition duration-300
          hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          ">

        {/* soft light glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#8B5E3C]/20 blur-3xl rounded-full group-hover:scale-110 transition"></div>

        {/* icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full 
                                    bg-[#8B5E3C]/10 text-[#8B5E3C]
                                    mb-4 text-xl
                                    group-hover:scale-110 transition">
          {item.icon}
        </div>

        {/* title */}
        <h3 className="text-lg font-semibold text-gray-900">
          {item.title}
        </h3>

        {/* desc */}
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          {item.desc}
        </p>

      </div>
    </div>

  ))}
  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none"></div>
</div>
  </div>
</section>

{/** ctc section */}
<Cta />
    </div>
    </div>
  );
};

export default App;