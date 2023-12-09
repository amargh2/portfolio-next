import Head from "next/head"
import Nav from "@/components/Nav"
import Image from "next/image"
import Footer from "@/components/Footer"
import Link from "next/link"
export default function About () {
    return (
       <> 
        <Head>
        <title>About - Anthony Margherio</title>
        <meta
          name="description"
          content="I’m Anthony Margherio. I'm a full-stack developer in Chicago, Illinois."
        />
      </Head>
      <Nav selected = 'about'/>
      <div className="mt-2 mb-4">
        <div className="flex m-2 flex-col lg:grid lg:rows-3 flex-col lg:grid-cols-6 gap-6">
            <div className='flex flex-col items-center gap-4 lg:col-span-2'>
              <Image alt= 'Picture of Anthony Margherio.' className= 'rounded-2xl flex' src='/melondon.jpg' width={300} height={50}/>
              <Image alt= 'Picture of an aircraft window and clouds.' className= 'rounded-2xl hidden lg:flex' src='/airplanewindow2.jpg' width={300} height={150}/>
            </div>
          <div className="lg:col-start-3 col-span-2 flex justify-center">
            <div className="space-y-7 text-base text-zinc-600">
            <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-3xl">
              Hi, I'm Anthony. I'm a tech and travel enthusiast
            </h1>
              <p>
                As a curious kid from a small town in Illinois I thought a lot about seeing what was outside my hometown,
                and I'm lucky to have done a bit of that as a flight attendant, backpacker, and English
                teacher in South Korea. While I wouldn't change a thing, especially the 8 years 
                I spent flying at American Airlines, so much travel for so long 
                coupled with the challenges of the pandemic had me thinking about where to land next
                in life and in my career. 
                </p>
                
                <p> 
                I grew up building and playing with computers with my friends,  
                and I really enjoyed working in one of my college's IT departments doing desktop support. During the pandemic,
                I realized I was spending a lot of time on the jumpseat thinking about coding, 
                networking and IT and that, while I loved flying, I was ready to learn and grow 
                in a different way. I decided to create a plan to transition to IT.
                </p>
                <p>
                Since that initial decision, I have earned three CompTIA certifications and a CCNA 
                through self-study, home labbing, and a lot of reading and tinkering. I also learned to code with JavaScript and MongoDB
                through <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://www.theodinproject.com'>The Odin Project</Link>, an open source, project-based learning course and community. 
                Professionally, I now get to do IT support for a public organization
                that does work I believe in. At the moment I am focusing
                on learning Powershell and Azure and am excited by them both. 
              </p>
              
              <p> 
                When I'm not working, coding or studying, I like spending time running mid to long
                distances, playing video games, listening to podcasts, or reading fantasy or
                nonfiction. I also meditate daily, am a vegetarian, and consider myself a pretty calm, kind person who 
                tries to find the fun in life. 
                 
              </p>
            </div>
          </div>
        </div>
        <Footer/>

        </div>
        </>
    )
}