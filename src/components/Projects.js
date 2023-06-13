// import Project from './Project'
// import { data } from '../assets/projectData'
const Projects = () => {
  return (
     
      <div name="projects" className='flex flex-col justify-center items-center mx-auto text-white bg-slate-900 border-t p-8 py-20'>
          <h1 className='text-3xl w-full text-left md:text-center px-10 text-gray-200 mb-4 uppercase'>My work</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 w-[80%] space-x-2 mx-auto'>
            {/* {
              data.map((project)=>{
                return <Project key={project.id} project = {project} />
              })
            } */}
            Comming soon...
          </div>
    </div>
  )
}

export default Projects