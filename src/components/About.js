import React from 'react'
import profilePhoto from '../assets/profile.png'
const About = () => {
  return (
    <div name="about" className='flex flex-col mx-auto text-white bg-slate-900 border-t  py-20'>
    <h1 className='text-3xl w-full text-left md:text-center px-8 text-gray-200 mb-4 uppercase'>About Me</h1>
     <div className='flex flex-col md:flex-row '>
        <div className='w-full md:w-[60%] mx-auto px-8 py-4 text-left text-gray-300 hover:text-gray-400 leading-6'>
            <p>My name is Samiullah Sediqzada.</p>
            <p> I live in Kabul, Afghanistan.</p>
            <p>I am a web developer and a UI designer.</p>
            <p>I have experience with <span className='uppercase'> html, css, javascript, tailwindcss, bootstrap, react.js, alpine.js, laravel and mysql.</span></p>
        </div>
        <div className='flex justify-center items-center mt-0 md:-mt-10'>
            <img src={profilePhoto} className='w-48 rounded-full' />
        </div>
      </div>
</div>
  )
}

export default About