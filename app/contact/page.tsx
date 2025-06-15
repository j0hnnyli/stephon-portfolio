import AnimateTitle from "@/components/animate/AnimateTitle";
import ContactContainer from "./ContactContainer";
import SocialContainer from "./SocialContainer";
import AnimateOpacity from "@/components/animate/AnimateOpacity";

export default function ContactPage() {
  return (
    <div className="max_width mx-auto px-5 py-16 flex flex-col md:flex-row gap-5">

      <div className="text-5xl playfair tracking-widest italic font-bold w-full text-center md:text-left">
        <AnimateTitle>
          <h2>Contact Me</h2>
        </AnimateTitle>
        <AnimateTitle>
          <p className="text-lg">Timeless & Pure</p>
        </AnimateTitle>
      </div>

      <div className="w-full">
        <AnimateOpacity
          text="Got an event in mind? For inquiries, bookings, or just to say hello, feel free to reach out!"
          delayTime={0.005}
        />

        <div className="mt-10 overflow-hidden">
          <AnimateTitle>
            <h2 className="text-2xl playfair">Contact Infomation</h2>
          </AnimateTitle>

          <ContactContainer />
        </div>
      
        <div className="mt-10 overflow-hidden">
          <AnimateTitle>
            <h2 className="text-2xl playfair">Social Media</h2>
          </AnimateTitle>

          <SocialContainer />
        </div>

      </div>
    </div>
  );
}




