import { tracks } from "@/lib/content/tracks"
import TrackPlayer from "../TrackPlayer"


export default  function BounsLiveTracks(){
  return (
    <section className="max_width mx-auto px-5">
      <h2 className="text-5xl font-[--font-playfair] tracking-widest text-center"> Live Tracks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5 mt-10">
        {tracks.map(({title, src}) => (
          <div key={title} className="">
            <TrackPlayer title={title} audioSrc={src} />
          </div>        
        ))}
      </div>
    </section>
  )
}