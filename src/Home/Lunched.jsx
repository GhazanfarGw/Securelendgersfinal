import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#f8fafc] to-[#eef2f7] md:py-20 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center md:mb-16 mb-5" data-aos="fade-down">
        <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs">
          Trusted Partner
        </span>
        {/* Premium Heading */}
          <h1 className="mt-2 md:mt-4 text-xl md:text-3xl font-bold text-[#1A2B6B] leading-tight">
              Your Trusted Partner in Blockchain <br className="hidden xl:block lg:block"/> Security
          </h1>
          <p className="text-gray-500 my-4 md:text-sm text-xs">
            The foundation of every relationship is trust.
          </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* RIGHT IMAGE */}
        <div className="flex justify-center block xl:hidden lg:hidden" data-aos="zoom-in">
          
          <div className="relative">

            {/* Glass Card */}
            <div className="relative">
              <img
                src="/Circle.png"
                alt="Secure Ledger Logo"
                className="w-52 object-contain"
              />
            </div>

          </div>

        </div>
        
        {/* LEFT CONTENT */}
        <div data-aos="fade-up" className="md:text-base text-sm">
          <p className="text-gray-600 leading-relaxed mb-5">
            At Secure Ledgers Solutions, we specialize in safeguarding your digital assets 
            and ensuring that all blockchain-related activities are secure and compliant.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            Whether you are an individual seeking to protect your investments or a business 
            in need of expert guidance, our services are tailored to meet your specific requirements.
          </p>

          <p className="text-gray-500">
            Our team of experienced professionals is committed to delivering bespoke solutions 
            that prioritize simplicity, security, and peace of mind.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center hidden xl:block lg:block" data-aos="zoom-in">
          
          <div className="relative">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>

            {/* Glass Card */}
            <div className="relative bg-white/40 backdrop-blur-xl p-6 rounded-full shadow-xl">
              <img
                src="/Circle.png"
                alt="Secure Ledger Logo"
                className="w-72 md:w-80 object-contain"
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About; 
