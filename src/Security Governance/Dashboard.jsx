import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="workprocess" className="relative overflow-hidden bg-gradient-to-br from-[#071D49] via-[#0B2C6B] to-[#123C8C]">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Blue Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="lg:hidden block relative">
            <img src="./ChatGPT Image May 19, 2026, 12_18_55 AM.png" alt="security" />
          </div>

          {/* LEFT SIDE */}
          <div data-aos="fade-right">
            {/* Small Heading */}
            <span className="uppercase tracking-[5px] text-[#93C5FD] text-[10px] md:text-xs font-semibold">
              SECURITY GOVERNANCE, RISK & COMPLIANCE FRAMEWORKS
            </span>

            {/* Main Heading */}
            <h1 className="mt-5 text-3xl xl:text-5xl lg:text-5xl md:text-4xl font-bold leading-[1.05] text-white max-w-2xl">
              Make Security Work
              <br />
              <span className="text-[#8EC5FF]">
                at the Organizational <br />Level
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-[#D8E6FF] text-base md:text-lg leading-relaxed max-w-2xl">
              Having strong systems is not enough. If decisions are unclear, approvals are inconsistent, or responsibilities are blurred, risk builds up quickly. We help you put structure around your digital asset operations, so it is clear who controls what, how decisions are made, and how risk is handled over time.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                <a href="/contact-us">Get Started →</a>
              </button>

              <button className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300">
                <a href="#workprocess">Learn More</a>
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <img src="./ChatGPT Image May 19, 2026, 12_18_55 AM.png" alt="security" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;