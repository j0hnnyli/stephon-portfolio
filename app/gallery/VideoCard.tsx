'use client'

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

type VideoCardProps = {
  src: string
}


export function VideoCard({ src }: VideoCardProps) {
    const [activeSrc, setActiveSrc] = useState<string | null>(null)

  return (
    <>
      <div
        onClick={() => setActiveSrc(src)}
        className="relative rounded overflow-hidden w-full h-[400px] cursor-pointer"
      >
        <video
          src={src}
          preload="false"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center transition-opacity">
          <FaPlay className="text-white text-3xl" />
        </div>
      </div>

      {activeSrc && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center overflow-hidden">
          <button
            onClick={() => setActiveSrc(null)}
            className="absolute top-5 right-5 text-white text-3xl z-50 cursor-pointer"
          >
            <FaTimes />
          </button>

          <video
            src={activeSrc}
            className="w-[90%] max-w-[750px] max-h-[500px]"
            controls
            autoPlay
          />
        </div>
      )}
    </>
  )
}