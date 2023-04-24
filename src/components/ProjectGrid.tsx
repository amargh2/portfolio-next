import Image from "next/image"
import projects from "./projects"
import ProjectCard from "./ProjectCard"


export default function ProjectGrid(props:{}) {
  return (
    <div className='md:mx-28 mx-4 gap-4 grid md:grid-cols-3 grid-cols-1 mb-10'>
      {projects.map((project, i)=> (<ProjectCard project={project} key={i}/>))}
    </div>
  )  
      
}