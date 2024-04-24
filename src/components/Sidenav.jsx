import React, { useState } from 'react';
import {  AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr'
import { BsEnvelopeAt } from "react-icons/bs";
import { MdDocumentScanner } from "react-icons/md";
import { FaProjectDiagram, FaRProject } from "react-icons/fa";
const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log("hey i was clicked")
    }
    return (
        <div >
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 col z-40 md:hidden' />
            {
                nav ?(
                    <div className='fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20'>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-900 '>
                            <AiOutlineHome size={20} />
                            <span className='pl-4 '>Home</span>
                        </a>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-900 '>
                            <GrProjects size={20} />
                            <span className='pl-4 '>Work</span>
                        </a>
                        <a href='https://github.com/MuraKon2906' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-900 '>
                            <FaProjectDiagram size={20} />
                            <span className='pl-4 '>Projects</span>
                        </a>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-900 '>
                            <MdDocumentScanner size={20} />
                            <span className='pl-4 '>Resume</span>
                        </a>
                        <a href='https://www.linkedin.com/in/shaan-farooqui-274062220/' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-900 '>
                            <BsEnvelopeAt size={20} />
                            <span className='pl-4 '>Contact</span>
                        </a>

                    </div>
                )
                :
                (
                    ""
                )
            }

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150' >
                        <AiOutlineHome size={20} />
                    </a>
                    <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150' >
                        <GrProjects size={20} />
                    </a>
                    <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150' >
                        <FaProjectDiagram size={20} />
                    </a>
                    <a href='#resume' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150' >
                        <MdDocumentScanner size={20} />
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150' >
                        <BsEnvelopeAt size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidenav;