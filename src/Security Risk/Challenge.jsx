import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const challenges = [
  {
    id: "01",
    title: "Lack of Transaction Visibility & Auditability",
    desc: "Without structured monitoring systems, on-chain activity lacks traceability, audit trails, and reconciliation frameworks.",
    note: "This results in data opacity, accounting inconsistencies, and compliance gaps, especially in high-volume environments.",
  },
  {
    id: "02",
    title: "Exposure to Sanctioned & High-Risk Jurisdictions",
    desc: "Unscreened transactions may interact with OFAC-sanctioned wallets, darknet-linked addresses, or high-risk jurisdictions.",
    note: "This creates regulatory exposure, frozen assets, and reputational risk.",
  },
  {
    id: "03",
    title: "Operational & Execution Risk",
    desc: "Improper transaction handling introduces human error, failed settlements, incorrect wallet routing, and loss of funds.",
    note: "As volume increases, these risks scale exponentially without structured execution controls.",
  },
  {
    id: "04",
    title: "Cybersecurity Attack Vectors",
    desc: "Digital assets are exposed to phishing attacks, private key compromise, malware injections, SIM swaps, and social engineering exploits.",
    note: "A single breach can result in irreversible on-chain loss of funds.",
  },
  {
    id: "05",
    title: "Absence of Risk Governance Frameworks",
    desc: "Without defined policies, operations rely on ad-hoc decision making, lacking risk thresholds, approval hierarchies, and execution protocols.",
    note: "This leads to inconsistent processes and uncontrolled exposure.",
  },
];

const Challenge = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div className="bg-[#F4F6FA] py-12 md:py-12">
      <div className="max-w-6xl mx-auto md:px-10 px-7">

        {/* Header */}
        <div className="md:text-center max-w-2xl mx-auto">
          <span className="bg-[#E8EEF9] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full md:text-sm text-xs font-medium">
            The Challenge
          </span>

          <h2 className="md:mt-4 mt-2 text-xl md:text-3xl font-bold text-[#1F2A37] leading-snug max-w-xl mx-auto">
            Why Crypto Security & Risk Management Breaks at Scale
          </h2>
          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] my-5 rounded"></div>

          <p className="mt-4 text-[#6B7280] text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Digital asset operations introduce multi-layered risks across custody, transactions, compliance, and cybersecurity, often underestimated until capital is exposed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-12 mt-8">
          {challenges.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-[#E5EAF2] rounded-2xl p-6 hover:shadow-md transition duration-300"
            >
              {/* Number */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FDECEC] text-[#E43333] font-semibold text-sm">
                {item.id}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[#1F2A37] font-semibold text-sm md:text-base leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[#6B7280] md:text-sm text-xs leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Note */}
              <p className="mt-4 pt-4 border-t border-[#EEF2F7] text-xs text-[#E43333]">
                {item.note}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Challenge;
