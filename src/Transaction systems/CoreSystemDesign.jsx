import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const systemCards = [
  {
    number: "01",
    title: "Transaction Authorization & Multi Party Control",
    desc: "We design authorization frameworks that define exactly how a transaction is approved before execution.",
    points: [
      "Defining who can initiate transactions",
      "Assigning approval roles across teams or entities",
      "Setting approval thresholds based on transaction type or value",
      "Enforcing multi party signing before execution",
    ],
    badge: "Quorum Enforced",
  },
  {
    number: "02",
    title: "Multi Stage Transaction Flow",
    desc: "We structure how a transaction moves from request to execution, with each step controlled and recorded.",
    flow: [
      "Request is created",
      "Transaction details reviewed",
      "Approvers validate and sign",
      "System verifies threshold",
      "Transaction is executed",
    ],
    badge: "Fully Traceable",
  },
  {
    number: "03",
    title: "Custody Protocol Security Optimization",
    desc: "We analyze and optimize the underlying transaction protocols to ensure they are secure, efficient, and suitable for real world use.",
    points: [
      "System behavior under load",
      "How approvals are processed",
      "Communication patterns between participants",
    ],
    badge: "Production Hardened",
  },
  {
    number: "04",
    title: "Computation Complexity",
    desc: "We design systems that balance security with performance, keeping operations efficient without weakening guarantees.",
    points: [
      "Cryptographic operations remain efficient",
      "Unnecessary processing overhead is reduced",
      "Strong security maintained without slowing execution",
    ],
    badge: "Performance Tuned",
  },
  {
    number: "05",
    title: "Round Complexity",
    desc: "We optimize how many steps are required to complete a transaction, leading to faster and more reliable execution.",
    points: [
      "Reduced interaction rounds between participants",
      "Approvals happen in a predictable sequence",
      "Flows designed to minimize latency",
    ],
    badge: "Low Latency",
  },
  {
    number: "06",
    title: "Communication Complexity",
    desc: "We design how participants communicate during the authorization process, keeping the system efficient even at scale.",
    points: [
      "Reduced unnecessary data exchange",
      "Secure communication between parties",
      "Synchronous and asynchronous approval flows",
    ],
    badge: "Scalable Coordination",
  },
];

const CoreSystemDesign = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div
          className="text-center max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[4px] text-[#2563EB] text-xs md:text-sm font-semibold">
            Core System Design
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-[#2563EB] leading-tight">
            How Transactions Move Securely
          </h2>

          <p className="mt-7 text-[#5B6475] text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            A six-part framework covering authorization, execution flow,
            and the protocol-level optimizations that keep secure systems fast.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {systemCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="bg-white border border-[#DCE4F0] rounded-[28px] p-7 md:p-8 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Number */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center text-white font-bold text-sm shadow-md">
                {card.number}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-[#111827] text-base md:text-lg font-bold leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-[#5B6475] text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>

              {/* Normal Bullet Points */}
              {card.points && (
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
              )}

              {/* Flow Steps */}
              {card.flow && (
                <div className="mt-7 space-y-3">
                  {card.flow.map((step, i) => (
                    <div key={i}>
                      <div className="bg-[#F8FAFC] border border-[#DCE4F0] rounded-xl px-4 py-2 flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </div>

                        <p className="text-[#475569] text-sm md:text-base">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Badge */}
              <div className="mt-auto pt-8">
                <span className="inline-flex bg-[#EEF4FF] text-[#2563EB] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[2px]">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSystemDesign;