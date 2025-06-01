import TrackPlayer from "../TrackPlayer"
import { cloudinary } from "@/lib/cloudinary"

type TrackProps = {
  url : string;
  title: string;
  asset_id : string;
  context: { caption: string },
}

export default async function BounsLiveTracks(){
  const { resources } : { resources : TrackProps[] } = await cloudinary.search.expression('tags=track').with_field('context').execute();

  return (
    <section className="max_width mx-auto px-5">
      <h2 className="text-5xl font-[--font-playfair] tracking-widest text-center"> Live Tracks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5 mt-10">
        {resources.map(({url, asset_id, context}) => (
          <div key={asset_id} className="">
            <TrackPlayer title={context.caption} url={url} />
          </div>        
        ))}
      </div>
    </section>
  )
}