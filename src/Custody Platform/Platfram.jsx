import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Check } from "lucide-react";

const platforms = [
  {
    id: "F",
    name: "Fireblocks",
  },
  {
    id: "M",
    name: "Metaco",
  },
  {
    id: "G",
    name: "Gnosis Safe",
  },
  {
    id: "I",
    name: "IBM",
  },
];

const PlatformAssessment = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="bg-[#fff] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-[#2563EB] uppercase tracking-[4px] text-xs md:text-sm font-semibold">
            Platforms We Commonly Assess
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            Independent Evaluation, Across Vendors
          </h2>

          <p className="mt-6 text-[#5B6475] text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            We provide independent evaluation across leading custody solutions.
            Our assessments are vendor neutral. We do not promote platforms.
            We break them down.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-white border border-[#D9E1EC] rounded-3xl h-[170px] flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-2xl border border-[#D9E1EC] bg-[#F4F7FB] flex items-center justify-center">
                <span className="text-[#2756D8] text-xl font-bold">
                  {platform.id}
                </span>
              </div>

              {/* Name */}
              <h3 className="mt-5 text-[#111827] text-xl font-semibold">
                {platform.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-10 bg-[#EEF4FF] border border-[#B9D3FF] rounded-2xl px-6 py-6 flex items-start gap-4"
        >
          {/* Icon */}
          <div className="min-w-[38px] min-h-[38px] rounded-full bg-[#2563EB] flex items-center justify-center text-white">
            <Check size={15} />
          </div>

          {/* Text */}
          <p className="text-[#1E3A66] text-sm md:text-lg leading-relaxed">
            <span className="font-bold">Vendor neutral by design.</span> We
            have no commercial relationships with platform vendors. Every
            assessment is structured around your operational requirements, not
            vendor positioning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformAssessment;