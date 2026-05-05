import React from "react";

const FinalCTA = () => {
  return (
    <div className="bg-[#1E3A8A] py-12 md:py-28 text-white">

      <div className="max-w-5xl mx-auto px-7 md:px-10 text-center">

        {/* Headline */}
        <h2 className="text-xl md:text-3xl font-bold text-white mx-auto leading-snug">
          Work with a Team That Understands High-Value Transactions
        </h2>

        {/* Subheadline (UNCHANGED ✅) */}
        <p className="mt-4 text-blue-100 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Engage with specialists providing private, structured, and institutional-grade digital asset services.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <button className="bg-white md:text-base text-sm text-[#1E3A8A] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            <a href="/contact-us">Book a Private Consultation</a>
            
          </button>

          <button className="md:text-base text-sm border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1E3A8A] transition">
            <a href="/careers">Contact Our Team</a>
          </button>
        </div>

        {/* Trust Line (UNCHANGED ✅) */}
        <p className="mt-6 text-xs text-blue-200">
          Confidential. Direct. Built for High-Value Clients.
        </p>

      </div>
    </div>
  );
};

export default FinalCTA;