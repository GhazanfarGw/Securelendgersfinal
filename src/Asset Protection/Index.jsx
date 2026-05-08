import React from 'react';
import SEO from "../components/SEO";
import Dashboard from "./Dashboard"
import Price from "./Price"
import Challenge from "./Challenge"
import Process from "./Process"
import Benefits from "./Benefits"
import Header from "../Home/header"
import Footer from "../Home/Footer"
import SecurityArchitecture from "./SecurityArchitecture"
import RiskAssessment from "./RiskAssessment"
import AbstractHero from "./AbstractHero"

export default function Index() {

  const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Asset Protection",
  "description": "Institutional digital asset protection with blockchain tracing, forensic analysis, recovery feasibility & exchange coordination for high-value cases.",
  "url": "https://secureledgerssolutions.com/asset-protection",
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
  "areaServed": "Global",
  "serviceType": "Digital Asset Protection"
};

  return (
    <>
      <SEO
        title="Digital Asset Protection & Blockchain Asset Tracing - Secure Ledger Solutions"
        description="Institutional digital asset protection with blockchain tracing, forensic analysis, recovery feasibility & exchange coordination for high-value cases."
        url="https://secureledgerssolutions.com/asset-protection"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />
      <Header/>
      <main>
        <Dashboard/>
        <Price/>
        <Challenge/>
        <SecurityArchitecture/>
        <Benefits/>
        <AbstractHero/>
        <Process/>
        <RiskAssessment/>
      </main>
      <Footer/>
    </>
  )
}
