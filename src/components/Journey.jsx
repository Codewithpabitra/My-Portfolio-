import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Journey = () => {

    const { darkMode } = useContext(AppContext)

    const journeyDetails = [
        {
            title : "Self Employed Teacher",
            desc : "I am currently on a mission in self-employed with my fellow students.I am from Feb'25 to till now.I love to teach programming."
        },
        {
            title : "Hackathons Wins🥂",
            desc : "I have participated over 7x hackathons with a little full stack team and also won 2x times.More to explore."
        }
    ]
  return (
    <div className='mt-15 '>
      <h2 className='text-4xl text-center '>My <span className='p-1 border border-zinc-800 rounded-xl cursor-pointer inline-block -rotate-2 hover:rotate-3 bg-linear-to-r transition-all duration-200 from-pink-100 via-white to-pink-100 text-black'>Professional</span> Journey</h2>
      <div className='main-journey m-10 flex justify-between items-center gap-5  '>
        {journeyDetails.map((item , index) => (
            <div key={index} className={`p-5 border ${!darkMode ? 'border-zinc-300' : "border-zinc-800"} rounded-xl flex flex-col gap-3 shadow-lg hover:scale-103 transition-all duration-300 `}>
                <h3 className='text-xl custom-font'>{item.title}</h3>
                <p className='text-zinc-500'>{item.desc}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Journey
