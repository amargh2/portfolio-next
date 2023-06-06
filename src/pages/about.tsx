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
              <Image alt= 'Picture of Smoky Mountains.' className= 'rounded-2xl hidden lg:flex' src='/smokies.jpg' width={300} height={300}/>

            </div>
          <div className="lg:col-start-3 col-span-2 flex justify-center">
            <div className="space-y-7 text-base text-zinc-600">
            <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-2xl">
              Hi, I'm Anthony. I'm a tech and travel enthusiast living in Chicago.
            </h1>
              <p>
                I grew up in a small town in Illinois dreaming of seeing the world,
                and I consider myself lucky to have done at least little bit of that
                as a flight attendant, English teacher in South Korea, and solo backpacker. 
                While I wouldn't change a thing,
                nearly a decade in the air coupled with the pandemic left me thinking about 
                new challenges, old passions, and where I wanted to land next in my career.
                I had worked in a small IT department at my university doing desktop support in the past and 
                grew up playing video games and building computers with my friends, so I decided to 
                update my knowledge and explore my interests in tech.
                </p>
                <p>
                After earning some certifications in networking and operating systems 
                through self-study, I decided to
                start learning full-stack development through a free, open source bootcamp and 
                learning community called The Odin Project. Learning to code tied lots of concepts together
                for me and 
                felt like a whole new adventure, so
                after a lot of soul searching I decided to leave flying in the spring of 2022 to 
                study full-time, get my feet on the ground, and 
                develop some consistent health and study habits.
              </p>
              
              <p>
                Since then I'm happy to say my development skills have come a long way.
                I'm comfortable building full-stack apps with the MERN stack and Next.js and have built projects
                with a range of front-end and back-end tooling, from vanilla CSS to Tailwind to webpack to 
                TypeScript. I'm hoping to continue to learn and contribute my existing skills
                to a great team. While I'm open to many opportunities, I am especially interested 
                in front and back-end development, infrastructure, and computer networking. I
                also have a BA in English and know markdown - I'll always be happy to contribute
                to the team's documentation efforts!
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