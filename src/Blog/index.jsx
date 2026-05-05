import React from "react";
import SEO from "../components/SEO";

import Dashboard from "./Dashboard";
import Footer from "../Home/Footer";
import Header from "../Home/header";


function index() {
    const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Secure Ledger Solutions",
    "url": "https://secureledgerssolutions.com/blog",
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
        title="Blog - Secure Ledger Solutions"
        description="Stay updated with the latest news and insights from Secure Ledger Solutions."
        url="https://secureledgerssolutions.com/blog"
        schema={schema}
      />
      <Header/>
      <main>
        <Dashboard/>
      </main>
      <Footer/>
    </>
  )
}

export default index