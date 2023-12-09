import Head from "next/head"
import Nav from "@/components/Nav"
import Image from "next/image"
import Footer from "@/components/Footer"
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
              <Image alt= 'Picture of Anthony Margherio.' className= 'rounded-2xl flex' src='/melondon.jpg' width={300} height={100}/>
              <Image alt= 'Picture of an aircraft window and clouds.' className= 'rounded-2xl hidden lg:flex' src='/airplanewindow2.jpg' width={300} height={150}/>
            </div>
          <div className="lg:col-start-3 col-span-2 flex justify-center">
            <div className="space-y-7 text-base text-zinc-600">
            <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-3xl">
              Hi, I'm Anthony. I'm a tech and travel enthusiast living in Chicago.
            </h1>
              <p>
                I grew up in a small town in Illinois dreaming of travel,
                and I consider myself lucky to have done at least little bit of that
                as a flight attendant, English teacher in South Korea, and backpacker. 
                While I wouldn't change a thing,
                nearly a decade in the air coupled with the pandemic left me thinking about 
                new challenges, old passions, and where I wanted to land next in my career.
                I had always been interested in technology and worked in desktop support during my time in college,
                so I decided to revisit the field and update my knowledge.
                </p>
                <p> 
                I currently hold three CompTIA certifications and a CCNA through self-study 
                and learned to code with JavaScript
                through The Odin Project, an open source, project-based learning course and community. 
                Professionally, I now get to do IT support for a public organization
                that does work I believe in. At the moment I am focusing
                on learning Powershell and Azure and tinkering in my virtualization server and home lab. 
              </p>
              
              <p> 
                When I'm not coding or studying, I like spending time running mid to long
                distances, playing the occasional video game, listening to podcasts, or reading fantasy or
                nonfiction. I also meditate daily, am a vegetarian, and consider myself a pretty calm, kind person who 
                tries to find the fun in life. 
                Thanks for passing through, and don't hesitate to reach out if you'd like to work together. :)
                 
              </p>
            </div>
          </div>
        </div>
        <Footer/>

        </div>
        </>
    )
}