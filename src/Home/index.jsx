import React from 'react';
import Dashboard from './Dashboard'
import Header from './header'
import Footer from './Footer';
import Price from './Price';
import Subr from './Subr';
import Exchange from './Exchanges'
import Choose from './Choose';
import Services from './OurServices'
import Trustbar from './trustbar';
import Ourclient from './Ourclients';
import Institutional from './Institutional';
import FAQSection from './FAQSection';
import ComparisonSection from './ComparisonSection';
import Lunched from './Lunched';

function index() {
  return (
    <>
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
        <Subr/>
        <FAQSection/>
        <Footer/>
        <Price/>
        

    </>
  )
}

export default index