import Image from "next/image";
import Marquee from "react-fast-marquee";
import { allPhotos } from '@/lib/content/photos'
import AnimateTitle from "@/components/animate/AnimateTitle";

function create2dArray(array : string[]){
  const res : string[][] = [];
  let innerArray : string[] = [];
  
  array.forEach((img) => {
    innerArray.push(img)

    if(innerArray.length === 3){
      res.push(innerArray)
      innerArray = []
    }
  })

  if (innerArray.length > 0) {
    res.push(innerArray);
  }

  return res;
}

const height = 250

export default function AboutPage() {
  return (
    <>
      <div className="max_width mx-auto py-16 px-5">
        <section className="flex flex-col justify-center items-center playfair tracking-widest gap-5 font-bold">
          <div className="w-[150px] h-[150px] overflow-hidden rounded-[100%] ">
            <Image
              src="/intro.JPG"
              alt="badge"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <AnimateTitle>
              <h2 className="text-2xl">Stephon Jones</h2>
            </AnimateTitle>
            <AnimateTitle>
              <p>Singer & Entertainer</p>
            </AnimateTitle>
            <AnimateTitle>
              <p>New York, NY</p>
            </AnimateTitle>
          </div>
        </section>

        <section className="mt-10">
          <AnimateTitle>
            <h2 className="text-5xl playfair tracking-widest text-center">Behind the Mic</h2>
          </AnimateTitle>
          <p className="mt-10 text-lg md:w-[50%] mx-auto">
            I&apos;m a singer and entertainer with a deep passion for performing that began in the heart of my community, singing in church and school choir. Music was more than just sound growing up, it was connection, expression, and a source of joy. At just nine years old, I stood on stage in front of 25,000 people and sang my heart out. That moment didn&apos;t just shape me, it defined me. I knew then and there: this is who I am.  
          </p>
          <p className="mt-10 text-lg md:w-[50%] mx-auto">
            Since that day, I&apos;ve poured myself into the craft. I&apos;ve performed across countless stages—from intimate lounges to international tours as a member of The Drifters, alongside JT Taylor of Kool & the Gang, and was even casted in celebrated musicals like Hair and Grease. These experiences sharpened my artistry and deepened my love for live performance.
          </p>

          <p className="mt-10 text-lg md:w-[50%] mx-auto">
            Whether I&apos;m delivering a soulful ballad in the studio or igniting a crowd on stage, I bring timeless energy, heartfelt emotion, and an unwavering commitment to making each performance unforgettable. Music isn&apos;t just something I do, it&apos;s where I come alive.
          </p>
        </section>
      </div>

      <Marquee className="overflow-hidden">
        {create2dArray(allPhotos).map(([img1, img2, img3], i) => (
          <div key={i}
            className="flex gap-2 mx-1"
          >
            {img1 && (
              <div style={{ height: `${height}px` }} className='w-[150px] relative'>
                <Image
                  src={img1}
                  alt={img1}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div style={{ height: `${height}px` }} className='flex flex-col gap-2 justify-between'>
              {img2 && (
                <div style={{ height: `${height / 2}px` }} className="w-[150px] relative">
                  <Image
                    src={img2}
                    alt="Marquee image 2"
                    fill
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {img3 && (
                <div style={{ height: `${height / 2}px` }} className="w-[150px] relative">
                  <Image
                    src={img3}
                    alt="Marquee image 3"
                    fill
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
}
