import Image from "next/image"
import {BsGithub} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import Link from "next/link"

export default function ProjectCard(props:any) {
  return (
    <>
      <div className='shadow-lg flex flex-col bg-gradient-to-br from-blue-100 to-white rounded-lg ring-1 ring-indigo-200 hover:ring-1 hover:ring-indigo-200 p-2'>
        <div className='flex justify-center align-center'><Image height={20} width={500} src={props.project.imgURL} alt='project picture'></Image></div>
        <div className='flex justify-between mt-2 gap-2'>
          <div className='flex justify-between font-semibold'>{props.project.name}</div>
            <div className='flex'>
              {props.project.link ? (<Link href={props.project.link}><FiExternalLink size={24}/></Link>) : <></>}
              <Link href={props.project.gitHubLink}><BsGithub size={24}/></Link>
            </div>
        </div>
        <div className='p-1'>{props.project.description}</div>
      </div>
    </>
  )
}