import React from 'react';
import { motion } from 'framer-motion';
export default function Third() {
  return (
    <>
      <div className="overflow-x-hidden bg-black h-full w-full pb-20">
        <div className="pb-20 w-full">
          <div className="text-center text-4xl py-20 text-white">About Me</div>
        </div>
        <div className="sm:block md:flex lg:flex gap-4 justify-between pb-20">
          <div className="w-full lg:w-1/2">
            <motion.img
              className="pb-20 px-8 rounded-3xl pt-4 w-full"
              initial={{ x: '-100vw' }}
             animate={{ x: 0 }}
              transition={{ duration: 3, repeat: 0, ease: 'easeInOut' }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrHwo9yJo1N1_PA7xcpexHkaNyPyYHMW_pg&s"
            ></motion.img>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <motion.p
              className="text-center text-white text-xl"
              initial={{ x: '100vw' }}
             animate={{ x: 0 }}
              transition={{ duration: 3, repeat: 0, ease: 'easeInOut' }}
            >
              I am a dedicated and Full stack developer with a passion
              for creating efficient and user-friendly web applications. With 1
              year of professional experience, I have worked with a variety of
              technologies, including React, Javascript,express, HTML, CSS, and
              MongoDB. My journey in web development began with a deep curiosity
              for how things work, and it has evolved into a career where I
              continuously strive to learn and adapt to new challenges. I thrive
              in collaborative environments and enjoy solving complex problems
              to deliver high-quality solutions. Outside of coding, I enjoy
              staying active, exploring new technologies, and contributing to
              open-source projects.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
