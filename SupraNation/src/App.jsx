import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navigation from './Sections/Navigation'
import Hero from './Sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black text-white'>
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
          I am About section
        </div>
      </section>
      <section className='h-fit w-full'>
        <div>
          I am Cars section
        </div>
      </section>
      <section className='h-fit w-full'>
        <div>
          I am Parts section
        </div>
      </section>
      <section className='h-fit w-full'>
        <div>
          I am Blog section
        </div>
      </section>
      <section className='h-fit w-full'>
        <div>
          I am Footer section
        </div>
      </section>
    </main>
  )
}

export default App
