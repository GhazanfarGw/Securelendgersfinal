import React from "react";
import Assessment from "./Assessment";

const FinalCTA = () => {

  return (
    <div id="access" className="bg-gradient-to-br from-[#2F6FD6] to-[#1A4FA3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CTA */}
          <div className="text-white">

            <h2 className="text-xl md:text-3xl font-bold leading-tight">
              Ready to Execute Your Next High-Volume Trade?
            </h2>

            <p className="md:mt-5 mt-3 md:text-base text-sm text-blue-100 max-w-lg">
              Connect with our specialists for private liquidity access, optimized execution strategies, and seamless settlement infrastructure.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 md:mt-8 mt-6">
              <button className="md:text-base text-sm bg-white text-[#2F6FD6] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition">
                <a href="/contact-us">Book a Private Call →</a>
              </button>

              <button className="md:text-base text-sm border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#2F6FD6] transition">
                <a href="/contact-us">Request Liquidity Quote</a>
              </button>
            </div>

            {/* Trust Line */}
            <p className="mt-6 md:text-sm text-xs text-blue-100">
              Confidential. Secure. Built for Institutional Transactions.
            </p>
          </div>
          <Assessment/>
        </div>

      </div>
    </div>
  );
};

export default FinalCTA;