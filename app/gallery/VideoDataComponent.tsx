import { VideoType } from "@/lib/types/videoType";
import { cloudinary } from "@/lib/cloudinary";
import VideoGallery from "./VideoGallery";

export default async function VideoDataComponent() {
  const { resources }: { resources: VideoType[] } = await cloudinary.search.expression('tags=video').execute();

  return <VideoGallery videos={resources} />;
}
