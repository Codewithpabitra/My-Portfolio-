import React from 'react'
import newsletter from "../assets/newsletter.png"

const Newsletter = () => {
  return (
    <div className='m-10 '>
        <div className='flex justify-center items-center gap-10 '>
            <div className='flex justify-center items-center p-2 border-2 w-fit rounded-lg'>
                <img src={newsletter} className='w-75 h-75 rounded-lg ' alt="newsletter_image" />
            </div>
            <div>
                <button className='px-5 py-3 bg-linear-to-b from-gray-700 to bg-zinc-900 rounded-xl text-white shadow-[0_0_10px_rgba(,0,)] text-3xl cursor-pointer '>checkout my newsletter here</button>
                <p className='mt-2'>Powered by <span className='text-blue-500'>beehiiv.com</span></p>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
