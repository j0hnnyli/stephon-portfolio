import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdInsertPhoto } from "react-icons/md";
import PhotoGallery from "./PhotoGallery";
import VideoDataComponent from "./VideoDataComponent";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import AnimateTitle from "@/components/animate/AnimateTitle";



export default function Gallery(){
  return (
    <div className="max_width mx-auto py-16 px-5">
      <div className="flex flex-col items-center justify-center text-5xl playfair tracking-widest italic font-bold">
        <AnimateTitle>
          <h2 className="text-5xl tracking-widest text-center">MY GALLERY</h2>
        </AnimateTitle>
        <AnimateTitle>
          <p className="text-lg">Performances & Photos</p>
        </AnimateTitle>
      </div>

      <Tabs defaultValue="videos" className="w-full flex justify-center items-center mt-10  bg-transparent">
        <TabsList className="bg-transparent">
          <TabsTrigger 
            value="videos" 
            className="data-[state=inactive]:bg-[var(--primary-color)] data-[state=inactive]:border-none data-[state=active]:bg-transparent data-[state=active]:rounded-none data-[state=active]:border-b-2 border-b-white text-white px-4 py-2 rounded-md transition cursor-pointer p-5"
          >
            <BiSolidMoviePlay className="!w-8 !h-8"/>
          </TabsTrigger>
          <TabsTrigger 
            value="photos"
            className="data-[state=inactive]:bg-[var(--primary-color)] data-[state=inactive]:border-none data-[state=active]:bg-transparent data-[state=active]:rounded-none data-[state=active]:border-b-2 border-b-white text-white px-4 py-2 rounded-md transition cursor-pointer p-5"
          >
            <MdInsertPhoto className="!w-8 !h-8"/>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="w-full">
          <Suspense fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              <Skeleton className="bg-gray-500 rounded-xl h-[400px]"/>
              <Skeleton className="bg-gray-500 rounded-xl h-[400px]" />
              <Skeleton className="bg-gray-500 rounded-xl h-[400px]"/>
            </div>
          }>
            <VideoDataComponent />
          </Suspense>
        </TabsContent>

        <TabsContent value="photos" className="w-full">
          <div className="mt-5">
            <PhotoGallery />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}