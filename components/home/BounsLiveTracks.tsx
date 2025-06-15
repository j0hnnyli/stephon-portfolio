import AnimateText from "../animate/AnimateTitle";
import TrackPlayerContainer from "../TrackPlayer";
import { cloudinary } from "@/lib/cloudinary";
import { TrackProps } from "@/lib/types/trackType";

export default async function BounsLiveTracks() {
  const { resources }: { resources: TrackProps[] } = await cloudinary.search
    .expression("tags=track")
    .with_field("context")
    .execute();

  return (
    <section className="max_width mx-auto px-5">
      <AnimateText>
        <h2 className="text-5xl playfair tracking-widest text-center">
          Live Tracks
        </h2>
      </AnimateText>

      <TrackPlayerContainer tracks={resources}/>
    </section>
  );
}
