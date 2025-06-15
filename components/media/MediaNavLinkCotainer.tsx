'use client'

import Link from "next/link";
import {
  SheetClose,
} from "@/components/ui/sheet";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/lib/motion";
import { navLinks } from "@/lib/content/navLinks";

export default function MediaNavLinksContainer(){
  return (    
    <motion.div 
      variants={staggerContainer(0.2, 0.2)}
      initial='hidden'
      whileInView='show'
      className="flex flex-col justify-center items-center gap-5 text-xl"
    >
      {navLinks.map(({label, href}) => (
        <motion.div 
          variants={fadeIn('left', 'spring', 0.4)}
          key={label}
        >
          <Link href={href}> 
            <SheetClose>
              {label}
            </SheetClose>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}