import React from "react"
import { SiHtml5 } from "react-icons/si"
import {SiCss3} from 'react-icons/si'
import{SiReact} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import { SiNodedotjs } from "react-icons/si"
import {FcLinux} from 'react-icons/fc'
import { SiMongodb } from "react-icons/si"
import {BsFillPenFill} from "react-icons/bs"
const SkillsPanel = () => {
  return (
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-200 to-white rounded-lg shadow-lg">
                <h1 className='font-semibold text-lg pb-6'>My Skills</h1>
                    <div className="grid grid-cols-6 sm:grid-rows-1 sm:grid-cols-12 gap-3">
                      <div className="flex justify-center"><SiHtml5 size={70} color={'orange'}/></div>
                      <div className="flex justify-center"><SiCss3 size={70} color={'blue'}/></div>
                      <div className="flex justify-center"><img className='rounded-full h-24 w-50' src='./aplus.png' alt='me'></img></div>
                      <div className="flex justify-center"><img className='h-24 w-50' src='./ccna.png' alt='me'></img></div>
                      <div className="flex justify-center"><img className='h-24 w-50 rounded-full' src='./networkplus.png' alt='me'></img></div>
                      <div className="flex justify-center"><SiReact size={70} color={'indigo'}/></div>
                      <div className="flex justify-center"><SiTailwindcss size={70} color={'cyan'}/></div>
                      <div className="flex justify-center"><SiNodedotjs size={70} color={'green'}/></div>
                      <div className="flex justify-center"><FcLinux size={70} color={'green'}/></div>
                      <div className="flex justify-center"><SiMongodb size={70} color={'green'}/></div>
                      <div className="flex justify-center"><BsFillPenFill size={60} color={'blue'}/></div>
                </div>
              </div>
        )
}

export default SkillsPanel