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
    title: "Unbounded Access",
    desc: "A few people have more access than their role actually requires, often because permissions accumulated over time.",
  },
  {
    icon: <FaUsers />,
    title: "Approval Rules Skipped",
    desc: "Approval policies exist on paper, but get bypassed under time pressure or forsmall exceptions that quietly become normal.",
  },
  {
    icon: <FaLock />,
    title: "Policies Without Enforcement",
    desc: "Policies are written and circulated, but the systems do not actually enforce them, so adherence is voluntary in practice.",
  },
  {
    icon: <FaBolt />,
    title: "Last-Minute Audit Prep",
    desc: "Audit readiness becomes a scramble each cycle because workflows, approvals, and controls are not consistently documented.",
  },
];

const HighTouchExperience = () => {
  return (
    <div className="bg-white py-12 md:py-12">
      <div className="md:max-w-6xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="md:text-center max-w-3xl mx-auto">
          <span className="text-[#2563EB] uppercase tracking-[4px] text-xs md:text-sm font-semibold">
            WHAT THIS LOOKS LIKE IN REALITY
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            Common Gaps We Fix
          </h2>

          <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>
          <p className="md:mt-6 mt-4 text-[#6D7380] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Each of these looks small in isolation. Together, they are usually where real organizational risk lives.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:mt-14 mt-8">

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