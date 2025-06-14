'use client'

import Image from "next/image";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import { ChangeEvent } from "react";
import { AnimateBars } from "./AnimateBars";
import { useAudioPlayer } from "@/lib/hooks/useAudioPlayer";

type TrackPlayerProps = {
  url: string;
  title: string;
};
let currentAudio: HTMLAudioElement | null = null;

const formatTime = (durSecs: number) => {
  const minutes = Math.floor(durSecs / 60);
  const seconds = Math.floor(durSecs % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export default function TrackPlayer({ url, title }: TrackPlayerProps) {
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

    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    play();
    currentAudio = audio;
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
        {isPlaying && currentAudio === audioRef.current && <AnimateBars />}
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
              {isPlaying && currentAudio === audioRef.current ? (
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
