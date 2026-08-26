import React from 'react'
import Hero from '../Components/Home/Hero'
import HomeServices from '../Components/Home/HomeServices'
import StatsBar from '../Components/Home/StatsBar'
import ConsultationSection from '../Components/Home/ConsultationSection'
import HomeEquipment from '../Components/Home/HomeEquipment'

function Home() {
  return (
    <div>
      <Hero />
      <HomeServices />
      <HomeEquipment />
      <StatsBar />
      <ConsultationSection />
    </div>
  )
}

export default Home
