import React from 'react'
import { Link } from 'react-scroll'
const Mobilemenu = ({ setMobileMenu }) => {
  return (
    <div className='fixed transition duration-500 flex top-20 md:hidden bg-slate-800 border-b border-b-gray-200 text-white w-full border-t border-gray-400 z-20'>
         <ul className='flex flex-col w-full z-10 py-2'>
         <li className=''>
                    <Link onClick={setMobileMenu} to="home" className='flex justify-center hover:bg-slate-900 py-2 cursor-pointer' offset={50} smooth={true}  duration={500}>
                       Home
                    </Link>
                    </li>
                    <li>
                        <Link onClick={setMobileMenu}  to="skills" className='flex justify-center hover:bg-slate-900 py-2 cursor-pointer' smooth={true}  duration={500}>
                       Skills
                    </Link>
                    </li>
                    <li>
                        <Link onClick={setMobileMenu}  to="projects" className='flex justify-center hover:bg-slate-900 py-2 cursor-pointer' smooth={true}  duration={500}>
                       My work
                    </Link>
                    </li>
                    <li>
                        <Link onClick={setMobileMenu}  to="about" className='flex justify-center hover:bg-slate-900 py-2 cursor-pointer' smooth={true}  duration={500}>
                       About
                    </Link>
                    </li>
                    <li >
                        <Link onClick={setMobileMenu}  to="contact" className='flex justify-center hover:bg-slate-900 py-2 cursor-pointer' smooth={true}  duration={500}>
                       Contact
                    </Link>
                    </li>
                    <li >
                       <a href='#' className='flex justify-center hover:bg-slate-900 py-2 cursor-pointer'>See resume</a>
                    </li>
                </ul>
    </div>
  )
}

export default Mobilemenu