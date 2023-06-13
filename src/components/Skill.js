// import htmlLogo from '../assets/techs-images/html.PNG'
const Skill = ({skill}) => {
  return (
    <div className='relative group flex flex-col justify-between space-y-3 h-auto my-1 p-6 border border-gray-700 hover:border-b-1 hover:border-b-blue-500 rounded-sm'>
        <a href={skill.url} target="_blank" className='hover:underline underline-offset-2'><h1 className=' group-hover:text-gray-300 text-lg mb-4'>{skill.name}</h1> 
        </a>
        <p className='text-gray-400 group-hover:text-gray-300 text-sm text-left leading-4 h-auto'> {skill.desc}
        </p>
        <a href={skill.url} target="_blank" className='text-xs sm:text-left text-blue-200 hover:text-blue-300 hover:underline'>
            Learn more about 
            <span className=' ml-1 lowercase text-blue-300'>{skill.name}
            </span>
        </a>
    </div>
  )
}

export default Skill