import React from "react";
import { MessageCircle, Settings, PlayCircle, LifeBuoy } from "lucide-react";

const steps = [
      {
    title: "Private Consultation",
    desc: "Understand client objectives, transaction volume, and operational requirements.",
    icon: <MessageCircle className="w-5 h-5 text-white" />,
  },
  {
    title: "Strategy Alignment",
    desc: "Define execution structure, liquidity approach, and risk mitigation plan.",
    icon: <Settings className="w-5 h-5 text-white" />,
  },
  {
    title: "Execution",
    desc: "Handle transactions using private infrastructure, structured workflows, and controlled processes.",
    icon: <PlayCircle className="w-5 h-5 text-white" />,
  },
  {
    title: "Ongoing Support",
    desc: "Provide continuous advisory, monitoring, and relationship-driven service.",
    icon: <LifeBuoy className="w-5 h-5 text-white" />,
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#fff] py-12 md:py-12">
      <div className="max-w-5xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="text-center mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-semibold">
            Our Process
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B] mx-auto max-w-xl md:mt-4 mt-2 leading-snug">
            What Working With Us <br /> Looks Like
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>
        </div>

        {/* Timeline */}
        <div className="relative md:mt-12 mt-8">

          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#E8EDFF] -translate-x-1/2" />

          {/* Mobile Left Line */}
          <div className="md:hidden absolute left-6 top-0 h-full w-1 bg-[#E8EDFF]" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">

                {/* MOBILE */}
                <div className="flex md:hidden items-start gap-4">

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="md:h-12 md:w-12 h-8 w-8 ml-3 px-2 rounded-full bg-[#2F6FD6] text-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-[#F8FAFF] p-5 rounded-xl shadow-sm w-full">
                    <h3 className="font-semibold text-[#1A2B6B]">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="md:text-sm text-xs text-[#6D7380] mt-2 whitespace-pre-line">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* DESKTOP */}
                <div
                  className={`hidden md:flex items-center ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="w-1/2 p-4">
                    <div className="bg-[#F8FAFF] p-6 rounded-xl shadow-sm hover:shadow-lg transition">
                      <h3 className="font-semibold text-[#1A2B6B] md:text-base text-sm">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="md:text-sm text-xs text-[#6D7380] mt-2 whitespace-pre-line">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="h-14 w-14 md:px-2 rounded-full bg-[#2F6FD6] text-white flex items-center justify-center shadow-md z-10">
                    {step.icon}
                  </div>

                  <div className="w-1/2" />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;