import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Quote } from "lucide-react";

const GovernanceCTA = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="overflow-hidden">
      {/* TOP QUOTE SECTION */}
      <div className="bg-[#fff] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          {/* Quote Icon */}
          <div
            className="flex justify-center"
            data-aos="fade-up"
          >
            <div className="w-14 h-14 rounded-full bg-[#EEF4FF] flex items-center justify-center">
              <Quote
                size={30}
                className="text-[#8BB8FF]"
              />
            </div>
          </div>

          {/* Main Quote */}
          <h2
            className="mt-8 text-2xl md:text-5xl font-bold text-[#173265] leading-[1.2] max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Most issues in digital asset systems do not come from technology.
            They come from unclear control.
          </h2>

          {/* Description */}
          <p
            className="mt-8 text-[#5B6475] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Fix the structure, and everything else becomes easier to manage.
            Strong systems give you tools. Strong governance gives you the
            confidence to actually use them at scale.
          </p>

          {/* Small Divider */}
          <div
            className="mt-10 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="w-14 h-[3px] bg-[#2563EB] rounded-full"></div>
          </div>
        </div>
      </div>

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
            Put Structure Around Your <br /> Operations
          </h2>

          {/* Text */}
          <p
            className="mt-8 text-[#D6E3FF] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We help you move from informal processes to a setup that is clear,
            controlled, and ready to scale, with the same rigor your
            cryptographic systems already deserve.
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