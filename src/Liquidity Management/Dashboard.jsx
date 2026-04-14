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
                src="/liq.png" // 👉 replace with your image
                alt="Liquidity Management"
                className="relative sm:max-w-xs"
              />

            </div>

          </div>

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl font-bold leading-tight">
            <span className="text-[#2F6FD6]">Execute High-Volume Crypto</span>{" "}
            <br className="hidden md:block xl:block lg:hidden"/>
            <span className="text-[#1A2B6B]">
              Transactions Without Slippage or Market Exposure
            </span>
          </h1>
          <p className="md:mt-6 mt-2 text-[#6D7380] text-sm md:text-base md:max-w-xl leading-relaxed">
            Access institutional-grade liquidity infrastructure, OTC block execution, and multi-venue routing systems designed for high-value transactions with minimal market impact and optimized settlement efficiency.
          </p>

          {/* Description */}
          <p className="mt-6 text-[#6D7380] text-sm md:text-base max-w-xl leading-relaxed">
            
          </p>

          {/* Buttons */}
          <div className="md:mt-8 mt-6 flex gap-4 flex-wrap">
            <button className="bg-[#2F6FD6] md:text-base text-sm text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              <a href="#access">Request Private Liquidity Access  →</a>
            </button>

            <button className="border border-gray-300 md:text-base text-sm px-6 py-3 rounded-xl text-[#1A2B6B] hover:bg-white transition">
              <a href="/contact-us">Get Execution Quote</a>
            </button>
          </div>
        </div>
          {/* RIGHT IMAGE */}
          <div className="relative justify-center hidden xl:block lg:block mt-14">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute" />
              {/* Image */}
              <img
                src="/liq.png" // 👉 replace with your image
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