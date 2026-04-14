import React, { useState } from "react";

const faqs = [
  {
    q: "What does Secure Ledger Solutions do?",
    a: "Secure Ledger Solutions provides institutional-grade digital asset security, liquidity execution, and advisory services, enabling clients to securely manage, transact, and protect high-value crypto assets.",
  },
  {
    q: "How is this different from a crypto exchange and other crypto consultancy companies?",
    a: "Unlike exchanges and other crypto consultancy companies, Secure Ledger Solutions operates as a private execution and advisory partner, offering custom liquidity routing, secure custody frameworks, and controlled transaction environments rather than public order book trading.",
  },
  {
    q: "What types of clients do you work with?",
    a: "We work with high-net-worth individuals, family offices, investment funds, institutions, and crypto businesses requiring secure, high-value transaction handling and asset protection.",
  },
  {
    q: "Do you handle large crypto transactions?",
    a: "Yes, we specialize in high-volume transactions, utilizing OTC execution, deep liquidity access, and multi-venue routing to minimize slippage and market impact.",
  },
  {
    q: "How do you ensure the security of digital assets?",
    a: "We implement multi-layered security architecture, including cold storage, multi-signature wallets, private key isolation, and access control systems, supported by operational security frameworks.",
  },
  {
    q: "What is OTC execution and why is it important?",
    a: "Over-the-counter (OTC) execution allows large trades to be conducted off public exchanges, reducing price slippage, market exposure, and front-running risks.",
  },
  {
    q: "Do you provide custody or wallet setup services?",
    a: "Yes, we design and implement secure wallet infrastructures, including hardware wallets, cold storage systems, and multi-signature configurations tailored to client needs.",
  },
  {
    q: "How do you manage risk in transactions?",
    a: "We apply structured execution strategies, transaction governance frameworks, and real-time monitoring, ensuring controlled and risk-mitigated operations.",
  },
  {
    q: "Are your services compliant with regulations?",
    a: "We operate within compliance-aligned frameworks, incorporating AML/KYC considerations, transaction monitoring, and jurisdictional risk assessment.",
  },
  {
    q: "Can you assist with asset recovery?",
    a: "Yes, we provide asset tracing, blockchain forensics, and recovery guidance, depending on the feasibility of each case.",
  },
  {
    q: "Do you work with decentralized or self-custody setups?",
    a: "Yes, we support non-custodial and decentralized custody models, enabling clients to maintain full control over their assets and transaction visibility.",
  },
  {
    q: "How do you ensure privacy and confidentiality?",
    a: "All engagements are handled through secure communication channels and controlled execution environments, ensuring strict confidentiality and minimal data exposure.",
  },
  {
    q: "Do you provide ongoing support or one-time services?",
    a: "We operate as a long-term partner, providing continuous advisory, execution support, and infrastructure access across evolving market conditions.",
  },
  {
    q: "What is the minimum transaction or engagement size?",
    a: "Our services are designed for high-value clients and transactions, with engagement scope tailored based on client requirements and complexity.",
  },
  {
    q: "How do you ensure execution quality for large transactions?",
    a: "We utilize aggregated liquidity pools, OTC counterparties, and smart order routing (SOR) to achieve optimal pricing, minimize slippage, and ensure efficient trade execution.",
  },
  {
    q: "What happens if a transaction fails or is delayed?",
    a: "We implement structured execution workflows, contingency planning, and real-time monitoring, allowing rapid response to delays and minimizing disruption to transaction outcomes.",
  },
  {
    q: "Do you work across multiple jurisdictions?",
    a: "Yes, we support cross-border transactions through jurisdiction-aware execution strategies, ensuring alignment with regional requirements while maintaining operational efficiency.",
  },
  {
    q: "Can you assess the legitimacy of crypto projects before investment?",
    a: "Yes, through our Project Risk & Legitimacy Advisory, we evaluate smart contracts, liquidity conditions, team credibility, and on-chain activity to identify potential risks such as rug pulls or fraudulent structures.",
  },
  {
    q: "How do you reduce dependency on centralized exchanges?",
    a: "We leverage OTC execution, private liquidity networks, and non-custodial frameworks, reducing reliance on centralized platforms and minimizing exposure to exchange-related risks.",
  },
  {
    q: "How do I get started?",
    a: "You can begin by requesting a private consultation, where we assess your requirements and design a tailored execution and security strategy.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F8FAFF] py-20">
      <div className="max-w-4xl mx-auto px-5 md:px-10">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-transparent hover:border-[#2F6FD6] transition text-sm md:text-base"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-5 font-medium text-[#1A2B6B] flex justify-between items-center"
              >
                {item.q}
                <span className="text-[#2F6FD6]">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-5 pb-5 text-sm text-[#6D7380] leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQSection;
