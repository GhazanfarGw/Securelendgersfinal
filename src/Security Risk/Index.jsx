import React from 'react';
import SEO from "../components/SEO";
import Dashboard from "./Dashboard"
import Price from "./Price"
import Challenge from "./Challenge"
import Infrastructure from "./Infrastructure"
import Process from "./Process"
import Benefits from "./Benefits"
import Header from "../Home/header"
import Footer from "../Home/Footer"
import SecurityArchitecture from "./SecurityArchitecture"
import RiskAssessment from "./RiskAssessment"

export default function Index() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Security Risk Management",
  "description": "Protect digital assets with institutional-grade security and risk control, including threat detection, risk assessment, and mitigation strategies.",
  "url": "https://secureledgerssolutions.com/security-risk",
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
      title="Security Risk Management - Secure Ledger Solutions"
      description="Protect Digital Assets with Institutional-Grade Security & Risk Control. Our comprehensive security risk management services safeguard your digital assets with advanced threat detection, risk assessment, and mitigation strategies."
      url="https://secureledgerssolutions.com/security-risk"
      image="https://secureledgerssolutions.com/og-image.jpg"
      schema={schema}
    />
    <Header/>
    <main>
      <Dashboard/>
      <Challenge/>
      <Infrastructure/>
      <Process/>
      <Benefits/>
      <SecurityArchitecture/>
      <RiskAssessment/>
      <Price/>
    </main>
    <Footer/>
    </>
  )
}
