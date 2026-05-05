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
    "@type": "Organization",
    "name": "Secure Ledger Solutions",
    "url": "https://secureledgerssolutions.com/asset-protection",
    "logo": "https://secureledgerssolutions.com/favicon_black.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61588264681373",
      "https://www.linkedin.com/company/secureledgerssolutions/",
      "https://www.instagram.com/secure_ledger_solutions/"
    ]
  };

  return (
    <>
      <SEO
        title="Asset Protection - Secure Ledger Solutions"
        description="Structured blockchain analysis, asset tracing, and recovery feasibility assessment for lost, inaccessible, or at-risk digital assets across wallets, exchanges, and on-chain environments."
        url="https://secureledgerssolutions.com/asset-protection"
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
