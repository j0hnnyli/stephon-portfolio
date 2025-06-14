import Image from "next/image";

type Props = {
  src : string;
}

export default function PhotoCard({ src } : Props){
  return (
    <div 
      className="relative rounded-xl overflow-hidden w-full h-[400px] cursor-pointer"
    >
      <Image
        src={src}
        alt='photo'
        fill
        sizes="400"
        className="object-cover "
      />
    </div>
  )
}