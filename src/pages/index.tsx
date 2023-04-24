import Nav from '@/components/Nav'
import Carousel from '@/components/Carousel'
import HomeAboutPanel from '@/components/HomeAboutPanel'
import SkillsPanel from '@/components/SkillsPanel'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div className='flex flex-col bg-gradient-to-br from-blue-100 to-white gap-2'>  
      <Nav selected= 'home'/>
      <div className='grid gap-3 grid-cols-1 md:grid-cols-10 px-2 md:px-20 mb-10'>
      <div className='col-start-1 col-span-1 row-span-3 flex justify-center mt-10'>
      </div>

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
      <Footer />
    </div>
    )
}
