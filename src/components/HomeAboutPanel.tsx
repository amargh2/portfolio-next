import Link from 'next/link'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'

export default function HomeAboutPanel() {
    return (    
    <div className='flex bg-gradient-to-br to-sky-50 from-white md:flex-row flex-col rounded-lg gap-2 shadow-md p-2 ring-1 ring-indigo-200'>
          <div className='flex flex-col items-center'>
            <Image src='/anthony1.jpg' alt='Photo of Anthony.' width={1000} height={100} className='rounded-full hidden md:flex'/>
            <Image src='/anthony1.jpg' alt='Photo of Anthony.' width={200} height={50} className='rounded-full md:hidden'/>
          <div className='text-slate-90 mt-2 flex justify-center p-2'>
            <Link href='https://www.github.com/amargh2'>    
              <BsGithub size={30}/>
            </Link>    
          </div>  
        </div>
        <div>  
          <div className='flex justify-center font-bold text-lg text-center'> Hi there, I'm Anthony.</div>
          <div className='flex justify-center m-10'> 
          I'm a curious lifelong learner with a love for tech, travel, reading, and running medium to long distances. Before I started working in technology last year, 
          I taught English in South Korea and then worked as a flight attendant for eight years. 
          While I loved my time in the air, I genuinely enjoy solving problems with code and infrastructure in a different kind of cloud. I am proficient in the MERN application 
          stack and hold 4 technical certifications with my eye on a few more. I do my best to learn something new each day and am enthusiastic about communication, sharing knowledge, 
          and documentation.
          </div>
          </div>
        </div>
    )
}