import React from "react";

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
    Brew<span className="text-[#8B5E3C]">Haus</span>
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
    <section className="min-h-[85vh] flex items-center">
 <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6 py-16">
    
    {/* LEFT */}
 <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left space-y-5 fade-up">
      <p className="text-sm text-gray-600  tracking-widest">
        SPECIALTY COFFEE HOUSE
      </p>

  <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-[#2d1f14]">
  Savor the <br />
  <span className="text-[#8b5e3c]">art</span> of coffee.
</h1>

     <p className="mt-6 text-gray-600 max-w-lg text-lg">
  Where every cup is a masterpiece and every moment is yours.
</p>

  <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
  <button className="bg-[#8b5e3c] text-white px-5 py-3 rounded-full hover:scale-105 transition shadow-md">
    View Menu
  </button>

  <button className="border border-gray-400 px-7 py-3 rounded-full hover:bg-gray-100 transition">
    Watch Story
  </button>

      </div>
    </div>

    {/* RIGHT */}

 <div className="relative flex justify-center md:justify-end fade-up">

  
   <div className="absolute w-72 h-72 bg-[#c8a27a] blur-[120px] opacity-40 rounded-full top-10"></div>
<div className="absolute w-52 h-52 bg-[#e6c7a1] blur-[100px] opacity-30 rounded-full top-20 left-10"></div>

  {/* Actual Image */}
  
   <img
    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    alt="coffee"
   className="relative z-10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] w-full max-w-xs md:max-w-md rotate-1 hover:rotate-0 transition duration-500"
  />
 


</div>

  </div>
</section>

{/* Menu section */}
<section className="px-10 md:px-20 pt-16 pb-24">
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
        rounded-3xl p-6 h-full
        bg-[#f5f1eb]
        relative overflow-hidden
      ">

        {/* soft light glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 blur-2xl rounded-full"></div>

        {/* icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e7dfd6] mb-4 text-xl shadow-inner">
          {item.icon}
        </div>

        {/* title */}
        <h3 className="text-lg font-semibold text-gray-800">
          {item.title}
        </h3>

        {/* desc */}
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          {item.desc}
        </p>

      </div>
    </div>

  ))}

</div>
  </div>
</section>

{/** ctc section */}
<section className="mt-20 mx-6 rounded-3xl p-10 text-center 
bg-gradient-to-br from-[#6f4e37] via-[#8b5e3c] to-[#c2a27c] text-white shadow-xl">

  <h2 className="text-3xl md:text-4xl font-semibold">
    Ready to experience the perfect coffee?
  </h2>

  <p className="mt-3 text-white/80">
    Visit us today or explore our menu online.
  </p>

  <button className="mt-6 px-8 py-3 bg-white text-[#6f4e37] rounded-full font-medium hover:scale-105 transition">
    Order Now →
  </button>

</section>
    </div>
    </div>
  );
};

export default App;