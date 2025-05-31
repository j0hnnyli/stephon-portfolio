import { allVideos } from "@/lib/content/videos"
import { VideoCard } from "./VideoCard"

export default function VideoGridWithOverlay() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {allVideos .map(({src, poster}, i) => (
        <VideoCard
          key={i}
          src={src}
          poster={poster}
        />
      ))}
    </div>
  )
}

