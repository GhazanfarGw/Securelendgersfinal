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
    title: "Internal Control Structure",
    desc: "How control is actually structured behind the user interface, and where real authority resides at the protocol layer.",
  },
  {
    icon: <FaUsers />,
    title: "Real Authorization Logic",
    desc: "How approval and signing logic is enforced during real transactions, including edge cases and partial completion.",
  },
  {
    icon: <FaLock />,
    title: "Hidden Dependencies",
    desc: "Where the platform quietly relies on vendor infrastructure, services, or assumptions that affect operational independence.",
  },
  {
    icon: <FaBolt />,
    title: "Failure Behavior",
    desc: "How the system responds to compromise, misuse, or partial failure, and where risk concentrates when it does.",
  },
];

const HighTouchExperience = () => {
  return (
    <div className="bg-white py-12 md:py-12">
      <div className="md:max-w-5xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="md:text-center max-w-3xl mx-auto">
          <span className="text-[#2563EB] uppercase tracking-[4px] text-xs md:text-sm font-semibold">
            What We Focus On
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            Beneath the Interface
          </h2>

          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>
          <p className="md:mt-6 mt-4 text-[#6D7380] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Four areas where surface claims and operational reality usually diverge.
          </p>
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