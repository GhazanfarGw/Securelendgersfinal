import React from "react";
import {
  FaLock,
  FaBullseye,
  FaComments,
  FaLayerGroup,
} from "react-icons/fa";

const values = [
  {
    icon: <FaLock />,
    title: "Confidentiality",
    desc: "All interactions and transactions are handled under strict privacy protocols, secure communication channels, and controlled information access.",
  },
  {
    icon: <FaBullseye />,
    title: "Execution Precision",
    desc: "Every transaction is structured using defined execution strategies, liquidity planning, and risk-controlled workflows.",
  },
  {
    icon: <FaComments />,
    title: "Direct Communication",
    desc: "Clients engage directly with specialists and execution teams, eliminating delays and information gaps.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Controlled Execution Environment",
    desc: "Transactions are executed within structured frameworks designed to minimize volatility, risk exposure, and operational inconsistencies.",
  },
];

const CoreValues = () => {
  return (
    <div className="bg-[#F8FAFF] py-12 md:py-12">
      <div className="max-w-6xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-semibold">
            Client Experience
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B] leading-snug mt-4 max-w-lg mx-auto">
            What Defines Our Client <br /> Experience
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6 md:mt-14 mt-8">

          {values.map((item, index) => (
            <div
              key={index}
              className="group gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-transparent hover:border-[#2F6FD6]"
            >
              {/* Icon */}
              <div className="md:h-12 md:w-12 h-8 w-8 flex items-center justify-center rounded-lg bg-[#E8EDFF] text-[#2F6FD6] text-lg group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[#1A2B6B] md:text-base text-sm font-semibold pt-4">
                  {item.title}
                </h3>
                <p className="md:text-sm text-xs text-[#6D7380] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default CoreValues;