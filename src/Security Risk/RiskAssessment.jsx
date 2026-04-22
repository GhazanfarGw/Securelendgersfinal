import React from "react";
import Assessment from "./Assessment"

const RiskAssessment = () => {
  return (
    <div id="assessment" className="bg-gradient-to-br from-[#2F6FD6] to-[#1A4FA3] md:py-20 py-12 relative overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto md:px-10 px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-xl md:text-3xl font-bold leading-tight">
              Secure Your Digital Assets Before
              Exposure Becomes Loss
            </h2>

            <p className="mt-5 text-blue-100 max-w-lg text-sm md:text-base">
              Work with our specialists to implement institutional-grade security,
              compliance frameworks, and risk-controlled execution systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-white text-sm md:text-base text-[#2F6FD6] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition">
                <a href="/contact-us">Book a Private Call →</a>
              </button>

              <button className="border text-sm md:text-base border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#2F6FD6] transition">
                <a href="/contact-us">Request Risk Assessment</a>
              </button>
            </div>

            {/* Footer note */}
            <p className="text-blue-100 md:text-sm text-xs mt-6 flex items-center gap-2">
              🔒 Confidential. Secure. Built for Institutional Asset Protection.
            </p>
          </div>
          <Assessment/>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;