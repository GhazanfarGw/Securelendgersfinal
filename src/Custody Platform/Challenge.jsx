import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const features = [
  {
    id: "01",
    title: "Architecture Analysis",
    desc: "We examine how the custody platform is designed at its core, to understand where real control exists.",
    points: [
      "Key management structure and distribution model",
      "Use of MPC, multisig, or hybrid approaches",
      "Internal signing workflows and control layers",
      "Separation between user control and vendor control",
    ],
    tag: "CORE DESIGN",
  },
  {
    id: "02",
    title: "Transaction Flow & Authorization Review",
    desc: "We map how transactions move through the system, from initiation through to execution under real conditions.",
    points: [
      "Who can initiate transactions",
      "How approvals are collected and enforced",
      "Whether quorum logic is deterministic or flexible",
      "What happens if approvals are delayed or denied",
    ],
    tag: "LIVE CONDITIONS",
  },
  {
    id: "03",
    title: "Governance & Control Flexibility",
    desc: "We assess how much control your organization actually retains over rules, policies, and operational decisions.",
    points: [
      "Ability to define custom approval thresholds",
      "Flexibility in assigning roles and responsibilities",
      "Control over policy changes and updates",
      "Visibility into system-level decision making",
    ],
    tag: "OPERATIONAL SOVEREIGNTY",
  },
  {
    id: "04",
    title: "Risk & Failure Scenario Testing",
    desc: "We analyze how the platform behaves when things go wrong, identifying where risk concentrates and how it is contained.",
    points: [
      "Partial system compromise scenarios",
      "Loss of key shares or access credentials",
      "Internal misuse or unauthorized attempts",
      "Infrastructure-level failures",
    ],
    tag: "ADVERSARIAL TESTING",
  },
  {
    id: "05",
    title: "Dependency & Trust Assumptions",
    desc: "Every platform introduces some level of dependency. We surface what you are actually trusting, and where.",
    points: [
      "Reliance on vendor infrastructure",
      "Trust assumptions built into the system",
      "Fallback mechanisms and their limitations",
      "Vendor involvement in critical operations",
    ],
    tag: "TRUST MAPPING",
  },
  {
    id: "06",
    title: "Integration & Operational Fit",
    desc: "A technically strong platform is only useful if it fits your operational reality. We assess that fit directly.",
    points: [
      "Compatibility with your transaction workflows",
      "Alignment with your governance model",
      "Scalability as your operations grow",
      "Impact on internal processes and teams",
    ],
    tag: "OPERATIONAL FIT",
  },
];

const Challenge = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mx-auto py-12 md:py-12 bg-[#F7FAFB]">
      <div className="max-w-6xl mx-auto px-7 md:px-10">
        {/* Header */}
        <div className="md:text-center max-w-2xl mx-auto">
          <span className="text-[#2563EB] uppercase tracking-[4px] text-xs md:text-sm font-semibold">
            Our Evaluation Methodology
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            Six Layers of Analysis
          </h2>

          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] my-5 rounded"></div>

          <p className="mt-4 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            A structured framework that breaks each platform down into measurable, comparable components.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-14 mt-8">
          {features.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-white border border-[#DDE3EC] rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Number Badge */}
              <div className="bg-[#1E4ED8] md:h-12 md:w-12 w-10 h-10 flex items-center justify-center rounded-xl text-white font-bold text-base">
                {item.id}
              </div>

              {/* Title */}
              <h2 className="text-[#111827] font-bold text-lg mt-5 leading-snug">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-base text-[#667085] mt-4 leading-relaxed">
                {item.desc}
              </p>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-3">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-base text-[#475467]"
                  >
                    <span className="h-2 w-2 bg-[#3B82F6] rounded-full mt-2"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Tag */}
              <div className="mt-8">
                <span className="bg-[#EEF2FF] text-[#1D4ED8] text-[11px] font-bold tracking-wider px-4 py-2 rounded-md inline-block">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenge;