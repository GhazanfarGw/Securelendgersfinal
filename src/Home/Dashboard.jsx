import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#EEF3FA] py-12 md:py-28 overflow-hidden duration-500">
      <div className="md:max-w-screen-lg lg:max-w-screen-lg duration-500 mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='block md:hidden lg:hidden pt-5'>
          <video 
            class="" 
            loop autoPlay muted playsinline>
            <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
          </video>
        </div>


        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm text-[#1A2B6B] md:mb-6 mb-4">
            <span className="w-2 h-2 bg-[#1A2B6B] rounded-full"></span>
            Institutional-Grade Solutions
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-[#2F6FD6]">Secure Crypto Liquidation</span>{" "}
            <span className="text-[#1A2B6B]">&</span>
            <span className="text-[#1A2B6B]">
                Institutional-Grade Asset Protection
            </span>
          </h1>

          {/* Description */}
          <p className="md:mt-6 mt-2 text-[#6D7380] text-sm md:text-base md:max-w-xl leading-relaxed">
            Execute high-value cryptocurrency transactions with deep liquidity
            access, OTC desk routing, and slippage-optimized execution strategies.
            Protect digital assets through multi-layered cold storage architectures
            and advanced operational security frameworks.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-[#2F6FD6] text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              <a href="/contact-us">Book Private Consultation →</a>
              
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl text-[#1A2B6B] hover:bg-white transition">
              <a href="#services" className="text-[#1A2B6B]">
                Learn More
              </a>
            </button>
          </div>
        </div>

        {/* RIGHT CARD UI */}
        <div className="relative">

          {/* Main Card */}
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='max-w-screen-lg mx-auto mt-10 hidden lg:block md:block'>
              <video 
                class="justify-center mx-auto max-w-lg items-center" 
                loop autoPlay muted playsinline>
                <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
              </video>
            </div>
          {/* Background Accent */}
          <div className="absolute top-4 right-0 w-full h-full bg-[#2F6FD6] rounded-3xl -z-10 translate-x-4 translate-y-4 opacity-10"></div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
