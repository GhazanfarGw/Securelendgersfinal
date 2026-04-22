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

export default function Index() {
  return (
    <>
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
