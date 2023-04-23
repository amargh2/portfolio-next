import Head from "next/head"
import Nav from "@/components/Nav"
import Image from "next/image"
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
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className='flex justify-end md: px-24 align-middle'>
              <Image alt= 'Picture of Anthony Margherio.' className= 'rounded-2xl' src='/me.jpg' width={300} height={300}/>
            </div>
            <div className="max-w-xs px-2.5 lg:max-w-none">
            </div>
          </div>
          <div className="lg:order-second lg:row-span-2 flex justify-center m-2">
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I'm Anthony Margherio. I'm a self-taught developer living in Chicago, Illinois.
            </h1>
              <p>
                I grew up in a small town in Illinois dreaming of seeing the world,
                and I'm really lucky to have done at least little bit of that
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
                learning community called The Odin Project. Learning to build functioning apps out of code 
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
                also have a BA in English and exposure to markdown - I'll always be happy to contribute
                to the team's documentation efforts!
              </p>
              <p> 
                When I'm not coding or studying, I like spending time running mid to long
                distances, playing the occasional video game, listening to podcasts, or reading fantasy or
                nonfiction. I also meditate daily, am a vegetarian, and consider myself a pretty calm, kind guy who 
                tries to find the fun in life. 
                Thanks for passing through, and don't hesitate to reach out if you'd like to work together. :)
                 
              </p>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}