import { Variants, easeOut } from "framer-motion"; 

export const staggerContainer = (
  staggerChildren : number,
  delayChildren : number,
) : Variants => {
  return {
    hidden : {},
    show : {
      transition : {
        staggerChildren,
        delayChildren
      }
    }
  }
}

export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween",
  duration?: number
): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      duration,
      ease: easeOut, 
    },
  },
});