import React from "react";
import SEO from "../components/SEO";
import Dashboard from './Dashboard'
import Nav from '../Home/header'
import Footer from '../Home/Footer'


export default function Index() {
  return (
    <>
      <SEO
        title="Careers - Secure Ledger Solutions"
        description="Join our team at Secure Ledger Solutions and help shape the future of crypto security."
        url="https://secureledgerssolutions.com/careers"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Secure Ledger Solutions",
          "url": "https://secureledgerssolutions.com/careers",
          "logo": "https://secureledgerssolutions.com/favicon_black.png",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61588264681373",
            "https://www.linkedin.com/company/secureledgerssolutions/",
            "https://www.instagram.com/secure_ledger_solutions/"
          ]
      }}  
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
}