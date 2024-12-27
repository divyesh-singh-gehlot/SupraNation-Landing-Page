import React from 'react'
import car1 from '../assets/supra-mk-I.avif'
import car2 from '../assets/supra-mk-II.avif'
import car3 from '../assets/supra-mk-III.avif'
import car4 from '../assets/supra-mk-IV.avif'
import car5 from '../assets/supra-mk-V.webp'


const Cars = () => {
  return (
    <div>
        <h1 className='text-2xl font-mono mb-4 text-center mt-10 md:text-5xl font-bold md:mt-16 md:mb-16'>Cars</h1>
        <div className='flex flex-col w-5/6 justify-self-center gap-10 md:flex-row md:gap-5 md:justify-evenly'>
      <div className='w-fit h-full bg-[rgba(30,30,30,1)] hover:bg-[rgba(0,0,0,1)] shadow-2xl hover:shadow-white'>
        <img src={car1} alt="Supra MK-I" className='object-cover md:w-96 md:h-60 md:p-5'/>
        <h1 className='text-center font-mono text-xl my-3 md:text-3xl md:mt-5 md:pb-10'>Supra MK-I</h1>
      </div>
      <div className='w-fit h-full bg-[rgba(30,30,30,1)] hover:bg-[rgba(0,0,0,1)] shadow-2xl hover:shadow-white'>
        <img src={car2} alt="Supra MK-II" className='object-cover md:w-96 md:h-60 md:p-5'/>
        <h1 className='text-center font-mono text-xl my-3 md:text-3xl md:mt-5 md:pb-10'>Supra MK-II</h1>
      </div>
      <div className='w-fit h-full bg-[rgba(30,30,30,1)] hover:bg-[rgba(0,0,0,1)] shadow-2xl hover:shadow-white'>
        <img src={car3} alt="Supra MK-III" className='object-cover md:w-96 md:h-60 md:p-5'/>
        <h1 className='text-center font-mono text-xl my-3 md:text-3xl md:mt-5 md:pb-10'>Supra MK-III</h1>
      </div>
      </div>
      <div className='mt-10 flex flex-col w-5/6 justify-self-center gap-10 md:flex-row md:gap-28 md:mt-16 md:justify-center'>
      <div className='w-fit h-full bg-[rgba(30,30,30,1)] hover:bg-[rgba(0,0,0,1)] shadow-2xl hover:shadow-white'>
        <img src={car4} alt="Supra MK-IV" className='object-cover md:w-96 md:h-60 md:p-5'/>
        <h1 className='text-center font-mono text-xl my-3 md:text-3xl md:mt-5 md:pb-10'>Supra MK-IV</h1>
      </div>
      <div className='w-fit h-full bg-[rgba(30,30,30,1)] hover:bg-[rgba(0,0,0,1)] shadow-2xl hover:shadow-white'>
        <img src={car5} alt="Supra MK-V" className='object-cover md:w-96 md:h-60 md:p-5'/>
        <h1 className='text-center font-mono text-xl my-3 md:text-3xl md:mt-5 md:pb-10'>Supra MK-V</h1>
      </div>
    </div>
    </div>
  )
}

export default Cars
