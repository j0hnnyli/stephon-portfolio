import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";


export default function Intro(){
  return (
    <div 
      className="max_width mx-auto h-[calc(100vh-80px)] max-h-[750px] w-full mb-10 relative"
    > 
      <div 
        className="relative w-full h-full"
      >
        <Image
          src="/intro.JPG"
          alt="Intro"
          priority
          fill
          className="object-cover brightness-[80%] "
        />

        <div 
          style={{
            boxShadow : 'inset  0 0 80px 40px var(--primary-color)'
          }}
          className=" relative z-20 h-full w-full"
        ></div>

        <div className="absolute bottom-0 z-30 text-white w-full md:w-[50%] h-[50%] right-0 flex flex-col items-center justify-center text-5xl playfair tracking-widest italic font-bold">
          <h2>STEPHON</h2>
          <h2>JONES</h2>
          <p className="text-lg"> - Singer  & Entertainer - </p>
        </div>
      </div> 
      
      <FaChevronDown className="absolute bottom-10 text-white z-30 text-4xl -translate-x-1/2 left-1/2 animate-bounce"/>
    </div>
  )
}