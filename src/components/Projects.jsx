import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const { darkMode } = useContext(AppContext);
    const  navigate  = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    }

    const projectsDetails = [
        {
            name : "Carbon-Count-Website",
            desc : "This is a website that calculate the eq. carbon count and help us to reduce the carbon emission in the campuses.",
            section : "web App",
            techs : "MERN",
            link : "https://github.com/Codewithpabitra/green-carbon-count"
        },
        {
            name : "Cool-Docs-Website",
            desc : "This website is so cool to showcase you the sticky notes on the web by the use of Framer motion.",
            section : "web App",
            techs : "Framer Motion",
            link : "https://github.com/Codewithpabitra/Cool-Docs-Website"
        },
        {
            name : "MERN-Auth-App",
            desc : "This web app shows the complete authentication and authorization with the Nodejs and reactJS technologies",
            section : "web App",
            techs : "MERN",
            link : "https://github.com/Codewithpabitra/MERN-AUTH"
        },
        {
            name : "Elon-Musk-Chrome-Extension",
            desc : "This is my first ever chrome extension build with Javascript and it was a fun work for me",
            section : "Chrome Extension",
            techs : "JavaScript",
            link : "https://github.com/Codewithpabitra/First-Chrome-Extension-"
        }
    ]
  return (
    <div className='mt-10 '>
        <h2 className='text-4xl text-center'>A Glimpse of <span className='p-1 border border-zinc-800 rounded-xl cursor-pointer inline-block -rotate-2 hover:rotate-3 bg-linear-to-r transition-all duration-200 from-pink-100 via-white to-pink-100 text-black'>🥂My Crafts</span></h2>

        <div className='flex flex-wrap justify-start items-center gap-3 p-10  '>
            {projectsDetails.map((item, index) => (
                <div  key={index} className={`w-[30%] p-5 flex flex-col gap-1 border ${!darkMode ? 'border-zinc-300' : 'border-zinc-800'}  rounded-xl shadow-lg hover:scale-103 transition-all duration-300`}>
                    <h3 className='text-xl custom-font '>{item.name}</h3>
                    <p className='text-zinc-500 '>{item.desc}</p>
                    <div className='flex gap-1'>
                        <div className='px-3 py-1 bg-zinc-700 rounded-lg text-neutral-100 text-sm '>{item.section}</div>
                        <div  className='px-3 py-1 bg-zinc-700 rounded-lg text-neutral-100 text-sm '>{item.techs}</div>
                    </div>
                    <p onClick={() => navigateTo(item.link)} className='text-blue-500 underline text-sm cursor-pointer'>view here</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
