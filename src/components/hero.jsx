import React from "react";
import heroBg from "../assets/banana leaves.PNG"; // your background image
import coffeeImg from "../assets/hero.png"; // optional: replace with your image

const Hero = () => {
  return (
    <section
      className="relative min-h-[85vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
        
        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="text-sm tracking-widest text-gray-200 md:text-gray-300">
            Welcome to caffe Rizz 
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-4 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            witness the <br />
            <span className="text-[#8B5E3C]">art</span> of coffee.
          </h1>

          <p className="mt-4 text-gray-200 md:text-gray-300 max-w-md mx-auto md:mx-0">
            Where every cup is a masterpiece and every moment is yours.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#8B5E3C] text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg transition">
              View Menu
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Watch Story
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
             <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="coffee"
             className="rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.4)]  w-[250px] md:w-[360px] transform md:rotate-[-2deg] hover:rotate-0 hover:scale-105 transition duration-500"
              />
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;