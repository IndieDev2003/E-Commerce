import React from 'react'
import { assets } from '../assets/assets'

const Home = () => {
  return (
      <div className='h-full md:h-[90%] w-full flex flex-col items-start gap-2 sm:justify-center text-start'>
          <h2 className=' text-2xl sm:text-7xl font-semibold'>Welcome To Admin Dashboard</h2>
          <p className='text-sm sm:text-xl text-gray-800'>Click on sidebar button's to Navigate to Pages</p>
      <img src={assets.arrow_icon} className='h-5 sm:h-10 text-black' alt="arrow-icon" />
    </div>
  )
}

export default Home