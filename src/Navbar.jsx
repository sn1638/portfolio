import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white overflow-x-hidden ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 border-gray-700">
        <div className="flex justify-between items-center font-thin h-16 ">
           
          <motion.div className="text-xl font-Orbitron italic" 
             animate={{ x: [0, 70, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >SACHIN</motion.div>

          <div className="hidden md:flex gap-6">
            <a
              href="https://github.com/sn1638"
              target="_blank"
              className="hover:bg-gray-700 py-2 rounded"
            >
              <FaGithub size={25}/>
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-kumar-verma-675a36332/"
              target="_blank"
              className="hover:bg-gray-700  py-2 rounded"
            >
              <FaLinkedin size={25}/>
            </a>
            <a
              href="https://www.codechef.com/users/sn1638"
              target="_blank"
              className="hover:bg-gray-700  py-2 rounded"
            >
              <SiCodechef size={25}/>
            </a>
            <a
              href="https://codeforces.com/profile/sn1638"
              target="_blank"
              className="hover:bg-gray-700  py-2 rounded"
            >
              <SiCodeforces size={25}/>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 flex justify-evenly">
                       <a
              href="https://github.com/sn1638"
              target="_blank"
              className="hover:bg-gray-700 py-2 rounded"
            >
              <FaGithub size={35}/>
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-kumar-verma-675a36332/"
              target="_blank"
              className="hover:bg-gray-700  py-2 rounded"
            >
              <FaLinkedin size={35}/>
            </a>
            <a
              href="https://www.codechef.com/users/sn1638"
              target="_blank"
              className="hover:bg-gray-700  py-2 rounded"
            >
              <SiCodechef size={35}/>
            </a>
            <a
              href="https://codeforces.com/profile/sn1638"
              target="_blank"
              className="hover:bg-gray-700  py-2 rounded"
            >
              <SiCodeforces size={35}/>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
