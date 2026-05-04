import Dashboard from "./Dashboard"
import Price from "./Price"
import ProblemAccordion from "./ProblemAccordion"
import MarketReality from "./MarketReality"
import Structural from "./Structural"
import Header from "../Home/header"
import Footer from "../Home/Footer"
import SolutionSection from "./SolutionSection"
import HowItWorks from "./HowItWorks"
import BenefitsSection from "./BenefitsSection"
import SecurityRiskSection from "./SecurityRiskSection"
import FinalCTA from "./FinalCTA"
import { Helmet } from "react-helmet-async";

export default function Index() {
  return (
    <>
    <Helmet>
      <title>Liquidity Management | Secure Ledger Solutions</title>
      <meta
        name="description"
        content="Learn about liquidity management solutions for secure crypto transactions and institutional asset handling."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secureledgerssolutions.com/liquidity-management" />
    </Helmet>

    <Header/>
    <Dashboard/>
    <ProblemAccordion/>
    <MarketReality/>
    <Structural/>
    <SolutionSection/>
    <HowItWorks/>
    <BenefitsSection/>
    <SecurityRiskSection/>
    <FinalCTA/>
    <Footer/>
    <Price/>
    </>
  )
}
