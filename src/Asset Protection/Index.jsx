import Dashboard from "./Dashboard"
import Price from "./Price"
import Challenge from "./Challenge"
import Process from "./Process"
import Benefits from "./Benefits"
import Header from "../Home/header"
import Footer from "../Home/Footer"
import SecurityArchitecture from "./SecurityArchitecture"
import RiskAssessment from "./RiskAssessment"
import AbstractHero from "./AbstractHero"

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Price/>
    <Challenge/>
    <SecurityArchitecture/>
    <Benefits/>
    <AbstractHero/>
    <Process/>
    <RiskAssessment/>
    <Footer/>
    </>
  )
}
