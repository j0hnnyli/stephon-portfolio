import AboutSection from "@/components/home/About";
import BounsLiveTracks from "@/components/home/BounsLiveTracks";
import FeaturedzVideos from "@/components/home/FeaturesVideos";
import Intro from "@/components/home/Intro";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Intro />
      <AboutSection />
      
      <Suspense fallback={<Skeleton className="bg-gray-500 h-[500px] rounded-xl max_width mx-auto my-5"/>}>
        <FeaturedzVideos />
      </Suspense>

      <Suspense fallback={<Skeleton className="bg-gray-500 h-56 rounded-xl max_width mx-auto my-5"/>}>
        <BounsLiveTracks />
      </Suspense>
    </>
  );
}
