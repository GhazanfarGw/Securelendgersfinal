import React from "react";
import { ShieldCheck, BarChart3, Target, ArrowRight } from "lucide-react";

const consultationPoints = [
  {
    title: "Confidential 30-Minute Consultation",
    desc: "Evaluate your requirements with full discretion and professional handling.",
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Risk & Opportunity Analysis",
    desc: "Identify execution risks, liquidity considerations, and optimal transaction pathways.",
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Tailored Execution Strategy",
    desc: "Receive a plan aligned with your portfolio size, objectives, and risk profile.",
    icon: <Target className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Clear Next Steps",
    desc: "Walk away with a defined execution roadmap and actionable direction.",
    icon: <ArrowRight className="w-5 h-5 text-blue-600" />,
  },
];

const ConsultationSection = () => {
  return (
    <div className="bg-[#F8FAFF] py-12 md:py-12">

      <div className="max-w-6xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-semibold">
            Private Strategy Session
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1E3A8A] mx-auto leading-snug max-w-xl mt-4">
            Start with a Private Strategy  <br /> Session
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>

          <p className="md:mt-4 mt-2 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Engage directly with our team to assess your requirements, evaluate risks, and define a structured execution approach.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:mt-12 mt-8">

          {/* Left - Points */}
          <div className="space-y-6">
            {consultationPoints.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-[#fff] hover:shadow-md transition"
              >
                <div className="mt-1">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-[#1E293B] text-sm md:text-base">
                    {item.title}
                  </h3>

                  {/* TEXT UNCHANGED ✅ */}
                  <p className="md:text-sm text-xs text-gray-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - CTA Box */}
          <div className="bg-[#1E3A8A] text-white rounded-2xl p-8 md:p-10 shadow-lg">

            <h3 className="text-lg md:text-xl font-bold">
              Schedule Your Consultation
            </h3>

            <p className="text-sm text-blue-100 mt-3">
              Secure a private session to discuss your transaction requirements and receive a tailored execution strategy.
            </p>

            <button className="mt-6 w-full md:text-base text-sm bg-white text-[#1E3A8A] font-semibold py-3 rounded-lg hover:bg-gray-100 transition">
              Request Private Session →
            </button>

            {/* Trust Line */}
            <p className="text-xs text-blue-200 mt-4 text-center">
              Confidential • Institutional-Grade • No Obligation
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ConsultationSection;