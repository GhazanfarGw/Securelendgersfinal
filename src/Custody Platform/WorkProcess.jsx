import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    number: "1",
    title: "Initial Alignment",
    desc: "We understand your custody goals, risk tolerance, and operational structure.",
  },
  {
    number: "2",
    title: "Platform Review",
    desc: "We analyze shortlisted platforms using our evaluation framework.",
  },
  {
    number: "3",
    title: "Comparative Breakdown",
    desc: "We present differences clearly so decisions are easier to make.",
  },
  {
    number: "4",
    title: "Advisory & Direction",
    desc: "We guide you toward the option that best fits your requirements.",
  },
  {
    number: "5",
    title: "Integration Support",
    desc: "Optional. We help align the selected platform with your workflows and governance model.",
  },
];

const WorkProcess = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section id="workprocess" className="bg-[#fff] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[4px] text-[#2563EB] text-xs md:text-sm font-semibold">
            How We Work With You
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            From Alignment to <br /> Integration
          </h2>

          <p className="mt-6 text-[#5B6475] text-base md:text-lg leading-relaxed">
            A five-stage engagement that moves from understanding your goals to
            supporting platform integration.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mt-24 relative">
          {/* Line */}
          <div className="absolute top-6 left-0 w-full h-[2px] bg-[#2563EB]/40"></div>

          <div className="grid grid-cols-5 gap-10 relative z-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Circle */}
                <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#2563EB] bg-[#F4F6F8] flex items-center justify-center text-[#2563EB] font-bold text-xl shadow-sm">
                  {item.number}
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-[#111827] text-base font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[#5B6475] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden mt-16 relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#2563EB]/30"></div>

          <div className="space-y-12">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative pl-20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Circle */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-[#2563EB] bg-[#F4F6F8] flex items-center justify-center text-[#2563EB] font-bold text-lg">
                  {item.number}
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl border border-[#D9E1EC] p-6 shadow-sm">
                  <h3 className="text-[#111827] text-lg font-bold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[#5B6475] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;