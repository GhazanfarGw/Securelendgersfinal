import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#EEF3FA] py-12 lg:py-32 xl:py-28 md:py-32 overflow-hidden justify-center mx-auto">
      <div className="lg:max-w-6xl xl:max-w-7xl duration-500 mx-auto px-5 xl:px-10 lg:px-10 md:px-10 grid lg:grid-cols-2 gap-10 items-center justify-center">
          {/* RIGHT IMAGE */}
          <div className="mt-10 md:mt-0 relative flex justify-center block xl:hidden lg:hidden">

            <div className="relative">
              {/* Image */}
              <img
                src="/Hero-Section-image.png" // 👉 replace with your image
                alt="Client Experience"
                className="relative max-w-52 md:max-w-xs"
              />

            </div>

          </div>
          

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm md:text-sm text-xs text-[#1A2B6B] mb-6">
            <span className="w-2 h-2 bg-[#1A2B6B] rounded-full"></span>
            Time-Sensitive Cases
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            <span className="text-[#2F6FD6]">Digital Asset Tracing,</span>{" "}
            <br />
            <span className="text-[#1A2B6B]">
              Assessment & Protection Frameworks
            </span>
          </h1>
          <p className="md:mt-6 mt-2 text-[#6D7380] text-sm md:text-base md:max-w-xl leading-relaxed">
            Structured blockchain analysis, asset tracing, and recovery feasibility assessment for lost, inaccessible, or at-risk digital assets across wallets, exchanges, and on-chain environments.
          </p>

          {/* Description */}
          <p className="mt-6 text-[#6D7380] text-sm md:text-base max-w-xl leading-relaxed">
            Designed for high-value cases requiring technical precision, forensic analysis, and controlled handling.
          </p>

          {/* Buttons */}
          <div className="md:mt-8 mt-6 flex gap-4 flex-wrap">
            <button className="bg-[#2F6FD6] md:text-base text-sm text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              <a href="#assessment">Request Case Assessment →</a>
              
            </button>

            <button className="border border-gray-300 md:text-base text-sm px-6 py-3 rounded-xl text-[#1A2B6B] hover:bg-white transition">
              <a href="#learnmore">Learn Our Process</a>
              
            </button>
          </div>
        </div>
        
          {/* RIGHT IMAGE */}
          <div className="relative max-w-md justify-center hidden xl:block lg:block mt-14">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute" />
              {/* Image */}
              <img
                src="/Hero-Section-image.png" // 👉 replace with your image
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