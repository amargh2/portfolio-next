import Link from 'next/link'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'

export default function HomeAboutPanel() {
    return (    
    <div className='flex mt-10 bg-gradient-to-br from-blue-200 to-white rounded-lg shadow-md p-2 ring-1 ring-indigo-200'>
          <div className='flex flex-col'>
            <Image src='/me.jpg' alt='Photo of Anthony.' width={800} height={100} className='rounded-full'/>
          <div className='text-slate-90 mt-2 flex justify-center p-2'>
            <Link href='https://www.github.com/amargh2'>    
              <BsGithub size={30}/>
            </Link>    
          </div>  
        </div>
          <div className='flex justify-center m-10'>
            I'm a curious lifelong learner with a love for tech, travel, 
            reading, and writing.
            When I'm not coding or studying, you can find me running,
            reading a fantasy novel, or playing a video game. I'm interested
            in most areas of tech, including software development, networking 
            and IT infrastructure. I'm comfortable in Linux and Windows, and 
            I never shy away from new technologies or things to learn. In addition
            to my technical skills I also have a BA in English and strong writing skills.
          </div>
          
        </div>
    )
}