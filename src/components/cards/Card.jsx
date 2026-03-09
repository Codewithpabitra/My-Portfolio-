import React from 'react'

const Card = () => {
  return (
    <div class="relative w-80 h-80 rounded-2xl border border-neutral-800 
bg-linear-to-b from-neutral-900 to-neutral-950 
p-6 overflow-hidden shadow-lg
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">


  <div className="absolute inset-0 
      bg-[radial-gradient(#ffffff22_1px,transparent_1px)] 
      [background-size:10px_10px]
      [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
      opacity-40">
  </div>

  <div class="absolute inset-0 bg-linear-to-br 
      from-indigo-500/10 via-transparent to-cyan-500/10">
  </div>


  <div class="relative z-10 h-full flex flex-col justify-between">
    <div>
        <h3 class="text-lg font-semibold tracking-tight text-sky-500">
      Hello World
    </h3>
    <p class="text-sm text-neutral-400 mt-2 leading-relaxed">
      This is the description of the card. The text appears above the dotted grid background.
    </p>
    </div>
    <div>
        <button className='px-4 py-2 bg-sky-500 rounded-xl text-white text-shadow-xs cursor-pointer hover:bg-sky-600 transition-colors duration-200'>Hover me</button>
    </div>
  </div>

</div>
  )
}

export default Card
