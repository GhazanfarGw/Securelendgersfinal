import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  X,
  Check,
  ShieldCheck,
  AlertTriangle,
  Lock,
} from "lucide-react";

const withoutControls = [
  "Assets can be moved with insufficient approval",
  "Manual processes introduce human error",
  "Centralized systems become attack targets",
];

const withFramework = [
  "Every transaction is controlled and verified",
  "Approvals are enforced automatically",
  "Systems remain secure even under pressure",
];

const RiskComparison = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2563EB]/5 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[4px] text-[#2563EB] text-xs md:text-sm font-semibold">
            Why It Matters
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            The Highest Risk Moment
          </h2>

          <p className="mt-6 text-[#5B6475] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            The highest risk moment in any digital asset system is when a
            transaction is executed. Structure changes the outcome.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {/* LEFT CARD */}
          <div
            data-aos="fade-right"
            className="group relative bg-white border border-[#E2E8F0] rounded-[32px] p-8 md:p-10 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500"
          >
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CBD5E1] to-[#94A3B8]"></div>

            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-[#F1F5F9] px-4 py-2 rounded-full">
              <AlertTriangle className="text-[#64748B] w-8 h-8" />

              <span className="text-sm md:text-base font-bold text-[#475569]">
                Without Controls
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-8 text-lg font-bold text-[#111827] leading-snug">
              Manual processes, centralized risk
            </h3>

            {/* Description */}
            <p className="mt-4 text-[#64748B] md:text-base text-sm leading-relaxed">
              Weak operational structures create approval gaps,
              execution errors, and unnecessary dependency risks.
            </p>

            {/* Items */}
            <div className="mt-10 space-y-5">
              {withoutControls.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-[#E5E7EB] pb-5"
                >
                  <div className="min-w-[34px] min-h-[34px] rounded-full bg-[#EEF2F7] flex items-center justify-center">
                    <X className="text-[#64748B] w-4 h-4" />
                  </div>

                  <p className="text-[#475467] text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Badge */}
            <div className="mt-10 inline-flex items-center gap-2 bg-[#F8FAFC] border border-[#E5E7EB] px-4 py-3 rounded-2xl">
              <Lock className="text-[#94A3B8] w-8 h-8" />

              <span className="text-sm font-semibold text-[#475467]">
                High operational exposure
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            data-aos="fade-left"
            className="group relative bg-gradient-to-br from-[#EFF6FF] to-[#F8FBFF] border border-[#BFD7FF] rounded-[32px] p-8 md:p-10 overflow-hidden hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)] transition-all duration-500"
          >
            {/* Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]"></div>

            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-[#2563EB] px-4 py-2 rounded-full shadow-md">
              <ShieldCheck className="text-white w-8 h-8" />

              <span className="text-sm md:text-base font-bold text-white">
                With Structured Frameworks
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-8 text-lg font-bold text-[#172554] leading-snug">
              Verified, enforced, resilient
            </h3>

            {/* Description */}
            <p className="mt-4 text-[#475569] md:text-base text-sm leading-relaxed">
              Strong governance structures create transaction resilience,
              controlled execution, and operational accountability.
            </p>

            {/* Items */}
            <div className="mt-10 space-y-5">
              {withFramework.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-[#D7E5FF] pb-5"
                >
                  <div className="min-w-[34px] min-h-[34px] rounded-full bg-[#2563EB] flex items-center justify-center shadow-md">
                    <Check className="text-white w-4 h-4" />
                  </div>

                  <p className="text-[#334155] text-base leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Badge */}
            <div className="mt-10 inline-flex items-center gap-2 bg-white border border-[#D7E5FF] px-4 py-3 rounded-2xl shadow-sm">
              <ShieldCheck className="text-[#2563EB] w-8 h-8" />

              <span className="text-sm font-semibold text-[#2563EB]">
                Institutional-grade execution control
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-[#DCE7F7] rounded-full px-6 py-4 shadow-sm">
            <ShieldCheck className="text-[#2563EB] w-8 h-8" />

            <p className="text-[#475467] text-sm md:text-base font-medium">
              Structure determines whether systems fail under pressure or remain resilient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskComparison;