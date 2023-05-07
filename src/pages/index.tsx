import Nav from '@/components/Nav'
import Carousel from '@/components/Carousel'
import HomeAboutPanel from '@/components/HomeAboutPanel'
import SkillsPanel from '@/components/SkillsPanel'
import Footer from '@/components/Footer'
import Head from 'next/head'
export default function Home() {
  return (
    <>  
      <Head>
        <title>Home - Anthony Margherio</title>
        <meta
          name="description"
          content="I’m Anthony Margherio. I'm a full-stack developer in Chicago, Illinois."
        />
      </Head>
      <div className='bg-blue-100'><Nav selected= 'home'/></div>
      <div className='flex flex-col bg-gradient-to-b from-blue-100 to-white gap-2'>  
        <div className='grid gap-3 grid-cols-1 md:grid-cols-10 px-2 md:px-20 md:mt-5 mb-10'>
        <div className='col-start-1 col-span-1 row-span-3 flex justify-center'>
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
    </>
    )
}
