import React from "react";
import SEO from "../components/SEO";

import Header from "../Home/header";
import Footer from "../Home/Footer";
import Dashboard from "./Dashboard";
import Price from "../Home/Price";
import Aboutus from "./About";
import StructuredMovement from "./StructuredMovement";
import CoreSystemDesign from "./CoreSystemDesign";
import WorkProcess from "../Security Governance/WorkProcess";
import RiskManagement from "./RiskComparison";
import GovernanceCTA from "./GovernanceCTA";

export default function Index() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Transaction Systems",
    "description": "Our transaction systems provide seamless integration for high-volume crypto transactions, offering institutional liquidity management, OTC block trading, smart order routing, and fiat-to-crypto settlement infrastructure.",
    "url": "https://secureledgerssolutions.com/transaction-systems",
    "serviceType": "Crypto Transaction Systems",
    "provider": {
      "@type": "Organization",
      "name": "Secure Ledger Solutions",
      "url": "https://secureledgerssolutions.com/",
      "logo": "https://secureledgerssolutions.com/favicon_black.png",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61588264681373",
        "https://www.linkedin.com/company/secureledgerssolutions/",
        "https://www.instagram.com/secure_ledger_solutions/"
      ]
    },
    "areaServed": "Global"
  };

  return (
    <>
      <SEO
        title="Crypto Transaction Systems & OTC Execution - Secure Ledger Solutions"
        description="Our transaction systems provide seamless integration for high-volume crypto transactions, offering institutional liquidity management, OTC block trading, smart order routing, and fiat-to-crypto settlement infrastructure."
        url="https://secureledgerssolutions.com/transaction-systems"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />

      <Header />

      <main>
        <Dashboard />
        <Aboutus />
        <StructuredMovement />
        <CoreSystemDesign />
        <WorkProcess />
        <RiskManagement />
        <GovernanceCTA />
        <Price />
      </main>

      <Footer />
    </>
  );
}