'use client'

import Lottie from 'lottie-react';
import BarsAnimationData from '@/assets/musicbarlottie.json'

export function AnimateBars(){
  return (
    <div className='w-full h-full bg-gray-500/60 flex items-center justify-center absolute z-20'>
      <Lottie animationData={BarsAnimationData} className='scale-150'/>
    </div>
  )
}