import React, { useState } from 'react'
import Mobilemenu from './Mobilemenu'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../assets/logo.PNG'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const setMobileMenu = () => {
       setShowMobileMenu(!showMobileMenu)
    }
  return (
    <>
      <nav className='fixed flex w-full h-[80px] z-10 bg-black border-b border-b-gray-200 text-white'>
         <div className='flex justify-between items-center mx-auto w-[90%] h-full'>
            <a href='/'>
               <img  src={logo} className='w-14 rounded-full' alt='Logo'/>
            </a>
            <div className='flex'>
                <ul className='hidden md:flex space-x-4'>
                    <li className=''>
                    <Link  to="home" className="link" offset={50} smooth={true}  duration={500}>
                       Home
                    </Link>
                    </li>
                    <li>
                        <Link  to="skills" className="link" smooth={true}  duration={500}>
                       Skills
                    </Link>
                    </li>
                    <li>
                        <Link  to="projects" className="link" smooth={true}  duration={500}>
                       My work
                    </Link>
                    </li>
                    <li>
                        <Link  to="about" className="link" smooth={true}  duration={500}>
                       About
                    </Link>
                    </li>
                    <li >
                        <Link  to="contact" className='link bg-pink-500 hover:bg-pink-600' smooth={true}  duration={500}>
                       Contact
                    </Link>
                    </li>
                    <li >
                       <a href='#' className='link'>See resume</a>
                    </li>
                </ul>
                <button className='md:hidden' onClick= { setMobileMenu }>
                    {showMobileMenu ? <AiOutlineClose/> : <FaBars />}
                    
                    </button>
            </div>
            
         </div> 
      </nav>
        {showMobileMenu && <Mobilemenu setMobileMenu={setMobileMenu}/>}
      </>
  )
}

export default Navbar