import React from "react";
import SEO from "../components/SEO";

import Dashboard from "./Dashboard";
import Price from "./Price";
import ProblemAccordion from "./ProblemAccordion";
import MarketReality from "./MarketReality";
import Structural from "./Structural";
import Header from "../Home/header";
import Footer from "../Home/Footer";
import SolutionSection from "./SolutionSection";
import HowItWorks from "./HowItWorks";
import BenefitsSection from "./BenefitsSection";
import SecurityRiskSection from "./SecurityRiskSection";
import FinalCTA from "./FinalCTA";

export default function Index() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Liquidity Management",
    "description": "Liquidity management solutions for secure crypto transactions, institutional asset handling, and optimized capital flow.",
    "url": "https://secureledgerssolutions.com/liquidity-management",
    "serviceType": "Crypto Liquidity Management",
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
        title="Liquidity Management | Secure Ledger Solutions"
        description="Learn about liquidity management solutions for secure crypto transactions and institutional asset handling."
        url="https://secureledgerssolutions.com/liquidity-management"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />

      <Header />

      <main>
        <Dashboard />
        <ProblemAccordion />
        <MarketReality />
        <Structural />
        <SolutionSection />
        <HowItWorks />
        <BenefitsSection />
        <SecurityRiskSection />
        <FinalCTA />
        <Price />
      </main>

      <Footer />
    </>
  );
}