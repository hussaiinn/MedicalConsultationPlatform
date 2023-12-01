'use client'
import React from 'react'
import '@styles/aboutUs.css'
import NavBar from '@components/Nav'
import AuCon1 from './auCon1/auCon1'
import AuCon2 from './auCon2/auCon2'
import AuCon3 from './auCon3/AuCon3'
import AuCon4 from './auCon4/auCon4'
import Footer from '@components/footer'

export default function AboutUs(){
  return (
    <>
      <NavBar/>
      <AuCon1/>
      <AuCon2/>
      <AuCon3/>
      <AuCon4/>
      <Footer/>

      
    </>
    
    
    
  )
}

// export default AboutUs