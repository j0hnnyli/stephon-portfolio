import Link from "next/link";
import { FaMicrophoneLines } from "react-icons/fa6";
import { navLinks } from "@/lib/content/navLinks";


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
          {navLinks.map(({label, href}) => (
            <Link key={label} href={href}
              className="group relative"
            > 
              {label} 
              <span className="absolute left-0 bottom-[-1px] h-[1px] w-full scale-x-0 bg-white origin-left group-hover:scale-x-100 rounded-xl transition-all duration-300 ease-in-out"/>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}