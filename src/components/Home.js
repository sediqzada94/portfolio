import React from 'react'
import Typed from 'react-typed'
import profilePhoto from '../assets/profile2.png'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='flex flex-col-reverse md:flex-row pt-32 md:pt-20 px-8 md:px-32 text-white bg-slate-900 '>
      <div className='w-full md:w-2/3 flex flex-col space-y-3 my-[100px]  items-center'>
         <h5 className="text-red-400 text-left w-full">Hi, my name is </h5>
         <h1 className='text-3xl md:text-5xl font-bold w-full text-left'>Samiullah Sediqzada</h1>
                <Typed 
                  className='text-xl md:text-3xl font-bold w-full text-left'
                strings={[
                    'Full stack developer',
                    'TailwindCSS',
                    'React.js',
                    'Laravel, PHP framework',
                    'MYSQL'
                  ]} 
                    typeSpeed={40} 
                    backSpeed={50} 
                    loop />
         <p className='text-sm md:text-md w-full text-left text-gray-400'>I build user interfaces using tailwindcss and reactjs, the most used and powerfull modern frontend  web technologies.</p>
         <div className='w-full flex justify-start'>
              <Link  to="contact" className='link bg-pink-500 hover:bg-pink-600 rounded-none' smooth={true}  duration={500}>
                       Contact
               </Link>
          </div>
      </div>
      <div className='mt-10 md:mt-0 flex justify-center items-center'>
         <img src={profilePhoto} className='w-72 md:w-96 rounded-sm ' />
      </div>
    </div>
  )
}

export default Home