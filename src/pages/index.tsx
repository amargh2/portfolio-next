import Nav from '@/components/Nav'
import Carousel from '@/components/Carousel'
import HomeAboutPanel from '@/components/HomeAboutPanel'
import SkillsPanel from '@/components/SkillsPanel'
import Image from 'next/image'

export default function Home() {
  return (
    <>  
      <Nav selected= 'home'/>
      <div className='grid gap-3 grid-cols-1 md:grid-cols-10 px-2 md:px-20 mb-10'>
        
      <div className='md:col-start-2 md:col-span-8'>
          <HomeAboutPanel/>
        </div>
        <div className='md:col-start-2 md:col-span-8'>
          <SkillsPanel/>
        </div>
        
        <div className='md:col-start-2 md:col-span-8'>  
            <Carousel />
        </div>
      </div>
    </>
    )
}
