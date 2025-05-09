import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from 'framer-motion';

export default function Fourth() {
  return (
    <>
    <div className="bg-black w-full h-full">
      <div className=" text-center p-25">
        <div className="text-white text-4xl">Technologies</div>
      </div>
      <div className=" sm:grid grid-cols-2 md:flex lg:flex justify-center items-center gap-5 ">

      <motion.div className="center justify-center flex sm:mx-10 bg-black text-violet-500 p-3 rounded-3xl border-gray-500 border-4 "
      animate={{ y: [10, -10, 10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
       < FaReact size={70}/>
        </motion.div>
        <motion.div
            className="sm:mx-10 center justify-center flex bg-black text-violet-500 p-3 rounded-3xl border-gray-500 border-4"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <TbBrandNextjs size={70} />
          </motion.div>


      <motion.div 
      className="sm:mx-10 center justify-center flex bg-black text-violet-500 p-3 rounded-3xl border-gray-500 border-4"
        animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
      <FaNodeJs size={70} />
        </motion.div>

      <motion.div className="sm:mx-10 center justify-center flex bg-black text-violet-500 p-3 rounded-3xl border-gray-500 border-4"
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <BiLogoMongodb size={70} />
        </motion.div>

        </div>
        <div className="pt-25">
          <div className="text-white  text-3xl text-center">
            Get In touch
            </div>
            <div className=" flex center justify-center item-center pb-25 ">
            <a href="mailto:sachin111mrj@gmail.com" className="text-white text-2xl underline p-10">
        sachin111mrj@gmail.com
      </a>
           
              </div>
          </div>
      </div>
    </>
  );
}
