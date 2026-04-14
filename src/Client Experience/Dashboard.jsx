import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#EEF3FA] py-12 lg:py-32 xl:py-40 md:py-32 justify-center mx-auto overflow-hidden">
      <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-screen-xl duration-500 mx-auto px-5 xl:px-10 lg:px-10 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
        
          {/* RIGHT IMAGE */}
          <div className="mt-10 md:mt-0 relative flex justify-center block xl:hidden lg:hidden">
            <div className="relative">
              {/* Image */}
              <img
                src="/client.png" // 👉 replace with your image
                alt="Client Experience"
                className="relative sm:max-w-xs"
              />

            </div>

          </div>

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl font-bold leading-tight">
            <span className="text-[#1A2B6B]">
              A Private, Institutional-Grade Experience for High-Value Clients
            </span>
          </h1>
          <p className="md:mt-6 mt-2 text-[#6D7380] text-sm md:text-base md:max-w-xl leading-relaxed">
            Designed for individuals and organizations requiring discretion, precision execution, and high-touch advisory across digital asset transactions, liquidity operations, and security frameworks.
          </p>

          {/* Description */}
          <p className="mt-6 text-[#6D7380] text-sm md:text-base max-w-xl leading-relaxed">
            
          </p>

          {/* Buttons */}
          <div className="md:mt-8 mt-6 flex gap-4 flex-wrap">
            <button className="bg-[#2F6FD6] md:text-base text-sm text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              <a href="/contact-us">Request a Private Consultation  →</a>
            </button>
          </div>
          {/* Trust Line */}
          <p className="mt-6 text-sm text-[#6D7380] max-w-xl">
            Built for clients who demand confidential handling, structured execution, and institutional-level service standards.
          </p>
        </div>
          {/* RIGHT IMAGE */}
          <div className="relative justify-center hidden xl:block lg:block mt-14">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute" />
              {/* Image */}
              <img
                src="/client.png" // 👉 replace with your image
                alt="Client Experience"
                className="relative mx-auto justify-center text-center"
              />
            </div>
          </div>

      </div>
    </section>
  );
};

export default Hero;