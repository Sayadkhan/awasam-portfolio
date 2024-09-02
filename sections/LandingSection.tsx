import Header from "@/components/navigation/Header";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";
import ScrollDown from "@/components/ui/ScrollDown";
import MagnaticWrapper from "@/components/visualEffect/MagnaticWrapper";
import { FaArrowRight } from "react-icons/fa";

const LandingSection = () => {
  return (
    <div className="relative h-screen overflow-hidden p-8">
      <Header />

      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagnaticWrapper>
          <FancyButton text="Contract Me" icon={<FaArrowRight />} />
        </MagnaticWrapper>
      </div>

      {/* live clokc */}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="Asia/Dhaka" />
      </div>

      {/* slogan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[0.3rem]">
        <div className="flex flex-col items-center justify-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
          <div>
            <span>code</span>
          </div>
          <div>
            <span>Crafting</span>
          </div>
          <div className="relative">
            <span>Brillance</span>
            <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal">
              <span>impowering inovation</span>
              <br />
              <span>impowering inovation</span>
              <br />
              <span>impowering inovation</span>
              <br />
              <span>impowering inovation</span>
            </div>
          </div>
        </div>
      </div>
      {/* magnatice scroll down */}

      <MagnaticWrapper className="absulate left-1/2 -translate-x-1/2 -bottom-[20rem] md:-bottom-[30rem]">
        <ScrollDown />
      </MagnaticWrapper>
    </div>
  );
};

export default LandingSection;
