import React from "react";
import SEO from "../components/SEO";

import Dashboard from "./Dashboard";
import Footer from "../Home/Footer";
import Header from "../Home/header";

function Index() {

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Insights on crypto liquidity management, digital asset protection, blockchain security, OTC trading, compliance & institutional crypto strategies.",
      "url": "https://secureledgerssolutions.com/blog"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Secure Ledger Solutions",
      "url": "https://secureledgerssolutions.com/",
      "logo": "https://secureledgerssolutions.com/favicon_black.png",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61588264681373",
        "https://www.linkedin.com/company/secureledgerssolutions/",
        "https://www.instagram.com/secure_ledger_solutions/"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Crypto Insights & Digital Asset Security Blog - Secure Ledger Solutions"
        description="Insights on crypto liquidity management, digital asset protection, blockchain security, OTC trading, compliance & institutional crypto strategies."
        url="https://secureledgerssolutions.com/blog"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />

      <Header />

      <main>
        <Dashboard />
      </main>

      <Footer />
    </>
  );
}

export default Index;
