import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import AnimateText from "../animate/AnimateTitle";
import AnimateOpacity from "../animate/AnimateOpacity";


export default function AboutSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row max_width mx-auto mb-10 px-5">
      <div className="text-white px-5 flex flex-col justify-center items-center gap-5">
        <AnimateText>
          <h2 className="text-5xl playfair tracking-widest text-center">
            Behind the Mic
          </h2>
        </AnimateText>
        <AnimateText>
          <p className="italic">
            &quot;Bringing Timeless Soul and Energy&quot;
          </p>
        </AnimateText>

        <AnimateOpacity
          className="mx-auto text-center text-lg"
          text="From church pews to packed venues, I found a home on stage in front of
          an audience, where I share timeless soul and unforgettable energy"
          delayTime={0.008}
        />

        <Link href="/about" className="py-2 px-4 flex items-center group ">
          <span>Learn More</span>
          <HiArrowLongRight className="ml-2 group-hover:ml-4 transition-all duration-300 ease-in-out" />
        </Link>

        <AnimateOpacity
          className="autograf text-4xl w-full text-right"
          text="Stephon Jones"
          delayTime={0.1}
        />
      </div>

      <div className="w-full h-[350px] relative">
        <Image
          src="/aboutimg.jpg"
          alt="about"
          fill
          className="object-cover z-10"
        />

        <div
          style={{
            boxShadow: "inset  0 0 80px 40px var(--primary-color)",
          }}
          className="absolute z-20 h-full w-full"
        ></div>
      </div>
    </section>
  );
}
