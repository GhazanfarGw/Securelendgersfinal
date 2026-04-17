import React from "react";
import {
  FaChartLine,
  FaDollarSign,
  FaBolt,
  FaLock,
  FaGlobe,
  FaCogs,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaChartLine />,
    title: "Zero Market Impact Execution",
    desc: "Execute large trades without affecting price discovery or triggering volatility.",
  },
  {
    icon: <FaDollarSign />,
    title: "Institutional Pricing Advantage",
    desc: "Access tight spreads, deep liquidity, and negotiated execution rates.",
  },
  {
    icon: <FaBolt />,
    title: "Execution Speed & Reliability",
    desc: "Optimized workflows ensure low latency execution and predictable settlement cycles.",
  },
  {
    icon: <FaLock />,
    title: "Private & Confidential Transactions",
    desc: "Eliminate exposure to public order books, HFTs, and MEV exploitation.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Liquidity Access",
    desc: "Tap into multi-market liquidity pools across global exchanges and providers.",
  },
  {
    icon: <FaCogs />,
    title: "End-to-End Execution Management",
    desc: "From strategy to settlement, every stage is handled with precision and risk control.",
  },
];

const BenefitsSection = () => {
  return (
    <div className="bg-white py-12 md:py-12">
      <div className="max-w-6xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="md:text-center md:max-w-3xl mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full md:text-sm text-xs font-medium">
              Benefits
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B] pt-4 max-w-xl mx-auto">
            What You Gain with Secure Ledger Solutions
          </h2>
          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>
          <p className="mt-3 text-sm md:text-base text-[#2F6FD6] font-medium max-w-md mx-auto">
            Built to deliver precision, execution efficiency, and complete transactional control.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-14 mt-8">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="group bg-[#F5F9FF] p-6 rounded-xl border border-transparent hover:border-[#2F6FD6] hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="md:h-12 md:w-12 h-8 w-8 md:px-2 flex items-center justify-center rounded-lg bg-white text-[#2F6FD6] text-lg shadow-sm group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[#1A2B6B] font-semibold md:text-base text-sm">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 md:text-sm text-xs text-[#6D7380] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default BenefitsSection;