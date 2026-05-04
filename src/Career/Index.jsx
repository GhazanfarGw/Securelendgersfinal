import React from 'react'
import Dashboard from './Dashboard'
import Nav from '../Home/header'
import Footer from '../Home/Footer'

export default function Index() {
  return (
    <>
        <Nav/>
        <div className='md:pt-20 pt-20'>
          <Dashboard/>
        </div>
        <Footer/>

    </>
    
  )
}