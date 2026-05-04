import {
  FaFileAlt,
  FaSearch,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaFileAlt />,
    title: "Case Assessment & Audit",
    desc: "Comprehensive evaluation of asset status, wallet access, transaction history, and recovery feasibility using structured analysis frameworks.",
  },
  {
    icon: <FaSearch />,
    title: "Blockchain Asset Tracing",
    desc: "Track asset movement across public ledgers, wallet addresses, and transaction hashes, identifying current asset location and flow patterns.",
  },
  {
    icon: <FaEnvelope />,
    title: "Exchange Coordination",
    desc: "Support communication with licensed custodial platforms, including guidance on account recovery procedures, compliance checks, and verification processes.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Asset Protection Advisory",
    desc: "Implement post-recovery security measures, including secure wallet setup, key management practices, and risk mitigation strategies to prevent future loss.",
  },
];

export default function CoreServices() {
  return (
    <div className="bg-[#F4F6FA] py-12 md:py-12">
      <div className="max-w-6xl mx-auto text-center px-7 md:px-10">

        {/* Top Badge */}
        <span className="bg-[#E8EEF9] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-medium">
          Core Services
        </span>

        {/* Heading */}
        <h2 className="mt-4 text-xl md:text-3xl font-bold text-[#1F2A37] leading-snug max-w-lg mx-auto">
          Comprehensive Assessment <br /> Solutions
        </h2>
        <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>

        {/* Description */}
        <p className="mt-4 text-[#6B7280] text-sm md:text-base max-w-lg mx-auto">
          End-to-end services covering blockchain analysis, tracing, and asset protection
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-[#F8FAFC] p-6 rounded-2xl text-center border border-[#E5EAF2] hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="md:w-14 md:h-14 w-10 h-10 mx-auto flex items-center justify-center rounded-xl bg-[#E8EEF9] text-[#2F6FD6] text-xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="md:mt-5 mt-3 text-[#1F2A37] font-semibold text-sm md:text-base">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[#6B7280] md:text-sm text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}