import React from "react";
import {
  FaUserCheck,
  FaShieldAlt,
  FaExclamationTriangle,
  FaChartLine,
} from "react-icons/fa";

const securityItems = [
  {
    icon: <FaUserCheck />,
    title: "Verified Liquidity Counterparties",
    desc: "All liquidity providers undergo due diligence, counterparty risk assessment, and reliability verification.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Execution Infrastructure",
    desc: "Transactions are processed through encrypted channels, secure APIs, and controlled execution environments.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Reduced Exchange Dependency Risk",
    desc: "Avoid risks such as withdrawal freezes, custodial failures, and exchange insolvency exposure.",
  },
  {
    icon: <FaChartLine />,
    title: "Structured Execution Strategies",
    desc: "Trades are executed using algorithmic models, liquidity slicing, and timing strategies to minimize volatility.",
  },
];

const SecurityRiskSection = () => {
  return (
    <div className="bg-[#F8FAFF] md:py-12 py-8">
      <div className="max-w-6xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="md:text-center md:max-w-3xl md:mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full md:text-sm text-xs font-medium">
            Security & Risk Controls
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B] mt-2 md:mt-4 max-w-xl mx-auto">
            Integrated Security & Risk Controls for Every Transaction
          </h2>
          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>
          <p className="mt-3 text-sm md:text-base text-[#2F6FD6] font-medium max-w-md mx-auto">
            Every execution is backed by institutional-grade safeguards, compliance alignment, and controlled risk exposure frameworks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:mt-14 mt-8">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className="md:flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="md:h-12 md:w-12 h-10 w-10 px-2 flex items-center justify-center rounded-lg bg-[#E8EDFF] text-[#2F6FD6] text-lg">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[#1A2B6B] font-semibold md:mt-0 mt-4 md:text-base text-sm">
                  {item.title}
                </h3>
                <p className="md:text-sm text-xs text-[#6D7380] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="md:mt-16 mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-[#2F6FD6] to-[#1A4FA3] text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-sm md:text-base font-medium">
              Your capital is managed with institutional-grade precision, security, and execution discipline.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecurityRiskSection;