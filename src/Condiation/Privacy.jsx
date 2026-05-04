import React from 'react';
import Header from '../Home/header';
import Footer from '../Home/Footer';


export default function PrivacyPolicy() {
  return (
    <>
    <Header/>
    <div className="bg-gray-50 min-h-screen py-14 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8">Effective Date: 01 january 2026</p>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Secure Ledgers Solutions</span>. 
          We provide blockchain-based payment integration solutions for businesses (B2B) 
          and cryptocurrency transaction support and recovery services for individuals (B2C).
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          We are committed to protecting your privacy and ensuring transparency 
          regarding how we collect, use, store, and protect your information. 
          By using our services, you agree to this Privacy Policy.
        </p>

        {/* 1. Information We Collect */}
        <SectionTitle title="1. Information We Collect" />
        <p className="text-gray-700 mb-4">
          We collect only information necessary to provide secure, compliant, and efficient services.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li><strong>Personal Information:</strong> Name, email, phone, wallet addresses, transaction IDs, government ID (for compliance/KYC)</li>
          <li><strong>Business Information (B2B):</strong> Company registration, payment infrastructure, monthly transaction volume, compliance documents</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device info, cookies, analytics</li>
        </ul>

        {/* 2. How We Use Information */}
        <SectionTitle title="2. How We Use Information" />
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Provide crypto payment integration and recovery services</li>
          <li>Investigate and resolve failed transactions</li>
          <li>Enhance security, prevent fraud, and improve performance</li>
          <li>Comply with legal and regulatory obligations</li>
          <li>Communicate service updates and respond to inquiries</li>
        </ul>

        {/* 3. Security & Commitment */}
        <SectionTitle title="3. Security & What We Never Collect" />
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 mb-3 font-medium">
            Protecting your digital assets is our highest priority.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>We never request private keys or wallet seed phrases</li>
            <li>We never require direct access to wallets</li>
            <li>We never collect passwords or sensitive credentials</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            Clients maintain full custody and control of their assets at all times.
          </p>
        </div>

        {/* 4. Blockchain Transparency */}
        <SectionTitle title="4. Blockchain & Transparency" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          Blockchain transactions are publicly visible, immutable, and permanently recorded. 
          Secure Ledgers Solutions does not control blockchain networks; any transaction data 
          published on a blockchain is publicly accessible.
        </p>

        {/* 5. Cookies & Tracking */}
        <SectionTitle title="5. Cookies & Tracking Technologies" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          We use cookies and analytics tools to improve functionality, enhance security, 
          and optimize user experience. You may manage cookies through your browser settings.
        </p>

        {/* 6. Data Sharing */}
        <SectionTitle title="6. Data Sharing" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          Your information is shared only when necessary with trusted partners for 
          compliance, legal, or operational purposes. All third parties are required 
          to maintain confidentiality and security standards.
        </p>

        {/* 7. Data Security */}
        <SectionTitle title="7. Data Security" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          We use end-to-end encryption, secure servers, limited access, regular security audits, 
          and cold-storage practices where applicable. No system can be 100% secure.
        </p>

        {/* 8. Data Retention */}
        <SectionTitle title="8. Data Retention" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          We retain information only as long as necessary for service delivery, legal compliance, 
          or dispute resolution, after which data is securely deleted or anonymized.
        </p>

        {/* 9. Your Rights */}
        <SectionTitle title="9. Your Rights" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          Depending on your jurisdiction, you may access, correct, delete, or restrict processing of your data, 
          or withdraw consent. Contact us at: <br />
          📧 support@secureledgerssolutions.com
        </p>

        {/* 10. International Transfers */}
        <SectionTitle title="10. International Data Transfers" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          As a blockchain-focused provider, your data may be processed across multiple jurisdictions 
          with appropriate safeguards in place.
        </p>

        {/* 11. Third-Party Links */}
        <SectionTitle title="11. Third-Party Links" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          Our website may contain links to third-party sites. We are not responsible for their privacy practices.
        </p>

        {/* 12. Compliance & Legal */}
        <SectionTitle title="12. Compliance & Legal Obligations" />
        <p className="text-gray-700 mb-8 leading-relaxed">
          We may process or disclose data to comply with AML/KYC, prevent fraud, or respond to lawful government requests.
        </p>

        {/* 13. Children’s Privacy */}
        <SectionTitle title="13. Children’s Privacy" />
        <p className="text-gray-700 mb-10 leading-relaxed">
          Our services are not intended for individuals under 18. We do not knowingly collect data from minors.
        </p>

        {/* Contact */}
        <SectionTitle title="Contact Information" />
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">Secure Ledgers Solutions</span> <br />
          Email: support@secureledgerssolutions.com <br />
          Website: secureledgerssolutions.com
        </p>

      </div>
    </div>
    <Footer/>
    </>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
      {title}
    </h2>
  );
}