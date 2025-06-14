'use client'

import { VideoType } from "@/lib/types/videoType";
import { VideoCard } from "./VideoCard"
import { getCloudinaryPosterUrl } from "@/lib/utils";
import { useState } from "react";

type Props = {
  videos : VideoType[]
}

export default function VideoGallery({ videos } : Props) {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {videos.map(({ asset_id, url, public_id }, i) => (
        <VideoCard
          key={asset_id}
          src={url}
          poster={getCloudinaryPosterUrl(public_id)}
          isActive={activeIndex === i}
          onPlay={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );
}

