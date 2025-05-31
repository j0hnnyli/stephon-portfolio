import { allPhotos } from "@/lib/content/photos"
import PhotoCard from "./PhotoCard"

export default async function PhotoGallery(){

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {allPhotos.map((img, i) => (
        <PhotoCard
          key={i}
          src={img}
        />
      ))}
    </div>
  )
}