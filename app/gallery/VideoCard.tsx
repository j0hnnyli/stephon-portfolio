'use client'

import { useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

type VideoCardProps = {
  src: string;
  poster: string;
  isActive: boolean;
  onPlay: () => void;
};

export function VideoCard({ src, poster, isActive, onPlay }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      onClick={() => {
        if (!isActive) onPlay();
      }}
      className="relative rounded-xl overflow-hidden w-full h-[400px] cursor-pointer group"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={isActive}
        playsInline
        className={twMerge("w-full h-full object-cover", isActive && 'object-contain')}
      />

      {!isActive && (
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition-opacity">
          <FaPlay className="text-white text-3xl" />
        </div>
      )}
    </div>
  );
}
