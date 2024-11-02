import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSelller from '../components/BestSelller'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSelller/>
    </div>
  )
}

export default Home