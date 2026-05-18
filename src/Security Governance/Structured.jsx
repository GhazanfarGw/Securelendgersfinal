import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const governanceCards = [
  {
    number: "01",
    title: "Clear Ownership and Responsibility",
    tags: [
      "Key Management",
      "Transaction Approvals",
      "Security Decisions",
    ],
    desc: "We define who is responsible for each critical area, so there is no confusion during day-to-day operations or in critical moments.",
    result:
      "Every key area has a named owner, a backup, and a clear escalation path.",
  },
  {
    number: "02",
    title: "Approval Structures That Make Sense",
    desc: "We set up approval rules that match your real risk levels. Routine transactions can move faster with fewer approvals. Larger or more sensitive actions require more oversight.",
    result:
      "Predefined, not situational. Decisions stay consistent because the rules are encoded, not negotiated transaction by transaction.",
  },
  {
    number: "03",
    title: "Policies That People Actually Follow",
    tags: [
      "Key Handling",
      "Transaction Approvals",
      "Access Control",
      "Incident Response",
    ],
    desc: "We make sure policies are realistic and enforced through your systems, not just written into a document. If a system can prevent a violation, it should.",
  },
  {
    number: "04",
    title: "Risk Management Without the Complexity",
    desc: "Risk management does not need to be complicated, but it does need to be clear. We help you identify where your real risks are, understand their impact, and put controls in place to reduce them.",
    result:
      "Leadership gets a clear picture of risk, instead of guesswork at quarterly reviews.",
  },
  {
    number: "05",
    title: "Audit Readiness, Without the Stress",
    desc: "Audits become difficult when processes are unclear. We make sure your workflows are documented, your approvals are traceable, and your controls are consistent, so audits are a review, not a rebuild.",
  },
  {
    number: "06",
    title: "Keeping Up with Compliance",
    desc: "Regulations in digital assets keep evolving. We help you build a structure that can adapt without needing to rebuild everything every time something changes.",
    result:
      "Built to absorb change. New requirements plug into existing controls, instead of triggering a redesign.",
  },
];

const GovernanceFramework = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[4px] text-[#2563EB] text-xs md:text-sm font-semibold">
            How We Build Your Governance Framework
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            Structured Operations, <br /> Not Documents
          </h2>
          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>

          <p className="md:mt-6 mt-4 text-[#6D7380] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We design how your organization actually operates,
            instead of handing over policy documents that sit on a shared drive.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {governanceCards.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="bg-white border border-[#D9E1EC] rounded-[28px] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Top Header */}
              <div className="bg-gradient-to-r from-[#0A1F4D] to-[#1E3A8A] px-6 md:px-8 py-3 flex items-center gap-4">
                {/* Number */}
                <div className="min-w-[40px] h-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-[#C7D7FF] text-sm font-semibold">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-white text-base md:text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#EEF4FF] text-[#2563EB] px-4 py-2 rounded-full text-xs md:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-[#5B6475] text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>

                {/* Result Box */}
                {item.result && (
                  <div className="mt-7 bg-[#F8FAFC] border-l-4 border-[#2563EB] rounded-r-2xl p-5">
                    <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                      <span className="font-semibold text-[#173265]">
                        Result:
                      </span>{" "}
                      {item.result}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceFramework;