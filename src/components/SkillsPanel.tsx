import React from "react"
import { SiHtml5 } from "react-icons/si"
import {SiCss3} from 'react-icons/si'
import{SiReact} from 'react-icons/si'
import { SiNodedotjs } from "react-icons/si"
import {FcLinux} from 'react-icons/fc'
import {BsFillPenFill} from "react-icons/bs"
import { SiWindows11 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";



import Image from "next/image"

const SkillsPanel = () => {
  return (
          <div className="flex flex-col items-center rounded-lg shadow-lg bg-gradient-to-br to-sky-50 from-white ring-1 ring-indigo-200">
                <h1 className='font-semibold text-lg pb-6'>My Skills</h1>
                  <div className="grid grid-cols-6 items-center pb-2 sm:grid-rows-1 sm:grid-cols-12 gap-3">
                      <div className="flex justify-center"><SiHtml5 size={70} color={'orange'}/></div>
                      <div className="flex justify-center"><SiCss3 size={70} color={'blue'}/></div>
                      <div className="flex justify-center"><SiReact size={70} color={'indigo'}/></div>
                      <div className="flex justify-center"><SiMongodb size={70} color={'green'}/></div>
                      <div className="flex justify-center"><SiNodedotjs size={70} color={'lightgreen'}/></div>
                      <div className="flex justify-center"><Image className='h-24 w-50 rounded-full' src='/a+.png' width={300} height={300} alt='CompTIA A+'/></div>
                      <div className="flex justify-center"><Image className='h-24 w-50 rounded-full' width={300} height={300} src='/net+.png' alt='CompTIA Network+'/></div>
                      <div className="flex justify-center"><Image className='h-24 w-50 rounded-full' width={300} height={300} src='/s+.png' alt='CompTIA Security+'/></div>
                      <div className="flex justify-center"><Image className='h-24 w-50' src='/ccna.png' width={100} height={100} alt='Cisco Certified Network Asscoiate'/></div>
                      <div className="flex justify-center"><FcLinux size={70} color={'green'}/></div>
                      <div className="flex justify-center"><SiWindows11 size={70} color={'blue'}/></div>
                      <div className="flex justify-center"><BsFillPenFill size={60} color={'blue'}/></div>
                </div>
              </div>
        )
}

export default SkillsPanel