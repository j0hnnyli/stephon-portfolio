'use client'

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function ContactContainer(){
  return (
    <motion.div 
      variants={staggerContainer(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2, once:false }}
      className="mt-5"
    >
      <motion.div 
        variants={fadeIn('left', 'spring', 0.4)}
        className="flex items-center gap-5"
      >
        <Link href="mailto:Stephj222@aol.com"
          target="_blank" 
          className="flex items-center justify-center p-3 rounded-xl bg-slate-800 hover:bg-white hover:text-black"
        >
          <IoMdMail className="text-3xl"/> 
        </Link>
        <div>
          <p>Email</p>
          <p>Stephj222@aol.com</p>
        </div>
      </motion.div>
      
      <motion.div 
        variants={fadeIn('left', 'spring', 0.4)}
        className="flex items-center mt-5 gap-5"
      >
        <div className="flex items-center justify-center p-3 rounded-xl bg-slate-800">
          <FaPhoneAlt className="text-3xl"/> 
        </div>
        <div>
          <p>Phone</p>
          <p>(555) 555-5555</p>
        </div>
      </motion.div>
    </motion.div>
  )
}