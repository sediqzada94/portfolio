import React from 'react'
const Contact = () => {
  return (
    <div name="contact" className='flex flex-col w-full md:w-[80%] mx-auto text-white bg-slate-900 border-t  pt-20'>
    <h1 className='text-3xl w-full px-8 text-left md:text-center text-gray-200 mb-8 uppercase'>Contact Me</h1>
      <div className='flex flex-col md:flex-row'>
         <div className='flex flex-col space-y-4 w-full md:w-[50%] px-8 md:px-0  mx-auto text-gray-300'>
            <h3 className='flex justify-start text-xl text-gray-100'>Get in touch with us</h3>
            <div className='flex '>
               <div className='mr-2 '>Email:</div>
               <div className=''>sediqzada94@gmail.com</div>
            </div>
            <div className='flex'>
               <div className='mr-2'>Phone:</div>
               <div>+93798555957</div>
            </div>
            <div className='flex'>
               <div className='mr-2'>Office address:</div>
               <div>Ministry of finance Kabul, Afghanitan</div>
            </div>
            <div className='flex space-x-14 text-blue-400 py-5'>
               <a href='https://www.facebook.com/Samiullahsediqzada' target='__blank' className=' hover:text-blue-500 hover:underline'>Facebook</a>
               <a href='https://twitter.com/sediq_zada' target='__blank' className=' hover:text-blue-500 hover:underline'>Twitter</a>
               <a href='https://www.linkedin.com/in/samiullah-sediqzada-bb0a86238' target='__blank' className=' hover:text-blue-500 hover:underline'>Linkedin</a>
               <a href='https://github.com/sediqzada94' target='__blank' className=' hover:text-blue-500 hover:underline'>Github</a>
            </div>
         </div>
         <div className='flex flex-col w-full md:w-[50%] space-y-4 mx-auto px-8 md:px-0 ml-0 md:ml-20 mt-10 md:mt-0 text-gray-300'>
            <h3 className='flex justify-start text-xl text-gray-100'>Or send me a message</h3>
            <form method='POST' action="https://getform.io/f/d00a6692-f1c1-4833-927f-618fb9fb3148">
            <div className='flex justify-between items-center'>
               <div >Fullname:</div>
               <div className='mt-2 w-2/3'>
                  <input type="text" name="name" className='text-gray-800 rounded-md border-none px-3 py-2 w-full focus:outline-none' />
               </div>
            </div>
            <div className='flex justify-between items-center'>
               <div >Email:</div>
               <div className='mt-2 w-2/3'>
                  <input type="text" name="email" className='text-gray-800 rounded-md border-none px-3 py-2 w-full focus:outline-none' />
               </div>
            </div>
            <div className='flex justify-between items-center'>
               <div >Message:</div>
               <div className='mt-2 w-2/3'> <textarea name="message" required className='rounded w-full h-32 focus:outline-none p-3 text-gray-800'></textarea> </div>
            </div>
            <div className='flex justify-end'>
               <button type="submit" className='px-5 py-2 mt-2 bg-pink-500 hover:bg-pink-600 rounded-full'>Send</button>
            </div>
            </form>
         </div>
      </div>
</div>
  )
}

export default Contact