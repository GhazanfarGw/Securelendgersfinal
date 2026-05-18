import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const GovernanceCTA = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="overflow-hidden">
      {/* BOTTOM CTA SECTION */}
      <div className="relative bg-gradient-to-br from-[#071D49] via-[#0B2C6B] to-[#123C8C] py-20 md:py-28 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/20 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
          {/* Heading */}
          <h2
            className="text-2xl md:text-5xl font-bold text-white leading-tight"
            data-aos="fade-up"
          >
            Decide with Full Visibility
          </h2>

          {/* Text */}
          <p
            className="mt-8 text-[#D6E3FF] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We help you move beyond feature comparisons and understand how custody
            platforms actually function. So you can choose with clarity, implement with
            confidence, and avoid costly changes later.
          </p>

          {/* Button */}
          <div
            className="mt-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              
              <a href="/contact-us">Start Your Project →</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceCTA;