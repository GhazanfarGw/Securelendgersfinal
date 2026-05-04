import React from "react";
import {
  FaUserShield,
  FaUsers,
  FaLock,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserShield />,
    title: "Private Transaction Handling",
    desc: "Execution takes place within controlled environments, ensuring discretion, reduced exposure, and secure asset movement.",
  },
  {
    icon: <FaUsers />,
    title: "Dedicated Client Coverage",
    desc: "Each client is supported by a focused team with full context of portfolio size, objectives, and risk profile.",
  },
  {
    icon: <FaLock />,
    title: "Confidential Execution Framework",
    desc: "Transactions are handled through private channels and non-public infrastructure, eliminating unnecessary market visibility.",
  },
  {
    icon: <FaBolt />,
    title: "Priority Execution & Support",
    desc: "High-value transactions are processed with accelerated timelines, priority handling, and immediate response protocols.",
  },
];

const HighTouchExperience = () => {
  return (
    <div className="bg-white py-12 md:py-12">
      <div className="md:max-w-5xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="md:text-center max-w-3xl mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full md:text-sm text-xs font-semibold">
            High-Touch Experience
          </span>

          <h2 className="mt-4 text-xl md:text-3xl font-bold text-[#1A2B6B] leading-snug max-w-lg mx-auto">
            Built Around the Client, <br className="block md:hidden lg:hidden"/> Not Just the Transaction
          </h2>
          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:mt-14 mt-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-[#F5F9FF] p-6 rounded-xl border border-transparent hover:border-[#2F6FD6] hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="md:h-12 md:w-12 h-8 w-8 flex items-center justify-center rounded-lg bg-white text-[#2F6FD6] text-lg shadow-sm group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[#1A2B6B] md:text-base text-sm font-semibold">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 md:text-sm text-xs text-[#6D7380] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default HighTouchExperience;