import AboutSection from "@/components/home/About";
import BounsLiveTracks from "@/components/home/BounsLiveTracks";
import FeaturedzVideos from "@/components/home/FeaturesVideos";
import Intro from "@/components/home/Intro";

export default function Home() {
  return (
    <>
      <Intro />
      <AboutSection />
      <FeaturedzVideos />
      <BounsLiveTracks />
    </>
  );
}
