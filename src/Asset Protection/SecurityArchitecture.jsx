import {
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaLock,
  FaCheckCircle,
  FaExchangeAlt,
} from "react-icons/fa";

export default function AssetAssessment() {
  const items = [
    {
      icon: <FaMapMarkerAlt />,
      text: "Identifying asset location across wallets, exchanges, and on-chain transactions",
    },
    {
      icon: <FaProjectDiagram />,
      text: "Mapping transaction flows using blockchain explorers and forensic tracing tools",
    },
    {
      icon: <FaLock />,
      text: "Determining custody type (self-custody vs custodial platforms)",
    },
    {
      icon: <FaCheckCircle />,
      text: "Assessing recovery feasibility based on technical constraints and platform policies",
    },
    {
      icon: <FaExchangeAlt />,
      text: "Providing clear, actionable next-step guidance and coordinating with regulated exchanges",
    },
  ];

  return (
    <div className="bg-[#fff] py-12 md:py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-7 md:px-10">
        {/* LEFT BLUE CARD */}
        <div className="bg-gradient-to-br from-[#2F6FD6] to-[#1E4FA3] text-white p-8 md:p-10 rounded-2xl shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold leading-snug">
            Data-Driven Assessment Framework
          </h3>

          <p className="mt-4 text-sm md:text-base text-blue-100 leading-relaxed">
            At Secure Ledger Solutions, we follow a methodical approach to evaluate
            each case using blockchain intelligence and technical assessment frameworks.
            Our process focuses on delivering clear, actionable guidance.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-bold text-[#1F2A37] leading-snug max-w-lg mx-auto">
            Structured Asset Assessment <br />
            &{" "}
            <span className="text-[#2F6FD6]">
              Forensic Analysis
            </span>
          </h2>
          <div className="w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>

          {/* Description */}
          <p className="mt-4 text-[#6B7280] text-sm md:text-base max-w-lg">
            Our approach combines advanced blockchain analysis tools with expert
            technical assessment to provide clarity on your asset position and
            recovery potential.
          </p>

          {/* List */}
          <div className="mt-8 space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="md:flex items-center gap-4 bg-[#EEF2F7] px-4 py-4 rounded-lg"
              >
                {/* Icon */}
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#2F6FD6] text-white text-sm">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="md:text-sm text-xs text-[#374151] leading-relaxed mt-2 md:mt-0">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}