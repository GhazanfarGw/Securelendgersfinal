import { ShieldCheck } from "lucide-react";

export default function ImportantConsiderations() {
  const items = [
    "Asset Location",
    "Platform Policies",
    "Access Credentials",
    "Transaction Finality",
    "Technical Feasibility",
  ];

  return (
    <div className="w-full flex justify-center md:py-12 py-5 bg-[#f3f4f6] md:px-10 px-7">
      <div className="w-full max-w-5xl bg-[#F7E3A1] border border-[#E5C76B] rounded-2xl p-6 md:p-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-[#F4B740] text-white p-2 rounded-lg">
            <ShieldCheck size={20} />
          </div>
          <h2 className="text-lg md:text-2xl font-semibold text-[#1f2937]">
            Important Considerations
          </h2>
        </div>

        {/* Description */}
        <p className="text-[#6b7280] text-sm md:text-base mb-8 max-w-3xl leading-relaxed">
          Digital asset recovery is not guaranteed and depends on multiple
          technical and operational factors. Our role is to provide structured
          analysis, transparency, and expert guidance, enabling informed
          decision-making based on verifiable data.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#F9F3E3] md:text-base text-sm border border-[#EAD9A4] rounded-xl py-4 px-3 flex flex-col items-center justify-center text-center hover:shadow-md transition"
            >
              {/* Custom Check Icon */}
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F4B740] text-white text-xs mb-2">
                ✓
              </div>

              <p className="md:text-sm text-xs font-medium text-[#374151]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="bg-[#F3E6C1] border border-[#E5C76B] rounded-xl py-4 px-6 text-center">
          <p className="text-xs md:text-sm text-[#6b7280]">
            Assessment does not guarantee recovery. Each case is evaluated
            individually based on its specific technical and operational
            circumstances.
          </p>
        </div>
      </div>
    </div>
  );
}