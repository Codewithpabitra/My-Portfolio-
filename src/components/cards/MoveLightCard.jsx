import React from "react";
import { motion } from "framer-motion";

const MoveLightCard = () => {
  return (
    <div className="relative w-80 h-80 rounded-2xl border border-neutral-800 
    bg-gradient-to-b from-neutral-900 to-neutral-950 
    p-6 overflow-hidden shadow-lg">

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 
        bg-[radial-gradient(#ffffff22_1px,transparent_1px)] 
        [background-size:12px_12px]
        [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.03, 1]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />

     <motion.div
  className="absolute left-1/2 top-1/2
  -translate-x-1/2 -translate-y-1/2
  w-[150%] h-2
  bg-gradient-to-r from-transparent via-sky-400/80 to-transparent
  blur-md -rotate-45"

  initial={{ x: "-150%", y: "-150%" }}

  animate={{ 
    x: "150%",
    y: "150%"
  }}

  transition={{
    duration: 4,
    ease: "linear",
    repeat: Infinity
  }}
/>


      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-sky-400">
            Hello World
          </h3>

          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            Apple / Vercel style animated grid background using Framer Motion.
          </p>
        </div>

        <button className="px-4 py-2 cursor-pointer bg-sky-500 rounded-xl text-white hover:bg-sky-600 transition">
          Hover me
        </button>

      </div>
    </div>
  );
};

export default MoveLightCard;