import FeaturedVideosContainer from "../FeaturedVideosContainer";
import { cloudinary } from "@/lib/cloudinary";

export default async function FeaturedzVideos() {
  const { resources } = await cloudinary.search.expression('tags=featured-video').execute();

  return (
    <section className="mb-10 max_width mx-auto px-5">
      <h2 className="text-5xl playfair text-center tracking-widest mb-10">
        Featured Videos
      </h2>

      <FeaturedVideosContainer featuredVideos={resources}/>
    </section>
  )
}
