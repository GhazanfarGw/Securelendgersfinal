import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  FaEye,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLock,
  FaExchangeAlt,
  FaLayerGroup,
} from "react-icons/fa";

const features = [
  {
    icon: <FaEye />,
    title: "Complete On-Chain Visibility",
    desc: "Full transparency across wallets, transactions, and asset movement.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Regulatory & Compliance Confidence",
    desc: "Operate within AML/KYC frameworks and jurisdictional guidelines.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Reduced Operational Risk",
    desc: "Minimize execution errors, failed transfers, and process vulnerabilities.",
  },
  {
    icon: <FaLock />,
    title: "Advanced Asset Protection",
    desc: "Protect against cyber threats, unauthorized access, and exploit vectors.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Controlled Transaction Execution",
    desc: "Structured workflows replace manual and reactive processes.",
  },
    {
    icon: <FaLayerGroup />,
    title: "Long-Term Security Infrastructure",
    desc: "Build a scalable, resilient, and future-proof asset protection system.",
  },
];

const Benefits = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mx-auto py-12 md:py-12 bg-[#fff]">
      <div className="max-w-6xl mx-auto px-7 md:px-10">
        {/* Heading */}
        <div className="md:text-center">
            <span className="bg-[#E8EDFF] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full md:text-sm text-xs">
                Benefits Overview
            </span>
            <h2 className="mt-4 text-xl md:text-3xl font-bold text-[#1A2B6B] leading-snug max-w-xl mx-auto">
                What You Gain with Secure <br /> Ledger Solutions
            </h2>
            <div className="md:mx-auto w-16 h-1 bg-[#243A6B] my-5 rounded"></div>

            <p className="mt-4 text-[#6D7380] max-w-2xl mx-auto text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                Built to deliver security, compliance, and operational control at institutional scale.
            </p>
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mt-12">
          {features.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-[#F5F9FF] p-4 rounded-xl text-sm text-[#2F77C8] mt-6 font-bold border-l-4 border-[#2F6FD6] hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Number Badge */}
              <div className="bg-[#fff] h-8 w-8 flex items-center justify-center rounded-lg text-[#2F6FD6] font-bold text-lg">
                {item.icon}
              </div>
              {/* Title */}
              <h2 className="text-[#1A2B6B] font-semibold md:text-base text-sm mt-4">
                {item.title}
              </h2>

              {/* Description */}
              <p className="md:text-sm text-xs text-[#6D7380] font-medium mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;