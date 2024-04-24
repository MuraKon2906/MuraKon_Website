import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
        <img className=' w-full h-screen object-cover ' src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
    <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
    <div className='max-w-[700px] m-auto h-full flex flex-col justify-center  lg:items-start items-center'>
        <h2 className='flex sm:text-5xl font-bold text-4xl pt-4 text-gray-800'>
            
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am Shaan Farooqui',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I am MuraKon',
                1000,
                'I code , write and create ',
                1000,
            
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em',paddingLeft:'5px', display: 'inline-block' }}
              repeat={Infinity}
            />
        </h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
        <FaTwitter size={20} className='cursor-pointer'  />
        <FaInstagram size={20} className='cursor-pointer' />
        <FaLinkedin size={20} className='cursor-pointer' />
        <FaGithub  size={20} className='cursor-pointer'/>
    </div>
    </div>
        </div>   
    </div>
  )
}

export default Main