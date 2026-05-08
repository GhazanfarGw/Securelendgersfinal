import React from 'react'
import SEO from "../components/SEO";
import Dashboard from "./Dashboard"
import Price from "./Price"
import Header from "../Home/header"
import Footer from "../Home/Footer"
import PositioningSection from "./PositioningSection"
import CoreValues from "./CoreValues"
import HighTouchExperience from "./HighTouchExperience"
import ProofMetrics from './ProofMetrics'
import ConsultationPoints from './Consultation'
import ExperienceFlow from './ExperienceFlow'
import TrustSection from './TrustSection'
import FinalCTA from './FinalCTA'

export default function Index() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Client Experience",
    "description": "Institutional support for high-value crypto with private consultations, confidential execution, dedicated advisory & risk-controlled workflows.",
    "url": "https://secureledgerssolutions.com/client-experience",
    "serviceType": "Client Experience Optimization",
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
    "audience": {
      "@type": "Audience",
      "audienceType": "Businesses and Institutions"
    }
  };

  return (
    <>
      <SEO
        title="Client Experience for High-Value Crypto Transactions - Secure Ledger Solutions"
        description="Institutional support for high-value crypto with private consultations, confidential execution, dedicated advisory & risk-controlled workflows."
        url="https://secureledgerssolutions.com/client-experience"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />
      <Header/>
      <main>
        <Dashboard/>
        <PositioningSection/>
        <CoreValues/>
        <HighTouchExperience/>
        <ProofMetrics/>
        <ConsultationPoints/>
        <ExperienceFlow/>
        <TrustSection/>
        <FinalCTA/>
        <Price/>
      </main>
    <Footer/>
    </>
  )
}
