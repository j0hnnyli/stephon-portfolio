import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";


export default function AboutSection(){
  return (
    <section className="flex flex-col-reverse md:flex-row max_width mx-auto mb-10 px-5">

      <div className="text-white px-5 flex flex-col justify-center items-center gap-5">
        <h2 className="text-5xl playfair tracking-widest text-center">Behind the Mic</h2>
        <p className="italic">&quot;Bringing Timeless Soul and Energy&quot;</p>

        <p className="mx-auto text-center text-lg">
          From church pews to packed venues, I found a home on stage in front of an audience, where I share timeless soul and unforgettable energy
        </p>

        <Link href="/about"
          className="py-2 px-4 flex items-center group "
        > 
          <span>Learn More</span>
          <HiArrowLongRight className="ml-2 group-hover:ml-4 transition-all duration-300 ease-in-out"/>
        </Link>

        <p className="autograf text-4xl w-full text-right">Stephon Jones</p>
      </div>
     
      <div 
        className="w-full h-[350px] relative"
      >
        <Image 
          src="/aboutimg.jpg"
          alt="about"
          fill
          className="object-cover z-10"
        />

        <div 
          style={{
            boxShadow : 'inset  0 0 80px 40px var(--primary-color)'
          }}
          className="absolute z-20 h-full w-full"
        ></div>
      </div>
    </section>
  )
}