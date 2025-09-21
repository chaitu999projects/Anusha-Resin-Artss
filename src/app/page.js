import React from 'react'
import HeroPage from './Components/Home/HomePage'
import Logos from './Components/Logos/Logos'
import ArtsAbout from './Components/Arts/ArtsAbout'
import Services from './Components/Sevices/Services'
import NewArrivals from './Components/NewArraivls/NewArraivls'
import Testimonials from './Components/Tesimonials/Testimonials'
import Catagories from './Components/Catagories/Catagories';

const Home = () => {
  return (
    <>
      <HeroPage />
      <Logos />
      <Catagories />
      <ArtsAbout />
      <Services />
      <NewArrivals />
      <Testimonials />
    </>
  )
}

export default Home