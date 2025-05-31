import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max_width mx-auto px-5 py-16 flex flex-col md:flex-row gap-5">

      <div className="text-5xl font-[--font-playfair] tracking-widest italic font-bold w-full text-center md:text-left">
        <h2>Contact Me</h2>
        <p className="text-lg">- Timeless & Pure -</p>
      </div>

      <div className="w-full">
        <p className="">
          Got an event in mind? For inquiries, bookings, or just to say hello, feel free to reach out!
        </p>

        <div className="mt-10">
          <h2 className="text-2xl">Contact Infomation</h2>

          <div className="flex items-center mt-5 gap-5">
            <div className="flex items-center justify-center p-3 rounded-2xl bg-slate-800">
              <IoMdMail className="text-3xl"/> 
            </div>
            <div>
              <p>Email</p>
              <p>Stephj222@aol.com</p>
            </div>
          </div>
          
          <div className="flex items-center mt-5 gap-5">
            <div className="flex items-center justify-center p-3 rounded-2xl bg-slate-800">
              <FaPhoneAlt className="text-3xl"/> 
            </div>
            <div>
              <p>Phone</p>
              <p>(555) 555-5555</p>
            </div>
          </div>
        </div>
      
        <div className="mt-10">
          <h2 className="text-2xl">Social Media</h2>

          <div className="flex items-center mt-5 gap-5">
            <Link href="/" 
              className="flex items-center justify-center p-3 rounded-2xl bg-slate-800 hover:bg-white hover:text-black"
            >
              <FaFacebookSquare className="text-3xl"/> 
            </Link>
            
            <p>Facebook</p>
          </div>
          
          <div className="flex items-center mt-5 gap-5">
            <Link href="/"  
              className="flex items-center justify-center p-3 rounded-2xl bg-slate-800 hover:bg-white hover:text-black"
            >
              <FaInstagram className="text-3xl"/> 
            </Link>
            <p>Instagram</p>
          </div>
          
          <div className="flex items-center mt-5 gap-5">
            <Link href="/" 
              className="flex items-center justify-center p-3 rounded-2xl bg-slate-800 hover:bg-white hover:text-black"
            >
              <FaXTwitter className="text-3xl"/> 
            </Link>
            <p>Twitter/X</p>
          </div>
        </div>

      </div>
    </div>
  );
}




