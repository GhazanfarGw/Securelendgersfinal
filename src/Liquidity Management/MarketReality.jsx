import React, { useEffect } from "react";
import Aos from "aos";
import CountUp from "react-countup";
import "aos/dist/aos.css";

// ✅ LOCAL LOGOS
import ftxLogo from "../icons/ftx.png";
import celsiusLogo from "../icons/celsius.png";
import blockfiLogo from "../icons/blockfi.svg";
import mtgoxLogo from "../icons/MtGox.png";

const failures = [
  {
    title: "FTX Collapse (2022)",
    desc: "Failure of internal risk controls and misuse of customer assets resulted in an estimated $8B+ liquidity shortfall, exposing counterparty risk within centralized exchanges.",
    value: 8,
    suffix: "B+",
    logo: ftxLogo,
  },
  {
    title: "Mt. Gox Breach (2014)",
    desc: "Security vulnerabilities led to the loss of approximately 850,000 BTC, highlighting the risks associated with centralized custodial wallet management.",
    value: 850000,
    suffix: " BTC",
    logo: mtgoxLogo,
  },
  {
    title: "Celsius Network (2022)",
    desc: "Overleveraged positions and poor liquidity management resulted in $4.7B+ in frozen user assets, demonstrating systemic risk in yield-based crypto platforms.",
    value: 4.7,
    suffix: "B+",
    logo: celsiusLogo,
  },
  {
    title: "BlockFi Bankruptcy (2022)",
    desc: "Exposure to failing counterparties and inadequate risk controls led to insolvency, impacting institutional and retail participants.",
    label: "Insolvency",
    logo: blockfiLogo,
  },
];

const impacts = [
  "$10B+ in customer asset losses linked to exchange insolvencies and custodial failures",
  "Multi-billion dollar liquidity gaps across centralized lending platforms",
  "Significant capital lock-ups due to compliance triggers, withdrawal restrictions, and insolvency events",
  "Institutional transaction disruption caused by settlement delays and counterparty failures",
];

const MarketRealityPro = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#fff] py-12 md:py-12">

      <div className="max-w-6xl mx-auto px-7 lg:px-10">

        {/* Header */}
        <div className="text-center md:max-w-3xl mx-auto" data-aos="fade-up">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-medium">
            Market Reality
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1E3A8A] mt-2 md:mt-4 max-w-xl mx-auto">
            Systemic Failures in Crypto Market Infrastructure
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>
          <p className="mt-4 text-gray-600 text-sm md:text-base font-medium">
            Large-scale exchange collapses, liquidity crises, and custody failures have exposed critical weaknesses in digital asset infrastructure, resulting in significant capital loss across global markets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12">

          {failures.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
            >

              {/* Logo + Title */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-[#1A2B6B] font-semibold md:text-base text-sm mt-2 md:mt-0">
                  {item.title}
                </h3>
              </div>

              {/* Counter */}
              <p className="md:text-2xl text-lg font-bold text-blue-600">
                {item.label ? (
                  item.label
                ) : (
                  <>
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2}
                      separator=","
                      decimals={item.value % 1 !== 0 ? 1 : 0}
                    />
                    {item.suffix}
                  </>
                )}
              </p>

              {/* Description (UNCHANGED ✅) */}
              <p className="md:text-sm text-xs text-[#6D7380] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Impact Section */}
        <div className="mt-16 bg-blue-600 text-white rounded-2xl p-8 text-center">

          <h3 className="text-xl md:text-2xl font-bold">
            Capital Exposure Across Market Failures
          </h3>

          {/* BIG COUNTER */}
          <p className="text-4xl md:text-5xl font-extrabold mt-4">
            $
            <CountUp end={35} duration={3} />
            B+
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
            {impacts.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 p-4 rounded-lg text-sm"
              >
                • {item}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default MarketRealityPro;