import React from "react";
import {
  FaFileAlt,
  FaProjectDiagram,
  FaLock,
  FaExchangeAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Request Quote",
    desc: `Submit transaction parameters including asset type, trade size, execution preference, and settlement requirements.
We structure a custom execution strategy based on liquidity depth and market conditions.`,
  },
  {
    icon: <FaProjectDiagram />,
    title: "Liquidity Matching",
    desc: `Your order is matched with aggregated liquidity pools, OTC counterparties, and market makers, ensuring best execution pricing and minimal spread impact.`,
  },
  {
    icon: <FaLock />,
    title: "Private Trade Execution",
    desc: `Trades are executed via off-exchange infrastructure and algorithmic execution models, ensuring zero market exposure and optimized fill rates.`,
  },
  {
    icon: <FaExchangeAlt />,
    title: "Settlement",
    desc: `Funds are transferred through secure wallet infrastructure or banking channels, ensuring fast, compliant, and cross-border settlement execution.`,
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#F8FAFF] py-12 md:py-12">
      <div className="max-w-6xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="md:text-center md:max-w-3xl md:mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
            How It Works
          </span>
          <h2 className="md:mt-4 mt-2 text-xl md:text-3xl font-bold text-[#1A2B6B] md:max-w-xl md:mx-auto">
            How Liquidity Flows Through Secure Ledger Solutions
          </h2>
          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>
          <p className="mt-3 text-sm md:text-base text-[#2F6FD6] font-medium max-w-md mx-auto">
            A controlled, multi-layered execution process optimized for institutional-grade transactions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#E8EDFF] -translate-x-1/2" />

          {/* Mobile Left Line */}
          <div className="md:hidden absolute left-6 top-0 h-full w-1 bg-[#E8EDFF]" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">

                {/* MOBILE */}
                <div className="flex md:hidden items-start gap-4">

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="md:h-12 md:w-12 h-10 w-10 px-2 ml-2 rounded-full bg-[#2F6FD6] text-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-5 rounded-xl shadow-sm w-full">
                    <h3 className="text-[#1A2B6B] font-semibold md:text-base text-sm">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="md:text-sm text-xs text-[#6D7380] mt-2 whitespace-pre-line">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* DESKTOP */}
                <div
                  className={`hidden md:flex items-center ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="w-1/2 p-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
                      <h3 className="font-semibold text-[#1A2B6B] text-lg">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-sm text-[#6D7380] mt-2 whitespace-pre-line">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="h-14 w-14 md:px-2 rounded-full bg-[#2F6FD6] text-white flex items-center justify-center shadow-md z-10">
                    {step.icon}
                  </div>

                  <div className="w-1/2" />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Power Line */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[#2F6FD6] to-[#1A4FA3] text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-sm md:text-base font-medium">
              From execution to settlement, every transaction is engineered for speed, discretion, and capital efficiency.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;