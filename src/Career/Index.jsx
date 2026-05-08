import React from "react";
import SEO from "../components/SEO";
import Dashboard from './Dashboard'
import Nav from '../Home/header'
import Footer from '../Home/Footer'


export default function Index() {
    const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Careers - Secure Ledger Solutions",
    "description": "Join our team at Secure Ledger Solutions and help shape the future of crypto security.",
    "url": "https://secureledgerssolutions.com/careers",
    "mainEntity": {
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
        title="Careers at Secure Ledger Solutions - Crypto & Blockchain Team"
        description="Career opportunities at Secure Ledger Solutions in crypto liquidity management, digital asset security, blockchain infrastructure & institutional advisory."
        url="https://secureledgerssolutions.com/careers"
        image="https://secureledgerssolutions.com/og-image.jpg"
        schema={schema}
      />
      <Nav/>
      <main>
        <div className='md:pt-20 pt-20'>
          <Dashboard/>
        </div>
      </main>
      <Footer/>
    </>
  )
};
