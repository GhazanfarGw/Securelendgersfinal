import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const challenges = [
  {
    id: "01",
    title: "Lost or Inaccessible Assets",
    desc: "Assets may become inaccessible due to private key loss, wallet corruption, forgotten credentials, or restricted platform access.",
    note: "Without proper access credentials or recovery pathways, control over funds can be permanently affected.",
  },
  {
    id: "02",
    title: "Limited Recovery Feasibility",
    desc: "Recovery depends on asset location (on-chain vs custodial), exchange policies, smart contract constraints, and transaction finality.",
    note: "In decentralized environments, irreversible transactions significantly limit recovery options.",
  },
  {
    id: "03",
    title: "Lack of Visibility & Clarity",
    desc: "Many cases lack clear transaction history, wallet mapping, or asset tracking, making it difficult to determine where assets are held.",
    note: "Without blockchain tracing and forensic analysis, recovery decisions cannot be properly evaluated.",
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
        <div className="md:text-center md:max-w-2xl mx-auto">
          <span className="bg-[#E8EEF9] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full md:text-sm text-xs font-medium">
            Asset Recovery Challenges
          </span>

          <h2 className="mt-4 text-xl md:text-3xl font-bold text-[#1F2A37] leading-snug max-w-lg mx-auto">
            Why Digital Asset Recovery is Complex
          </h2>
          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>

          <p className="mt-4 text-[#6B7280] text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Digital asset recovery involves blockchain immutability, platform dependency, and access control limitations, making outcomes highly case-specific.
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
              {/* Number Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FDECEC] text-[#E43333] font-semibold text-sm">
                  {item.id}
                </div>

                <h3 className="text-[#1F2A37] font-semibold text-sm md:text-base">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-[#6B7280] md:text-sm text-xs leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Note */}
              <p className="mt-4 pt-4 border-t text-xs text-[#6B7280]">
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
