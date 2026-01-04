import React, { useContext } from 'react'
import { MdDownload } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { div } from 'motion/react-client';


const Hero = () => {

  const socials = [
    {logo : <FaLinkedin size={15} />} ,
    {logo : <FaXTwitter size={15} /> },
    {logo : <FaInstagram size={15} /> },
    {logo : <FaReddit size={15} /> },
  ]
    const { darkMode } = useContext(AppContext)
  return (
    <div className='mt-10 flex flex-col items-center gap-8 relative px-30  '>
        <FaHtml5 size={20} className='absolute top-0 right-30 rotate-30 text-blue-500 ' />
        <FaJs size={20} className='absolute top-0 left-30 -rotate-30 text-yellow-500' />
        <RiNodejsLine size={20} className='absolute top-20 right-70 rotate-30 text-green-600' />
        <FaHtml5  size={20} className='absolute top-20 left-70 -rotate-30 text-orange-500' />
        <FaReact size={20} className='absolute top-55 left-50 -rotate-80 text-purple-500' />
        <FiFramer size={20} className='absolute top-55 right-50 rotate-30 text-purple-500' />
      <div className="upper flex flex-col items-center gap-0">
        <div className='text-center'>
          <motion.h1 
          initial={{opacity: 0, y: 5 }}
          animate={{opacity: 1, y: 0}}
          transition={{duration : 0.6}}
          className='text-5xl leading-snug tracking-tighter'>Developing <span className={`border ${!darkMode ? 'border-zinc-300 ' : 'border-zinc-800'} py-1 px-2 rounded-xl inline-block -rotate-2 bg-linear-to-r from-purple-100 via-white to-blue-50  text-black`}>🗒️Interface</span> <br /> People Love</motion.h1>
        </div>
        <motion.h2
        initial={{opacity : 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className=' leading-tight'>Hello👋, <span className='text-blue-500 text-xl span-text '>Pabitra</span> here, an India based aspiring software Developer. </motion.h2>
        <motion.p 
        initial={{opacity : 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className=' text-zinc-500'>I provide beautiful visuals design with web dev tools , also provide MERN based applications.</motion.p>
      </div>
      <motion.div 
        initial={{opacity : 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
      className='flex items-center justify-start gap-3 '>
        <a href="mailto:pabitra05.maity@gmail.com">
        <button className={`font-semibold px-5 py-2 border text-sm border-zinc-500 rounded-full cursor-pointer ${!darkMode ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} transition-all duration-300`}
        >Let's Work Together</button></a>
        <button className='font-semibold px-5 py-2  text-sm bg-blue-500 rounded-full flex justify-center items-center gap-1 cursor-pointer text-white hover:scale-103 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.8)]'>Resume <MdDownload/></button>
      </motion.div>

      <motion.div
      initial={{opacity: 0, y: 10}}
      animate={{opacity : 1, y: 0}}
      transition={{duration: 1.2}} 
      className='flex justify-center items-center gap-2 '>
        {socials.map((item, index) => (
          <motion.div 
          initial={{y:0}}
          whileHover={{scale: 1, y: -3}}
          animate={{y: 0}}
          transition={{duration: 0.6}}
          key={index} className='p-2 bg-white rounded-xl border border-zinc-300 shadow-xl cursor-pointer'>
            <div  className='bg-black rounded-full '>
              <div className='p-2 border text-white ' >{item.logo}</div>
            </div>
          </motion.div>
            
        ))}
      </motion.div>
    </div>
  )
}

export default Hero
