import Link from "next/link";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default function Footer(){
  return (
    <footer className="bg-[var(--primary-color)] text-white py-16 px-5 flex flex-col gap-5 justify-center items-center max_width mx-auto">
      <div className=" text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold playfair mb-4">
          Ready to Book a Show?
        </h2>
        <p className="text-lg mb-6">
          Bring timeless soul and unforgettable energy to your next event!
        </p>
        <Link
          href="/contact"
          className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black"
        >
          Book a Live Show
        </Link>
      </div>

      <div className="flex items-center gap-5 text-2xl mt-5">
        <Link href="/"
          className="p-2 rounded-2xl hover:bg-white hover:text-black"
        >
          <FaFacebookSquare /> 
        </Link>
        
        <Link href="/"
          className="p-2 rounded-2xl hover:bg-white hover:text-black"
        >
          <FaXTwitter /> 
        </Link>

        <Link href="/"
          className="p-2 rounded-2xl hover:bg-white hover:text-black"
        >
          <FaInstagram /> 
        </Link>

        <Link href="/"
          className="p-2 rounded-2xl hover:bg-white hover:text-black"
        >
          <IoMdMail /> 
        </Link>
      </div>
      
      <div className="autograf text-4xl">
        Stephon Jones
      </div>
    </footer>
  )
}