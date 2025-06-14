import Image from "next/image";
import Marquee from "react-fast-marquee";
import { allPhotos } from '@/lib/content/photos'

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
            <h2 className="text-2xl">Stephon Jones</h2>
            <p>Singer & Entertainer</p>
            <p>New York, NY</p>
          </div>
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-5xl playfair tracking-widest">Behind the Mic</h2>

          <p className="mt-10 text-lg md:w-[50%] mx-auto">
            I&apos;m a singer and entertainer with a deep passion for performing that began in church and choir. At nine years old, I had the opportunity to sing in front of 25,000 people, a moment that confirmed, this is who I am!  Since then, I&apos;ve performed at various venues and toured as The Drifters, JT Taylor of Kool & the Gang, and performed in musicals like Hair and Grease. Whether on stage or in the studio, I bring timeless, soulful energy.
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
