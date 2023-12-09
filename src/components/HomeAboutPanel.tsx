import Link from 'next/link'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'

export default function HomeAboutPanel() {
    return (    
    <div className='flex md:flex-row flex-col bg-white rounded-lg gap-2 shadow-md p-2 ring-1 ring-indigo-200'>
          <div className='flex flex-col items-center'>
            <Image src='/anthony.jpg' alt='Photo of Anthony.' width={500} height={100} className='rounded-full hidden md:flex'/>
            <Image src='/anthony.jpg' alt='Photo of Anthony.' width={150} height={100} className='rounded-full md:hidden'/>
          <div className='text-slate-90 mt-2 flex justify-center p-2'>
            <Link href='https://www.github.com/amargh2'>    
              <BsGithub size={30}/>
            </Link>    
          </div>  
        </div>
        <div>  
          <div className='flex justify-center font-bold text-lg text-center'> Hi there, I'm Anthony.</div>
          <div className='flex justify-center m-10'>
            I'm a curious lifelong learner with a love for tech, travel, 
            reading, and writing. I currently work in IT support and have 4 certifications 
            along with a strong desire to continue learning. 
            I also have a BA in English and am enthusiastic about 
            documentation, communication, and collaboration. At the moment I am especially focused on learning Azure and Powershell.
            When I'm not working or studying, I like running mid-to-long distance,
            meditating, and playing the occasional video game.
          </div>
          </div>
        </div>
    )
}