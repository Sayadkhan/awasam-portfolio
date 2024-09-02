import Header from "@/components/navigation/Header";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";
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
    </div>
  );
};

export default LandingSection;
