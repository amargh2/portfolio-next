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
          content="Anthony Margherio's bio"
        />
      </Head>
      <Nav selected = 'about'/>
      <div className="mt-2 mb-32 flex bg-sky-50">
        <div className="flex m-2 flex-col lg:grid lg:rows-3 flex-col lg:grid-cols-6 gap-6">
            <div className='flex flex-col items-center gap-4 lg:col-span-2'>
              <Image alt= 'Picture of Anthony Margherio.' className= 'rounded-2xl flex' src='/melondon.jpg' width={300} height={50}/>
              <Image alt= 'Picture of an aircraft window and clouds.' className= 'rounded-2xl hidden lg:flex' src='/airplanewindow2.jpg' width={300} height={150}/>
            </div>
          <div className="lg:col-start-3 col-span-2 flex justify-center">
            <div className="space-y-7 text-base text-zinc-600">
            <h1 className="font-bold flex justify-center tracking-tight text-zinc-800 dark:text-zinc-100 text-3xl">
              Hi, I'm Anthony
            </h1>
              <p>
                As a curious kid growing up in a small town in Illinois, I thought a lot about travel, and I feel lucky to 
                have done a bit of that as a flight attendant, backpacker, and English
                teacher in South Korea. While I wouldn't change a thing, especially the 8 years 
                I spent flying at American Airlines, so much travel for so long -
                coupled with the challenges of the pandemic - left me thinking about where to land next
                in life and in my career. 
                </p>
                
                <p> 
                I grew up building and playing with computers with my friends,  
                and I enjoyed working my way through school
                doing desktop support for my university's employees. During the pandemic,
                I realized I was spending a lot of time on the jumpseat thinking about that job, coding, and IT infrastructure and
                that, while I loved flying, I was ready to learn and grow 
                in a different way. I decided to update my skills and knowledge to pivot to IT.
                </p>
                <p>
                Since then, I have earned three CompTIA certifications and a CCNA 
                through self-study, home labbing, and a lot of reading and tinkering on a homemade virtualization server running an open source hypervisor called <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  href='https://www.proxmox.com/en/'>Proxmox</Link>. 
                I also learned to code with JavaScript and MongoDB
                through <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://www.theodinproject.com'>The Odin Project</Link>, an open source, 
                project-based web development course and learning community. 
                Professionally, I now get to do IT support for a public organization
                that does work I believe in. At the moment I am focusing
                on learning Powershell and Azure and am excited by the possibilities with them both. 
              </p>
              
              <p> 
                When I'm not working, coding or studying, I like spending time running mid to long
                distances, playing video games, listening to podcasts, or reading fantasy or
                nonfiction. I also meditate daily, am vegetarian, and consider myself a calm, kind person who 
                tries to find the fun in life.
                 
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className='flex flex-col place-items-stretch pb-4'><Footer/></div>
        </>
    )
}