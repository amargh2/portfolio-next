import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import ProjectGrid from "@/components/ProjectGrid"
import Head from "next/head"
export default function ProjectsPage() {
  // Project Grid creates Project Cards and places them in a Grid
  return (
    <>
      <Head>
        <title>Projects - Anthony Margherio</title>
        <meta
          name="description"
          content="Anthony Margherio's projects."
      />
      </Head>  
      <div className='flex flex-col mb-3'>
        <Nav selected='projects'/>
        <div className= 'grid grid-cols-1 px-10 md:grid-cols-3 md:px-32 gap-10 mb-10'>
        <div className="mt-2 space-y-7 text-base text-zinc-600 col-start-1 col-span-3 lg:mx-40">
            <h1 className="text-4xl flex justify-center font-bold tracking-tight text-center text-zinc-800">
                Some of my projects
            </h1>
              <p>
                This is a selection of some projects I have built so far.
                These are assignments from The Odin Project, an open source community and course that challenges
                learners to build projects from scratch after learning and reading about concepts. All of them are hosted on CI/CD 
                platforms and update as I commit code, though I haven't worked on them actively in a bit.
                Building these projects has been a lot of fun, and I learned so much while making them - it was a lot of time spent on Google and reading 
                a lot about how JavaScript in particular works, especially Node and React.
                I am currently focusing on learning PowerShell and I feel these projects
                have helped set a foundation to help me learn other programming and scripting languages.
              </p>
        </div>
        </div>
        <ProjectGrid/>
        <Footer/>
      </div>
    </>
  )
}