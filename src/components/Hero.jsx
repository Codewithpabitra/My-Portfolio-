import React, { useContext } from 'react'
import { MdDownload } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"
import { FaHtml5 } from "react-icons/fa";

const Hero = () => {
    const { darkMode } = useContext(AppContext)
  return (
    <div className='mt-10 flex flex-col gap-5 relative '>
        <FaHtml5 size={20} className='absolute top-0 right-30 rotate-30 text-blue-500 ' />
      <div className="upper flex flex-col gap-2">
        <motion.h2
        initial={{opacity : 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='w-1/2 leading-tight'>Hello👋,<br /> <span className='text-blue-500 text-xl span-text '>Pabitra</span> here, an India based aspiring software Developer. </motion.h2>
        <motion.p 
        initial={{opacity : 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className='text-sm text-zinc-500'>I provide beautiful visuals design with web dev tools , also provide MERN based applications.</motion.p>
      </div>
      <motion.div 
        initial={{opacity : 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
      className='flex items-center justify-start gap-3 '>
        <button className={`px-3 py-1 border text-sm border-zinc-500 rounded-full cursor-pointer ${!darkMode ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} transition-all duration-300`}
        >Explore me!</button>
        <button className='px-3 py-1 text-sm bg-blue-500 rounded-full flex justify-center items-center gap-1 cursor-pointer text-white hover:scale-103 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.8)]'>Resume <MdDownload/></button>
      </motion.div>
    </div>
  )
}

export default Hero
