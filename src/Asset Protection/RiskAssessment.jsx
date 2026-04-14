import React from "react";

const RiskAssessment = () => {
  return (
    <div id="assessment" className="bg-gradient-to-br from-[#2F6FD6] to-[#1A4FA3] md:py-20 py-12 relative overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-5 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-xl md:text-3xl font-bold leading-tight">
              Get Clarity on Your Digital Asset Position
            </h2>

            <p className="md:mt-5 mt-3 text-blue-100 max-w-lg text-sm md:text-base">
              Start with a structured, technical assessment to determine asset location, accessibility, and recovery potential.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-white md:text-base text-sm text-[#2F6FD6] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition">
                <a href="/contact-us">Request Case Assessment →</a>
              </button>

              <button className="md:text-base text-sm border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#2F6FD6] transition">
                <a href="/contact-us">Book a Consultation</a>
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
              Submit Your Case
            </h3>

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
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FD6]"
                />
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Describe your security needs and current setup..."
                className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FD6]"
              />

              {/* Submit */}
              <button
                type="submit"
                className="md:text-base text-sm w-full bg-[#2F6FD6] text-white py-3 rounded-lg font-medium hover:bg-[#1A4FA3] transition"
              >
                Submit Case Assessment
              </button>

              {/* Footer note */}
              <div className="bg-[#F4F7FB] text-center text-xs text-[#6D7380] py-3 rounded-lg">
                All cases are handled under strict confidentiality protocols and secure data handling standards.
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;