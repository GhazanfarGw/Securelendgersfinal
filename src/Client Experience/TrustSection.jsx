import React from "react";

const TrustSection = () => {
  return (
    <div className="bg-[#F8FAFF] py-12 md:py-12 border-t border-gray-100">

      <div className="max-w-4xl mx-auto px-7 md:px-10 text-center">

        {/* Headline */}
        <h2 className="text-xl md:text-3xl font-bold text-[#1E3A8A] max-w-xl mx-auto leading-snug">
          Built on Trust. Structured for Long-Term Relationships.
        </h2>
        <div className="mx-auto w-16 h-1 bg-[#243A6B] my-5 rounded"></div>

        {/* Content (UNCHANGED ✅) */}
        <div className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Handling high-value digital assets requires more than technical capability.
          </p>
          <p>
            It requires discipline, operational control, and a proven execution framework.
          </p>
          <p>
            Secure Ledger Solutions operates with a long-term advisory approach, ensuring every interaction reinforces trust, performance, and reliability.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TrustSection;