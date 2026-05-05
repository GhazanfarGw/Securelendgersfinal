import React from "react";

const PositioningSection = () => {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-7 md:px-10 text-center">

        {/* Badge */}
        <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-semibold">
          Positioning
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-xl md:text-3xl font-bold text-[#1A2B6B] leading-snug max-w-xl mx-auto">
          Not a Platform. A Private Digital Asset Advisory Experience
        </h2>
        <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>
        {/* Content */}
        <p className="md:mt-6 mt-4 text-[#6D7380] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Secure Ledger Solutions operates as a private execution and advisory partner, not a retail-facing crypto platform.
          Every engagement is structured around client-specific requirements, transaction size, risk exposure, and operational complexity, delivering a high-touch, relationship-driven experience tailored for high-value participants.
        </p>

      </div>
    </div>
  );
};

export default PositioningSection;