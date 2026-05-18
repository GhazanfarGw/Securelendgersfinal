import React from "react";
import SEO from "../components/SEO";

import Dashboard from "./Dashboard";
import Price from "../Home/Price";
import PositioningSection from "./PositioningSection";
import HighTouchExperience from "./HighTouchExperience";
import Challenge from "./Challenge";
import PlatformAssessment from "./Platfram";
import StructureNotMarketing from "./StructureNotMarketing";
import WorkProcess from "./WorkProcess";
import WhyThisMatters from "./WhyThisMatters";
import Header from "../Home/header";
import Footer from "../Home/Footer";
import GovernanceCTA from "./GovernanceCTA";

export default function Index() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custody Platform",
    "description": "Our custody platform offers secure and compliant storage solutions for digital assets, providing institutional-grade security, regulatory compliance, and seamless integration with trading and settlement systems.",
    "url": "https://secureledgerssolutions.com/custody-platform",
    "serviceType": "Crypto Custody",
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
        title="Crypto Custody Platform & OTC Execution - Secure Ledger Solutions"
        description="Our custody platform offers secure and compliant storage solutions for digital assets, providing institutional-grade security, regulatory compliance, and seamless integration with trading and settlement systems."
        url="https://secureledgerssolutions.com/custody-platform"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />

      <Header />

      <main>
        <Dashboard />
        <PositioningSection />
        <HighTouchExperience />
        <Challenge />
        <PlatformAssessment />
        <StructureNotMarketing />
        <WorkProcess/>
        <WhyThisMatters />
        <Price />
        <GovernanceCTA />
      </main>

      <Footer />
    </>
  );
}