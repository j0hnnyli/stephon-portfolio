'use client'

import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function SocialContainer(){
  return (
    <motion.div 
      variants={staggerContainer(0.2, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ amount: 0.2, once: true }}
      className="mt-5"
    >
      <motion.div 
        variants={fadeIn('left', 'spring', 0.4)}
        className="flex items-center gap-5"
      >
        <Link href="/" 
          className="flex items-center justify-center p-3 rounded-xl bg-slate-800 hover:bg-white hover:text-black"
        >
          <FaFacebookSquare className="text-3xl"/> 
        </Link>
        
        <p>Facebook</p>
      </motion.div>
      
      <motion.div
        variants={fadeIn('left', 'spring', 0.4)} 
        className="flex items-center mt-5 gap-5"
      > 
        <Link href="/"  
          className="flex items-center justify-center p-3 rounded-xl bg-slate-800 hover:bg-white hover:text-black"
        >
          <FaInstagram className="text-3xl"/> 
        </Link>
        <p>Instagram</p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn('left', 'spring', 0.4)}
        className="flex items-center mt-5 gap-5"
      >
        <Link href="/" 
          className="flex items-center justify-center p-3 rounded-xl bg-slate-800 hover:bg-white hover:text-black"
        >
          <FaXTwitter className="text-3xl"/> 
        </Link>
        <p>Twitter/X</p>
      </motion.div>
    </motion.div>
  )
}