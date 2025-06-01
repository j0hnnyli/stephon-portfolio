import { VideoCard } from "./VideoCard"
import { cloudinary } from "@/lib/cloudinary"
import { VideoType } from "@/lib/types/videoType";
import { getCloudinaryPosterUrl } from "@/lib/utils";

export default async function VideoGridWithOverlay() {
  const { resources } : { resources : VideoType[] } = await cloudinary.search.expression('tags=video').execute();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {resources .map(({asset_id, url, public_id}) => (
        <VideoCard
          key={asset_id}
          src={url}
          poster={getCloudinaryPosterUrl(public_id)}
        />
      ))}
    </div>
  )
}

