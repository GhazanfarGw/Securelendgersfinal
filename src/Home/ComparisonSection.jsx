// import React from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";

// const data = [
//   {
//     left: "Dedicated client coverage with personalized advisory",
//     right: "Platform-based support with limited personalization",
//   },
//   {
//     left: "End-to-end asset lifecycle management (buy → secure → execute → convert)",
//     right: "Fragmented services across multiple tools and platforms",
//   },
//   {
//     left: "Institutional-grade custody (multi-sig, cold storage, key isolation)",
//     right: "Basic wallet infrastructure with higher custody risks",
//   },
//   {
//     left: "Private liquidity access & OTC execution (no slippage exposure)",
//     right: "Public order book execution with price impact",
//   },
//   {
//     left: "Custom liquidity routing & settlement structuring",
//     right: "Fixed execution flows with no customization",
//   },
//   {
//     left: "Integrated risk management & transaction governance",
//     right: "Limited risk controls, user-managed execution",
//   },
//   {
//     left: "Blockchain intelligence, forensic screening & monitoring",
//     right: "Minimal transaction visibility and risk insights",
//   },
//   {
//     left: "Access to institutional pricing & deep liquidity networks",
//     right: "Retail pricing tiers and limited liquidity",
//   },
//   {
//     left: "Confidential execution (no market signaling)",
//     right: "Exposure to front-running and market visibility",
//   },
//   {
//     left: "Compliance-aligned frameworks with structured AML/KYC handling",
//     right: "Basic compliance checks with limited flexibility",
//   },
//   {
//     left: "Guidance on legal structuring, jurisdictional risks, and regulatory exposure",
//     right: "No legal guidance or jurisdictional support",
//   },
//   {
//     left: "Dedicated support with direct access to specialists and priority handling",
//     right: "Standard support queues with delayed responses",
//   },
//   {
//     left: "Long-term partnership & continuous advisory",
//     right: "Transactional, no ongoing strategic support",
//   },
// ];

// const ComparisonClean = () => {
//   return (
//     <div className="bg-[#F8FAFF] pt-20">
//       <div className="max-w-6xl mx-auto px-5 md:px-10">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full text-sm">
//             Comparison
//           </span>

//           <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#1A2B6B]">
//             Why Secure Ledger Solutions <br /> is Different
//           </h2>

//           <p className="mt-3 text-[#6D7380]">
//             Secure Ledger Solution vs Crypto Exchanges
//           </p>
//         </div>

//         {/* Comparison List */}
//         <div className="mt-14 space-y-5">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="grid md:grid-cols-2 gap-4"
//             >
    
//               {/* LEFT (YOU - Highlighted) */}
//               <div className="flex gap-3 items-start bg-white px-4 py-3 rounded-xl shadow-sm border border-[#E8EDFF] hover:shadow-md transition">
//                 <div className="h-5 w-5 flex items-center justify-center rounded-full bg-[#E8EDFF] text-[#2F6FD6] text-xs mt-[3px] flex-shrink-0">
//                   <FaCheck />
//                 </div>
//                 <p className="text-sm text-[#1A2B6B] leading-relaxed">
//                   {item.left}
//                 </p>
//               </div>

//               {/* RIGHT (OTHERS - Muted) */}
//               <div className="flex gap-3 items-start bg-white px-4 py-3 rounded-xl shadow-sm border border-[#E8EDFF] hover:shadow-md transition">
//                 <div className="h-5 w-5 flex items-center justify-center rounded-full bg-red-100 text-red-400 text-xs mt-[3px] flex-shrink-0">
//                   <FaTimes />
//                 </div>
//                 <p className="text-sm text-[#6D7380] leading-relaxed">
//                   {item.right}
//                 </p>
//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ComparisonClean;

import React from "react";
import { FaCheck } from "react-icons/fa";

const data = [
  {
    left: "Dedicated client coverage with personalized advisory",
    right: "Platform-based support with limited personalization",
  },
  {
    left: "End-to-end asset lifecycle management (buy → secure → execute → convert)",
    right: "Fragmented services across multiple tools and platforms",
  },
  {
    left: "Institutional-grade custody (multi-sig, cold storage, key isolation)",
    right: "Basic wallet infrastructure with higher custody risks",
  },
  {
    left: "Private liquidity access & OTC execution (no slippage exposure)",
    right: "Public order book execution with price impact",
  },
  {
    left: "Custom liquidity routing & settlement structuring",
    right: "Fixed execution flows with no customization",
  },
  {
    left: "Integrated risk management & transaction governance",
    right: "Limited risk controls, user-managed execution",
  },
  {
    left: "Blockchain intelligence, forensic screening & monitoring",
    right: "Minimal transaction visibility and risk insights",
  },
  {
    left: "Access to institutional pricing & deep liquidity networks",
    right: "Retail pricing tiers and limited liquidity",
  },
  {
    left: "Confidential execution (no market signaling)",
    right: "Exposure to front-running and market visibility",
  },
  {
    left: "Compliance-aligned frameworks with structured AML/KYC handling",
    right: "Basic compliance checks with limited flexibility",
  },
  {
    left: "Guidance on legal structuring, jurisdictional risks, and regulatory exposure",
    right: "No legal guidance or jurisdictional support",
  },
  {
    left: "Dedicated support with direct access to specialists and priority handling",
    right: "Standard support queues with delayed responses",
  },
  {
    left: "Long-term partnership & continuous advisory",
    right: "Transactional, no ongoing strategic support",
  },
];

const ComparisonFinal = () => {
  return (
    <div className="bg-[#F8FAFF] py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full text-sm">
            Comparison
          </span>

          <h2 className="mt-2 md:mt-4 text-xl md:text-3xl font-bold text-[#1A2B6B] leading-tight">
            Why Secure Ledger Solutions <br /> is Different
          </h2>
        </div>

        {/* Table Header */}
        <div className="grid md:grid-cols-2 gap-4 mt-14 px-2">
          <h3 className="text-[#2F6FD6] font-semibold">
            Secure Ledger Solutions
          </h3>
          <h3 className="text-[#6D7380] font-semibold">
            Standard Crypto Service Providers
          </h3>
        </div>

        {/* Rows */}
        <div className="mt-4 space-y-2 items-center justify-center mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-4"
            >

              {/* LEFT (Highlight) */}
              <div className="flex gap-3 items-start bg-white py-3 px-3 rounded-xl border border-[#E8EDFF] hover:shadow-md transition">
                <div className="h-5 w-5 flex items-center justify-center rounded-full bg-[#E8EDFF] text-[#2F6FD6] text-xs mt-[3px] flex-shrink-0">
                  <FaCheck />
                </div>
                <p className="text-sm text-[#1A2B6B] leading-relaxed font-medium">
                  {item.left}
                </p>
              </div>

              {/* RIGHT (Muted) */}
              <div className="flex gap-3 items-start bg-white py-3 px-3 rounded-xl border border-[#E8EDFF] hover:shadow-md transition">
                <div className="h-2 w-2 bg-red-300 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-[#6D7380] leading-relaxed">
                  {item.right}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ComparisonFinal;