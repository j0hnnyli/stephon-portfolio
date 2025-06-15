'use client'

import Image from "next/image";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import { ChangeEvent, RefObject, useRef, useState } from "react";
import { AnimateBars } from "./AnimateBars";
import { useAudioPlayer } from "@/lib/hooks/useAudioPlayer";
import { motion } from 'framer-motion'
import { TrackProps } from "@/lib/types/trackType";
import { fadeIn, staggerContainer } from "@/lib/motion";

type TrackPlayerContainerProps = {
  tracks : TrackProps[]
}

export default function TrackPlayerContainer( {tracks} : TrackPlayerContainerProps){
  const [activeTrackIndex, setActiveTrackIndex] = useState<number | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <motion.div 
      variants={staggerContainer(0.2, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5 mt-10 overflow-hidden"
    >
      {tracks.map(({ url, asset_id, context }, i) => (
        <motion.div 
          variants={fadeIn('left', 'spring', 0.4)}
          key={asset_id}
        >
          <TrackPlayer 
            title={context.caption} 
            url={url} 
            isActive={activeTrackIndex === i}
            onActivate={() => setActiveTrackIndex(i)}
            currentAudioRef={currentAudioRef}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

type TrackPlayerProps = {
  url: string;
  title: string;
  isActive: boolean;
  onActivate: () => void;
  currentAudioRef: RefObject<HTMLAudioElement | null>;
};


const formatTime = (durSecs: number) => {
  const minutes = Math.floor(durSecs / 60);
  const seconds = Math.floor(durSecs % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

function TrackPlayer({ url, title, isActive, onActivate, currentAudioRef }: TrackPlayerProps) {
  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    play,
    pause,
    seek,
    restart,
  } = useAudioPlayer(url);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentAudioRef.current && currentAudioRef.current !== audio) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    currentAudioRef.current = audio;
    onActivate();
    play();
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    seek(parseFloat(e.target.value));
  };

  return (
    <div className="flex gap-2 mx-auto ">
      <div className="relative w-[75px] h-[75px] overflow-hidden rounded-xl">
        <Image
          src="/trackcover.jpg"
          alt="track cover"
          fill
          sizes="75"
          className="object-cover z-10"
        />
        {isPlaying && isActive && <AnimateBars />}
      </div>

      <div className="flex flex-col justify-between w-full">
        <h2 className="playfair text-xl">{title}</h2>

        <div className="flex items-center">
          {currentTime === duration && duration !== 0 ? (
            <button onClick={restart} className="text-2xl cursor-pointer">
              <VscDebugRestart />
            </button>
          ) : (
            <button className="text-2xl cursor-pointer">
              {isPlaying && isActive ? (
                <IoIosPause onClick={pause} />
              ) : (
                <IoIosPlay onClick={handlePlay} />
              )}
            </button>
          )}

          <div className="flex items-center gap-5 w-full">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-[80%]"
            />
            
            <div className="flex gap-[2px] text-xs w-[75px]">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={url} preload="metadata" />
      </div>
    </div>
  );
}



