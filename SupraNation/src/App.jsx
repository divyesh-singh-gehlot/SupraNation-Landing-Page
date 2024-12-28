import { useState } from 'react'
import supraLogo from '/supra.svg'
import Navigation from './Sections/Navigation'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Cars from './Sections/Cars'
import Blogs from './Sections/Blogs'
import Footer from './Sections/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-background text-font'>
      <section className='h-fit w-full fixed top-0 z-50'>
        <nav><Navigation /></nav>
      </section>
      <section id='hero' className='h-fit w-full relative top-0 z-10'>
        <div>
          <Hero />
        </div>
      </section>
      <section id='about' className='h-fit w-full'>
        <div>
          <About />
        </div>
      </section>
      <section id='cars' className='h-fit w-full'>
        <div>
          <Cars />
        </div>
      </section>
      <section id='blogs' className='h-fit w-full'>
        <div>
          <Blogs />
        </div>
      </section>
      <section className='md:h-fit w-full bg-[rgba(20,20,20,1)] p-10'>
        <div>
          <Footer />
        </div>
      </section>
    </main>
  )
}

export default App
