import React from 'react'
import { FaLinkedinIn} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col place-self-center'>
        <h1 className='text-2xl font-mono'>Social Media:</h1>
        <div>
            <div className='flex place-self-center gap-10 my-5'>
                <a href="https://www.linkedin.com/in/divyesh-singh-gehlot-792055295/"><FaLinkedinIn color='white' size={25}/></a>
                <a href="https://github.com/divyesh-singh-gehlot"><FiGithub color='white' size={25}/></a>
            </div>
        </div>
      </div>
      <div className='flex gap-2 justify-center items-center font-mono'>
      <p className='text-sm md:text-lg'>Built by <a href="https://www.linkedin.com/in/divyesh-singh-gehlot-792055295/"><span className='font-extrabold underline'>Divyesh Singh Gehlot</span> </a> with</p>
      <IoIosHeart color='red' size={18}/>
      </div>
    </div>
  )
}

export default Footer
