import React from 'react'
import Dashboard from "./Dashboard"
import Price from "./Price"
import Header from "../Home/header"
import Footer from "../Home/Footer"
import PositioningSection from "./PositioningSection"
import CoreValues from "./CoreValues"
import HighTouchExperience from "./HighTouchExperience"
import ProofMetrics from './ProofMetrics'
import ConsultationPoints from './Consultation'
import ExperienceFlow from './ExperienceFlow'
import TrustSection from './TrustSection'
import FinalCTA from './FinalCTA'

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <PositioningSection/>
    <CoreValues/>
    <HighTouchExperience/>
    <ProofMetrics/>
    <ConsultationPoints/>
    <ExperienceFlow/>
    <TrustSection/>
    <FinalCTA/>
     <Price/>
    <Footer/>
    </>
  )
}
