'use client'

import Lottie from 'lottie-react';
import musicNotes from '@/assets/musicnotesanimation.json'


export default function MusicNote(){
  return (
    <Lottie animationData={musicNotes} className='w-full h-full absolute z-10'/>
  )
}