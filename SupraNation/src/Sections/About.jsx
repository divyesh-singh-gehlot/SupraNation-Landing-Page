import React from 'react'
import aboutImage from '../assets/about-image.jpg'

const About = () => {
  return (
    <div>
      <h1 className='text-2xl font-mono mb-4 text-center mt-8 md:text-5xl font-bold md:mt-5 md:mb-16'>About</h1>
      <div className='md:grid md:grid-cols-2 md:justify-evenly md:gap-10'>
      <div className='flex justify-center'>
        <img src={aboutImage} alt="about-image" className='w-5/6 md:h-96 object-cover ' />
      </div>
      <div className='text-sm font-mono flex flex-col justify-self-center mt-3 w-5/6 md:text-2xl md:w-full'>
        <p className='mt-3 md:mb-5'>SupraFever is a hub for Toyota Supra enthusiasts worldwide. Whether you're an owner, an admirer, or a future driver, we’re here to celebrate the Supra’s legacy and connect fans across the globe.</p>
        <ul>
          <li className='mt-3 md:mb-5'>Our Mission: To fuel the Supra community with information, upgrades, and inspiration.</li>
          <li className='mt-3 mb-3'>Join Us: Be part of the growing Supra family.</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default About
