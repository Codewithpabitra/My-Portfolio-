import React from "react";
import { motion } from "framer-motion";

const BlinkGridCard = () => {
  return (
    <div className="relative w-80 h-80 rounded-2xl border border-neutral-800 
    bg-gradient-to-b from-neutral-900 to-neutral-950 
    p-6 overflow-hidden shadow-lg
    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Blinking Grid */}
      <motion.div
        className="absolute inset-0 
        bg-[radial-gradient(#ffffff22_1px,transparent_1px)] 
        [background-size:10px_10px]
        [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
       "
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.01, 1]
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />


      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-sky-500">
            Hello World
          </h3>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            This is the description of the card. The text appears above the dotted grid background.
          </p>
        </div>

        <div>
          <button className="px-4 py-2 bg-sky-500 rounded-xl text-white cursor-pointer hover:bg-sky-600 transition-colors duration-200">
            Hover me
          </button>
        </div>
      </div>

    </div>
  );
};

export default BlinkGridCard;