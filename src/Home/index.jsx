import React from 'react';
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
        <Discover/>
        <Footer/>
        <Price/>
        

    </>
  )
}

export default index
