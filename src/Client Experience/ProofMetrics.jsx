import React from "react";
import { Globe, Lock, DollarSign, TrendingUp } from "lucide-react";

const metrics = [
  {
    value: "$500M+",
    title: "Transaction Volume Processed",
    desc: "Demonstrating experience in handling high-value, complex financial operations.",
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
  },
  {
    value: "$250K+",
    title: "Minimum Engagement Size",
    desc: "Focused exclusively on serious, high-value, and institutional participants.",
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
  },
  {
    value: "",
    title: "Global Client Network",
    desc: "Serving clients across multiple jurisdictions, markets, and regulatory environments.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
  },
  {
    value: "",
    title: "Confidential Execution Standards",
    desc: "Every transaction is handled with strict privacy, discretion, and controlled access protocols.",
    icon: <Lock className="w-6 h-6 text-blue-600" />,
  },
];

const MetricsSection = () => {
  return (
    <div className="bg-[#fff] py-12 md:py-12">

      <div className="max-w-6xl mx-auto px-7 md:px-10">

        {/* Heading */}
        <div className="text-center">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-semibold">
            Proven Execution Capabilities
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1E3A8A] mx-auto max-w-xl md:mt-4 mt-2 leading-snug">
            Execution Capability Backed <br /> By Scale
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-12 mt-8">

          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFF] p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
            >

              {/* Icon */}
              <div className="mb-4 bg-[#E0E7FF] md:w-12 md:h-12 w-10 h-10 flex items-center justify-center rounded-lg">
                {item.icon}
              </div>

              {/* Value */}
              {item.value && (
                <p className="text-xl md:text-3xl font-bold text-blue-600">
                  {item.value}
                </p>
              )}

              {/* Title */}
              <h3 className="mt-2 font-semibold text-[#1E293B] text-sm md:text-base">
                {item.title}
              </h3>

              {/* Description (UNCHANGED ✅) */}
              <p className="md:text-sm text-xs text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default MetricsSection;