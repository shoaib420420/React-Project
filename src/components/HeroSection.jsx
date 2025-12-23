import React from 'react'
import HeroSection2 from './HeroSection2'
import HeroSection3 from './HeroSection3'
import HeroSection4 from './HeroSection4'
import Customers from './Customers'
import HeroSection5 from './HeroSection5'
import HeroSection1 from './HeroSection1'

const HeroSection = () => {
  return (
    <>
    <div>{<HeroSection1/>}</div>
    <div>{<HeroSection2/>}</div>
    <div>{<HeroSection3/>}</div>
    <div>{<HeroSection4/>}</div>
    <div>{<Customers/>}</div>
    <div>{<HeroSection5/>}</div>
    </>
  )
}

export default HeroSection