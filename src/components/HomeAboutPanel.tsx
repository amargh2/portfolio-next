import Link from 'next/link'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'

export default function HomeAboutPanel() {
    return (    
    <div className='flex md:flex-row flex-col bg-white rounded-lg gap-2 shadow-md p-2 ring-1 ring-indigo-200'>
          <div className='flex flex-col items-center'>
            <Image src='/me.jpg' alt='Photo of Anthony.' width={500} height={100} className='rounded-full hidden md:flex'/>
            <Image src='/me.jpg' alt='Photo of Anthony.' width={200} height={100} className='rounded-full md:hidden'/>
          <div className='text-slate-90 mt-2 flex justify-center p-2'>
            <Link href='https://www.github.com/amargh2'>    
              <BsGithub size={30}/>
            </Link>    
          </div>  
        </div>
        <div>  
          <div className='flex justify-center font-bold text-lg text-center'> Hi there, I'm Anthony. I'm a self-taught developer in Chicago.</div>
          <div className='flex justify-center m-10'>
            I'm a curious lifelong learner with a love for tech, travel, 
            reading, and writing.
            When I'm not coding or studying, you can find me running,
            reading a fantasy novel, or playing a video game. I'm interested
            in most areas of tech, including software development, networking 
            and IT infrastructure. I'm comfortable in Linux and Windows, and 
            I never shy away from new technologies or things to learn. In addition
            to my technical skills I also have a BA in English and strong writing skills
            along with a lot of experience working with people, from teaching English overseas
            to assisting customers at 30,000 feet.
          </div>
          </div>
        </div>
    )
}