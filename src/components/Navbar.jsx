import React, { useContext } from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import { motion } from "motion/react"

const Navbar = () => {

    const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <motion.div 
    initial={{opacity: 0, y: -10}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.8}}
    className={`flex justify-between items-center border-b ${!darkMode ? 'border-b-zinc-300' : 'border-b-zinc-800'} pb-3 px-5 `}>
      <NavLink to="/" >
        <div className="logo text-xl font-semibold ">Pabitra<span className='text-blue-500 '>.</span></div> 
      </NavLink>
      {/* <div>
        <ul className='flex items-center justify-center gap-3 text-sm '>
            <li className='cursor-pointer hover:text-blue-500'>Self</li>
            <li className='cursor-pointer hover:text-blue-500'>Tech Stack</li>
            <li className='cursor-pointer hover:text-blue-500'>Projects</li>
            <li className='cursor-pointer hover:text-blue-500'>Contact</li>
        </ul>
      </div> */}
      <div className="buttons flex justify-between items-center gap-5 ">
        <div className='flex justify-center items-center gap-1 text-sm '>
          <div className={`p-0.2 border ${!darkMode ? 'border-zinc-300' : 'border-zinc-800'} rounded-lg box shadow-md shadow-gray-300`}>💗</div>
          IND
        </div>
        <div className="mode cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
           {darkMode ? <FaRegMoon /> : <IoIosSunny />}
        </div>
        <div className="github cursor-pointer">
            <FaGithub />
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
