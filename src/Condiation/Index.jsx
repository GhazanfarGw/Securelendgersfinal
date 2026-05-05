import React from "react";
import SEO from "../components/SEO";
import PrivacyPolicy from "./Privacy"
import Header from '../Home/header';
import Footer from '../Home/Footer';

export default function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Secure Ledger Solutions",
    "url": "https://secureledgerssolutions.com/privacy-policy",
    "description": "Learn how Secure Ledger Solutions collects, uses, and protects your personal information.",
    "publisher": {
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
  };

  return (
    <>
      <SEO
        title="Privacy Policy - Secure Ledger Solutions"
        description="Read our Privacy Policy to understand how we protect your data at Secure Ledger Solutions."
        url="https://secureledgerssolutions.com/privacy-policy"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />
      <Header/>
      <main>
        <PrivacyPolicy/>
      </main>
      <Footer/>
    </>
  )
}