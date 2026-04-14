import React from "react";
import { useForm } from "react-hook-form";

const FinalCTA = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="access" className="bg-gradient-to-br from-[#2F6FD6] to-[#1A4FA3] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-10">

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

          {/* RIGHT FORM */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl">

            <h3 className="md:text-xl text-lg font-semibold text-white">
              Request Private Liquidity Access
            </h3>

            <p className="md:text-sm text-xs text-blue-100 mt-2">
              Submit your transaction details and our team will structure a tailored execution plan.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                {...register("name")}
                className="md:text-base text-sm w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="md:text-base text-sm w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none"
              />

              {/* Transaction Type */}
              <select
                {...register("type")}
                className="md:text-base text-sm w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none"
              >
                <option value="">Transaction Type</option>
                <option className="text-[#000]">Buy</option>
                <option className="text-[#000]">Sell</option>
                <option className="text-[#000]">Fiat ↔ Crypto</option>
              </select>

              {/* Volume */}
              <input
                type="text"
                placeholder="Estimated Volume (e.g., $100,000+)"
                {...register("volume")}
                className="md:text-base text-sm w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none"
              />

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Message"
                {...register("message")}
                className="md:text-base text-sm w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:text-base text-sm bg-white text-[#2F6FD6] py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
              >
                Submit Request
              </button>

              {/* Microcopy */}
              <p className="md:text-xs text-xs text-white/70 text-center">
                All submissions are encrypted and handled under strict confidentiality protocols.
              </p>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FinalCTA;