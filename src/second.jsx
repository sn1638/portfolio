import { motion } from 'framer-motion';
export default function Second() {
  return (
    <>
      <div className="border border-gray-600 overflow-x-hidden w-full mx-auto bg-black sm:block md:flex lg:flex gap-4 items-center justify-center  pt-10 h-full pb-20">
        <div className="w-full lg:w-1/2">
          <motion.div
            className="border border-b-0 border-gray-700 rounded-2xl rounded-b-none bg-gray-900 italic text-center text-white font-thin text-6xl pt-10 pb-20"
            initial={{ x: '-100vw',opacity:0 }}
             animate={{ x: 0 ,opacity:1}}
            transition={{ duration:1, repeat: 0, ease: 'easeInOut' }}
          >
            Sachin kumar verma
          </motion.div>
          <motion.div
            className="border border-gray-700 border-t-0 border-b-0 pb-1 bg-gray-900 text-center text-3xl text-white"
             initial={{ x: '-100vw',opacity:0 }}
             animate={{ x: 0,opacity:1 }}
            transition={{ duration: 1.5, repeat: 0, ease: 'easeInOut' }}
          >
            Full stack Developer
          </motion.div>
          <motion.p
            className="bg-gray-900 border-t-0 rounded-t-none border border-gray-700 rounded-2xl w-full text-center text-white p-4 py-6 text-thin text-xl sm:w-full"
             initial={{ x: '-100vw',opacity:0 }}
             animate={{ x: 0,opacity:1 }}
            transition={{ duration: 2, repeat: 0, ease: 'easeInOut' }}
          >
            I am a passionate full stack developer and competitive programmer with a knack for crafting
            robust and scalable web applications. With 1 year of hands-on
            experience, I have honed my skills in full stack development technologies like
            React, express,nodejs,MongoDB and Vite. My goal is to leverage my expertise to create
            innovative solutions that drive business growth and deliver
            exceptional user experiences.
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className=" px-8 w-full sm:mt-0 py-10 ">
            <motion.img
              alt='unable to download the image'
              src="https://static.vecteezy.com/system/resources/previews/044/316/395/non_2x/anonymous-hacker-typing-computer-laptop-cybercrime-cyberattack-dark-web-concept-photo.jpeg"
              className="w-full rounded-3xl"
              initial={{ x: '100vw',opacity:0 }}
             animate={{ x: 0,opacity:1 }}
              transition={{ duration: 2.5, repeat: 0, ease: 'easeInOut' }}
            ></motion.img>
          </div>
        </div>
      </div>
    </>
  );
}