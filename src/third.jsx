import React from 'react';
import { motion } from 'framer-motion';
export default function Third() {
  return (
    <>
      <div className="border border-gray-600 overflow-x-hidden pt-10 bg-black h-full w-full">
        <div className="pb-20 w-full">
          <div className="text-center text-4xl py-10 text-white">About Me</div>
        </div>
        <div className="sm:block md:flex lg:flex gap-4 justify-between pb-10">
          <div className="w-full lg:w-1/2">
            <motion.img
              className="pb-20 px-8 rounded-3xl pt-4 w-full"
              initial={{ x: '-100vw',opacity:0 }}
             animate={{ x: 0,opacity:1 }}
              transition={{ duration: 3, repeat: 0, ease: 'easeInOut' }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrHwo9yJo1N1_PA7xcpexHkaNyPyYHMW_pg&s"
            ></motion.img>
          </div>
          <div className="w-full lg:w-1/2 p-4  ">
            <motion.p
              className="text-center text-white text-xl border border-gray-700 rounded-2xl bg-gray-900 p-6"
              initial={{ x: '100vw',opacity:0 }}
             animate={{ x: 0,opacity:1 }}
              transition={{ duration: 3, repeat: 0, ease: 'easeInOut' }}
            >
                  Engineering student with strong expertise in Data Structures and Algorithms and hands-on experience in C++, Web Development, and foundational Machine Learning. Possesses a solid understanding of core Computer Science subjects including Operating Systems, Database Management Systems, and Computer Networks. Proven ability to solve complex problems efficiently and build real-world projects. Seeking an opportunity to contribute to scalable software solutions in a dynamic organization.I am a competitive programmer also. I have solved more than 400 problems on various competitive programming platforms.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
