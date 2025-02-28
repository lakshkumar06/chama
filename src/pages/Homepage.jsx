import React from 'react'
import Hero from '../components/HeroHomepage'
import HowItWorksHomepage from '../components/HowItWorksHomepage'
import WhyWeb from '../components/WhyWeb'
import SocialImpact from '../components/SocialImpact'
import Join from '../components/Join'
import Footer from '../components/Footer'
import Header from '../components/Header'
const Homepage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <HowItWorksHomepage/>
      <Join/>

      <SocialImpact/>
      <Footer/>
    </div>
  )
}

export default Homepage
