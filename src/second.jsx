import React from 'react';
import { motion } from 'framer-motion';
export default function Second() {
  return (
    <>
      <div className="w-full mx-auto bg-black sm:block md:flex lg:flex gap-4 items-center justify-center  pt-10 h-full pb-20">
        <div className="w-full lg:w-1/2">
          <motion.div
            className="text-white font-thin text-6xl p-6 py-20"
            animate={{ x: [-1000, 0, 0] }}
            transition={{ duration: 1, repeat: 0, ease: 'easeInOut' }}
          >
            Sachin kumar verma
          </motion.div>
          <motion.div
            className="p-6 text-3xl text-white"
            animate={{ x: [-1000, 0, 0] }}
            transition={{ duration: 2, repeat: 0, ease: 'easeInOut' }}
          >
            Frontend Developer
          </motion.div>
          <motion.p
            className="w-full text-white p-6 text-thin text-xl sm:w-full"
            animate={{ x: [-1000, 0, 0] }}
            transition={{ duration: 3, repeat: 0, ease: 'easeInOut' }}
          >
            I am a passionate frontend developer with a knack for crafting
            robust and scalable web applications. With 1 year of hands-on
            experience, I have honed my skills in front-end technologies like
            React and Vite, as well as knowledge of Node.js,MongoDB and
            Networking . My goal is to leverage my expertise to create
            innovative solutions that drive business growth and deliver
            exceptional user experiences.
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="p-20 w-full sm:mt-0">
            <motion.img
              src="https://static.vecteezy.com/system/resources/previews/044/316/395/non_2x/anonymous-hacker-typing-computer-laptop-cybercrime-cyberattack-dark-web-concept-photo.jpeg"
              className="w-full "
              animate={{ x: [1000, 0, 0] }}
              transition={{ duration: 4, repeat: 0, ease: 'easeInOut' }}
            ></motion.img>
          </div>
        </div>
      </div>
    </>
  );
}
