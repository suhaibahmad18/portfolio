import React from 'react'
import ProfilePic from '../assets/suhaib0.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={ProfilePic} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Suhaib Ahmad</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
          <a href="https://www.linkedin.com/in/suhaib-ahmad-82b761286/" target="_blank" rel="noopener noreferrer">
            <button 
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                LinkedIn
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1d4eLzkK76zhN4m9RYM_5MCBzyd01qrS4/view" target="_blank" rel="noopener noreferrer">
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume
            </button>
          </a>
        </div>

    </div>
  )
}

export default Hero