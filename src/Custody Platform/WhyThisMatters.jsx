import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Activity,
  Users,
  Lock,
  AlertTriangle,
  Check,
  Quote,
} from "lucide-react";

const impactCards = [
  {
    icon: <Activity size={20} />,
    title: "Processes Build Around It",
  },
  {
    icon: <Users size={20} />,
    title: "Teams Depend on It",
  },
  {
    icon: <Lock size={20} />,
    title: "Assets Are Tied to It",
  },
];

const WhyThisMatters = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#F4F6F8] py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[4px] text-[#2563EB] text-xs md:text-sm font-semibold">
            Why This Matters
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            Custody Decisions Are Hard to Reverse
          </h2>

          <p className="mt-6 text-[#5B6475] text-base md:text-lg leading-relaxed">
            Once a platform is integrated, the cost of changing it grows
            quickly.
          </p>
        </div>

        {/* Main Quote Box */}
        <div
          className="mt-16 border border-[#BFD6FF] rounded-[32px] bg-[#F7FAFF] px-6 md:px-16 py-14 md:py-20 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full bg-[#EAF2FF] flex items-center justify-center">
              <Quote
                size={28}
                className="text-[#7FB0FF]"
              />
            </div>
          </div>

          <h3 className="mt-8 text-xl md:text-2xl font-bold text-[#173265] leading-tight">
            Custody decisions are not easy to reverse.
          </h3>

          <p className="mt-8 max-w-4xl mx-auto text-[#5B6475] text-base md:text-lg leading-relaxed">
            Once a platform is integrated, processes are built around it,
            teams depend on it, and assets are tied to it. The cost of
            switching grows quickly with every operational layer added on top.
          </p>
        </div>

        {/* Middle Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {impactCards.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-[#DCE4F0] rounded-3xl py-10 px-6 text-center hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-[#EEF4FF] flex items-center justify-center text-[#2563EB]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-[#111827] text-base md:text-lg font-bold leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          {/* Weak Decision */}
          <div
            data-aos="fade-right"
            className="bg-[#F8FAFC] border border-[#DCE4F0] rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-start gap-5">
              <div className="min-w-[44px] h-11 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#64748B]">
                <AlertTriangle size={20} />
              </div>

              <div>
                <h3 className="text-[#1E293B] text-base md:text-lg font-bold">
                  A Weak Decision
                </h3>

                <p className="mt-4 text-[#5B6475] text-base md:text-lg leading-relaxed">
                  Introduces long-term risk that compounds with every workflow
                  built on top.
                </p>
              </div>
            </div>
          </div>

          {/* Strong Decision */}
          <div
            data-aos="fade-left"
            className="bg-[#071D49] rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-start gap-5">
              <div className="min-w-[44px] h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white">
                <Check size={20} />
              </div>

              <div>
                <h3 className="text-white text-base md:text-lg font-bold">
                  A Well-Evaluated Decision
                </h3>

                <p className="mt-4 text-[#C7D2FE] text-base md:text-base leading-relaxed">
                  Creates a stable foundation that scales with your operations
                  and governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;