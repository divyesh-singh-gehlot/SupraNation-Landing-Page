import React from 'react'
import blog_1 from '../assets/blog-1.png'
import blog_2 from '../assets/blog-2.jpg'
import blog_3 from '../assets/blog-3.jpg'
import blog_4 from '../assets/blog-4.jpg'
import blog_5 from '../assets/blog-5.jpg'
import blog_6 from '../assets/blog-6.jpg'

const Blogs = () => {
  return (
    <div>
        <h1 className='text-2xl font-mono text-center mt-20 md:text-5xl font-bold md:mt-16 md:mb-16'>Blogs</h1>
        <div className='grid justify-evenly place-self-center w-5/6 md:grid-cols-3 md:gap-10'>
      <div className='my-10'>
        <div className='my-3'><img className='h-56 w-full' src={blog_1} alt="blog-1" /></div>
        <div><p className='font-mono w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit.</p></div>
      </div>
      <div className='my-10'>
        <div className='my-3'><img className='h-56 w-full' src={blog_2} alt="blog-2" /></div>
        <div><p className='font-mono w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum porro consequuntur nam necessitatibus cumque.</p></div>
      </div>
      <div className='my-10'>
        <div className='my-3'><img className='h-56 w-full' src={blog_3} alt="blog-3" /></div>
        <div><p className='font-mono w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit.</p></div>
      </div>
      <div className='my-10'>
        <div className='my-3'><img className='h-56 w-full' src={blog_4} alt="blog-4" /></div>
        <div><p className='font-mono w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum porro consequuntur nam necessitatibus cumque.</p></div>
      </div>
      <div className='my-10'>
        <div className='my-3'><img className='h-56 w-full' src={blog_5} alt="blog-5" /></div>
        <div><p className='font-mono w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit.</p></div>
      </div>
      <div className='my-10'>
        <div className='my-3'><img className='h-56 w-full' src={blog_6} alt="blog-6" /></div>
        <div><p className='font-mono w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum porro consequuntur nam necessitatibus cumque.</p></div>
      </div>
    </div>
    </div>
    
  )
}

export default Blogs
