import projects from "./projects"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import Image from "next/image"

export default function ProjectCarousel() {
  const addLinks = (project:any) => {
    if (project.link) {
      return (
        <div className ='flex'>
          <a href={project.link}><FiExternalLink size={22}/></a>
          <a href={project.gitHubLink}><FaGithub size={22}/></a>
        </div>
      )
    } else {
      return (
        <div className="flex">
          <a href={project.gitHubLink}><FaGithub size={22}/></a>
        </div>
      )
    }
  }

 function createItemsForCarousel() {
  const processedProjects = projects.map((project, i) => {
    return (
      <div key={i} id={'item' + project.id.toString()} className="carousel-item w-full lg:flex-row flex flex-col items-center justify-center p-1">
          <div className='flex justify-center'><Image src={project.imgURL} className="w-full h-full" width={900} height={100} alt={project.name}/></div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <p className='font-semibold'>{project.name}</p>
                {addLinks(project)}
              </div>
              <p className=''>{project.description}</p>
            </div>
              
          </div>
    )
  })
  return processedProjects
 }
  
  return (
  
      <div className='flex carousel flex-col shadow-lg rounded-lg bg-gradient-to-br to-sky-50 from-white ring-1 ring-indigo-200'>
      <div className="flex justify-center">
        <h1 className='font-semibold text-xl pb-2'>Some of my projects</h1>
      </div>
          <div className="carousel h-80">{createItemsForCarousel()}</div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn bg-gradient-to-br from-cyan-200 to-indigo-300 btn-xs  text-slate-800">1</a>
          <a href="#item2" className="btn bg-gradient-to-br from-cyan-200 to-indigo-300 btn-xs  text-slate-800">2</a>
          <a href="#item3" className="btn bg-gradient-to-br from-cyan-200 to-indigo-300 btn-xs  text-slate-800">3</a>
          <a href="#item4" className="btn bg-gradient-to-br from-cyan-200 to-indigo-300 btn-xs  text-slate-800">4</a>
          <a href="#item5" className="btn bg-gradient-to-br from-cyan-200 to-indigo-300 btn-xs  text-slate-800">5</a>
          <a href="#item6" className="btn bg-gradient-to-br from-cyan-200 to-indigo-300 btn-xs text-slate-800">6</a>
        </div>
      </div>
  )
}