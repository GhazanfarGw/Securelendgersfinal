import {
  ShieldCheck,
  Lock,
  HardDrive,
  Repeat,
  Activity,
  CheckCircle,
} from "lucide-react";

const TrustBar = () => {
  const items = [
    { title: "Digital Asset Advisory", icon: <ShieldCheck size={20} /> },
    { title: "Multi-Signature Wallets", icon: <Lock size={20} /> },
    { title: "Cold Storage Solutions", icon: <HardDrive size={20} /> },
    { title: "OTC Liquidity Execution", icon: <Repeat size={20} /> },
    { title: "Blockchain Intelligence", icon: <Activity size={20} /> },
    { title: "Compliance & AML", icon: <CheckCircle size={20} /> },
  ];

  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <p className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-500 mb-6 sm:mb-8">
          CORE CAPABILITIES
        </p>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-3 sm:gap-4 md:gap-5
        ">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                flex items-center gap-3 
                bg-[#EEF3FF] 
                px-4 py-3 sm:px-5 sm:py-4 
                rounded-xl 
                shadow-sm 
                hover:shadow-md 
                transition-all duration-300
                hover:-translate-y-0.5
              "
            >
              {/* Icon */}
              <div className="text-[#1A2B6B] flex-shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <p className="
                text-xs sm:text-sm md:text-[15px] 
                font-medium text-[#1A2B6B] 
                text-left
              ">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustBar;