import { useRef, useState, useEffect, useCallback } from "react";

export function useAudioPlayer(audioSrc: string) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const play = useCallback(() => {
    if(!audioRef.current) return;
    audioRef.current.play();
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    if(!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const seek = (time: number) => {
    if(!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const restart = () => {
    seek(0);
    play();
  };

  useEffect(() => {
    const audio = audioRef.current;
    if(!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    audio.load();

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioSrc]);

  return {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    play,
    pause,
    seek,
    restart,
  };
}
