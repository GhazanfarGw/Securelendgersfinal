import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./Home/index";
import Contact from "./Home/Contact";
import Preloader from "./Home/Preload";
import Liquidity from "./Liquidity Management/Index"
import Security from "./Security Risk/Index"
import Career from "./Career/Index";
import Assets from "./Asset Protection/Index"
import Client from "./Client Experience/Index"
import PrivacyPolicy from "./Condiation/Privacy";
import TermsConditions from "./Condiation/Termscondiation";
import Blog from "./Blog/index";
import BlogPage from "./Blog Details/index";
import ScrollToTop from "./Home/ScrollToTop";

function App() {
    const [loading, setLoading] = useState(true);
  const location = useLocation(); // route change detect کرنے کے لیے

  useEffect(() => {
    // جب بھی route change ہو، loading true کریں
    setLoading(true);

    // simulate data fetching or preload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // loading duration adjust کریں

    return () => clearTimeout(timer); // cleanup
  }, [location.pathname]); // dependency: ہر بار route change پر trigger


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/blog" element={ <Blog/> } />
          <Route path="/:slug" element={<BlogPage />} />
          <Route path="/liquidity-management" element={ <Liquidity/> } />
          <Route path="/security-risk" element={ <Security/> } />
          <Route path="/asset-protection" element={ <Assets/> } />
          <Route path="/client-experience" element={ <Client/> } />
          <Route path="/privacy-policy" element={ <PrivacyPolicy/> } />
          <Route path="/terms-conditions" element={ <TermsConditions/> } />
          <Route path="/careers" element={ <Career/> } />
          <Route path="/contact-us" element={ <Contact/> } />
        </Routes>
        </>
      )}
    </>

  )
}

export default App
                  