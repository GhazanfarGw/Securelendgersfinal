import React from 'react';
import SEO from "../components/SEO";

import Dashboard from './Dashboard'
import Header from './header'
import Footer from './Footer';
import Price from './Price';
import Exchange from './Exchanges'
import Choose from './Choose';
import Services from './OurServices'
import Trustbar from './trustbar';
import Ourclient from './Ourclients';
import Institutional from './Institutional';
import ComparisonSection from './ComparisonSection';
import Launched from './Launched';
import Discover from './Discover';

function Index() {

  const schema = {
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
  };

  return (
    <>
      <SEO
        title="Secure Ledger Solutions - Crypto to Fiat Conversion"
        description="Secure Ledger Solutions allows you to seamlessly convert cryptocurrency into cash with a trusted and secure process."
        url="https://secureledgerssolutions.com/"
        schema={schema}
      />
      <Header/>
      <main>
        <Dashboard/>
        <Exchange/>
        <Launched/>
        <ComparisonSection/>  
        <Trustbar/>
        <Ourclient/>
        <Institutional/>
        <Choose/>
        <Services/>
        <Discover/>
        <Price/>
      </main>
      <Footer/>
    </>
  )
}

export default Index;