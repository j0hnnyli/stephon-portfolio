'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'
import { CgChevronRight } from "react-icons/cg"
import { getCloudinaryPosterUrl } from '@/lib/utils'
import { VideoType } from '@/lib/types/videoType'
import { motion } from 'framer-motion'

type Props = {
  featuredVideos: VideoType[];
}

export default function FeaturedVideosContainer({featuredVideos} : Props) {
  const [active, setActive] = useState(() =>
    Math.floor(featuredVideos.length / 2)
  );

  const prev = () => setActive((prev) =>  prev - 1)
  const next = () => setActive((prev) => prev + 1)

  return (
    <>
      <div className="relative w-full h-[250px] md:h-[300px] flex justify-center items-center overflow-hidden mt-10">
        {featuredVideos.map(({asset_id, url, public_id}, i) => {
          const isActive = i === active
          const isPrev = i === active - 1
          const isNext = i === active + 1

          if (!isActive && !isPrev && !isNext) return null

          return (
            <motion.div
              key={asset_id}
              initial={{ rotate: 0 }}
              whileInView={{ rotate: isActive ? 0 : isPrev ? -6 : 6 }}
              transition={{ duration : 0.4, }}
              viewport={{ amount: 0.2, once: true }}
              className={twMerge(
                "absolute transition-all duration-300  ease-in-out h-auto w-full md:w-[500px]",
                isActive && "z-20",
                isPrev && "-translate-x-[280px] z-10 scale-90",
                isNext && "translate-x-[280px] z-10 scale-90"
              )}
            >
              <video
                src={url}
                controls={isActive}
                playsInline
                aria-hidden={!isActive}
                muted={!isActive}
                poster={getCloudinaryPosterUrl(public_id)}
                preload="metadata"
                className="w-full h-full object-cover mx-auto"
              />
            </motion.div>
          )
        })}
      </div>
      
      <div className="flex flex-col items-center gap-10 mt-10">
        <div className="flex items-center gap-6">
          <button disabled={active === 0} onClick={prev}>
            <FaChevronLeft className={twMerge('cursor-pointer text-2xl', active === 0 && 'invisible')}/>
          </button>

          <button disabled={active === featuredVideos.length - 1} onClick={next}>
            <FaChevronRight className={twMerge('cursor-pointer text-2xl', active === featuredVideos.length - 1 && 'invisible')}/>
          </button>
        </div>

        <Link
          href="/gallery"
          className="flex items-center gap-2 text-lg py-2 px-4 border"
        >
          <span>See All Videos</span>
          <CgChevronRight className="" />
        </Link>
      </div>
    </>
  )
}
