'use client'

import { ReactNode } from "react";
import {motion} from 'framer-motion'

export default function AnimateTitle({children} : {children : ReactNode}){
  return (
   <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{once: true}}
      >
        {children}
      </motion.div>
    </div>
  )
}