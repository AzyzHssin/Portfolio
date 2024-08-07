import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
// import Link from 'next/link';




export default function Header() {

  const socials = [
    {
      _id: 1,
      url:"https://www.linkedin.com/in/emna-nefzi-76b25227a/",
    },
    {
      _id: 2,
      url: "https://github.com/AzyzHssin",
    },
    {
      _id: 3,
      url:"https://www.facebook.com/emna.nefzi.73",
    },
    {
      _id:4,
      url:"https://api.whatsapp.com/send?phone=94137608"
    }
  ]
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
       
       <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
       {/* social icons */}
       
       {socials.map((social) => (
         <SocialIcon 
         key={social._id}
            url={social.url}
            fgColor='gray' 
            bgColor='transparent' 
            />

       ))}
        </motion.div>
        <a href="#contact">

        <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
        className='cursor-pointer'
        network='email'
        fgColor='gray' 
        bgColor='transparent' 
        />  
       <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
        Get In Touch
        </p>
        </motion.div>
        </a>
        </header>
  )
}