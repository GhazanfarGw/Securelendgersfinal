import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const problems = [
  {
    title: "Slippage Destroys Execution Efficiency",
    content:
      "Executing large orders on public order books introduces market impact and liquidity fragmentation, causing price slippage during order fulfillment. This leads to VWAP deviation, poor fill quality, and reduced execution efficiency, directly impacting profitability.",
  },
  {
    title: "Exchange-Level Restrictions & Fund Freezes",
    content:
      "Centralized exchanges enforce withdrawal thresholds, AML/KYC triggers, and compliance reviews, often freezing or delaying large transactions. This creates counterparty risk and liquidity lock-in, especially during time-sensitive deals.",
  },
  {
    title: "Fragmented Liquidity Across Markets",
    content:
      "Liquidity in crypto markets is highly fragmented across exchanges and trading pairs. Without aggregated liquidity routing, large orders are executed across multiple price levels, resulting in suboptimal execution and increased trading costs.",
  },
  {
    title: "Settlement Delays & Operational Friction",
    content:
      "High-value transactions often face settlement latency due to exchange processing times, banking rails, and cross-border constraints. This introduces execution risk and deal disruption, particularly in arbitrage or institutional flows.",
  },
  {
    title: "Market Exposure & Front-Running Risks",
    content:
      "Placing large orders on public order books exposes your intent to high-frequency traders (HFTs) and MEV bots, leading to front-running, sandwich attacks, and price manipulation.",
  },
];

const ProblemAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#F8FAFF] md:py-12 py-12">
      <div className="md:max-w-4xl mx-auto px-7 md:px-10">

        {/* Heading */}
        <div className="text-center md:mb-12 mb-8">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-medium">
            Structural Challenges
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B] max-w-xl mx-auto mt-4">
            Why Large Crypto Transactions Break <br className="hidden md:block lg:block"/> Down at Scale
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>
          <p className="md:text-base text-sm text-[#6D7380] text-opacity-75 leading-relaxed">
            Understanding the systemic challenges in crypto market infrastructure
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-[#1A2B6B] text-xs md:text-base">
                  {index + 1}. {item.title}
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 md:w-4 md:h-4 h-3 w-3 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`px-5 transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-96 pb-5 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-[#6D7380] md:text-sm text-xs leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProblemAccordion;