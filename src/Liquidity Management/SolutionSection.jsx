import React from "react";
import {
  FaHandshake,
  FaRoute,
  FaUniversity,
  FaLock,
  FaChartLine,
} from "react-icons/fa";

const solutions = [
  {
    icon: <FaHandshake />,
    title: "OTC Block Execution",
    desc: "Execute high-volume trades through over-the-counter (OTC) desks, bypassing public order books. Ensures zero market signaling, reduced slippage, and confidential trade handling.",
  },
  {
    icon: <FaRoute />,
    title: "Multi-Venue Liquidity Routing",
    desc: "We aggregate liquidity across centralized exchanges (CEXs), OTC desks, and liquidity providers, using smart order routing (SOR) to achieve optimal pricing and execution.",
  },
  {
    icon: <FaUniversity />,
    title: "Fiat ↔ Crypto Settlement Infrastructure",
    desc: "Seamlessly convert between fiat and crypto through structured on/off-ramp systems, banking integrations, and jurisdiction-aware settlement frameworks.",
  },
  {
    icon: <FaLock />,
    title: "Private Execution Environment",
    desc: "All trades are executed in a closed, non-public environment, eliminating exposure to order book visibility, front-running, and adverse market reactions.",
  },
  {
    icon: <FaChartLine />,
    title: "Institutional Pricing Access",
    desc: "Leverage aggregated liquidity and block trade negotiation to access tight spreads and institutional-grade pricing, unavailable on retail platforms.",
  },
];

const SolutionSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-medium">
            Private Liquidity
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B] mt-2 md:mt-4 max-w-xl mx-auto">
            Secure Ledger Solutions Private Liquidity Network
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>
          <p className="mt-3 text-sm md:text-base text-[#2F6FD6] font-medium">
            Engineered for Scale, Precision, and Discreet Execution
          </p>

          <p className="md:mt-5 mt-2 text-[#6D7380] text-sm md:text-base leading-relaxed">
            Secure Ledger Solutions provides direct access to deep aggregated liquidity pools,
            OTC counterparties, and algorithmic execution systems, enabling large-volume trades
            without disrupting market structure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:mt-14 mt-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFF] md:flex gap-4 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="md:h-12 md:w-24 h-10 w-10 flex items-center justify-center rounded-lg bg-[#E8EDFF] text-[#2F6FD6] text-lg">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[#1A2B6B] font-semibold md:text-base text-sm mt-2 md:mt-0">
                  {item.title}
                </h3>
                <p className="md:text-sm text-xs text-[#6D7380] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Line */}
        <div className="mt-16 bg-gradient-to-r from-[#2F6FD6] to-[#1A4FA3] text-white text-center py-6 px-6 rounded-xl shadow-lg">
          <p className="text-sm md:text-base font-medium">
            Built for transactions where capital efficiency, execution precision,
            and confidentiality are non-negotiable.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SolutionSection;