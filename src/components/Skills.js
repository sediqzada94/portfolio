import Skill from './Skill'
import { skillsData } from '../assets/projectData'
const Skills = () => {
  return (
     
      <>
      <div name="skills" className='flex flex-col justify-center items-center mx-auto text-white bg-slate-900 border-t px-4 pt-20 '>
          <h1 className='text-3xl text-gray-200 w-full text-left md:text-center mb-4 uppercase'>Skills</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 space-x-1 w-full md:w-[80%] mx-auto  '>
            {
              skillsData.map((skill)=>{
                 return <Skill key={skill.id} skill = {skill} />
              })
            }
          </div>
    </div>
      </>
  )
}

export default Skills