import React from "react";

const RiskAssessment = () => {
  return (
    <div id="assessment" className="bg-gradient-to-br from-[#2F6FD6] to-[#1A4FA3] md:py-20 py-12 relative overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto md:px-10 px-7 md:px-10 relative z-10">
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

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="md:text-xl text-lg font-semibold text-[#1A2B6B]">
              Request a Private Risk Assessment
            </h3>

            <p className="text-sm md:text-base text-[#6D7380] mt-2">
              Submit your details to receive a comprehensive risk evaluation and
              security strategy.
            </p>

            {/* FORM */}
            <form className="mt-6 space-y-4">
              
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FD6]"
                />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FD6]"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <select className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FD6]">
                  <option>Select service type</option>
                  <option>Security Audit</option>
                  <option>Wallet Protection</option>
                  <option>Compliance Setup</option>
                </select>

                <input
                  type="text"
                  placeholder="e.g., $250,000+"
                  className="w-full border rounded-lg px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#2F6FD6]"
                />
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Describe your security needs and current setup..."
                className="w-full text-sm md:text-base border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F6FD6]"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#2F6FD6] text-sm md:text-base text-white py-3 rounded-lg font-medium hover:bg-[#1A4FA3] transition"
              >
                Submit Request
              </button>

              {/* Footer note */}
              <div className="bg-[#F4F7FB] text-center text-xs text-[#6D7380] py-3 rounded-lg">
                All data is protected using encrypted handling protocols and strict confidentiality standards.
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;