import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Check } from "lucide-react";

const insights = [
  {
    title: "Where Each Platform Is Strong",
    desc: "Concrete, scenario-based strengths grounded in how the system actually behaves under load and authorization conditions.",
  },
  {
    title: "Where It Introduces Risk",
    desc: "The specific points where vendor design choices, dependencies, or workflow assumptions create exposure for your operations.",
  },
  {
    title: "How Control Is Distributed Internally",
    desc: "A clear map of who actually holds authority at each layer, including the boundary between user control and vendor control.",
  },
  {
    title: "Trade-offs Between Flexibility, Security, and Dependency",
    desc: "Every platform optimizes for something. We surface those trade-offs explicitly so the decision is made with full context.",
  },
];

const StructureNotMarketing = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="bg-[#F7FAFB] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div data-aos="fade-right">
            <span className="text-[#2563EB] uppercase tracking-[4px] text-xs md:text-sm font-semibold">
              What You Actually Get
            </span>

            <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
              Structure, Not Marketing
            </h2>

            <p className="mt-8 text-[#5B6475] text-base md:text-xl leading-relaxed max-w-xl">
              Instead of generic recommendations, you receive a clear view of
              how each option performs in practice. You are not choosing based
              on marketing claims. You are choosing based on structure.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {insights.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-[#D9E1EC] rounded-3xl p-6 md:p-8 flex gap-5 hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="min-w-[32px] h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white">
                  <Check size={10} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[#111827] text-lg md:text-lg font-bold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[#5B6475] text-sm md:text-base leading-relaxed">
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

export default StructureNotMarketing;