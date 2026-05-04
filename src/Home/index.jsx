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
import Lunched from './Lunched';
import Discover from './Discover';

function Index() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Secure Ledger Solutions",
    "url": "http://localhost:3000/",
    "logo": "http://localhost:3000/favicon_black.png",
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.linkedin.com/"
    ]
  };

  return (
    <>
      <SEO
        title="Secure Ledger Solutions | Crypto to Fiat Conversion"
        description="Securely convert cryptocurrency into fiat with institutional-grade liquidity, privacy, and security solutions."
        url="http://localhost:3000/"
        schema={schema}
      />

      <Header/>
      <Dashboard/>
      <Exchange/>
      <Lunched/>
      <ComparisonSection/>  
      <Trustbar/>
      <Ourclient/>
      <Institutional/>
      <Choose/>
      <Services/>
      <Discover/>
      <Footer/>
      <Price/>
    </>
  )
}

export default Index;