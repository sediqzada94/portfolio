import React from 'react'
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
const ContactLinks = () => {
  return (
    <div className='fixed hidden md:flex flex-col  space-y-4 left-0 top-1/3 text-white'>
        <div className='bg-[#4267B2] w-[130px] -ml-[87px] hover:ml-0 duration-300 rounded-sm px-2 py-1'><a href='https://www.facebook.com/Samiullahsediqzada' target='__blank' className='flex justify-between items-center'>Facebook<FaFacebookSquare className='ml-2' size={'2rem'}/></a> </div>
        <div className='bg-[#1DA1F2] w-[130px] -ml-[87px] hover:ml-0 duration-300 rounded-sm px-2 py-1'><a href='https://twitter.com/sediq_zada' target='__blank' className='flex justify-between items-center'>Twitter<FaTwitterSquare className='ml-2' size={'2rem'}/></a> </div>
        <div className='bg-[#0072b1] w-[130px] -ml-[87px] hover:ml-0 duration-300 rounded-sm px-2 py-1'><a href='https://www.linkedin.com/in/samiullah-sediqzada-bb0a86238' target='__blank' className='flex justify-between items-center'>LinkedIn<FaLinkedin className='ml-2' size={'2rem'}/></a> </div>
        <div className='bg-gray-700 w-[130px] -ml-[87px] hover:ml-0 duration-300 rounded-sm px-2 py-1'><a href='https://github.com/sediqzada94' target='__blank' className='flex justify-between items-center'>Github<FaGithubSquare className='ml-2  text-black' size={'2rem'}/></a> </div>
    </div>
  )
}

export default ContactLinks