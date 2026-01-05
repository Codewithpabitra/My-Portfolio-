import React, { useContext, useRef } from "react";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const TechStacks = () => {
  const ref = useRef();
  const { darkMode } = useContext(AppContext);

  const techs = [
    {
      logo: <FaJs className="text-yellow-400" size={50} />,
    },
    {
      logo: <FaHtml5 className="text-orange-500"  size={50} />,
    },
    {
      logo: <FaCss3Alt className="text-blue-500" size={50} />,
    },
    {
      logo: <FaReact className="text-violet-500" size={50} />,
    },
    {
      logo: <RiTailwindCssFill className="text-teal-500" size={50} />,
    },
    {
      logo: <SiFramer className="text-violet-500" size={50} />,
    },
    {
      logo: <FaNodeJs className="text-green-500" size={50} />,
    },
    {
      logo: <DiMongodb className="text-green-700" size={50} />,
    },
    {
      logo: <SiTypescript className="text-blue-500" size={50} />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <h2 className="text-center text-4xl px-3 py-1  bg-linear-to-b from-gray-700 to bg-zinc-900 rounded-xl text-white shadow-[0_0_10px_rgba(,0,)]">
          Tech Stacks 🍻
        </h2>
      </div>

      <div
        ref={ref}
        className={` relative  m-5 border ${!darkMode ? 'border-zinc-300' : "border-zinc-800"} rounded-lg shadow-lg min-h-45  h-auto w-[90%] p-3 flex flex-wrap overflow-hidden`}
      >
        {techs.map((item, index) => (
          <motion.div
            drag
            dragConstraints={ref}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
            className="p-3 h-5 cursor-grab active:cursor-grabbing "
            key={index}
          >
            {item.logo}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
