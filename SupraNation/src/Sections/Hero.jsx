import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <>
      <div>
        <div>
          <video src={videoBg} filter autoPlay loop muted className='h-96 object-cover w-full md:w-full md:h-full md:object-cover md:brightness-50 lg:object-cover lg:brightness-50'></video>
          <div className='absolute top-48 left-5 md:absolute md:bottom-44 md:left-10 lg:absolute lg:top-44 lg:left-10'>
            <div className='mb-2 text-2xl w-full font-mono md:mb-10 md:text-6xl md:w-1/3 md:font-mono lg:mb-10 lg:text-6xl lg:w-1/3 lg:font-mono'><h1>Welcome to <span className='md:text-8xl font-extrabold'>Supra<span className='text-red-700'>Nation</span></span></h1></div>
            <div className='mb-2 text-sm w-full font-mono md:mb-10 md:text-2xl md:w-1/3 md:font-mono lg:mb-10 lg:text-2xl lg:w-1/3 lg:font-mono'><p>Experience the thrill of speed and precision with the legendary Toyota Supra. At SupraFever, explore, discover, and fuel your passion for this iconic masterpiece.</p></div>
            <AnchorLink href='#about'>
              <div><button className='bg-red-700 py-1 px-2 text-sm font-mono rounded-lg md:bg-red-700 md:py-2 md:px-4 md:text-3xl md:font-mono md:rounded-lg lg:bg-red-700 lg:py-2 lg:px-4 lg:text-3xl lg:font-mono lg:rounded-lg'>Explore Now</button></div>
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
