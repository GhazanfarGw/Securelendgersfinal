import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#EEF3FA] py-12 lg:py-32 xl:py-40 md:py-32 justify-center mx-auto overflow-hidden">
      <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-screen-xl duration-500 mx-auto px-5 xl:px-10 lg:px-10 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0 relative flex justify-center block xl:hidden lg:hidden">
          <div className="relative">
            {/* Glow behind image */}

            {/* Image */}
            <img
              src="/edited-image-03.2.png" // 👉 replace with your image
              alt="Security Risk Management"
              className="relative sm:max-w-xs"
            />

          </div>
        </div>

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm md:text-sm text-xs text-[#1A2B6B] mb-6">
            <span className="w-2 h-2 bg-[#1A2B6B] rounded-full"></span>
              Enterprise Security Solutions
          </div>

          {/* Heading */}
          <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl font-bold leading-tight">
            <span className="text-[#2F6FD6]">Protect Digital Assets</span>{" "}
            <br />
            <span className="text-[#1A2B6B]">
              with Institutional-Grade Security & Risk Control
            </span>
          </h1>
          <p className="md:mt-6 mt-2 text-[#6D7380] text-sm md:text-base max-w-xl leading-relaxed">
            Advanced crypto security architecture, transaction risk intelligence, and
            compliance-aligned frameworks designed to safeguard digital assets,
            eliminate exposure, and ensure controlled execution across high-value
            transactions.
          </p>

          <div className="bg-[#E3F2FD] p-4 rounded-xl md:text-sm text-xs text-[#2F77C8] md:mt-6 mt-4 font-bold border-l-4 border-[#2F6FD6]">
            <p>
              Engineered for institutions, funds, and high-net-worth participants requiring structured custody, risk mitigation, and operational security OpSec.
            </p>
          </div>
          {/* Buttons */}
          <div className="md:mt-8 mt-6 flex gap-4 flex-wrap">
            <button className="bg-[#2F6FD6] md:text-base text-sm text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              <a href="#assessment">Request Private Risk Assessment → </a>
            </button>

            <button className="border border-gray-300 md:text-base text-sm px-6 py-3 rounded-xl text-[#1A2B6B] hover:bg-white transition">
              <a href="#learnmore">Learn More</a>
            </button>
          </div>
        </div>
          {/* RIGHT IMAGE */}
          <div className="relative justify-center hidden xl:block lg:block max-w-lg">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute" />
              {/* Image */}
              <img
                src="/edited-image-03.2.png" // 👉 replace with your image
                alt="Security Risk Management"
                className="relative mx-auto justify-center text-center"
              />
            </div>
          </div>

      </div>
    </section>
  );
};

export default Hero;