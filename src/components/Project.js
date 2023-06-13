import React from 'react'

const Project = ({project}) => {
  return (
    <div className='flex flex-col group justify-between items-start  border border-gray-500 hover:border-b-2 hover:border-b-blue-500 cursor-pointer p-8 rounded-sm my-4'>
        <div>image</div>
        <h1 className='text-md my-4 w-full text-gray-100 text-left group-hover:text-gray-300'>{ project.name}</h1>
        <p className='text-xs text-left leading-4 text-gray-400 leading-2'> {project.desc} </p>
        <div className='text-md text-gray-400 text-left  leading-2 mt-4'><span className='text-gray-200'>Techs used:</span> { project.techs.join(", ") }</div>
        <div className='flex flex-col md:flex-row justify-between w-full mt-4'>
            <a href={project.url} target="__blank" className='mb-3 md:mb-0 px-2 py-1 text-blue-400 hover:underline hover:text-blue-600 '>Demo</a>
            <a href="#" className=' px-2 py-1 text-blue-400 hover:underline hover:text-blue-600 '>See code</a>
        </div>
    </div>
  )
}

export default Project