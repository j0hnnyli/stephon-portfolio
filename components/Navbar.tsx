import Link from "next/link";
import { FaMicrophoneLines } from "react-icons/fa6";


export default function Navbar(){
  return (
    <nav className="hidden md:inline-block fixed top-0 w-full z-40 bg-[var(--primary-color)] text-white">
      <div className="max_width mx-auto p-5 flex items-center justify-between h-20 "> 
        <div className="autograf text-xl flex items-center gap-2">
          <FaMicrophoneLines className="text-white"/>
          <h2>
            S. Jones
          </h2>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Link href='/'> Home </Link>
          <Link href='/about'> About </Link>
          <Link href='/gallery'> Gallery </Link>
          <Link href='/contact'> Contact </Link>
        </div>
      </div>
    </nav>
  )
}