import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  GitBranch,
  TrendingUp,
  CheckCircle2,
  Lock,
} from "lucide-react";

const solutionCards = [
  {
    icon: <GitBranch size={24} />,
    title: "Distributed Authorization",
    points: [
      "Authority is shared across multiple participants",
      "No single entity can authorize on its own",
    ],
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Predefined Execution Logic",
    points: [
      "Execution rules are encoded, not improvised",
      "Behavior is deterministic at every stage",
    ],
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: "Step by Step Validation",
    points: [
      "Every step is validated before completion",
      "No transaction completes without verified checks",
    ],
  },
  {
    icon: <Lock size={24} />,
    title: "No Independent Movement",
    points: [
      "No actor can move assets without quorum",
      "System enforces collective authorization",
    ],
  },
];

const StructuredMovement = () => {
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
          className="text-center max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[4px] text-[#2563EB] text-xs md:text-sm font-semibold">
            What This Solves
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            Structured Movement, <br /> Verified Authority
          </h2>

          <p className="mt-7 text-[#5B6475] text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            Four operational guarantees that replace manual transaction
            handling with deterministic execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {solutionCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-[#DCE4F0] rounded-[30px] p-8 md:p-10 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#2563EB]">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-[#111827] text-base md:text-lg font-bold leading-snug">
                {card.title}
              </h3>

              {/* Bullet Points */}
              <div className="mt-3 space-y-2">
                {card.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] mt-3"></div>

                    <p className="text-[#5B6475] text-sm md:text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructuredMovement;