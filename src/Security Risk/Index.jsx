import Dashboard from "./Dashboard"
import Price from "./Price"
import Challenge from "./Challenge"
import Infrastructure from "./Infrastructure"
import Process from "./Process"
import Benefits from "./Benefits"
import Header from "../Home/header"
import Footer from "../Home/Footer"
import SecurityArchitecture from "./SecurityArchitecture"
import RiskAssessment from "./RiskAssessment"

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Challenge/>
    <Infrastructure/>
    <Process/>
    <Benefits/>
    <SecurityArchitecture/>
    <RiskAssessment/>
    <Footer/>
    <Price/>
    </>
  )
}
