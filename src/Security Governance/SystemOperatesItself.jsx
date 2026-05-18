import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Check } from "lucide-react";

const frameworkItems = [
  {
    title: "Everyone Knows Their Role",
    desc: "Ownership is explicit. No ambiguity during normal operations or critical moments.",
  },
  {
    title: "Decisions Follow Clear Rules",
    desc: "Approvals are consistent because the logic is encoded, not improvised.",
  },
  {
    title: "Risk Is Visible and Controlled",
    desc: "Leadership sees real exposure, with controls actively reducing it.",
  },
  {
    title: "Audits Are No Longer a Headache",
    desc: "Workflows, approvals, and controls are documented and traceable by default.",
  },
];

const SystemOperatesItself = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[4px] text-[#2563EB] text-xs md:text-sm font-semibold">
            What You End Up With
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            A System That Operates Itself
          </h2>

          <p className="mt-6 text-[#5B6475] text-base md:text-lg leading-relaxed">
            The end state is a working operational framework,
            not a binder of documents.
          </p>
        </div>

        {/* Main Box */}
        <div
          className="mt-16 bg-[#F8FBFF] border border-[#BFD6FF] rounded-[32px] p-8 md:p-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid md:grid-cols-2">
            {frameworkItems.map((item, index) => (
              <div
                key={index}
                className={`
                  py-8 md:px-6
                  ${
                    index < 2
                      ? "border-b border-[#CFE0FF]"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "md:border-r md:border-[#CFE0FF]"
                      : ""
                  }
                `}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="min-w-[48px] h-12 rounded-full bg-[#2563EB] flex items-center justify-center shadow-md">
                    <Check
                      size={20}
                      className="text-white"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[#173265] text-base md:text-lg font-bold leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[#5B6475] text-sm md:text-base leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemOperatesItself;