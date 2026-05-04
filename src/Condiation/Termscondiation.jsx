import React from 'react';
import Header from '../Home/header';
import Footer from '../Home/Footer';

export default function TermsConditions() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen py-14 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 mb-8">
            Secure Ledger Solutions
          </p>

          {/* 1 */}
          <SectionTitle title="1. Introduction" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            These Terms & Conditions (“Terms”) govern your engagement with 
            <span className="font-semibold"> Secure Ledger Solutions</span> 
            ("Company", "we", "us", or "our"). By accessing or using our services, 
            you agree to be bound by these Terms.
          </p>

          {/* 2 */}
          <SectionTitle title="2. Scope of Services" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Secure Ledger Solutions provides digital asset security, liquidity execution support, 
            risk management, and advisory services designed for high-value and institutional-grade operations.
          </p>

          {/* 3 */}
          <SectionTitle title="3. Advisory & Execution Framework" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            All services are delivered under a structured advisory and execution framework. 
            Clients may be required to seek independent financial, legal, or tax advice 
            depending on their jurisdiction.
          </p>

          {/* 4 */}
          <SectionTitle title="4. Client Responsibilities" />
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Maintain control of private keys and digital assets</li>
            <li>Verify all transaction details before execution</li>
            <li>Ensure compliance with applicable laws</li>
          </ul>

          {/* 5 */}
          <SectionTitle title="5. Risk Disclosure" />
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Market volatility</li>
            <li>Regulatory changes</li>
            <li>Cybersecurity threats</li>
            <li>Liquidity and execution risks</li>
          </ul>

          {/* 6 */}
          <SectionTitle title="6. Execution & Market Conditions" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Execution depends on real-time market conditions, liquidity, and external platforms. 
            Outcomes may vary accordingly.
          </p>

          {/* 7 */}
          <SectionTitle title="7. Third-Party Platforms" />
          <p className="text-gray-700 mb-4 leading-relaxed">
            Services may involve exchanges, custodians, and liquidity providers.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Platform outages or failures</li>
            <li>Regulatory actions</li>
            <li>Third-party system losses</li>
          </ul>

          {/* 8 */}
          <SectionTitle title="8. Compliance & Regulations" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Clients must comply with AML/KYC, tax laws, and jurisdictional regulations. 
            We may decline services where required.
          </p>

          {/* 9 */}
          <SectionTitle title="9. Confidentiality" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            All engagements are handled with strict confidentiality unless disclosure is required by law.
          </p>

          {/* 10 */}
          <SectionTitle title="10. Limitation of Liability" />
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Financial losses</li>
            <li>Loss of digital assets</li>
            <li>Business interruption</li>
            <li>Cybersecurity incidents</li>
          </ul>

          {/* 11 */}
          <SectionTitle title="11. Service Availability" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Services may be affected by technical or market conditions. Continuous availability is not guaranteed.
          </p>

          {/* 12 */}
          <SectionTitle title="12. Termination" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Services may be suspended or terminated due to breaches, compliance issues, or legal requirements.
          </p>

          {/* 13 */}
          <SectionTitle title="13. Governing Law" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            These Terms are governed by applicable laws of the relevant jurisdiction.
          </p>

          {/* 14 */}
          <SectionTitle title="14. Sanctions & Restrictions" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Services are not available to sanctioned or restricted jurisdictions or prohibited activities.
          </p>

          {/* 15 */}
          <SectionTitle title="15. Cybersecurity Risks" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Risks include phishing, malware, and unauthorized access. Clients must maintain secure environments.
          </p>

          {/* 16 */}
          <SectionTitle title="16. Custody & Asset Control" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Clients retain full control of wallets and private keys. We do not assume custodial responsibility.
          </p>

          {/* 17 */}
          <SectionTitle title="17. Non-Custodial Framework" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Services operate under a non-custodial model unless otherwise agreed in writing.
          </p>

          {/* 18 */}
          <SectionTitle title="18. No Guarantee of Results" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            No guarantees are made regarding profits, execution outcomes, or recovery success.
          </p>

          {/* 19 */}
          <SectionTitle title="19. Asset Recovery Limitations" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Recovery depends on technical feasibility and blockchain constraints. Success is not guaranteed.
          </p>

          {/* 20 */}
          <SectionTitle title="20. Fees & Payments" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Fees vary based on scope, complexity, and transaction size. Non-payment may result in suspension.
          </p>

          {/* 21 */}
          <SectionTitle title="21. Pricing Variability" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Pricing may fluctuate due to market conditions, liquidity, and network fees.
          </p>

          {/* 22 */}
          <SectionTitle title="22. Intellectual Property" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            All systems and materials remain the property of Secure Ledger Solutions.
          </p>

          {/* 23 */}
          <SectionTitle title="23. Prohibited Use" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            Services must not be used for illegal or unauthorized activities.
          </p>

          {/* 24 */}
          <SectionTitle title="24. Amendments" />
          <p className="text-gray-700 mb-10 leading-relaxed">
            These Terms may be updated periodically. Continued use implies acceptance.
          </p>

          {/* Contact */}
          <SectionTitle title="Contact Information" />
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Secure Ledger Solutions</span> <br />
            Email:{" "}
            <a
              href="mailto:secureledgersolutions@gmail.com"
              className="text-blue-600 hover:underline"
            >
              secureledgersolutions@gmail.com
            </a>
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
      {title}
    </h2>
  );
}