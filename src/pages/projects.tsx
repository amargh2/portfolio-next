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
                Some of my projects so far
            </h1>
              <p>
                This is a selection of some projects I have built so far.
                Most of these are assignments from The Odin Project, an open source community and course that challenges
                learners to build projects from scratch after learning and reading about concepts.
                Building these projects has been a lot of fun, and I am currently working on a couple of
                app ideas of my own.
              </p>
        </div>
        </div>
        <ProjectGrid/>
        <Footer/>
      </div>
    </>
  )
}