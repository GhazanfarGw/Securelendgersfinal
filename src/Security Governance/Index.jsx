import React from "react";
import SEO from "../components/SEO";

import Header from "../Home/header";
import Footer from "../Home/Footer";
import Dashboard from "./Dashboard";
import Price from "../Home/Price";
import Aboutus from "./About";
import Commongap from "./Common";
import Structured from "./Structured";
import WorkProcess from "./WorkProcess";
import SystemOperatesItself from "./SystemOperatesItself";
import GovernanceCTA from "./GovernanceCTA";

export default function Index() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security Governance",
    "description": "Our security governance framework ensures robust protection for digital assets through comprehensive risk management, compliance oversight, and proactive threat mitigation strategies.",
    "url": "https://secureledgerssolutions.com/security-governance",
    "serviceType": "Crypto Security Governance",
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
        title="Crypto Security Governance & OTC Execution - Secure Ledger Solutions"
        description="Our security governance framework ensures robust protection for digital assets through comprehensive risk management, compliance oversight, and proactive threat mitigation strategies."
        url="https://secureledgerssolutions.com/security-governance"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />

      <Header />

      <main>
        <Dashboard />
        <Aboutus />
        <Commongap />
        <Structured />
        <WorkProcess/>
        <SystemOperatesItself />
        <GovernanceCTA />
        <Price />
      </main>

      <Footer />
    </>
  );
}