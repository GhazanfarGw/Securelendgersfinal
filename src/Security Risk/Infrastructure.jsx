import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const features = [
  {
    id: "01",
    title: "Audit & Transparency Systems",
    desc: "Implement on-chain analytics, transaction monitoring tools, and audit-ready reporting frameworks.",
    points: [
      "Full visibility into wallet activity",
      "Complete fund flow tracking",
      "Compliance status monitoring",
    ],
  },
  {
    id: "02",
    title: "Jurisdiction & Wallet Risk Screening",
    desc: "Screen transactions using blockchain forensics tools and AML risk scoring systems.",
    points: [
      "Sanctioned address identification",
      "Mixer exposure detection",
      "High-risk entity screening",
    ],
  },
  {
    id: "03",
    title: "Risk Mitigation & Controlled Execution",
    desc: "Apply structured transaction workflows, approval hierarchies, and execution safeguards.",
    points: [
      "Minimize human error",
      "Failed transfer prevention",
      "Operational breakdown reduction",
    ],
  },
  {
    id: "04",
    title: "Cybersecurity Enablement",
    desc: "Implement wallet hardening, secure key management, and access control systems.",
    points: [
      "Attack vector reduction",
      "Key compromise prevention",
      "Unauthorized access blocking",
    ],
  },
  {
    id: "05",
    title: "Structured Risk Governance Framework",
    desc: "Design risk policies, operational playbooks, and transaction control mechanisms.",
    points: [
      "Institutional risk standards",
      "Consistent execution protocols",
      "Scalable policy framework",
    ],
  },
];

const Infrastructure = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mx-auto py-12 md:py-12 bg-[#fff]">
      <div className="max-w-6xl mx-auto px-7 md:px-10">
        <div className='items-center overflow-hidden mx-auto bg-[#186DC8] max-w-5xl rounded-xl justify-center'>
            <div className='md:px-10 px-5 py-5 md:py-12'>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='mx-auto overflow-hidden text-[#fff]'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-3xl text-xl md:pt-5 font-bold text-[#fff]'>
                      Secure Ledger Solutions Risk & Security Infrastructure
                    </h1>
                    <p className="md:text-base text-sm text-[#fff] text-opacity-75 pt-3 leading-relaxed">
                      Designed for Protection, Compliance, and Controlled Execution at Scale
                    </p>
                    <p className="md:text-base text-sm text-[#fff] pt-3 leading-relaxed">
                      We deploy multi-layered security frameworks, blockchain intelligence tools, and compliance-integrated systems to protect digital assets, ensure transparency, and reduce operational and regulatory risk.
                    </p>
                </div>
            </div>
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-14 mt-8">
          {features.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-[#F5F9FF] border border-[#E3E8F2] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Number Badge */}
              <div className="bg-[#186DC8] md:h-12 md:w-12 w-8 h-8 flex items-center justify-center rounded-lg text-white font-bold text-lg">
                {item.id}
              </div>
              {/* Title */}
              <h2 className="text-[#1A2B6B] font-semibold text-sm md:text-base mt-4">
                {item.title}
              </h2>

              {/* Description */}
              <p className="md:text-sm text-xs text-[#6D7380] mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* Bullet Points */}
              <ul className="md:mt-8 mt-4 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 md:text-sm text-xs text-[#6D7380]">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="bg-[#E3F2FD] p-4 rounded-xl md:text-sm text-xs text-[#2F77C8] mt-8 py-6 font-bold border-l-4 border-[#2F6FD6]">
            <p className="text-center mx-auto">
                Built to ensure capital protection, regulatory alignment, and operational resilience across all digital asset activities.
            </p>
        </div>

      </div>
    </div>
  );
};

export default Infrastructure;