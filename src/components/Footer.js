import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center w-full h-[120px] bg-black mt-[1px] p-2 md:p-[50px] text-xs md:text-md text-white'>
       <span className='flex justify-start mr-10 my-5 md:my-0'> &copy; 2022 designed and built by Samiullah Sediqzada</span>
       <a href='https://github.com/sediqzada94' target='__blank' className='text-blue-300 hover:text-blue-400 hover:underline underline-offset-2'>Edit this page on github</a>
       </div>
  )
}

export default Footer