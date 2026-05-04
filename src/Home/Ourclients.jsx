import React, { useState } from "react";
import {
  Rocket,
  Building2,
  Home,
  BarChart3,
  Briefcase,
  User,
  LineChart,
  Globe,
  Landmark,
} from "lucide-react";

const data = [
  {
    title: "Crypto Startups",
    short: "Security & Infrastructure for Emerging Blockchain Ventures",
    full: "Early-stage and scaling crypto startups operate across hot wallets, smart contracts, and on-chain transaction layers, exposing them to vulnerabilities. We implement secure wallet provisioning, smart contract safeguards, multi-sig governance, and treasury security frameworks.",
    icon: Rocket,
  },
  {
    title: "Institutions",
    short: "Enterprise Digital Asset Security & Compliance",
    full: "Institutions require regulated custody models, AML/KYC compliance, and operational standardization. We design custodial architectures, approval hierarchies, and audit-ready risk systems.",
    icon: Building2,
  },
  {
    title: "Family Offices",
    short: "Structured Crypto Allocation & Wealth Preservation",
    full: "We deploy multi-entity wallet segregation, cold storage vaulting, and governance frameworks to protect long-term generational wealth.",
    icon: Home,
  },
  {
    title: "Investment Funds",
    short: "Fund-Level Custody & Risk Management",
    full: "We implement fund-level wallet structures, governance models, and liquidity execution strategies to reduce counterparty risk.",
    icon: BarChart3,
  },
  {
    title: "Private Equity Firms",
    short: "Secure Digital Asset Exposure",
    full: "We support secure acquisition, custody, and OTC-based liquidation strategies for efficient capital deployment.",
    icon: Briefcase,
  },
  {
    title: "HNWI",
    short: "Institutional-Grade Protection for Private Wealth",
    full: "We design multi-signature authorization layers, hardware wallet setups, and distributed cold storage systems.",
    icon: User,
  },
  {
    title: "Asset Managers & ETFs",
    short: "Digital Asset Custody for Portfolios",
    full: "We implement portfolio-level wallet segmentation, validation systems, and compliance-aligned custody solutions.",
    icon: LineChart,
  },
  {
    title: "Venture Capital Firms",
    short: "Secure Allocation into Web3 Assets",
    full: "We provide secure onboarding, custody frameworks, and liquidity pathways for token investments.",
    icon: Globe,
  },
  {
    title: "Investment Bankers",
    short: "High-Value Crypto Transactions",
    full: "We facilitate OTC routing, block trade execution, and slippage-optimized liquidation strategies.",
    icon: Landmark,
  },
];

const Card = ({ item, isOpen, onClick }) => {
  const Icon = item.icon;

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      {/* subtle gradient glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start">

          {/* LEFT */}
          <div className="flex gap-4">

            {/* Premium Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 shadow-sm">
              <Icon size={22} className="text-blue-600" />
            </div>

            <div>
              <h3 className="text-[#1A2B6B] font-semibold md:text-lg text-base">
                {item.title}
              </h3>

              <p className="text-sm text-[#2F6FD6] mt-1 leading-snug">
                {item.short}
              </p>
            </div>
          </div>

          {/* Toggle */}
          <button
            onClick={onClick}
            aria-expanded={isOpen}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
          >
            <span
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>

        {/* EXPAND */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-60 opacity-100 mt-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm text-[#6D7380] leading-relaxed">
              {item.full}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Audience = () => {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-gradient-to-b from-[#F0F5FF] to-white md:py-12 py-5">
      <div className="max-w-6xl mx-auto px-7 md:px-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full text-sm font-medium">
            Our Clients
          </span>

          <h2 className="mt-2 md:mt-4 text-xl md:text-3xl font-bold text-[#1A2B6B] leading-tight">
            Who Needs Secure Ledger <br className="hidden md:block lg:block"/> Solutions
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>

          <p className="md:mt-5 mt-3 text-[#6D7380] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Advanced Digital Asset Security & Liquidity Infrastructure for Institutional and High-Value Market Participants
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-16 mt-10">
          {data.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              isOpen={active === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Audience;