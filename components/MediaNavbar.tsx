import Link from "next/link";
import { FaMicrophoneLines } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function MediaNavbar(){
  return (
    <nav className="fixed  md:hidden top-0 w-full z-40 bg-[var(--primary-color)] text-white h-20">
      <div className="max_width mx-auto p-5 flex items-center justify-between h-20 "> 
        <div className="autograf text-xl flex items-center gap-2">
          <FaMicrophoneLines className="text-white"/>
          <h2>
            S. Jones
          </h2>
        </div>

        <Sheet>
          <SheetTrigger>
            <CiMenuFries className="text-xl"/>
          </SheetTrigger>
          <SheetContent className="bg-[var(--primary-color)] border-none">
            <SheetHeader className="flex items-center justify-center mt-20">
              <SheetTitle>
                <FaMicrophoneLines className="text-white text-6xl"/>
              </SheetTitle>
              <SheetDescription className="autograf text-5xl">
                S. Jones
              </SheetDescription>
            </SheetHeader>
            
            <div className="flex flex-col justify-center items-center gap-5 text-xl">
              <Link href='/'> 
                <SheetClose>
                  Home 
                </SheetClose>
              </Link>
              <Link href='/about'> 
                <SheetClose>
                  About 
                </SheetClose>
              </Link>              
              <Link href='/gallery'> 
                <SheetClose>
                  Gallery 
                </SheetClose>
              </Link>
              <Link href='/contact'> 
                <SheetClose>
                  Contact 
                </SheetClose>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}