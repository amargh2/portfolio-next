import Nav from "@/components/Nav"
import projects from "@/components/projects"
import ProjectCard from "@/components/ProjectCard"
export default function Projects() {
  
  const projectCards = [projects.forEach(project => (<ProjectCard project={project}/>))]
  console.log(projectCards)
    return (
        <>
            <Nav selected='projects'/>
            <div className='grid grid-cols-1 md:grid-cols-6'>
            </div>
        </>
    )
}