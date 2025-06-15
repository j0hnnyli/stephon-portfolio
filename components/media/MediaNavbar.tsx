import { FaMicrophoneLines } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MediaNavLinksContainer from "./MediaNavLinkCotainer";
import Link from "next/link";

export default function MediaNavbar(){
  return (
    <nav className="fixed  md:hidden top-0 w-full z-40 bg-[var(--primary-color)] text-white h-20">
      <div className="max_width mx-auto p-5 flex items-center justify-between h-20 "> 
        <Link href='/' className="autograf text-xl flex items-center gap-2">
          <FaMicrophoneLines className="text-white"/>
          <h2>
            S. Jones
          </h2>
        </Link>

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
            
            <MediaNavLinksContainer />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}