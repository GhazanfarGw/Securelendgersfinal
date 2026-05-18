import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Search,
  ShieldCheck,
  LayoutTemplate,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Understand",
    desc: "We learn how you currently operate, including the informal patterns, not just the documented ones.",
    icon: <Search size={22} />,
  },
  {
    number: "2",
    title: "Identify",
    desc: "We surface gaps and risks across roles, approvals, policies, and controls.",
    icon: <ShieldCheck size={22} />,
  },
  {
    number: "3",
    title: "Design",
    desc: "We design a structure that fits your team, your operations, and your scale.",
    icon: <LayoutTemplate size={22} />,
  },
  {
    number: "4",
    title: "Operate",
    desc: "We make sure the framework actually works in practice, not just on paper.",
    icon: <Rocket size={22} />,
  },
];

const WorkProcess = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="workprocess" className="bg-[#fff] py-20 md:py-28 overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2563EB]/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <span className="uppercase tracking-[4px] text-[#2563EB] text-xs md:text-sm font-semibold">
            How We Work With You
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-[#2563EB] leading-tight">
            Simple and Practical
          </h2>

          <p className="mt-6 text-[#5B6475] text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            A four-stage engagement focused on understanding how you actually
            operate, then putting structure around it.
          </p>
        </div>

        {/* DESKTOP VERSION */}
        <div className="hidden lg:block mt-28 relative">
          {/* Main Line */}
          <div className="absolute top-[42px] left-0 w-full h-[2px] bg-gradient-to-r from-[#2563EB]/10 via-[#2563EB]/50 to-[#2563EB]/10"></div>

          <div className="grid grid-cols-4 gap-10 relative z-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="text-center relative"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                {/* Step Circle */}
                <div className="relative mx-auto top-3 w-14 h-14 rounded-full bg-white border-2 border-[#2563EB] shadow-[0_10px_30px_rgba(37,99,235,0.12)] flex items-center justify-center">
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#2563EB] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                    {item.number}
                  </div>

                  <div className="absolute text-[#2563EB] h-10 w-10 items-center justify-center left-3 top-3">{item.icon}</div>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-[#111827] text-base md:text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[#5B6475] text-base leading-relaxed max-w-[260px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="lg:hidden mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-[#2563EB]/20"></div>

          <div className="space-y-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative pl-20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Step Icon */}
                <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-white border-2 border-[#2563EB] shadow-md flex items-center justify-center text-[#2563EB]">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white text-sm font-bold flex items-center justify-center">
                      {item.number}
                    </div>

                    <h3 className="text-[#111827] text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-[#5B6475] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 bg-white border border-[#DCE7F7] rounded-[32px] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <span className="uppercase tracking-[3px] text-[#2563EB] text-xs font-semibold">
              Structured Engagement
            </span>

            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-[#111827]">
              Built Around Operational Reality
            </h3>

            <p className="mt-3 text-[#5B6475] text-base md:text-lg max-w-2xl leading-relaxed">
              Every engagement is designed to align security, governance,
              workflows, and operational execution into a practical framework.
            </p>
          </div>

          <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
            <a href="/contact-us">Start Consultation</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;